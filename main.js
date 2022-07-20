/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n:root,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: aliceblue; }\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 5fr; }\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  background-color: pink; }\n  header .title {\n    font-size: calc(2rem + 5px); }\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  grid-template-columns: 1fr 4fr; }\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  border-right: 1px solid black; }\n\n.content-side {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr; }\n  .content-side .todo-view {\n    display: grid; }\n  .content-side .note-view {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin; }\n    .content-side .note-view .add-note-button {\n      grid-area: 1 / 1 / 2 / 4;\n      background: transparent;\n      border: transparent;\n      width: fit-content;\n      height: fit-content;\n      align-self: flex-start;\n      justify-self: end; }\n    .content-side .note-view .note {\n      place-self: center;\n      background-color: antiquewhite;\n      height: 200px;\n      width: 200px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,0BAAI;AACJ,yBAAI;AACJ,2BAAI;AACJ,yBAAI;AAGJ;;EAEE,UAAU;EACV,SAAS;EACT,aAAa;EACb,2BAA2B,EAAA;;AAG7B;EACE,aAAa;EACb,2BAA2B,EAAA;;AAG7B;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB,EAAA;EAHxB;IAMI,2BAA2B,EAAA;;AAI/B;EACE,wBAAwB;EACxB,aAAa;EACb,8BAA8B,EAAA;;AAGhC;EACE,aAAa;EACb,2BAA2B;EAC3B,6BAA6B,EAAA;;AAG/B;EACE,aAAa;EACb,0BAA0B;EAC1B,2BAA2B,EAAA;EAH7B;IAMI,aAAa,EAAA;EANjB;IAUI,aAAa;IACb,yCAAyC;IACzC,qCAAqC;IACrC,UAAU,EAAA;IAbd;MAgBM,wBAAwB;MAExB,uBAAuB;MACvB,mBAAmB;MACnB,kBAAkB;MAClB,mBAAmB;MACnB,sBAAsB;MACtB,iBAAiB,EAAA;IAvBvB;MA2BM,kBAAkB;MAClB,8BAA8B;MAC9B,aAAa;MACb,YAAY,EAAA","sourcesContent":["@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n\n// We have to use @import or @use  for SASS\n:root,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: aliceblue;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 5fr;\n}\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  background-color: pink;\n\n  .title {\n    font-size: calc(2rem + 5px);\n  }\n}\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  border-right: 1px solid black;\n}\n\n.content-side {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr;\n\n  .todo-view {\n    display: grid;\n  }\n\n  .note-view {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin;\n\n    .add-note-button {\n      grid-area: 1 / 1 / 2 / 4;\n\n      background: transparent;\n      border: transparent;\n      width: fit-content;\n      height: fit-content;\n      align-self: flex-start;\n      justify-self: end;\n    }\n\n    .note {\n      place-self: center;\n      background-color: antiquewhite;\n      height: 200px;\n      width: 200px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/controller.js":
/*!***********************************!*\
  !*** ./src/modules/controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controllers_note_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/note-controller */ "./src/modules/controllers/note-controller.js");
/* harmony import */ var _controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/project-controller */ "./src/modules/controllers/project-controller.js");
/* harmony import */ var _controllers_todo_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/todo-controller */ "./src/modules/controllers/todo-controller.js");




const Controller = (givenModel) => {
  
  
  
  const model = givenModel;
  const noteController = (0,_controllers_note_controller__WEBPACK_IMPORTED_MODULE_0__["default"])(model);
  const todoController = (0,_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_2__["default"])(model);
  const projectController = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(model);

  return {
    get model() {
      return model;
    },
    get noteController() {
      return noteController;
    },
    get todoController() {
      return todoController;
    },
    get projectController() {
      return projectController;
    },
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);


/***/ }),

/***/ "./src/modules/controllers/note-controller.js":
/*!****************************************************!*\
  !*** ./src/modules/controllers/note-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NoteController = (givenModel) => {
  const model = givenModel;

  const getNoteName = (e) => e.target.parentElement.children[0].textContent;

  const update = () => {
    model.updateObserver('Note', model);
  };
  const addNote = (e) => {
    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value];
    model.addTool('Note', properties);
    update();
  };
  const editNote = (e) => {
    const properties = [e.target.form[0].value, e.target.form[1].value];
    const noteName = e.target.form[3].value;
    model.editTool('Note', noteName, properties);
    update();
  };
  const deleteNote = (e) => {
    const noteName = getNoteName(e);
    model.deleteTool('Note', noteName);
    update();
  };

  return {
    get model() {
      return model;
    },
    addNote,
    editNote,
    deleteNote,
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoteController);


/***/ }),

/***/ "./src/modules/controllers/project-controller.js":
/*!*******************************************************!*\
  !*** ./src/modules/controllers/project-controller.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ProjectController = (givenModel) => {
  const model = givenModel;
  const update = () => {
    model.updateObserver('Project', model);
  };
  const addProject = () => {
    const newProject = model.addProject();
    update();
    return newProject;
  };
  const editProjectName = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newName = e.target.form[0].value;
      const oldName = e.target.form[1].value;
      model.editProjectName(oldName, newName);
      update();
    }
  };
  const deleteProject = (e) => {
    model.deleteProject(e.target.parentNode.children[0].textContent);
    model.updateObservers(model);
  };
  const switchProject = (e) => {
    model.switchProject(e.target.textContent);
    model.updateObservers(model);
  };
  return {
    get model() {
      return model;
    },
    addProject,
    editProjectName,
    deleteProject,
    switchProject,
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectController);


/***/ }),

/***/ "./src/modules/controllers/todo-controller.js":
/*!****************************************************!*\
  !*** ./src/modules/controllers/todo-controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const TodoController = (givenModel) => {
  const model = givenModel;

  const getTodoName = (e) => e.target.parentElement.children[0].textContent;

  const update = () => {
    model.updateObserver('ToDo', model);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    model.addTool('ToDo', properties);
    update();
  };
  const editTodo = (e) => {
    const properties = [
      e.target.form[0].value,
      e.target.form[1].value,
      e.target.form[2].value,
      e.target.form[3].value,
    ];
    const todoName = e.target.form[5].value;
    model.editTool('ToDo', todoName, properties);
    update();
  };
  const deleteTodo = (e) => {
    const todoName = getTodoName(e);
    model.deleteTool('ToDo', todoName);
    update();
  };
  const expandTodo = () => {

  };
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
    expandTodo,
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoController);


/***/ }),

/***/ "./src/modules/model.js":
/*!******************************!*\
  !*** ./src/modules/model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/item-container */ "./src/modules/models/item-container.js");
/* harmony import */ var _models_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/project */ "./src/modules/models/project.js");
/* harmony import */ var _models_note__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/note */ "./src/modules/models/note.js");
/* harmony import */ var _models_todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/todo */ "./src/modules/models/todo.js");






function Model() {
  const toolTypes = ['Note', 'ToDo'];
  const projectList = (0,_models_item_container__WEBPACK_IMPORTED_MODULE_0__["default"])('Project');
  let curProjIndex = 0; // index of the currentProject
  let projCounter = 0;
  const observers = [];
  const addObservers = (views) => {
    views.forEach((observer) => {
      observers.push(observer);
    });
  };

  function updateObservers(model) {
    observers.forEach((observer) => {
      observer.updateView(model);
    });
  }

  const updateObserver = (givenObserverName, model) => {
    const index = observers.findIndex((observer) => observer.observerName === givenObserverName);
    observers[index].updateView(model);
  };
  // To Display the Current Project onto the Screen
  const getCurrentProject = () => projectList.itemList[curProjIndex];
  const getCurrentProjectName = () => getCurrentProject().name;
  // To Add a project to the tab (do not switch to it.)
  const addProject = (projectName = `Project ${projCounter}`) => {
    const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, toolTypes);
    projectList.addItem(newProject);
    projCounter += 1;
    return newProject;
  };

  // To Get a list of all x's and y's
  const getTypeNameList = (type) => {
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => projectList.getItemByName(projectName);

  const getProjectIndexByName = (projectName) => projectList.getItemIndexByName(projectName);

  // To delete a project
  const deleteProject = (projectName) => {
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
    if (curProjIndex === projIndex) {
      curProjIndex = 0;
    }
    if (projectList.length === 0) {
      projCounter = 0;
      curProjIndex = 0;
      addProject();
    }
  };

  // To change any project's name
  const editProjectName = (originalName, newProjectName) => {
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
  };

  // When clicked, switch Project.
  const switchProject = (name) => {
    curProjIndex = projectList.getItemIndexByName(name);
  };

  // To add a new Tool
  const addTool = (toolType, parameters) => {
    let newTool;
    if (toolType === 'Note') {
      newTool = (0,_models_note__WEBPACK_IMPORTED_MODULE_2__["default"])(parameters);
    } else if (toolType === 'ToDo') {
      newTool = (0,_models_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(parameters);
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  // To delete a tool
  const deleteTool = (toolType, name) => {
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  // To change the contents of a tool
  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
  };

  addProject(); // initializes the project
  addProject();
  return {
    get projects() {
      return projectList.itemList;
    },
    get names() {
      const projects = projectList.itemList;
      return projects.map((project) => project.name);
    },
    addProject,
    deleteProject,
    editProjectName,
    getCurrentProject,
    getCurrentProjectName,
    getTypeNameList,
    switchProject,
    addTool,
    deleteTool,
    editTool,
    updateObservers,
    addObservers,
    updateObserver,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);


/***/ }),

/***/ "./src/modules/models/item-container.js":
/*!**********************************************!*\
  !*** ./src/modules/models/item-container.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// You can contain ONE type of object (notes, to-dos, etc)
const ItemContainer = (kind) => {
  const itemType = kind;
  const itemList = [];

  const addItem = (itemToAdd) => {
    itemList.push(itemToAdd);
  };

  const removeItem = (removeIndex) => {
    itemList.splice(removeIndex, 1);
  };

  const getItemIndexByName = (name) => {
    const itemIndex = itemList.findIndex((item) => item.name === name);
    return itemIndex;
  };
  const getItemByName = (name) => {
    const itemIndex = getItemIndexByName(name);
    return itemList[itemIndex];
  };

  const getLength = () => itemList.length;

  const editItem = (editIndex, parameters) => {
    itemList[editIndex].parameters = parameters;
  };

  return {
    get itemList() {
      return itemList;
    },
    get itemType() {
      return itemType;
    },
    get length() {
      return itemList.length;
    },
    addItem,
    removeItem,
    getLength,
    getItemByName,
    getItemIndexByName,
    editItem,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ItemContainer);


/***/ }),

