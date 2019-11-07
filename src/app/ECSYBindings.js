var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

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
  stepSystems () {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      ${world}.systemManager.execute(1/60, performance.now() / 1000, true);
      ${world}.entityManager.processDeferredRemoval();
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
  logData(data) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      window.$data = JSON.parse('${JSON.stringify(data)}');
      console.log("Data (accessible on $data)", window.$data);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  logQuery(query) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      window.$query = ${world}.entityManager._queryManager._queries['${query.key}'].entities;
      console.log("Query: ${query.key} (${query.components.included.join(', ')}) accesible on '$query'", window.$query);
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  logComponent(componentName) {
    // @todo Move this to ecsy core?
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      window.$component = ${world}.entityManager._entities
        .filter(e => e._ComponentTypes.map(ct => ct.name).indexOf("${componentName}")!== -1)
        .map(c => c._components["${componentName}"]);
      console.log("Component: ${componentName} accesible on '$component'", window.$component);
    `;

    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  setSystemsPlayState(systemsState) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';

    let string = systemsState.map(s =>
      `${world}.systemManager._systems.find(s => s.constructor.name === "${s.name}").enabled = ${s.enabled};`
    ).join('\n');
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

    //var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').play()`;
    //globalBrowser.devtools.inspectedWindow.eval(string);
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
  toggleDeferredRemoval() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.entityManager.deferredRemovalEnabled = !${world}.entityManager.deferredRemovalEnabled;`;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
  stepDeferredRemoval() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `
      let prevState = ${world}.entityManager.deferredRemovalEnabled;
      ${world}.entityManager.deferredRemovalEnabled = true;
      ${world}.entityManager.processDeferredRemoval();
      ${world}.entityManager.deferredRemovalEnabled = prevState;
    `;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
}

export default new Bindings();
