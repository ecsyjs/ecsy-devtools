/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app/panel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/app/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/app/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ComponentItem_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentItem.vue */ "./src/app/ComponentItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var graphs = {
  components: {},
  queries: {},
  systems: {}
};
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    ComponentItem: _ComponentItem_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      stats: {
        numComponents: [],
        components: {}
      },
      frame: 0,
      data: {},
      components: {},
      systems: [],
      queries: [],
      world: {
        enabled: true
      },
      numEntities: 0,
      showSystemsEvents: true,
      highlightedQueries: [],
      highlightedComponents: [],
      showDebugInfo: false
    };
  },
  methods: {
    numSystems: function numSystems() {
      return this.data.systems ? this.data.systems.length : 0;
    },
    numComponents: function numComponents() {
      return this.data.components ? Object.keys(this.data.components).length : undefined;
    },
    numComponentInstances: function numComponentInstances() {
      return this.components && Object.values(this.components).length > 0 ? Object.values(this.components).reduce(function (a, c) {
        return a + c;
      }) : undefined;
    },
    totalSystemsTime: function totalSystemsTime() {
      return this.systems.reduce(function (acum, s) {
        return acum + s.executeTime;
      }, 0);
    },
    systemPerc: function systemPerc(system) {
      var total = this.totalSystemsTime();
      return total > 0 ? system.executeTime / total : 0;
    },
    updateComponents: function updateComponents(components) {
      this.components = components;
    },
    toggleWorld: function toggleWorld() {
      window.ecsyDevtools.toggleWorld(this.world.enabled);
    },
    soloPlaySystem: function soloPlaySystem(system) {
      window.ecsyDevtools.soloPlaySystem(system);
    },
    toggleSystem: function toggleSystem(system) {
      window.ecsyDevtools.toggleSystem(system);
    },
    stepSystem: function stepSystem(system) {
      window.ecsyDevtools.stepSystem(system);
    },
    stepWorld: function stepWorld() {
      window.ecsyDevtools.stepWorld();
    },
    stepNextSystem: function stepNextSystem() {
      window.ecsyDevtools.stepNextSystem();
    },
    overSystemQuery: function overSystemQuery(queryKey) {
      this.highlightedQueries = [queryKey];
      var query = this.data.queries.find(function (q) {
        return q.key === queryKey;
      });
      this.highlightedComponents = query.components;
    },
    overComponent: function overComponent(componentName) {
      this.highlightedComponents = [componentName];
      var queries = this.data.queries.filter(function (q) {
        return q.components.indexOf(componentName) !== -1;
      });
      this.highlightedQueries = queries.map(function (q) {
        return q.key;
      });
    },
    playSystems: function playSystems() {
      window.ecsyDevtools.playSystems();
    },
    stopSystems: function stopSystems() {
      window.ecsyDevtools.stopSystems();
    },
    systemsEnabled: function systemsEnabled() {
      return this.data.systems.reduce(function (a, c) {
        return {
          enabled: a.enabled && c.enabled
        };
      }).enabled;
    },
    systemsAnyEnabled: function systemsAnyEnabled() {
      return this.data.systems.reduce(function (a, c) {
        return {
          enabled: a.enabled || c.enabled
        };
      }).enabled;
    },
    getComponentGraph: function getComponentGraph(component) {},
    overSystem: function overSystem(system) {
      this.highlightedQueries = [];
      this.highlightedComponents = [];

      for (var name in system.queries) {
        var systemQuery = system.queries[name];
        this.highlightedQueries.push(systemQuery.key);
        var query = this.data.queries.find(function (q) {
          return q.key === systemQuery.key;
        });
        this.highlightedComponents = this.highlightedComponents.concat(query.components);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentGraph.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_Chart_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/Chart.min.js */ "./src/vendor/Chart.min.js");
/* harmony import */ var _vendor_Chart_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_Chart_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_vue_chartjs_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendor/vue-chartjs.min.js */ "./src/vendor/vue-chartjs.min.js");
/* harmony import */ var _vendor_vue_chartjs_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_vue_chartjs_min_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": _vendor_vue_chartjs_min_js__WEBPACK_IMPORTED_MODULE_1__["Line"],
  name: 'ComponentGraph',
  data: function data() {
    return {
      chartData: {
        datasets: [{
          label: 'CHRT - Chart.js Corporation',
          backgroundColor: '#ff9933',
          borderColor: '#ff0000',
          data: [40, 20, 12, 39],
          type: 'line',
          pointRadius: 0,
          fill: false,
          lineTension: 0,
          borderWidth: 2
        }]
      },

      /*
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },*/
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted: function mounted() {
    this.renderChart(this.stats);
  },
  props: ['stats']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentGraph_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentGraph.vue */ "./src/app/ComponentGraph.vue");
/* harmony import */ var _ComponentTimeLine_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentTimeLine.vue */ "./src/app/ComponentTimeLine.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ComponentItem',
  props: ['name', 'value', 'stats'],
  components: {
    ComponentTimeLine: _ComponentTimeLine_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentTimeLine.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
var PR = Math.round(window.devicePixelRatio || 1);
var W = 160;
var H = 25;
var MARGIN = 1;
var WIDTH = W * PR,
    HEIGHT = H * PR,
    TEXT_X = MARGIN * PR,
    TEXT_Y = 2 * PR,
    GRAPH_X = MARGIN * PR,
    GRAPH_Y = MARGIN * PR,
    GRAPH_WIDTH = (W - 2 * MARGIN) * PR,
    GRAPH_HEIGHT = (H - 2 * MARGIN) * PR;
var min = 0;
var max = 0;
var round = Math.round;
var bg = '#002';
bg = '#222';
var fg = '#0ff';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ComponentTimeLine',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.canvas = this.$refs.canvas;
    this.canvas.style.cssText = "width:".concat(W, "px;height:").concat(H, "px");
    this.canvas.width = WIDTH;
    this.canvas.height = HEIGHT;
    var ctx = this.ctx = this.canvas.getContext("2d");
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 200, 30);
    ctx.font = 'bold ' + 9 * PR + 'px Helvetica,Arial,sans-serif';
    ctx.textBaseline = 'top';
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fillStyle = fg;
    ctx.fillText(name, TEXT_X, TEXT_Y);
    ctx.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    ctx.fillStyle = bg;
    ctx.globalAlpha = 0.9;
    ctx.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
  },
  watch: {
    currentValue: {
      immediate: true,
      handler: function handler(value) {
        var maxValue = 200;
        if (!this.ctx) return;
        var context = this.ctx;
        var name = 'ms';
        var canvas = this.canvas;
        min = Math.min(min, value);
        max = Math.max(max, value);
        context.fillStyle = bg;
        context.globalAlpha = 1;
        /*
                  context.fillRect( 0, 0, WIDTH, GRAPH_Y );
                  context.fillStyle = fg;
                  context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );
        */

        context.fillStyle = "#EB932C";
        context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
      }
    }
  },
  props: ['stats', 'currentValue']
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\np[data-v-631eec38] {\n  font-size: 20px;\n  text-align: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\np[data-v-64596a99] {\n  font-size: 20px;\n  text-align: center;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\ncanvas[data-v-64640c32] {\n  background-color: #f99;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/app/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--0-1!./src/app/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#app {\n  display: flex;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color: #292929;\n  /*\n  color: #AAA;\n  background-color: #AAA;\n  */\n}\n\nh3 {\n  color: #BBB;\n  font-weight: normal;\n}\n\n.column {\n  width: 50%;\n  margin-right: 20px;\n}\n\nli.active,\nli.system:hover,\nli.systemQuery:hover,\nli.query:hover\n {\n  background-color: #464323;\n}\n\nli.running {\n  background-color: #ff9;\n}\n\nli {\n  padding: 2px;\n  background-color: #1E1E1E;\n  list-style: none;\n}\n\nli .name {\n  color: #B5B5B5;\n  font-weight: normal;\n}\n\nli.system,\nli.component {\n  padding: 15px 0px 15px 15px;\n  border-left: 5px solid #161616;\n  margin-bottom: 3px;\n}\n\nli.component {\n  display: flex;\n}\n\nli.system:hover,\nli.component:hover {\n  border-left-color: #B4AD5D;\n}\n\nul {\n  padding-left: 0px;\n}\n\nli .stats,\nli .value {\n  color: #fff;\n}\n\nli.component div {\n  display: flex;\n  width: 50%;\n  justify-content: space-between;\n  padding-right: 15px;\n  align-items: center;\n}\n\nli.component div:nth-child(2) {\n  color: #F1421C;\n}\n\n.disabled {\n  background-color: #262626;\n  color: #7D7D7D;\n}\n\n.disabled .stats,\n.disabled .name {\n  color: #7D7D7D;\n}\n\nli.system .queries li {\n  background-color: #273635;\n  padding: 5px;\n}\n\n.system .queries {\n  font-size: 0.8em;\n}\n\n.system .queries .name {\n  color: #1B856B;\n  background-color: #232A2C;\n  border-radius: 5px;\n  padding: 4px 8px;\n}\n\n.system .queries .originalQueryName {\n  color: #2CEBBD;\n}\n\n.systemData {\n  display: flex;\n}\n\n.systemData div {\n  width: 50%;\n}\n\n.graph-controls {\n  display: flex;\n  justify-content: space-between;\n}\n\n.name-stats  {\n  display: flex;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n\ncanvas {\n  background-color: #ff9;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof window === "undefined" ? this : window : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var scope = (typeof window !== "undefined" && window) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof window !== "undefined" && window.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof window !== "undefined" && window.clearImmediate) ||
                         (this && this.clearImmediate);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=template&id=7e7f006c&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app/App.vue?vue&type=template&id=7e7f006c& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.data.world
    ? _c("div", { attrs: { id: "app" } }, [
        _c("div", [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  _vm.showDebugInfo = !_vm.showDebugInfo
                }
              }
            },
            [_vm._v("Show debug info")]
          ),
          _vm._v(" "),
          _vm.showDebugInfo
            ? _c("pre", { staticStyle: { "background-color": "#999" } }, [
                _vm._v(_vm._s(_vm.data))
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("h3", [_vm._v("Entities: " + _vm._s(_vm.data.numEntities))]),
          _vm._v(" "),
          _c("h3", [
            _vm._v(
              "COMPONENTS " +
                _vm._s(_vm.numComponents()) +
                " (" +
                _vm._s(_vm.numComponentInstances()) +
                ")"
            )
          ]),
          _vm._v(" "),
          _c(
            "ul",
            _vm._l(_vm.data.components, function(value, name) {
              return _c(
                "li",
                {
                  staticClass: "component",
                  class: {
                    active: _vm.highlightedComponents.indexOf(name) !== -1
                  },
                  on: {
                    mouseover: function($event) {
                      return _vm.overComponent(name)
                    }
                  }
                },
                [
                  _c("ComponentItem", {
                    attrs: {
                      name: name,
                      value: value,
                      stats: _vm.stats.components[name]
                    }
                  })
                ],
                1
              )
            }),
            0
          ),
          _vm._v(" "),
          _c("h3", [_vm._v("QUERIES " + _vm._s(_vm.data.queries.length))]),
          _vm._v(" "),
          _c(
            "ul",
            _vm._l(_vm.data.queries, function(query) {
              return _c(
                "li",
                {
                  staticClass: "query",
                  class: {
                    active: _vm.highlightedQueries.indexOf(query.key) !== -1
                  },
                  on: {
                    mouseover: function($event) {
                      return _vm.overSystemQuery(query.key)
                    }
                  }
                },
                [
                  _c("b", [_vm._v(_vm._s(query.key) + ":")]),
                  _vm._v(
                    " " +
                      _vm._s(query.numEntities) +
                      " (" +
                      _vm._s(query.components.join(", ")) +
                      ")\n      "
                  )
                ]
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("h3", [
            _vm._v(
              "SYSTEMS (" +
                _vm._s(_vm.numSystems()) +
                ") " +
                _vm._s(_vm.totalSystemsTime().toFixed(2)) +
                "ms"
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  return _vm.toggleWorld()
                }
              }
            },
            [
              _vm._v(
                _vm._s(_vm.data.world.enabled ? "stop" : "play") + " world"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { disabled: _vm.data.world.enabled },
              on: {
                click: function($event) {
                  return _vm.stepNextSystem()
                }
              }
            },
            [_vm._v("step next system")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { disabled: _vm.data.world.enabled },
              on: {
                click: function($event) {
                  return _vm.stepWorld()
                }
              }
            },
            [_vm._v("step all systems")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { disabled: _vm.systemsEnabled() },
              on: {
                click: function($event) {
                  return _vm.playSystems()
                }
              }
            },
            [_vm._v("play all systems")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              attrs: { disabled: !_vm.systemsAnyEnabled() },
              on: {
                click: function($event) {
                  return _vm.stopSystems()
                }
              }
            },
            [_vm._v("stop all systems")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.showSystemsEvents,
                expression: "showSystemsEvents"
              }
            ],
            attrs: { type: "checkbox", id: "systems-verbose" },
            domProps: {
              checked: Array.isArray(_vm.showSystemsEvents)
                ? _vm._i(_vm.showSystemsEvents, null) > -1
                : _vm.showSystemsEvents
            },
            on: {
              change: function($event) {
                var $$a = _vm.showSystemsEvents,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.showSystemsEvents = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.showSystemsEvents = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.showSystemsEvents = $$c
                }
              }
            }
          }),
          _c("label", { attrs: { for: "systems-verbose" } }, [
            _vm._v("show queries")
          ]),
          _vm._v(" "),
          _c(
            "ul",
            _vm._l(_vm.data.systems, function(system) {
              return _c(
                "li",
                {
                  staticClass: "system",
                  class: {
                    running:
                      !_vm.data.world.enabled &&
                      _vm.data.lastExecutedSystem === system.name,
                    disabled: !system.enabled
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "systemData",
                      on: {
                        mouseover: function($event) {
                          return _vm.overSystem(system)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "name-stats" }, [
                        _c("span", { staticClass: "name" }, [
                          _vm._v(_vm._s(system.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "stats" }, [
                          _c("span", [
                            _vm._v(_vm._s(system.executeTime.toFixed(2)) + "ms")
                          ]),
                          _vm._v(" "),
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                (100 * _vm.systemPerc(system)).toFixed(2)
                              ) + "%"
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "graph-controls" }, [
                        _c("span", [_vm._v("graph to-do")]),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.toggleSystem(system)
                                }
                              }
                            },
                            [_vm._v(_vm._s(system.enabled ? "stop" : "play"))]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              attrs: {
                                disabled: system.enabled && _vm.world.enabled
                              },
                              on: {
                                click: function($event) {
                                  return _vm.stepSystem(system)
                                }
                              }
                            },
                            [_vm._v("step")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              on: {
                                click: function($event) {
                                  return _vm.soloPlaySystem(system)
                                }
                              }
                            },
                            [_vm._v("solo")]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "queries" }, [
                    _c("ul", [
                      _c("li", [
                        _c(
                          "ul",
                          _vm._l(system.queries, function(value, name) {
                            return _c(
                              "li",
                              {
                                staticClass: "systemQuery",
                                class: {
                                  active:
                                    _vm.highlightedQueries.indexOf(
                                      value.key
                                    ) !== -1
                                }
                              },
                              [
                                _c(
                                  "span",
                                  {
                                    on: {
                                      mouseover: function($event) {
                                        return _vm.overSystemQuery(value.key)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "name" }, [
                                      _vm._v(_vm._s(name))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "originalQueryName" },
                                      [_vm._v(_vm._s(value.key))]
                                    ),
                                    _vm._v(
                                      " " +
                                        _vm._s(
                                          _vm.queries.find(function(q) {
                                            return q.key === value.key
                                          }).numEntities
                                        )
                                    )
                                  ]
                                )
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  ])
                ]
              )
            }),
            0
          )
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c("span", { staticClass: "name" }, [_vm._v(_vm._s(_vm.name))]),
      _vm._v(" "),
      _c("span", { staticClass: "value" }, [_vm._v(_vm._s(_vm.value))])
    ]),
    _vm._v(" "),
    _c(
      "div",
      [
        _c("ComponentTimeLine", {
          attrs: { stats: _vm.stats, currentValue: _vm.value }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("10")])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("canvas", { ref: "canvas" })])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("73355e48", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2ed5a9d3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2e691f74", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof window !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = window['process'] && window['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ( true && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       true && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ( true && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ( true &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ( true && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ( true && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     true && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ( true && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ( true &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        true
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ( true &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/App.vue":
/*!*************************!*\
  !*** ./src/app/App.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7e7f006c& */ "./src/app/App.vue?vue&type=template&id=7e7f006c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/app/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app/App.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./src/app/App.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/app/App.vue?vue&type=template&id=7e7f006c&":
/*!********************************************************!*\
  !*** ./src/app/App.vue?vue&type=template&id=7e7f006c& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7e7f006c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/App.vue?vue&type=template&id=7e7f006c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7e7f006c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/app/ComponentGraph.vue":
/*!************************************!*\
  !*** ./src/app/ComponentGraph.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentGraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentGraph.vue?vue&type=script&lang=js& */ "./src/app/ComponentGraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& */ "./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComponentGraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  "631eec38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app/ComponentGraph.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app/ComponentGraph.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/app/ComponentGraph.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentGraph.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentGraph.vue?vue&type=style&index=0&id=631eec38&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentGraph_vue_vue_type_style_index_0_id_631eec38_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app/ComponentItem.vue":
/*!***********************************!*\
  !*** ./src/app/ComponentItem.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentItem.vue?vue&type=template&id=64596a99&scoped=true& */ "./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true&");
/* harmony import */ var _ComponentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentItem.vue?vue&type=script&lang=js& */ "./src/app/ComponentItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& */ "./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComponentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64596a99",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app/ComponentItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app/ComponentItem.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/app/ComponentItem.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=style&index=0&id=64596a99&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_style_index_0_id_64596a99_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentItem.vue?vue&type=template&id=64596a99&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentItem.vue?vue&type=template&id=64596a99&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentItem_vue_vue_type_template_id_64596a99_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/app/ComponentTimeLine.vue":
/*!***************************************!*\
  !*** ./src/app/ComponentTimeLine.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true& */ "./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true&");
/* harmony import */ var _ComponentTimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComponentTimeLine.vue?vue&type=script&lang=js& */ "./src/app/ComponentTimeLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& */ "./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComponentTimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64640c32",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/app/ComponentTimeLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/app/ComponentTimeLine.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/app/ComponentTimeLine.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--2!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentTimeLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js??ref--0-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=style&index=0&id=64640c32&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_style_index_0_id_64640c32_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/app/ComponentTimeLine.vue?vue&type=template&id=64640c32&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComponentTimeLine_vue_vue_type_template_id_64640c32_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/app/panel.js":
/*!**************************!*\
  !*** ./src/app/panel.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/app/App.vue");


var app = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]({
  el: '#app',
  render: function render(h) {
    return h(_App__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }
});
var globalBrowser = chrome || browser;
var backgroundPageConnection = chrome.runtime.connect({
  name: "devtools"
});
/*
globalBrowser.browserAction.setIcon({
  path: {
    "128": '../../assets/icon_128.png'
  }
});
*/

backgroundPageConnection.postMessage({
  name: 'init',
  tabId: chrome.devtools.inspectedWindow.tabId
});
backgroundPageConnection.onMessage.addListener(function (m) {
  processMessage(m); // @todo Add option to toggle debug document.getElementById("debug").innerHTML = JSON.stringify(m, null, 2);
});

function processMessage(msg) {
  var appData = app.$children[0];

  if (msg.method === 'reset') {
    reset();
  } else if (msg.method === 'worldCreated') {
    /*
    globalBrowser.browserAction.setIcon({
      path: {
        "128": '../../assets/icon_128_detected.png'
      }
    });
    */
  } else if (msg.method === 'refreshData') {
    var totalNumComponents = Object.values(msg.data.components).reduce(function (a, i) {
      return a + i;
    });
    appData.stats.numComponents.push(totalNumComponents);

    for (var name in msg.data.components) {
      var num = msg.data.components[name];

      if (!appData.stats.components[name]) {
        appData.stats.components[name] = [];
      } //appData.stats.components[name].push(num + Math.random() * 30);

    }

    window.stats = appData.stats;
    appData.data = msg.data;
    appData.frame++;
    appData.numEntities = msg.data.numEntities;
    appData.systems = msg.data.systems;
    appData.queries = msg.data.queries;
    appData.components = msg.data.components;
    appData.world = msg.data.world;
  }
}

function reset() {
  app.$children[0].data = {};
  app.$children[0].components = {};
  app.$children[0].systems = [];
  app.$children[0].numEntities = 0;
  app.$children[0].queries = [];
}

window.ecsyDevtools = {
  toggleWorld: function toggleWorld(enabled) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "".concat(world, ".").concat(enabled ? 'stop' : 'play', "()");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepNextSystem: function stepNextSystem() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "\n      var systemManager = ".concat(world, ".systemManager;\n      var nextSystem = systemManager._executeSystems[(systemManager._executeSystems.indexOf(systemManager.lastExecutedSystem)+1)%systemManager._executeSystems.length];\n      systemManager.executeSystem(nextSystem, 1/60, performance.now() / 1000);\n    ");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepWorld: function stepWorld() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "\n      ".concat(world, ".systemManager.execute(1/60, performance.now() / 1000);\n      ").concat(world, ".entityManager.processDeferredRemoval();\n    ");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  soloPlaySystem: function soloPlaySystem(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "".concat(world, ".systemManager._systems.forEach(s => {\n      if (s.constructor.name === '").concat(system.name, "') {\n        if (!s.enabled) {\n          s.play();\n        }\n      } else {\n        s.stop();\n      }\n    })");
    globalBrowser.devtools.inspectedWindow.eval(string);
    var string = "".concat(world, ".systemManager._systems.find(s => s.constructor.name === '").concat(system.name, "').play()");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  toggleSystem: function toggleSystem(system) {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "".concat(world, ".systemManager._systems.find(s => s.constructor.name === '").concat(system.name, "').").concat(system.enabled ? 'stop' : 'play', "()"); //system.enabled = !system.enabled;

    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stepSystem: function stepSystem(system) {
    debugger;
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "\n      var system = ".concat(world, ".systemManager._systems.find(s => s.constructor.name === '").concat(system.name, "');\n      ").concat(world, ".systemManager.executeSystem(system, 1/60, performance.now() / 1000);\n    ");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  playSystems: function playSystems() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "".concat(world, ".systemManager._systems.forEach(s => s.play());");
    globalBrowser.devtools.inspectedWindow.eval(string);
  },
  stopSystems: function stopSystems() {
    var world = 'window.__ECSY_DEVTOOLS.worlds[0]';
    var string = "".concat(world, ".systemManager._systems.forEach(s => s.stop());");
    globalBrowser.devtools.inspectedWindow.eval(string);
  }
};

/***/ }),

/***/ "./src/app/style.css":
/*!***************************!*\
  !*** ./src/app/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--0-1!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./src/app/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1e1c30cb", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/vendor/Chart.min.js":
/*!*********************************!*\
  !*** ./src/vendor/Chart.min.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function (t) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
}(function () {
  return function t(e, n, i) {
    function a(r, l) {
      if (!n[r]) {
        if (!e[r]) {
          var s = "function" == typeof require && require;
          if (!l && s) return require(r, !0);
          if (o) return o(r, !0);
          var u = new Error("Cannot find module '" + r + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var d = n[r] = {
          exports: {}
        };
        e[r][0].call(d.exports, function (t) {
          var n = e[r][1][t];
          return a(n || t);
        }, d, d.exports, t, e, n, i);
      }

      return n[r].exports;
    }

    for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) {
      a(i[r]);
    }

    return a;
  }({
    1: [function (t, e, n) {}, {}],
    2: [function (t, e, n) {
      function i(t) {
        if (t) {
          var e = [0, 0, 0],
              n = 1,
              i = t.match(/^#([a-fA-F0-9]{3})$/i);

          if (i) {
            i = i[1];

            for (a = 0; a < e.length; a++) {
              e[a] = parseInt(i[a] + i[a], 16);
            }
          } else if (i = t.match(/^#([a-fA-F0-9]{6})$/i)) {
            i = i[1];

            for (a = 0; a < e.length; a++) {
              e[a] = parseInt(i.slice(2 * a, 2 * a + 2), 16);
            }
          } else if (i = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (a = 0; a < e.length; a++) {
              e[a] = parseInt(i[a + 1]);
            }

            n = parseFloat(i[4]);
          } else if (i = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
            for (a = 0; a < e.length; a++) {
              e[a] = Math.round(2.55 * parseFloat(i[a + 1]));
            }

            n = parseFloat(i[4]);
          } else if (i = t.match(/(\w+)/)) {
            if ("transparent" == i[1]) return [0, 0, 0, 0];
            if (!(e = c[i[1]])) return;
          }

          for (var a = 0; a < e.length; a++) {
            e[a] = u(e[a], 0, 255);
          }

          return n = n || 0 == n ? u(n, 0, 1) : 1, e[3] = n, e;
        }
      }

      function a(t) {
        if (t) {
          var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function o(t) {
        if (t) {
          var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);

          if (e) {
            var n = parseFloat(e[4]);
            return [u(parseInt(e[1]), 0, 360), u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)];
          }
        }
      }

      function r(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")";
      }

      function l(t, e) {
        return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")";
      }

      function s(t, e) {
        return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")";
      }

      function u(t, e, n) {
        return Math.min(Math.max(e, t), n);
      }

      function d(t) {
        var e = t.toString(16).toUpperCase();
        return e.length < 2 ? "0" + e : e;
      }

      var c = t(6);
      e.exports = {
        getRgba: i,
        getHsla: a,
        getRgb: function getRgb(t) {
          var e = i(t);
          return e && e.slice(0, 3);
        },
        getHsl: function getHsl(t) {
          var e = a(t);
          return e && e.slice(0, 3);
        },
        getHwb: o,
        getAlpha: function getAlpha(t) {
          var e = i(t);
          return e ? e[3] : (e = a(t)) ? e[3] : (e = o(t)) ? e[3] : void 0;
        },
        hexString: function hexString(t) {
          return "#" + d(t[0]) + d(t[1]) + d(t[2]);
        },
        rgbString: function rgbString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? r(t, e) : "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
        },
        rgbaString: r,
        percentString: function percentString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? l(t, e) : "rgb(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%)";
        },
        percentaString: l,
        hslString: function hslString(t, e) {
          return e < 1 || t[3] && t[3] < 1 ? s(t, e) : "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)";
        },
        hslaString: s,
        hwbString: function hwbString(t, e) {
          return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")";
        },
        keyword: function keyword(t) {
          return h[t.slice(0, 3)];
        }
      };
      var h = {};

      for (var f in c) {
        h[c[f]] = f;
      }
    }, {
      6: 6
    }],
    3: [function (t, e, n) {
      var i = t(5),
          a = t(2),
          o = function o(t) {
        if (t instanceof o) return t;
        if (!(this instanceof o)) return new o(t);
        this.valid = !1, this.values = {
          rgb: [0, 0, 0],
          hsl: [0, 0, 0],
          hsv: [0, 0, 0],
          hwb: [0, 0, 0],
          cmyk: [0, 0, 0, 0],
          alpha: 1
        };
        var e;
        "string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == _typeof(t) && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e));
      };

      o.prototype = {
        isValid: function isValid() {
          return this.valid;
        },
        rgb: function rgb() {
          return this.setSpace("rgb", arguments);
        },
        hsl: function hsl() {
          return this.setSpace("hsl", arguments);
        },
        hsv: function hsv() {
          return this.setSpace("hsv", arguments);
        },
        hwb: function hwb() {
          return this.setSpace("hwb", arguments);
        },
        cmyk: function cmyk() {
          return this.setSpace("cmyk", arguments);
        },
        rgbArray: function rgbArray() {
          return this.values.rgb;
        },
        hslArray: function hslArray() {
          return this.values.hsl;
        },
        hsvArray: function hsvArray() {
          return this.values.hsv;
        },
        hwbArray: function hwbArray() {
          var t = this.values;
          return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb;
        },
        cmykArray: function cmykArray() {
          return this.values.cmyk;
        },
        rgbaArray: function rgbaArray() {
          var t = this.values;
          return t.rgb.concat([t.alpha]);
        },
        hslaArray: function hslaArray() {
          var t = this.values;
          return t.hsl.concat([t.alpha]);
        },
        alpha: function alpha(t) {
          return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this);
        },
        red: function red(t) {
          return this.setChannel("rgb", 0, t);
        },
        green: function green(t) {
          return this.setChannel("rgb", 1, t);
        },
        blue: function blue(t) {
          return this.setChannel("rgb", 2, t);
        },
        hue: function hue(t) {
          return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t);
        },
        saturation: function saturation(t) {
          return this.setChannel("hsl", 1, t);
        },
        lightness: function lightness(t) {
          return this.setChannel("hsl", 2, t);
        },
        saturationv: function saturationv(t) {
          return this.setChannel("hsv", 1, t);
        },
        whiteness: function whiteness(t) {
          return this.setChannel("hwb", 1, t);
        },
        blackness: function blackness(t) {
          return this.setChannel("hwb", 2, t);
        },
        value: function value(t) {
          return this.setChannel("hsv", 2, t);
        },
        cyan: function cyan(t) {
          return this.setChannel("cmyk", 0, t);
        },
        magenta: function magenta(t) {
          return this.setChannel("cmyk", 1, t);
        },
        yellow: function yellow(t) {
          return this.setChannel("cmyk", 2, t);
        },
        black: function black(t) {
          return this.setChannel("cmyk", 3, t);
        },
        hexString: function hexString() {
          return a.hexString(this.values.rgb);
        },
        rgbString: function rgbString() {
          return a.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function rgbaString() {
          return a.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function percentString() {
          return a.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function hslString() {
          return a.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function hslaString() {
          return a.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function hwbString() {
          return a.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function keyword() {
          return a.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function rgbNumber() {
          var t = this.values.rgb;
          return t[0] << 16 | t[1] << 8 | t[2];
        },
        luminosity: function luminosity() {
          for (var t = this.values.rgb, e = [], n = 0; n < t.length; n++) {
            var i = t[n] / 255;
            e[n] = i <= .03928 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
          }

          return .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
        },
        contrast: function contrast(t) {
          var e = this.luminosity(),
              n = t.luminosity();
          return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05);
        },
        level: function level(t) {
          var e = this.contrast(t);
          return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : "";
        },
        dark: function dark() {
          var t = this.values.rgb;
          return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128;
        },
        light: function light() {
          return !this.dark();
        },
        negate: function negate() {
          for (var t = [], e = 0; e < 3; e++) {
            t[e] = 255 - this.values.rgb[e];
          }

          return this.setValues("rgb", t), this;
        },
        lighten: function lighten(t) {
          var e = this.values.hsl;
          return e[2] += e[2] * t, this.setValues("hsl", e), this;
        },
        darken: function darken(t) {
          var e = this.values.hsl;
          return e[2] -= e[2] * t, this.setValues("hsl", e), this;
        },
        saturate: function saturate(t) {
          var e = this.values.hsl;
          return e[1] += e[1] * t, this.setValues("hsl", e), this;
        },
        desaturate: function desaturate(t) {
          var e = this.values.hsl;
          return e[1] -= e[1] * t, this.setValues("hsl", e), this;
        },
        whiten: function whiten(t) {
          var e = this.values.hwb;
          return e[1] += e[1] * t, this.setValues("hwb", e), this;
        },
        blacken: function blacken(t) {
          var e = this.values.hwb;
          return e[2] += e[2] * t, this.setValues("hwb", e), this;
        },
        greyscale: function greyscale() {
          var t = this.values.rgb,
              e = .3 * t[0] + .59 * t[1] + .11 * t[2];
          return this.setValues("rgb", [e, e, e]), this;
        },
        clearer: function clearer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e - e * t), this;
        },
        opaquer: function opaquer(t) {
          var e = this.values.alpha;
          return this.setValues("alpha", e + e * t), this;
        },
        rotate: function rotate(t) {
          var e = this.values.hsl,
              n = (e[0] + t) % 360;
          return e[0] = n < 0 ? 360 + n : n, this.setValues("hsl", e), this;
        },
        mix: function mix(t, e) {
          var n = this,
              i = t,
              a = void 0 === e ? .5 : e,
              o = 2 * a - 1,
              r = n.alpha() - i.alpha(),
              l = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2,
              s = 1 - l;
          return this.rgb(l * n.red() + s * i.red(), l * n.green() + s * i.green(), l * n.blue() + s * i.blue()).alpha(n.alpha() * a + i.alpha() * (1 - a));
        },
        toJSON: function toJSON() {
          return this.rgb();
        },
        clone: function clone() {
          var t,
              e,
              n = new o(),
              i = this.values,
              a = n.values;

          for (var r in i) {
            i.hasOwnProperty(r) && (t = i[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
          }

          return n;
        }
      }, o.prototype.spaces = {
        rgb: ["red", "green", "blue"],
        hsl: ["hue", "saturation", "lightness"],
        hsv: ["hue", "saturation", "value"],
        hwb: ["hue", "whiteness", "blackness"],
        cmyk: ["cyan", "magenta", "yellow", "black"]
      }, o.prototype.maxes = {
        rgb: [255, 255, 255],
        hsl: [360, 100, 100],
        hsv: [360, 100, 100],
        hwb: [360, 100, 100],
        cmyk: [100, 100, 100, 100]
      }, o.prototype.getValues = function (t) {
        for (var e = this.values, n = {}, i = 0; i < t.length; i++) {
          n[t.charAt(i)] = e[t][i];
        }

        return 1 !== e.alpha && (n.a = e.alpha), n;
      }, o.prototype.setValues = function (t, e) {
        var n,
            a = this.values,
            o = this.spaces,
            r = this.maxes,
            l = 1;
        if (this.valid = !0, "alpha" === t) l = e;else if (e.length) a[t] = e.slice(0, t.length), l = e[t.length];else if (void 0 !== e[t.charAt(0)]) {
          for (n = 0; n < t.length; n++) {
            a[t][n] = e[t.charAt(n)];
          }

          l = e.a;
        } else if (void 0 !== e[o[t][0]]) {
          var s = o[t];

          for (n = 0; n < t.length; n++) {
            a[t][n] = e[s[n]];
          }

          l = e.alpha;
        }
        if (a.alpha = Math.max(0, Math.min(1, void 0 === l ? a.alpha : l)), "alpha" === t) return !1;
        var u;

        for (n = 0; n < t.length; n++) {
          u = Math.max(0, Math.min(r[t][n], a[t][n])), a[t][n] = Math.round(u);
        }

        for (var d in o) {
          d !== t && (a[d] = i[t][d](a[t]));
        }

        return !0;
      }, o.prototype.setSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n), this);
      }, o.prototype.setChannel = function (t, e, n) {
        var i = this.values[t];
        return void 0 === n ? i[e] : n === i[e] ? this : (i[e] = n, this.setValues(t, i), this);
      }, "undefined" != typeof window && (window.Color = o), e.exports = o;
    }, {
      2: 2,
      5: 5
    }],
    4: [function (t, e, n) {
      function i(t) {
        var e,
            n,
            i,
            a = t[0] / 255,
            o = t[1] / 255,
            r = t[2] / 255,
            l = Math.min(a, o, r),
            s = Math.max(a, o, r),
            u = s - l;
        return s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (l + s) / 2, n = s == l ? 0 : i <= .5 ? u / (s + l) : u / (2 - s - l), [e, 100 * n, 100 * i];
      }

      function a(t) {
        var e,
            n,
            i,
            a = t[0],
            o = t[1],
            r = t[2],
            l = Math.min(a, o, r),
            s = Math.max(a, o, r),
            u = s - l;
        return n = 0 == s ? 0 : u / s * 1e3 / 10, s == l ? e = 0 : a == s ? e = (o - r) / u : o == s ? e = 2 + (r - a) / u : r == s && (e = 4 + (a - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = s / 255 * 1e3 / 10, [e, n, i];
      }

      function o(t) {
        var e = t[0],
            n = t[1],
            a = t[2];
        return [i(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(n, a)))];
      }

      function l(t) {
        var e,
            n,
            i,
            a,
            o = t[0] / 255,
            r = t[1] / 255,
            l = t[2] / 255;
        return a = Math.min(1 - o, 1 - r, 1 - l), e = (1 - o - a) / (1 - a) || 0, n = (1 - r - a) / (1 - a) || 0, i = (1 - l - a) / (1 - a) || 0, [100 * e, 100 * n, 100 * i, 100 * a];
      }

      function s(t) {
        return C[JSON.stringify(t)];
      }

      function u(t) {
        var e = t[0] / 255,
            n = t[1] / 255,
            i = t[2] / 255;
        return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * i), 100 * (.0193 * e + .1192 * n + .9505 * i)];
      }

      function d(t) {
        var e,
            n,
            i,
            a = u(t),
            o = a[0],
            r = a[1],
            l = a[2];
        return o /= 95.047, r /= 100, l /= 108.883, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, l = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, e = 116 * r - 16, n = 500 * (o - r), i = 200 * (r - l), [e, n, i];
      }

      function c(t) {
        var e,
            n,
            i,
            a,
            o,
            r = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100;
        if (0 == l) return o = 255 * s, [o, o, o];
        e = 2 * s - (n = s < .5 ? s * (1 + l) : s + l - s * l), a = [0, 0, 0];

        for (var u = 0; u < 3; u++) {
          (i = r + 1 / 3 * -(u - 1)) < 0 && i++, i > 1 && i--, o = 6 * i < 1 ? e + 6 * (n - e) * i : 2 * i < 1 ? n : 3 * i < 2 ? e + (n - e) * (2 / 3 - i) * 6 : e, a[u] = 255 * o;
        }

        return a;
      }

      function h(t) {
        var e = t[0] / 60,
            n = t[1] / 100,
            i = t[2] / 100,
            a = Math.floor(e) % 6,
            o = e - Math.floor(e),
            r = 255 * i * (1 - n),
            l = 255 * i * (1 - n * o),
            s = 255 * i * (1 - n * (1 - o)),
            i = 255 * i;

        switch (a) {
          case 0:
            return [i, s, r];

          case 1:
            return [l, i, r];

          case 2:
            return [r, i, s];

          case 3:
            return [r, l, i];

          case 4:
            return [s, r, i];

          case 5:
            return [i, r, l];
        }
      }

      function f(t) {
        var e,
            n,
            i,
            a,
            o = t[0] / 360,
            l = t[1] / 100,
            s = t[2] / 100,
            u = l + s;

        switch (u > 1 && (l /= u, s /= u), e = Math.floor(6 * o), n = 1 - s, i = 6 * o - e, 0 != (1 & e) && (i = 1 - i), a = l + i * (n - l), e) {
          default:
          case 6:
          case 0:
            r = n, g = a, b = l;
            break;

          case 1:
            r = a, g = n, b = l;
            break;

          case 2:
            r = l, g = n, b = a;
            break;

          case 3:
            r = l, g = a, b = n;
            break;

          case 4:
            r = a, g = l, b = n;
            break;

          case 5:
            r = n, g = l, b = a;
        }

        return [255 * r, 255 * g, 255 * b];
      }

      function p(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100,
            l = t[3] / 100;
        return e = 1 - Math.min(1, a * (1 - l) + l), n = 1 - Math.min(1, o * (1 - l) + l), i = 1 - Math.min(1, r * (1 - l) + l), [255 * e, 255 * n, 255 * i];
      }

      function v(t) {
        var e,
            n,
            i,
            a = t[0] / 100,
            o = t[1] / 100,
            r = t[2] / 100;
        return e = 3.2406 * a + -1.5372 * o + -.4986 * r, n = -.9689 * a + 1.8758 * o + .0415 * r, i = .0557 * a + -.204 * o + 1.057 * r, e = e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, e = Math.min(Math.max(0, e), 1), n = Math.min(Math.max(0, n), 1), i = Math.min(Math.max(0, i), 1), [255 * e, 255 * n, 255 * i];
      }

      function m(t) {
        var e,
            n,
            i,
            a = t[0],
            o = t[1],
            r = t[2];
        return a /= 95.047, o /= 100, r /= 108.883, a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116, o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116, r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116, e = 116 * o - 16, n = 500 * (a - o), i = 200 * (o - r), [e, n, i];
      }

      function x(t) {
        var e,
            n,
            i,
            a,
            o = t[0],
            r = t[1],
            l = t[2];
        return o <= 8 ? a = (n = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(n / 100, 1 / 3)), e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i = i / 108.883 <= .008859 ? i = 108.883 * (a - l / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - l / 200, 3), [e, n, i];
      }

      function y(t) {
        var e,
            n,
            i,
            a = t[0],
            o = t[1],
            r = t[2];
        return e = Math.atan2(r, o), (n = 360 * e / 2 / Math.PI) < 0 && (n += 360), i = Math.sqrt(o * o + r * r), [a, i, n];
      }

      function k(t) {
        return v(x(t));
      }

      function w(t) {
        var e,
            n,
            i,
            a = t[0],
            o = t[1];
        return i = t[2] / 360 * 2 * Math.PI, e = o * Math.cos(i), n = o * Math.sin(i), [a, e, n];
      }

      function M(t) {
        return S[t];
      }

      e.exports = {
        rgb2hsl: i,
        rgb2hsv: a,
        rgb2hwb: o,
        rgb2cmyk: l,
        rgb2keyword: s,
        rgb2xyz: u,
        rgb2lab: d,
        rgb2lch: function rgb2lch(t) {
          return y(d(t));
        },
        hsl2rgb: c,
        hsl2hsv: function hsl2hsv(t) {
          var e,
              n,
              i = t[0],
              a = t[1] / 100,
              o = t[2] / 100;
          return 0 === o ? [0, 0, 0] : (o *= 2, a *= o <= 1 ? o : 2 - o, n = (o + a) / 2, e = 2 * a / (o + a), [i, 100 * e, 100 * n]);
        },
        hsl2hwb: function hsl2hwb(t) {
          return o(c(t));
        },
        hsl2cmyk: function hsl2cmyk(t) {
          return l(c(t));
        },
        hsl2keyword: function hsl2keyword(t) {
          return s(c(t));
        },
        hsv2rgb: h,
        hsv2hsl: function hsv2hsl(t) {
          var e,
              n,
              i = t[0],
              a = t[1] / 100,
              o = t[2] / 100;
          return n = (2 - a) * o, e = a * o, e /= n <= 1 ? n : 2 - n, e = e || 0, n /= 2, [i, 100 * e, 100 * n];
        },
        hsv2hwb: function hsv2hwb(t) {
          return o(h(t));
        },
        hsv2cmyk: function hsv2cmyk(t) {
          return l(h(t));
        },
        hsv2keyword: function hsv2keyword(t) {
          return s(h(t));
        },
        hwb2rgb: f,
        hwb2hsl: function hwb2hsl(t) {
          return i(f(t));
        },
        hwb2hsv: function hwb2hsv(t) {
          return a(f(t));
        },
        hwb2cmyk: function hwb2cmyk(t) {
          return l(f(t));
        },
        hwb2keyword: function hwb2keyword(t) {
          return s(f(t));
        },
        cmyk2rgb: p,
        cmyk2hsl: function cmyk2hsl(t) {
          return i(p(t));
        },
        cmyk2hsv: function cmyk2hsv(t) {
          return a(p(t));
        },
        cmyk2hwb: function cmyk2hwb(t) {
          return o(p(t));
        },
        cmyk2keyword: function cmyk2keyword(t) {
          return s(p(t));
        },
        keyword2rgb: M,
        keyword2hsl: function keyword2hsl(t) {
          return i(M(t));
        },
        keyword2hsv: function keyword2hsv(t) {
          return a(M(t));
        },
        keyword2hwb: function keyword2hwb(t) {
          return o(M(t));
        },
        keyword2cmyk: function keyword2cmyk(t) {
          return l(M(t));
        },
        keyword2lab: function keyword2lab(t) {
          return d(M(t));
        },
        keyword2xyz: function keyword2xyz(t) {
          return u(M(t));
        },
        xyz2rgb: v,
        xyz2lab: m,
        xyz2lch: function xyz2lch(t) {
          return y(m(t));
        },
        lab2xyz: x,
        lab2rgb: k,
        lab2lch: y,
        lch2lab: w,
        lch2xyz: function lch2xyz(t) {
          return x(w(t));
        },
        lch2rgb: function lch2rgb(t) {
          return k(w(t));
        }
      };
      var S = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      },
          C = {};

      for (var _ in S) {
        C[JSON.stringify(S[_])] = _;
      }
    }, {}],
    5: [function (t, e, n) {
      var i = t(4),
          a = function a() {
        return new u();
      };

      for (var o in i) {
        a[o + "Raw"] = function (t) {
          return function (e) {
            return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), i[t](e);
          };
        }(o);

        var r = /(\w+)2(\w+)/.exec(o),
            l = r[1],
            s = r[2];

        (a[l] = a[l] || {})[s] = a[o] = function (t) {
          return function (e) {
            "number" == typeof e && (e = Array.prototype.slice.call(arguments));
            var n = i[t](e);
            if ("string" == typeof n || void 0 === n) return n;

            for (var a = 0; a < n.length; a++) {
              n[a] = Math.round(n[a]);
            }

            return n;
          };
        }(o);
      }

      var u = function u() {
        this.convs = {};
      };

      u.prototype.routeSpace = function (t, e) {
        var n = e[0];
        return void 0 === n ? this.getValues(t) : ("number" == typeof n && (n = Array.prototype.slice.call(e)), this.setValues(t, n));
      }, u.prototype.setValues = function (t, e) {
        return this.space = t, this.convs = {}, this.convs[t] = e, this;
      }, u.prototype.getValues = function (t) {
        var e = this.convs[t];

        if (!e) {
          var n = this.space,
              i = this.convs[n];
          e = a[n][t](i), this.convs[t] = e;
        }

        return e;
      }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
        u.prototype[t] = function (e) {
          return this.routeSpace(t, arguments);
        };
      }), e.exports = a;
    }, {
      4: 4
    }],
    6: [function (t, e, n) {
      "use strict";

      e.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50]
      };
    }, {}],
    7: [function (t, e, n) {
      var i = t(29)();
      i.helpers = t(45), t(27)(i), i.defaults = t(25), i.Element = t(26), i.elements = t(40), i.Interaction = t(28), i.platform = t(48), t(31)(i), t(22)(i), t(23)(i), t(24)(i), t(30)(i), t(33)(i), t(32)(i), t(35)(i), t(54)(i), t(52)(i), t(53)(i), t(55)(i), t(56)(i), t(57)(i), t(15)(i), t(16)(i), t(17)(i), t(18)(i), t(19)(i), t(20)(i), t(21)(i), t(8)(i), t(9)(i), t(10)(i), t(11)(i), t(12)(i), t(13)(i), t(14)(i);
      var a = [];
      a.push(t(49)(i), t(50)(i), t(51)(i)), i.plugins.register(a), i.platform.initialize(), e.exports = i, "undefined" != typeof window && (window.Chart = i), i.canvasHelpers = i.helpers.canvas;
    }, {
      10: 10,
      11: 11,
      12: 12,
      13: 13,
      14: 14,
      15: 15,
      16: 16,
      17: 17,
      18: 18,
      19: 19,
      20: 20,
      21: 21,
      22: 22,
      23: 23,
      24: 24,
      25: 25,
      26: 26,
      27: 27,
      28: 28,
      29: 29,
      30: 30,
      31: 31,
      32: 32,
      33: 33,
      35: 35,
      40: 40,
      45: 45,
      48: 48,
      49: 49,
      50: 50,
      51: 51,
      52: 52,
      53: 53,
      54: 54,
      55: 55,
      56: 56,
      57: 57,
      8: 8,
      9: 9
    }],
    8: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bar = function (e, n) {
          return n.type = "bar", new t(e, n);
        };
      };
    }, {}],
    9: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Bubble = function (e, n) {
          return n.type = "bubble", new t(e, n);
        };
      };
    }, {}],
    10: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Doughnut = function (e, n) {
          return n.type = "doughnut", new t(e, n);
        };
      };
    }, {}],
    11: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Line = function (e, n) {
          return n.type = "line", new t(e, n);
        };
      };
    }, {}],
    12: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.PolarArea = function (e, n) {
          return n.type = "polarArea", new t(e, n);
        };
      };
    }, {}],
    13: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Radar = function (e, n) {
          return n.type = "radar", new t(e, n);
        };
      };
    }, {}],
    14: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        t.Scatter = function (e, n) {
          return n.type = "scatter", new t(e, n);
        };
      };
    }, {}],
    15: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("bar", {
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }],
          yAxes: [{
            type: "linear"
          }]
        }
      }), i._set("horizontalBar", {
        hover: {
          mode: "index",
          axis: "y"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            position: "left",
            type: "category",
            categoryPercentage: .8,
            barPercentage: .9,
            offset: !0,
            gridLines: {
              offsetGridLines: !0
            }
          }]
        },
        elements: {
          rectangle: {
            borderSkipped: "left"
          }
        },
        tooltips: {
          callbacks: {
            title: function title(t, e) {
              var n = "";
              return t.length > 0 && (t[0].yLabel ? n = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (n = e.labels[t[0].index])), n;
            },
            label: function label(t, e) {
              return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel;
            }
          },
          mode: "index",
          axis: "y"
        }
      }), e.exports = function (t) {
        t.controllers.bar = t.DatasetController.extend({
          dataElementType: a.Rectangle,
          initialize: function initialize() {
            var e,
                n = this;
            t.DatasetController.prototype.initialize.apply(n, arguments), (e = n.getMeta()).stack = n.getDataset().stack, e.bar = !0;
          },
          update: function update(t) {
            var e,
                n,
                i = this,
                a = i.getMeta().data;

            for (i._ruler = i.getRuler(), e = 0, n = a.length; e < n; ++e) {
              i.updateElement(a[e], e, t);
            }
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.chart,
                r = i.getMeta(),
                l = i.getDataset(),
                s = t.custom || {},
                u = a.options.elements.rectangle;
            t._xScale = i.getScaleForId(r.xAxisID), t._yScale = i.getScaleForId(r.yAxisID), t._datasetIndex = i.index, t._index = e, t._model = {
              datasetLabel: l.label,
              label: a.data.labels[e],
              borderSkipped: s.borderSkipped ? s.borderSkipped : u.borderSkipped,
              backgroundColor: s.backgroundColor ? s.backgroundColor : o.valueAtIndexOrDefault(l.backgroundColor, e, u.backgroundColor),
              borderColor: s.borderColor ? s.borderColor : o.valueAtIndexOrDefault(l.borderColor, e, u.borderColor),
              borderWidth: s.borderWidth ? s.borderWidth : o.valueAtIndexOrDefault(l.borderWidth, e, u.borderWidth)
            }, i.updateElementGeometry(t, e, n), t.pivot();
          },
          updateElementGeometry: function updateElementGeometry(t, e, n) {
            var i = this,
                a = t._model,
                o = i.getValueScale(),
                r = o.getBasePixel(),
                l = o.isHorizontal(),
                s = i._ruler || i.getRuler(),
                u = i.calculateBarValuePixels(i.index, e),
                d = i.calculateBarIndexPixels(i.index, e, s);
            a.horizontal = l, a.base = n ? r : u.base, a.x = l ? n ? r : u.head : d.center, a.y = l ? d.center : n ? r : u.head, a.height = l ? d.size : void 0, a.width = l ? void 0 : d.size;
          },
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().yAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().xAxisID;
          },
          getValueScale: function getValueScale() {
            return this.getScaleForId(this.getValueScaleId());
          },
          getIndexScale: function getIndexScale() {
            return this.getScaleForId(this.getIndexScaleId());
          },
          getStackCount: function getStackCount(t) {
            var e,
                n,
                i = this,
                a = i.chart,
                o = i.getIndexScale().options.stacked,
                r = void 0 === t ? a.data.datasets.length : t + 1,
                l = [];

            for (e = 0; e < r; ++e) {
              (n = a.getDatasetMeta(e)).bar && a.isDatasetVisible(e) && (!1 === o || !0 === o && -1 === l.indexOf(n.stack) || void 0 === o && (void 0 === n.stack || -1 === l.indexOf(n.stack))) && l.push(n.stack);
            }

            return l.length;
          },
          getStackIndex: function getStackIndex(t) {
            return this.getStackCount(t) - 1;
          },
          getRuler: function getRuler() {
            var t,
                e,
                n = this,
                i = n.getIndexScale(),
                a = n.getStackCount(),
                o = n.index,
                r = [],
                l = i.isHorizontal(),
                s = l ? i.left : i.top,
                u = s + (l ? i.width : i.height);

            for (t = 0, e = n.getMeta().data.length; t < e; ++t) {
              r.push(i.getPixelForValue(null, t, o));
            }

            return {
              pixels: r,
              start: s,
              end: u,
              stackCount: a,
              scale: i
            };
          },
          calculateBarValuePixels: function calculateBarValuePixels(t, e) {
            var n,
                i,
                a,
                o,
                r,
                l,
                s = this,
                u = s.chart,
                d = s.getMeta(),
                c = s.getValueScale(),
                h = u.data.datasets,
                f = c.getRightValue(h[t].data[e]),
                g = c.options.stacked,
                p = d.stack,
                v = 0;
            if (g || void 0 === g && void 0 !== p) for (n = 0; n < t; ++n) {
              (i = u.getDatasetMeta(n)).bar && i.stack === p && i.controller.getValueScaleId() === c.id && u.isDatasetVisible(n) && (a = c.getRightValue(h[n].data[e]), (f < 0 && a < 0 || f >= 0 && a > 0) && (v += a));
            }
            return o = c.getPixelForValue(v), r = c.getPixelForValue(v + f), l = (r - o) / 2, {
              size: l,
              base: o,
              head: r,
              center: r + l / 2
            };
          },
          calculateBarIndexPixels: function calculateBarIndexPixels(t, e, n) {
            var i,
                a,
                r,
                l,
                s,
                u,
                d = this,
                c = n.scale.options,
                h = d.getStackIndex(t),
                f = n.pixels,
                g = f[e],
                p = f.length,
                v = n.start,
                m = n.end;
            return 1 === p ? (i = g > v ? g - v : m - g, a = g < m ? m - g : g - v) : (e > 0 && (i = (g - f[e - 1]) / 2, e === p - 1 && (a = i)), e < p - 1 && (a = (f[e + 1] - g) / 2, 0 === e && (i = a))), r = i * c.categoryPercentage, l = a * c.categoryPercentage, s = (r + l) / n.stackCount, u = s * c.barPercentage, u = Math.min(o.valueOrDefault(c.barThickness, u), o.valueOrDefault(c.maxBarThickness, 1 / 0)), g -= r, g += s * h, g += (s - u) / 2, {
              size: u,
              base: g,
              head: g + u,
              center: g + u / 2
            };
          },
          draw: function draw() {
            var t = this,
                e = t.chart,
                n = t.getValueScale(),
                i = t.getMeta().data,
                a = t.getDataset(),
                r = i.length,
                l = 0;

            for (o.canvas.clipArea(e.ctx, e.chartArea); l < r; ++l) {
              isNaN(n.getRightValue(a.data[l])) || i[l].draw();
            }

            o.canvas.unclipArea(e.ctx);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model;
            a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model,
                r = this.chart.options.elements.rectangle;
            a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.borderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, n, r.borderWidth);
          }
        }), t.controllers.horizontalBar = t.controllers.bar.extend({
          getValueScaleId: function getValueScaleId() {
            return this.getMeta().xAxisID;
          },
          getIndexScaleId: function getIndexScaleId() {
            return this.getMeta().yAxisID;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    16: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("bubble", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            type: "linear",
            position: "bottom",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            position: "left",
            id: "y-axis-0"
          }]
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "",
                  i = e.datasets[t.datasetIndex].data[t.index];
              return n + ": (" + t.xLabel + ", " + t.yLabel + ", " + i.r + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.bubble = t.DatasetController.extend({
          dataElementType: a.Point,
          update: function update(t) {
            var e = this,
                n = e.getMeta().data;
            o.each(n, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.getMeta(),
                o = t.custom || {},
                r = i.getScaleForId(a.xAxisID),
                l = i.getScaleForId(a.yAxisID),
                s = i._resolveElementOptions(t, e),
                u = i.getDataset().data[e],
                d = i.index,
                c = n ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == _typeof(u) ? u : NaN, e, d),
                h = n ? l.getBasePixel() : l.getPixelForValue(u, e, d);

            t._xScale = r, t._yScale = l, t._options = s, t._datasetIndex = d, t._index = e, t._model = {
              backgroundColor: s.backgroundColor,
              borderColor: s.borderColor,
              borderWidth: s.borderWidth,
              hitRadius: s.hitRadius,
              pointStyle: s.pointStyle,
              radius: n ? 0 : s.radius,
              skip: o.skip || isNaN(c) || isNaN(h),
              x: c,
              y: h
            }, t.pivot();
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = t._model,
                n = t._options;
            e.backgroundColor = o.valueOrDefault(n.hoverBackgroundColor, o.getHoverColor(n.backgroundColor)), e.borderColor = o.valueOrDefault(n.hoverBorderColor, o.getHoverColor(n.borderColor)), e.borderWidth = o.valueOrDefault(n.hoverBorderWidth, n.borderWidth), e.radius = n.radius + n.hoverRadius;
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = t._model,
                n = t._options;
            e.backgroundColor = n.backgroundColor, e.borderColor = n.borderColor, e.borderWidth = n.borderWidth, e.radius = n.radius;
          },
          _resolveElementOptions: function _resolveElementOptions(t, e) {
            var n,
                i,
                a,
                r = this,
                l = r.chart,
                s = l.data.datasets[r.index],
                u = t.custom || {},
                d = l.options.elements.point,
                c = o.options.resolve,
                h = s.data[e],
                f = {},
                g = {
              chart: l,
              dataIndex: e,
              dataset: s,
              datasetIndex: r.index
            },
                p = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];

            for (n = 0, i = p.length; n < i; ++n) {
              f[a = p[n]] = c([u[a], s[a], d[a]], g, e);
            }

            return f.radius = c([u.radius, h ? h.r : void 0, s.radius, d.radius], g, e), f;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    17: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("doughnut", {
        animation: {
          animateRotate: !0,
          animateScale: !1
        },
        hover: {
          mode: "single"
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              a = n.labels;
          if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    l = a.data[i],
                    s = l && l.custom || {},
                    u = o.valueAtIndexOrDefault,
                    d = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: s.backgroundColor ? s.backgroundColor : u(r.backgroundColor, i, d.backgroundColor),
                  strokeStyle: s.borderColor ? s.borderColor : u(r.borderColor, i, d.borderColor),
                  lineWidth: s.borderWidth ? s.borderWidth : u(r.borderWidth, i, d.borderWidth),
                  hidden: isNaN(r.data[i]) || a.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                a,
                o = e.index,
                r = this.chart;

            for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) {
              (a = r.getDatasetMeta(n)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
            }

            r.update();
          }
        },
        cutoutPercentage: 50,
        rotation: -.5 * Math.PI,
        circumference: 2 * Math.PI,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              var n = e.labels[t.index],
                  i = ": " + e.datasets[t.datasetIndex].data[t.index];
              return o.isArray(n) ? (n = n.slice())[0] += i : n += i, n;
            }
          }
        }
      }), i._set("pie", o.clone(i.doughnut)), i._set("pie", {
        cutoutPercentage: 0
      }), e.exports = function (t) {
        t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          getRingIndex: function getRingIndex(t) {
            for (var e = 0, n = 0; n < t; ++n) {
              this.chart.isDatasetVisible(n) && ++e;
            }

            return e;
          },
          update: function update(t) {
            var e = this,
                n = e.chart,
                i = n.chartArea,
                a = n.options,
                r = a.elements.arc,
                l = i.right - i.left - r.borderWidth,
                s = i.bottom - i.top - r.borderWidth,
                u = Math.min(l, s),
                d = {
              x: 0,
              y: 0
            },
                c = e.getMeta(),
                h = a.cutoutPercentage,
                f = a.circumference;

            if (f < 2 * Math.PI) {
              var g = a.rotation % (2 * Math.PI),
                  p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f,
                  v = {
                x: Math.cos(g),
                y: Math.sin(g)
              },
                  m = {
                x: Math.cos(p),
                y: Math.sin(p)
              },
                  b = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p,
                  x = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                  y = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p,
                  k = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                  w = h / 100,
                  M = {
                x: y ? -1 : Math.min(v.x * (v.x < 0 ? 1 : w), m.x * (m.x < 0 ? 1 : w)),
                y: k ? -1 : Math.min(v.y * (v.y < 0 ? 1 : w), m.y * (m.y < 0 ? 1 : w))
              },
                  S = {
                x: b ? 1 : Math.max(v.x * (v.x > 0 ? 1 : w), m.x * (m.x > 0 ? 1 : w)),
                y: x ? 1 : Math.max(v.y * (v.y > 0 ? 1 : w), m.y * (m.y > 0 ? 1 : w))
              },
                  C = {
                width: .5 * (S.x - M.x),
                height: .5 * (S.y - M.y)
              };
              u = Math.min(l / C.width, s / C.height), d = {
                x: -.5 * (S.x + M.x),
                y: -.5 * (S.y + M.y)
              };
            }

            n.borderWidth = e.getMaxBorderWidth(c.data), n.outerRadius = Math.max((u - n.borderWidth) / 2, 0), n.innerRadius = Math.max(h ? n.outerRadius / 100 * h : 0, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), n.offsetX = d.x * n.outerRadius, n.offsetY = d.y * n.outerRadius, c.total = e.calculateTotal(), e.outerRadius = n.outerRadius - n.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - n.radiusLength, 0), o.each(c.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = i.chart,
                r = a.chartArea,
                l = a.options,
                s = l.animation,
                u = (r.left + r.right) / 2,
                d = (r.top + r.bottom) / 2,
                c = l.rotation,
                h = l.rotation,
                f = i.getDataset(),
                g = n && s.animateRotate ? 0 : t.hidden ? 0 : i.calculateCircumference(f.data[e]) * (l.circumference / (2 * Math.PI)),
                p = n && s.animateScale ? 0 : i.innerRadius,
                v = n && s.animateScale ? 0 : i.outerRadius,
                m = o.valueAtIndexOrDefault;
            o.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _model: {
                x: u + a.offsetX,
                y: d + a.offsetY,
                startAngle: c,
                endAngle: h,
                circumference: g,
                outerRadius: v,
                innerRadius: p,
                label: m(f.label, e, a.data.labels[e])
              }
            });
            var b = t._model;
            this.removeHoverStyle(t), n && s.animateRotate || (b.startAngle = 0 === e ? l.rotation : i.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          calculateTotal: function calculateTotal() {
            var t,
                e = this.getDataset(),
                n = this.getMeta(),
                i = 0;
            return o.each(n.data, function (n, a) {
              t = e.data[a], isNaN(t) || n.hidden || (i += Math.abs(t));
            }), i;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().total;
            return e > 0 && !isNaN(t) ? 2 * Math.PI * (t / e) : 0;
          },
          getMaxBorderWidth: function getMaxBorderWidth(t) {
            for (var e, n, i = 0, a = this.index, o = t.length, r = 0; r < o; r++) {
              e = t[r]._model ? t[r]._model.borderWidth : 0, i = (n = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (i = e > i ? e : i) ? n : i;
            }

            return i;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    18: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("line", {
        showLines: !0,
        spanGaps: !1,
        hover: {
          mode: "label"
        },
        scales: {
          xAxes: [{
            type: "category",
            id: "x-axis-0"
          }],
          yAxes: [{
            type: "linear",
            id: "y-axis-0"
          }]
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return o.valueOrDefault(t.showLine, e.showLines);
        }

        t.controllers.line = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          update: function update(t) {
            var n,
                i,
                a,
                r = this,
                l = r.getMeta(),
                s = l.dataset,
                u = l.data || [],
                d = r.chart.options,
                c = d.elements.line,
                h = r.getScaleForId(l.yAxisID),
                f = r.getDataset(),
                g = e(f, d);

            for (g && (a = s.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), s._scale = h, s._datasetIndex = r.index, s._children = u, s._model = {
              spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
              tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
              backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
              borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
              borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
              borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
              borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
              borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
              borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
              fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
              steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
              cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
            }, s.pivot()), n = 0, i = u.length; n < i; ++n) {
              r.updateElement(u[n], n, t);
            }

            for (g && 0 !== s._model.tension && r.updateBezierControlPoints(), n = 0, i = u.length; n < i; ++n) {
              u[n].pivot();
            }
          },
          getPointBackgroundColor: function getPointBackgroundColor(t, e) {
            var n = this.chart.options.elements.point.backgroundColor,
                i = this.getDataset(),
                a = t.custom || {};
            return a.backgroundColor ? n = a.backgroundColor : i.pointBackgroundColor ? n = o.valueAtIndexOrDefault(i.pointBackgroundColor, e, n) : i.backgroundColor && (n = i.backgroundColor), n;
          },
          getPointBorderColor: function getPointBorderColor(t, e) {
            var n = this.chart.options.elements.point.borderColor,
                i = this.getDataset(),
                a = t.custom || {};
            return a.borderColor ? n = a.borderColor : i.pointBorderColor ? n = o.valueAtIndexOrDefault(i.pointBorderColor, e, n) : i.borderColor && (n = i.borderColor), n;
          },
          getPointBorderWidth: function getPointBorderWidth(t, e) {
            var n = this.chart.options.elements.point.borderWidth,
                i = this.getDataset(),
                a = t.custom || {};
            return isNaN(a.borderWidth) ? !isNaN(i.pointBorderWidth) || o.isArray(i.pointBorderWidth) ? n = o.valueAtIndexOrDefault(i.pointBorderWidth, e, n) : isNaN(i.borderWidth) || (n = i.borderWidth) : n = a.borderWidth, n;
          },
          updateElement: function updateElement(t, e, n) {
            var i,
                a,
                r = this,
                l = r.getMeta(),
                s = t.custom || {},
                u = r.getDataset(),
                d = r.index,
                c = u.data[e],
                h = r.getScaleForId(l.yAxisID),
                f = r.getScaleForId(l.xAxisID),
                g = r.chart.options.elements.point;
            void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), i = f.getPixelForValue("object" == _typeof(c) ? c : NaN, e, d), a = n ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
              x: i,
              y: a,
              skip: s.skip || isNaN(i) || isNaN(a),
              radius: s.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
              pointStyle: s.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
              backgroundColor: r.getPointBackgroundColor(t, e),
              borderColor: r.getPointBorderColor(t, e),
              borderWidth: r.getPointBorderWidth(t, e),
              tension: l.dataset._model ? l.dataset._model.tension : 0,
              steppedLine: !!l.dataset._model && l.dataset._model.steppedLine,
              hitRadius: s.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
            };
          },
          calculatePointY: function calculatePointY(t, e, n) {
            var i,
                a,
                o,
                r = this,
                l = r.chart,
                s = r.getMeta(),
                u = r.getScaleForId(s.yAxisID),
                d = 0,
                c = 0;

            if (u.options.stacked) {
              for (i = 0; i < n; i++) {
                if (a = l.data.datasets[i], "line" === (o = l.getDatasetMeta(i)).type && o.yAxisID === u.id && l.isDatasetVisible(i)) {
                  var h = Number(u.getRightValue(a.data[e]));
                  h < 0 ? c += h || 0 : d += h || 0;
                }
              }

              var f = Number(u.getRightValue(t));
              return f < 0 ? u.getPixelForValue(c + f) : u.getPixelForValue(d + f);
            }

            return u.getPixelForValue(t);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            function t(t, e, n) {
              return Math.max(Math.min(t, n), e);
            }

            var e,
                n,
                i,
                a,
                r = this,
                l = r.getMeta(),
                s = r.chart.chartArea,
                u = l.data || [];
            if (l.dataset._model.spanGaps && (u = u.filter(function (t) {
              return !t._model.skip;
            })), "monotone" === l.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(u);else for (e = 0, n = u.length; e < n; ++e) {
              i = u[e]._model, a = o.splineCurve(o.previousItem(u, e)._model, i, o.nextItem(u, e)._model, l.dataset._model.tension), i.controlPointPreviousX = a.previous.x, i.controlPointPreviousY = a.previous.y, i.controlPointNextX = a.next.x, i.controlPointNextY = a.next.y;
            }
            if (r.chart.options.elements.line.capBezierPoints) for (e = 0, n = u.length; e < n; ++e) {
              (i = u[e]._model).controlPointPreviousX = t(i.controlPointPreviousX, s.left, s.right), i.controlPointPreviousY = t(i.controlPointPreviousY, s.top, s.bottom), i.controlPointNextX = t(i.controlPointNextX, s.left, s.right), i.controlPointNextY = t(i.controlPointNextY, s.top, s.bottom);
            }
          },
          draw: function draw() {
            var t = this,
                n = t.chart,
                i = t.getMeta(),
                a = i.data || [],
                r = n.chartArea,
                l = a.length,
                s = 0;

            for (o.canvas.clipArea(n.ctx, r), e(t.getDataset(), n.options) && i.dataset.draw(), o.canvas.unclipArea(n.ctx); s < l; ++s) {
              a[s].draw(r);
            }
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                i = t.custom || {},
                a = t._model;
            a.radius = i.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this,
                n = e.chart.data.datasets[t._datasetIndex],
                i = t._index,
                a = t.custom || {},
                r = t._model;
            void 0 !== n.radius && void 0 === n.pointRadius && (n.pointRadius = n.radius), r.radius = a.radius || o.valueAtIndexOrDefault(n.pointRadius, i, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, i), r.borderColor = e.getPointBorderColor(t, i), r.borderWidth = e.getPointBorderWidth(t, i);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    19: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("polarArea", {
        scale: {
          type: "radialLinear",
          angleLines: {
            display: !1
          },
          gridLines: {
            circular: !0
          },
          pointLabels: {
            display: !1
          },
          ticks: {
            beginAtZero: !0
          }
        },
        animation: {
          animateRotate: !0,
          animateScale: !0
        },
        startAngle: -.5 * Math.PI,
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');
          var n = t.data,
              i = n.datasets,
              a = n.labels;
          if (i.length) for (var o = 0; o < i[0].data.length; ++o) {
            e.push('<li><span style="background-color:' + i[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
          }
          return e.push("</ul>"), e.join("");
        },
        legend: {
          labels: {
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return e.labels.length && e.datasets.length ? e.labels.map(function (n, i) {
                var a = t.getDatasetMeta(0),
                    r = e.datasets[0],
                    l = a.data[i].custom || {},
                    s = o.valueAtIndexOrDefault,
                    u = t.options.elements.arc;
                return {
                  text: n,
                  fillStyle: l.backgroundColor ? l.backgroundColor : s(r.backgroundColor, i, u.backgroundColor),
                  strokeStyle: l.borderColor ? l.borderColor : s(r.borderColor, i, u.borderColor),
                  lineWidth: l.borderWidth ? l.borderWidth : s(r.borderWidth, i, u.borderWidth),
                  hidden: isNaN(r.data[i]) || a.data[i].hidden,
                  index: i
                };
              }) : [];
            }
          },
          onClick: function onClick(t, e) {
            var n,
                i,
                a,
                o = e.index,
                r = this.chart;

            for (n = 0, i = (r.data.datasets || []).length; n < i; ++n) {
              (a = r.getDatasetMeta(n)).data[o].hidden = !a.data[o].hidden;
            }

            r.update();
          }
        },
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t, e) {
              return e.labels[t.index] + ": " + t.yLabel;
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.polarArea = t.DatasetController.extend({
          dataElementType: a.Arc,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                n = e.chart,
                i = n.chartArea,
                a = e.getMeta(),
                r = n.options,
                l = r.elements.arc,
                s = Math.min(i.right - i.left, i.bottom - i.top);
            n.outerRadius = Math.max((s - l.borderWidth / 2) / 2, 0), n.innerRadius = Math.max(r.cutoutPercentage ? n.outerRadius / 100 * r.cutoutPercentage : 1, 0), n.radiusLength = (n.outerRadius - n.innerRadius) / n.getVisibleDatasetCount(), e.outerRadius = n.outerRadius - n.radiusLength * e.index, e.innerRadius = e.outerRadius - n.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function (n, i) {
              e.updateElement(n, i, t);
            });
          },
          updateElement: function updateElement(t, e, n) {
            for (var i = this, a = i.chart, r = i.getDataset(), l = a.options, s = l.animation, u = a.scale, d = a.data.labels, c = i.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = i.getMeta(), v = 0; v < e; ++v) {
              isNaN(r.data[v]) || p.data[v].hidden || ++g;
            }

            var m = l.startAngle,
                b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]),
                x = m + c * g,
                y = x + (t.hidden ? 0 : c),
                k = s.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
            o.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: u,
              _model: {
                x: h,
                y: f,
                innerRadius: 0,
                outerRadius: n ? k : b,
                startAngle: n && s.animateRotate ? m : x,
                endAngle: n && s.animateRotate ? m : y,
                label: o.valueAtIndexOrDefault(d, e, d[e])
              }
            }), i.removeHoverStyle(t), t.pivot();
          },
          removeHoverStyle: function removeHoverStyle(e) {
            t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc);
          },
          countVisibleElements: function countVisibleElements() {
            var t = this.getDataset(),
                e = this.getMeta(),
                n = 0;
            return o.each(e.data, function (e, i) {
              isNaN(t.data[i]) || e.hidden || n++;
            }), n;
          },
          calculateCircumference: function calculateCircumference(t) {
            var e = this.getMeta().count;
            return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0;
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    20: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("radar", {
        scale: {
          type: "radialLinear"
        },
        elements: {
          line: {
            tension: 0
          }
        }
      }), e.exports = function (t) {
        t.controllers.radar = t.DatasetController.extend({
          datasetElementType: a.Line,
          dataElementType: a.Point,
          linkScales: o.noop,
          update: function update(t) {
            var e = this,
                n = e.getMeta(),
                i = n.dataset,
                a = n.data,
                r = i.custom || {},
                l = e.getDataset(),
                s = e.chart.options.elements.line,
                u = e.chart.scale;
            void 0 !== l.tension && void 0 === l.lineTension && (l.lineTension = l.tension), o.extend(n.dataset, {
              _datasetIndex: e.index,
              _scale: u,
              _children: a,
              _loop: !0,
              _model: {
                tension: r.tension ? r.tension : o.valueOrDefault(l.lineTension, s.tension),
                backgroundColor: r.backgroundColor ? r.backgroundColor : l.backgroundColor || s.backgroundColor,
                borderWidth: r.borderWidth ? r.borderWidth : l.borderWidth || s.borderWidth,
                borderColor: r.borderColor ? r.borderColor : l.borderColor || s.borderColor,
                fill: r.fill ? r.fill : void 0 !== l.fill ? l.fill : s.fill,
                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : l.borderCapStyle || s.borderCapStyle,
                borderDash: r.borderDash ? r.borderDash : l.borderDash || s.borderDash,
                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : l.borderDashOffset || s.borderDashOffset,
                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : l.borderJoinStyle || s.borderJoinStyle
              }
            }), n.dataset.pivot(), o.each(a, function (n, i) {
              e.updateElement(n, i, t);
            }, e), e.updateBezierControlPoints();
          },
          updateElement: function updateElement(t, e, n) {
            var i = this,
                a = t.custom || {},
                r = i.getDataset(),
                l = i.chart.scale,
                s = i.chart.options.elements.point,
                u = l.getPointPositionForValue(e, r.data[e]);
            void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
              _datasetIndex: i.index,
              _index: e,
              _scale: l,
              _model: {
                x: n ? l.xCenter : u.x,
                y: n ? l.yCenter : u.y,
                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, i.chart.options.elements.line.tension),
                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, s.radius),
                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, s.backgroundColor),
                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, s.borderColor),
                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, s.borderWidth),
                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, s.pointStyle),
                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, s.hitRadius)
              }
            }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y);
          },
          updateBezierControlPoints: function updateBezierControlPoints() {
            var t = this.chart.chartArea,
                e = this.getMeta();
            o.each(e.data, function (n, i) {
              var a = n._model,
                  r = o.splineCurve(o.previousItem(e.data, i, !0)._model, a, o.nextItem(e.data, i, !0)._model, a.tension);
              a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), n.pivot();
            });
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t.custom || {},
                i = t._index,
                a = t._model;
            a.radius = n.hoverRadius ? n.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth);
          },
          removeHoverStyle: function removeHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t.custom || {},
                i = t._index,
                a = t._model,
                r = this.chart.options.elements.point;
            a.radius = n.radius ? n.radius : o.valueAtIndexOrDefault(e.pointRadius, i, r.radius), a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, i, r.borderWidth);
          }
        });
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    21: [function (t, e, n) {
      "use strict";

      t(25)._set("scatter", {
        hover: {
          mode: "single"
        },
        scales: {
          xAxes: [{
            id: "x-axis-1",
            type: "linear",
            position: "bottom"
          }],
          yAxes: [{
            id: "y-axis-1",
            type: "linear",
            position: "left"
          }]
        },
        showLines: !1,
        tooltips: {
          callbacks: {
            title: function title() {
              return "";
            },
            label: function label(t) {
              return "(" + t.xLabel + ", " + t.yLabel + ")";
            }
          }
        }
      }), e.exports = function (t) {
        t.controllers.scatter = t.controllers.line;
      };
    }, {
      25: 25
    }],
    22: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        animation: {
          duration: 1e3,
          easing: "easeOutQuart",
          onProgress: o.noop,
          onComplete: o.noop
        }
      }), e.exports = function (t) {
        t.Animation = a.extend({
          chart: null,
          currentStep: 0,
          numSteps: 60,
          easing: "",
          render: null,
          onAnimationProgress: null,
          onAnimationComplete: null
        }), t.animationService = {
          frameDuration: 17,
          animations: [],
          dropFrames: 0,
          request: null,
          addAnimation: function addAnimation(t, e, n, i) {
            var a,
                o,
                r = this.animations;

            for (e.chart = t, i || (t.animating = !0), a = 0, o = r.length; a < o; ++a) {
              if (r[a].chart === t) return void (r[a] = e);
            }

            r.push(e), 1 === r.length && this.requestAnimationFrame();
          },
          cancelAnimation: function cancelAnimation(t) {
            var e = o.findIndex(this.animations, function (e) {
              return e.chart === t;
            });
            -1 !== e && (this.animations.splice(e, 1), t.animating = !1);
          },
          requestAnimationFrame: function requestAnimationFrame() {
            var t = this;
            null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
              t.request = null, t.startDigest();
            }));
          },
          startDigest: function startDigest() {
            var t = this,
                e = Date.now(),
                n = 0;
            t.dropFrames > 1 && (n = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + n);
            var i = Date.now();
            t.dropFrames += (i - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame();
          },
          advance: function advance(t) {
            for (var e, n, i = this.animations, a = 0; a < i.length;) {
              n = (e = i[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [n, e], n), o.callback(e.onAnimationProgress, [e], n), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], n), n.animating = !1, i.splice(a, 1)) : ++a;
            }
          }
        }, Object.defineProperty(t.Animation.prototype, "animationObject", {
          get: function get() {
            return this;
          }
        }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
          get: function get() {
            return this.chart;
          },
          set: function set(t) {
            this.chart = t;
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    23: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          o = t(28),
          r = t(48);

      e.exports = function (t) {
        function e(t) {
          var e = (t = t || {}).data = t.data || {};
          return e.datasets = e.datasets || [], e.labels = e.labels || [], t.options = a.configMerge(i.global, i[t.type], t.options || {}), t;
        }

        function n(t) {
          var e = t.options;
          e.scale ? t.scale.options = e.scale : e.scales && e.scales.xAxes.concat(e.scales.yAxes).forEach(function (e) {
            t.scales[e.id].options = e;
          }), t.tooltip._options = e.tooltips;
        }

        function l(t) {
          return "top" === t || "bottom" === t;
        }

        var s = t.plugins;
        t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
          construct: function construct(n, i) {
            var o = this;
            i = e(i);
            var l = r.acquireContext(n, i),
                s = l && l.canvas,
                u = s && s.height,
                d = s && s.width;
            o.id = a.uid(), o.ctx = l, o.canvas = s, o.config = i, o.width = d, o.height = u, o.aspectRatio = u ? d / u : null, o.options = i.options, o._bufferedRender = !1, o.chart = o, o.controller = o, t.instances[o.id] = o, Object.defineProperty(o, "data", {
              get: function get() {
                return o.config.data;
              },
              set: function set(t) {
                o.config.data = t;
              }
            }), l && s ? (o.initialize(), o.update()) : console.error("Failed to create chart: can't acquire context from the given item");
          },
          initialize: function initialize() {
            var t = this;
            return s.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildScales(), t.initToolTip(), s.notify(t, "afterInit"), t;
          },
          clear: function clear() {
            return a.canvas.clear(this), this;
          },
          stop: function stop() {
            return t.animationService.cancelAnimation(this), this;
          },
          resize: function resize(t) {
            var e = this,
                n = e.options,
                i = e.canvas,
                o = n.maintainAspectRatio && e.aspectRatio || null,
                r = Math.max(0, Math.floor(a.getMaximumWidth(i))),
                l = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(i)));

            if ((e.width !== r || e.height !== l) && (i.width = e.width = r, i.height = e.height = l, i.style.width = r + "px", i.style.height = l + "px", a.retinaScale(e, n.devicePixelRatio), !t)) {
              var u = {
                width: r,
                height: l
              };
              s.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration);
            }
          },
          ensureScalesHaveIDs: function ensureScalesHaveIDs() {
            var t = this.options,
                e = t.scales || {},
                n = t.scale;
            a.each(e.xAxes, function (t, e) {
              t.id = t.id || "x-axis-" + e;
            }), a.each(e.yAxes, function (t, e) {
              t.id = t.id || "y-axis-" + e;
            }), n && (n.id = n.id || "scale");
          },
          buildScales: function buildScales() {
            var e = this,
                n = e.options,
                i = e.scales = {},
                o = [];
            n.scales && (o = o.concat((n.scales.xAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "category",
                dposition: "bottom"
              };
            }), (n.scales.yAxes || []).map(function (t) {
              return {
                options: t,
                dtype: "linear",
                dposition: "left"
              };
            }))), n.scale && o.push({
              options: n.scale,
              dtype: "radialLinear",
              isDefault: !0,
              dposition: "chartArea"
            }), a.each(o, function (n) {
              var o = n.options,
                  r = a.valueOrDefault(o.type, n.dtype),
                  s = t.scaleService.getScaleConstructor(r);

              if (s) {
                l(o.position) !== l(n.dposition) && (o.position = n.dposition);
                var u = new s({
                  id: o.id,
                  options: o,
                  ctx: e.ctx,
                  chart: e
                });
                i[u.id] = u, u.mergeTicksOptions(), n.isDefault && (e.scale = u);
              }
            }), t.scaleService.addScalesToLayout(this);
          },
          buildOrUpdateControllers: function buildOrUpdateControllers() {
            var e = this,
                n = [],
                i = [];
            return a.each(e.data.datasets, function (a, o) {
              var r = e.getDatasetMeta(o),
                  l = a.type || e.config.type;
              if (r.type && r.type !== l && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = l, n.push(r.type), r.controller) r.controller.updateIndex(o);else {
                var s = t.controllers[r.type];
                if (void 0 === s) throw new Error('"' + r.type + '" is not a chart type.');
                r.controller = new s(e, o), i.push(r.controller);
              }
            }, e), i;
          },
          resetElements: function resetElements() {
            var t = this;
            a.each(t.data.datasets, function (e, n) {
              t.getDatasetMeta(n).controller.reset();
            }, t);
          },
          reset: function reset() {
            this.resetElements(), this.tooltip.initialize();
          },
          update: function update(t) {
            var e = this;

            if (t && "object" == _typeof(t) || (t = {
              duration: t,
              lazy: arguments[1]
            }), n(e), !1 !== s.notify(e, "beforeUpdate")) {
              e.tooltip._data = e.data;
              var i = e.buildOrUpdateControllers();
              a.each(e.data.datasets, function (t, n) {
                e.getDatasetMeta(n).controller.buildOrUpdateElements();
              }, e), e.updateLayout(), a.each(i, function (t) {
                t.reset();
              }), e.updateDatasets(), e.tooltip.initialize(), e.lastActive = [], s.notify(e, "afterUpdate"), e._bufferedRender ? e._bufferedRequest = {
                duration: t.duration,
                easing: t.easing,
                lazy: t.lazy
              } : e.render(t);
            }
          },
          updateLayout: function updateLayout() {
            var e = this;
            !1 !== s.notify(e, "beforeLayout") && (t.layoutService.update(this, this.width, this.height), s.notify(e, "afterScaleUpdate"), s.notify(e, "afterLayout"));
          },
          updateDatasets: function updateDatasets() {
            var t = this;

            if (!1 !== s.notify(t, "beforeDatasetsUpdate")) {
              for (var e = 0, n = t.data.datasets.length; e < n; ++e) {
                t.updateDataset(e);
              }

              s.notify(t, "afterDatasetsUpdate");
            }
          },
          updateDataset: function updateDataset(t) {
            var e = this,
                n = e.getDatasetMeta(t),
                i = {
              meta: n,
              index: t
            };
            !1 !== s.notify(e, "beforeDatasetUpdate", [i]) && (n.controller.update(), s.notify(e, "afterDatasetUpdate", [i]));
          },
          render: function render(e) {
            var n = this;
            e && "object" == _typeof(e) || (e = {
              duration: e,
              lazy: arguments[1]
            });
            var i = e.duration,
                o = e.lazy;

            if (!1 !== s.notify(n, "beforeRender")) {
              var r = n.options.animation,
                  l = function l(t) {
                s.notify(n, "afterRender"), a.callback(r && r.onComplete, [t], n);
              };

              if (r && (void 0 !== i && 0 !== i || void 0 === i && 0 !== r.duration)) {
                var u = new t.Animation({
                  numSteps: (i || r.duration) / 16.66,
                  easing: e.easing || r.easing,
                  render: function render(t, e) {
                    var n = a.easing.effects[e.easing],
                        i = e.currentStep,
                        o = i / e.numSteps;
                    t.draw(n(o), o, i);
                  },
                  onAnimationProgress: r.onProgress,
                  onAnimationComplete: l
                });
                t.animationService.addAnimation(n, u, i, o);
              } else n.draw(), l(new t.Animation({
                numSteps: 0,
                chart: n
              }));

              return n;
            }
          },
          draw: function draw(t) {
            var e = this;
            e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== s.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
              t.draw(e.chartArea);
            }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), s.notify(e, "afterDraw", [t]));
          },
          transition: function transition(t) {
            for (var e = this, n = 0, i = (e.data.datasets || []).length; n < i; ++n) {
              e.isDatasetVisible(n) && e.getDatasetMeta(n).controller.transition(t);
            }

            e.tooltip.transition(t);
          },
          drawDatasets: function drawDatasets(t) {
            var e = this;

            if (!1 !== s.notify(e, "beforeDatasetsDraw", [t])) {
              for (var n = (e.data.datasets || []).length - 1; n >= 0; --n) {
                e.isDatasetVisible(n) && e.drawDataset(n, t);
              }

              s.notify(e, "afterDatasetsDraw", [t]);
            }
          },
          drawDataset: function drawDataset(t, e) {
            var n = this,
                i = n.getDatasetMeta(t),
                a = {
              meta: i,
              index: t,
              easingValue: e
            };
            !1 !== s.notify(n, "beforeDatasetDraw", [a]) && (i.controller.draw(e), s.notify(n, "afterDatasetDraw", [a]));
          },
          _drawTooltip: function _drawTooltip(t) {
            var e = this,
                n = e.tooltip,
                i = {
              tooltip: n,
              easingValue: t
            };
            !1 !== s.notify(e, "beforeTooltipDraw", [i]) && (n.draw(), s.notify(e, "afterTooltipDraw", [i]));
          },
          getElementAtEvent: function getElementAtEvent(t) {
            return o.modes.single(this, t);
          },
          getElementsAtEvent: function getElementsAtEvent(t) {
            return o.modes.label(this, t, {
              intersect: !0
            });
          },
          getElementsAtXAxis: function getElementsAtXAxis(t) {
            return o.modes["x-axis"](this, t, {
              intersect: !0
            });
          },
          getElementsAtEventForMode: function getElementsAtEventForMode(t, e, n) {
            var i = o.modes[e];
            return "function" == typeof i ? i(this, t, n) : [];
          },
          getDatasetAtEvent: function getDatasetAtEvent(t) {
            return o.modes.dataset(this, t, {
              intersect: !0
            });
          },
          getDatasetMeta: function getDatasetMeta(t) {
            var e = this,
                n = e.data.datasets[t];
            n._meta || (n._meta = {});
            var i = n._meta[e.id];
            return i || (i = n._meta[e.id] = {
              type: null,
              data: [],
              dataset: null,
              controller: null,
              hidden: null,
              xAxisID: null,
              yAxisID: null
            }), i;
          },
          getVisibleDatasetCount: function getVisibleDatasetCount() {
            for (var t = 0, e = 0, n = this.data.datasets.length; e < n; ++e) {
              this.isDatasetVisible(e) && t++;
            }

            return t;
          },
          isDatasetVisible: function isDatasetVisible(t) {
            var e = this.getDatasetMeta(t);
            return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden;
          },
          generateLegend: function generateLegend() {
            return this.options.legendCallback(this);
          },
          destroyDatasetMeta: function destroyDatasetMeta(t) {
            var e = this.id,
                n = this.data.datasets[t],
                i = n._meta && n._meta[e];
            i && (i.controller.destroy(), delete n._meta[e]);
          },
          destroy: function destroy() {
            var e,
                n,
                i = this,
                o = i.canvas;

            for (i.stop(), e = 0, n = i.data.datasets.length; e < n; ++e) {
              i.destroyDatasetMeta(e);
            }

            o && (i.unbindEvents(), a.canvas.clear(i), r.releaseContext(i.ctx), i.canvas = null, i.ctx = null), s.notify(i, "destroy"), delete t.instances[i.id];
          },
          toBase64Image: function toBase64Image() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
          },
          initToolTip: function initToolTip() {
            var e = this;
            e.tooltip = new t.Tooltip({
              _chart: e,
              _chartInstance: e,
              _data: e.data,
              _options: e.options.tooltips
            }, e);
          },
          bindEvents: function bindEvents() {
            var t = this,
                e = t._listeners = {},
                n = function n() {
              t.eventHandler.apply(t, arguments);
            };

            a.each(t.options.events, function (i) {
              r.addEventListener(t, i, n), e[i] = n;
            }), t.options.responsive && (n = function n() {
              t.resize();
            }, r.addEventListener(t, "resize", n), e.resize = n);
          },
          unbindEvents: function unbindEvents() {
            var t = this,
                e = t._listeners;
            e && (delete t._listeners, a.each(e, function (e, n) {
              r.removeEventListener(t, n, e);
            }));
          },
          updateHoverStyle: function updateHoverStyle(t, e, n) {
            var i,
                a,
                o,
                r = n ? "setHoverStyle" : "removeHoverStyle";

            for (a = 0, o = t.length; a < o; ++a) {
              (i = t[a]) && this.getDatasetMeta(i._datasetIndex).controller[r](i);
            }
          },
          eventHandler: function eventHandler(t) {
            var e = this,
                n = e.tooltip;

            if (!1 !== s.notify(e, "beforeEvent", [t])) {
              e._bufferedRender = !0, e._bufferedRequest = null;
              var i = e.handleEvent(t);
              i |= n && n.handleEvent(t), s.notify(e, "afterEvent", [t]);
              var a = e._bufferedRequest;
              return a ? e.render(a) : i && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e;
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e.options || {},
                i = n.hover,
                o = !1;
            return e.lastActive = e.lastActive || [], "mouseout" === t.type ? e.active = [] : e.active = e.getElementsAtEventForMode(t, i.mode, i), a.callback(n.onHover || n.hover.onHover, [t["native"], e.active], e), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(e, t["native"], e.active), e.lastActive.length && e.updateHoverStyle(e.lastActive, i.mode, !1), e.active.length && i.mode && e.updateHoverStyle(e.active, i.mode, !0), o = !a.arrayEquals(e.active, e.lastActive), e.lastActive = e.active, o;
          }
        }), t.Controller = t;
      };
    }, {
      25: 25,
      28: 28,
      45: 45,
      48: 48
    }],
    24: [function (t, e, n) {
      "use strict";

      var i = t(45);

      e.exports = function (t) {
        function e(t, e) {
          t._chartjs ? t._chartjs.listeners.push(e) : (Object.defineProperty(t, "_chartjs", {
            configurable: !0,
            enumerable: !1,
            value: {
              listeners: [e]
            }
          }), a.forEach(function (e) {
            var n = "onData" + e.charAt(0).toUpperCase() + e.slice(1),
                a = t[e];
            Object.defineProperty(t, e, {
              configurable: !0,
              enumerable: !1,
              value: function value() {
                var e = Array.prototype.slice.call(arguments),
                    o = a.apply(this, e);
                return i.each(t._chartjs.listeners, function (t) {
                  "function" == typeof t[n] && t[n].apply(t, e);
                }), o;
              }
            });
          }));
        }

        function n(t, e) {
          var n = t._chartjs;

          if (n) {
            var i = n.listeners,
                o = i.indexOf(e);
            -1 !== o && i.splice(o, 1), i.length > 0 || (a.forEach(function (e) {
              delete t[e];
            }), delete t._chartjs);
          }
        }

        var a = ["push", "pop", "shift", "splice", "unshift"];
        t.DatasetController = function (t, e) {
          this.initialize(t, e);
        }, i.extend(t.DatasetController.prototype, {
          datasetElementType: null,
          dataElementType: null,
          initialize: function initialize(t, e) {
            var n = this;
            n.chart = t, n.index = e, n.linkScales(), n.addElements();
          },
          updateIndex: function updateIndex(t) {
            this.index = t;
          },
          linkScales: function linkScales() {
            var t = this,
                e = t.getMeta(),
                n = t.getDataset();
            null === e.xAxisID && (e.xAxisID = n.xAxisID || t.chart.options.scales.xAxes[0].id), null === e.yAxisID && (e.yAxisID = n.yAxisID || t.chart.options.scales.yAxes[0].id);
          },
          getDataset: function getDataset() {
            return this.chart.data.datasets[this.index];
          },
          getMeta: function getMeta() {
            return this.chart.getDatasetMeta(this.index);
          },
          getScaleForId: function getScaleForId(t) {
            return this.chart.scales[t];
          },
          reset: function reset() {
            this.update(!0);
          },
          destroy: function destroy() {
            this._data && n(this._data, this);
          },
          createMetaDataset: function createMetaDataset() {
            var t = this,
                e = t.datasetElementType;
            return e && new e({
              _chart: t.chart,
              _datasetIndex: t.index
            });
          },
          createMetaData: function createMetaData(t) {
            var e = this,
                n = e.dataElementType;
            return n && new n({
              _chart: e.chart,
              _datasetIndex: e.index,
              _index: t
            });
          },
          addElements: function addElements() {
            var t,
                e,
                n = this,
                i = n.getMeta(),
                a = n.getDataset().data || [],
                o = i.data;

            for (t = 0, e = a.length; t < e; ++t) {
              o[t] = o[t] || n.createMetaData(t);
            }

            i.dataset = i.dataset || n.createMetaDataset();
          },
          addElementAndReset: function addElementAndReset(t) {
            var e = this.createMetaData(t);
            this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0);
          },
          buildOrUpdateElements: function buildOrUpdateElements() {
            var t = this,
                i = t.getDataset(),
                a = i.data || (i.data = []);
            t._data !== a && (t._data && n(t._data, t), e(a, t), t._data = a), t.resyncElements();
          },
          update: i.noop,
          transition: function transition(t) {
            for (var e = this.getMeta(), n = e.data || [], i = n.length, a = 0; a < i; ++a) {
              n[a].transition(t);
            }

            e.dataset && e.dataset.transition(t);
          },
          draw: function draw() {
            var t = this.getMeta(),
                e = t.data || [],
                n = e.length,
                i = 0;

            for (t.dataset && t.dataset.draw(); i < n; ++i) {
              e[i].draw();
            }
          },
          removeHoverStyle: function removeHoverStyle(t, e) {
            var n = this.chart.data.datasets[t._datasetIndex],
                a = t._index,
                o = t.custom || {},
                r = i.valueAtIndexOrDefault,
                l = t._model;
            l.backgroundColor = o.backgroundColor ? o.backgroundColor : r(n.backgroundColor, a, e.backgroundColor), l.borderColor = o.borderColor ? o.borderColor : r(n.borderColor, a, e.borderColor), l.borderWidth = o.borderWidth ? o.borderWidth : r(n.borderWidth, a, e.borderWidth);
          },
          setHoverStyle: function setHoverStyle(t) {
            var e = this.chart.data.datasets[t._datasetIndex],
                n = t._index,
                a = t.custom || {},
                o = i.valueAtIndexOrDefault,
                r = i.getHoverColor,
                l = t._model;
            l.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, n, r(l.backgroundColor)), l.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, n, r(l.borderColor)), l.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, n, l.borderWidth);
          },
          resyncElements: function resyncElements() {
            var t = this,
                e = t.getMeta(),
                n = t.getDataset().data,
                i = e.data.length,
                a = n.length;
            a < i ? e.data.splice(a, i - a) : a > i && t.insertElements(i, a - i);
          },
          insertElements: function insertElements(t, e) {
            for (var n = 0; n < e; ++n) {
              this.addElementAndReset(t + n);
            }
          },
          onDataPush: function onDataPush() {
            this.insertElements(this.getDataset().data.length - 1, arguments.length);
          },
          onDataPop: function onDataPop() {
            this.getMeta().data.pop();
          },
          onDataShift: function onDataShift() {
            this.getMeta().data.shift();
          },
          onDataSplice: function onDataSplice(t, e) {
            this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2);
          },
          onDataUnshift: function onDataUnshift() {
            this.insertElements(0, arguments.length);
          }
        }), t.DatasetController.extend = i.inherits;
      };
    }, {
      45: 45
    }],
    25: [function (t, e, n) {
      "use strict";

      var i = t(45);
      e.exports = {
        _set: function _set(t, e) {
          return i.merge(this[t] || (this[t] = {}), e);
        }
      };
    }, {
      45: 45
    }],
    26: [function (t, e, n) {
      "use strict";

      function i(t, e, n, i) {
        var o,
            r,
            l,
            s,
            u,
            d,
            c,
            h,
            f,
            g = Object.keys(n);

        for (o = 0, r = g.length; o < r; ++o) {
          if (l = g[o], d = n[l], e.hasOwnProperty(l) || (e[l] = d), (s = e[l]) !== d && "_" !== l[0]) {
            if (t.hasOwnProperty(l) || (t[l] = s), u = t[l], (c = _typeof(d)) === _typeof(u)) if ("string" === c) {
              if ((h = a(u)).valid && (f = a(d)).valid) {
                e[l] = f.mix(h, i).rgbString();
                continue;
              }
            } else if ("number" === c && isFinite(u) && isFinite(d)) {
              e[l] = u + (d - u) * i;
              continue;
            }
            e[l] = d;
          }
        }
      }

      var a = t(3),
          o = t(45),
          r = function r(t) {
        o.extend(this, t), this.initialize.apply(this, arguments);
      };

      o.extend(r.prototype, {
        initialize: function initialize() {
          this.hidden = !1;
        },
        pivot: function pivot() {
          var t = this;
          return t._view || (t._view = o.clone(t._model)), t._start = {}, t;
        },
        transition: function transition(t) {
          var e = this,
              n = e._model,
              a = e._start,
              o = e._view;
          return n && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), i(a, o, n, t), e) : (e._view = n, e._start = null, e);
        },
        tooltipPosition: function tooltipPosition() {
          return {
            x: this._model.x,
            y: this._model.y
          };
        },
        hasValue: function hasValue() {
          return o.isNumber(this._model.x) && o.isNumber(this._model.y);
        }
      }), r.extend = o.inherits, e.exports = r;
    }, {
      3: 3,
      45: 45
    }],
    27: [function (t, e, n) {
      "use strict";

      var i = t(3),
          a = t(25),
          o = t(45);

      e.exports = function (t) {
        function e(t, e, n) {
          var i;
          return "string" == typeof t ? (i = parseInt(t, 10), -1 !== t.indexOf("%") && (i = i / 100 * e.parentNode[n])) : i = t, i;
        }

        function n(t) {
          return void 0 !== t && null !== t && "none" !== t;
        }

        function r(t, i, a) {
          var o = document.defaultView,
              r = t.parentNode,
              l = o.getComputedStyle(t)[i],
              s = o.getComputedStyle(r)[i],
              u = n(l),
              d = n(s),
              c = Number.POSITIVE_INFINITY;
          return u || d ? Math.min(u ? e(l, t, a) : c, d ? e(s, r, a) : c) : "none";
        }

        o.configMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, n, i, a) {
              var r = n[e] || {},
                  l = i[e];
              "scales" === e ? n[e] = o.scaleMerge(r, l) : "scale" === e ? n[e] = o.merge(r, [t.scaleService.getScaleDefaults(l.type), l]) : o._merger(e, n, i, a);
            }
          });
        }, o.scaleMerge = function () {
          return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
            merger: function merger(e, n, i, a) {
              if ("xAxes" === e || "yAxes" === e) {
                var r,
                    l,
                    s,
                    u = i[e].length;

                for (n[e] || (n[e] = []), r = 0; r < u; ++r) {
                  s = i[e][r], l = o.valueOrDefault(s.type, "xAxes" === e ? "category" : "linear"), r >= n[e].length && n[e].push({}), !n[e][r].type || s.type && s.type !== n[e][r].type ? o.merge(n[e][r], [t.scaleService.getScaleDefaults(l), s]) : o.merge(n[e][r], s);
                }
              } else o._merger(e, n, i, a);
            }
          });
        }, o.where = function (t, e) {
          if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
          var n = [];
          return o.each(t, function (t) {
            e(t) && n.push(t);
          }), n;
        }, o.findIndex = Array.prototype.findIndex ? function (t, e, n) {
          return t.findIndex(e, n);
        } : function (t, e, n) {
          n = void 0 === n ? t : n;

          for (var i = 0, a = t.length; i < a; ++i) {
            if (e.call(n, t[i], i, t)) return i;
          }

          return -1;
        }, o.findNextWhere = function (t, e, n) {
          o.isNullOrUndef(n) && (n = -1);

          for (var i = n + 1; i < t.length; i++) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, o.findPreviousWhere = function (t, e, n) {
          o.isNullOrUndef(n) && (n = t.length);

          for (var i = n - 1; i >= 0; i--) {
            var a = t[i];
            if (e(a)) return a;
          }
        }, o.isNumber = function (t) {
          return !isNaN(parseFloat(t)) && isFinite(t);
        }, o.almostEquals = function (t, e, n) {
          return Math.abs(t - e) < n;
        }, o.almostWhole = function (t, e) {
          var n = Math.round(t);
          return n - e < t && n + e > t;
        }, o.max = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.max(t, e);
          }, Number.NEGATIVE_INFINITY);
        }, o.min = function (t) {
          return t.reduce(function (t, e) {
            return isNaN(e) ? t : Math.min(t, e);
          }, Number.POSITIVE_INFINITY);
        }, o.sign = Math.sign ? function (t) {
          return Math.sign(t);
        } : function (t) {
          return 0 == (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1;
        }, o.log10 = Math.log10 ? function (t) {
          return Math.log10(t);
        } : function (t) {
          return Math.log(t) / Math.LN10;
        }, o.toRadians = function (t) {
          return t * (Math.PI / 180);
        }, o.toDegrees = function (t) {
          return t * (180 / Math.PI);
        }, o.getAngleFromPoint = function (t, e) {
          var n = e.x - t.x,
              i = e.y - t.y,
              a = Math.sqrt(n * n + i * i),
              o = Math.atan2(i, n);
          return o < -.5 * Math.PI && (o += 2 * Math.PI), {
            angle: o,
            distance: a
          };
        }, o.distanceBetweenPoints = function (t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
        }, o.aliasPixel = function (t) {
          return t % 2 == 0 ? 0 : .5;
        }, o.splineCurve = function (t, e, n, i) {
          var a = t.skip ? e : t,
              o = e,
              r = n.skip ? e : n,
              l = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)),
              s = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
              u = l / (l + s),
              d = s / (l + s),
              c = i * (u = isNaN(u) ? 0 : u),
              h = i * (d = isNaN(d) ? 0 : d);
          return {
            previous: {
              x: o.x - c * (r.x - a.x),
              y: o.y - c * (r.y - a.y)
            },
            next: {
              x: o.x + h * (r.x - a.x),
              y: o.y + h * (r.y - a.y)
            }
          };
        }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
          var e,
              n,
              i,
              a,
              r = (t || []).map(function (t) {
            return {
              model: t._model,
              deltaK: 0,
              mK: 0
            };
          }),
              l = r.length;

          for (e = 0; e < l; ++e) {
            if (!(i = r[e]).model.skip) {
              if (n = e > 0 ? r[e - 1] : null, (a = e < l - 1 ? r[e + 1] : null) && !a.model.skip) {
                var s = a.model.x - i.model.x;
                i.deltaK = 0 !== s ? (a.model.y - i.model.y) / s : 0;
              }

              !n || n.model.skip ? i.mK = i.deltaK : !a || a.model.skip ? i.mK = n.deltaK : this.sign(n.deltaK) !== this.sign(i.deltaK) ? i.mK = 0 : i.mK = (n.deltaK + i.deltaK) / 2;
            }
          }

          var u, d, c, h;

          for (e = 0; e < l - 1; ++e) {
            i = r[e], a = r[e + 1], i.model.skip || a.model.skip || (o.almostEquals(i.deltaK, 0, this.EPSILON) ? i.mK = a.mK = 0 : (u = i.mK / i.deltaK, d = a.mK / i.deltaK, (h = Math.pow(u, 2) + Math.pow(d, 2)) <= 9 || (c = 3 / Math.sqrt(h), i.mK = u * c * i.deltaK, a.mK = d * c * i.deltaK)));
          }

          var f;

          for (e = 0; e < l; ++e) {
            (i = r[e]).model.skip || (n = e > 0 ? r[e - 1] : null, a = e < l - 1 ? r[e + 1] : null, n && !n.model.skip && (f = (i.model.x - n.model.x) / 3, i.model.controlPointPreviousX = i.model.x - f, i.model.controlPointPreviousY = i.model.y - f * i.mK), a && !a.model.skip && (f = (a.model.x - i.model.x) / 3, i.model.controlPointNextX = i.model.x + f, i.model.controlPointNextY = i.model.y + f * i.mK));
          }
        }, o.nextItem = function (t, e, n) {
          return n ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1];
        }, o.previousItem = function (t, e, n) {
          return n ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1];
        }, o.niceNum = function (t, e) {
          var n = Math.floor(o.log10(t)),
              i = t / Math.pow(10, n);
          return (e ? i < 1.5 ? 1 : i < 3 ? 2 : i < 7 ? 5 : 10 : i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * Math.pow(10, n);
        }, o.requestAnimFrame = "undefined" == typeof window ? function (t) {
          t();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
          return window.setTimeout(t, 1e3 / 60);
        }, o.getRelativePosition = function (t, e) {
          var n,
              i,
              a = t.originalEvent || t,
              r = t.currentTarget || t.srcElement,
              l = r.getBoundingClientRect(),
              s = a.touches;
          s && s.length > 0 ? (n = s[0].clientX, i = s[0].clientY) : (n = a.clientX, i = a.clientY);
          var u = parseFloat(o.getStyle(r, "padding-left")),
              d = parseFloat(o.getStyle(r, "padding-top")),
              c = parseFloat(o.getStyle(r, "padding-right")),
              h = parseFloat(o.getStyle(r, "padding-bottom")),
              f = l.right - l.left - u - c,
              g = l.bottom - l.top - d - h;
          return n = Math.round((n - l.left - u) / f * r.width / e.currentDevicePixelRatio), i = Math.round((i - l.top - d) / g * r.height / e.currentDevicePixelRatio), {
            x: n,
            y: i
          };
        }, o.getConstraintWidth = function (t) {
          return r(t, "max-width", "clientWidth");
        }, o.getConstraintHeight = function (t) {
          return r(t, "max-height", "clientHeight");
        }, o.getMaximumWidth = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientWidth;
          var n = parseInt(o.getStyle(e, "padding-left"), 10),
              i = parseInt(o.getStyle(e, "padding-right"), 10),
              a = e.clientWidth - n - i,
              r = o.getConstraintWidth(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getMaximumHeight = function (t) {
          var e = t.parentNode;
          if (!e) return t.clientHeight;
          var n = parseInt(o.getStyle(e, "padding-top"), 10),
              i = parseInt(o.getStyle(e, "padding-bottom"), 10),
              a = e.clientHeight - n - i,
              r = o.getConstraintHeight(t);
          return isNaN(r) ? a : Math.min(a, r);
        }, o.getStyle = function (t, e) {
          return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e);
        }, o.retinaScale = function (t, e) {
          var n = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;

          if (1 !== n) {
            var i = t.canvas,
                a = t.height,
                o = t.width;
            i.height = a * n, i.width = o * n, t.ctx.scale(n, n), i.style.height = a + "px", i.style.width = o + "px";
          }
        }, o.fontString = function (t, e, n) {
          return e + " " + t + "px " + n;
        }, o.longestText = function (t, e, n, i) {
          var a = (i = i || {}).data = i.data || {},
              r = i.garbageCollect = i.garbageCollect || [];
          i.font !== e && (a = i.data = {}, r = i.garbageCollect = [], i.font = e), t.font = e;
          var l = 0;
          o.each(n, function (e) {
            void 0 !== e && null !== e && !0 !== o.isArray(e) ? l = o.measureText(t, a, r, l, e) : o.isArray(e) && o.each(e, function (e) {
              void 0 === e || null === e || o.isArray(e) || (l = o.measureText(t, a, r, l, e));
            });
          });
          var s = r.length / 2;

          if (s > n.length) {
            for (var u = 0; u < s; u++) {
              delete a[r[u]];
            }

            r.splice(0, s);
          }

          return l;
        }, o.measureText = function (t, e, n, i, a) {
          var o = e[a];
          return o || (o = e[a] = t.measureText(a).width, n.push(a)), o > i && (i = o), i;
        }, o.numberOfLabelLines = function (t) {
          var e = 1;
          return o.each(t, function (t) {
            o.isArray(t) && t.length > e && (e = t.length);
          }), e;
        }, o.color = i ? function (t) {
          return t instanceof CanvasGradient && (t = a.global.defaultColor), i(t);
        } : function (t) {
          return console.error("Color.js not found!"), t;
        }, o.getHoverColor = function (t) {
          return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString();
        };
      };
    }, {
      25: 25,
      3: 3,
      45: 45
    }],
    28: [function (t, e, n) {
      "use strict";

      function i(t, e) {
        return t["native"] ? {
          x: t.x,
          y: t.y
        } : u.getRelativePosition(t, e);
      }

      function a(t, e) {
        var n, i, a, o, r;

        for (i = 0, o = t.data.datasets.length; i < o; ++i) {
          if (t.isDatasetVisible(i)) for (a = 0, r = (n = t.getDatasetMeta(i)).data.length; a < r; ++a) {
            var l = n.data[a];
            l._view.skip || e(l);
          }
        }
      }

      function o(t, e) {
        var n = [];
        return a(t, function (t) {
          t.inRange(e.x, e.y) && n.push(t);
        }), n;
      }

      function r(t, e, n, i) {
        var o = Number.POSITIVE_INFINITY,
            r = [];
        return a(t, function (t) {
          if (!n || t.inRange(e.x, e.y)) {
            var a = t.getCenterPoint(),
                l = i(e, a);
            l < o ? (r = [t], o = l) : l === o && r.push(t);
          }
        }), r;
      }

      function l(t) {
        var e = -1 !== t.indexOf("x"),
            n = -1 !== t.indexOf("y");
        return function (t, i) {
          var a = e ? Math.abs(t.x - i.x) : 0,
              o = n ? Math.abs(t.y - i.y) : 0;
          return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2));
        };
      }

      function s(t, e, n) {
        var a = i(e, t);
        n.axis = n.axis || "x";
        var s = l(n.axis),
            u = n.intersect ? o(t, a) : r(t, a, !1, s),
            d = [];
        return u.length ? (t.data.datasets.forEach(function (e, n) {
          if (t.isDatasetVisible(n)) {
            var i = t.getDatasetMeta(n).data[u[0]._index];

            i && !i._view.skip && d.push(i);
          }
        }), d) : [];
      }

      var u = t(45);
      e.exports = {
        modes: {
          single: function single(t, e) {
            var n = i(e, t),
                o = [];
            return a(t, function (t) {
              if (t.inRange(n.x, n.y)) return o.push(t), o;
            }), o.slice(0, 1);
          },
          label: s,
          index: s,
          dataset: function dataset(t, e, n) {
            var a = i(e, t);
            n.axis = n.axis || "xy";
            var s = l(n.axis),
                u = n.intersect ? o(t, a) : r(t, a, !1, s);
            return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u;
          },
          "x-axis": function xAxis(t, e) {
            return s(t, e, {
              intersect: !1
            });
          },
          point: function point(t, e) {
            return o(t, i(e, t));
          },
          nearest: function nearest(t, e, n) {
            var a = i(e, t);
            n.axis = n.axis || "xy";
            var o = l(n.axis),
                s = r(t, a, n.intersect, o);
            return s.length > 1 && s.sort(function (t, e) {
              var n = t.getArea() - e.getArea();
              return 0 === n && (n = t._datasetIndex - e._datasetIndex), n;
            }), s.slice(0, 1);
          },
          x: function x(t, e, n) {
            var o = i(e, t),
                r = [],
                l = !1;
            return a(t, function (t) {
              t.inXRange(o.x) && r.push(t), t.inRange(o.x, o.y) && (l = !0);
            }), n.intersect && !l && (r = []), r;
          },
          y: function y(t, e, n) {
            var o = i(e, t),
                r = [],
                l = !1;
            return a(t, function (t) {
              t.inYRange(o.y) && r.push(t), t.inRange(o.x, o.y) && (l = !0);
            }), n.intersect && !l && (r = []), r;
          }
        }
      };
    }, {
      45: 45
    }],
    29: [function (t, e, n) {
      "use strict";

      t(25)._set("global", {
        responsive: !0,
        responsiveAnimationDuration: 0,
        maintainAspectRatio: !0,
        events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        hover: {
          onHover: null,
          mode: "nearest",
          intersect: !0,
          animationDuration: 400
        },
        onClick: null,
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        showLines: !0,
        elements: {},
        layout: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      }), e.exports = function () {
        var t = function t(_t, e) {
          return this.construct(_t, e), this;
        };

        return t.Chart = t, t;
      };
    }, {
      25: 25
    }],
    30: [function (t, e, n) {
      "use strict";

      var i = t(45);

      e.exports = function (t) {
        function e(t, e) {
          return i.where(t, function (t) {
            return t.position === e;
          });
        }

        function n(t, e) {
          t.forEach(function (t, e) {
            return t._tmpIndex_ = e, t;
          }), t.sort(function (t, n) {
            var i = e ? n : t,
                a = e ? t : n;
            return i.weight === a.weight ? i._tmpIndex_ - a._tmpIndex_ : i.weight - a.weight;
          }), t.forEach(function (t) {
            delete t._tmpIndex_;
          });
        }

        t.layoutService = {
          defaults: {},
          addBox: function addBox(t, e) {
            t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e);
          },
          removeBox: function removeBox(t, e) {
            var n = t.boxes ? t.boxes.indexOf(e) : -1;
            -1 !== n && t.boxes.splice(n, 1);
          },
          configure: function configure(t, e, n) {
            for (var i, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) {
              i = a[r], n.hasOwnProperty(i) && (e[i] = n[i]);
            }
          },
          update: function update(t, a, o) {
            function r(t) {
              var e = i.findNextWhere(_, function (e) {
                return e.box === t;
              });
              if (e) if (t.isHorizontal()) {
                var n = {
                  left: Math.max(T, D),
                  right: Math.max(F, I),
                  top: 0,
                  bottom: 0
                };
                t.update(t.fullWidth ? x : S, y / 2, n);
              } else t.update(e.minSize.width, C);
            }

            function l(t) {
              t.isHorizontal() ? (t.left = t.fullWidth ? d : T, t.right = t.fullWidth ? a - c : T + S, t.top = V, t.bottom = V + t.height, V = t.bottom) : (t.left = N, t.right = N + t.width, t.top = O, t.bottom = O + C, N = t.right);
            }

            if (t) {
              var s = t.options.layout || {},
                  u = i.options.toPadding(s.padding),
                  d = u.left,
                  c = u.right,
                  h = u.top,
                  f = u.bottom,
                  g = e(t.boxes, "left"),
                  p = e(t.boxes, "right"),
                  v = e(t.boxes, "top"),
                  m = e(t.boxes, "bottom"),
                  b = e(t.boxes, "chartArea");
              n(g, !0), n(p, !1), n(v, !0), n(m, !1);
              var x = a - d - c,
                  y = o - h - f,
                  k = y / 2,
                  w = (a - x / 2) / (g.length + p.length),
                  M = (o - k) / (v.length + m.length),
                  S = x,
                  C = y,
                  _ = [];
              i.each(g.concat(p, v, m), function (t) {
                var e,
                    n = t.isHorizontal();
                n ? (e = t.update(t.fullWidth ? x : S, M), C -= e.height) : (e = t.update(w, k), S -= e.width), _.push({
                  horizontal: n,
                  minSize: e,
                  box: t
                });
              });
              var D = 0,
                  I = 0,
                  P = 0,
                  A = 0;
              i.each(v.concat(m), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  D = Math.max(D, e.left), I = Math.max(I, e.right);
                }
              }), i.each(g.concat(p), function (t) {
                if (t.getPadding) {
                  var e = t.getPadding();
                  P = Math.max(P, e.top), A = Math.max(A, e.bottom);
                }
              });
              var T = d,
                  F = c,
                  O = h,
                  R = f;
              i.each(g.concat(p), r), i.each(g, function (t) {
                T += t.width;
              }), i.each(p, function (t) {
                F += t.width;
              }), i.each(v.concat(m), r), i.each(v, function (t) {
                O += t.height;
              }), i.each(m, function (t) {
                R += t.height;
              }), i.each(g.concat(p), function (t) {
                var e = i.findNextWhere(_, function (e) {
                  return e.box === t;
                }),
                    n = {
                  left: 0,
                  right: 0,
                  top: O,
                  bottom: R
                };
                e && t.update(e.minSize.width, C, n);
              }), T = d, F = c, O = h, R = f, i.each(g, function (t) {
                T += t.width;
              }), i.each(p, function (t) {
                F += t.width;
              }), i.each(v, function (t) {
                O += t.height;
              }), i.each(m, function (t) {
                R += t.height;
              });
              var L = Math.max(D - T, 0);
              T += L, F += Math.max(I - F, 0);
              var z = Math.max(P - O, 0);
              O += z, R += Math.max(A - R, 0);
              var B = o - O - R,
                  W = a - T - F;
              W === S && B === C || (i.each(g, function (t) {
                t.height = B;
              }), i.each(p, function (t) {
                t.height = B;
              }), i.each(v, function (t) {
                t.fullWidth || (t.width = W);
              }), i.each(m, function (t) {
                t.fullWidth || (t.width = W);
              }), C = B, S = W);
              var N = d + L,
                  V = h + z;
              i.each(g.concat(v), l), N += S, V += C, i.each(p, l), i.each(m, l), t.chartArea = {
                left: T,
                top: O,
                right: T + S,
                bottom: O + C
              }, i.each(b, function (e) {
                e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(S, C);
              });
            }
          }
        };
      };
    }, {
      45: 45
    }],
    31: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        plugins: {}
      }), e.exports = function (t) {
        t.plugins = {
          _plugins: [],
          _cacheId: 0,
          register: function register(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              -1 === e.indexOf(t) && e.push(t);
            }), this._cacheId++;
          },
          unregister: function unregister(t) {
            var e = this._plugins;
            [].concat(t).forEach(function (t) {
              var n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }), this._cacheId++;
          },
          clear: function clear() {
            this._plugins = [], this._cacheId++;
          },
          count: function count() {
            return this._plugins.length;
          },
          getAll: function getAll() {
            return this._plugins;
          },
          notify: function notify(t, e, n) {
            var i,
                a,
                o,
                r,
                l,
                s = this.descriptors(t),
                u = s.length;

            for (i = 0; i < u; ++i) {
              if (a = s[i], o = a.plugin, "function" == typeof (l = o[e]) && ((r = [t].concat(n || [])).push(a.options), !1 === l.apply(o, r))) return !1;
            }

            return !0;
          },
          descriptors: function descriptors(t) {
            var e = t._plugins || (t._plugins = {});
            if (e.id === this._cacheId) return e.descriptors;
            var n = [],
                a = [],
                r = t && t.config || {},
                l = r.options && r.options.plugins || {};
            return this._plugins.concat(r.plugins || []).forEach(function (t) {
              if (-1 === n.indexOf(t)) {
                var e = t.id,
                    r = l[e];
                !1 !== r && (!0 === r && (r = o.clone(i.global.plugins[e])), n.push(t), a.push({
                  plugin: t,
                  options: r || {}
                }));
              }
            }), e.descriptors = a, e.id = this._cacheId, a;
          }
        }, t.pluginService = t.plugins, t.PluginBase = a.extend({});
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    32: [function (t, e, n) {
      "use strict";

      function i(t) {
        var e,
            n,
            i = [];

        for (e = 0, n = t.length; e < n; ++e) {
          i.push(t[e].label);
        }

        return i;
      }

      function a(t, e, n) {
        var i = t.getPixelForTick(e);
        return n && (i -= 0 === e ? (t.getPixelForTick(1) - i) / 2 : (i - t.getPixelForTick(e - 1)) / 2), i;
      }

      var o = t(25),
          r = t(26),
          l = t(45),
          s = t(34);
      o._set("scale", {
        display: !0,
        position: "left",
        offset: !1,
        gridLines: {
          display: !0,
          color: "rgba(0, 0, 0, 0.1)",
          lineWidth: 1,
          drawBorder: !0,
          drawOnChartArea: !0,
          drawTicks: !0,
          tickMarkLength: 10,
          zeroLineWidth: 1,
          zeroLineColor: "rgba(0,0,0,0.25)",
          zeroLineBorderDash: [],
          zeroLineBorderDashOffset: 0,
          offsetGridLines: !1,
          borderDash: [],
          borderDashOffset: 0
        },
        scaleLabel: {
          display: !1,
          labelString: "",
          lineHeight: 1.2,
          padding: {
            top: 4,
            bottom: 4
          }
        },
        ticks: {
          beginAtZero: !1,
          minRotation: 0,
          maxRotation: 50,
          mirror: !1,
          padding: 0,
          reverse: !1,
          display: !0,
          autoSkip: !0,
          autoSkipPadding: 0,
          labelOffset: 0,
          callback: s.formatters.values,
          minor: {},
          major: {}
        }
      }), e.exports = function (t) {
        function e(t, e, n) {
          return l.isArray(e) ? l.longestText(t, n, e) : t.measureText(e).width;
        }

        function n(t) {
          var e = l.valueOrDefault,
              n = o.global,
              i = e(t.fontSize, n.defaultFontSize),
              a = e(t.fontStyle, n.defaultFontStyle),
              r = e(t.fontFamily, n.defaultFontFamily);
          return {
            size: i,
            style: a,
            family: r,
            font: l.fontString(i, a, r)
          };
        }

        function s(t) {
          return l.options.toLineHeight(l.valueOrDefault(t.lineHeight, 1.2), l.valueOrDefault(t.fontSize, o.global.defaultFontSize));
        }

        t.Scale = r.extend({
          getPadding: function getPadding() {
            var t = this;
            return {
              left: t.paddingLeft || 0,
              top: t.paddingTop || 0,
              right: t.paddingRight || 0,
              bottom: t.paddingBottom || 0
            };
          },
          getTicks: function getTicks() {
            return this._ticks;
          },
          mergeTicksOptions: function mergeTicksOptions() {
            var t = this.options.ticks;
            !1 === t.minor && (t.minor = {
              display: !1
            }), !1 === t.major && (t.major = {
              display: !1
            });

            for (var e in t) {
              "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]));
            }
          },
          beforeUpdate: function beforeUpdate() {
            l.callback(this.options.beforeUpdate, [this]);
          },
          update: function update(t, e, n) {
            var i,
                a,
                o,
                r,
                s,
                u,
                d = this;

            for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = l.extend({
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }, n), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), s = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), o = d.convertTicksToLabels(s) || d.ticks, d.afterTickToLabelConversion(), d.ticks = o, i = 0, a = o.length; i < a; ++i) {
              r = o[i], (u = s[i]) ? u.label = r : s.push(u = {
                label: r,
                major: !1
              });
            }

            return d._ticks = s, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize;
          },
          afterUpdate: function afterUpdate() {
            l.callback(this.options.afterUpdate, [this]);
          },
          beforeSetDimensions: function beforeSetDimensions() {
            l.callback(this.options.beforeSetDimensions, [this]);
          },
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0;
          },
          afterSetDimensions: function afterSetDimensions() {
            l.callback(this.options.afterSetDimensions, [this]);
          },
          beforeDataLimits: function beforeDataLimits() {
            l.callback(this.options.beforeDataLimits, [this]);
          },
          determineDataLimits: l.noop,
          afterDataLimits: function afterDataLimits() {
            l.callback(this.options.afterDataLimits, [this]);
          },
          beforeBuildTicks: function beforeBuildTicks() {
            l.callback(this.options.beforeBuildTicks, [this]);
          },
          buildTicks: l.noop,
          afterBuildTicks: function afterBuildTicks() {
            l.callback(this.options.afterBuildTicks, [this]);
          },
          beforeTickToLabelConversion: function beforeTickToLabelConversion() {
            l.callback(this.options.beforeTickToLabelConversion, [this]);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var t = this,
                e = t.options.ticks;
            t.ticks = t.ticks.map(e.userCallback || e.callback, this);
          },
          afterTickToLabelConversion: function afterTickToLabelConversion() {
            l.callback(this.options.afterTickToLabelConversion, [this]);
          },
          beforeCalculateTickRotation: function beforeCalculateTickRotation() {
            l.callback(this.options.beforeCalculateTickRotation, [this]);
          },
          calculateTickRotation: function calculateTickRotation() {
            var t = this,
                e = t.ctx,
                a = t.options.ticks,
                o = i(t._ticks),
                r = n(a);
            e.font = r.font;
            var s = a.minRotation || 0;
            if (o.length && t.options.display && t.isHorizontal()) for (var u, d = l.longestText(e, r.font, o, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && s < a.maxRotation;) {
              var f = l.toRadians(s);

              if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                s--;
                break;
              }

              s++, c = u * d;
            }
            t.labelRotation = s;
          },
          afterCalculateTickRotation: function afterCalculateTickRotation() {
            l.callback(this.options.afterCalculateTickRotation, [this]);
          },
          beforeFit: function beforeFit() {
            l.callback(this.options.beforeFit, [this]);
          },
          fit: function fit() {
            var t = this,
                a = t.minSize = {
              width: 0,
              height: 0
            },
                o = i(t._ticks),
                r = t.options,
                u = r.ticks,
                d = r.scaleLabel,
                c = r.gridLines,
                h = r.display,
                f = t.isHorizontal(),
                g = n(u),
                p = r.gridLines.tickMarkLength;

            if (a.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, a.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
              var v = s(d) + l.options.toPadding(d.padding).height;
              f ? a.height += v : a.width += v;
            }

            if (u.display && h) {
              var m = l.longestText(t.ctx, g.font, o, t.longestTextCache),
                  b = l.numberOfLabelLines(o),
                  x = .5 * g.size,
                  y = t.options.ticks.padding;

              if (f) {
                t.longestLabelWidth = m;
                var k = l.toRadians(t.labelRotation),
                    w = Math.cos(k),
                    M = Math.sin(k) * m + g.size * b + x * (b - 1) + x;
                a.height = Math.min(t.maxHeight, a.height + M + y), t.ctx.font = g.font;
                var S = e(t.ctx, o[0], g.font),
                    C = e(t.ctx, o[o.length - 1], g.font);
                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === r.position ? w * S + 3 : w * x + 3, t.paddingRight = "bottom" === r.position ? w * x + 3 : w * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3);
              } else u.mirror ? m = 0 : m += y + x, a.width = Math.min(t.maxWidth, a.width + m), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2;
            }

            t.handleMargins(), t.width = a.width, t.height = a.height;
          },
          handleMargins: function handleMargins() {
            var t = this;
            t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0));
          },
          afterFit: function afterFit() {
            l.callback(this.options.afterFit, [this]);
          },
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          isFullWidth: function isFullWidth() {
            return this.options.fullWidth;
          },
          getRightValue: function getRightValue(t) {
            if (l.isNullOrUndef(t)) return NaN;
            if ("number" == typeof t && !isFinite(t)) return NaN;
            if (t) if (this.isHorizontal()) {
              if (void 0 !== t.x) return this.getRightValue(t.x);
            } else if (void 0 !== t.y) return this.getRightValue(t.y);
            return t;
          },
          getLabelForIndex: l.noop,
          getPixelForValue: l.noop,
          getValueForPixel: l.noop,
          getPixelForTick: function getPixelForTick(t) {
            var e = this,
                n = e.options.offset;

            if (e.isHorizontal()) {
              var i = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (n ? 0 : 1), 1),
                  a = i * t + e.paddingLeft;
              n && (a += i / 2);
              var o = e.left + Math.round(a);
              return o += e.isFullWidth() ? e.margins.left : 0;
            }

            var r = e.height - (e.paddingTop + e.paddingBottom);
            return e.top + t * (r / (e._ticks.length - 1));
          },
          getPixelForDecimal: function getPixelForDecimal(t) {
            var e = this;

            if (e.isHorizontal()) {
              var n = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft,
                  i = e.left + Math.round(n);
              return i += e.isFullWidth() ? e.margins.left : 0;
            }

            return e.top + t * e.height;
          },
          getBasePixel: function getBasePixel() {
            return this.getPixelForValue(this.getBaseValue());
          },
          getBaseValue: function getBaseValue() {
            var t = this,
                e = t.min,
                n = t.max;
            return t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0;
          },
          _autoSkip: function _autoSkip(t) {
            var e,
                n,
                i,
                a,
                o = this,
                r = o.isHorizontal(),
                s = o.options.ticks.minor,
                u = t.length,
                d = l.toRadians(o.labelRotation),
                c = Math.cos(d),
                h = o.longestLabelWidth * c,
                f = [];

            for (s.maxTicksLimit && (a = s.maxTicksLimit), r && (e = !1, (h + s.autoSkipPadding) * u > o.width - (o.paddingLeft + o.paddingRight) && (e = 1 + Math.floor((h + s.autoSkipPadding) * u / (o.width - (o.paddingLeft + o.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), n = 0; n < u; n++) {
              i = t[n], (e > 1 && n % e > 0 || n % e == 0 && n + e >= u) && n !== u - 1 && delete i.label, f.push(i);
            }

            return f;
          },
          draw: function draw(t) {
            var e = this,
                i = e.options;

            if (i.display) {
              var r = e.ctx,
                  u = o.global,
                  d = i.ticks.minor,
                  c = i.ticks.major || d,
                  h = i.gridLines,
                  f = i.scaleLabel,
                  g = 0 !== e.labelRotation,
                  p = e.isHorizontal(),
                  v = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(),
                  m = l.valueOrDefault(d.fontColor, u.defaultFontColor),
                  b = n(d),
                  x = l.valueOrDefault(c.fontColor, u.defaultFontColor),
                  y = n(c),
                  k = h.drawTicks ? h.tickMarkLength : 0,
                  w = l.valueOrDefault(f.fontColor, u.defaultFontColor),
                  M = n(f),
                  S = l.options.toPadding(f.padding),
                  C = l.toRadians(e.labelRotation),
                  _ = [],
                  D = "right" === i.position ? e.left : e.right - k,
                  I = "right" === i.position ? e.left + k : e.right,
                  P = "bottom" === i.position ? e.top : e.bottom - k,
                  A = "bottom" === i.position ? e.top + k : e.bottom;

              if (l.each(v, function (n, o) {
                if (!l.isNullOrUndef(n.label)) {
                  var r,
                      s,
                      c,
                      f,
                      m = n.label;
                  o === e.zeroLineIndex && i.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = l.valueAtIndexOrDefault(h.lineWidth, o), s = l.valueAtIndexOrDefault(h.color, o), c = l.valueOrDefault(h.borderDash, u.borderDash), f = l.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                  var b,
                      x,
                      y,
                      w,
                      M,
                      S,
                      T,
                      F,
                      O,
                      R,
                      L = "middle",
                      z = "middle",
                      B = d.padding;

                  if (p) {
                    var W = k + B;
                    "bottom" === i.position ? (z = g ? "middle" : "top", L = g ? "right" : "center", R = e.top + W) : (z = g ? "middle" : "bottom", L = g ? "left" : "center", R = e.bottom - W);
                    var N = a(e, o, h.offsetGridLines && v.length > 1);
                    N < e.left && (s = "rgba(0,0,0,0)"), N += l.aliasPixel(r), O = e.getPixelForTick(o) + d.labelOffset, b = y = M = T = N, x = P, w = A, S = t.top, F = t.bottom;
                  } else {
                    var V,
                        E = "left" === i.position;
                    d.mirror ? (L = E ? "left" : "right", V = B) : (L = E ? "right" : "left", V = k + B), O = E ? e.right - V : e.left + V;
                    var H = a(e, o, h.offsetGridLines && v.length > 1);
                    H < e.top && (s = "rgba(0,0,0,0)"), H += l.aliasPixel(r), R = e.getPixelForTick(o) + d.labelOffset, b = D, y = I, M = t.left, T = t.right, x = w = S = F = H;
                  }

                  _.push({
                    tx1: b,
                    ty1: x,
                    tx2: y,
                    ty2: w,
                    x1: M,
                    y1: S,
                    x2: T,
                    y2: F,
                    labelX: O,
                    labelY: R,
                    glWidth: r,
                    glColor: s,
                    glBorderDash: c,
                    glBorderDashOffset: f,
                    rotation: -1 * C,
                    label: m,
                    major: n.major,
                    textBaseline: z,
                    textAlign: L
                  });
                }
              }), l.each(_, function (t) {
                if (h.display && (r.save(), r.lineWidth = t.glWidth, r.strokeStyle = t.glColor, r.setLineDash && (r.setLineDash(t.glBorderDash), r.lineDashOffset = t.glBorderDashOffset), r.beginPath(), h.drawTicks && (r.moveTo(t.tx1, t.ty1), r.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (r.moveTo(t.x1, t.y1), r.lineTo(t.x2, t.y2)), r.stroke(), r.restore()), d.display) {
                  r.save(), r.translate(t.labelX, t.labelY), r.rotate(t.rotation), r.font = t.major ? y.font : b.font, r.fillStyle = t.major ? x : m, r.textBaseline = t.textBaseline, r.textAlign = t.textAlign;
                  var e = t.label;
                  if (l.isArray(e)) for (var n = 0, i = 0; n < e.length; ++n) {
                    r.fillText("" + e[n], 0, i), i += 1.5 * b.size;
                  } else r.fillText(e, 0, 0);
                  r.restore();
                }
              }), f.display) {
                var T,
                    F,
                    O = 0,
                    R = s(f) / 2;
                if (p) T = e.left + (e.right - e.left) / 2, F = "bottom" === i.position ? e.bottom - R - S.bottom : e.top + R + S.top;else {
                  var L = "left" === i.position;
                  T = L ? e.left + R + S.top : e.right - R - S.top, F = e.top + (e.bottom - e.top) / 2, O = L ? -.5 * Math.PI : .5 * Math.PI;
                }
                r.save(), r.translate(T, F), r.rotate(O), r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = w, r.font = M.font, r.fillText(f.labelString, 0, 0), r.restore();
              }

              if (h.drawBorder) {
                r.lineWidth = l.valueAtIndexOrDefault(h.lineWidth, 0), r.strokeStyle = l.valueAtIndexOrDefault(h.color, 0);
                var z = e.left,
                    B = e.right,
                    W = e.top,
                    N = e.bottom,
                    V = l.aliasPixel(r.lineWidth);
                p ? (W = N = "top" === i.position ? e.bottom : e.top, W += V, N += V) : (z = B = "left" === i.position ? e.right : e.left, z += V, B += V), r.beginPath(), r.moveTo(z, W), r.lineTo(B, N), r.stroke();
              }
            }
          }
        });
      };
    }, {
      25: 25,
      26: 26,
      34: 34,
      45: 45
    }],
    33: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45);

      e.exports = function (t) {
        t.scaleService = {
          constructors: {},
          defaults: {},
          registerScaleType: function registerScaleType(t, e, n) {
            this.constructors[t] = e, this.defaults[t] = a.clone(n);
          },
          getScaleConstructor: function getScaleConstructor(t) {
            return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0;
          },
          getScaleDefaults: function getScaleDefaults(t) {
            return this.defaults.hasOwnProperty(t) ? a.merge({}, [i.scale, this.defaults[t]]) : {};
          },
          updateScaleDefaults: function updateScaleDefaults(t, e) {
            var n = this;
            n.defaults.hasOwnProperty(t) && (n.defaults[t] = a.extend(n.defaults[t], e));
          },
          addScalesToLayout: function addScalesToLayout(e) {
            a.each(e.scales, function (n) {
              n.fullWidth = n.options.fullWidth, n.position = n.options.position, n.weight = n.options.weight, t.layoutService.addBox(e, n);
            });
          }
        };
      };
    }, {
      25: 25,
      45: 45
    }],
    34: [function (t, e, n) {
      "use strict";

      var i = t(45);
      e.exports = {
        generators: {
          linear: function linear(t, e) {
            var n,
                a = [];
            if (t.stepSize && t.stepSize > 0) n = t.stepSize;else {
              var o = i.niceNum(e.max - e.min, !1);
              n = i.niceNum(o / (t.maxTicks - 1), !0);
            }
            var r = Math.floor(e.min / n) * n,
                l = Math.ceil(e.max / n) * n;
            t.min && t.max && t.stepSize && i.almostWhole((t.max - t.min) / t.stepSize, n / 1e3) && (r = t.min, l = t.max);
            var s = (l - r) / n;
            s = i.almostEquals(s, Math.round(s), n / 1e3) ? Math.round(s) : Math.ceil(s), a.push(void 0 !== t.min ? t.min : r);

            for (var u = 1; u < s; ++u) {
              a.push(r + u * n);
            }

            return a.push(void 0 !== t.max ? t.max : l), a;
          },
          logarithmic: function logarithmic(t, e) {
            var n,
                a,
                o = [],
                r = i.valueOrDefault,
                l = r(t.min, Math.pow(10, Math.floor(i.log10(e.min)))),
                s = Math.floor(i.log10(e.max)),
                u = Math.ceil(e.max / Math.pow(10, s));
            0 === l ? (n = Math.floor(i.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, n)), o.push(l), l = a * Math.pow(10, n)) : (n = Math.floor(i.log10(l)), a = Math.floor(l / Math.pow(10, n)));

            do {
              o.push(l), 10 === ++a && (a = 1, ++n), l = a * Math.pow(10, n);
            } while (n < s || n === s && a < u);

            var d = r(t.max, l);
            return o.push(d), o;
          }
        },
        formatters: {
          values: function values(t) {
            return i.isArray(t) ? t : "" + t;
          },
          linear: function linear(t, e, n) {
            var a = n.length > 3 ? n[2] - n[1] : n[1] - n[0];
            Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
            var o = i.log10(Math.abs(a)),
                r = "";

            if (0 !== t) {
              var l = -1 * Math.floor(o);
              l = Math.max(Math.min(l, 20), 0), r = t.toFixed(l);
            } else r = "0";

            return r;
          },
          logarithmic: function logarithmic(t, e, n) {
            var a = t / Math.pow(10, Math.floor(i.log10(t)));
            return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === n.length - 1 ? t.toExponential() : "";
          }
        }
      };
    }, {
      45: 45
    }],
    35: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        tooltips: {
          enabled: !0,
          custom: null,
          mode: "nearest",
          position: "average",
          intersect: !0,
          backgroundColor: "rgba(0,0,0,0.8)",
          titleFontStyle: "bold",
          titleSpacing: 2,
          titleMarginBottom: 6,
          titleFontColor: "#fff",
          titleAlign: "left",
          bodySpacing: 2,
          bodyFontColor: "#fff",
          bodyAlign: "left",
          footerFontStyle: "bold",
          footerSpacing: 2,
          footerMarginTop: 6,
          footerFontColor: "#fff",
          footerAlign: "left",
          yPadding: 6,
          xPadding: 6,
          caretPadding: 2,
          caretSize: 5,
          cornerRadius: 6,
          multiKeyBackground: "#fff",
          displayColors: !0,
          borderColor: "rgba(0,0,0,0)",
          borderWidth: 0,
          callbacks: {
            beforeTitle: o.noop,
            title: function title(t, e) {
              var n = "",
                  i = e.labels,
                  a = i ? i.length : 0;

              if (t.length > 0) {
                var o = t[0];
                o.xLabel ? n = o.xLabel : a > 0 && o.index < a && (n = i[o.index]);
              }

              return n;
            },
            afterTitle: o.noop,
            beforeBody: o.noop,
            beforeLabel: o.noop,
            label: function label(t, e) {
              var n = e.datasets[t.datasetIndex].label || "";
              return n && (n += ": "), n += t.yLabel;
            },
            labelColor: function labelColor(t, e) {
              var n = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;

              return {
                borderColor: n.borderColor,
                backgroundColor: n.backgroundColor
              };
            },
            labelTextColor: function labelTextColor() {
              return this._options.bodyFontColor;
            },
            afterLabel: o.noop,
            afterBody: o.noop,
            beforeFooter: o.noop,
            footer: o.noop,
            afterFooter: o.noop
          }
        }
      }), e.exports = function (t) {
        function e(t, e) {
          var n = o.color(t);
          return n.alpha(e * n.alpha()).rgbaString();
        }

        function n(t, e) {
          return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
        }

        function r(t) {
          var e = t._xScale,
              n = t._yScale || t._scale,
              i = t._index,
              a = t._datasetIndex;
          return {
            xLabel: e ? e.getLabelForIndex(i, a) : "",
            yLabel: n ? n.getLabelForIndex(i, a) : "",
            index: i,
            datasetIndex: a,
            x: t._model.x,
            y: t._model.y
          };
        }

        function l(t) {
          var e = i.global,
              n = o.valueOrDefault;
          return {
            xPadding: t.xPadding,
            yPadding: t.yPadding,
            xAlign: t.xAlign,
            yAlign: t.yAlign,
            bodyFontColor: t.bodyFontColor,
            _bodyFontFamily: n(t.bodyFontFamily, e.defaultFontFamily),
            _bodyFontStyle: n(t.bodyFontStyle, e.defaultFontStyle),
            _bodyAlign: t.bodyAlign,
            bodyFontSize: n(t.bodyFontSize, e.defaultFontSize),
            bodySpacing: t.bodySpacing,
            titleFontColor: t.titleFontColor,
            _titleFontFamily: n(t.titleFontFamily, e.defaultFontFamily),
            _titleFontStyle: n(t.titleFontStyle, e.defaultFontStyle),
            titleFontSize: n(t.titleFontSize, e.defaultFontSize),
            _titleAlign: t.titleAlign,
            titleSpacing: t.titleSpacing,
            titleMarginBottom: t.titleMarginBottom,
            footerFontColor: t.footerFontColor,
            _footerFontFamily: n(t.footerFontFamily, e.defaultFontFamily),
            _footerFontStyle: n(t.footerFontStyle, e.defaultFontStyle),
            footerFontSize: n(t.footerFontSize, e.defaultFontSize),
            _footerAlign: t.footerAlign,
            footerSpacing: t.footerSpacing,
            footerMarginTop: t.footerMarginTop,
            caretSize: t.caretSize,
            cornerRadius: t.cornerRadius,
            backgroundColor: t.backgroundColor,
            opacity: 0,
            legendColorBackground: t.multiKeyBackground,
            displayColors: t.displayColors,
            borderColor: t.borderColor,
            borderWidth: t.borderWidth
          };
        }

        function s(t, e) {
          var n = t._chart.ctx,
              i = 2 * e.yPadding,
              a = 0,
              r = e.body,
              l = r.reduce(function (t, e) {
            return t + e.before.length + e.lines.length + e.after.length;
          }, 0);
          l += e.beforeBody.length + e.afterBody.length;
          var s = e.title.length,
              u = e.footer.length,
              d = e.titleFontSize,
              c = e.bodyFontSize,
              h = e.footerFontSize;
          i += s * d, i += s ? (s - 1) * e.titleSpacing : 0, i += s ? e.titleMarginBottom : 0, i += l * c, i += l ? (l - 1) * e.bodySpacing : 0, i += u ? e.footerMarginTop : 0, i += u * h, i += u ? (u - 1) * e.footerSpacing : 0;

          var f = 0,
              g = function g(t) {
            a = Math.max(a, n.measureText(t).width + f);
          };

          return n.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), n.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function (t) {
            o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g);
          }), f = 0, n.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), a += 2 * e.xPadding, {
            width: a,
            height: i
          };
        }

        function u(t, e) {
          var n = t._model,
              i = t._chart,
              a = t._chart.chartArea,
              o = "center",
              r = "center";
          n.y < e.height ? r = "top" : n.y > i.height - e.height && (r = "bottom");
          var l,
              s,
              u,
              d,
              c,
              h = (a.left + a.right) / 2,
              f = (a.top + a.bottom) / 2;
          "center" === r ? (l = function l(t) {
            return t <= h;
          }, s = function s(t) {
            return t > h;
          }) : (l = function l(t) {
            return t <= e.width / 2;
          }, s = function s(t) {
            return t >= i.width - e.width / 2;
          }), u = function u(t) {
            return t + e.width > i.width;
          }, d = function d(t) {
            return t - e.width < 0;
          }, c = function c(t) {
            return t <= f ? "top" : "bottom";
          }, l(n.x) ? (o = "left", u(n.x) && (o = "center", r = c(n.y))) : s(n.x) && (o = "right", d(n.x) && (o = "center", r = c(n.y)));
          var g = t._options;
          return {
            xAlign: g.xAlign ? g.xAlign : o,
            yAlign: g.yAlign ? g.yAlign : r
          };
        }

        function d(t, e, n) {
          var i = t.x,
              a = t.y,
              o = t.caretSize,
              r = t.caretPadding,
              l = t.cornerRadius,
              s = n.xAlign,
              u = n.yAlign,
              d = o + r,
              c = l + r;
          return "right" === s ? i -= e.width : "center" === s && (i -= e.width / 2), "top" === u ? a += d : a -= "bottom" === u ? e.height + d : e.height / 2, "center" === u ? "left" === s ? i += d : "right" === s && (i -= d) : "left" === s ? i -= c : "right" === s && (i += c), {
            x: i,
            y: a
          };
        }

        t.Tooltip = a.extend({
          initialize: function initialize() {
            this._model = l(this._options), this._lastActive = [];
          },
          getTitle: function getTitle() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeTitle.apply(t, arguments),
                a = e.title.apply(t, arguments),
                o = e.afterTitle.apply(t, arguments),
                r = [];
            return r = n(r, i), r = n(r, a), r = n(r, o);
          },
          getBeforeBody: function getBeforeBody() {
            var t = this._options.callbacks.beforeBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getBody: function getBody(t, e) {
            var i = this,
                a = i._options.callbacks,
                r = [];
            return o.each(t, function (t) {
              var o = {
                before: [],
                lines: [],
                after: []
              };
              n(o.before, a.beforeLabel.call(i, t, e)), n(o.lines, a.label.call(i, t, e)), n(o.after, a.afterLabel.call(i, t, e)), r.push(o);
            }), r;
          },
          getAfterBody: function getAfterBody() {
            var t = this._options.callbacks.afterBody.apply(this, arguments);

            return o.isArray(t) ? t : void 0 !== t ? [t] : [];
          },
          getFooter: function getFooter() {
            var t = this,
                e = t._options.callbacks,
                i = e.beforeFooter.apply(t, arguments),
                a = e.footer.apply(t, arguments),
                o = e.afterFooter.apply(t, arguments),
                r = [];
            return r = n(r, i), r = n(r, a), r = n(r, o);
          },
          update: function update(e) {
            var n,
                i,
                a = this,
                c = a._options,
                h = a._model,
                f = a._model = l(c),
                g = a._active,
                p = a._data,
                v = {
              xAlign: h.xAlign,
              yAlign: h.yAlign
            },
                m = {
              x: h.x,
              y: h.y
            },
                b = {
              width: h.width,
              height: h.height
            },
                x = {
              x: h.caretX,
              y: h.caretY
            };

            if (g.length) {
              f.opacity = 1;
              var y = [],
                  k = [];
              x = t.Tooltip.positioners[c.position].call(a, g, a._eventPosition);
              var w = [];

              for (n = 0, i = g.length; n < i; ++n) {
                w.push(r(g[n]));
              }

              c.filter && (w = w.filter(function (t) {
                return c.filter(t, p);
              })), c.itemSort && (w = w.sort(function (t, e) {
                return c.itemSort(t, e, p);
              })), o.each(w, function (t) {
                y.push(c.callbacks.labelColor.call(a, t, a._chart)), k.push(c.callbacks.labelTextColor.call(a, t, a._chart));
              }), f.title = a.getTitle(w, p), f.beforeBody = a.getBeforeBody(w, p), f.body = a.getBody(w, p), f.afterBody = a.getAfterBody(w, p), f.footer = a.getFooter(w, p), f.x = Math.round(x.x), f.y = Math.round(x.y), f.caretPadding = c.caretPadding, f.labelColors = y, f.labelTextColors = k, f.dataPoints = w, m = d(f, b = s(this, f), v = u(this, b));
            } else f.opacity = 0;

            return f.xAlign = v.xAlign, f.yAlign = v.yAlign, f.x = m.x, f.y = m.y, f.width = b.width, f.height = b.height, f.caretX = x.x, f.caretY = x.y, a._model = f, e && c.custom && c.custom.call(a, f), a;
          },
          drawCaret: function drawCaret(t, e) {
            var n = this._chart.ctx,
                i = this._view,
                a = this.getCaretPosition(t, e, i);
            n.lineTo(a.x1, a.y1), n.lineTo(a.x2, a.y2), n.lineTo(a.x3, a.y3);
          },
          getCaretPosition: function getCaretPosition(t, e, n) {
            var i,
                a,
                o,
                r,
                l,
                s,
                u = n.caretSize,
                d = n.cornerRadius,
                c = n.xAlign,
                h = n.yAlign,
                f = t.x,
                g = t.y,
                p = e.width,
                v = e.height;
            if ("center" === h) l = g + v / 2, "left" === c ? (a = (i = f) - u, o = i, r = l + u, s = l - u) : (a = (i = f + p) + u, o = i, r = l - u, s = l + u);else if ("left" === c ? (i = (a = f + d + u) - u, o = a + u) : "right" === c ? (i = (a = f + p - d - u) - u, o = a + u) : (i = (a = f + p / 2) - u, o = a + u), "top" === h) l = (r = g) - u, s = r;else {
              l = (r = g + v) + u, s = r;
              var m = o;
              o = i, i = m;
            }
            return {
              x1: i,
              x2: a,
              x3: o,
              y1: r,
              y2: l,
              y3: s
            };
          },
          drawTitle: function drawTitle(t, n, i, a) {
            var r = n.title;

            if (r.length) {
              i.textAlign = n._titleAlign, i.textBaseline = "top";
              var l = n.titleFontSize,
                  s = n.titleSpacing;
              i.fillStyle = e(n.titleFontColor, a), i.font = o.fontString(l, n._titleFontStyle, n._titleFontFamily);
              var u, d;

              for (u = 0, d = r.length; u < d; ++u) {
                i.fillText(r[u], t.x, t.y), t.y += l + s, u + 1 === r.length && (t.y += n.titleMarginBottom - s);
              }
            }
          },
          drawBody: function drawBody(t, n, i, a) {
            var r = n.bodyFontSize,
                l = n.bodySpacing,
                s = n.body;
            i.textAlign = n._bodyAlign, i.textBaseline = "top", i.font = o.fontString(r, n._bodyFontStyle, n._bodyFontFamily);

            var u = 0,
                d = function d(e) {
              i.fillText(e, t.x + u, t.y), t.y += r + l;
            };

            i.fillStyle = e(n.bodyFontColor, a), o.each(n.beforeBody, d);
            var c = n.displayColors;
            u = c ? r + 2 : 0, o.each(s, function (l, s) {
              var u = e(n.labelTextColors[s], a);
              i.fillStyle = u, o.each(l.before, d), o.each(l.lines, function (o) {
                c && (i.fillStyle = e(n.legendColorBackground, a), i.fillRect(t.x, t.y, r, r), i.lineWidth = 1, i.strokeStyle = e(n.labelColors[s].borderColor, a), i.strokeRect(t.x, t.y, r, r), i.fillStyle = e(n.labelColors[s].backgroundColor, a), i.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), i.fillStyle = u), d(o);
              }), o.each(l.after, d);
            }), u = 0, o.each(n.afterBody, d), t.y -= l;
          },
          drawFooter: function drawFooter(t, n, i, a) {
            var r = n.footer;
            r.length && (t.y += n.footerMarginTop, i.textAlign = n._footerAlign, i.textBaseline = "top", i.fillStyle = e(n.footerFontColor, a), i.font = o.fontString(n.footerFontSize, n._footerFontStyle, n._footerFontFamily), o.each(r, function (e) {
              i.fillText(e, t.x, t.y), t.y += n.footerFontSize + n.footerSpacing;
            }));
          },
          drawBackground: function drawBackground(t, n, i, a, o) {
            i.fillStyle = e(n.backgroundColor, o), i.strokeStyle = e(n.borderColor, o), i.lineWidth = n.borderWidth;
            var r = n.xAlign,
                l = n.yAlign,
                s = t.x,
                u = t.y,
                d = a.width,
                c = a.height,
                h = n.cornerRadius;
            i.beginPath(), i.moveTo(s + h, u), "top" === l && this.drawCaret(t, a), i.lineTo(s + d - h, u), i.quadraticCurveTo(s + d, u, s + d, u + h), "center" === l && "right" === r && this.drawCaret(t, a), i.lineTo(s + d, u + c - h), i.quadraticCurveTo(s + d, u + c, s + d - h, u + c), "bottom" === l && this.drawCaret(t, a), i.lineTo(s + h, u + c), i.quadraticCurveTo(s, u + c, s, u + c - h), "center" === l && "left" === r && this.drawCaret(t, a), i.lineTo(s, u + h), i.quadraticCurveTo(s, u, s + h, u), i.closePath(), i.fill(), n.borderWidth > 0 && i.stroke();
          },
          draw: function draw() {
            var t = this._chart.ctx,
                e = this._view;

            if (0 !== e.opacity) {
              var n = {
                width: e.width,
                height: e.height
              },
                  i = {
                x: e.x,
                y: e.y
              },
                  a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                  o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
              this._options.enabled && o && (this.drawBackground(i, e, t, n, a), i.x += e.xPadding, i.y += e.yPadding, this.drawTitle(i, e, t, a), this.drawBody(i, e, t, a), this.drawFooter(i, e, t, a));
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e._options,
                i = !1;
            if (e._lastActive = e._lastActive || [], "mouseout" === t.type ? e._active = [] : e._active = e._chart.getElementsAtEventForMode(t, n.mode, n), !(i = !o.arrayEquals(e._active, e._lastActive))) return !1;

            if (e._lastActive = e._active, n.enabled || n.custom) {
              e._eventPosition = {
                x: t.x,
                y: t.y
              };
              var a = e._model;
              e.update(!0), e.pivot(), i |= a.x !== e._model.x || a.y !== e._model.y;
            }

            return i;
          }
        }), t.Tooltip.positioners = {
          average: function average(t) {
            if (!t.length) return !1;
            var e,
                n,
                i = 0,
                a = 0,
                o = 0;

            for (e = 0, n = t.length; e < n; ++e) {
              var r = t[e];

              if (r && r.hasValue()) {
                var l = r.tooltipPosition();
                i += l.x, a += l.y, ++o;
              }
            }

            return {
              x: Math.round(i / o),
              y: Math.round(a / o)
            };
          },
          nearest: function nearest(t, e) {
            var n,
                i,
                a,
                r = e.x,
                l = e.y,
                s = Number.POSITIVE_INFINITY;

            for (n = 0, i = t.length; n < i; ++n) {
              var u = t[n];

              if (u && u.hasValue()) {
                var d = u.getCenterPoint(),
                    c = o.distanceBetweenPoints(e, d);
                c < s && (s = c, a = u);
              }
            }

            if (a) {
              var h = a.tooltipPosition();
              r = h.x, l = h.y;
            }

            return {
              x: r,
              y: l
            };
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    36: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        elements: {
          arc: {
            backgroundColor: i.global.defaultColor,
            borderColor: "#fff",
            borderWidth: 2
          }
        }
      }), e.exports = a.extend({
        inLabelRange: function inLabelRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2);
        },
        inRange: function inRange(t, e) {
          var n = this._view;

          if (n) {
            for (var i = o.getAngleFromPoint(n, {
              x: t,
              y: e
            }), a = i.angle, r = i.distance, l = n.startAngle, s = n.endAngle; s < l;) {
              s += 2 * Math.PI;
            }

            for (; a > s;) {
              a -= 2 * Math.PI;
            }

            for (; a < l;) {
              a += 2 * Math.PI;
            }

            var u = a >= l && a <= s,
                d = r >= n.innerRadius && r <= n.outerRadius;
            return u && d;
          }

          return !1;
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view,
              e = (t.startAngle + t.endAngle) / 2,
              n = (t.innerRadius + t.outerRadius) / 2;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2));
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view,
              e = t.startAngle + (t.endAngle - t.startAngle) / 2,
              n = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
          return {
            x: t.x + Math.cos(e) * n,
            y: t.y + Math.sin(e) * n
          };
        },
        draw: function draw() {
          var t = this._chart.ctx,
              e = this._view,
              n = e.startAngle,
              i = e.endAngle;
          t.beginPath(), t.arc(e.x, e.y, e.outerRadius, n, i), t.arc(e.x, e.y, e.innerRadius, i, n, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    37: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45),
          r = i.global;
      i._set("global", {
        elements: {
          line: {
            tension: .4,
            backgroundColor: r.defaultColor,
            borderWidth: 3,
            borderColor: r.defaultColor,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: "miter",
            capBezierPoints: !0,
            fill: !0
          }
        }
      }), e.exports = a.extend({
        draw: function draw() {
          var t,
              e,
              n,
              i,
              a = this,
              l = a._view,
              s = a._chart.ctx,
              u = l.spanGaps,
              d = a._children.slice(),
              c = r.elements.line,
              h = -1;

          for (a._loop && d.length && d.push(d[0]), s.save(), s.lineCap = l.borderCapStyle || c.borderCapStyle, s.setLineDash && s.setLineDash(l.borderDash || c.borderDash), s.lineDashOffset = l.borderDashOffset || c.borderDashOffset, s.lineJoin = l.borderJoinStyle || c.borderJoinStyle, s.lineWidth = l.borderWidth || c.borderWidth, s.strokeStyle = l.borderColor || r.defaultColor, s.beginPath(), h = -1, t = 0; t < d.length; ++t) {
            e = d[t], n = o.previousItem(d, t), i = e._view, 0 === t ? i.skip || (s.moveTo(i.x, i.y), h = t) : (n = -1 === h ? n : d[h], i.skip || (h !== t - 1 && !u || -1 === h ? s.moveTo(i.x, i.y) : o.canvas.lineTo(s, n._view, e._view), h = t));
          }

          s.stroke(), s.restore();
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    38: [function (t, e, n) {
      "use strict";

      function i(t) {
        var e = this._view;
        return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hitRadius, 2);
      }

      var a = t(25),
          o = t(26),
          r = t(45),
          l = a.global.defaultColor;
      a._set("global", {
        elements: {
          point: {
            radius: 3,
            pointStyle: "circle",
            backgroundColor: l,
            borderColor: l,
            borderWidth: 1,
            hitRadius: 1,
            hoverRadius: 4,
            hoverBorderWidth: 1
          }
        }
      }), e.exports = o.extend({
        inRange: function inRange(t, e) {
          var n = this._view;
          return !!n && Math.pow(t - n.x, 2) + Math.pow(e - n.y, 2) < Math.pow(n.hitRadius + n.radius, 2);
        },
        inLabelRange: i,
        inXRange: i,
        inYRange: function inYRange(t) {
          var e = this._view;
          return !!e && Math.pow(t - e.y, 2) < Math.pow(e.radius + e.hitRadius, 2);
        },
        getCenterPoint: function getCenterPoint() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        },
        getArea: function getArea() {
          return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y,
            padding: t.radius + t.borderWidth
          };
        },
        draw: function draw(t) {
          var e = this._view,
              n = this._model,
              i = this._chart.ctx,
              o = e.pointStyle,
              s = e.radius,
              u = e.x,
              d = e.y,
              c = r.color,
              h = 0;
          e.skip || (i.strokeStyle = e.borderColor || l, i.lineWidth = r.valueOrDefault(e.borderWidth, a.global.elements.point.borderWidth), i.fillStyle = e.backgroundColor || l, void 0 !== t && (n.x < t.left || 1.01 * t.right < n.x || n.y < t.top || 1.01 * t.bottom < n.y) && (n.x < t.left ? h = (u - n.x) / (t.left - n.x) : 1.01 * t.right < n.x ? h = (n.x - u) / (n.x - t.right) : n.y < t.top ? h = (d - n.y) / (t.top - n.y) : 1.01 * t.bottom < n.y && (h = (n.y - d) / (n.y - t.bottom)), h = Math.round(100 * h) / 100, i.strokeStyle = c(i.strokeStyle).alpha(h).rgbString(), i.fillStyle = c(i.fillStyle).alpha(h).rgbString()), r.canvas.drawPoint(i, o, s, u, d));
        }
      });
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    39: [function (t, e, n) {
      "use strict";

      function i(t) {
        return void 0 !== t._view.width;
      }

      function a(t) {
        var e,
            n,
            a,
            o,
            r = t._view;

        if (i(t)) {
          var l = r.width / 2;
          e = r.x - l, n = r.x + l, a = Math.min(r.y, r.base), o = Math.max(r.y, r.base);
        } else {
          var s = r.height / 2;
          e = Math.min(r.x, r.base), n = Math.max(r.x, r.base), a = r.y - s, o = r.y + s;
        }

        return {
          left: e,
          top: a,
          right: n,
          bottom: o
        };
      }

      var o = t(25),
          r = t(26);
      o._set("global", {
        elements: {
          rectangle: {
            backgroundColor: o.global.defaultColor,
            borderColor: o.global.defaultColor,
            borderSkipped: "bottom",
            borderWidth: 0
          }
        }
      }), e.exports = r.extend({
        draw: function draw() {
          function t(t) {
            return m[(b + t) % 4];
          }

          var e,
              n,
              i,
              a,
              o,
              r,
              l,
              s = this._chart.ctx,
              u = this._view,
              d = u.borderWidth;

          if (u.horizontal ? (e = u.base, n = u.x, i = u.y - u.height / 2, a = u.y + u.height / 2, o = n > e ? 1 : -1, r = 1, l = u.borderSkipped || "left") : (e = u.x - u.width / 2, n = u.x + u.width / 2, i = u.y, o = 1, r = (a = u.base) > i ? 1 : -1, l = u.borderSkipped || "bottom"), d) {
            var c = Math.min(Math.abs(e - n), Math.abs(i - a)),
                h = (d = d > c ? c : d) / 2,
                f = e + ("left" !== l ? h * o : 0),
                g = n + ("right" !== l ? -h * o : 0),
                p = i + ("top" !== l ? h * r : 0),
                v = a + ("bottom" !== l ? -h * r : 0);
            f !== g && (i = p, a = v), p !== v && (e = f, n = g);
          }

          s.beginPath(), s.fillStyle = u.backgroundColor, s.strokeStyle = u.borderColor, s.lineWidth = d;
          var m = [[e, a], [e, i], [n, i], [n, a]],
              b = ["bottom", "left", "top", "right"].indexOf(l, 0);
          -1 === b && (b = 0);
          var x = t(0);
          s.moveTo(x[0], x[1]);

          for (var y = 1; y < 4; y++) {
            x = t(y), s.lineTo(x[0], x[1]);
          }

          s.fill(), d && s.stroke();
        },
        height: function height() {
          var t = this._view;
          return t.base - t.y;
        },
        inRange: function inRange(t, e) {
          var n = !1;

          if (this._view) {
            var i = a(this);
            n = t >= i.left && t <= i.right && e >= i.top && e <= i.bottom;
          }

          return n;
        },
        inLabelRange: function inLabelRange(t, e) {
          var n = this;
          if (!n._view) return !1;
          var o = a(n);
          return i(n) ? t >= o.left && t <= o.right : e >= o.top && e <= o.bottom;
        },
        inXRange: function inXRange(t) {
          var e = a(this);
          return t >= e.left && t <= e.right;
        },
        inYRange: function inYRange(t) {
          var e = a(this);
          return t >= e.top && t <= e.bottom;
        },
        getCenterPoint: function getCenterPoint() {
          var t,
              e,
              n = this._view;
          return i(this) ? (t = n.x, e = (n.y + n.base) / 2) : (t = (n.x + n.base) / 2, e = n.y), {
            x: t,
            y: e
          };
        },
        getArea: function getArea() {
          var t = this._view;
          return t.width * Math.abs(t.y - t.base);
        },
        tooltipPosition: function tooltipPosition() {
          var t = this._view;
          return {
            x: t.x,
            y: t.y
          };
        }
      });
    }, {
      25: 25,
      26: 26
    }],
    40: [function (t, e, n) {
      "use strict";

      e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39);
    }, {
      36: 36,
      37: 37,
      38: 38,
      39: 39
    }],
    41: [function (t, e, n) {
      "use strict";

      var i = t(42),
          n = e.exports = {
        clear: function clear(t) {
          t.ctx.clearRect(0, 0, t.width, t.height);
        },
        roundedRect: function roundedRect(t, e, n, i, a, o) {
          if (o) {
            var r = Math.min(o, i / 2),
                l = Math.min(o, a / 2);
            t.moveTo(e + r, n), t.lineTo(e + i - r, n), t.quadraticCurveTo(e + i, n, e + i, n + l), t.lineTo(e + i, n + a - l), t.quadraticCurveTo(e + i, n + a, e + i - r, n + a), t.lineTo(e + r, n + a), t.quadraticCurveTo(e, n + a, e, n + a - l), t.lineTo(e, n + l), t.quadraticCurveTo(e, n, e + r, n);
          } else t.rect(e, n, i, a);
        },
        drawPoint: function drawPoint(t, e, n, i, a) {
          var o, r, l, s, u, d;

          if (!e || "object" != _typeof(e) || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
            if (!(isNaN(n) || n <= 0)) {
              switch (e) {
                default:
                  t.beginPath(), t.arc(i, a, n, 0, 2 * Math.PI), t.closePath(), t.fill();
                  break;

                case "triangle":
                  t.beginPath(), u = (r = 3 * n / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(i - r / 2, a + u / 3), t.lineTo(i + r / 2, a + u / 3), t.lineTo(i, a - 2 * u / 3), t.closePath(), t.fill();
                  break;

                case "rect":
                  d = 1 / Math.SQRT2 * n, t.beginPath(), t.fillRect(i - d, a - d, 2 * d, 2 * d), t.strokeRect(i - d, a - d, 2 * d, 2 * d);
                  break;

                case "rectRounded":
                  var c = n / Math.SQRT2,
                      h = i - c,
                      f = a - c,
                      g = Math.SQRT2 * n;
                  t.beginPath(), this.roundedRect(t, h, f, g, g, n / 2), t.closePath(), t.fill();
                  break;

                case "rectRot":
                  d = 1 / Math.SQRT2 * n, t.beginPath(), t.moveTo(i - d, a), t.lineTo(i, a + d), t.lineTo(i + d, a), t.lineTo(i, a - d), t.closePath(), t.fill();
                  break;

                case "cross":
                  t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                  break;

                case "crossRot":
                  t.beginPath(), l = Math.cos(Math.PI / 4) * n, s = Math.sin(Math.PI / 4) * n, t.moveTo(i - l, a - s), t.lineTo(i + l, a + s), t.moveTo(i - l, a + s), t.lineTo(i + l, a - s), t.closePath();
                  break;

                case "star":
                  t.beginPath(), t.moveTo(i, a + n), t.lineTo(i, a - n), t.moveTo(i - n, a), t.lineTo(i + n, a), l = Math.cos(Math.PI / 4) * n, s = Math.sin(Math.PI / 4) * n, t.moveTo(i - l, a - s), t.lineTo(i + l, a + s), t.moveTo(i - l, a + s), t.lineTo(i + l, a - s), t.closePath();
                  break;

                case "line":
                  t.beginPath(), t.moveTo(i - n, a), t.lineTo(i + n, a), t.closePath();
                  break;

                case "dash":
                  t.beginPath(), t.moveTo(i, a), t.lineTo(i + n, a), t.closePath();
              }

              t.stroke();
            }
          } else t.drawImage(e, i - e.width / 2, a - e.height / 2, e.width, e.height);
        },
        clipArea: function clipArea(t, e) {
          t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip();
        },
        unclipArea: function unclipArea(t) {
          t.restore();
        },
        lineTo: function lineTo(t, e, n, i) {
          if (n.steppedLine) return "after" === n.steppedLine && !i || "after" !== n.steppedLine && i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y), void t.lineTo(n.x, n.y);
          n.tension ? t.bezierCurveTo(i ? e.controlPointPreviousX : e.controlPointNextX, i ? e.controlPointPreviousY : e.controlPointNextY, i ? n.controlPointNextX : n.controlPointPreviousX, i ? n.controlPointNextY : n.controlPointPreviousY, n.x, n.y) : t.lineTo(n.x, n.y);
        }
      };
      i.clear = n.clear, i.drawRoundedRectangle = function (t) {
        t.beginPath(), n.roundedRect.apply(n, arguments), t.closePath();
      };
    }, {
      42: 42
    }],
    42: [function (t, e, n) {
      "use strict";

      var i = {
        noop: function noop() {},
        uid: function () {
          var t = 0;
          return function () {
            return t++;
          };
        }(),
        isNullOrUndef: function isNullOrUndef(t) {
          return null === t || void 0 === t;
        },
        isArray: Array.isArray ? Array.isArray : function (t) {
          return "[object Array]" === Object.prototype.toString.call(t);
        },
        isObject: function isObject(t) {
          return null !== t && "[object Object]" === Object.prototype.toString.call(t);
        },
        valueOrDefault: function valueOrDefault(t, e) {
          return void 0 === t ? e : t;
        },
        valueAtIndexOrDefault: function valueAtIndexOrDefault(t, e, n) {
          return i.valueOrDefault(i.isArray(t) ? t[e] : t, n);
        },
        callback: function callback(t, e, n) {
          if (t && "function" == typeof t.call) return t.apply(n, e);
        },
        each: function each(t, e, n, a) {
          var o, r, l;
          if (i.isArray(t)) {
            if (r = t.length, a) for (o = r - 1; o >= 0; o--) {
              e.call(n, t[o], o);
            } else for (o = 0; o < r; o++) {
              e.call(n, t[o], o);
            }
          } else if (i.isObject(t)) for (r = (l = Object.keys(t)).length, o = 0; o < r; o++) {
            e.call(n, t[l[o]], l[o]);
          }
        },
        arrayEquals: function arrayEquals(t, e) {
          var n, a, o, r;
          if (!t || !e || t.length !== e.length) return !1;

          for (n = 0, a = t.length; n < a; ++n) {
            if (o = t[n], r = e[n], o instanceof Array && r instanceof Array) {
              if (!i.arrayEquals(o, r)) return !1;
            } else if (o !== r) return !1;
          }

          return !0;
        },
        clone: function clone(t) {
          if (i.isArray(t)) return t.map(i.clone);

          if (i.isObject(t)) {
            for (var e = {}, n = Object.keys(t), a = n.length, o = 0; o < a; ++o) {
              e[n[o]] = i.clone(t[n[o]]);
            }

            return e;
          }

          return t;
        },
        _merger: function _merger(t, e, n, a) {
          var o = e[t],
              r = n[t];
          i.isObject(o) && i.isObject(r) ? i.merge(o, r, a) : e[t] = i.clone(r);
        },
        _mergerIf: function _mergerIf(t, e, n) {
          var a = e[t],
              o = n[t];
          i.isObject(a) && i.isObject(o) ? i.mergeIf(a, o) : e.hasOwnProperty(t) || (e[t] = i.clone(o));
        },
        merge: function merge(t, e, n) {
          var a,
              o,
              r,
              l,
              s,
              u = i.isArray(e) ? e : [e],
              d = u.length;
          if (!i.isObject(t)) return t;

          for (a = (n = n || {}).merger || i._merger, o = 0; o < d; ++o) {
            if (e = u[o], i.isObject(e)) for (s = 0, l = (r = Object.keys(e)).length; s < l; ++s) {
              a(r[s], t, e, n);
            }
          }

          return t;
        },
        mergeIf: function mergeIf(t, e) {
          return i.merge(t, e, {
            merger: i._mergerIf
          });
        },
        extend: function extend(t) {
          for (var e = 1, n = arguments.length; e < n; ++e) {
            i.each(arguments[e], function (e, n) {
              t[n] = e;
            });
          }

          return t;
        },
        inherits: function inherits(t) {
          var e = this,
              n = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
            return e.apply(this, arguments);
          },
              a = function a() {
            this.constructor = n;
          };

          return a.prototype = e.prototype, n.prototype = new a(), n.extend = i.inherits, t && i.extend(n.prototype, t), n.__super__ = e.prototype, n;
        }
      };
      e.exports = i, i.callCallback = i.callback, i.indexOf = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
      }, i.getValueOrDefault = i.valueOrDefault, i.getValueAtIndexOrDefault = i.valueAtIndexOrDefault;
    }, {}],
    43: [function (t, e, n) {
      "use strict";

      var i = t(42),
          a = {
        linear: function linear(t) {
          return t;
        },
        easeInQuad: function easeInQuad(t) {
          return t * t;
        },
        easeOutQuad: function easeOutQuad(t) {
          return -t * (t - 2);
        },
        easeInOutQuad: function easeInOutQuad(t) {
          return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        easeInCubic: function easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic: function easeOutCubic(t) {
          return (t -= 1) * t * t + 1;
        },
        easeInOutCubic: function easeInOutCubic(t) {
          return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        easeInQuart: function easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart: function easeOutQuart(t) {
          return -((t -= 1) * t * t * t - 1);
        },
        easeInOutQuart: function easeInOutQuart(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        easeInQuint: function easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint: function easeOutQuint(t) {
          return (t -= 1) * t * t * t * t + 1;
        },
        easeInOutQuint: function easeInOutQuint(t) {
          return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        easeInSine: function easeInSine(t) {
          return 1 - Math.cos(t * (Math.PI / 2));
        },
        easeOutSine: function easeOutSine(t) {
          return Math.sin(t * (Math.PI / 2));
        },
        easeInOutSine: function easeInOutSine(t) {
          return -.5 * (Math.cos(Math.PI * t) - 1);
        },
        easeInExpo: function easeInExpo(t) {
          return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
        },
        easeOutExpo: function easeOutExpo(t) {
          return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        easeInOutExpo: function easeInOutExpo(t) {
          return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t));
        },
        easeInCirc: function easeInCirc(t) {
          return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1);
        },
        easeOutCirc: function easeOutCirc(t) {
          return Math.sqrt(1 - (t -= 1) * t);
        },
        easeInOutCirc: function easeInOutCirc(t) {
          return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        easeInElastic: function easeInElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), -i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n));
        },
        easeOutElastic: function easeOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 1 === t ? 1 : (n || (n = .3), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1);
        },
        easeInOutElastic: function easeInOutElastic(t) {
          var e = 1.70158,
              n = 0,
              i = 1;
          return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (n || (n = .45), i < 1 ? (i = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / i), t < 1 ? i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5 : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1);
        },
        easeInBack: function easeInBack(t) {
          var e = 1.70158;
          return t * t * ((e + 1) * t - e);
        },
        easeOutBack: function easeOutBack(t) {
          var e = 1.70158;
          return (t -= 1) * t * ((e + 1) * t + e) + 1;
        },
        easeInOutBack: function easeInOutBack(t) {
          var e = 1.70158;
          return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
        },
        easeInBounce: function easeInBounce(t) {
          return 1 - a.easeOutBounce(1 - t);
        },
        easeOutBounce: function easeOutBounce(t) {
          return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        easeInOutBounce: function easeInOutBounce(t) {
          return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5;
        }
      };
      e.exports = {
        effects: a
      }, i.easingEffects = a;
    }, {
      42: 42
    }],
    44: [function (t, e, n) {
      "use strict";

      var i = t(42);
      e.exports = {
        toLineHeight: function toLineHeight(t, e) {
          var n = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
          if (!n || "normal" === n[1]) return 1.2 * e;

          switch (t = +n[2], n[3]) {
            case "px":
              return t;

            case "%":
              t /= 100;
          }

          return e * t;
        },
        toPadding: function toPadding(t) {
          var e, n, a, o;
          return i.isObject(t) ? (e = +t.top || 0, n = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = n = a = o = +t || 0, {
            top: e,
            right: n,
            bottom: a,
            left: o,
            height: e + a,
            width: o + n
          };
        },
        resolve: function resolve(t, e, n) {
          var a, o, r;

          for (a = 0, o = t.length; a < o; ++a) {
            if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== n && i.isArray(r) && (r = r[n]), void 0 !== r)) return r;
          }
        }
      };
    }, {
      42: 42
    }],
    45: [function (t, e, n) {
      "use strict";

      e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44);
    }, {
      41: 41,
      42: 42,
      43: 43,
      44: 44
    }],
    46: [function (t, e, n) {
      e.exports = {
        acquireContext: function acquireContext(t) {
          return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null;
        }
      };
    }, {}],
    47: [function (t, e, n) {
      "use strict";

      function i(t, e) {
        var n = v.getStyle(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/);
        return i ? Number(i[1]) : void 0;
      }

      function a(t, e) {
        var n = t.style,
            a = t.getAttribute("height"),
            o = t.getAttribute("width");

        if (t[m] = {
          initial: {
            height: a,
            width: o,
            style: {
              display: n.display,
              height: n.height,
              width: n.width
            }
          }
        }, n.display = n.display || "block", null === o || "" === o) {
          var r = i(t, "width");
          void 0 !== r && (t.width = r);
        }

        if (null === a || "" === a) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2);else {
          var l = i(t, "height");
          void 0 !== r && (t.height = l);
        }
        return t;
      }

      function o(t, e, n) {
        t.addEventListener(e, n, M);
      }

      function r(t, e, n) {
        t.removeEventListener(e, n, M);
      }

      function l(t, e, n, i, a) {
        return {
          type: t,
          chart: e,
          "native": a || null,
          x: void 0 !== n ? n : null,
          y: void 0 !== i ? i : null
        };
      }

      function s(t, e) {
        var n = w[t.type] || t.type,
            i = v.getRelativePosition(t, e);
        return l(n, e, i.x, i.y, t);
      }

      function u(t, e) {
        var n = !1,
            i = [];
        return function () {
          i = Array.prototype.slice.call(arguments), e = e || this, n || (n = !0, v.requestAnimFrame.call(window, function () {
            n = !1, t.apply(e, i);
          }));
        };
      }

      function d(t) {
        var e = document.createElement("div"),
            n = b + "size-monitor",
            i = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
        e.style.cssText = i, e.className = n, e.innerHTML = '<div class="' + n + '-expand" style="' + i + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + n + '-shrink" style="' + i + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
        var a = e.childNodes[0],
            r = e.childNodes[1];

        e._reset = function () {
          a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6;
        };

        var l = function l() {
          e._reset(), t();
        };

        return o(a, "scroll", l.bind(a, "expand")), o(r, "scroll", l.bind(r, "shrink")), e;
      }

      function c(t, e) {
        var n = t[m] || (t[m] = {}),
            i = n.renderProxy = function (t) {
          t.animationName === y && e();
        };

        v.each(k, function (e) {
          o(t, e, i);
        }), n.reflow = !!t.offsetParent, t.classList.add(x);
      }

      function h(t) {
        var e = t[m] || {},
            n = e.renderProxy;
        n && (v.each(k, function (e) {
          r(t, e, n);
        }), delete e.renderProxy), t.classList.remove(x);
      }

      function f(t, e, n) {
        var i = t[m] || (t[m] = {}),
            a = i.resizer = d(u(function () {
          if (i.resizer) return e(l("resize", n));
        }));
        c(t, function () {
          if (i.resizer) {
            var e = t.parentNode;
            e && e !== a.parentNode && e.insertBefore(a, e.firstChild), a._reset();
          }
        });
      }

      function g(t) {
        var e = t[m] || {},
            n = e.resizer;
        delete e.resizer, h(t), n && n.parentNode && n.parentNode.removeChild(n);
      }

      function p(t, e) {
        var n = t._style || document.createElement("style");
        t._style || (t._style = n, e = "/* Chart.js */\n" + e, n.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(n)), n.appendChild(document.createTextNode(e));
      }

      var v = t(45),
          m = "$chartjs",
          b = "chartjs-",
          x = b + "render-monitor",
          y = b + "render-animation",
          k = ["animationstart", "webkitAnimationStart"],
          w = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
      },
          M = !!function () {
        var t = !1;

        try {
          var e = Object.defineProperty({}, "passive", {
            get: function get() {
              t = !0;
            }
          });
          window.addEventListener("e", null, e);
        } catch (t) {}

        return t;
      }() && {
        passive: !0
      };
      e.exports = {
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        initialize: function initialize() {
          var t = "from{opacity:0.99}to{opacity:1}";
          p(this, "@-webkit-keyframes " + y + "{" + t + "}@keyframes " + y + "{" + t + "}." + x + "{-webkit-animation:" + y + " 0.001s;animation:" + y + " 0.001s;}");
        },
        acquireContext: function acquireContext(t, e) {
          "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
          var n = t && t.getContext && t.getContext("2d");
          return n && n.canvas === t ? (a(t, e), n) : null;
        },
        releaseContext: function releaseContext(t) {
          var e = t.canvas;

          if (e[m]) {
            var n = e[m].initial;
            ["height", "width"].forEach(function (t) {
              var i = n[t];
              v.isNullOrUndef(i) ? e.removeAttribute(t) : e.setAttribute(t, i);
            }), v.each(n.style || {}, function (t, n) {
              e.style[n] = t;
            }), e.width = e.width, delete e[m];
          }
        },
        addEventListener: function addEventListener(t, e, n) {
          var i = t.canvas;

          if ("resize" !== e) {
            var a = n[m] || (n[m] = {});
            o(i, e, (a.proxies || (a.proxies = {}))[t.id + "_" + e] = function (e) {
              n(s(e, t));
            });
          } else f(i, n, t);
        },
        removeEventListener: function removeEventListener(t, e, n) {
          var i = t.canvas;

          if ("resize" !== e) {
            var a = ((n[m] || {}).proxies || {})[t.id + "_" + e];
            a && r(i, e, a);
          } else g(i);
        }
      }, v.addEvent = o, v.removeEvent = r;
    }, {
      45: 45
    }],
    48: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(46),
          o = t(47),
          r = o._enabled ? o : a;
      e.exports = i.extend({
        initialize: function initialize() {},
        acquireContext: function acquireContext() {},
        releaseContext: function releaseContext() {},
        addEventListener: function addEventListener() {},
        removeEventListener: function removeEventListener() {}
      }, r);
    }, {
      45: 45,
      46: 46,
      47: 47
    }],
    49: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(40),
          o = t(45);
      i._set("global", {
        plugins: {
          filler: {
            propagate: !0
          }
        }
      }), e.exports = function () {
        function t(t, e, n) {
          var i,
              a = t._model || {},
              o = a.fill;
          if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
          if (!0 === o) return "origin";
          if (i = parseFloat(o, 10), isFinite(i) && Math.floor(i) === i) return "-" !== o[0] && "+" !== o[0] || (i = e + i), !(i === e || i < 0 || i >= n) && i;

          switch (o) {
            case "bottom":
              return "start";

            case "top":
              return "end";

            case "zero":
              return "origin";

            case "origin":
            case "start":
            case "end":
              return o;

            default:
              return !1;
          }
        }

        function e(t) {
          var e,
              n = t.el._model || {},
              i = t.el._scale || {},
              a = t.fill,
              o = null;
          if (isFinite(a)) return null;

          if ("start" === a ? o = void 0 === n.scaleBottom ? i.bottom : n.scaleBottom : "end" === a ? o = void 0 === n.scaleTop ? i.top : n.scaleTop : void 0 !== n.scaleZero ? o = n.scaleZero : i.getBasePosition ? o = i.getBasePosition() : i.getBasePixel && (o = i.getBasePixel()), void 0 !== o && null !== o) {
            if (void 0 !== o.x && void 0 !== o.y) return o;
            if ("number" == typeof o && isFinite(o)) return e = i.isHorizontal(), {
              x: e ? o : null,
              y: e ? null : o
            };
          }

          return null;
        }

        function n(t, e, n) {
          var i,
              a = t[e].fill,
              o = [e];
          if (!n) return a;

          for (; !1 !== a && -1 === o.indexOf(a);) {
            if (!isFinite(a)) return a;
            if (!(i = t[a])) return !1;
            if (i.visible) return a;
            o.push(a), a = i.fill;
          }

          return !1;
        }

        function r(t) {
          var e = t.fill,
              n = "dataset";
          return !1 === e ? null : (isFinite(e) || (n = "boundary"), d[n](t));
        }

        function l(t) {
          return t && !t.skip;
        }

        function s(t, e, n, i, a) {
          var r;

          if (i && a) {
            for (t.moveTo(e[0].x, e[0].y), r = 1; r < i; ++r) {
              o.canvas.lineTo(t, e[r - 1], e[r]);
            }

            for (t.lineTo(n[a - 1].x, n[a - 1].y), r = a - 1; r > 0; --r) {
              o.canvas.lineTo(t, n[r], n[r - 1], !0);
            }
          }
        }

        function u(t, e, n, i, a, o) {
          var r,
              u,
              d,
              c,
              h,
              f,
              g,
              p = e.length,
              v = i.spanGaps,
              m = [],
              b = [],
              x = 0,
              y = 0;

          for (t.beginPath(), r = 0, u = p + !!o; r < u; ++r) {
            h = n(c = e[d = r % p]._view, d, i), f = l(c), g = l(h), f && g ? (x = m.push(c), y = b.push(h)) : x && y && (v ? (f && m.push(c), g && b.push(h)) : (s(t, m, b, x, y), x = y = 0, m = [], b = []));
          }

          s(t, m, b, x, y), t.closePath(), t.fillStyle = a, t.fill();
        }

        var d = {
          dataset: function dataset(t) {
            var e = t.fill,
                n = t.chart,
                i = n.getDatasetMeta(e),
                a = i && n.isDatasetVisible(e) && i.dataset._children || [],
                o = a.length || 0;
            return o ? function (t, e) {
              return e < o && a[e]._view || null;
            } : null;
          },
          boundary: function boundary(t) {
            var e = t.boundary,
                n = e ? e.x : null,
                i = e ? e.y : null;
            return function (t) {
              return {
                x: null === n ? t.x : n,
                y: null === i ? t.y : i
              };
            };
          }
        };
        return {
          id: "filler",
          afterDatasetsUpdate: function afterDatasetsUpdate(i, o) {
            var l,
                s,
                u,
                d,
                c = (i.data.datasets || []).length,
                h = o.propagate,
                f = [];

            for (s = 0; s < c; ++s) {
              d = null, (u = (l = i.getDatasetMeta(s)).dataset) && u._model && u instanceof a.Line && (d = {
                visible: i.isDatasetVisible(s),
                fill: t(u, s, c),
                chart: i,
                el: u
              }), l.$filler = d, f.push(d);
            }

            for (s = 0; s < c; ++s) {
              (d = f[s]) && (d.fill = n(f, s, h), d.boundary = e(d), d.mapper = r(d));
            }
          },
          beforeDatasetDraw: function beforeDatasetDraw(t, e) {
            var n = e.meta.$filler;

            if (n) {
              var a = t.ctx,
                  r = n.el,
                  l = r._view,
                  s = r._children || [],
                  d = n.mapper,
                  c = l.backgroundColor || i.global.defaultColor;
              d && c && s.length && (o.canvas.clipArea(a, t.chartArea), u(a, s, d, l, c, r._loop), o.canvas.unclipArea(a));
            }
          }
        };
      };
    }, {
      25: 25,
      40: 40,
      45: 45
    }],
    50: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        legend: {
          display: !0,
          position: "top",
          fullWidth: !0,
          reverse: !1,
          weight: 1e3,
          onClick: function onClick(t, e) {
            var n = e.datasetIndex,
                i = this.chart,
                a = i.getDatasetMeta(n);
            a.hidden = null === a.hidden ? !i.data.datasets[n].hidden : null, i.update();
          },
          onHover: null,
          labels: {
            boxWidth: 40,
            padding: 10,
            generateLabels: function generateLabels(t) {
              var e = t.data;
              return o.isArray(e.datasets) ? e.datasets.map(function (e, n) {
                return {
                  text: e.label,
                  fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                  hidden: !t.isDatasetVisible(n),
                  lineCap: e.borderCapStyle,
                  lineDash: e.borderDash,
                  lineDashOffset: e.borderDashOffset,
                  lineJoin: e.borderJoinStyle,
                  lineWidth: e.borderWidth,
                  strokeStyle: e.borderColor,
                  pointStyle: e.pointStyle,
                  datasetIndex: n
                };
              }, this) : [];
            }
          }
        },
        legendCallback: function legendCallback(t) {
          var e = [];
          e.push('<ul class="' + t.id + '-legend">');

          for (var n = 0; n < t.data.datasets.length; n++) {
            e.push('<li><span style="background-color:' + t.data.datasets[n].backgroundColor + '"></span>'), t.data.datasets[n].label && e.push(t.data.datasets[n].label), e.push("</li>");
          }

          return e.push("</ul>"), e.join("");
        }
      }), e.exports = function (t) {
        function e(t, e) {
          return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth;
        }

        function n(e, n) {
          var i = new t.Legend({
            ctx: e.ctx,
            options: n,
            chart: e
          });
          r.configure(e, i, n), r.addBox(e, i), e.legend = i;
        }

        var r = t.layoutService,
            l = o.noop;
        return t.Legend = a.extend({
          initialize: function initialize(t) {
            o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1;
          },
          beforeUpdate: l,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: l,
          beforeSetDimensions: l,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: l,
          beforeBuildLabels: l,
          buildLabels: function buildLabels() {
            var t = this,
                e = t.options.labels || {},
                n = o.callback(e.generateLabels, [t.chart], t) || [];
            e.filter && (n = n.filter(function (n) {
              return e.filter(n, t.chart.data);
            })), t.options.reverse && n.reverse(), t.legendItems = n;
          },
          afterBuildLabels: l,
          beforeFit: l,
          fit: function fit() {
            var t = this,
                n = t.options,
                a = n.labels,
                r = n.display,
                l = t.ctx,
                s = i.global,
                u = o.valueOrDefault,
                d = u(a.fontSize, s.defaultFontSize),
                c = u(a.fontStyle, s.defaultFontStyle),
                h = u(a.fontFamily, s.defaultFontFamily),
                f = o.fontString(d, c, h),
                g = t.legendHitBoxes = [],
                p = t.minSize,
                v = t.isHorizontal();
            if (v ? (p.width = t.maxWidth, p.height = r ? 10 : 0) : (p.width = r ? 10 : 0, p.height = t.maxHeight), r) if (l.font = f, v) {
              var m = t.lineWidths = [0],
                  b = t.legendItems.length ? d + a.padding : 0;
              l.textAlign = "left", l.textBaseline = "top", o.each(t.legendItems, function (n, i) {
                var o = e(a, d) + d / 2 + l.measureText(n.text).width;
                m[m.length - 1] + o + a.padding >= t.width && (b += d + a.padding, m[m.length] = t.left), g[i] = {
                  left: 0,
                  top: 0,
                  width: o,
                  height: d
                }, m[m.length - 1] += o + a.padding;
              }), p.height += b;
            } else {
              var x = a.padding,
                  y = t.columnWidths = [],
                  k = a.padding,
                  w = 0,
                  M = 0,
                  S = d + x;
              o.each(t.legendItems, function (t, n) {
                var i = e(a, d) + d / 2 + l.measureText(t.text).width;
                M + S > p.height && (k += w + a.padding, y.push(w), w = 0, M = 0), w = Math.max(w, i), M += S, g[n] = {
                  left: 0,
                  top: 0,
                  width: i,
                  height: d
                };
              }), k += w, y.push(w), p.width += k;
            }
            t.width = p.width, t.height = p.height;
          },
          afterFit: l,
          isHorizontal: function isHorizontal() {
            return "top" === this.options.position || "bottom" === this.options.position;
          },
          draw: function draw() {
            var t = this,
                n = t.options,
                a = n.labels,
                r = i.global,
                l = r.elements.line,
                s = t.width,
                u = t.lineWidths;

            if (n.display) {
              var d,
                  c = t.ctx,
                  h = o.valueOrDefault,
                  f = h(a.fontColor, r.defaultFontColor),
                  g = h(a.fontSize, r.defaultFontSize),
                  p = h(a.fontStyle, r.defaultFontStyle),
                  v = h(a.fontFamily, r.defaultFontFamily),
                  m = o.fontString(g, p, v);
              c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = m;

              var b = e(a, g),
                  x = t.legendHitBoxes,
                  y = function y(t, e, i) {
                if (!(isNaN(b) || b <= 0)) {
                  c.save(), c.fillStyle = h(i.fillStyle, r.defaultColor), c.lineCap = h(i.lineCap, l.borderCapStyle), c.lineDashOffset = h(i.lineDashOffset, l.borderDashOffset), c.lineJoin = h(i.lineJoin, l.borderJoinStyle), c.lineWidth = h(i.lineWidth, l.borderWidth), c.strokeStyle = h(i.strokeStyle, r.defaultColor);
                  var a = 0 === h(i.lineWidth, l.borderWidth);

                  if (c.setLineDash && c.setLineDash(h(i.lineDash, l.borderDash)), n.labels && n.labels.usePointStyle) {
                    var s = g * Math.SQRT2 / 2,
                        u = s / Math.SQRT2,
                        d = t + u,
                        f = e + u;
                    o.canvas.drawPoint(c, i.pointStyle, s, d, f);
                  } else a || c.strokeRect(t, e, b, g), c.fillRect(t, e, b, g);

                  c.restore();
                }
              },
                  k = function k(t, e, n, i) {
                var a = g / 2,
                    o = b + a + t,
                    r = e + a;
                c.fillText(n.text, o, r), n.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(o, r), c.lineTo(o + i, r), c.stroke());
              },
                  w = t.isHorizontal();

              d = w ? {
                x: t.left + (s - u[0]) / 2,
                y: t.top + a.padding,
                line: 0
              } : {
                x: t.left + a.padding,
                y: t.top + a.padding,
                line: 0
              };
              var M = g + a.padding;
              o.each(t.legendItems, function (e, n) {
                var i = c.measureText(e.text).width,
                    o = b + g / 2 + i,
                    r = d.x,
                    l = d.y;
                w ? r + o >= s && (l = d.y += M, d.line++, r = d.x = t.left + (s - u[d.line]) / 2) : l + M > t.bottom && (r = d.x = r + t.columnWidths[d.line] + a.padding, l = d.y = t.top + a.padding, d.line++), y(r, l, e), x[n].left = r, x[n].top = l, k(r, l, e, i), w ? d.x += o + a.padding : d.y += M;
              });
            }
          },
          handleEvent: function handleEvent(t) {
            var e = this,
                n = e.options,
                i = "mouseup" === t.type ? "click" : t.type,
                a = !1;

            if ("mousemove" === i) {
              if (!n.onHover) return;
            } else {
              if ("click" !== i) return;
              if (!n.onClick) return;
            }

            var o = t.x,
                r = t.y;
            if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var l = e.legendHitBoxes, s = 0; s < l.length; ++s) {
              var u = l[s];

              if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                if ("click" === i) {
                  n.onClick.call(e, t["native"], e.legendItems[s]), a = !0;
                  break;
                }

                if ("mousemove" === i) {
                  n.onHover.call(e, t["native"], e.legendItems[s]), a = !0;
                  break;
                }
              }
            }
            return a;
          }
        }), {
          id: "legend",
          beforeInit: function beforeInit(t) {
            var e = t.options.legend;
            e && n(t, e);
          },
          beforeUpdate: function beforeUpdate(t) {
            var e = t.options.legend,
                a = t.legend;
            e ? (o.mergeIf(e, i.global.legend), a ? (r.configure(t, a, e), a.options = e) : n(t, e)) : a && (r.removeBox(t, a), delete t.legend);
          },
          afterEvent: function afterEvent(t, e) {
            var n = t.legend;
            n && n.handleEvent(e);
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    51: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(26),
          o = t(45);
      i._set("global", {
        title: {
          display: !1,
          fontStyle: "bold",
          fullWidth: !0,
          lineHeight: 1.2,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3
        }
      }), e.exports = function (t) {
        function e(e, i) {
          var a = new t.Title({
            ctx: e.ctx,
            options: i,
            chart: e
          });
          n.configure(e, a, i), n.addBox(e, a), e.titleBlock = a;
        }

        var n = t.layoutService,
            r = o.noop;
        return t.Title = a.extend({
          initialize: function initialize(t) {
            var e = this;
            o.extend(e, t), e.legendHitBoxes = [];
          },
          beforeUpdate: r,
          update: function update(t, e, n) {
            var i = this;
            return i.beforeUpdate(), i.maxWidth = t, i.maxHeight = e, i.margins = n, i.beforeSetDimensions(), i.setDimensions(), i.afterSetDimensions(), i.beforeBuildLabels(), i.buildLabels(), i.afterBuildLabels(), i.beforeFit(), i.fit(), i.afterFit(), i.afterUpdate(), i.minSize;
          },
          afterUpdate: r,
          beforeSetDimensions: r,
          setDimensions: function setDimensions() {
            var t = this;
            t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
              width: 0,
              height: 0
            };
          },
          afterSetDimensions: r,
          beforeBuildLabels: r,
          buildLabels: r,
          afterBuildLabels: r,
          beforeFit: r,
          fit: function fit() {
            var t = this,
                e = o.valueOrDefault,
                n = t.options,
                a = n.display,
                r = e(n.fontSize, i.global.defaultFontSize),
                l = t.minSize,
                s = o.isArray(n.text) ? n.text.length : 1,
                u = o.options.toLineHeight(n.lineHeight, r),
                d = a ? s * u + 2 * n.padding : 0;
            t.isHorizontal() ? (l.width = t.maxWidth, l.height = d) : (l.width = d, l.height = t.maxHeight), t.width = l.width, t.height = l.height;
          },
          afterFit: r,
          isHorizontal: function isHorizontal() {
            var t = this.options.position;
            return "top" === t || "bottom" === t;
          },
          draw: function draw() {
            var t = this,
                e = t.ctx,
                n = o.valueOrDefault,
                a = t.options,
                r = i.global;

            if (a.display) {
              var l,
                  s,
                  u,
                  d = n(a.fontSize, r.defaultFontSize),
                  c = n(a.fontStyle, r.defaultFontStyle),
                  h = n(a.fontFamily, r.defaultFontFamily),
                  f = o.fontString(d, c, h),
                  g = o.options.toLineHeight(a.lineHeight, d),
                  p = g / 2 + a.padding,
                  v = 0,
                  m = t.top,
                  b = t.left,
                  x = t.bottom,
                  y = t.right;
              e.fillStyle = n(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (s = b + (y - b) / 2, u = m + p, l = y - b) : (s = "left" === a.position ? b + p : y - p, u = m + (x - m) / 2, l = x - m, v = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(s, u), e.rotate(v), e.textAlign = "center", e.textBaseline = "middle";
              var k = a.text;
              if (o.isArray(k)) for (var w = 0, M = 0; M < k.length; ++M) {
                e.fillText(k[M], 0, w, l), w += g;
              } else e.fillText(k, 0, 0, l);
              e.restore();
            }
          }
        }), {
          id: "title",
          beforeInit: function beforeInit(t) {
            var n = t.options.title;
            n && e(t, n);
          },
          beforeUpdate: function beforeUpdate(a) {
            var r = a.options.title,
                l = a.titleBlock;
            r ? (o.mergeIf(r, i.global.title), l ? (n.configure(a, l, r), l.options = r) : e(a, r)) : l && (t.layoutService.removeBox(a, l), delete a.titleBlock);
          }
        };
      };
    }, {
      25: 25,
      26: 26,
      45: 45
    }],
    52: [function (t, e, n) {
      "use strict";

      e.exports = function (t) {
        var e = t.Scale.extend({
          getLabels: function getLabels() {
            var t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.getLabels();
            t.minIndex = 0, t.maxIndex = e.length - 1;
            var n;
            void 0 !== t.options.ticks.min && (n = e.indexOf(t.options.ticks.min), t.minIndex = -1 !== n ? n : t.minIndex), void 0 !== t.options.ticks.max && (n = e.indexOf(t.options.ticks.max), t.maxIndex = -1 !== n ? n : t.maxIndex), t.min = e[t.minIndex], t.max = e[t.maxIndex];
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.getLabels();
            t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this,
                i = n.chart.data,
                a = n.isHorizontal();
            return i.yLabels && !a ? n.getRightValue(i.datasets[e].data[t]) : n.ticks[t - n.minIndex];
          },
          getPixelForValue: function getPixelForValue(t, e) {
            var n,
                i = this,
                a = i.options.offset,
                o = Math.max(i.maxIndex + 1 - i.minIndex - (a ? 0 : 1), 1);

            if (void 0 !== t && null !== t && (n = i.isHorizontal() ? t.x : t.y), void 0 !== n || void 0 !== t && isNaN(e)) {
              var r = i.getLabels();
              t = n || t;
              var l = r.indexOf(t);
              e = -1 !== l ? l : e;
            }

            if (i.isHorizontal()) {
              var s = i.width / o,
                  u = s * (e - i.minIndex);
              return a && (u += s / 2), i.left + Math.round(u);
            }

            var d = i.height / o,
                c = d * (e - i.minIndex);
            return a && (c += d / 2), i.top + Math.round(c);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticks[t], t + this.minIndex, null);
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.options.offset,
                i = Math.max(e._ticks.length - (n ? 0 : 1), 1),
                a = e.isHorizontal(),
                o = (a ? e.width : e.height) / i;
            return t -= a ? e.left : e.top, n && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex;
          },
          getBasePixel: function getBasePixel() {
            return this.bottom;
          }
        });
        t.scaleService.registerScaleType("category", e, {
          position: "bottom"
        });
      };
    }, {}],
    53: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: o.formatters.linear
          }
        },
            n = t.LinearScaleBase.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return r ? t.xAxisID === e.id : t.yAxisID === e.id;
            }

            var e = this,
                n = e.options,
                i = e.chart,
                o = i.data.datasets,
                r = e.isHorizontal();
            e.min = null, e.max = null;
            var l = n.stacked;

            if (void 0 === l && a.each(o, function (e, n) {
              if (!l) {
                var a = i.getDatasetMeta(n);
                i.isDatasetVisible(n) && t(a) && void 0 !== a.stack && (l = !0);
              }
            }), n.stacked || l) {
              var s = {};
              a.each(o, function (o, r) {
                var l = i.getDatasetMeta(r),
                    u = [l.type, void 0 === n.stacked && void 0 === l.stack ? r : "", l.stack].join(".");
                void 0 === s[u] && (s[u] = {
                  positiveValues: [],
                  negativeValues: []
                });
                var d = s[u].positiveValues,
                    c = s[u].negativeValues;
                i.isDatasetVisible(r) && t(l) && a.each(o.data, function (t, i) {
                  var a = +e.getRightValue(t);
                  isNaN(a) || l.data[i].hidden || (d[i] = d[i] || 0, c[i] = c[i] || 0, n.relativePoints ? d[i] = 100 : a < 0 ? c[i] += a : d[i] += a);
                });
              }), a.each(s, function (t) {
                var n = t.positiveValues.concat(t.negativeValues),
                    i = a.min(n),
                    o = a.max(n);
                e.min = null === e.min ? i : Math.min(e.min, i), e.max = null === e.max ? o : Math.max(e.max, o);
              });
            } else a.each(o, function (n, o) {
              var r = i.getDatasetMeta(o);
              i.isDatasetVisible(o) && t(r) && a.each(n.data, function (t, n) {
                var i = +e.getRightValue(t);
                isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i));
              });
            });

            e.min = isFinite(e.min) && !isNaN(e.min) ? e.min : 0, e.max = isFinite(e.max) && !isNaN(e.max) ? e.max : 1, this.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t,
                e = this,
                n = e.options.ticks;
            if (e.isHorizontal()) t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.width / 50));else {
              var o = a.valueOrDefault(n.fontSize, i.global.defaultFontSize);
              t = Math.min(n.maxTicksLimit ? n.maxTicksLimit : 11, Math.ceil(e.height / (2 * o)));
            }
            return t;
          },
          handleDirectionalChanges: function handleDirectionalChanges() {
            this.isHorizontal() || this.ticks.reverse();
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                n = this,
                i = n.start,
                a = +n.getRightValue(t),
                o = n.end - i;
            return n.isHorizontal() ? (e = n.left + n.width / o * (a - i), Math.round(e)) : (e = n.bottom - n.height / o * (a - i), Math.round(e));
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e.isHorizontal(),
                i = n ? e.width : e.height,
                a = (n ? t - e.left : e.bottom - t) / i;
            return e.start + (e.end - e.start) * a;
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.ticksAsNumbers[t]);
          }
        });
        t.scaleService.registerScaleType("linear", n, e);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    54: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = i.noop;
        t.LinearScaleBase = t.Scale.extend({
          getRightValue: function getRightValue(e) {
            return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e);
          },
          handleTickRangeOptions: function handleTickRangeOptions() {
            var t = this,
                e = t.options.ticks;

            if (e.beginAtZero) {
              var n = i.sign(t.min),
                  a = i.sign(t.max);
              n < 0 && a < 0 ? t.max = 0 : n > 0 && a > 0 && (t.min = 0);
            }

            var o = void 0 !== e.min || void 0 !== e.suggestedMin,
                r = void 0 !== e.max || void 0 !== e.suggestedMax;
            void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--);
          },
          getTickLimit: e,
          handleDirectionalChanges: e,
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = t.getTickLimit(),
                o = {
              maxTicks: n = Math.max(2, n),
              min: e.min,
              max: e.max,
              stepSize: i.valueOrDefault(e.fixedStepSize, e.stepSize)
            },
                r = t.ticks = a.generators.linear(o, t);
            t.handleDirectionalChanges(), t.max = i.max(r), t.min = i.min(r), e.reverse ? (r.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e);
          }
        });
      };
    }, {
      34: 34,
      45: 45
    }],
    55: [function (t, e, n) {
      "use strict";

      var i = t(45),
          a = t(34);

      e.exports = function (t) {
        var e = {
          position: "left",
          ticks: {
            callback: a.formatters.logarithmic
          }
        },
            n = t.Scale.extend({
          determineDataLimits: function determineDataLimits() {
            function t(t) {
              return s ? t.xAxisID === e.id : t.yAxisID === e.id;
            }

            var e = this,
                n = e.options,
                a = n.ticks,
                o = e.chart,
                r = o.data.datasets,
                l = i.valueOrDefault,
                s = e.isHorizontal();
            e.min = null, e.max = null, e.minNotZero = null;
            var u = n.stacked;

            if (void 0 === u && i.each(r, function (e, n) {
              if (!u) {
                var i = o.getDatasetMeta(n);
                o.isDatasetVisible(n) && t(i) && void 0 !== i.stack && (u = !0);
              }
            }), n.stacked || u) {
              var d = {};
              i.each(r, function (a, r) {
                var l = o.getDatasetMeta(r),
                    s = [l.type, void 0 === n.stacked && void 0 === l.stack ? r : "", l.stack].join(".");
                o.isDatasetVisible(r) && t(l) && (void 0 === d[s] && (d[s] = []), i.each(a.data, function (t, i) {
                  var a = d[s],
                      o = +e.getRightValue(t);
                  isNaN(o) || l.data[i].hidden || (a[i] = a[i] || 0, n.relativePoints ? a[i] = 100 : a[i] += o);
                }));
              }), i.each(d, function (t) {
                var n = i.min(t),
                    a = i.max(t);
                e.min = null === e.min ? n : Math.min(e.min, n), e.max = null === e.max ? a : Math.max(e.max, a);
              });
            } else i.each(r, function (n, a) {
              var r = o.getDatasetMeta(a);
              o.isDatasetVisible(a) && t(r) && i.each(n.data, function (t, n) {
                var i = +e.getRightValue(t);
                isNaN(i) || r.data[n].hidden || (null === e.min ? e.min = i : i < e.min && (e.min = i), null === e.max ? e.max = i : i > e.max && (e.max = i), 0 !== i && (null === e.minNotZero || i < e.minNotZero) && (e.minNotZero = i));
              });
            });

            e.min = l(a.min, e.min), e.max = l(a.max, e.max), e.min === e.max && (0 !== e.min && null !== e.min ? (e.min = Math.pow(10, Math.floor(i.log10(e.min)) - 1), e.max = Math.pow(10, Math.floor(i.log10(e.max)) + 1)) : (e.min = 1, e.max = 10));
          },
          buildTicks: function buildTicks() {
            var t = this,
                e = t.options.ticks,
                n = {
              min: e.min,
              max: e.max
            },
                o = t.ticks = a.generators.logarithmic(n, t);
            t.isHorizontal() || o.reverse(), t.max = i.max(o), t.min = i.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max);
          },
          convertTicksToLabels: function convertTicksToLabels() {
            this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          getPixelForTick: function getPixelForTick(t) {
            return this.getPixelForValue(this.tickValues[t]);
          },
          getPixelForValue: function getPixelForValue(t) {
            var e,
                n,
                a,
                o = this,
                r = o.start,
                l = +o.getRightValue(t),
                s = o.options.ticks;
            return o.isHorizontal() ? (a = i.log10(o.end) - i.log10(r), 0 === l ? n = o.left : (e = o.width, n = o.left + e / a * (i.log10(l) - i.log10(r)))) : (e = o.height, 0 !== r || s.reverse ? 0 === o.end && s.reverse ? (a = i.log10(o.start) - i.log10(o.minNotZero), n = l === o.end ? o.top : l === o.minNotZero ? o.top + .02 * e : o.top + .02 * e + .98 * e / a * (i.log10(l) - i.log10(o.minNotZero))) : 0 === l ? n = s.reverse ? o.top : o.bottom : (a = i.log10(o.end) - i.log10(r), e = o.height, n = o.bottom - e / a * (i.log10(l) - i.log10(r))) : (a = i.log10(o.end) - i.log10(o.minNotZero), n = l === r ? o.bottom : l === o.minNotZero ? o.bottom - .02 * e : o.bottom - .02 * e - .98 * e / a * (i.log10(l) - i.log10(o.minNotZero)))), n;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e,
                n,
                a = this,
                o = i.log10(a.end) - i.log10(a.start);
            return a.isHorizontal() ? (n = a.width, e = a.start * Math.pow(10, (t - a.left) * o / n)) : (n = a.height, e = Math.pow(10, (a.bottom - t) * o / n) / a.start), e;
          }
        });
        t.scaleService.registerScaleType("logarithmic", n, e);
      };
    }, {
      34: 34,
      45: 45
    }],
    56: [function (t, e, n) {
      "use strict";

      var i = t(25),
          a = t(45),
          o = t(34);

      e.exports = function (t) {
        function e(t) {
          var e = t.options;
          return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0;
        }

        function n(t) {
          var e = t.options.pointLabels,
              n = a.valueOrDefault(e.fontSize, v.defaultFontSize),
              i = a.valueOrDefault(e.fontStyle, v.defaultFontStyle),
              o = a.valueOrDefault(e.fontFamily, v.defaultFontFamily);
          return {
            size: n,
            style: i,
            family: o,
            font: a.fontString(n, i, o)
          };
        }

        function r(t, e, n) {
          return a.isArray(n) ? {
            w: a.longestText(t, t.font, n),
            h: n.length * e + 1.5 * (n.length - 1) * e
          } : {
            w: t.measureText(n).width,
            h: e
          };
        }

        function l(t, e, n, i, a) {
          return t === i || t === a ? {
            start: e - n / 2,
            end: e + n / 2
          } : t < i || t > a ? {
            start: e - n - 5,
            end: e
          } : {
            start: e,
            end: e + n + 5
          };
        }

        function s(t) {
          var i,
              o,
              s,
              u = n(t),
              d = Math.min(t.height / 2, t.width / 2),
              c = {
            r: t.width,
            l: 0,
            t: t.height,
            b: 0
          },
              h = {};
          t.ctx.font = u.font, t._pointLabelSizes = [];
          var f = e(t);

          for (i = 0; i < f; i++) {
            s = t.getPointPosition(i, d), o = r(t.ctx, u.size, t.pointLabels[i] || ""), t._pointLabelSizes[i] = o;
            var g = t.getIndexAngle(i),
                p = a.toDegrees(g) % 360,
                v = l(p, s.x, o.w, 0, 180),
                m = l(p, s.y, o.h, 90, 270);
            v.start < c.l && (c.l = v.start, h.l = g), v.end > c.r && (c.r = v.end, h.r = g), m.start < c.t && (c.t = m.start, h.t = g), m.end > c.b && (c.b = m.end, h.b = g);
          }

          t.setReductions(d, c, h);
        }

        function u(t) {
          var e = Math.min(t.height / 2, t.width / 2);
          t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0);
        }

        function d(t) {
          return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
        }

        function c(t, e, n, i) {
          if (a.isArray(e)) for (var o = n.y, r = 1.5 * i, l = 0; l < e.length; ++l) {
            t.fillText(e[l], n.x, o), o += r;
          } else t.fillText(e, n.x, n.y);
        }

        function h(t, e, n) {
          90 === t || 270 === t ? n.y -= e.h / 2 : (t > 270 || t < 90) && (n.y -= e.h);
        }

        function f(t) {
          var i = t.ctx,
              o = a.valueOrDefault,
              r = t.options,
              l = r.angleLines,
              s = r.pointLabels;
          i.lineWidth = l.lineWidth, i.strokeStyle = l.color;
          var u = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max),
              f = n(t);
          i.textBaseline = "top";

          for (var g = e(t) - 1; g >= 0; g--) {
            if (l.display) {
              var p = t.getPointPosition(g, u);
              i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(p.x, p.y), i.stroke(), i.closePath();
            }

            if (s.display) {
              var m = t.getPointPosition(g, u + 5),
                  b = o(s.fontColor, v.defaultFontColor);
              i.font = f.font, i.fillStyle = b;
              var x = t.getIndexAngle(g),
                  y = a.toDegrees(x);
              i.textAlign = d(y), h(y, t._pointLabelSizes[g], m), c(i, t.pointLabels[g] || "", m, f.size);
            }
          }
        }

        function g(t, n, i, o) {
          var r = t.ctx;
          if (r.strokeStyle = a.valueAtIndexOrDefault(n.color, o - 1), r.lineWidth = a.valueAtIndexOrDefault(n.lineWidth, o - 1), t.options.gridLines.circular) r.beginPath(), r.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), r.closePath(), r.stroke();else {
            var l = e(t);
            if (0 === l) return;
            r.beginPath();
            var s = t.getPointPosition(0, i);
            r.moveTo(s.x, s.y);

            for (var u = 1; u < l; u++) {
              s = t.getPointPosition(u, i), r.lineTo(s.x, s.y);
            }

            r.closePath(), r.stroke();
          }
        }

        function p(t) {
          return a.isNumber(t) ? t : 0;
        }

        var v = i.global,
            m = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            color: "rgba(0, 0, 0, 0.1)",
            lineWidth: 1
          },
          gridLines: {
            circular: !1
          },
          ticks: {
            showLabelBackdrop: !0,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: o.formatters.linear
          },
          pointLabels: {
            display: !0,
            fontSize: 10,
            callback: function callback(t) {
              return t;
            }
          }
        },
            b = t.LinearScaleBase.extend({
          setDimensions: function setDimensions() {
            var t = this,
                e = t.options,
                n = e.ticks;
            t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
            var i = a.min([t.height, t.width]),
                o = a.valueOrDefault(n.fontSize, v.defaultFontSize);
            t.drawingArea = e.display ? i / 2 - (o / 2 + n.backdropPaddingY) : i / 2;
          },
          determineDataLimits: function determineDataLimits() {
            var t = this,
                e = t.chart,
                n = Number.POSITIVE_INFINITY,
                i = Number.NEGATIVE_INFINITY;
            a.each(e.data.datasets, function (o, r) {
              if (e.isDatasetVisible(r)) {
                var l = e.getDatasetMeta(r);
                a.each(o.data, function (e, a) {
                  var o = +t.getRightValue(e);
                  isNaN(o) || l.data[a].hidden || (n = Math.min(o, n), i = Math.max(o, i));
                });
              }
            }), t.min = n === Number.POSITIVE_INFINITY ? 0 : n, t.max = i === Number.NEGATIVE_INFINITY ? 0 : i, t.handleTickRangeOptions();
          },
          getTickLimit: function getTickLimit() {
            var t = this.options.ticks,
                e = a.valueOrDefault(t.fontSize, v.defaultFontSize);
            return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * e)));
          },
          convertTicksToLabels: function convertTicksToLabels() {
            var e = this;
            t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            return +this.getRightValue(this.chart.data.datasets[e].data[t]);
          },
          fit: function fit() {
            this.options.pointLabels.display ? s(this) : u(this);
          },
          setReductions: function setReductions(t, e, n) {
            var i = this,
                a = e.l / Math.sin(n.l),
                o = Math.max(e.r - i.width, 0) / Math.sin(n.r),
                r = -e.t / Math.cos(n.t),
                l = -Math.max(e.b - i.height, 0) / Math.cos(n.b);
            a = p(a), o = p(o), r = p(r), l = p(l), i.drawingArea = Math.min(Math.round(t - (a + o) / 2), Math.round(t - (r + l) / 2)), i.setCenterPoint(a, o, r, l);
          },
          setCenterPoint: function setCenterPoint(t, e, n, i) {
            var a = this,
                o = a.width - e - a.drawingArea,
                r = t + a.drawingArea,
                l = n + a.drawingArea,
                s = a.height - i - a.drawingArea;
            a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((l + s) / 2 + a.top);
          },
          getIndexAngle: function getIndexAngle(t) {
            return t * (2 * Math.PI / e(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360;
          },
          getDistanceFromCenterForValue: function getDistanceFromCenterForValue(t) {
            var e = this;
            if (null === t) return 0;
            var n = e.drawingArea / (e.max - e.min);
            return e.options.ticks.reverse ? (e.max - t) * n : (t - e.min) * n;
          },
          getPointPosition: function getPointPosition(t, e) {
            var n = this,
                i = n.getIndexAngle(t) - Math.PI / 2;
            return {
              x: Math.round(Math.cos(i) * e) + n.xCenter,
              y: Math.round(Math.sin(i) * e) + n.yCenter
            };
          },
          getPointPositionForValue: function getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
          },
          getBasePosition: function getBasePosition() {
            var t = this,
                e = t.min,
                n = t.max;
            return t.getPointPositionForValue(0, t.beginAtZero ? 0 : e < 0 && n < 0 ? n : e > 0 && n > 0 ? e : 0);
          },
          draw: function draw() {
            var t = this,
                e = t.options,
                n = e.gridLines,
                i = e.ticks,
                o = a.valueOrDefault;

            if (e.display) {
              var r = t.ctx,
                  l = this.getIndexAngle(0),
                  s = o(i.fontSize, v.defaultFontSize),
                  u = o(i.fontStyle, v.defaultFontStyle),
                  d = o(i.fontFamily, v.defaultFontFamily),
                  c = a.fontString(s, u, d);
              a.each(t.ticks, function (e, a) {
                if (a > 0 || i.reverse) {
                  var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[a]);

                  if (n.display && 0 !== a && g(t, n, u, a), i.display) {
                    var d = o(i.fontColor, v.defaultFontColor);

                    if (r.font = c, r.save(), r.translate(t.xCenter, t.yCenter), r.rotate(l), i.showLabelBackdrop) {
                      var h = r.measureText(e).width;
                      r.fillStyle = i.backdropColor, r.fillRect(-h / 2 - i.backdropPaddingX, -u - s / 2 - i.backdropPaddingY, h + 2 * i.backdropPaddingX, s + 2 * i.backdropPaddingY);
                    }

                    r.textAlign = "center", r.textBaseline = "middle", r.fillStyle = d, r.fillText(e, 0, -u), r.restore();
                  }
                }
              }), (e.angleLines.display || e.pointLabels.display) && f(t);
            }
          }
        });
        t.scaleService.registerScaleType("radialLinear", b, m);
      };
    }, {
      25: 25,
      34: 34,
      45: 45
    }],
    57: [function (t, e, n) {
      "use strict";

      function i(t, e) {
        return t - e;
      }

      function a(t) {
        var e,
            n,
            i,
            a = {},
            o = [];

        for (e = 0, n = t.length; e < n; ++e) {
          a[i = t[e]] || (a[i] = !0, o.push(i));
        }

        return o;
      }

      function o(t, e, n, i) {
        if ("linear" === i || !t.length) return [{
          time: e,
          pos: 0
        }, {
          time: n,
          pos: 1
        }];
        var a,
            o,
            r,
            l,
            s,
            u = [],
            d = [e];

        for (a = 0, o = t.length; a < o; ++a) {
          (l = t[a]) > e && l < n && d.push(l);
        }

        for (d.push(n), a = 0, o = d.length; a < o; ++a) {
          s = d[a + 1], r = d[a - 1], l = d[a], void 0 !== r && void 0 !== s && Math.round((s + r) / 2) === l || u.push({
            time: l,
            pos: a / (o - 1)
          });
        }

        return u;
      }

      function r(t, e, n) {
        for (var i, a, o, r = 0, l = t.length - 1; r >= 0 && r <= l;) {
          if (i = r + l >> 1, a = t[i - 1] || null, o = t[i], !a) return {
            lo: null,
            hi: o
          };
          if (o[e] < n) r = i + 1;else {
            if (!(a[e] > n)) return {
              lo: a,
              hi: o
            };
            l = i - 1;
          }
        }

        return {
          lo: o,
          hi: null
        };
      }

      function l(t, e, n, i) {
        var a = r(t, e, n),
            o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0],
            l = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1],
            s = l[e] - o[e],
            u = s ? (n - o[e]) / s : 0,
            d = (l[i] - o[i]) * u;
        return o[i] + d;
      }

      function s(t, e) {
        var n = e.parser,
            i = e.parser || e.format;
        return "function" == typeof n ? n(t) : "string" == typeof t && "string" == typeof i ? m(t, i) : (t instanceof m || (t = m(t)), t.isValid() ? t : "function" == typeof i ? i(t) : t);
      }

      function u(t, e) {
        if (x.isNullOrUndef(t)) return null;
        var n = e.options.time,
            i = s(e.getRightValue(t), n);
        return i.isValid() ? (n.round && i.startOf(n.round), i.valueOf()) : null;
      }

      function d(t, e, n, i) {
        var a,
            o,
            r,
            l = e - t,
            s = w[n],
            u = s.size,
            d = s.steps;
        if (!d) return Math.ceil(l / ((i || 1) * u));

        for (a = 0, o = d.length; a < o && (r = d[a], !(Math.ceil(l / (u * r)) <= i)); ++a) {
          ;
        }

        return r;
      }

      function c(t, e, n, i) {
        var a,
            o,
            r,
            l = M.length;

        for (a = M.indexOf(t); a < l - 1; ++a) {
          if (o = w[M[a]], r = o.steps ? o.steps[o.steps.length - 1] : k, o.common && Math.ceil((n - e) / (r * o.size)) <= i) return M[a];
        }

        return M[l - 1];
      }

      function h(t, e, n, i) {
        var a,
            o,
            r = m.duration(m(i).diff(m(n)));

        for (a = M.length - 1; a >= M.indexOf(e); a--) {
          if (o = M[a], w[o].common && r.as(o) >= t.length) return o;
        }

        return M[e ? M.indexOf(e) : 0];
      }

      function f(t) {
        for (var e = M.indexOf(t) + 1, n = M.length; e < n; ++e) {
          if (w[M[e]].common) return M[e];
        }
      }

      function g(t, e, n, i) {
        var a,
            o = i.time,
            r = o.unit || c(o.minUnit, t, e, n),
            l = f(r),
            s = x.valueOrDefault(o.stepSize, o.unitStepSize),
            u = "week" === r && o.isoWeekday,
            h = i.ticks.major.enabled,
            g = w[r],
            p = m(t),
            v = m(e),
            b = [];

        for (s || (s = d(t, e, r, n)), u && (p = p.isoWeekday(u), v = v.isoWeekday(u)), p = p.startOf(u ? "day" : r), (v = v.startOf(u ? "day" : r)) < e && v.add(1, r), a = m(p), h && l && !u && !o.round && (a.startOf(l), a.add(~~((p - a) / (g.size * s)) * s, r)); a < v; a.add(s, r)) {
          b.push(+a);
        }

        return b.push(+a), b;
      }

      function p(t, e, n, i, a) {
        var o,
            r,
            s = 0,
            u = 0;
        return a.offset && e.length && (a.time.min || (o = e.length > 1 ? e[1] : i, r = e[0], s = (l(t, "time", o, "pos") - l(t, "time", r, "pos")) / 2), a.time.max || (o = e[e.length - 1], r = e.length > 1 ? e[e.length - 2] : n, u = (l(t, "time", o, "pos") - l(t, "time", r, "pos")) / 2)), {
          left: s,
          right: u
        };
      }

      function v(t, e) {
        var n,
            i,
            a,
            o,
            r = [];

        for (n = 0, i = t.length; n < i; ++n) {
          a = t[n], o = !!e && a === +m(a).startOf(e), r.push({
            value: a,
            major: o
          });
        }

        return r;
      }

      var m = t(1);
      m = "function" == typeof m ? m : window.moment;
      var b = t(25),
          x = t(45),
          y = Number.MIN_SAFE_INTEGER || -9007199254740991,
          k = Number.MAX_SAFE_INTEGER || 9007199254740991,
          w = {
        millisecond: {
          common: !0,
          size: 1,
          steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
        },
        second: {
          common: !0,
          size: 1e3,
          steps: [1, 2, 5, 10, 30]
        },
        minute: {
          common: !0,
          size: 6e4,
          steps: [1, 2, 5, 10, 30]
        },
        hour: {
          common: !0,
          size: 36e5,
          steps: [1, 2, 3, 6, 12]
        },
        day: {
          common: !0,
          size: 864e5,
          steps: [1, 2, 5]
        },
        week: {
          common: !1,
          size: 6048e5,
          steps: [1, 2, 3, 4]
        },
        month: {
          common: !0,
          size: 2628e6,
          steps: [1, 2, 3]
        },
        quarter: {
          common: !1,
          size: 7884e6,
          steps: [1, 2, 3, 4]
        },
        year: {
          common: !0,
          size: 3154e7
        }
      },
          M = Object.keys(w);

      e.exports = function (t) {
        var e = t.Scale.extend({
          initialize: function initialize() {
            if (!m) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
            this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this);
          },
          update: function update() {
            var e = this,
                n = e.options;
            return n.time && n.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(e, arguments);
          },
          getRightValue: function getRightValue(e) {
            return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e);
          },
          determineDataLimits: function determineDataLimits() {
            var t,
                e,
                n,
                o,
                r,
                l,
                s = this,
                d = s.chart,
                c = s.options.time,
                h = k,
                f = y,
                g = [],
                p = [],
                v = [];

            for (t = 0, n = d.data.labels.length; t < n; ++t) {
              v.push(u(d.data.labels[t], s));
            }

            for (t = 0, n = (d.data.datasets || []).length; t < n; ++t) {
              if (d.isDatasetVisible(t)) {
                if (r = d.data.datasets[t].data, x.isObject(r[0])) for (p[t] = [], e = 0, o = r.length; e < o; ++e) {
                  l = u(r[e], s), g.push(l), p[t][e] = l;
                } else g.push.apply(g, v), p[t] = v.slice(0);
              } else p[t] = [];
            }

            v.length && (v = a(v).sort(i), h = Math.min(h, v[0]), f = Math.max(f, v[v.length - 1])), g.length && (g = a(g).sort(i), h = Math.min(h, g[0]), f = Math.max(f, g[g.length - 1])), h = u(c.min, s) || h, f = u(c.max, s) || f, h = h === k ? +m().startOf("day") : h, f = f === y ? +m().endOf("day") + 1 : f, s.min = Math.min(h, f), s.max = Math.max(h + 1, f), s._horizontal = s.isHorizontal(), s._table = [], s._timestamps = {
              data: g,
              datasets: p,
              labels: v
            };
          },
          buildTicks: function buildTicks() {
            var t,
                e,
                n,
                i = this,
                a = i.min,
                r = i.max,
                l = i.options,
                s = l.time,
                d = [],
                c = [];

            switch (l.ticks.source) {
              case "data":
                d = i._timestamps.data;
                break;

              case "labels":
                d = i._timestamps.labels;
                break;

              case "auto":
              default:
                d = g(a, r, i.getLabelCapacity(a), l);
            }

            for ("ticks" === l.bounds && d.length && (a = d[0], r = d[d.length - 1]), a = u(s.min, i) || a, r = u(s.max, i) || r, t = 0, e = d.length; t < e; ++t) {
              (n = d[t]) >= a && n <= r && c.push(n);
            }

            return i.min = a, i.max = r, i._unit = s.unit || h(c, s.minUnit, i.min, i.max), i._majorUnit = f(i._unit), i._table = o(i._timestamps.data, a, r, l.distribution), i._offsets = p(i._table, c, a, r, l), v(c, i._majorUnit);
          },
          getLabelForIndex: function getLabelForIndex(t, e) {
            var n = this,
                i = n.chart.data,
                a = n.options.time,
                o = i.labels && t < i.labels.length ? i.labels[t] : "",
                r = i.datasets[e].data[t];
            return x.isObject(r) && (o = n.getRightValue(r)), a.tooltipFormat && (o = s(o, a).format(a.tooltipFormat)), o;
          },
          tickFormatFunction: function tickFormatFunction(t, e, n, i) {
            var a = this,
                o = a.options,
                r = t.valueOf(),
                l = o.time.displayFormats,
                s = l[a._unit],
                u = a._majorUnit,
                d = l[u],
                c = t.clone().startOf(u).valueOf(),
                h = o.ticks.major,
                f = h.enabled && u && d && r === c,
                g = t.format(i || (f ? d : s)),
                p = f ? h : o.ticks.minor,
                v = x.valueOrDefault(p.callback, p.userCallback);
            return v ? v(g, e, n) : g;
          },
          convertTicksToLabels: function convertTicksToLabels(t) {
            var e,
                n,
                i = [];

            for (e = 0, n = t.length; e < n; ++e) {
              i.push(this.tickFormatFunction(m(t[e].value), e, t));
            }

            return i;
          },
          getPixelForOffset: function getPixelForOffset(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                i = e._horizontal ? e.left : e.top,
                a = l(e._table, "time", t, "pos");
            return i + n * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right);
          },
          getPixelForValue: function getPixelForValue(t, e, n) {
            var i = this,
                a = null;
            if (void 0 !== e && void 0 !== n && (a = i._timestamps.datasets[n][e]), null === a && (a = u(t, i)), null !== a) return i.getPixelForOffset(a);
          },
          getPixelForTick: function getPixelForTick(t) {
            var e = this.getTicks();
            return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null;
          },
          getValueForPixel: function getValueForPixel(t) {
            var e = this,
                n = e._horizontal ? e.width : e.height,
                i = e._horizontal ? e.left : e.top,
                a = (n ? (t - i) / n : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right,
                o = l(e._table, "pos", a, "time");
            return m(o);
          },
          getLabelWidth: function getLabelWidth(t) {
            var e = this,
                n = e.options.ticks,
                i = e.ctx.measureText(t).width,
                a = x.toRadians(n.maxRotation),
                o = Math.cos(a),
                r = Math.sin(a);
            return i * o + x.valueOrDefault(n.fontSize, b.global.defaultFontSize) * r;
          },
          getLabelCapacity: function getLabelCapacity(t) {
            var e = this,
                n = e.options.time.displayFormats.millisecond,
                i = e.tickFormatFunction(m(t), 0, [], n),
                a = e.getLabelWidth(i),
                o = e.isHorizontal() ? e.width : e.height;
            return Math.floor(o / a);
          }
        });
        t.scaleService.registerScaleType("time", e, {
          position: "bottom",
          distribution: "linear",
          bounds: "data",
          time: {
            parser: !1,
            format: !1,
            unit: !1,
            round: !1,
            displayFormat: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "h:mm:ss a",
              minute: "h:mm a",
              hour: "hA",
              day: "MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY"
            }
          },
          ticks: {
            autoSkip: !1,
            source: "auto",
            major: {
              enabled: !1
            }
          }
        });
      };
    }, {
      1: 1,
      25: 25,
      45: 45
    }]
  }, {}, [7])(7);
});

