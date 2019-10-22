var globalBrowser =  chrome || browser;

class Bindings {
  toggleWorld (enabled) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.${(enabled ? 'stop' : 'play')}()`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  stepNextSystem() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      var systemManager = ${world}.systemManager;
      var nextSystem = systemManager._executeSystems[(systemManager._executeSystems.indexOf(systemManager.lastExecutedSystem)+1)%systemManager._executeSystems.length];
      systemManager.executeSystem(nextSystem, 1/60, performance.now() / 1000);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  stepWorld () {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      ${world}.systemManager.execute(1/60, performance.now() / 1000);
      ${world}.entityManager.processDeferredRemoval();
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  logQuery(query) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      console.log("Query: ${query.key} (${query.components.join(', ')})", ${world}.entityManager._queryManager._queries['${query.key}'].entities);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  logComponent(componentName) {
    // @todo Move this to ecsy core?
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      console.log("Component: ${componentName}", ${world}.entityManager._entities
        .filter(e => e._ComponentTypes.map(ct => ct.name).indexOf("${componentName}")!== -1)
        .map(c => c._components["${componentName}"])
      );
    `;

    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  soloPlaySystem(system) {
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
  }
  toggleSystem(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`;
    //system.enabled = !system.enabled;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  stepSystem(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      var system = ${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}');
      ${world}.systemManager.executeSystem(system, 1/60, performance.now() / 1000);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  playSystems() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.forEach(s => s.play());`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  stopSystems() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.forEach(s => s.stop());`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
}

export default new Bindings();
