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
    appData.world = msg.data.world;
  }
}

function reset() {
  app.$children[0].components = {};
  components = {};
  app.$children[0].systems = [];
  app.$children[0].numEntities = 0;
  app.$children[0].queries = [];
}

window.ecsyDevtools = {
  toggleWorld: function (enabled) {
    var string = `world.${(enabled ? 'stop' : 'play')}()`;
    browser.devtools.inspectedWindow.eval(string);
  },
  stepWorld: function () {
    var string = `
      world.systemManager.execute(1/60, performance.now());
      world.entityManager.processDeferredRemoval();
    `;
    browser.devtools.inspectedWindow.eval(string);
  },
  toggleSystem: function(system) {
    var string = `world.systemManager.systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`;
    system.enabled = !system.enabled;
    browser.devtools.inspectedWindow.eval(string);
  },
  stepSystem: function(system) {
    var string = `
      var system = world.systemManager.systems.find(s => s.constructor.name === '${system.name}');
      system.execute(1/60, performance.now());
    `;
    browser.devtools.inspectedWindow.eval(string);
  }
}

