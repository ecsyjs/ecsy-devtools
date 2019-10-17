import Vue from 'vue';
import App from './App';

var app = new Vue({
  el: '#app',
  render: h => h(App)
});

var globalBrowser =  chrome || browser;

var backgroundPageConnection = chrome.runtime.connect({
	name: "devtools"
});
/*
globalBrowser.browserAction.setIcon({
  path: {
    "128": '../../assets/icon_128.png'
  }
});
*/

backgroundPageConnection.postMessage({
	name: 'init',
	tabId: chrome.devtools.inspectedWindow.tabId
});

backgroundPageConnection.onMessage.addListener(m => {
  processMessage(m);
  // @todo Add option to toggle debug document.getElementById("debug").innerHTML = JSON.stringify(m, null, 2);
});

function processMessage(msg) {
  var appData = app.$children[0];
  if (msg.method === 'reset') {
    reset();
  }
  else if (msg.method === 'worldCreated') {
    /*
    globalBrowser.browserAction.setIcon({
      path: {
        "128": '../../assets/icon_128_detected.png'
      }
    });
    */
  } else if (msg.method === 'refreshData') {
    var totalNumComponents = Object.values(msg.data.components).reduce((a,i) => a+i);
    appData.stats.numComponents.push(totalNumComponents);

    for (let name in msg.data.components) {
      var num = msg.data.components[name];
      if (!appData.stats.components[name]) {
        appData.stats.components[name] = [];
      }

      //appData.stats.components[name].push(num + Math.random() * 30);
    }

    window.stats = appData.stats;
    appData.data = msg.data;
    appData.frame++;
    appData.numEntities = msg.data.numEntities;
    appData.systems = msg.data.systems;
    appData.queries = msg.data.queries;
    appData.components = msg.data.components;
    appData.world = msg.data.world;
  }
}

function reset() {
  app.$children[0].data = {};
  app.$children[0].components = {};
  app.$children[0].systems = [];
  app.$children[0].numEntities = 0;
  app.$children[0].queries = [];
}

window.ecsyDevtools = {

  toggleWorld: function (enabled) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.${(enabled ? 'stop' : 'play')}()`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepNextSystem: function() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      var systemManager = ${world}.systemManager;
      var nextSystem = systemManager._executeSystems[(systemManager._executeSystems.indexOf(systemManager.lastExecutedSystem)+1)%systemManager._executeSystems.length];
      systemManager.executeSystem(nextSystem, 1/60, performance.now() / 1000);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepWorld: function () {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      ${world}.systemManager.execute(1/60, performance.now() / 1000);
      ${world}.entityManager.processDeferredRemoval();
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  soloPlaySystem: function(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.forEach(s => {
      if (s.constructor.name === '${system.name}') {
        if (!s.enabled) {
          s.play();
        }
      } else {
        s.stop();
      }
    })`;

    globalBrowser.devtools.inspectedWindow.eval(string);

    var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').play()`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  toggleSystem: function(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`;
    //system.enabled = !system.enabled;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepSystem: function(system) {
    debugger;
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      var system = ${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}');
      ${world}.systemManager.executeSystem(system, 1/60, performance.now() / 1000);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  playSystems: function() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.forEach(s => s.play());`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stopSystems: function() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.forEach(s => s.stop());`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
}