/***/ }),

/***/ "./src/vendor/vue-chartjs.min.js":
/*!***************************************!*\
  !*** ./src/vendor/vue-chartjs.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e(__webpack_require__(/*! ./Chart.min.js */ "./src/vendor/Chart.min.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./Chart.min.js */ "./src/vendor/Chart.min.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("undefined" != typeof self ? self : this, function (t) {
  return function (t) {
    function e(a) {
      if (r[a]) return r[a].exports;
      var n = r[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return t[a].call(n.exports, n, n.exports, e), n.l = !0, n.exports;
    }

    var r = {};
    return e.m = t, e.c = r, e.d = function (t, r, a) {
      e.o(t, r) || Object.defineProperty(t, r, {
        configurable: !1,
        enumerable: !0,
        get: a
      });
    }, e.n = function (t) {
      var r = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return e.d(r, "a", r), r;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 0);
  }([function (t, e, r) {
    "use strict";

    function a(t, e) {
      if (e) {
        var r = this.$data._chart,
            a = t.datasets.map(function (t) {
          return t.label;
        }),
            n = e.datasets.map(function (t) {
          return t.label;
        }),
            s = JSON.stringify(n);
        JSON.stringify(a) === s && e.datasets.length === t.datasets.length ? (t.datasets.forEach(function (t, a) {
          var n = Object.keys(e.datasets[a]),
              s = Object.keys(t);
          n.filter(function (t) {
            return "_meta" !== t && -1 === s.indexOf(t);
          }).forEach(function (t) {
            delete r.data.datasets[a][t];
          });

          for (var i in t) {
            t.hasOwnProperty(i) && (r.data.datasets[a][i] = t[i]);
          }
        }), t.hasOwnProperty("labels") && (r.data.labels = t.labels, this.$emit("labels:update")), t.hasOwnProperty("xLabels") && (r.data.xLabels = t.xLabels, this.$emit("xlabels:update")), t.hasOwnProperty("yLabels") && (r.data.yLabels = t.yLabels, this.$emit("ylabels:update")), r.update(), this.$emit("chart:update")) : (r && (r.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render"));
      } else this.$data._chart && (this.$data._chart.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render");
    }

    function n(t, e) {
      return {
        render: function render(t) {
          return t("div", {
            style: this.styles,
            "class": this.cssClasses
          }, [t("canvas", {
            attrs: {
              id: this.chartId,
              width: this.width,
              height: this.height
            },
            ref: "canvas"
          })]);
        },
        props: {
          chartId: {
            "default": t,
            type: String
          },
          width: {
            "default": 400,
            type: Number
          },
          height: {
            "default": 400,
            type: Number
          },
          cssClasses: {
            type: String,
            "default": ""
          },
          styles: {
            type: Object
          },
          plugins: {
            type: Array,
            "default": function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            _chart: null,
            _plugins: this.plugins
          };
        },
        methods: {
          addPlugin: function addPlugin(t) {
            this.$data._plugins.push(t);
          },
          generateLegend: function generateLegend() {
            if (this.$data._chart) return this.$data._chart.generateLegend();
          },
          renderChart: function renderChart(t, r) {
            this.$data._chart && this.$data._chart.destroy(), this.$data._chart = new c.a(this.$refs.canvas.getContext("2d"), {
              type: e,
              data: t,
              options: r,
              plugins: this.$data._plugins
            });
          }
        },
        beforeDestroy: function beforeDestroy() {
          this.$data._chart && this.$data._chart.destroy();
        }
      };
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = {
      data: function data() {
        return {
          chartData: null
        };
      },
      watch: {
        chartData: a
      }
    },
        i = {
      props: {
        chartData: {
          type: Object,
          required: !0,
          "default": function _default() {}
        }
      },
      watch: {
        chartData: a
      }
    },
        o = {
      reactiveData: s,
      reactiveProp: i
    },
        u = r(1),
        c = r.n(u),
        h = n("bar-chart", "bar"),
        d = n("horizontalbar-chart", "horizontalBar"),
        l = n("doughnut-chart", "doughnut"),
        f = n("line-chart", "line"),
        p = n("pie-chart", "pie"),
        b = n("polar-chart", "polarArea"),
        y = n("radar-chart", "radar"),
        g = n("bubble-chart", "bubble"),
        m = n("scatter-chart", "scatter");
    r.d(e, "VueCharts", function () {
      return v;
    }), r.d(e, "Bar", function () {
      return h;
    }), r.d(e, "HorizontalBar", function () {
      return d;
    }), r.d(e, "Doughnut", function () {
      return l;
    }), r.d(e, "Line", function () {
      return f;
    }), r.d(e, "Pie", function () {
      return p;
    }), r.d(e, "PolarArea", function () {
      return b;
    }), r.d(e, "Radar", function () {
      return y;
    }), r.d(e, "Bubble", function () {
      return g;
    }), r.d(e, "Scatter", function () {
      return m;
    }), r.d(e, "mixins", function () {
      return o;
    }), r.d(e, "generateChart", function () {
      return n;
    });
    var v = {
      Bar: h,
      HorizontalBar: d,
      Doughnut: l,
      Line: f,
      Pie: p,
      PolarArea: b,
      Radar: y,
      Bubble: g,
      Scatter: m,
      mixins: o,
      generateChart: n,
      render: function render() {
        return console.error("[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start");
      }
    };
    e["default"] = v;
  }, function (e, r) {
    e.exports = t;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=panel.bundle.js.map