/***/ "./src/modules/models/note.js":
/*!************************************!*\
  !*** ./src/modules/models/note.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Model for a Note
const Note = ([givenName, contents]) => {
  let name = givenName;
  let textContent = contents;

  return {
    get textContent() {
      return textContent;
    },
    set textContent(newText) {
      textContent = newText;
    },
    get name() {
      return name;
    },
    set name(newNoteName) {
      name = newNoteName;
    },
    get parameters() {
      return [name, textContent];
    },
    set parameters([newName, newContents]) {
      name = newName;
      textContent = newContents;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Note);


/***/ }),

/***/ "./src/modules/models/project.js":
/*!***************************************!*\
  !*** ./src/modules/models/project.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _item_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item-container */ "./src/modules/models/item-container.js");
// Model for a Project -> Projects can hold notes and to-dos
// makes Separate containers for notes and to-dos : will have to do that multilpe times



const Project = (givenName, typeList) => {
  // A Map of Containers
  let name = givenName;
  const containerMap = new Map();
  typeList.forEach((type) => {
    containerMap.set(type, (0,_item_container__WEBPACK_IMPORTED_MODULE_0__["default"])(type));
  });

  const getTypeNameList = (type) => containerMap.get(type);

  const addItem = (type, item) => {
    const typeContainer = getTypeNameList(type);
    typeContainer.addItem(item);
  };

  const deleteItem = (type, itemName) => {
    const typeContainer = getTypeNameList(type);
    const deleteIndex = typeContainer.getItemIndexByName(itemName);
    typeContainer.removeItem(deleteIndex);
  };

  const editItem = (type, itemName, parameters) => {
    const typeContainer = getTypeNameList(type);
    const editIndex = typeContainer.getItemIndexByName(itemName);
    typeContainer.editItem(editIndex, parameters);
  };

  return {
    get name() {
      return name;
    },
    set name(newName) {
      name = newName;
    },
    addItem,
    deleteItem,
    editItem,
    getTypeNameList,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/models/todo.js":
/*!************************************!*\
  !*** ./src/modules/models/todo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Model for a To-Do

const ToDo = ([newName, newDescription, newDueDate, newPriority]) => {
  let name = newName; // Placeholder will be in HTML
  let description = newDescription; // Placeholder will be in HTML
  let dueDate = newDueDate; // will implement a time library later.
  let priority = newPriority; // maybe an ENUM that represents variables by priority

  return {
    get name() {
      return name;
    },
    set name(givenName) {
      name = givenName;
    },
    get description() {
      return description;
    },
    set description(givenDescription) {
      description = givenDescription;
    },
    get dueDate() {
      return dueDate;
    },
    set dueDate(givenDate) {
      dueDate = givenDate;
    },
    get priority() {
      return priority;
    },
    set priority(givenPriority) {
      priority = givenPriority;
    },
    get parameters() {
      return [name, description, dueDate, priority];
    },
    set parameters([givenName, givenDescription, givenDate, givenPriority]) {
      name = givenName;
      description = givenDescription;
      dueDate = givenDate;
      priority = givenPriority;
    },
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);


/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_projects_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/projects-view */ "./src/modules/views/projects-view.js");
/* harmony import */ var _views_todo_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/todo-view */ "./src/modules/views/todo-view.js");
/* harmony import */ var _views_notes_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/notes-view */ "./src/modules/views/notes-view.js");




const View = (givenController) => {
  const controller = givenController;
  const model = givenController.model

  const projView = (0,_views_projects_view__WEBPACK_IMPORTED_MODULE_0__["default"])(controller.projectController);
  const notesView = (0,_views_notes_view__WEBPACK_IMPORTED_MODULE_2__["default"])(controller.noteController);
  const todoView = (0,_views_todo_view__WEBPACK_IMPORTED_MODULE_1__["default"])(controller.todoController);
  model.addObservers([projView, todoView, notesView]);
  model.updateObservers(controller.model);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/modules/views/notes-view.js":
/*!*****************************************!*\
  !*** ./src/modules/views/notes-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function NotesView(noteController) {
  const controller = noteController;

  const observerName = 'Note';

  const getParentNote = (e) => e.target.parentElement;
  const getNoteContents = (e, index) => getParentNote(e).children[index].textContent;
  const addNoteView = () => {
    const noteWindow = document.createElement('div');
    noteWindow.className = 'add-note-window';
    const noteForm = document.createElement('form');

    const noteName = document.createElement('input');
    noteName.type = 'text';

    const noteContent = document.createElement('input');
    noteContent.type = 'text';

    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'Add';

    noteButton.addEventListener('click', controller.addNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteWindow.appendChild(noteForm);

    const container = document.querySelector('.note-view');
    container.appendChild(noteWindow);
  };

  const editNoteView = (e) => {
    const editNoteName = getNoteContents(e, 0);
    const editNoteContent = getNoteContents(e, 1);
    const noteWindow = document.createElement('div');
    noteWindow.className = 'edit-note-window';
    const noteForm = document.createElement('form');

    const noteName = document.createElement('input');
    noteName.type = 'text';
    noteName.value = editNoteName;

    const noteContent = document.createElement('input');
    noteContent.type = 'textarea';
    noteContent.value = editNoteContent;

    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'edit';
    noteButton.className = 'trueEditButton';

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editNoteName;

    noteButton.addEventListener('click', controller.editNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteForm.appendChild(hiddenOriginal);
    noteWindow.appendChild(noteForm);
    getParentNote(e).replaceChildren(noteForm);
  };

  const updateEventHandlers = () => {
    const editButtons = document.querySelectorAll('.edit-note-button');
    const deleteButtons = document.querySelectorAll('.delete-note-button');
    deleteButtons.forEach((button) => button.addEventListener('click', controller.deleteNote));
    editButtons.forEach((button) => button.addEventListener('click', editNoteView));
    const taskButton = document.querySelector('button.add-note-button');
    taskButton.addEventListener('click', addNoteView);
  };

  const buildView = (givenNoteList) => {
    const newNoteView = document.createElement('div');
    newNoteView.className = 'note-view';
    givenNoteList.forEach((note) => {
      const [noteName, noteContent] = note.parameters;
      const noteHolder = document.createElement('form');
      noteHolder.className = 'note';

      const noteNameHeader = document.createElement('h3');
      noteNameHeader.textContent = noteName;

      const noteNameContent = document.createElement('p');
      noteNameContent.textContent = noteContent;

      const editButton = document.createElement('input');
      editButton.type = 'button';
      editButton.className = 'edit-note-button';
      editButton.value = 'edit';

      const deleteButton = document.createElement('input');
      deleteButton.value = 'delete';
      deleteButton.type = 'button';
      deleteButton.className = 'delete-note-button';

      noteHolder.appendChild(noteNameHeader);
      noteHolder.appendChild(noteNameContent);
      noteHolder.appendChild(editButton);
      noteHolder.appendChild(deleteButton);
      newNoteView.appendChild(noteHolder);
    });

    const addNoteViewButton = document.createElement('button');
    addNoteViewButton.className = 'add-note-button';
    addNoteViewButton.textContent = '+';
    newNoteView.appendChild(addNoteViewButton);
    return newNoteView.cloneNode(true);
  };

  const updateView = (model) => {
    const noteContainer = model.getTypeNameList('Note');
    const noteList = noteContainer.itemList;
    const noteView = document.querySelectorAll('.note, .add-note-window');
    noteView.forEach((node) => {
      node.remove();
    });
    const newNoteView = buildView(noteList);
    const contentSide = document.querySelector('div.note-view');
    const contentView = document.querySelector('.content-side');
    contentView.replaceChild(newNoteView, contentSide);
    updateEventHandlers();
  };

  updateEventHandlers();

  return {
    get observerName() {
      return observerName;
    },
    get controller() {
      return controller;
    },
    buildView,
    updateView,
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotesView);


/***/ }),

