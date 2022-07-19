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
___CSS_LOADER_EXPORT___.push([module.id, "@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n:root, body {\n  padding: 0;\n  margin: 0; }\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 5fr; }\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  background-color: pink; }\n  header .title {\n    font-size: calc(2rem + 5px); }\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: palegoldenrod;\n  display: grid;\n  grid-template-columns: 1fr 4fr; }\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  border-right: 1px solid black; }\n\n.content-side {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr; }\n  .content-side .todo-view {\n    display: grid; }\n  .content-side .note-view {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin; }\n    .content-side .note-view .add-note-button {\n      grid-area: 1 / 1 / 2 / 4;\n      /* background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0); */ }\n    .content-side .note-view .note {\n      place-self: center;\n      background-color: antiquewhite;\n      height: 200px;\n      width: 200px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA,0BAAI;AACJ,yBAAI;AACJ,2BAAI;AACJ,yBAAI;AAGJ;EACI,UAAU;EACV,SAAS,EAAA;;AAGb;EACI,aAAa;EACb,2BAA2B,EAAA;;AAG/B;EACI,wBAAwB;EACxB,aAAa;EACb,sBAAsB,EAAA;EAH1B;IAMQ,2BAA2B,EAAA;;AAInC;EACI,wBAAwB;EACxB,+BAA+B;EAC/B,aAAa;EACb,8BAA8B,EAAA;;AAKlC;EACI,aAAa;EACb,2BAA2B;EAC3B,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,0BAA2B;EAC3B,2BAA2B,EAAA;EAH/B;IAMQ,aAAa,EAAA;EANrB;IAUQ,aAAa;IACb,yCAAyC;IACzC,qCAAqC;IACrC,UAAU,EAAA;IAblB;MAgBY,wBAAwB;MAExB;;;;;;iDAXqC,EAiBC;IAxBlD;MA4BY,kBAAkB;MAClB,8BAA8B;MAC9B,aAAa;MACb,YAAY,EAAA","sourcesContent":["\n@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n\n// We have to use @import or @use  for SASS\n:root, body {\n    padding: 0;\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    background-color: pink;\n\n    .title {\n        font-size: calc(2rem + 5px);\n    }\n}\n\nmain {\n    grid-area: 2 / 1 / 3 / 2; \n    background-color: palegoldenrod;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    \n}\n\n.sidebar {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    border-right: 1px solid black;\n}\n\n.content-side {\n    display: grid;\n    grid-template-columns:  1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .todo-view {\n        display: grid;\n    }\n\n    .note-view {\n        display: grid;\n        grid-template-rows: repeat(auto-fit, 1fr);\n        grid-template-columns: repeat(3, 1fr);\n        gap: 1vmin;\n\n        .add-note-button {\n            grid-area: 1 / 1 / 2 / 4;\n\n            /* background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0); */\n        }\n\n        .note {\n            place-self: center;\n            background-color: antiquewhite;\n            height: 200px;\n            width: 200px;\n        }\n    }\n\n    \n}\n"],"sourceRoot":""}]);
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
    model.updateObserver('Note', model);
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
    console.log(`adiu`);

    const newProject = model.addProject()
    update()
    return newProject
  };
  const editProjectName = (e) => {
    console.log(e);
    if (e.key == "Enter") {
      e.preventDefault()
      const newName = e.target.form[0].value
      const oldName = e.target.form[1].value;
      console.log(newName, oldName);
      model.editProjectName(oldName, newName)
      update()
    }
  };
  const deleteProject = (e) => {
    console.log(e);
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
  const update = () => {
    model.updateObserver('ToDo', model);
  };
  const addTodo = () => {};
  const editTodo = () => {};
  const deleteTodo = () => {};
  const addTodoButton = () => {};
  const expandTodo = () => {};
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
    addTodoButton,
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
    const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, toolTypes)
    projectList.addItem(newProject);
    projCounter += 1;
    return newProject
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
      projCounter = 0
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
    noteContent.type = 'textarea';

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
    const contentSide = document.querySelector('div.todo-view');
    contentSide.appendChild(newNoteView);
    updateEventHandlers();
  };

  const instantiate = () => {
    const taskButton = document.querySelector('button.add-note-button');
    taskButton.addEventListener('click', addNoteView);
  };

  instantiate();

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

  

  const getParentNote = (e) => e.target.parentElement;
  const getNoteContents = (e, index) => getParentNote(e).children[index].textContent;


  const editProjectView = (e) => {
    e.preventDefault()
    const editProjectName = getNoteContents(e, 0);
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
    getParentNote(e).replaceChildren(projForm);
  };

  const addNewProjectView = (e) => {
    const newProj = controller.addProject()



  }

  const updateEventHandlers = () => {
    const switchProjects = document.querySelectorAll('.project-heading');
    switchProjects.forEach((project) => project.addEventListener('click', controller.switchProject));
    switchProjects.forEach((project) => project.addEventListener('contextmenu', editProjectView))
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
    const projView = document.querySelectorAll('.add-project-button, .project-list, .project-title');
    projView.forEach((node) => {
      node.remove();
    });
    const newProjView = buildView(projectNames);
    const sideBar = document.querySelector('.sidebar');
    sideBar.appendChild(newProjView);

    const addProjectButton = document.createElement('button')
    addProjectButton.textContent = "Add Project"
    addProjectButton.className = "add-project-button"
    addProjectButton.addEventListener("click", addNewProjectView)
    sideBar.appendChild(addProjectButton)
    updateEventHandlers();
    const currentNameHeader = document.querySelector('.show-name');
    currentNameHeader.textContent = model.getCurrentProjectName()
    
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

  const buildView = (givenTodoList) => {
    const newTodoView = document.createElement('div');
    newTodoView.className = 'todo-view';
    givenTodoList.forEach((todo) => {
      const [todoName, todoDescription, todoDueDate, todoPriority] = todo.parameters;
      const tdHolder = document.createElement('div');
      tdHolder.className = 'todo';

      const tdNameHeader = document.createElement('h3');
      tdNameHeader.textContent = todoName;
      tdHolder.appendChild(tdNameHeader);

      const tdDescription = document.createElement('p');
      tdDescription.textContent = todoDescription;
      tdHolder.appendChild(tdDescription);

      const tdDueDate = document.createElement('p');
      tdDueDate.textContent = todoDueDate;
      tdHolder.appendChild(tdDueDate);

      const tdPriority = document.createElement('p');
      tdPriority.textContent = todoPriority;
      tdHolder.appendChild(tdPriority);

      newTodoView.appendChild(tdHolder);
    });
    return newTodoView.cloneNode(true);
  };

  const updateView = (model) => {
    const todoContainer = model.getTypeNameList('ToDo');
    const todoList = todoContainer.itemList;
    const newTodoView = buildView(todoList);
    const todoView = document.querySelector('div.todo-view');
    const contentSide = document.querySelector('div.content-side');
    // contentSide.replaceChild(todoView, newTodoView);
  };

  return { get observerName() { return observerName; }, buildView, updateView };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSXpCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDckc1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXLHFCQUFxQixzQkFBc0I7QUFDdEQ7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7O1VDN0N4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ1U7QUFDWjtBQUNaOztBQUV0QjtBQUNBLGdCQUFnQiwwREFBSztBQUNyQixxQkFBcUIsK0RBQVU7QUFDL0IsRUFBRSx5REFBSTtBQUNOOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9ub3RlLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL2l0ZW0tY29udGFpbmVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvbm90ZS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9ub3Rlcy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy90b2RvLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkB1c2UgJ3N0eWxlcy9faGVhZGVyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fbm90ZXMuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL19zaWRlYmFyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fdG9kb3Muc2Nzcyc7XFxuOnJvb3QsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjsgfVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgNXB4KTsgfVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdvbGRlbnJvZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IH1cXG5cXG4uY29udGVudC1zaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgfVxcbiAgLmNvbnRlbnQtc2lkZSAudG9kby12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfVxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgICAvKiBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIDM1cHggcmdiKDgsIDAsIDApOyAqLyB9XFxuICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSB7XFxuICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgIHdpZHRoOiAyMDBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBLDBCQUFJO0FBQ0oseUJBQUk7QUFDSiwyQkFBSTtBQUNKLHlCQUFJO0FBR0o7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFIMUI7SUFNUSwyQkFBMkIsRUFBQTs7QUFJbkM7RUFDSSx3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFLbEM7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGFBQWE7RUFDYiwwQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7RUFIL0I7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFVUSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyxVQUFVLEVBQUE7SUFibEI7TUFnQlksd0JBQXdCO01BRXhCOzs7Ozs7aURBWHFDLEVBaUJDO0lBeEJsRDtNQTRCWSxrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLGFBQWE7TUFDYixZQUFZLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuQHVzZSAnc3R5bGVzL19oZWFkZXIuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL19ub3Rlcy5zY3NzJztcXG5AdXNlICdzdHlsZXMvX3NpZGViYXIuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL190b2Rvcy5zY3NzJztcXG5cXG4vLyBXZSBoYXZlIHRvIHVzZSBAaW1wb3J0IG9yIEB1c2UgIGZvciBTQVNTXFxuOnJvb3QsIGJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgNXB4KTtcXG4gICAgfVxcbn1cXG5cXG5tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyOyBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdvbGRlbnJvZDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcblxcbiAgICBcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY29udGVudC1zaWRlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuXFxuICAgIC50b2RvLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcblxcbiAgICAubm90ZS12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgMWZyKTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgICAgICBnYXA6IDF2bWluO1xcblxcbiAgICAgICAgLmFkZC1ub3RlLWJ1dHRvbiB7XFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcblxcbiAgICAgICAgICAgIC8qIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAgMzVweCByZ2IoOCwgMCwgMCk7ICovXFxuICAgICAgICB9XFxuXFxuICAgICAgICAubm90ZSB7XFxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE5vdGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbm90ZS1jb250cm9sbGVyJztcbmltcG9ydCBQcm9qZWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlcic7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXInO1xuXG5jb25zdCBDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgLy8gV2hlbiB5b3UgY2xpY2sgb24gYSBidXR0b24gKChkZWZpbmVkIGJ5IGluc3RhbnRpYXRvcikpLCBpdCBjYWxscyBhIE1lbnUgT3BlbmVyLlxuICAvLyBXaGVuIHlvdSBzYXZlIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGF0IGJ1dHRvbiwgaXQgY2FsbHMgYSBtb2RlbCB1cGRhdGVyLlxuICAvLyBUaGVuLCB5b3Ugc2F2ZSBpdCB3aXRoIHRoZSB2aWV3IHVwZGF0ZXIuXG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3Qgbm90ZUNvbnRyb2xsZXIgPSBOb3RlQ29udHJvbGxlcihtb2RlbCk7XG4gIGNvbnN0IHRvZG9Db250cm9sbGVyID0gVG9kb0NvbnRyb2xsZXIobW9kZWwpO1xuICBjb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IFByb2plY3RDb250cm9sbGVyKG1vZGVsKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGdldCBub3RlQ29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBub3RlQ29udHJvbGxlcjtcbiAgICB9LFxuICAgIGdldCB0b2RvQ29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiB0b2RvQ29udHJvbGxlcjtcbiAgICB9LFxuICAgIGdldCBwcm9qZWN0Q29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0Q29udHJvbGxlcjtcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XG4iLCJjb25zdCBOb3RlQ29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcblxuICBjb25zdCBnZXROb3RlTmFtZSA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBtb2RlbC51cGRhdGVPYnNlcnZlcignTm90ZScsIG1vZGVsKTtcbiAgfTtcbiAgY29uc3QgYWRkTm90ZSA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbZS50YXJnZXQuZm9ybVswXS52YWx1ZSwgZS50YXJnZXQuZm9ybVsxXS52YWx1ZV07XG4gICAgbW9kZWwuYWRkVG9vbCgnTm90ZScsIHByb3BlcnRpZXMpO1xuICAgIHVwZGF0ZSgpO1xuICB9O1xuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtlLnRhcmdldC5mb3JtWzBdLnZhbHVlLCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlXTtcbiAgICBjb25zdCBub3RlTmFtZSA9IGUudGFyZ2V0LmZvcm1bM10udmFsdWU7XG4gICAgbW9kZWwuZWRpdFRvb2woJ05vdGUnLCBub3RlTmFtZSwgcHJvcGVydGllcyk7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ05vdGUnLCBtb2RlbCk7XG4gICAgdXBkYXRlKCk7XG4gIH07XG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5vdGVOYW1lID0gZ2V0Tm90ZU5hbWUoZSk7XG4gICAgbW9kZWwuZGVsZXRlVG9vbCgnTm90ZScsIG5vdGVOYW1lKTtcbiAgICB1cGRhdGUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGFkZE5vdGUsXG4gICAgZWRpdE5vdGUsXG4gICAgZGVsZXRlTm90ZSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBOb3RlQ29udHJvbGxlcjtcbiIsImNvbnN0IFByb2plY3RDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ1Byb2plY3QnLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYGFkaXVgKTtcblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBtb2RlbC5hZGRQcm9qZWN0KClcbiAgICB1cGRhdGUoKVxuICAgIHJldHVybiBuZXdQcm9qZWN0XG4gIH07XG4gIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBjb25zdCBuZXdOYW1lID0gZS50YXJnZXQuZm9ybVswXS52YWx1ZVxuICAgICAgY29uc3Qgb2xkTmFtZSA9IGUudGFyZ2V0LmZvcm1bMV0udmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyhuZXdOYW1lLCBvbGROYW1lKTtcbiAgICAgIG1vZGVsLmVkaXRQcm9qZWN0TmFtZShvbGROYW1lLCBuZXdOYW1lKVxuICAgICAgdXBkYXRlKClcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKG1vZGVsKTtcbiAgfTtcbiAgY29uc3Qgc3dpdGNoUHJvamVjdCA9IChlKSA9PiB7XG4gICAgbW9kZWwuc3dpdGNoUHJvamVjdChlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKG1vZGVsKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0TmFtZSxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIHN3aXRjaFByb2plY3QsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRyb2xsZXI7XG4iLCJjb25zdCBUb2RvQ29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKCdUb0RvJywgbW9kZWwpO1xuICB9O1xuICBjb25zdCBhZGRUb2RvID0gKCkgPT4ge307XG4gIGNvbnN0IGVkaXRUb2RvID0gKCkgPT4ge307XG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoKSA9PiB7fTtcbiAgY29uc3QgYWRkVG9kb0J1dHRvbiA9ICgpID0+IHt9O1xuICBjb25zdCBleHBhbmRUb2RvID0gKCkgPT4ge307XG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkVG9kbyxcbiAgICBlZGl0VG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICAgIGFkZFRvZG9CdXR0b24sXG4gICAgZXhwYW5kVG9kbyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlcjtcbiIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4vbW9kZWxzL2l0ZW0tY29udGFpbmVyJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vbW9kZWxzL3Byb2plY3QnO1xuaW1wb3J0IE5vdGUgZnJvbSAnLi9tb2RlbHMvbm90ZSc7XG5pbXBvcnQgVG9EbyBmcm9tICcuL21vZGVscy90b2RvJztcblxuLy8gQ3JlYXRlIEEgQ29udGFpbmVyIG9mIEFsbCBQcm9qZWN0cy5cbmZ1bmN0aW9uIE1vZGVsKCkge1xuICBjb25zdCB0b29sVHlwZXMgPSBbJ05vdGUnLCAnVG9EbyddO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEl0ZW1Db250YWluZXIoJ1Byb2plY3QnKTtcbiAgbGV0IGN1clByb2pJbmRleCA9IDA7IC8vIGluZGV4IG9mIHRoZSBjdXJyZW50UHJvamVjdFxuICBsZXQgcHJvakNvdW50ZXIgPSAwO1xuICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3QgYWRkT2JzZXJ2ZXJzID0gKHZpZXdzKSA9PiB7XG4gICAgdmlld3MuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlcnMobW9kZWwpIHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcobW9kZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlT2JzZXJ2ZXIgPSAoZ2l2ZW5PYnNlcnZlck5hbWUsIG1vZGVsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBvYnNlcnZlcnMuZmluZEluZGV4KChvYnNlcnZlcikgPT4gb2JzZXJ2ZXIub2JzZXJ2ZXJOYW1lID09PSBnaXZlbk9ic2VydmVyTmFtZSk7XG4gICAgb2JzZXJ2ZXJzW2luZGV4XS51cGRhdGVWaWV3KG1vZGVsKTtcbiAgfTtcbiAgLy8gVG8gRGlzcGxheSB0aGUgQ3VycmVudCBQcm9qZWN0IG9udG8gdGhlIFNjcmVlblxuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9ICgpID0+IGdldEN1cnJlbnRQcm9qZWN0KCkubmFtZTtcbiAgLy8gVG8gQWRkIGEgcHJvamVjdCB0byB0aGUgdGFiIChkbyBub3Qgc3dpdGNoIHRvIGl0LilcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSA9IGBQcm9qZWN0ICR7cHJvakNvdW50ZXJ9YCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KHByb2plY3ROYW1lLCB0b29sVHlwZXMpXG4gICAgcHJvamVjdExpc3QuYWRkSXRlbShuZXdQcm9qZWN0KTtcbiAgICBwcm9qQ291bnRlciArPSAxO1xuICAgIHJldHVybiBuZXdQcm9qZWN0XG4gIH07XG5cbiAgLy8gVG8gR2V0IGEgbGlzdCBvZiBhbGwgeCdzIGFuZCB5J3NcbiAgY29uc3QgZ2V0VHlwZU5hbWVMaXN0ID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBjdXJyID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICByZXR1cm4gY3Vyci5nZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdExpc3QuZ2V0SXRlbUJ5TmFtZShwcm9qZWN0TmFtZSk7XG5cbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4QnlOYW1lID0gKHByb2plY3ROYW1lKSA9PiBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gIC8vIFRvIGRlbGV0ZSBhIHByb2plY3RcbiAgY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2pJbmRleCA9IGdldFByb2plY3RJbmRleEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdExpc3QucmVtb3ZlSXRlbShwcm9qSW5kZXgpO1xuICAgIGlmIChjdXJQcm9qSW5kZXggPT09IHByb2pJbmRleCkge1xuICAgICAgY3VyUHJvakluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcHJvakNvdW50ZXIgPSAwXG4gICAgICBhZGRQcm9qZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSBhbnkgcHJvamVjdCdzIG5hbWVcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKG9yaWdpbmFsTmFtZSwgbmV3UHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBlZGl0UHJvaiA9IGdldFByb2plY3RCeU5hbWUob3JpZ2luYWxOYW1lKTtcbiAgICBlZGl0UHJvai5uYW1lID0gbmV3UHJvamVjdE5hbWU7XG4gIH07XG5cbiAgLy8gV2hlbiBjbGlja2VkLCBzd2l0Y2ggUHJvamVjdC5cbiAgY29uc3Qgc3dpdGNoUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgY3VyUHJvakluZGV4ID0gcHJvamVjdExpc3QuZ2V0SXRlbUluZGV4QnlOYW1lKG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGFkZCBhIG5ldyBUb29sXG4gIGNvbnN0IGFkZFRvb2wgPSAodG9vbFR5cGUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBsZXQgbmV3VG9vbDtcbiAgICBpZiAodG9vbFR5cGUgPT09ICdOb3RlJykge1xuICAgICAgbmV3VG9vbCA9IE5vdGUocGFyYW1ldGVycyk7XG4gICAgfSBlbHNlIGlmICh0b29sVHlwZSA9PT0gJ1RvRG8nKSB7XG4gICAgICBuZXdUb29sID0gVG9EbyhwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgY29uc3QgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gICAgY3VyUHJvamVjdC5hZGRJdGVtKHRvb2xUeXBlLCBuZXdUb29sKTtcbiAgfTtcblxuICAvLyBUbyBkZWxldGUgYSB0b29sXG4gIGNvbnN0IGRlbGV0ZVRvb2wgPSAodG9vbFR5cGUsIG5hbWUpID0+IHtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmRlbGV0ZUl0ZW0odG9vbFR5cGUsIG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSB0aGUgY29udGVudHMgb2YgYSB0b29sXG4gIGNvbnN0IGVkaXRUb29sID0gKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgY3VyUHJvaiA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY3VyUHJvai5lZGl0SXRlbSh0b29sVHlwZSwgbmFtZSwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgYWRkUHJvamVjdCgpOyAvLyBpbml0aWFsaXplcyB0aGUgcHJvamVjdFxuICBhZGRQcm9qZWN0KCk7XG4gIHJldHVybiB7XG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0Lml0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWVzKCkge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5pdGVtTGlzdDtcbiAgICAgIHJldHVybiBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QubmFtZSk7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldEN1cnJlbnRQcm9qZWN0TmFtZSxcbiAgICBnZXRUeXBlTmFtZUxpc3QsXG4gICAgc3dpdGNoUHJvamVjdCxcbiAgICBhZGRUb29sLFxuICAgIGRlbGV0ZVRvb2wsXG4gICAgZWRpdFRvb2wsXG4gICAgdXBkYXRlT2JzZXJ2ZXJzLFxuICAgIGFkZE9ic2VydmVycyxcbiAgICB1cGRhdGVPYnNlcnZlcixcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kZWw7XG4iLCIvLyBZb3UgY2FuIGNvbnRhaW4gT05FIHR5cGUgb2Ygb2JqZWN0IChub3RlcywgdG8tZG9zLCBldGMpXG5jb25zdCBJdGVtQ29udGFpbmVyID0gKGtpbmQpID0+IHtcbiAgY29uc3QgaXRlbVR5cGUgPSBraW5kO1xuICBjb25zdCBpdGVtTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAoaXRlbVRvQWRkKSA9PiB7XG4gICAgaXRlbUxpc3QucHVzaChpdGVtVG9BZGQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSAocmVtb3ZlSW5kZXgpID0+IHtcbiAgICBpdGVtTGlzdC5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICB9O1xuXG4gIGNvbnN0IGdldEl0ZW1JbmRleEJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gaXRlbUxpc3QuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgIHJldHVybiBpdGVtSW5kZXg7XG4gIH07XG4gIGNvbnN0IGdldEl0ZW1CeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGdldEl0ZW1JbmRleEJ5TmFtZShuYW1lKTtcbiAgICByZXR1cm4gaXRlbUxpc3RbaXRlbUluZGV4XTtcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBpdGVtTGlzdC5sZW5ndGg7XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAoZWRpdEluZGV4LCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgaXRlbUxpc3RbZWRpdEluZGV4XS5wYXJhbWV0ZXJzID0gcGFyYW1ldGVycztcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBpdGVtTGlzdCgpIHtcbiAgICAgIHJldHVybiBpdGVtTGlzdDtcbiAgICB9LFxuICAgIGdldCBpdGVtVHlwZSgpIHtcbiAgICAgIHJldHVybiBpdGVtVHlwZTtcbiAgICB9LFxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICByZXR1cm4gaXRlbUxpc3QubGVuZ3RoO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRJdGVtQnlOYW1lLFxuICAgIGdldEl0ZW1JbmRleEJ5TmFtZSxcbiAgICBlZGl0SXRlbSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Db250YWluZXI7XG4iLCIvLyBNb2RlbCBmb3IgYSBOb3RlXG5jb25zdCBOb3RlID0gKFtnaXZlbk5hbWUsIGNvbnRlbnRzXSkgPT4ge1xuICBsZXQgbmFtZSA9IGdpdmVuTmFtZTtcbiAgbGV0IHRleHRDb250ZW50ID0gY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgdGV4dENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQgdGV4dENvbnRlbnQobmV3VGV4dCkge1xuICAgICAgdGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05vdGVOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3Tm90ZU5hbWU7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgdGV4dENvbnRlbnRdO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW25ld05hbWUsIG5ld0NvbnRlbnRzXSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld0NvbnRlbnRzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIiwiLy8gTW9kZWwgZm9yIGEgUHJvamVjdCAtPiBQcm9qZWN0cyBjYW4gaG9sZCBub3RlcyBhbmQgdG8tZG9zXG4vLyBtYWtlcyBTZXBhcmF0ZSBjb250YWluZXJzIGZvciBub3RlcyBhbmQgdG8tZG9zIDogd2lsbCBoYXZlIHRvIGRvIHRoYXQgbXVsdGlscGUgdGltZXNcblxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9pdGVtLWNvbnRhaW5lcic7XG5cbmNvbnN0IFByb2plY3QgPSAoZ2l2ZW5OYW1lLCB0eXBlTGlzdCkgPT4ge1xuICAvLyBBIE1hcCBvZiBDb250YWluZXJzXG4gIGxldCBuYW1lID0gZ2l2ZW5OYW1lO1xuICBjb25zdCBjb250YWluZXJNYXAgPSBuZXcgTWFwKCk7XG4gIHR5cGVMaXN0LmZvckVhY2goKHR5cGUpID0+IHtcbiAgICBjb250YWluZXJNYXAuc2V0KHR5cGUsIEl0ZW1Db250YWluZXIodHlwZSkpO1xuICB9KTtcblxuICBjb25zdCBnZXRUeXBlTmFtZUxpc3QgPSAodHlwZSkgPT4gY29udGFpbmVyTWFwLmdldCh0eXBlKTtcblxuICBjb25zdCBhZGRJdGVtID0gKHR5cGUsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIHR5cGVDb250YWluZXIuYWRkSXRlbShpdGVtKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVJdGVtID0gKHR5cGUsIGl0ZW1OYW1lKSA9PiB7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGdldFR5cGVOYW1lTGlzdCh0eXBlKTtcbiAgICBjb25zdCBkZWxldGVJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLnJlbW92ZUl0ZW0oZGVsZXRlSW5kZXgpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKHR5cGUsIGl0ZW1OYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGdldFR5cGVOYW1lTGlzdCh0eXBlKTtcbiAgICBjb25zdCBlZGl0SW5kZXggPSB0eXBlQ29udGFpbmVyLmdldEl0ZW1JbmRleEJ5TmFtZShpdGVtTmFtZSk7XG4gICAgdHlwZUNvbnRhaW5lci5lZGl0SXRlbShlZGl0SW5kZXgsIHBhcmFtZXRlcnMpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05hbWUpIHtcbiAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICBkZWxldGVJdGVtLFxuICAgIGVkaXRJdGVtLFxuICAgIGdldFR5cGVOYW1lTGlzdCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCIvLyBNb2RlbCBmb3IgYSBUby1Eb1xuXG5jb25zdCBUb0RvID0gKFtuZXdOYW1lLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHldKSA9PiB7XG4gIGxldCBuYW1lID0gbmV3TmFtZTsgLy8gUGxhY2Vob2xkZXIgd2lsbCBiZSBpbiBIVE1MXG4gIGxldCBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uOyAvLyBQbGFjZWhvbGRlciB3aWxsIGJlIGluIEhUTUxcbiAgbGV0IGR1ZURhdGUgPSBuZXdEdWVEYXRlOyAvLyB3aWxsIGltcGxlbWVudCBhIHRpbWUgbGlicmFyeSBsYXRlci5cbiAgbGV0IHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7IC8vIG1heWJlIGFuIEVOVU0gdGhhdCByZXByZXNlbnRzIHZhcmlhYmxlcyBieSBwcmlvcml0eVxuXG4gIHJldHVybiB7XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKGdpdmVuTmFtZSkge1xuICAgICAgbmFtZSA9IGdpdmVuTmFtZTtcbiAgICB9LFxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIHNldCBkZXNjcmlwdGlvbihnaXZlbkRlc2NyaXB0aW9uKSB7XG4gICAgICBkZXNjcmlwdGlvbiA9IGdpdmVuRGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiBkdWVEYXRlO1xuICAgIH0sXG4gICAgc2V0IGR1ZURhdGUoZ2l2ZW5EYXRlKSB7XG4gICAgICBkdWVEYXRlID0gZ2l2ZW5EYXRlO1xuICAgIH0sXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgIH0sXG4gICAgc2V0IHByaW9yaXR5KGdpdmVuUHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eTtcbiAgICB9LFxuICAgIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgICAgcmV0dXJuIFtuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHldO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW2dpdmVuTmFtZSwgZ2l2ZW5EZXNjcmlwdGlvbiwgZ2l2ZW5EYXRlLCBnaXZlblByaW9yaXR5XSkge1xuICAgICAgbmFtZSA9IGdpdmVuTmFtZTtcbiAgICAgIGRlc2NyaXB0aW9uID0gZ2l2ZW5EZXNjcmlwdGlvbjtcbiAgICAgIGR1ZURhdGUgPSBnaXZlbkRhdGU7XG4gICAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHk7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvRG87XG4iLCJpbXBvcnQgUHJvamVjdHNWaWV3IGZyb20gJy4vdmlld3MvcHJvamVjdHMtdmlldyc7XG5pbXBvcnQgVG9kb1ZpZXcgZnJvbSAnLi92aWV3cy90b2RvLXZpZXcnO1xuaW1wb3J0IE5vdGVzVmlldyBmcm9tICcuL3ZpZXdzL25vdGVzLXZpZXcnO1xuXG5jb25zdCBWaWV3ID0gKGNvbnRyb2xsZXIpID0+IHtcbiAgLy8gVXBkYXRlcyB2aWV3IGZyb20gdGhlIG1vZGVsLlxuICBjb25zdCB7IG1vZGVsIH0gPSBjb250cm9sbGVyO1xuICAvLyBWSUVXIFVQREFURVJTXG4gIGNvbnN0IHByb2pWaWV3ID0gUHJvamVjdHNWaWV3KGNvbnRyb2xsZXIucHJvamVjdENvbnRyb2xsZXIpO1xuICBjb25zdCBub3Rlc1ZpZXcgPSBOb3Rlc1ZpZXcoY29udHJvbGxlci5ub3RlQ29udHJvbGxlcik7XG4gIGNvbnN0IHRvZG9WaWV3ID0gVG9kb1ZpZXcoY29udHJvbGxlci50b2RvQ29udHJvbGxlcik7XG4gIG1vZGVsLmFkZE9ic2VydmVycyhbcHJvalZpZXcsIHRvZG9WaWV3LCBub3Rlc1ZpZXddKTtcbiAgbW9kZWwudXBkYXRlT2JzZXJ2ZXJzKGNvbnRyb2xsZXIubW9kZWwpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiIsImZ1bmN0aW9uIE5vdGVzVmlldyhub3RlQ29udHJvbGxlcikge1xuICBjb25zdCBjb250cm9sbGVyID0gbm90ZUNvbnRyb2xsZXI7XG5cbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ05vdGUnO1xuXG4gIGNvbnN0IGdldFBhcmVudE5vdGUgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0Tm90ZUNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnROb3RlKGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcbiAgY29uc3QgYWRkTm90ZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVXaW5kb3cuY2xhc3NOYW1lID0gJ2FkZC1ub3RlLXdpbmRvdyc7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBjb25zdCBub3RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZU5hbWUudHlwZSA9ICd0ZXh0JztcblxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQ29udGVudC50eXBlID0gJ3RleHRhcmVhJztcblxuICAgIGNvbnN0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIG5vdGVCdXR0b24udmFsdWUgPSAnQWRkJztcblxuICAgIG5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmFkZE5vdGUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVOYW1lKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQ29udGVudCk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUJ1dHRvbik7XG4gICAgbm90ZVdpbmRvdy5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm90ZS12aWV3Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVXaW5kb3cpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXROb3RlVmlldyA9IChlKSA9PiB7XG4gICAgY29uc3QgZWRpdE5vdGVOYW1lID0gZ2V0Tm90ZUNvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IGVkaXROb3RlQ29udGVudCA9IGdldE5vdGVDb250ZW50cyhlLCAxKTtcbiAgICBjb25zdCBub3RlV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbm90ZVdpbmRvdy5jbGFzc05hbWUgPSAnZWRpdC1ub3RlLXdpbmRvdyc7XG4gICAgY29uc3Qgbm90ZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cbiAgICBjb25zdCBub3RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZU5hbWUudHlwZSA9ICd0ZXh0JztcbiAgICBub3RlTmFtZS52YWx1ZSA9IGVkaXROb3RlTmFtZTtcblxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQ29udGVudC50eXBlID0gJ3RleHRhcmVhJztcbiAgICBub3RlQ29udGVudC52YWx1ZSA9IGVkaXROb3RlQ29udGVudDtcblxuICAgIGNvbnN0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIG5vdGVCdXR0b24udmFsdWUgPSAnZWRpdCc7XG4gICAgbm90ZUJ1dHRvbi5jbGFzc05hbWUgPSAndHJ1ZUVkaXRCdXR0b24nO1xuXG4gICAgY29uc3QgaGlkZGVuT3JpZ2luYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZGRlbk9yaWdpbmFsLnR5cGUgPSAnaGlkZGVuJztcbiAgICBoaWRkZW5PcmlnaW5hbC52YWx1ZSA9IGVkaXROb3RlTmFtZTtcblxuICAgIG5vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmVkaXROb3RlKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlTmFtZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKGhpZGRlbk9yaWdpbmFsKTtcbiAgICBub3RlV2luZG93LmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcbiAgICBnZXRQYXJlbnROb3RlKGUpLnJlcGxhY2VDaGlsZHJlbihub3RlRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlRXZlbnRIYW5kbGVycyA9ICgpID0+IHtcbiAgICBjb25zdCBlZGl0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LW5vdGUtYnV0dG9uJyk7XG4gICAgY29uc3QgZGVsZXRlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtbm90ZS1idXR0b24nKTtcbiAgICBkZWxldGVCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5kZWxldGVOb3RlKSk7XG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0Tm90ZVZpZXcpKTtcbiAgfTtcblxuICBjb25zdCBidWlsZFZpZXcgPSAoZ2l2ZW5Ob3RlTGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld05vdGVWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Tm90ZVZpZXcuY2xhc3NOYW1lID0gJ25vdGUtdmlldyc7XG4gICAgZ2l2ZW5Ob3RlTGlzdC5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBjb25zdCBbbm90ZU5hbWUsIG5vdGVDb250ZW50XSA9IG5vdGUucGFyYW1ldGVycztcbiAgICAgIGNvbnN0IG5vdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICBub3RlSG9sZGVyLmNsYXNzTmFtZSA9ICdub3RlJztcbiAgICAgIGNvbnN0IG5vdGVOYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIG5vdGVOYW1lSGVhZGVyLnRleHRDb250ZW50ID0gbm90ZU5hbWU7XG4gICAgICBjb25zdCBub3RlTmFtZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBub3RlTmFtZUNvbnRlbnQudGV4dENvbnRlbnQgPSBub3RlQ29udGVudDtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgZWRpdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9ICdlZGl0LW5vdGUtYnV0dG9uJztcbiAgICAgIGVkaXRCdXR0b24udmFsdWUgPSAnZWRpdCc7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBkZWxldGVCdXR0b24udmFsdWUgPSAnZGVsZXRlJztcbiAgICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gJ2RlbGV0ZS1ub3RlLWJ1dHRvbic7XG5cbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQobm90ZU5hbWVIZWFkZXIpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUNvbnRlbnQpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgIG5ld05vdGVWaWV3LmFwcGVuZENoaWxkKG5vdGVIb2xkZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdOb3RlVmlldy5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVmlldyA9IChtb2RlbCkgPT4ge1xuICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBtb2RlbC5nZXRUeXBlTmFtZUxpc3QoJ05vdGUnKTtcbiAgICBjb25zdCBub3RlTGlzdCA9IG5vdGVDb250YWluZXIuaXRlbUxpc3Q7XG4gICAgY29uc3Qgbm90ZVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubm90ZSwgLmFkZC1ub3RlLXdpbmRvdycpO1xuICAgIG5vdGVWaWV3LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3Tm90ZVZpZXcgPSBidWlsZFZpZXcobm90ZUxpc3QpO1xuICAgIGNvbnN0IGNvbnRlbnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LnRvZG8tdmlldycpO1xuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKG5ld05vdGVWaWV3KTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG5cbiAgY29uc3QgaW5zdGFudGlhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGQtbm90ZS1idXR0b24nKTtcbiAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTm90ZVZpZXcpO1xuICB9O1xuXG4gIGluc3RhbnRpYXRlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgb2JzZXJ2ZXJOYW1lKCkge1xuICAgICAgcmV0dXJuIG9ic2VydmVyTmFtZTtcbiAgICB9LFxuICAgIGdldCBjb250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBidWlsZFZpZXcsXG4gICAgdXBkYXRlVmlldyxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVzVmlldztcbiIsIlxuZnVuY3Rpb24gUHJvamVjdHNWaWV3KHByb2plY3RDb250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBwcm9qZWN0Q29udHJvbGxlcjtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ1Byb2plY3QnO1xuXG4gIFxuXG4gIGNvbnN0IGdldFBhcmVudE5vdGUgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0Tm90ZUNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnROb3RlKGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcblxuXG4gIGNvbnN0IGVkaXRQcm9qZWN0VmlldyA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gZ2V0Tm90ZUNvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IHByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0V2luZG93LmNsYXNzTmFtZSA9ICdlZGl0LXByb2otd2luZG93JztcbiAgICBjb25zdCBwcm9qRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHByb2pOYW1lLnZhbHVlID0gZWRpdFByb2plY3ROYW1lO1xuXG4gICAgY29uc3QgaGlkZGVuT3JpZ2luYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZGRlbk9yaWdpbmFsLnR5cGUgPSAnaGlkZGVuJztcbiAgICBoaWRkZW5PcmlnaW5hbC52YWx1ZSA9IGVkaXRQcm9qZWN0TmFtZTtcblxuXG5cbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY29udHJvbGxlci5lZGl0UHJvamVjdE5hbWUpO1xuICAgIHByb2pGb3JtLmFwcGVuZENoaWxkKHByb2pOYW1lKTtcbiAgICBwcm9qRm9ybS5hcHBlbmRDaGlsZChoaWRkZW5PcmlnaW5hbCk7XG4gICAgcHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChwcm9qRm9ybSk7XG4gICAgZ2V0UGFyZW50Tm90ZShlKS5yZXBsYWNlQ2hpbGRyZW4ocHJvakZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3RWaWV3ID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qID0gY29udHJvbGxlci5hZGRQcm9qZWN0KClcblxuXG5cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3dpdGNoUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1oZWFkaW5nJyk7XG4gICAgc3dpdGNoUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuc3dpdGNoUHJvamVjdCkpO1xuICAgIHN3aXRjaFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBlZGl0UHJvamVjdFZpZXcpKVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGRlbGV0ZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmRlbGV0ZVByb2plY3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld1Byb2plY3RMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3UHJvamVjdExpc3QuY2xhc3NOYW1lID0gJ3Byb2plY3QtbGlzdCc7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGl0bGUnO1xuICAgICAgY29uc3QgbmV3TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBuZXdOYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWhlYWRpbmcnO1xuICAgICAgbmV3TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3ROYW1lO1xuICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnWCc7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUtcHJvamVjdC1idXR0b24nO1xuICAgICAgbmV3TGlzdC5hcHBlbmRDaGlsZChuZXdOYW1lKTtcbiAgICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICBuZXdQcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0KTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdExpc3QuY2xvbmVOb2RlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAobW9kZWwpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBtb2RlbC5uYW1lcztcbiAgICBjb25zdCBwcm9qVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGQtcHJvamVjdC1idXR0b24sIC5wcm9qZWN0LWxpc3QsIC5wcm9qZWN0LXRpdGxlJyk7XG4gICAgcHJvalZpZXcuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdQcm9qVmlldyA9IGJ1aWxkVmlldyhwcm9qZWN0TmFtZXMpO1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQobmV3UHJvalZpZXcpO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWRkUHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIlxuICAgIGFkZFByb2plY3RCdXR0b24uY2xhc3NOYW1lID0gXCJhZGQtcHJvamVjdC1idXR0b25cIlxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5ld1Byb2plY3RWaWV3KVxuICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbilcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gICAgY29uc3QgY3VycmVudE5hbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1uYW1lJyk7XG4gICAgY3VycmVudE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBtb2RlbC5nZXRDdXJyZW50UHJvamVjdE5hbWUoKVxuICAgIFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG9ic2VydmVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck5hbWU7XG4gICAgfSxcbiAgICBidWlsZFZpZXcsXG4gICAgdXBkYXRlVmlldyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNWaWV3O1xuIiwiZnVuY3Rpb24gVG9kb1ZpZXcodG9kb0NvbnRyb2xsZXIpIHtcbiAgY29uc3QgY29udHJvbGxlciA9IHRvZG9Db250cm9sbGVyO1xuICBjb25zdCBvYnNlcnZlck5hbWUgPSAnVG9Ebyc7XG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKGdpdmVuVG9kb0xpc3QpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9WaWV3LmNsYXNzTmFtZSA9ICd0b2RvLXZpZXcnO1xuICAgIGdpdmVuVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgW3RvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHldID0gdG9kby5wYXJhbWV0ZXJzO1xuICAgICAgY29uc3QgdGRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRkSG9sZGVyLmNsYXNzTmFtZSA9ICd0b2RvJztcblxuICAgICAgY29uc3QgdGROYW1lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHRkTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IHRvZG9OYW1lO1xuICAgICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGROYW1lSGVhZGVyKTtcblxuICAgICAgY29uc3QgdGREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHRkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvRGVzY3JpcHRpb247XG4gICAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZERlc2NyaXB0aW9uKTtcblxuICAgICAgY29uc3QgdGREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGREdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0R1ZURhdGU7XG4gICAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZER1ZURhdGUpO1xuXG4gICAgICBjb25zdCB0ZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgdGRQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9Qcmlvcml0eTtcbiAgICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkUHJpb3JpdHkpO1xuXG4gICAgICBuZXdUb2RvVmlldy5hcHBlbmRDaGlsZCh0ZEhvbGRlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1RvZG9WaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdCgnVG9EbycpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0NvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGJ1aWxkVmlldyh0b2RvTGlzdCk7XG4gICAgY29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudG9kby12aWV3Jyk7XG4gICAgY29uc3QgY29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY29udGVudC1zaWRlJyk7XG4gICAgLy8gY29udGVudFNpZGUucmVwbGFjZUNoaWxkKHRvZG9WaWV3LCBuZXdUb2RvVmlldyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0IG9ic2VydmVyTmFtZSgpIHsgcmV0dXJuIG9ic2VydmVyTmFtZTsgfSwgYnVpbGRWaWV3LCB1cGRhdGVWaWV3IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9WaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQgVmlldyBmcm9tICcuL21vZHVsZXMvdmlldyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gTW9kZWwoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xsZXIobW9kZWwpO1xuICBWaWV3KGNvbnRyb2xsZXIpO1xufTtcblxubWFpbigpO1xuLy8gVG9kb3Ncbi8vIFByb2plY3RzXG4vLyBWaWV3IC8gVUlcbi8vIEJ1dHRvbiBpbnRlcmFjdHMgd2l0aCB0b29sc1xuLy8gUHJvamVjdHMgaW1wbGVtZW50IG5vdGVzIGFuZCB0by1kb3Ncbi8vIE5vdGVzIGFyZSBhbnkgdGV4dCAoUkVNRU1CRVIgVE8gU0FOSVRJWkUpXG4vLyBUbyBkb3MgYXJlIHRpdGxlLCAgZHVlIGRhdGUsIGNvbG9yL2ltcG9ydGFuY2Vcbi8vIEV4cGFuZGluZyAmIERlbGV0aW5nIFRvIERvc1xuLy8gU3RvcmluZyBUbyBEbyBMaXN0cyBvbiBMb2NhbCBTdG9yYWdlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=