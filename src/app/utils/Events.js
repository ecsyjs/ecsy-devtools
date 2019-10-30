'use strict';

var Emitter = require('events').EventEmitter;
var emitter = new Emitter();
emitter.setMaxListeners(0);

class Events {
  on() {
    emitter.on.apply(emitter, arguments);
    return this;
  };

  emit() {
    emitter.emit.apply(emitter, arguments);
    return this;
  };

  removeListener() {
    emitter.removeListener.apply(emitter, arguments);
    return this;
  };
}

export default new Events();
