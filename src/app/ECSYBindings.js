var globalBrowser =  chrome || browser;

export default class Bindings {
  static toggleSystem(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = `${world}.systemManager._systems.find(s => s.constructor.name === '${system.name}').${(system.enabled ? 'stop' : 'play')}()`;
    //system.enabled = !system.enabled;
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
}
