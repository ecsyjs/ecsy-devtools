import Panel from './components/Panel';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Panel />, document.getElementById('app'));


var globalBrowser =  chrome || browser;

const devtools = globalBrowser.devtools;

if (devtools) {
  var backgroundPageConnection = globalBrowser.runtime.connect({
    name: "devtools"
  });

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
}
