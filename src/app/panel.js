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
  else if (msg.method === 'refreshData') {
    appData.numEntities = msg.data.numEntities;
    appData.systems = msg.data.systems;
    appData.queries = msg.data.queries;
    appData.components = msg.data.components;
  }
  else if (msg.method === 'registerComponent') {
    registerComponent(msg.data);
  }
  else if (msg.method === 'registerSystem') {
    registerSystem(msg.data);
  } else if (msg.method === 'refreshQueries') {
    var c = msg.data;
    app.$children[0].queries = c;
  } else if (msg.method === 'refreshSystems') {
    var c = msg.data;
    app.$children[0].systems = c;
  }
}

function reset() {
  app.$children[0].components = {};
  components = {};
  app.$children[0].systems = [];
  app.$children[0].numEntities = 0;
  app.$children[0].queries = [];
}

window.toggleSystem = function(system) {
  var string = `world.systemManager.systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`
  system.enabled = !system.enabled;
  system.executeTime = 0;
  browser.devtools.inspectedWindow.eval(string);
  console.log('Toggling', string, system)
}

window.stepSystem = function(system) {
  var string = `
    var system = world.systemManager.systems.find(s => s.constructor.name === '${system.name}');
    system.execute(1/60, performance.now());
  `;
  browser.devtools.inspectedWindow.eval(string);
}