var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

function log() {
	var args = Array.from(arguments);
 	args.unshift('background: #9999ff; color: #ffffff;');
	args.unshift(`%c ECSY Background `);

	console.log.apply( console, args );
}

// background.js
var connections = {};

chrome.runtime.onMessage.addListener(
  function(request, sender) {
    if (request.method === 'worldCreated') {
      setIconAndPopup('detected', sender.tab.id);
    }
  }
);

chrome.runtime.onConnect.addListener(function (port) {
  log('Onconnect');
  var extensionListener = function (message, sender, sendResponse) {
    // The original connection event doesn't include the tab ID of the
    // DevTools page, so we need to send it explicitly.
    if (message.name == "init") {
      log('connected', message.tabId);
      connections[message.tabId] = port;
      return;
    }
  }

  // Listen to messages sent from the DevTools page
  port.onMessage.addListener(extensionListener);

  port.onDisconnect.addListener(function(port) {
    port.onMessage.removeListener(extensionListener);

      var tabs = Object.keys(connections);
      for (var i=0, len=tabs.length; i < len; i++) {
        if (connections[tabs[i]] == port) {
          delete connections[tabs[i]]
          break;
        }
      }
  });
});

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Messages from content scripts should have sender.tab set
  if (sender.tab) {
    var tabId = sender.tab.id;
    if (tabId in connections) {
      connections[tabId].postMessage(request);
    } else {
      log("Tab not found in connection list.");
    }
  } else {
    log("sender.tab not defined.");
  }
  return true;
});

function setIconAndPopup(type, tabId) {
  chrome.browserAction.setIcon({
    tabId: tabId,
    path: {
      '32': '../../assets/icon_32_' + type + '.png',
      '48': '../../assets/icon_48_' + type + '.png',
      '64': '../../assets/icon_64_' + type + '.png',
      '128': '../../assets/icon_128_' + type + '.png'
    },
  });

  chrome.browserAction.setPopup({
    tabId: tabId,
    popup: 'src/extension/popups/' + type + '.html',
  });

  chrome.browserAction.setTitle({
    tabId: tabId,
    title: type === 'disabled' ? 'ECSY not detected on this page' : 'ECSY detected on this page'
  });
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === 'loading') {
    setIconAndPopup('disabled', tabId);
    if (tabId in connections) {
      connections[tabId].postMessage({
        id: 'ecsy-devtools',
        method: 'disabled'
      });
    } else {
      // log('Tab ID undefined in', tabId, connections)
    }
  }
});

log("Background file loaded");
