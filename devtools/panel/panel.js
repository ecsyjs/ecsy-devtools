
import Vue from 'vue';
import App from './App';

var app = new Vue({
  el: '#app',
  render: h => h(App)
});

var components = {};
var systems = [];

window.processMessage = function(msg) {
  if (msg.data.method === 'registerComponent') {
    registerComponent(msg.data.data);
  }
  else if (msg.data.method === 'registerSystem') {
    registerSystem(msg.data.data);
  }
  else if (msg.data.method === 'createEntity') {
    app.$children[0].numEntities++;
  }
  else if (msg.data.method === 'addComponent') {
    var c = msg.data.data;

    if (typeof components[c] === 'undefined') {
      components[c] = 0;
    }

    components[c]++;

    var n = components[c];

    document.getElementById(c).innerHTML = n;
    //browser.devtools.inspectedWindow.eval( 'console.log("asdfasfasdfasfsadf ' + n + '")');
    app.$children[0].components = components;

    setInterval(() => {
      browser.devtools.inspectedWindow.eval( 'console.log("asdfasfasdfasfsadf ' + n + '")');
      app.$children[0].components = components;
    }, 1000)
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