/***/ "./src/modules/views/projects-view.js":
/*!********************************************!*\
  !*** ./src/modules/views/projects-view.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ProjectsView(projectController) {
  const controller = projectController;
  const observerName = 'Project';

  const getParentProject = (e) => e.target.parentElement;
  const getProjContents = (e, index) => getParentProject(e).children[index].textContent;

  const editProjectView = (e) => {
    e.preventDefault();
    const editProjectName = getProjContents(e, 0);
    const projectWindow = document.createElement('div');
    projectWindow.className = 'edit-proj-window';
    const projForm = document.createElement('form');

    const projName = document.createElement('input');
    projName.type = 'text';
    projName.value = editProjectName;

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editProjectName;

    projName.addEventListener('keydown', controller.editProjectName);
    projForm.appendChild(projName);
    projForm.appendChild(hiddenOriginal);
    projectWindow.appendChild(projForm);
    getParentProject(e).replaceChildren(projForm);
  };

  const addNewProjectView = () => {
    controller.addProject();
  };

  const updateEventHandlers = () => {
    const switchProjects = document.querySelectorAll('.project-heading');
    switchProjects.forEach((project) => {
      project.addEventListener('click', controller.switchProject);
      project.addEventListener('contextmenu', editProjectView);
    });
    const deleteProjects = document.querySelectorAll('.delete-project-button');
    deleteProjects.forEach((project) => {
      project.addEventListener('click', controller.deleteProject);
    });
  };

  const buildView = (projectList) => {
    const newProjectList = document.createElement('div');
    newProjectList.className = 'project-list';
    projectList.forEach((projectName) => {
      const newList = document.createElement('div');
      newList.className = 'project-title';
      const newName = document.createElement('h3');
      newName.className = 'project-heading';
      newName.textContent = projectName;
      const deleteProjectButton = document.createElement('p');
      deleteProjectButton.textContent = 'X';
      deleteProjectButton.className = 'delete-project-button';
      newList.appendChild(newName);
      newList.appendChild(deleteProjectButton);
      newProjectList.appendChild(newList);
    });
    return newProjectList.cloneNode(true);
  };

  const updateView = (model) => {
    const projectNames = model.names;
    const projView = document.querySelectorAll(
      '.add-project-button, .project-list, .project-title',
    );
    projView.forEach((node) => {
      node.remove();
    });
    const newProjView = buildView(projectNames);
    const sideBar = document.querySelector('.sidebar');
    sideBar.appendChild(newProjView);

    const addProjectButton = document.createElement('button');
    addProjectButton.textContent = 'Add Project';
    addProjectButton.className = 'add-project-button';
    addProjectButton.addEventListener('click', addNewProjectView);
    sideBar.appendChild(addProjectButton);
    updateEventHandlers();
    const currentNameHeader = document.querySelector('.show-name');
    currentNameHeader.textContent = model.getCurrentProjectName();
  };

  return {
    get observerName() {
      return observerName;
    },
    buildView,
    updateView,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsView);


/***/ }),

/***/ "./src/modules/views/todo-view.js":
/*!****************************************!*\
  !*** ./src/modules/views/todo-view.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function TodoView(todoController) {
  const controller = todoController;
  const observerName = 'ToDo';

  const getParentTodo = (e) => e.target.parentElement;
  const getTodoContents = (e, index) =>
    getParentTodo(e).children[index].textContent;

  const addTodoView = () => {
    const todoWindow = document.createElement('div');
    todoWindow.className = 'add-todo-window';
    const todoForm = document.createElement('form');

    const todoName = document.createElement('input');
    todoName.type = 'text';

    const todoContent = document.createElement('input');
    todoContent.type = 'text';

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';

    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'Add';

    todoButton.addEventListener('click', controller.addTodo);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoContent);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(todoPriority);
    todoForm.appendChild(todoButton);
    todoWindow.appendChild(todoForm);

    const container = document.querySelector('.todo-view');
    container.appendChild(todoWindow);
  };

  const editTodoView = (e) => {
    const editTodoName = getTodoContents(e, 0);
    const editTodoContent = getTodoContents(e, 1);
    const editTodoDueDate = getTodoContents(e, 2);
    const editTodoPriority = getTodoContents(e, 3);

    const todoWindow = document.createElement('div');
    todoWindow.className = 'edit-todo-window';
    const todoForm = document.createElement('form');

    const todoName = document.createElement('input');
    todoName.type = 'text';
    todoName.value = editTodoName;

    const todoContent = document.createElement('input');
    todoContent.type = 'text';
    todoContent.value = editTodoContent;

    const todoDueDate = document.createElement('input');
    todoDueDate.type = 'date';
    todoDueDate.value = editTodoDueDate;

    const todoPriority = document.createElement('input');
    todoPriority.type = 'number';
    todoPriority.value = editTodoPriority;

    const todoButton = document.createElement('input');
    todoButton.type = 'button';
    todoButton.value = 'edit';
    todoButton.className = 'trueToDoEditButton';

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editTodoName;

    todoButton.addEventListener('click', controller.editTodo);
    todoForm.appendChild(todoName);
    todoForm.appendChild(todoContent);
    todoForm.appendChild(todoDueDate);
    todoForm.appendChild(todoPriority);
    todoForm.appendChild(todoButton);
    todoForm.appendChild(hiddenOriginal);
    todoWindow.appendChild(todoForm);
    getParentTodo(e).replaceChildren(todoForm);
  };

  const holderGenerator = (parameters) => {
    const [todoName, todoDescription, todoDueDate, todoPriority] = parameters;
    let visibility;
    if (document.querySelector('.expand-todo-button') !== null) {
      visibility = 'visible';
    } else if (document.querySelector('.shrink-todo-button') !== null) {
      visibility = 'hidden';
    } else {
      visibility = 'hidden';
    }

    const tdHolder = document.createElement('form');
    tdHolder.className = 'todo';
    const tdNameHeader = document.createElement('h3');
    tdNameHeader.textContent = todoName;

    const tdDescription = document.createElement('p');
    tdDescription.textContent = todoDescription;
    tdDescription.className = 'todo-description';
    tdDescription.style.visibility = visibility;

    const tdDueDate = document.createElement('p');
    tdDueDate.textContent = todoDueDate;

    const tdPriority = document.createElement('p');
    tdPriority.textContent = todoPriority;

    const expandTodoButton = document.createElement('input');
    expandTodoButton.type = 'button';
    if (visibility === 'hidden') {
      expandTodoButton.className = 'expand-todo-button';
    } else {
      expandTodoButton.className = 'shrink-todo-button';
    }
    expandTodoButton.value = '...';

    const editTodoButton = document.createElement('input');
    editTodoButton.type = 'button';
    editTodoButton.className = 'edit-todo-button';
    editTodoButton.value = 'edit';

    const deleteTodoButton = document.createElement('input');
    deleteTodoButton.type = 'button';
    deleteTodoButton.className = 'delete-todo-button';
    deleteTodoButton.value = 'delete';

    tdHolder.appendChild(tdNameHeader);
    tdHolder.appendChild(tdDescription);
    tdHolder.appendChild(tdDueDate);
    tdHolder.appendChild(tdPriority);
    tdHolder.appendChild(expandTodoButton);
    tdHolder.appendChild(editTodoButton);
    tdHolder.appendChild(deleteTodoButton);
    return tdHolder.cloneNode(true);
  };

  const shrinkTodoView = (e) => {
    const todoName = getTodoContents(e, 0);
    const todoDescription = getTodoContents(e, 1);
    const todoDueDate = getTodoContents(e, 2);
    const todoPriority = getTodoContents(e, 3);

    const tdHolder = holderGenerator([
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
    ]);
    getParentTodo(e).replaceChildren(tdHolder);
    updateEventHandlers();
  };
  const expandTodoView = (e) => {
    const todoName = getTodoContents(e, 0);
    const todoDescription = getTodoContents(e, 1);
    const todoDueDate = getTodoContents(e, 2);
    const todoPriority = getTodoContents(e, 3);

    const tdHolder = holderGenerator([
      todoName,
      todoDescription,
      todoDueDate,
      todoPriority,
    ]);
    getParentTodo(e).replaceChildren(tdHolder);
    updateEventHandlers();
  };

  const updateEventHandlers = () => {
    const editButtons = document.querySelectorAll('.edit-todo-button');
    const deleteButtons = document.querySelectorAll('.delete-todo-button');
    const expandButtons = document.querySelectorAll('.expand-todo-button');
    const shrinkButtons = document.querySelectorAll('.shrink-todo-button');
    deleteButtons.forEach((button) =>
      button.addEventListener('click', controller.deleteTodo)
    );
    editButtons.forEach((button) =>
      button.addEventListener('click', editTodoView)
    );
    expandButtons.forEach((button) => {
      button.addEventListener('click', expandTodoView);
    });
    shrinkButtons.forEach((button) => {
      button.addEventListener('click', shrinkTodoView);
    });
    const todoButton = document.querySelector('button.add-todo-button');
    todoButton.addEventListener('click', addTodoView);
  };

  const buildView = (givenTodoList) => {
    const newTodoView = document.createElement('div');
    newTodoView.className = 'todo-view';
    givenTodoList.forEach((todo) => {
      const tdHolder = holderGenerator(todo.parameters);
      newTodoView.appendChild(tdHolder);
    });

    const addTodoViewButton = document.createElement('button');
    addTodoViewButton.className = 'add-todo-button';
    addTodoViewButton.textContent = '+';
    newTodoView.appendChild(addTodoViewButton);
    return newTodoView.cloneNode(true);
  };

  const updateView = (model) => {
    const todoContainer = model.getTypeNameList('ToDo');
    const todoList = todoContainer.itemList;
    const todoView = document.querySelectorAll('.todo, .add-todo-window');
    todoView.forEach((node) => {
      node.remove();
    });
    const newTodoView = buildView(todoList);
    const contentSide = document.querySelector('div.todo-view');
    const actualContentSide = document.querySelector('div.content-side');
    actualContentSide.replaceChild(newTodoView, contentSide);
    updateEventHandlers();
  };

  updateEventHandlers();

  return {
    get observerName() {
      return observerName;
    },
    buildView,
    updateView,
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoView);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/model */ "./src/modules/model.js");
/* harmony import */ var _modules_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/controller */ "./src/modules/controller.js");
/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/view */ "./src/modules/view.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");





