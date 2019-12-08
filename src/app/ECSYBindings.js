var globalBrowser =  typeof chrome !== 'undefined' ? chrome : typeof browser !== 'undefined' ? browser : null;

function executeScript(script) {
  if (window.__ECSY_REMOTE_DEVTOOLS && window.__ECSY_REMOTE_DEVTOOLS.connection) {
    window.__ECSY_REMOTE_DEVTOOLS.connection.send({
      type: 'executeScript',
      script: script
    });
  } else {
    globalBrowser.devtools.inspectedWindow.eval(script);
  }
}

class Bindings {
  getWorld() {
    return 'window.__ECSY_DEVTOOLS.worlds[0]';
  }

  toggleWorld (enabled) {
    var string = `${world}.${(enabled ? 'stop' : 'play')}()`;
    executeScript(string);
  }
  stepNextSystem() {
    var world = this.getWorld();
    var string = `
      var systemManager = ${world}.systemManager;
      var nextSystem = systemManager._executeSystems[(systemManager._executeSystems.indexOf(systemManager.lastExecutedSystem)+1)%systemManager._executeSystems.length];
      systemManager.executeSystem(nextSystem, 1000/60, performance.now() / 1000);
    `;
    executeScript(string);
  }
  stepSystems () {
    var world = this.getWorld();
    var string = `
      ${world}.systemManager.execute(1000/60, performance.now() / 1000, true);
      ${world}.entityManager.processDeferredRemoval();
    `;
    executeScript(string);
  }
  stepWorld () {
    var world = this.getWorld();
    var string = `
      ${world}.systemManager.execute(1000/60, performance.now() / 1000);
      ${world}.entityManager.processDeferredRemoval();
    `;
    executeScript(string);
  }
  logData(data) {
    var string = `
      window.$data = JSON.parse('${JSON.stringify(data)}');
      console.log("Data (accessible on $data)", window.$data);
    `;
    executeScript(string);
  }
  logQuery(query) {
    var world = this.getWorld();
    var string = `
      window.$query = ${world}.entityManager._queryManager._queries['${query.key}'].entities;
      console.log("Query: ${query.key} (${query.components.included.join(', ')}) accesible on '$query'", window.$query);
    `;
    executeScript(string);
  }
  logComponent(componentName) {
    // @todo Move this to ecsy core?
    var world = this.getWorld();
    var string = `
      window.$component = ${world}.entityManager._entities
        .filter(e => e._ComponentTypes.map(ct => ct.name).indexOf("${componentName}")!== -1)
        .map(c => c._components["${componentName}"]);
      console.log("Component: ${componentName} accesible on '$component'", window.$component);
    `;

    executeScript(string);
  }
  setSystemsPlayState(systemsState) {
    var world = this.getWorld();

    let string = systemsState.map(s =>
      `${world}.systemManager._systems.find(s => s.constructor.name === "${s.name}").enabled = ${s.enabled};`
    ).join('\n');
    executeScript(string);
  }
  soloPlaySystem(system) {
    var world = this.getWorld();
    var string = `${world}.systemManager._systems.forEach(s => {
      if (s.constructor.name === '${system.name}') {
        if (!s.enabled) {
          s.play();
        }
      } else {
        s.stop();
      }
    })`;
    executeScript(string);
  }
  toggleSystem(system) {
    var world = this.getWorld();
    var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`;
    executeScript(string);
  }
  stepSystem(system) {
    var world = this.getWorld();
    var string = `
      var system = ${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}');
      ${world}.systemManager.executeSystem(system, 1000/60, performance.now() / 1000);
    `;
    executeScript(string);
  }
  playSystems() {
    var world = this.getWorld();
    var string = `${world}.systemManager._systems.forEach(s => s.play());`;
    executeScript(string);
  }
  stopSystems() {
    var world = this.getWorld();
    var string = `${world}.systemManager._systems.forEach(s => s.stop());`;
    executeScript(string);
  }
  toggleDeferredRemoval() {
    var world = this.getWorld();
    var string = `${world}.entityManager.deferredRemovalEnabled = !${world}.entityManager.deferredRemovalEnabled;`;
    executeScript(string);
  }
  stepDeferredRemoval() {
    var world = this.getWorld();
    var string = `
      let prevState = ${world}.entityManager.deferredRemovalEnabled;
      ${world}.entityManager.deferredRemovalEnabled = true;
      ${world}.entityManager.processDeferredRemoval();
      ${world}.entityManager.deferredRemovalEnabled = prevState;
    `;
    executeScript(string);
  }
}

export default new Bindings();
