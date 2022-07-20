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
  // When you click on a button ((defined by instantiator)), it calls a Menu Opener.
  // When you save the information in that button, it calls a model updater.
  // Then, you save it with the view updater.
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





// Create A Container of All Projects.
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




const View = (controller) => {
  // Updates view from the model.
  const { model } = controller;
  // VIEW UPDATERS
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
// Todos
// Projects
// View / UI
// Button interacts with tools
// Projects implement notes and to-dos
// Notes are any text (REMEMBER TO SANITIZE)
// To dos are title,  due date, color/importance
// Expanding & Deleting To Dos
// Storing To Do Lists on Local Storage

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQjtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDM0l6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDL0Y1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQzNPeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNVO0FBQ1o7QUFDWjs7QUFFdEI7QUFDQSxnQkFBZ0IsMERBQUs7QUFDckIscUJBQXFCLCtEQUFVO0FBQy9CLEVBQUUseURBQUk7QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvbm90ZS1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9wcm9qZWN0LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9pdGVtLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL25vdGUuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9wcm9qZWN0LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvdG9kby5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlldy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3Mvbm90ZXMtdmlldy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvcHJvamVjdHMtdmlldy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdmlld3MvdG9kby12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAdXNlICdzdHlsZXMvX2hlYWRlci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX25vdGVzLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fc2lkZWJhci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX3RvZG9zLnNjc3MnO1xcbjpyb290LFxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IH1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7IH1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG4gIGhlYWRlciAudGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDVweCk7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IH1cXG5cXG4uY29udGVudC1zaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgfVxcbiAgLmNvbnRlbnQtc2lkZSAudG9kby12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfVxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIHtcXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgd2lkdGg6IDIwMHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMEJBQUk7QUFDSix5QkFBSTtBQUNKLDJCQUFJO0FBQ0oseUJBQUk7QUFHSjs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUh4QjtJQU1JLDJCQUEyQixFQUFBOztBQUkvQjtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw2QkFBNkIsRUFBQTs7QUFHL0I7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLDJCQUEyQixFQUFBO0VBSDdCO0lBTUksYUFBYSxFQUFBO0VBTmpCO0lBVUksYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxxQ0FBcUM7SUFDckMsVUFBVSxFQUFBO0lBYmQ7TUFnQk0sd0JBQXdCO01BRXhCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixzQkFBc0I7TUFDdEIsaUJBQWlCLEVBQUE7SUF2QnZCO01BMkJNLGtCQUFrQjtNQUNsQiw4QkFBOEI7TUFDOUIsYUFBYTtNQUNiLFlBQVksRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICdzdHlsZXMvX2hlYWRlci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX25vdGVzLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fc2lkZWJhci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX3RvZG9zLnNjc3MnO1xcblxcbi8vIFdlIGhhdmUgdG8gdXNlIEBpbXBvcnQgb3IgQHVzZSAgZm9yIFNBU1NcXG46cm9vdCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG5cXG4gIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgNXB4KTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb250ZW50LXNpZGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcbiAgLnRvZG8tdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuXFxuICAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47XFxuXFxuICAgIC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG5cXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIH1cXG5cXG4gICAgLm5vdGUge1xcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE5vdGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbm90ZS1jb250cm9sbGVyJztcbmltcG9ydCBQcm9qZWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlcic7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXInO1xuXG5jb25zdCBDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgLy8gV2hlbiB5b3UgY2xpY2sgb24gYSBidXR0b24gKChkZWZpbmVkIGJ5IGluc3RhbnRpYXRvcikpLCBpdCBjYWxscyBhIE1lbnUgT3BlbmVyLlxuICAvLyBXaGVuIHlvdSBzYXZlIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGF0IGJ1dHRvbiwgaXQgY2FsbHMgYSBtb2RlbCB1cGRhdGVyLlxuICAvLyBUaGVuLCB5b3Ugc2F2ZSBpdCB3aXRoIHRoZSB2aWV3IHVwZGF0ZXIuXG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3Qgbm90ZUNvbnRyb2xsZXIgPSBOb3RlQ29udHJvbGxlcihtb2RlbCk7XG4gIGNvbnN0IHRvZG9Db250cm9sbGVyID0gVG9kb0NvbnRyb2xsZXIobW9kZWwpO1xuICBjb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IFByb2plY3RDb250cm9sbGVyKG1vZGVsKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGdldCBub3RlQ29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBub3RlQ29udHJvbGxlcjtcbiAgICB9LFxuICAgIGdldCB0b2RvQ29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiB0b2RvQ29udHJvbGxlcjtcbiAgICB9LFxuICAgIGdldCBwcm9qZWN0Q29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0Q29udHJvbGxlcjtcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iLCJjb25zdCBOb3RlQ29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcblxuICBjb25zdCBnZXROb3RlTmFtZSA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBtb2RlbC51cGRhdGVPYnNlcnZlcignTm90ZScsIG1vZGVsKTtcbiAgfTtcbiAgY29uc3QgYWRkTm90ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbZS50YXJnZXQuZm9ybVswXS52YWx1ZSwgZS50YXJnZXQuZm9ybVsxXS52YWx1ZV07XG4gICAgbW9kZWwuYWRkVG9vbCgnTm90ZScsIHByb3BlcnRpZXMpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtlLnRhcmdldC5mb3JtWzBdLnZhbHVlLCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlXTtcbiAgICBjb25zdCBub3RlTmFtZSA9IGUudGFyZ2V0LmZvcm1bM10udmFsdWU7XG4gICAgbW9kZWwuZWRpdFRvb2woJ05vdGUnLCBub3RlTmFtZSwgcHJvcGVydGllcyk7XG4gICAgdXBkYXRlKCk7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5vdGVOYW1lID0gZ2V0Tm90ZU5hbWUoZSk7XG4gICAgbW9kZWwuZGVsZXRlVG9vbCgnTm90ZScsIG5vdGVOYW1lKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGFkZE5vdGUsXG4gICAgZWRpdE5vdGUsXG4gICAgZGVsZXRlTm90ZSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBOb3RlQ29udHJvbGxlcjtcbiIsImNvbnN0IFByb2plY3RDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ1Byb2plY3QnLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG1vZGVsLmFkZFByb2plY3QoKTtcbiAgICB1cGRhdGUoKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgfTtcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBlLnRhcmdldC5mb3JtWzBdLnZhbHVlO1xuICAgICAgY29uc3Qgb2xkTmFtZSA9IGUudGFyZ2V0LmZvcm1bMV0udmFsdWU7XG4gICAgICBtb2RlbC5lZGl0UHJvamVjdE5hbWUob2xkTmFtZSwgbmV3TmFtZSk7XG4gICAgICB1cGRhdGUoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKG1vZGVsKTtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoUHJvamVjdCA9IChlKSA9PiB7XG4gICAgbW9kZWwuc3dpdGNoUHJvamVjdChlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKG1vZGVsKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0TmFtZSxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHN3aXRjaFByb2plY3QsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRyb2xsZXI7XG4iLCJjb25zdCBUb2RvQ29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcblxuICBjb25zdCBnZXRUb2RvTmFtZSA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBtb2RlbC51cGRhdGVPYnNlcnZlcignVG9EbycsIG1vZGVsKTtcbiAgfTtcbiAgY29uc3QgYWRkVG9kbyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbXG4gICAgICBlLnRhcmdldC5mb3JtWzBdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVsxXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bMl0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzNdLnZhbHVlLFxuICAgIF07XG4gICAgbW9kZWwuYWRkVG9vbCgnVG9EbycsIHByb3BlcnRpZXMpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBlZGl0VG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgIGUudGFyZ2V0LmZvcm1bMF0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzFdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVsyXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bM10udmFsdWUsXG4gICAgXTtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGUudGFyZ2V0LmZvcm1bNV0udmFsdWU7XG4gICAgbW9kZWwuZWRpdFRvb2woJ1RvRG8nLCB0b2RvTmFtZSwgcHJvcGVydGllcyk7XG4gICAgdXBkYXRlKCk7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZ2V0VG9kb05hbWUoZSk7XG4gICAgbW9kZWwuZGVsZXRlVG9vbCgnVG9EbycsIHRvZG9OYW1lKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcbiAgY29uc3QgZXhwYW5kVG9kbyA9ICgpID0+IHtcblxuICB9O1xuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGFkZFRvZG8sXG4gICAgZWRpdFRvZG8sXG4gICAgZGVsZXRlVG9kbyxcbiAgICBleHBhbmRUb2RvLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9Db250cm9sbGVyO1xuIiwiaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9tb2RlbHMvaXRlbS1jb250YWluZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL21vZGVscy9ub3RlJztcbmltcG9ydCBUb0RvIGZyb20gJy4vbW9kZWxzL3RvZG8nO1xuXG4vLyBDcmVhdGUgQSBDb250YWluZXIgb2YgQWxsIFByb2plY3RzLlxuZnVuY3Rpb24gTW9kZWwoKSB7XG4gIGNvbnN0IHRvb2xUeXBlcyA9IFsnTm90ZScsICdUb0RvJ107XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gSXRlbUNvbnRhaW5lcignUHJvamVjdCcpO1xuICBsZXQgY3VyUHJvakluZGV4ID0gMDsgLy8gaW5kZXggb2YgdGhlIGN1cnJlbnRQcm9qZWN0XG4gIGxldCBwcm9qQ291bnRlciA9IDA7XG4gIGNvbnN0IG9ic2VydmVycyA9IFtdO1xuICBjb25zdCBhZGRPYnNlcnZlcnMgPSAodmlld3MpID0+IHtcbiAgICB2aWV3cy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgb2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVycyhtb2RlbCkge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldyhtb2RlbCk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB1cGRhdGVPYnNlcnZlciA9IChnaXZlbk9ic2VydmVyTmFtZSwgbW9kZWwpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IG9ic2VydmVycy5maW5kSW5kZXgoKG9ic2VydmVyKSA9PiBvYnNlcnZlci5vYnNlcnZlck5hbWUgPT09IGdpdmVuT2JzZXJ2ZXJOYW1lKTtcbiAgICBvYnNlcnZlcnNbaW5kZXhdLnVwZGF0ZVZpZXcobW9kZWwpO1xuICB9O1xuICAvLyBUbyBEaXNwbGF5IHRoZSBDdXJyZW50IFByb2plY3Qgb250byB0aGUgU2NyZWVuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3ROYW1lID0gKCkgPT4gZ2V0Q3VycmVudFByb2plY3QoKS5uYW1lO1xuICAvLyBUbyBBZGQgYSBwcm9qZWN0IHRvIHRoZSB0YWIgKGRvIG5vdCBzd2l0Y2ggdG8gaXQuKVxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lID0gYFByb2plY3QgJHtwcm9qQ291bnRlcn1gKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIHRvb2xUeXBlcyk7XG4gICAgcHJvamVjdExpc3QuYWRkSXRlbShuZXdQcm9qZWN0KTtcbiAgICBwcm9qQ291bnRlciArPSAxO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9O1xuXG4gIC8vIFRvIEdldCBhIGxpc3Qgb2YgYWxsIHgncyBhbmQgeSdzXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgY3VyciA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGN1cnIuZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHByb2plY3RMaXN0LmdldEl0ZW1CeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGdldFByb2plY3RJbmRleEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdExpc3QuZ2V0SXRlbUluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcblxuICAvLyBUbyBkZWxldGUgYSBwcm9qZWN0XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qSW5kZXggPSBnZXRQcm9qZWN0SW5kZXhCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LnJlbW92ZUl0ZW0ocHJvakluZGV4KTtcbiAgICBpZiAoY3VyUHJvakluZGV4ID09PSBwcm9qSW5kZXgpIHtcbiAgICAgIGN1clByb2pJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDApIHtcbiAgICAgIHByb2pDb3VudGVyID0gMDtcbiAgICAgIGN1clByb2pJbmRleCA9IDA7XG4gICAgICBhZGRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSBhbnkgcHJvamVjdCdzIG5hbWVcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKG9yaWdpbmFsTmFtZSwgbmV3UHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBlZGl0UHJvaiA9IGdldFByb2plY3RCeU5hbWUob3JpZ2luYWxOYW1lKTtcbiAgICBlZGl0UHJvai5uYW1lID0gbmV3UHJvamVjdE5hbWU7XG4gIH07XG5cbiAgLy8gV2hlbiBjbGlja2VkLCBzd2l0Y2ggUHJvamVjdC5cbiAgY29uc3Qgc3dpdGNoUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY3VyUHJvakluZGV4ID0gcHJvamVjdExpc3QuZ2V0SXRlbUluZGV4QnlOYW1lKG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGFkZCBhIG5ldyBUb29sXG4gIGNvbnN0IGFkZFRvb2wgPSAodG9vbFR5cGUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBsZXQgbmV3VG9vbDtcbiAgICBpZiAodG9vbFR5cGUgPT09ICdOb3RlJykge1xuICAgICAgbmV3VG9vbCA9IE5vdGUocGFyYW1ldGVycyk7XG4gICAgfSBlbHNlIGlmICh0b29sVHlwZSA9PT0gJ1RvRG8nKSB7XG4gICAgICBuZXdUb29sID0gVG9EbyhwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgY29uc3QgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gICAgY3VyUHJvamVjdC5hZGRJdGVtKHRvb2xUeXBlLCBuZXdUb29sKTtcbiAgfTtcblxuICAvLyBUbyBkZWxldGUgYSB0b29sXG4gIGNvbnN0IGRlbGV0ZVRvb2wgPSAodG9vbFR5cGUsIG5hbWUpID0+IHtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmRlbGV0ZUl0ZW0odG9vbFR5cGUsIG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSB0aGUgY29udGVudHMgb2YgYSB0b29sXG4gIGNvbnN0IGVkaXRUb29sID0gKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgY3VyUHJvaiA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY3VyUHJvai5lZGl0SXRlbSh0b29sVHlwZSwgbmFtZSwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgYWRkUHJvamVjdCgpOyAvLyBpbml0aWFsaXplcyB0aGUgcHJvamVjdFxuICBhZGRQcm9qZWN0KCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0Lml0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWVzKCkge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5pdGVtTGlzdDtcbiAgICAgIHJldHVybiBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QubmFtZSk7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0TmFtZSxcbiAgICBnZXRUeXBlTmFtZUxpc3QsXG4gICAgc3dpdGNoUHJvamVjdCxcbiAgICBhZGRUb29sLFxuICAgIGRlbGV0ZVRvb2wsXG4gICAgZWRpdFRvb2wsXG4gICAgdXBkYXRlT2JzZXJ2ZXJzLFxuICAgIGFkZE9ic2VydmVycyxcbiAgICB1cGRhdGVPYnNlcnZlcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCIvLyBZb3UgY2FuIGNvbnRhaW4gT05FIHR5cGUgb2Ygb2JqZWN0IChub3RlcywgdG8tZG9zLCBldGMpXG5jb25zdCBJdGVtQ29udGFpbmVyID0gKGtpbmQpID0+IHtcbiAgY29uc3QgaXRlbVR5cGUgPSBraW5kO1xuICBjb25zdCBpdGVtTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbVRvQWRkKSA9PiB7XG4gICAgaXRlbUxpc3QucHVzaChpdGVtVG9BZGQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAocmVtb3ZlSW5kZXgpID0+IHtcbiAgICBpdGVtTGlzdC5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1JbmRleEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gaXRlbUxpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1CeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGdldEl0ZW1JbmRleEJ5TmFtZShuYW1lKTtcbiAgICByZXR1cm4gaXRlbUxpc3RbaXRlbUluZGV4XTtcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBpdGVtTGlzdC5sZW5ndGg7XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAoZWRpdEluZGV4LCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgaXRlbUxpc3RbZWRpdEluZGV4XS5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBpdGVtTGlzdCgpIHtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9LFxuICAgIGdldCBpdGVtVHlwZSgpIHtcbiAgICAgIHJldHVybiBpdGVtVHlwZTtcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gaXRlbUxpc3QubGVuZ3RoO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRJdGVtQnlOYW1lLFxuICAgIGdldEl0ZW1JbmRleEJ5TmFtZSxcbiAgICBlZGl0SXRlbSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Db250YWluZXI7XG4iLCIvLyBNb2RlbCBmb3IgYSBOb3RlXG5jb25zdCBOb3RlID0gKFtnaXZlbk5hbWUsIGNvbnRlbnRzXSkgPT4ge1xuICBsZXQgbmFtZSA9IGdpdmVuTmFtZTtcbiAgbGV0IHRleHRDb250ZW50ID0gY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgdGV4dENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQgdGV4dENvbnRlbnQobmV3VGV4dCkge1xuICAgICAgdGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05vdGVOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3Tm90ZU5hbWU7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgdGV4dENvbnRlbnRdO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW25ld05hbWUsIG5ld0NvbnRlbnRzXSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld0NvbnRlbnRzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIiwiLy8gTW9kZWwgZm9yIGEgUHJvamVjdCAtPiBQcm9qZWN0cyBjYW4gaG9sZCBub3RlcyBhbmQgdG8tZG9zXG4vLyBtYWtlcyBTZXBhcmF0ZSBjb250YWluZXJzIGZvciBub3RlcyBhbmQgdG8tZG9zIDogd2lsbCBoYXZlIHRvIGRvIHRoYXQgbXVsdGlscGUgdGltZXNcblxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9pdGVtLWNvbnRhaW5lcic7XG5cbmNvbnN0IFByb2plY3QgPSAoZ2l2ZW5OYW1lLCB0eXBlTGlzdCkgPT4ge1xuICAvLyBBIE1hcCBvZiBDb250YWluZXJzXG4gIGxldCBuYW1lID0gZ2l2ZW5OYW1lO1xuICBjb25zdCBjb250YWluZXJNYXAgPSBuZXcgTWFwKCk7XG4gIHR5cGVMaXN0LmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBjb250YWluZXJNYXAuc2V0KHR5cGUsIEl0ZW1Db250YWluZXIodHlwZSkpO1xuICB9KTtcblxuICBjb25zdCBnZXRUeXBlTmFtZUxpc3QgPSAodHlwZSkgPT4gY29udGFpbmVyTWFwLmdldCh0eXBlKTtcblxuICBjb25zdCBhZGRJdGVtID0gKHR5cGUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIHR5cGVDb250YWluZXIuYWRkSXRlbShpdGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKHR5cGUsIGl0ZW1OYW1lKSA9PiB7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGdldFR5cGVOYW1lTGlzdCh0eXBlKTtcbiAgICBjb25zdCBkZWxldGVJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLnJlbW92ZUl0ZW0oZGVsZXRlSW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKHR5cGUsIGl0ZW1OYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGdldFR5cGVOYW1lTGlzdCh0eXBlKTtcbiAgICBjb25zdCBlZGl0SW5kZXggPSB0eXBlQ29udGFpbmVyLmdldEl0ZW1JbmRleEJ5TmFtZShpdGVtTmFtZSk7XG4gICAgdHlwZUNvbnRhaW5lci5lZGl0SXRlbShlZGl0SW5kZXgsIHBhcmFtZXRlcnMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICBkZWxldGVJdGVtLFxuICAgIGVkaXRJdGVtLFxuICAgIGdldFR5cGVOYW1lTGlzdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvLyBNb2RlbCBmb3IgYSBUby1Eb1xuXG5jb25zdCBUb0RvID0gKFtuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHldKSA9PiB7XG4gIGxldCBuYW1lID0gbmV3TmFtZTsgLy8gUGxhY2Vob2xkZXIgd2lsbCBiZSBpbiBIVE1MXG4gIGxldCBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyAvLyBQbGFjZWhvbGRlciB3aWxsIGJlIGluIEhUTUxcbiAgbGV0IGR1ZURhdGUgPSBuZXdEdWVEYXRlOyAvLyB3aWxsIGltcGxlbWVudCBhIHRpbWUgbGlicmFyeSBsYXRlci5cbiAgbGV0IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IC8vIG1heWJlIGFuIEVOVU0gdGhhdCByZXByZXNlbnRzIHZhcmlhYmxlcyBieSBwcmlvcml0eVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKGdpdmVuTmFtZSkge1xuICAgICAgbmFtZSA9IGdpdmVuTmFtZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbihnaXZlbkRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IGdpdmVuRGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiBkdWVEYXRlO1xuICAgIH0sXG4gICAgc2V0IGR1ZURhdGUoZ2l2ZW5EYXRlKSB7XG4gICAgICBkdWVEYXRlID0gZ2l2ZW5EYXRlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5KGdpdmVuUHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eTtcbiAgICB9LFxuICAgIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgICAgcmV0dXJuIFtuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHldO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW2dpdmVuTmFtZSwgZ2l2ZW5EZXNjcmlwdGlvbiwgZ2l2ZW5EYXRlLCBnaXZlblByaW9yaXR5XSkge1xuICAgICAgbmFtZSA9IGdpdmVuTmFtZTtcbiAgICAgIGRlc2NyaXB0aW9uID0gZ2l2ZW5EZXNjcmlwdGlvbjtcbiAgICAgIGR1ZURhdGUgPSBnaXZlbkRhdGU7XG4gICAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iLCJpbXBvcnQgUHJvamVjdHNWaWV3IGZyb20gJy4vdmlld3MvcHJvamVjdHMtdmlldyc7XG5pbXBvcnQgVG9kb1ZpZXcgZnJvbSAnLi92aWV3cy90b2RvLXZpZXcnO1xuaW1wb3J0IE5vdGVzVmlldyBmcm9tICcuL3ZpZXdzL25vdGVzLXZpZXcnO1xuXG5jb25zdCBWaWV3ID0gKGNvbnRyb2xsZXIpID0+IHtcbiAgLy8gVXBkYXRlcyB2aWV3IGZyb20gdGhlIG1vZGVsLlxuICBjb25zdCB7IG1vZGVsIH0gPSBjb250cm9sbGVyO1xuICAvLyBWSUVXIFVQREFURVJTXG4gIGNvbnN0IHByb2pWaWV3ID0gUHJvamVjdHNWaWV3KGNvbnRyb2xsZXIucHJvamVjdENvbnRyb2xsZXIpO1xuICBjb25zdCBub3Rlc1ZpZXcgPSBOb3Rlc1ZpZXcoY29udHJvbGxlci5ub3RlQ29udHJvbGxlcik7XG4gIGNvbnN0IHRvZG9WaWV3ID0gVG9kb1ZpZXcoY29udHJvbGxlci50b2RvQ29udHJvbGxlcik7XG4gIG1vZGVsLmFkZE9ic2VydmVycyhbcHJvalZpZXcsIHRvZG9WaWV3LCBub3Rlc1ZpZXddKTtcbiAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKGNvbnRyb2xsZXIubW9kZWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiIsImZ1bmN0aW9uIE5vdGVzVmlldyhub3RlQ29udHJvbGxlcikge1xuICBjb25zdCBjb250cm9sbGVyID0gbm90ZUNvbnRyb2xsZXI7XG5cbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ05vdGUnO1xuXG4gIGNvbnN0IGdldFBhcmVudE5vdGUgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0Tm90ZUNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnROb3RlKGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcbiAgY29uc3QgYWRkTm90ZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVXaW5kb3cuY2xhc3NOYW1lID0gJ2FkZC1ub3RlLXdpbmRvdyc7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBjb25zdCBub3RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZU5hbWUudHlwZSA9ICd0ZXh0JztcblxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQ29udGVudC50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgbm90ZUJ1dHRvbi52YWx1ZSA9ICdBZGQnO1xuXG4gICAgbm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuYWRkTm90ZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZU5hbWUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVDb250ZW50KTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQnV0dG9uKTtcbiAgICBub3RlV2luZG93LmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub3RlLXZpZXcnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZVdpbmRvdyk7XG4gIH07XG5cbiAgY29uc3QgZWRpdE5vdGVWaWV3ID0gKGUpID0+IHtcbiAgICBjb25zdCBlZGl0Tm90ZU5hbWUgPSBnZXROb3RlQ29udGVudHMoZSwgMCk7XG4gICAgY29uc3QgZWRpdE5vdGVDb250ZW50ID0gZ2V0Tm90ZUNvbnRlbnRzKGUsIDEpO1xuICAgIGNvbnN0IG5vdGVXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlV2luZG93LmNsYXNzTmFtZSA9ICdlZGl0LW5vdGUtd2luZG93JztcbiAgICBjb25zdCBub3RlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IG5vdGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIG5vdGVOYW1lLnZhbHVlID0gZWRpdE5vdGVOYW1lO1xuXG4gICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVDb250ZW50LnR5cGUgPSAndGV4dGFyZWEnO1xuICAgIG5vdGVDb250ZW50LnZhbHVlID0gZWRpdE5vdGVDb250ZW50O1xuXG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgbm90ZUJ1dHRvbi52YWx1ZSA9ICdlZGl0JztcbiAgICBub3RlQnV0dG9uLmNsYXNzTmFtZSA9ICd0cnVlRWRpdEJ1dHRvbic7XG5cbiAgICBjb25zdCBoaWRkZW5PcmlnaW5hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlkZGVuT3JpZ2luYWwudHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbk9yaWdpbmFsLnZhbHVlID0gZWRpdE5vdGVOYW1lO1xuXG4gICAgbm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZWRpdE5vdGUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVOYW1lKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQ29udGVudCk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbik7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuT3JpZ2luYWwpO1xuICAgIG5vdGVXaW5kb3cuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuICAgIGdldFBhcmVudE5vdGUoZSkucmVwbGFjZUNoaWxkcmVuKG5vdGVGb3JtKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVkaXRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtbm90ZS1idXR0b24nKTtcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1ub3RlLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmRlbGV0ZU5vdGUpKTtcbiAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXROb3RlVmlldykpO1xuICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYWRkLW5vdGUtYnV0dG9uJyk7XG4gICAgdGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5vdGVWaWV3KTtcbiAgfTtcblxuICBjb25zdCBidWlsZFZpZXcgPSAoZ2l2ZW5Ob3RlTGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld05vdGVWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Tm90ZVZpZXcuY2xhc3NOYW1lID0gJ25vdGUtdmlldyc7XG4gICAgZ2l2ZW5Ob3RlTGlzdC5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBjb25zdCBbbm90ZU5hbWUsIG5vdGVDb250ZW50XSA9IG5vdGUucGFyYW1ldGVycztcbiAgICAgIGNvbnN0IG5vdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBub3RlSG9sZGVyLmNsYXNzTmFtZSA9ICdub3RlJztcblxuICAgICAgY29uc3Qgbm90ZU5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgbm90ZU5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBub3RlTmFtZTtcblxuICAgICAgY29uc3Qgbm90ZU5hbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgbm90ZU5hbWVDb250ZW50LnRleHRDb250ZW50ID0gbm90ZUNvbnRlbnQ7XG5cbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZWRpdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LW5vdGUtYnV0dG9uJztcbiAgICAgIGVkaXRCdXR0b24udmFsdWUgPSAnZWRpdCc7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkZWxldGVCdXR0b24udmFsdWUgPSAnZGVsZXRlJztcbiAgICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1ub3RlLWJ1dHRvbic7XG5cbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQobm90ZU5hbWVIZWFkZXIpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUNvbnRlbnQpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgIG5ld05vdGVWaWV3LmFwcGVuZENoaWxkKG5vdGVIb2xkZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkTm90ZVZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGROb3RlVmlld0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkLW5vdGUtYnV0dG9uJztcbiAgICBhZGROb3RlVmlld0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBuZXdOb3RlVmlldy5hcHBlbmRDaGlsZChhZGROb3RlVmlld0J1dHRvbik7XG4gICAgcmV0dXJuIG5ld05vdGVWaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdCgnTm90ZScpO1xuICAgIGNvbnN0IG5vdGVMaXN0ID0gbm90ZUNvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCBub3RlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlLCAuYWRkLW5vdGUtd2luZG93Jyk7XG4gICAgbm90ZVZpZXcuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdOb3RlVmlldyA9IGJ1aWxkVmlldyhub3RlTGlzdCk7XG4gICAgY29uc3QgY29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubm90ZS12aWV3Jyk7XG4gICAgY29uc3QgY29udGVudFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zaWRlJyk7XG4gICAgY29udGVudFZpZXcucmVwbGFjZUNoaWxkKG5ld05vdGVWaWV3LCBjb250ZW50U2lkZSk7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIGJ1aWxkVmlldyxcbiAgICB1cGRhdGVWaWV3LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgTm90ZXNWaWV3O1xuIiwiZnVuY3Rpb24gUHJvamVjdHNWaWV3KHByb2plY3RDb250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBwcm9qZWN0Q29udHJvbGxlcjtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ1Byb2plY3QnO1xuXG4gIGNvbnN0IGdldFBhcmVudFByb2plY3QgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0UHJvakNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnRQcm9qZWN0KGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcblxuICBjb25zdCBlZGl0UHJvamVjdFZpZXcgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBnZXRQcm9qQ29udGVudHMoZSwgMCk7XG4gICAgY29uc3QgcHJvamVjdFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RXaW5kb3cuY2xhc3NOYW1lID0gJ2VkaXQtcHJvai13aW5kb3cnO1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3QgcHJvak5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2pOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgcHJvak5hbWUudmFsdWUgPSBlZGl0UHJvamVjdE5hbWU7XG5cbiAgICBjb25zdCBoaWRkZW5PcmlnaW5hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlkZGVuT3JpZ2luYWwudHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbk9yaWdpbmFsLnZhbHVlID0gZWRpdFByb2plY3ROYW1lO1xuXG4gICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNvbnRyb2xsZXIuZWRpdFByb2plY3ROYW1lKTtcbiAgICBwcm9qRm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG4gICAgcHJvakZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuT3JpZ2luYWwpO1xuICAgIHByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQocHJvakZvcm0pO1xuICAgIGdldFBhcmVudFByb2plY3QoZSkucmVwbGFjZUNoaWxkcmVuKHByb2pGb3JtKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0VmlldyA9ICgpID0+IHtcbiAgICBjb250cm9sbGVyLmFkZFByb2plY3QoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaGVhZGluZycpO1xuICAgIHN3aXRjaFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLnN3aXRjaFByb2plY3QpO1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGVkaXRQcm9qZWN0Vmlldyk7XG4gICAgfSk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0TGlzdC5jbGFzc05hbWUgPSAncHJvamVjdC1saXN0JztcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmV3TGlzdC5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZSc7XG4gICAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIG5ld05hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZGluZyc7XG4gICAgICBuZXdOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdYJztcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1wcm9qZWN0LWJ1dHRvbic7XG4gICAgICBuZXdMaXN0LmFwcGVuZENoaWxkKG5ld05hbWUpO1xuICAgICAgbmV3TGlzdC5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgIG5ld1Byb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld0xpc3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdQcm9qZWN0TGlzdC5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVmlldyA9IChtb2RlbCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lcyA9IG1vZGVsLm5hbWVzO1xuICAgIGNvbnN0IHByb2pWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICcuYWRkLXByb2plY3QtYnV0dG9uLCAucHJvamVjdC1saXN0LCAucHJvamVjdC10aXRsZScsXG4gICAgKTtcbiAgICBwcm9qVmlldy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld1Byb2pWaWV3ID0gYnVpbGRWaWV3KHByb2plY3ROYW1lcyk7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChuZXdQcm9qVmlldyk7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSAnYWRkLXByb2plY3QtYnV0dG9uJztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3UHJvamVjdFZpZXcpO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICAgIGNvbnN0IGN1cnJlbnROYW1lSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3ctbmFtZScpO1xuICAgIGN1cnJlbnROYW1lSGVhZGVyLnRleHRDb250ZW50ID0gbW9kZWwuZ2V0Q3VycmVudFByb2plY3ROYW1lKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgb2JzZXJ2ZXJOYW1lKCkge1xuICAgICAgcmV0dXJuIG9ic2VydmVyTmFtZTtcbiAgICB9LFxuICAgIGJ1aWxkVmlldyxcbiAgICB1cGRhdGVWaWV3LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c1ZpZXc7XG4iLCJmdW5jdGlvbiBUb2RvVmlldyh0b2RvQ29udHJvbGxlcikge1xuICBjb25zdCBjb250cm9sbGVyID0gdG9kb0NvbnRyb2xsZXI7XG4gIGNvbnN0IG9ic2VydmVyTmFtZSA9ICdUb0RvJztcblxuICBjb25zdCBnZXRQYXJlbnRUb2RvID0gKGUpID0+IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IGdldFRvZG9Db250ZW50cyA9IChlLCBpbmRleCkgPT5cbiAgICBnZXRQYXJlbnRUb2RvKGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcblxuICBjb25zdCBhZGRUb2RvVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1dpbmRvdy5jbGFzc05hbWUgPSAnYWRkLXRvZG8td2luZG93JztcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZS50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Db250ZW50LnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9ICdkYXRlJztcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1ByaW9yaXR5LnR5cGUgPSAnbnVtYmVyJztcblxuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIHRvZG9CdXR0b24udmFsdWUgPSAnQWRkJztcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmFkZFRvZG8pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgdG9kb1dpbmRvdy5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby12aWV3Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9XaW5kb3cpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvVmlldyA9IChlKSA9PiB7XG4gICAgY29uc3QgZWRpdFRvZG9OYW1lID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IGVkaXRUb2RvQ29udGVudCA9IGdldFRvZG9Db250ZW50cyhlLCAxKTtcbiAgICBjb25zdCBlZGl0VG9kb0R1ZURhdGUgPSBnZXRUb2RvQ29udGVudHMoZSwgMik7XG4gICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eSA9IGdldFRvZG9Db250ZW50cyhlLCAzKTtcblxuICAgIGNvbnN0IHRvZG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvV2luZG93LmNsYXNzTmFtZSA9ICdlZGl0LXRvZG8td2luZG93JztcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHRvZG9OYW1lLnZhbHVlID0gZWRpdFRvZG9OYW1lO1xuXG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Db250ZW50LnR5cGUgPSAndGV4dCc7XG4gICAgdG9kb0NvbnRlbnQudmFsdWUgPSBlZGl0VG9kb0NvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICB0b2RvRHVlRGF0ZS52YWx1ZSA9IGVkaXRUb2RvRHVlRGF0ZTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1ByaW9yaXR5LnR5cGUgPSAnbnVtYmVyJztcbiAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSBlZGl0VG9kb1ByaW9yaXR5O1xuXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgdG9kb0J1dHRvbi52YWx1ZSA9ICdlZGl0JztcbiAgICB0b2RvQnV0dG9uLmNsYXNzTmFtZSA9ICd0cnVlVG9Eb0VkaXRCdXR0b24nO1xuXG4gICAgY29uc3QgaGlkZGVuT3JpZ2luYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZGRlbk9yaWdpbmFsLnR5cGUgPSAnaGlkZGVuJztcbiAgICBoaWRkZW5PcmlnaW5hbC52YWx1ZSA9IGVkaXRUb2RvTmFtZTtcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmVkaXRUb2RvKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGhpZGRlbk9yaWdpbmFsKTtcbiAgICB0b2RvV2luZG93LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBnZXRQYXJlbnRUb2RvKGUpLnJlcGxhY2VDaGlsZHJlbih0b2RvRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgaG9sZGVyR2VuZXJhdG9yID0gKHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBbdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV0gPSBwYXJhbWV0ZXJzO1xuICAgIGxldCB2aXNpYmlsaXR5O1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRvZG8tYnV0dG9uJykgIT09IG51bGwpIHtcbiAgICAgIHZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hyaW5rLXRvZG8tYnV0dG9uJykgIT09IG51bGwpIHtcbiAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNvbnN0IHRkSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRkSG9sZGVyLmNsYXNzTmFtZSA9ICd0b2RvJztcbiAgICBjb25zdCB0ZE5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRkTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IHRvZG9OYW1lO1xuXG4gICAgY29uc3QgdGREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRkRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3RvZG8tZGVzY3JpcHRpb24nO1xuICAgIHRkRGVzY3JpcHRpb24uc3R5bGUudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG5cbiAgICBjb25zdCB0ZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGREdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0R1ZURhdGU7XG5cbiAgICBjb25zdCB0ZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRkUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvUHJpb3JpdHk7XG5cbiAgICBjb25zdCBleHBhbmRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBleHBhbmRUb2RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBpZiAodmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIGV4cGFuZFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2V4cGFuZC10b2RvLWJ1dHRvbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGFuZFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ3Nocmluay10b2RvLWJ1dHRvbic7XG4gICAgfVxuICAgIGV4cGFuZFRvZG9CdXR0b24udmFsdWUgPSAnLi4uJztcblxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZWRpdFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1idXR0b24nO1xuICAgIGVkaXRUb2RvQnV0dG9uLnZhbHVlID0gJ2VkaXQnO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLXRvZG8tYnV0dG9uJztcbiAgICBkZWxldGVUb2RvQnV0dG9uLnZhbHVlID0gJ2RlbGV0ZSc7XG5cbiAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZE5hbWVIZWFkZXIpO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRGVzY3JpcHRpb24pO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRHVlRGF0ZSk7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGRQcmlvcml0eSk7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kVG9kb0J1dHRvbik7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQoZWRpdFRvZG9CdXR0b24pO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdXR0b24pO1xuICAgIHJldHVybiB0ZEhvbGRlci5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2hyaW5rVG9kb1ZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGdldFRvZG9Db250ZW50cyhlLCAxKTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGdldFRvZG9Db250ZW50cyhlLCAyKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBnZXRUb2RvQ29udGVudHMoZSwgMyk7XG5cbiAgICBjb25zdCB0ZEhvbGRlciA9IGhvbGRlckdlbmVyYXRvcihbXG4gICAgICB0b2RvTmFtZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgIF0pO1xuICAgIGdldFBhcmVudFRvZG8oZSkucmVwbGFjZUNoaWxkcmVuKHRkSG9sZGVyKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG4gIGNvbnN0IGV4cGFuZFRvZG9WaWV3ID0gKGUpID0+IHtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGdldFRvZG9Db250ZW50cyhlLCAwKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBnZXRUb2RvQ29udGVudHMoZSwgMSk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBnZXRUb2RvQ29udGVudHMoZSwgMik7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDMpO1xuXG4gICAgY29uc3QgdGRIb2xkZXIgPSBob2xkZXJHZW5lcmF0b3IoW1xuICAgICAgdG9kb05hbWUsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvRHVlRGF0ZSxcbiAgICAgIHRvZG9Qcmlvcml0eSxcbiAgICBdKTtcbiAgICBnZXRQYXJlbnRUb2RvKGUpLnJlcGxhY2VDaGlsZHJlbih0ZEhvbGRlcik7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvLWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgZXhwYW5kQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBzaHJpbmtCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNocmluay10b2RvLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5kZWxldGVUb2RvKVxuICAgICk7XG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdFRvZG9WaWV3KVxuICAgICk7XG4gICAgZXhwYW5kQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV4cGFuZFRvZG9WaWV3KTtcbiAgICB9KTtcbiAgICBzaHJpbmtCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hyaW5rVG9kb1ZpZXcpO1xuICAgIH0pO1xuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uYWRkLXRvZG8tYnV0dG9uJyk7XG4gICAgdG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvZG9WaWV3KTtcbiAgfTtcblxuICBjb25zdCBidWlsZFZpZXcgPSAoZ2l2ZW5Ub2RvTGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9WaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3VG9kb1ZpZXcuY2xhc3NOYW1lID0gJ3RvZG8tdmlldyc7XG4gICAgZ2l2ZW5Ub2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB0ZEhvbGRlciA9IGhvbGRlckdlbmVyYXRvcih0b2RvLnBhcmFtZXRlcnMpO1xuICAgICAgbmV3VG9kb1ZpZXcuYXBwZW5kQ2hpbGQodGRIb2xkZXIpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkVG9kb1ZpZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUb2RvVmlld0J1dHRvbi5jbGFzc05hbWUgPSAnYWRkLXRvZG8tYnV0dG9uJztcbiAgICBhZGRUb2RvVmlld0J1dHRvbi50ZXh0Q29udGVudCA9ICcrJztcbiAgICBuZXdUb2RvVmlldy5hcHBlbmRDaGlsZChhZGRUb2RvVmlld0J1dHRvbik7XG4gICAgcmV0dXJuIG5ld1RvZG9WaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdCgnVG9EbycpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0NvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLCAuYWRkLXRvZG8td2luZG93Jyk7XG4gICAgdG9kb1ZpZXcuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGJ1aWxkVmlldyh0b2RvTGlzdCk7XG4gICAgY29uc3QgY29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudG9kby12aWV3Jyk7XG4gICAgY29uc3QgYWN0dWFsQ29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY29udGVudC1zaWRlJyk7XG4gICAgYWN0dWFsQ29udGVudFNpZGUucmVwbGFjZUNoaWxkKG5ld1RvZG9WaWV3LCBjb250ZW50U2lkZSk7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9WaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQgVmlldyBmcm9tICcuL21vZHVsZXMvdmlldyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gTW9kZWwoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xsZXIobW9kZWwpO1xuICBWaWV3KGNvbnRyb2xsZXIpO1xufTtcblxubWFpbigpO1xuLy8gVG9kb3Ncbi8vIFByb2plY3RzXG4vLyBWaWV3IC8gVUlcbi8vIEJ1dHRvbiBpbnRlcmFjdHMgd2l0aCB0b29sc1xuLy8gUHJvamVjdHMgaW1wbGVtZW50IG5vdGVzIGFuZCB0by1kb3Ncbi8vIE5vdGVzIGFyZSBhbnkgdGV4dCAoUkVNRU1CRVIgVE8gU0FOSVRJWkUpXG4vLyBUbyBkb3MgYXJlIHRpdGxlLCAgZHVlIGRhdGUsIGNvbG9yL2ltcG9ydGFuY2Vcbi8vIEV4cGFuZGluZyAmIERlbGV0aW5nIFRvIERvc1xuLy8gU3RvcmluZyBUbyBEbyBMaXN0cyBvbiBMb2NhbCBTdG9yYWdlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=