import Vue from 'vue';
import App from './App';

var app = new Vue({
  el: '#app',
  render: h => h(App)
});

var components = {};
var systems = [];
/*
document.getElementById("button").addEventListener('click', () => {
  document.getElementById("Rotating").innerHTML = '11111212112121';
  app.$children[0].components = components;
  for (var i in components) {
    app.$children[0].components[i]--;
    app.$children[0].components[i]++;
  }

})
*/
var globalBrowser =  chrome || browser;

var backgroundPageConnection = chrome.runtime.connect({
	name: "devtools"
});

backgroundPageConnection.postMessage({
	name: 'init',
	tabId: chrome.devtools.inspectedWindow.tabId
});

/*
backgroundPageConnection.onMessage.addEventListener(m => {
  document.getElementById("Rotating").innerHTML = 'dddd3333';
});
*/


backgroundPageConnection.onMessage.addListener(m => {
  processMessage(m);
//  document.getElementById("debug").innerHTML = JSON.stringify(m);
});


function processMessage(msg) {
  if (msg.method === 'reset') {
    reset();
  }
  else if (msg.method === 'refreshStats') {
    for (var i=0; i< app.$children[0].systems.length; i++) {
      var system = msg.data.find(s => s.name === app.$children[0].systems[i].name);
      app.$children[0].systems[i].executeTime = app.$children[0].systems[i].enabled ? system.executeTime : 0;
    }
  }
  else if (msg.method === 'registerComponent') {
    registerComponent(msg.data);
  }
  else if (msg.method === 'registerSystem') {
    registerSystem(msg.data);
  }
  else if (msg.method === 'createEntity') {
    app.$children[0].numEntities++;
  }
  else if (msg.method === 'addComponent') {
    var c = msg.data;
    changeNumComponent(c, 1);
  } else if (msg.method === 'removeComponent') {
    var c = msg.data;
    changeNumComponent(c, -1);
  } else if (msg.method === 'addQuery') {
    var c = msg.data;
    app.$children[0].queries.push({
      key: c.key,
      numEntities: c.numEntities,
      components: c.components,
    });
  } else if (msg.method === 'refreshQueries') {
    var c = msg.data;
    app.$children[0].queries = c;
  } else if (msg.method === 'refreshSystems') {
  var c = msg.data;
  app.$children[0].systems = c;
}
}

function changeNumComponent(c, inc) {
  if (typeof components[c] === 'undefined') {
    components[c] = 0;
  }
  components[c]+=inc;

  var n = components[c];

  app.$children[0].components = components;

  for (var i in components) {
    app.$children[0].components[i]--;
    app.$children[0].components[i]++;
  }
}

function registerComponent(c) {
  return;
  if (!components[c]) {
    components[c] = 0;
  }
  app.$children[0].components = components;
}

function registerSystem(s) {
  var systems = app.$children[0].systems;
  if (systems.indexOf(s) === -1) {
    systems.push(s);
  }
  app.$children[0].systems = systems;
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
    system.execute(1/60);
  `;
  browser.devtools.inspectedWindow.eval(string);
}