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
  if (msg.method === 'registerComponent') {
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
  if (systems.indexOf(s) === -1) {
    systems.push(s);
  }
  app.$children[0].systems = systems;
}

