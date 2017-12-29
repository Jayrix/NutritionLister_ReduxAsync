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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _actions = __webpack_require__(1);

var _actions2 = _interopRequireDefault(_actions);

var _reducers = __webpack_require__(2);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requestNutrients"] = requestNutrients;
/* harmony export (immutable) */ __webpack_exports__["receiveNutrients"] = receiveNutrients;
const REQUEST_NUTRIENTS = 'REQUEST_NUTRIENTS';
/* harmony export (immutable) */ __webpack_exports__["REQUEST_NUTRIENTS"] = REQUEST_NUTRIENTS;

const RECEIEVE_NUTRIENTS = 'RECEIVE_NUTRIENTS';
/* harmony export (immutable) */ __webpack_exports__["RECEIEVE_NUTRIENTS"] = RECEIEVE_NUTRIENTS;


function requestNutrients(text) {
    return {
        type : REQUEST_NUTRIENTS,
        text
    }
}

function receiveNutrients(text, json ) {
    return {
        type : REQUEST_NUTRIENTS,
        text,
        name: json.foods[0].food_name,
        kcal: json.foods[0].nf_calories
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_actions__ = __webpack_require__(1);


function food(
    state = {
        isFetching: false,
        foods: []
    },
    action) {
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_actions__["REQUEST_NUTRIENTS"]:
            return Object.assign({}, state, {isFetching: true})
        case __WEBPACK_IMPORTED_MODULE_0__actions_actions__["RECEIEVE_NUTRIENTS"]:
            return Object.assign({}, state, {foods : [
                ...state.foods,
                {
                    [action.text] : {
                        foodType: action.name,
                        energy : action.kcal
                    }
                }
                ]})
        default:
            return state
    }
}

/***/ })
/******/ ]);