const main = () => {
  const model = (0,_modules_model__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const controller = (0,_modules_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(model);
  (0,_modules_view__WEBPACK_IMPORTED_MODULE_2__["default"])(controller);
};

main();










})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMzSXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvRjVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDM094QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1U7QUFDWjtBQUNaOztBQUV0QjtBQUNBLGdCQUFnQiwwREFBSztBQUNyQixxQkFBcUIsK0RBQVU7QUFDL0IsRUFBRSx5REFBSTtBQUNOOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9ub3RlLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL2l0ZW0tY29udGFpbmVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvbm90ZS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9ub3Rlcy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy90b2RvLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkB1c2UgJ3N0eWxlcy9faGVhZGVyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fbm90ZXMuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL19zaWRlYmFyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fdG9kb3Muc2Nzcyc7XFxuOnJvb3QsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgfVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjsgfVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgNXB4KTsgfVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjsgfVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsgfVxcblxcbi5jb250ZW50LXNpZGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyOyB9XFxuICAuY29udGVudC1zaWRlIC50b2RvLXZpZXcge1xcbiAgICBkaXNwbGF5OiBncmlkOyB9XFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxdm1pbjsgfVxcbiAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLWJ1dHRvbiB7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDsgfVxcbiAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUge1xcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMjAwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBSTtBQUNKLHlCQUFJO0FBQ0osMkJBQUk7QUFDSix5QkFBSTtBQUdKOztFQUVFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBSHhCO0lBTUksMkJBQTJCLEVBQUE7O0FBSS9CO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUE7RUFIN0I7SUFNSSxhQUFhLEVBQUE7RUFOakI7SUFVSSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyxVQUFVLEVBQUE7SUFiZDtNQWdCTSx3QkFBd0I7TUFFeEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHNCQUFzQjtNQUN0QixpQkFBaUIsRUFBQTtJQXZCdkI7TUEyQk0sa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixhQUFhO01BQ2IsWUFBWSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgJ3N0eWxlcy9faGVhZGVyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fbm90ZXMuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL19zaWRlYmFyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fdG9kb3Muc2Nzcyc7XFxuXFxuLy8gV2UgaGF2ZSB0byB1c2UgQGltcG9ydCBvciBAdXNlICBmb3IgU0FTU1xcbjpyb290LFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcblxcbiAgLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyA1cHgpO1xcbiAgfVxcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5zaWRlYmFyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFxuICAudG9kby12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIC5ub3RlLXZpZXcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAxdm1pbjtcXG5cXG4gICAgLmFkZC1ub3RlLWJ1dHRvbiB7XFxuICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcblxcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgfVxcblxcbiAgICAubm90ZSB7XFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTm90ZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9ub3RlLWNvbnRyb2xsZXInO1xuaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyJztcbmltcG9ydCBUb2RvQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlcic7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBcbiAgXG4gIFxuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG4gIGNvbnN0IG5vdGVDb250cm9sbGVyID0gTm90ZUNvbnRyb2xsZXIobW9kZWwpO1xuICBjb25zdCB0b2RvQ29udHJvbGxlciA9IFRvZG9Db250cm9sbGVyKG1vZGVsKTtcbiAgY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSBQcm9qZWN0Q29udHJvbGxlcihtb2RlbCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBnZXQgbm90ZUNvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gbm90ZUNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBnZXQgdG9kb0NvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gdG9kb0NvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBnZXQgcHJvamVjdENvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdENvbnRyb2xsZXI7XG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIiwiY29uc3QgTm90ZUNvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG5cbiAgY29uc3QgZ2V0Tm90ZU5hbWUgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ05vdGUnLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZE5vdGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW2UudGFyZ2V0LmZvcm1bMF0udmFsdWUsIGUudGFyZ2V0LmZvcm1bMV0udmFsdWVdO1xuICAgIG1vZGVsLmFkZFRvb2woJ05vdGUnLCBwcm9wZXJ0aWVzKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgZWRpdE5vdGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbZS50YXJnZXQuZm9ybVswXS52YWx1ZSwgZS50YXJnZXQuZm9ybVsxXS52YWx1ZV07XG4gICAgY29uc3Qgbm90ZU5hbWUgPSBlLnRhcmdldC5mb3JtWzNdLnZhbHVlO1xuICAgIG1vZGVsLmVkaXRUb29sKCdOb3RlJywgbm90ZU5hbWUsIHByb3BlcnRpZXMpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkZWxldGVOb3RlID0gKGUpID0+IHtcbiAgICBjb25zdCBub3RlTmFtZSA9IGdldE5vdGVOYW1lKGUpO1xuICAgIG1vZGVsLmRlbGV0ZVRvb2woJ05vdGUnLCBub3RlTmFtZSk7XG4gICAgdXBkYXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBhZGROb3RlLFxuICAgIGVkaXROb3RlLFxuICAgIGRlbGV0ZU5vdGUsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgTm90ZUNvbnRyb2xsZXI7XG4iLCJjb25zdCBQcm9qZWN0Q29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKCdQcm9qZWN0JywgbW9kZWwpO1xuICB9O1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBtb2RlbC5hZGRQcm9qZWN0KCk7XG4gICAgdXBkYXRlKCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gIH07XG4gIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdOYW1lID0gZS50YXJnZXQuZm9ybVswXS52YWx1ZTtcbiAgICAgIGNvbnN0IG9sZE5hbWUgPSBlLnRhcmdldC5mb3JtWzFdLnZhbHVlO1xuICAgICAgbW9kZWwuZWRpdFByb2plY3ROYW1lKG9sZE5hbWUsIG5ld05hbWUpO1xuICAgICAgdXBkYXRlKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgICBtb2RlbC5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQpO1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVycyhtb2RlbCk7XG4gIH07XG4gIGNvbnN0IHN3aXRjaFByb2plY3QgPSAoZSkgPT4ge1xuICAgIG1vZGVsLnN3aXRjaFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVycyhtb2RlbCk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBzd2l0Y2hQcm9qZWN0LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250cm9sbGVyO1xuIiwiY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG5cbiAgY29uc3QgZ2V0VG9kb05hbWUgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS50ZXh0Q29udGVudDtcblxuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ1RvRG8nLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZFRvZG8gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICAgZS50YXJnZXQuZm9ybVswXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bMV0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzJdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVszXS52YWx1ZSxcbiAgICBdO1xuICAgIG1vZGVsLmFkZFRvb2woJ1RvRG8nLCBwcm9wZXJ0aWVzKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgZWRpdFRvZG8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAgICBlLnRhcmdldC5mb3JtWzBdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVsxXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bMl0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzNdLnZhbHVlLFxuICAgIF07XG4gICAgY29uc3QgdG9kb05hbWUgPSBlLnRhcmdldC5mb3JtWzVdLnZhbHVlO1xuICAgIG1vZGVsLmVkaXRUb29sKCdUb0RvJywgdG9kb05hbWUsIHByb3BlcnRpZXMpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBkZWxldGVUb2RvID0gKGUpID0+IHtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGdldFRvZG9OYW1lKGUpO1xuICAgIG1vZGVsLmRlbGV0ZVRvb2woJ1RvRG8nLCB0b2RvTmFtZSk7XG4gICAgdXBkYXRlKCk7XG4gIH07XG4gIGNvbnN0IGV4cGFuZFRvZG8gPSAoKSA9PiB7XG5cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBhZGRUb2RvLFxuICAgIGVkaXRUb2RvLFxuICAgIGRlbGV0ZVRvZG8sXG4gICAgZXhwYW5kVG9kbyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlcjtcbiIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4vbW9kZWxzL2l0ZW0tY29udGFpbmVyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9tb2RlbHMvbm90ZSc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL21vZGVscy90b2RvJztcblxuXG5mdW5jdGlvbiBNb2RlbCgpIHtcbiAgY29uc3QgdG9vbFR5cGVzID0gWydOb3RlJywgJ1RvRG8nXTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBJdGVtQ29udGFpbmVyKCdQcm9qZWN0Jyk7XG4gIGxldCBjdXJQcm9qSW5kZXggPSAwOyAvLyBpbmRleCBvZiB0aGUgY3VycmVudFByb2plY3RcbiAgbGV0IHByb2pDb3VudGVyID0gMDtcbiAgY29uc3Qgb2JzZXJ2ZXJzID0gW107XG4gIGNvbnN0IGFkZE9ic2VydmVycyA9ICh2aWV3cykgPT4ge1xuICAgIHZpZXdzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcik7XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdXBkYXRlT2JzZXJ2ZXJzKG1vZGVsKSB7XG4gICAgb2JzZXJ2ZXJzLmZvckVhY2goKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlci51cGRhdGVWaWV3KG1vZGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9ic2VydmVyID0gKGdpdmVuT2JzZXJ2ZXJOYW1lLCBtb2RlbCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gb2JzZXJ2ZXJzLmZpbmRJbmRleCgob2JzZXJ2ZXIpID0+IG9ic2VydmVyLm9ic2VydmVyTmFtZSA9PT0gZ2l2ZW5PYnNlcnZlck5hbWUpO1xuICAgIG9ic2VydmVyc1tpbmRleF0udXBkYXRlVmlldyhtb2RlbCk7XG4gIH07XG4gIC8vIFRvIERpc3BsYXkgdGhlIEN1cnJlbnQgUHJvamVjdCBvbnRvIHRoZSBTY3JlZW5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBwcm9qZWN0TGlzdC5pdGVtTGlzdFtjdXJQcm9qSW5kZXhdO1xuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdE5hbWUgPSAoKSA9PiBnZXRDdXJyZW50UHJvamVjdCgpLm5hbWU7XG4gIC8vIFRvIEFkZCBhIHByb2plY3QgdG8gdGhlIHRhYiAoZG8gbm90IHN3aXRjaCB0byBpdC4pXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUgPSBgUHJvamVjdCAke3Byb2pDb3VudGVyfWApID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChwcm9qZWN0TmFtZSwgdG9vbFR5cGVzKTtcbiAgICBwcm9qZWN0TGlzdC5hZGRJdGVtKG5ld1Byb2plY3QpO1xuICAgIHByb2pDb3VudGVyICs9IDE7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG4gIH07XG5cbiAgLy8gVG8gR2V0IGEgbGlzdCBvZiBhbGwgeCdzIGFuZCB5J3NcbiAgY29uc3QgZ2V0VHlwZU5hbWVMaXN0ID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBjdXJyID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICByZXR1cm4gY3Vyci5nZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdExpc3QuZ2V0SXRlbUJ5TmFtZShwcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4QnlOYW1lID0gKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gIC8vIFRvIGRlbGV0ZSBhIHByb2plY3RcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pJbmRleCA9IGdldFByb2plY3RJbmRleEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3QucmVtb3ZlSXRlbShwcm9qSW5kZXgpO1xuICAgIGlmIChjdXJQcm9qSW5kZXggPT09IHByb2pJbmRleCkge1xuICAgICAgY3VyUHJvakluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcHJvakNvdW50ZXIgPSAwO1xuICAgICAgY3VyUHJvakluZGV4ID0gMDtcbiAgICAgIGFkZFByb2plY3QoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gVG8gY2hhbmdlIGFueSBwcm9qZWN0J3MgbmFtZVxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAob3JpZ2luYWxOYW1lLCBuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qID0gZ2V0UHJvamVjdEJ5TmFtZShvcmlnaW5hbE5hbWUpO1xuICAgIGVkaXRQcm9qLm5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgfTtcblxuICAvLyBXaGVuIGNsaWNrZWQsIHN3aXRjaCBQcm9qZWN0LlxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjdXJQcm9qSW5kZXggPSBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gYWRkIGEgbmV3IFRvb2xcbiAgY29uc3QgYWRkVG9vbCA9ICh0b29sVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGxldCBuZXdUb29sO1xuICAgIGlmICh0b29sVHlwZSA9PT0gJ05vdGUnKSB7XG4gICAgICBuZXdUb29sID0gTm90ZShwYXJhbWV0ZXJzKTtcbiAgICB9IGVsc2UgaWYgKHRvb2xUeXBlID09PSAnVG9EbycpIHtcbiAgICAgIG5ld1Rvb2wgPSBUb0RvKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBjb25zdCBjdXJQcm9qZWN0ID0gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcbiAgICBjdXJQcm9qZWN0LmFkZEl0ZW0odG9vbFR5cGUsIG5ld1Rvb2wpO1xuICB9O1xuXG4gIC8vIFRvIGRlbGV0ZSBhIHRvb2xcbiAgY29uc3QgZGVsZXRlVG9vbCA9ICh0b29sVHlwZSwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGN1clByb2ogPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGN1clByb2ouZGVsZXRlSXRlbSh0b29sVHlwZSwgbmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gY2hhbmdlIHRoZSBjb250ZW50cyBvZiBhIHRvb2xcbiAgY29uc3QgZWRpdFRvb2wgPSAodG9vbFR5cGUsIG5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmVkaXRJdGVtKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKTtcbiAgfTtcblxuICBhZGRQcm9qZWN0KCk7IC8vIGluaXRpYWxpemVzIHRoZSBwcm9qZWN0XG4gIGFkZFByb2plY3QoKTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdExpc3QuaXRlbUxpc3Q7XG4gICAgfSxcbiAgICBnZXQgbmFtZXMoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0Lml0ZW1MaXN0O1xuICAgICAgcmV0dXJuIHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lKTtcbiAgICB9LFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0Q3VycmVudFByb2plY3ROYW1lLFxuICAgIGdldFR5cGVOYW1lTGlzdCxcbiAgICBzd2l0Y2hQcm9qZWN0LFxuICAgIGFkZFRvb2wsXG4gICAgZGVsZXRlVG9vbCxcbiAgICBlZGl0VG9vbCxcbiAgICB1cGRhdGVPYnNlcnZlcnMsXG4gICAgYWRkT2JzZXJ2ZXJzLFxuICAgIHVwZGF0ZU9ic2VydmVyLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsIi8vIFlvdSBjYW4gY29udGFpbiBPTkUgdHlwZSBvZiBvYmplY3QgKG5vdGVzLCB0by1kb3MsIGV0YylcbmNvbnN0IEl0ZW1Db250YWluZXIgPSAoa2luZCkgPT4ge1xuICBjb25zdCBpdGVtVHlwZSA9IGtpbmQ7XG4gIGNvbnN0IGl0ZW1MaXN0ID0gW107XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtVG9BZGQpID0+IHtcbiAgICBpdGVtTGlzdC5wdXNoKGl0ZW1Ub0FkZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChyZW1vdmVJbmRleCkgPT4ge1xuICAgIGl0ZW1MaXN0LnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbUluZGV4QnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBpdGVtTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlbUJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4QnlOYW1lKG5hbWUpO1xuICAgIHJldHVybiBpdGVtTGlzdFtpdGVtSW5kZXhdO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGl0ZW1MaXN0Lmxlbmd0aDtcblxuICBjb25zdCBlZGl0SXRlbSA9IChlZGl0SW5kZXgsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBpdGVtTGlzdFtlZGl0SW5kZXhdLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGl0ZW1MaXN0KCkge1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IGl0ZW1UeXBlKCkge1xuICAgICAgcmV0dXJuIGl0ZW1UeXBlO1xuICAgIH0sXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgIHJldHVybiBpdGVtTGlzdC5sZW5ndGg7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIHJlbW92ZUl0ZW0sXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldEl0ZW1CeU5hbWUsXG4gICAgZ2V0SXRlbUluZGV4QnlOYW1lLFxuICAgIGVkaXRJdGVtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbUNvbnRhaW5lcjtcbiIsIi8vIE1vZGVsIGZvciBhIE5vdGVcbmNvbnN0IE5vdGUgPSAoW2dpdmVuTmFtZSwgY29udGVudHNdKSA9PiB7XG4gIGxldCBuYW1lID0gZ2l2ZW5OYW1lO1xuICBsZXQgdGV4dENvbnRlbnQgPSBjb250ZW50cztcblxuICByZXR1cm4ge1xuICAgIGdldCB0ZXh0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0ZXh0Q29udGVudDtcbiAgICB9LFxuICAgIHNldCB0ZXh0Q29udGVudChuZXdUZXh0KSB7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld1RleHQ7XG4gICAgfSxcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3Tm90ZU5hbWUpIHtcbiAgICAgIG5hbWUgPSBuZXdOb3RlTmFtZTtcbiAgICB9LFxuICAgIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgICAgcmV0dXJuIFtuYW1lLCB0ZXh0Q29udGVudF07XG4gICAgfSxcbiAgICBzZXQgcGFyYW1ldGVycyhbbmV3TmFtZSwgbmV3Q29udGVudHNdKSB7XG4gICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICAgIHRleHRDb250ZW50ID0gbmV3Q29udGVudHM7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG4iLCIvLyBNb2RlbCBmb3IgYSBQcm9qZWN0IC0+IFByb2plY3RzIGNhbiBob2xkIG5vdGVzIGFuZCB0by1kb3Ncbi8vIG1ha2VzIFNlcGFyYXRlIGNvbnRhaW5lcnMgZm9yIG5vdGVzIGFuZCB0by1kb3MgOiB3aWxsIGhhdmUgdG8gZG8gdGhhdCBtdWx0aWxwZSB0aW1lc1xuXG5pbXBvcnQgSXRlbUNvbnRhaW5lciBmcm9tICcuL2l0ZW0tY29udGFpbmVyJztcblxuY29uc3QgUHJvamVjdCA9IChnaXZlbk5hbWUsIHR5cGVMaXN0KSA9PiB7XG4gIC8vIEEgTWFwIG9mIENvbnRhaW5lcnNcbiAgbGV0IG5hbWUgPSBnaXZlbk5hbWU7XG4gIGNvbnN0IGNvbnRhaW5lck1hcCA9IG5ldyBNYXAoKTtcbiAgdHlwZUxpc3QuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnRhaW5lck1hcC5zZXQodHlwZSwgSXRlbUNvbnRhaW5lcih0eXBlKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiBjb250YWluZXJNYXAuZ2V0KHR5cGUpO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAodHlwZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgdHlwZUNvbnRhaW5lci5hZGRJdGVtKGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodHlwZSwgaXRlbU5hbWUpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdHlwZUNvbnRhaW5lci5nZXRJdGVtSW5kZXhCeU5hbWUoaXRlbU5hbWUpO1xuICAgIHR5cGVDb250YWluZXIucmVtb3ZlSXRlbShkZWxldGVJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAodHlwZSwgaXRlbU5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGVkaXRJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLmVkaXRJdGVtKGVkaXRJbmRleCwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgZWRpdEl0ZW0sXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8vIE1vZGVsIGZvciBhIFRvLURvXG5cbmNvbnN0IFRvRG8gPSAoW25ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eV0pID0+IHtcbiAgbGV0IG5hbWUgPSBuZXdOYW1lOyAvLyBQbGFjZWhvbGRlciB3aWxsIGJlIGluIEhUTUxcbiAgbGV0IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247IC8vIFBsYWNlaG9sZGVyIHdpbGwgYmUgaW4gSFRNTFxuICBsZXQgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IC8vIHdpbGwgaW1wbGVtZW50IGEgdGltZSBsaWJyYXJ5IGxhdGVyLlxuICBsZXQgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgLy8gbWF5YmUgYW4gRU5VTSB0aGF0IHJlcHJlc2VudHMgdmFyaWFibGVzIGJ5IHByaW9yaXR5XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUoZ2l2ZW5OYW1lKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKGdpdmVuRGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gZ2l2ZW5EZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShnaXZlbkRhdGUpIHtcbiAgICAgIGR1ZURhdGUgPSBnaXZlbkRhdGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkoZ2l2ZW5Qcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHkgPSBnaXZlblByaW9yaXR5O1xuICAgIH0sXG4gICAgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgICByZXR1cm4gW25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eV07XG4gICAgfSxcbiAgICBzZXQgcGFyYW1ldGVycyhbZ2l2ZW5OYW1lLCBnaXZlbkRlc2NyaXB0aW9uLCBnaXZlbkRhdGUsIGdpdmVuUHJpb3JpdHldKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgICAgZGVzY3JpcHRpb24gPSBnaXZlbkRlc2NyaXB0aW9uO1xuICAgICAgZHVlRGF0ZSA9IGdpdmVuRGF0ZTtcbiAgICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiIsImltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSAnLi92aWV3cy9wcm9qZWN0cy12aWV3JztcbmltcG9ydCBUb2RvVmlldyBmcm9tICcuL3ZpZXdzL3RvZG8tdmlldyc7XG5pbXBvcnQgTm90ZXNWaWV3IGZyb20gJy4vdmlld3Mvbm90ZXMtdmlldyc7XG5cbmNvbnN0IFZpZXcgPSAoZ2l2ZW5Db250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBnaXZlbkNvbnRyb2xsZXI7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Db250cm9sbGVyLm1vZGVsXG5cbiAgY29uc3QgcHJvalZpZXcgPSBQcm9qZWN0c1ZpZXcoY29udHJvbGxlci5wcm9qZWN0Q29udHJvbGxlcik7XG4gIGNvbnN0IG5vdGVzVmlldyA9IE5vdGVzVmlldyhjb250cm9sbGVyLm5vdGVDb250cm9sbGVyKTtcbiAgY29uc3QgdG9kb1ZpZXcgPSBUb2RvVmlldyhjb250cm9sbGVyLnRvZG9Db250cm9sbGVyKTtcbiAgbW9kZWwuYWRkT2JzZXJ2ZXJzKFtwcm9qVmlldywgdG9kb1ZpZXcsIG5vdGVzVmlld10pO1xuICBtb2RlbC51cGRhdGVPYnNlcnZlcnMoY29udHJvbGxlci5tb2RlbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiZnVuY3Rpb24gTm90ZXNWaWV3KG5vdGVDb250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBub3RlQ29udHJvbGxlcjtcblxuICBjb25zdCBvYnNlcnZlck5hbWUgPSAnTm90ZSc7XG5cbiAgY29uc3QgZ2V0UGFyZW50Tm90ZSA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBnZXROb3RlQ29udGVudHMgPSAoZSwgaW5kZXgpID0+IGdldFBhcmVudE5vdGUoZSkuY2hpbGRyZW5baW5kZXhdLnRleHRDb250ZW50O1xuICBjb25zdCBhZGROb3RlVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCBub3RlV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZVdpbmRvdy5jbGFzc05hbWUgPSAnYWRkLW5vdGUtd2luZG93JztcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IG5vdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlTmFtZS50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVDb250ZW50LnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBub3RlQnV0dG9uLnZhbHVlID0gJ0FkZCc7XG5cbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5hZGROb3RlKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlTmFtZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuICAgIG5vdGVXaW5kb3cuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtdmlldycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlV2luZG93KTtcbiAgfTtcblxuICBjb25zdCBlZGl0Tm90ZVZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGVkaXROb3RlTmFtZSA9IGdldE5vdGVDb250ZW50cyhlLCAwKTtcbiAgICBjb25zdCBlZGl0Tm90ZUNvbnRlbnQgPSBnZXROb3RlQ29udGVudHMoZSwgMSk7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVXaW5kb3cuY2xhc3NOYW1lID0gJ2VkaXQtbm90ZS13aW5kb3cnO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbm90ZU5hbWUudmFsdWUgPSBlZGl0Tm90ZU5hbWU7XG5cbiAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZUNvbnRlbnQudHlwZSA9ICd0ZXh0YXJlYSc7XG4gICAgbm90ZUNvbnRlbnQudmFsdWUgPSBlZGl0Tm90ZUNvbnRlbnQ7XG5cbiAgICBjb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBub3RlQnV0dG9uLnZhbHVlID0gJ2VkaXQnO1xuICAgIG5vdGVCdXR0b24uY2xhc3NOYW1lID0gJ3RydWVFZGl0QnV0dG9uJztcblxuICAgIGNvbnN0IGhpZGRlbk9yaWdpbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWRkZW5PcmlnaW5hbC50eXBlID0gJ2hpZGRlbic7XG4gICAgaGlkZGVuT3JpZ2luYWwudmFsdWUgPSBlZGl0Tm90ZU5hbWU7XG5cbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5lZGl0Tm90ZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZU5hbWUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVDb250ZW50KTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQnV0dG9uKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChoaWRkZW5PcmlnaW5hbCk7XG4gICAgbm90ZVdpbmRvdy5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG4gICAgZ2V0UGFyZW50Tm90ZShlKS5yZXBsYWNlQ2hpbGRyZW4obm90ZUZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1ub3RlLWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLW5vdGUtYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZGVsZXRlTm90ZSkpO1xuICAgIGVkaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdE5vdGVWaWV3KSk7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGQtbm90ZS1idXR0b24nKTtcbiAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTm90ZVZpZXcpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChnaXZlbk5vdGVMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZVZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdOb3RlVmlldy5jbGFzc05hbWUgPSAnbm90ZS12aWV3JztcbiAgICBnaXZlbk5vdGVMaXN0LmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGNvbnN0IFtub3RlTmFtZSwgbm90ZUNvbnRlbnRdID0gbm90ZS5wYXJhbWV0ZXJzO1xuICAgICAgY29uc3Qgbm90ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIG5vdGVIb2xkZXIuY2xhc3NOYW1lID0gJ25vdGUnO1xuXG4gICAgICBjb25zdCBub3RlTmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBub3RlTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5vdGVOYW1lO1xuXG4gICAgICBjb25zdCBub3RlTmFtZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBub3RlTmFtZUNvbnRlbnQudGV4dENvbnRlbnQgPSBub3RlQ29udGVudDtcblxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBlZGl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtbm90ZS1idXR0b24nO1xuICAgICAgZWRpdEJ1dHRvbi52YWx1ZSA9ICdlZGl0JztcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi52YWx1ZSA9ICdkZWxldGUnO1xuICAgICAgZGVsZXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLW5vdGUtYnV0dG9uJztcblxuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUhlYWRlcik7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKG5vdGVOYW1lQ29udGVudCk7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgbmV3Tm90ZVZpZXcuYXBwZW5kQ2hpbGQobm90ZUhvbGRlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGROb3RlVmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5vdGVWaWV3QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtbm90ZS1idXR0b24nO1xuICAgIGFkZE5vdGVWaWV3QnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIG5ld05vdGVWaWV3LmFwcGVuZENoaWxkKGFkZE5vdGVWaWV3QnV0dG9uKTtcbiAgICByZXR1cm4gbmV3Tm90ZVZpZXcuY2xvbmVOb2RlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAobW9kZWwpID0+IHtcbiAgICBjb25zdCBub3RlQ29udGFpbmVyID0gbW9kZWwuZ2V0VHlwZU5hbWVMaXN0KCdOb3RlJyk7XG4gICAgY29uc3Qgbm90ZUxpc3QgPSBub3RlQ29udGFpbmVyLml0ZW1MaXN0O1xuICAgIGNvbnN0IG5vdGVWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vdGUsIC5hZGQtbm90ZS13aW5kb3cnKTtcbiAgICBub3RlVmlldy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld05vdGVWaWV3ID0gYnVpbGRWaWV3KG5vdGVMaXN0KTtcbiAgICBjb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5ub3RlLXZpZXcnKTtcbiAgICBjb25zdCBjb250ZW50VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50LXNpZGUnKTtcbiAgICBjb250ZW50Vmlldy5yZXBsYWNlQ2hpbGQobmV3Tm90ZVZpZXcsIGNvbnRlbnRTaWRlKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG5cbiAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG9ic2VydmVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck5hbWU7XG4gICAgfSxcbiAgICBnZXQgY29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBOb3Rlc1ZpZXc7XG4iLCJmdW5jdGlvbiBQcm9qZWN0c1ZpZXcocHJvamVjdENvbnRyb2xsZXIpIHtcbiAgY29uc3QgY29udHJvbGxlciA9IHByb2plY3RDb250cm9sbGVyO1xuICBjb25zdCBvYnNlcnZlck5hbWUgPSAnUHJvamVjdCc7XG5cbiAgY29uc3QgZ2V0UGFyZW50UHJvamVjdCA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBnZXRQcm9qQ29udGVudHMgPSAoZSwgaW5kZXgpID0+IGdldFBhcmVudFByb2plY3QoZSkuY2hpbGRyZW5baW5kZXhdLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGVkaXRQcm9qZWN0VmlldyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IGdldFByb2pDb250ZW50cyhlLCAwKTtcbiAgICBjb25zdCBwcm9qZWN0V2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFdpbmRvdy5jbGFzc05hbWUgPSAnZWRpdC1wcm9qLXdpbmRvdyc7XG4gICAgY29uc3QgcHJvakZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBjb25zdCBwcm9qTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvak5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qTmFtZS52YWx1ZSA9IGVkaXRQcm9qZWN0TmFtZTtcblxuICAgIGNvbnN0IGhpZGRlbk9yaWdpbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWRkZW5PcmlnaW5hbC50eXBlID0gJ2hpZGRlbic7XG4gICAgaGlkZGVuT3JpZ2luYWwudmFsdWUgPSBlZGl0UHJvamVjdE5hbWU7XG5cbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY29udHJvbGxlci5lZGl0UHJvamVjdE5hbWUpO1xuICAgIHByb2pGb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcbiAgICBwcm9qRm9ybS5hcHBlbmRDaGlsZChoaWRkZW5PcmlnaW5hbCk7XG4gICAgcHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChwcm9qRm9ybSk7XG4gICAgZ2V0UGFyZW50UHJvamVjdChlKS5yZXBsYWNlQ2hpbGRyZW4ocHJvakZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3RWaWV3ID0gKCkgPT4ge1xuICAgIGNvbnRyb2xsZXIuYWRkUHJvamVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3dpdGNoUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1oZWFkaW5nJyk7XG4gICAgc3dpdGNoUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuc3dpdGNoUHJvamVjdCk7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZWRpdFByb2plY3RWaWV3KTtcbiAgICB9KTtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtcHJvamVjdC1idXR0b24nKTtcbiAgICBkZWxldGVQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5kZWxldGVQcm9qZWN0KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBidWlsZFZpZXcgPSAocHJvamVjdExpc3QpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3RMaXN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LWxpc3QnO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3ROYW1lKSA9PiB7XG4gICAgICBjb25zdCBuZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZXdMaXN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRpdGxlJztcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgbmV3TmFtZS5jbGFzc05hbWUgPSAncHJvamVjdC1oZWFkaW5nJztcbiAgICAgIG5ld05hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLXByb2plY3QtYnV0dG9uJztcbiAgICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgICBuZXdMaXN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgbmV3UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3RMaXN0LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gbW9kZWwubmFtZXM7XG4gICAgY29uc3QgcHJvalZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5hZGQtcHJvamVjdC1idXR0b24sIC5wcm9qZWN0LWxpc3QsIC5wcm9qZWN0LXRpdGxlJyxcbiAgICApO1xuICAgIHByb2pWaWV3LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3UHJvalZpZXcgPSBidWlsZFZpZXcocHJvamVjdE5hbWVzKTtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2pWaWV3KTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtcHJvamVjdC1idXR0b24nO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0Vmlldyk7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gICAgY29uc3QgY3VycmVudE5hbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1uYW1lJyk7XG4gICAgY3VycmVudE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBtb2RlbC5nZXRDdXJyZW50UHJvamVjdE5hbWUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzVmlldztcbiIsImZ1bmN0aW9uIFRvZG9WaWV3KHRvZG9Db250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSB0b2RvQ29udHJvbGxlcjtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ1RvRG8nO1xuXG4gIGNvbnN0IGdldFBhcmVudFRvZG8gPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0VG9kb0NvbnRlbnRzID0gKGUsIGluZGV4KSA9PlxuICAgIGdldFBhcmVudFRvZG8oZSkuY2hpbGRyZW5baW5kZXhdLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IGFkZFRvZG9WaWV3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvV2luZG93LmNsYXNzTmFtZSA9ICdhZGQtdG9kby13aW5kb3cnO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lLnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0NvbnRlbnQudHlwZSA9ICd0ZXh0JztcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvUHJpb3JpdHkudHlwZSA9ICdudW1iZXInO1xuXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgdG9kb0J1dHRvbi52YWx1ZSA9ICdBZGQnO1xuXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuYWRkVG9kbyk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb05hbWUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Db250ZW50KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5KTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbiAgICB0b2RvV2luZG93LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXZpZXcnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb1dpbmRvdyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdFRvZG9WaWV3ID0gKGUpID0+IHtcbiAgICBjb25zdCBlZGl0VG9kb05hbWUgPSBnZXRUb2RvQ29udGVudHMoZSwgMCk7XG4gICAgY29uc3QgZWRpdFRvZG9Db250ZW50ID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDEpO1xuICAgIGNvbnN0IGVkaXRUb2RvRHVlRGF0ZSA9IGdldFRvZG9Db250ZW50cyhlLCAyKTtcbiAgICBjb25zdCBlZGl0VG9kb1ByaW9yaXR5ID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDMpO1xuXG4gICAgY29uc3QgdG9kb1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG9XaW5kb3cuY2xhc3NOYW1lID0gJ2VkaXQtdG9kby13aW5kb3cnO1xuICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9OYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgdG9kb05hbWUudmFsdWUgPSBlZGl0VG9kb05hbWU7XG5cbiAgICBjb25zdCB0b2RvQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0NvbnRlbnQudHlwZSA9ICd0ZXh0JztcbiAgICB0b2RvQ29udGVudC52YWx1ZSA9IGVkaXRUb2RvQ29udGVudDtcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvRHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgIHRvZG9EdWVEYXRlLnZhbHVlID0gZWRpdFRvZG9EdWVEYXRlO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvUHJpb3JpdHkudHlwZSA9ICdudW1iZXInO1xuICAgIHRvZG9Qcmlvcml0eS52YWx1ZSA9IGVkaXRUb2RvUHJpb3JpdHk7XG5cbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICB0b2RvQnV0dG9uLnZhbHVlID0gJ2VkaXQnO1xuICAgIHRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ3RydWVUb0RvRWRpdEJ1dHRvbic7XG5cbiAgICBjb25zdCBoaWRkZW5PcmlnaW5hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlkZGVuT3JpZ2luYWwudHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbk9yaWdpbmFsLnZhbHVlID0gZWRpdFRvZG9OYW1lO1xuXG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZWRpdFRvZG8pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuT3JpZ2luYWwpO1xuICAgIHRvZG9XaW5kb3cuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xuICAgIGdldFBhcmVudFRvZG8oZSkucmVwbGFjZUNoaWxkcmVuKHRvZG9Gb3JtKTtcbiAgfTtcblxuICBjb25zdCBob2xkZXJHZW5lcmF0b3IgPSAocGFyYW1ldGVycykgPT4ge1xuICAgIGNvbnN0IFt0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5XSA9IHBhcmFtZXRlcnM7XG4gICAgbGV0IHZpc2liaWxpdHk7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBhbmQtdG9kby1idXR0b24nKSAhPT0gbnVsbCkge1xuICAgICAgdmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaHJpbmstdG9kby1idXR0b24nKSAhPT0gbnVsbCkge1xuICAgICAgdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICB2aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfVxuXG4gICAgY29uc3QgdGRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgdGRIb2xkZXIuY2xhc3NOYW1lID0gJ3RvZG8nO1xuICAgIGNvbnN0IHRkTmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgdGROYW1lSGVhZGVyLnRleHRDb250ZW50ID0gdG9kb05hbWU7XG5cbiAgICBjb25zdCB0ZERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvRGVzY3JpcHRpb247XG4gICAgdGREZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAndG9kby1kZXNjcmlwdGlvbic7XG4gICAgdGREZXNjcmlwdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcblxuICAgIGNvbnN0IHRkRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZER1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvRHVlRGF0ZTtcblxuICAgIGNvbnN0IHRkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGRQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9Qcmlvcml0eTtcblxuICAgIGNvbnN0IGV4cGFuZFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGV4cGFuZFRvZG9CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGlmICh2aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xuICAgICAgZXhwYW5kVG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnZXhwYW5kLXRvZG8tYnV0dG9uJztcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwYW5kVG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnc2hyaW5rLXRvZG8tYnV0dG9uJztcbiAgICB9XG4gICAgZXhwYW5kVG9kb0J1dHRvbi52YWx1ZSA9ICcuLi4nO1xuXG4gICAgY29uc3QgZWRpdFRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGVkaXRUb2RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBlZGl0VG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnZWRpdC10b2RvLWJ1dHRvbic7XG4gICAgZWRpdFRvZG9CdXR0b24udmFsdWUgPSAnZWRpdCc7XG5cbiAgICBjb25zdCBkZWxldGVUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZWxldGVUb2RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBkZWxldGVUb2RvQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtdG9kby1idXR0b24nO1xuICAgIGRlbGV0ZVRvZG9CdXR0b24udmFsdWUgPSAnZGVsZXRlJztcblxuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkTmFtZUhlYWRlcik7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGREZXNjcmlwdGlvbik7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGREdWVEYXRlKTtcbiAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZFByaW9yaXR5KTtcbiAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZChleHBhbmRUb2RvQnV0dG9uKTtcbiAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZChlZGl0VG9kb0J1dHRvbik7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J1dHRvbik7XG4gICAgcmV0dXJuIHRkSG9sZGVyLmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBzaHJpbmtUb2RvVmlldyA9IChlKSA9PiB7XG4gICAgY29uc3QgdG9kb05hbWUgPSBnZXRUb2RvQ29udGVudHMoZSwgMCk7XG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDEpO1xuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDIpO1xuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGdldFRvZG9Db250ZW50cyhlLCAzKTtcblxuICAgIGNvbnN0IHRkSG9sZGVyID0gaG9sZGVyR2VuZXJhdG9yKFtcbiAgICAgIHRvZG9OYW1lLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb0R1ZURhdGUsXG4gICAgICB0b2RvUHJpb3JpdHksXG4gICAgXSk7XG4gICAgZ2V0UGFyZW50VG9kbyhlKS5yZXBsYWNlQ2hpbGRyZW4odGRIb2xkZXIpO1xuICAgIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKTtcbiAgfTtcbiAgY29uc3QgZXhwYW5kVG9kb1ZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGdldFRvZG9Db250ZW50cyhlLCAxKTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGdldFRvZG9Db250ZW50cyhlLCAyKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBnZXRUb2RvQ29udGVudHMoZSwgMyk7XG5cbiAgICBjb25zdCB0ZEhvbGRlciA9IGhvbGRlckdlbmVyYXRvcihbXG4gICAgICB0b2RvTmFtZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgIF0pO1xuICAgIGdldFBhcmVudFRvZG8oZSkucmVwbGFjZUNoaWxkcmVuKHRkSG9sZGVyKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRXZlbnRIYW5kbGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBleHBhbmRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmV4cGFuZC10b2RvLWJ1dHRvbicpO1xuICAgIGNvbnN0IHNocmlua0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hyaW5rLXRvZG8tYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmRlbGV0ZVRvZG8pXG4gICAgKTtcbiAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kb1ZpZXcpXG4gICAgKTtcbiAgICBleHBhbmRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXhwYW5kVG9kb1ZpZXcpO1xuICAgIH0pO1xuICAgIHNocmlua0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaHJpbmtUb2RvVmlldyk7XG4gICAgfSk7XG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGQtdG9kby1idXR0b24nKTtcbiAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9kb1ZpZXcpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChnaXZlblRvZG9MaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb1ZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdUb2RvVmlldy5jbGFzc05hbWUgPSAndG9kby12aWV3JztcbiAgICBnaXZlblRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHRkSG9sZGVyID0gaG9sZGVyR2VuZXJhdG9yKHRvZG8ucGFyYW1ldGVycyk7XG4gICAgICBuZXdUb2RvVmlldy5hcHBlbmRDaGlsZCh0ZEhvbGRlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRUb2RvVmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRvZG9WaWV3QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtdG9kby1idXR0b24nO1xuICAgIGFkZFRvZG9WaWV3QnV0dG9uLnRleHRDb250ZW50ID0gJysnO1xuICAgIG5ld1RvZG9WaWV3LmFwcGVuZENoaWxkKGFkZFRvZG9WaWV3QnV0dG9uKTtcbiAgICByZXR1cm4gbmV3VG9kb1ZpZXcuY2xvbmVOb2RlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAobW9kZWwpID0+IHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gbW9kZWwuZ2V0VHlwZU5hbWVMaXN0KCdUb0RvJyk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2RvQ29udGFpbmVyLml0ZW1MaXN0O1xuICAgIGNvbnN0IHRvZG9WaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8sIC5hZGQtdG9kby13aW5kb3cnKTtcbiAgICB0b2RvVmlldy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld1RvZG9WaWV3ID0gYnVpbGRWaWV3KHRvZG9MaXN0KTtcbiAgICBjb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50b2RvLXZpZXcnKTtcbiAgICBjb25zdCBhY3R1YWxDb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb250ZW50LXNpZGUnKTtcbiAgICBhY3R1YWxDb250ZW50U2lkZS5yZXBsYWNlQ2hpbGQobmV3VG9kb1ZpZXcsIGNvbnRlbnRTaWRlKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG5cbiAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG9ic2VydmVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck5hbWU7XG4gICAgfSxcbiAgICBidWlsZFZpZXcsXG4gICAgdXBkYXRlVmlldyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb1ZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2R1bGVzL21vZGVsJztcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vbW9kdWxlcy9jb250cm9sbGVyJztcbmltcG9ydCBWaWV3IGZyb20gJy4vbW9kdWxlcy92aWV3JztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBNb2RlbCgpO1xuICBjb25zdCBjb250cm9sbGVyID0gQ29udHJvbGxlcihtb2RlbCk7XG4gIFZpZXcoY29udHJvbGxlcik7XG59O1xuXG5tYWluKCk7XG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=