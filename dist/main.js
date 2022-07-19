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
___CSS_LOADER_EXPORT___.push([module.id, ":root, body {\n  padding: 0;\n  margin: 0; }\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 5fr; }\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  background-color: pink; }\n  header .title {\n    font-size: calc(2rem + 5px); }\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: palegoldenrod;\n  display: grid;\n  grid-template-columns: 1fr 4fr; }\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  border-right: 1px solid black; }\n\n.content-side {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr; }\n  .content-side .todo-view {\n    display: grid; }\n  .content-side .note-view {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin; }\n    .content-side .note-view .add-note-button {\n      grid-area: 1 / 1 / 2 / 4;\n      /*background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0);*/ }\n    .content-side .note-view .note {\n      place-self: center;\n      background-color: antiquewhite;\n      height: 200px;\n      width: 200px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;EACI,UAAU;EACV,SAAS,EAAA;;AAGb;EACI,aAAa;EACb,2BAA2B,EAAA;;AAG/B;EACI,wBAAwB;EACxB,aAAa;EACb,sBAAsB,EAAA;EAH1B;IAKQ,2BAA2B,EAAA;;AAInC;EACI,wBAAwB;EACxB,+BAA+B;EAC/B,aAAa;EACb,8BAA8B,EAAA;;AAKlC;EACI,aAAa;EACb,2BAA2B;EAC3B,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,0BAA2B;EAC3B,2BAA2B,EAAA;EAH/B;IAMQ,aAAa,EAAA;EANrB;IASQ,aAAa;IACb,yCAAyC;IACzC,qCAAqC;IACrC,UAAU,EAAA;IAZlB;MAcY,wBAAwB;MACxB;;;;;;gDALoC,EAWC;IArBjD;MAyBY,kBAAkB;MAClB,8BAA8B;MAC9B,aAAa;MACb,YAAY,EAAA","sourcesContent":["// We have to use @import or @use  for SASS\n:root, body {\n    padding: 0;\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    background-color: pink;\n    .title {\n        font-size: calc(2rem + 5px);\n    }\n}\n\nmain {\n    grid-area: 2 / 1 / 3 / 2; \n    background-color: palegoldenrod;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    \n}\n\n.sidebar {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    border-right: 1px solid black;\n}\n\n.content-side {\n    display: grid;\n    grid-template-columns:  1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .todo-view {\n        display: grid;\n    }\n    .note-view {\n        display: grid;\n        grid-template-rows: repeat(auto-fit, 1fr);\n        grid-template-columns: repeat(3, 1fr);\n        gap: 1vmin;\n        .add-note-button {\n            grid-area: 1 / 1 / 2 / 4;\n            /*background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0);*/\n        }\n\n        .note {\n            place-self: center;\n            background-color: antiquewhite;\n            height: 200px;\n            width: 200px;\n        }\n    }\n\n    \n}\n"],"sourceRoot":""}]);
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
  const noteController = (0,_controllers_note_controller__WEBPACK_IMPORTED_MODULE_0__["default"])(model)
  const todoController = (0,_controllers_todo_controller__WEBPACK_IMPORTED_MODULE_2__["default"])(model)
  const projectController = (0,_controllers_project_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(model)
  model.updateObservers(model)

  return {
    get model() {
      return model;
    },
    get noteController() {
      return noteController
    },
    get todoController() {
      return todoController
    },
    get projectController() {
      return projectController
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
  
  const getParentNote = (e) => {
    return e.target.parentElement
  }
  const getNoteName = (e) => {
    return e.target.parentElement.children[0].textContent
  }

  const update = () => {
    model.updateObserver("Note", model)
  }
  const addNote = (e) => {
    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value]
    model.addTool("Note", properties)
    update()
  }
  const editNote = (e) => {

    const properties = [e.target.form[0].value, e.target.form[1].value]
    const noteName = e.target.form[3].value
    model.editTool("Note", noteName, properties)
    model.updateObserver("Note", model)
    update()
  }
  const deleteNote = (e) => {

    const noteName = getNoteName(e)
    model.deleteTool("Note", noteName)
    update()
  }
  
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
  const addProject = () => {};
  const editProjectName = () => {};
  const deleteProject = () => {};
  const addProjectButton = () => {};

  return {
    get model() {
      return model;
    },
    addProject,
    editProjectName,
    deleteProject,
    addProjectButton,
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
    const model = givenModel
    const addTodo = () => {}
    const editTodo = () => {}
    const deleteTodo = () => {}
    const addTodoButton = () => {}
    const expandTodo = () => {}
    return {
        get model() {
          return model;
        },
        addTodo,
        editTodo,
        deleteTodo,
        addTodoButton,
        expandTodo
      };
} 
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
  const toolTypes = ["Note", "ToDo"];
  const projectList = (0,_models_item_container__WEBPACK_IMPORTED_MODULE_0__["default"])("Project");
  let curProjIndex = 0; // index of the currentProject
  let projCounter = 0;
  let observers = [];
  const addObservers = (views) => {
    views.forEach( (observer) => {
      observers.push(observer)
    })
  };

  function updateObservers(model) {
    observers.forEach((observer) => {
      observer.updateView(model);
    });
  };

  const updateObserver = (givenObserverName, model) => {
    const index = observers.findIndex(observer => observer.observerName === givenObserverName)
    console.log(model);
    observers[index].updateView(model)
    
  }
  // To Display the Current Project onto the Screen
  const getCurrentProject = () => projectList.itemList[curProjIndex];

  // To Add a project to the tab (do not switch to it.)
  const addProject = (projectName = `Project ${projCounter}`) => {
    projectList.addItem((0,_models_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, toolTypes));
    projCounter++;
  };

  // To Get a list of all x's and y's
  const getTypeNameList = (type) => {
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => {
    return projectList.getItemByName(projectName);
  };

  const getProjectIndexByName = (projectName) => {
    return projectList.getItemIndexByName(projectName);
  };

  // To delete a project
  const deleteProject = (projectName) => {
    const projIndex = getProjectIndexByName(projectName);
    projectList.removeItem(projIndex);
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
    if (toolType === "Note") {
      newTool = (0,_models_note__WEBPACK_IMPORTED_MODULE_2__["default"])(parameters);
    } else if (toolType === "ToDo") {
      newTool = (0,_models_todo__WEBPACK_IMPORTED_MODULE_3__["default"])(parameters);
    }
    const curProject = projectList.itemList[curProjIndex];
    curProject.addItem(toolType, newTool);
  };

  // To delete a tool
  const deleteTool = (toolType, name) => {
    console.log(name);
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  // To change the contents of a tool
  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    console.log("Model!");
    console.log(toolType);
    console.log(name);
    console.log(parameters);
    curProj.editItem(toolType, name, parameters);
  };

  addProject(); // initializes the project

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
    getTypeNameList,
    switchProject,
    addTool,
    deleteTool,
    editTool,
    updateObservers,
    addObservers,
    updateObserver
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
    console.log("Container!");
    console.log(editIndex);
    console.log(parameters);
    itemList[editIndex].parameters = parameters;
  };

  return {
    get itemList() {
      return itemList;
    },
    get itemType() {
      return itemType;
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
    console.log("Project!");
    console.log(type);
    console.log(itemName);
    console.log(parameters);
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

  // VIEW UPDATERS
  const projView = (0,_views_projects_view__WEBPACK_IMPORTED_MODULE_0__["default"])(controller.projectController)
  const notesView = (0,_views_notes_view__WEBPACK_IMPORTED_MODULE_2__["default"])(controller.noteController)
  console.log(notesView);
  const todoView = (0,_views_todo_view__WEBPACK_IMPORTED_MODULE_1__["default"])(controller.todoController)
  controller.model.addObservers([projView, todoView, notesView])
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

  const observerName = "Note";

  const getParentNote = (e) => {
    return e.target.parentElement
  }
  const getNoteContents = (e, index) => {
    return getParentNote(e).children[index].textContent
  }
  const addNoteView = () => {
    const noteWindow = document.createElement("div");
    noteWindow.className = "add-note-window";
    const noteForm = document.createElement("form");

    const noteName = document.createElement("input");
    noteName.type = "text";

    const noteContent = document.createElement("input");
    noteContent.type = "textarea";

    const noteButton = document.createElement("input");
    noteButton.type = "button";

    noteButton.addEventListener("click", controller.addNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteWindow.appendChild(noteForm);

    const container = document.querySelector(".note-view");
    container.appendChild(noteWindow);
  };

  const editNoteView = (e) => {
    const editNoteName = getNoteContents(e, 0)
    const editNoteContent = getNoteContents(e,1)
    const noteWindow = document.createElement("div");
    noteWindow.className = "edit-note-window";
    const noteForm = document.createElement("form");
    const noteName = document.createElement("input");
    noteName.type = "text";
    noteName.value = editNoteName
    const noteContent = document.createElement("input");
    noteContent.type = "textarea";
    noteContent.value = editNoteContent
    const noteButton = document.createElement("input");
    noteButton.type = "button";
    noteButton.value = "edit";
    noteButton.className = "trueEditButton"


    const hiddenOriginal = document.createElement("input");
    hiddenOriginal.type = "hidden"
    hiddenOriginal.value = editNoteName

    noteButton.addEventListener("click", controller.editNote);
    noteForm.appendChild(noteName);
    noteForm.appendChild(noteContent);
    noteForm.appendChild(noteButton);
    noteForm.appendChild(hiddenOriginal)
    noteWindow.appendChild(noteForm);
    getParentNote(e).replaceChildren(noteForm)
  }
  const updateEventHandlers = () => {
      
    const editButtons = document.querySelectorAll(".edit-note-button")
    const deleteButtons = document.querySelectorAll(".delete-note-button") 
    deleteButtons.forEach(button => button.addEventListener("click", controller.deleteNote))
    editButtons.forEach(button => button.addEventListener("click", editNoteView))
  };

  const buildView = (givenNoteList) => {
    const newNoteView = document.createElement("div");
    newNoteView.className = "note-view";
    givenNoteList.forEach((note) => {
      const [noteName, noteContent] = note.parameters;
      const noteHolder = document.createElement("form");
      noteHolder.className = "note";
      const noteNameHeader = document.createElement("h3");
      noteNameHeader.textContent = noteName;
      const noteNameContent = document.createElement("p");
      noteNameContent.textContent = noteContent;
      const editButton = document.createElement("input");
      editButton.type = "button"
      editButton.className = "edit-note-button"
      editButton.value = "edit";
      
      const deleteButton = document.createElement("input");
      deleteButton.value = "delete";
      deleteButton.type = "button"
      deleteButton.className = "delete-note-button"

      //buton for
      noteHolder.appendChild(noteNameHeader);
      noteHolder.appendChild(noteNameContent);
      noteHolder.appendChild(editButton);
      noteHolder.appendChild(deleteButton);
      newNoteView.appendChild(noteHolder);
    });
    return newNoteView.cloneNode(true);
  };

  const updateView = (model) => {
    const noteContainer = model.getTypeNameList("Note");
    const noteList = noteContainer.itemList;
    const noteView = document.querySelectorAll(".note, .add-note-window");
    noteView.forEach((node) => {
      node.remove();
    });
    const newNoteView = buildView(noteList);
    const contentSide = document.querySelector("div.todo-view");
    contentSide.appendChild(newNoteView);
    updateEventHandlers()

  };

  const instantiate = () => {
    const taskButton = document.querySelector("button.add-note-button");
    taskButton.addEventListener("click", addNoteView);
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
function ProjectsView() {
  const observerName = "Project";

  const buildView = (projectList) => {
    const newList = document.createElement("div");
    newList.className = "project-list";
    projectList.forEach((project) => {
      const newName = document.createElement("h2");
      newName.className = "project-title";
      newName.textContent = project.name;
      newList.appendChild(newName);
    });
    return newList.cloneNode(true);
  };

  const updateView = (model) => {
    const projectNames = model.projects;
    const projView = document.querySelector("div.project-list");
    const newProjView = buildView(projectNames);
    const sideBar = document.querySelector("div.sidebar");
    sideBar.replaceChild(projView, newProjView);
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
function TodoView() {

  const observerName = "ToDo";


  const buildView = (givenTodoList) => {
    const newTodoView = document.createElement("div");
    newTodoView.className = "todo-view";
    givenTodoList.forEach((todo) => {
      const [todoName, todoDescription, todoDueDate, todoPriority] =
        todo.parameters;
      const tdHolder = document.createElement("div");
      tdHolder.className = "todo";

      const tdNameHeader = document.createElement("h3");
      tdNameHeader.textContent = todoName;
      tdHolder.appendChild(tdNameHeader);

      const tdDescription = document.createElement("p");
      tdDescription.textContent = todoDescription;
      tdHolder.appendChild(tdDescription);

      const tdDueDate = document.createElement("p");
      tdDueDate.textContent = todoDueDate;
      tdHolder.appendChild(tdDueDate);

      const tdPriority = document.createElement("p");
      tdPriority.textContent = todoPriority;
      tdHolder.appendChild(tdPriority);

      newTodoView.appendChild(tdHolder);
    });
    return newTodoView.cloneNode(true);
  };

  const updateView = (model) => {
    const todoContainer = model.getTypeNameList("ToDo");
    const todoList = todoContainer.itemList;
    const newTodoView = buildView(todoList);
    const todoView = document.querySelector("div.todo-view");
    const contentSide = document.querySelector("div.content-side");
    contentSide.replaceChild(todoView, newTodoView);
  };

  return { get observerName() {return observerName},buildView, updateView };
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
  const controller = (0,_modules_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(model)
  const view = (0,_modules_view__WEBPACK_IMPORTED_MODULE_2__["default"])(controller)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNTO0FBQ1o7QUFDWDs7QUFFdEI7QUFDQSxnQkFBZ0IsMERBQUs7QUFDckIscUJBQXFCLCtEQUFVO0FBQy9CLGVBQWUseURBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL25vdGUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVsLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvaXRlbS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9ub3RlLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL25vdGVzLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Byb2plY3RzLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3RvZG8tdmlldy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3QsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbiNjb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjsgfVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluazsgfVxcbiAgaGVhZGVyIC50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygycmVtICsgNXB4KTsgfVxcblxcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcGFsZWdvbGRlbnJvZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7IH1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7IH1cXG5cXG4uY29udGVudC1zaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgfVxcbiAgLmNvbnRlbnQtc2lkZSAudG9kby12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDsgfVxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgICAvKmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAgMzVweCByZ2IoOCwgMCwgMCk7Ki8gfVxcbiAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUge1xcbiAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgICB3aWR0aDogMjAwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBR2I7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUgxQjtJQUtRLDJCQUEyQixFQUFBOztBQUluQztFQUNJLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUtsQztFQUNJLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksYUFBYTtFQUNiLDBCQUEyQjtFQUMzQiwyQkFBMkIsRUFBQTtFQUgvQjtJQU1RLGFBQWEsRUFBQTtFQU5yQjtJQVNRLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLFVBQVUsRUFBQTtJQVpsQjtNQWNZLHdCQUF3QjtNQUN4Qjs7Ozs7O2dEQUxvQyxFQVdDO0lBckJqRDtNQXlCWSxrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLGFBQWE7TUFDYixZQUFZLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gV2UgaGF2ZSB0byB1c2UgQGltcG9ydCBvciBAdXNlICBmb3IgU0FTU1xcbjpyb290LCBib2R5IHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICAgIC50aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDVweCk7XFxuICAgIH1cXG59XFxuXFxubWFpbiB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGVnb2xkZW5yb2Q7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG5cXG4gICAgXFxufVxcblxcbi5zaWRlYmFyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNvbnRlbnQtc2lkZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcblxcbiAgICAudG9kby12aWV3IHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIH1cXG4gICAgLm5vdGUtdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDFmcik7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICAgICAgZ2FwOiAxdm1pbjtcXG4gICAgICAgIC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG4gICAgICAgICAgICAvKmJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAgMzVweCByZ2IoOCwgMCwgMCk7Ki9cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ub3RlIHtcXG4gICAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIFxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTm90ZUNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvbm90ZS1jb250cm9sbGVyXCI7XG5pbXBvcnQgUHJvamVjdENvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyXCI7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyXCI7XG5cbmNvbnN0IENvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICAvLyBXaGVuIHlvdSBjbGljayBvbiBhIGJ1dHRvbiAoKGRlZmluZWQgYnkgaW5zdGFudGlhdG9yKSksIGl0IGNhbGxzIGEgTWVudSBPcGVuZXIuXG4gIC8vIFdoZW4geW91IHNhdmUgdGhlIGluZm9ybWF0aW9uIGluIHRoYXQgYnV0dG9uLCBpdCBjYWxscyBhIG1vZGVsIHVwZGF0ZXIuXG4gIC8vIFRoZW4sIHlvdSBzYXZlIGl0IHdpdGggdGhlIHZpZXcgdXBkYXRlci5cbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuICBjb25zdCBub3RlQ29udHJvbGxlciA9IE5vdGVDb250cm9sbGVyKG1vZGVsKVxuICBjb25zdCB0b2RvQ29udHJvbGxlciA9IFRvZG9Db250cm9sbGVyKG1vZGVsKVxuICBjb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IFByb2plY3RDb250cm9sbGVyKG1vZGVsKVxuICBtb2RlbC51cGRhdGVPYnNlcnZlcnMobW9kZWwpXG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBnZXQgbm90ZUNvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gbm90ZUNvbnRyb2xsZXJcbiAgICB9LFxuICAgIGdldCB0b2RvQ29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiB0b2RvQ29udHJvbGxlclxuICAgIH0sXG4gICAgZ2V0IHByb2plY3RDb250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RDb250cm9sbGVyXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVyO1xuIiwiY29uc3QgTm90ZUNvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG4gIFxuICBjb25zdCBnZXRQYXJlbnROb3RlID0gKGUpID0+IHtcbiAgICByZXR1cm4gZS50YXJnZXQucGFyZW50RWxlbWVudFxuICB9XG4gIGNvbnN0IGdldE5vdGVOYW1lID0gKGUpID0+IHtcbiAgICByZXR1cm4gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKFwiTm90ZVwiLCBtb2RlbClcbiAgfVxuICBjb25zdCBhZGROb3RlID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtlLnRhcmdldC5mb3JtWzBdLnZhbHVlLCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlXVxuICAgIG1vZGVsLmFkZFRvb2woXCJOb3RlXCIsIHByb3BlcnRpZXMpXG4gICAgdXBkYXRlKClcbiAgfVxuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7XG5cbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW2UudGFyZ2V0LmZvcm1bMF0udmFsdWUsIGUudGFyZ2V0LmZvcm1bMV0udmFsdWVdXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBlLnRhcmdldC5mb3JtWzNdLnZhbHVlXG4gICAgbW9kZWwuZWRpdFRvb2woXCJOb3RlXCIsIG5vdGVOYW1lLCBwcm9wZXJ0aWVzKVxuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKFwiTm90ZVwiLCBtb2RlbClcbiAgICB1cGRhdGUoKVxuICB9XG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSAoZSkgPT4ge1xuXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBnZXROb3RlTmFtZShlKVxuICAgIG1vZGVsLmRlbGV0ZVRvb2woXCJOb3RlXCIsIG5vdGVOYW1lKVxuICAgIHVwZGF0ZSgpXG4gIH1cbiAgXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkTm90ZSxcbiAgICBlZGl0Tm90ZSxcbiAgICBkZWxldGVOb3RlLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGVDb250cm9sbGVyO1xuIiwiY29uc3QgUHJvamVjdENvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7fTtcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKCkgPT4ge307XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7fTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0QnV0dG9uLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250cm9sbGVyO1xuIiwiY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbFxuICAgIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7fVxuICAgIGNvbnN0IGVkaXRUb2RvID0gKCkgPT4ge31cbiAgICBjb25zdCBkZWxldGVUb2RvID0gKCkgPT4ge31cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gKCkgPT4ge31cbiAgICBjb25zdCBleHBhbmRUb2RvID0gKCkgPT4ge31cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbW9kZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9LFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBlZGl0VG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYWRkVG9kb0J1dHRvbixcbiAgICAgICAgZXhwYW5kVG9kb1xuICAgICAgfTtcbn0gXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlciIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gXCIuL21vZGVscy9pdGVtLWNvbnRhaW5lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kZWxzL3Byb2plY3RcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL21vZGVscy9ub3RlXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi9tb2RlbHMvdG9kb1wiO1xuXG4vLyBDcmVhdGUgQSBDb250YWluZXIgb2YgQWxsIFByb2plY3RzLlxuZnVuY3Rpb24gTW9kZWwoKSB7XG4gIGNvbnN0IHRvb2xUeXBlcyA9IFtcIk5vdGVcIiwgXCJUb0RvXCJdO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEl0ZW1Db250YWluZXIoXCJQcm9qZWN0XCIpO1xuICBsZXQgY3VyUHJvakluZGV4ID0gMDsgLy8gaW5kZXggb2YgdGhlIGN1cnJlbnRQcm9qZWN0XG4gIGxldCBwcm9qQ291bnRlciA9IDA7XG4gIGxldCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3QgYWRkT2JzZXJ2ZXJzID0gKHZpZXdzKSA9PiB7XG4gICAgdmlld3MuZm9yRWFjaCggKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVycyhtb2RlbCkge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldyhtb2RlbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlT2JzZXJ2ZXIgPSAoZ2l2ZW5PYnNlcnZlck5hbWUsIG1vZGVsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBvYnNlcnZlcnMuZmluZEluZGV4KG9ic2VydmVyID0+IG9ic2VydmVyLm9ic2VydmVyTmFtZSA9PT0gZ2l2ZW5PYnNlcnZlck5hbWUpXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xuICAgIG9ic2VydmVyc1tpbmRleF0udXBkYXRlVmlldyhtb2RlbClcbiAgICBcbiAgfVxuICAvLyBUbyBEaXNwbGF5IHRoZSBDdXJyZW50IFByb2plY3Qgb250byB0aGUgU2NyZWVuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcblxuICAvLyBUbyBBZGQgYSBwcm9qZWN0IHRvIHRoZSB0YWIgKGRvIG5vdCBzd2l0Y2ggdG8gaXQuKVxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lID0gYFByb2plY3QgJHtwcm9qQ291bnRlcn1gKSA9PiB7XG4gICAgcHJvamVjdExpc3QuYWRkSXRlbShQcm9qZWN0KHByb2plY3ROYW1lLCB0b29sVHlwZXMpKTtcbiAgICBwcm9qQ291bnRlcisrO1xuICB9O1xuXG4gIC8vIFRvIEdldCBhIGxpc3Qgb2YgYWxsIHgncyBhbmQgeSdzXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgY3VyciA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGN1cnIuZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3QuZ2V0SXRlbUJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4QnlOYW1lID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmdldEl0ZW1JbmRleEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gZGVsZXRlIGEgcHJvamVjdFxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvakluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVJdGVtKHByb2pJbmRleCk7XG4gIH07XG5cbiAgLy8gVG8gY2hhbmdlIGFueSBwcm9qZWN0J3MgbmFtZVxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAob3JpZ2luYWxOYW1lLCBuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qID0gZ2V0UHJvamVjdEJ5TmFtZShvcmlnaW5hbE5hbWUpO1xuICAgIGVkaXRQcm9qLm5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgfTtcblxuICAvLyBXaGVuIGNsaWNrZWQsIHN3aXRjaCBQcm9qZWN0LlxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjdXJQcm9qSW5kZXggPSBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gYWRkIGEgbmV3IFRvb2xcbiAgY29uc3QgYWRkVG9vbCA9ICh0b29sVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGxldCBuZXdUb29sO1xuICAgIGlmICh0b29sVHlwZSA9PT0gXCJOb3RlXCIpIHtcbiAgICAgIG5ld1Rvb2wgPSBOb3RlKHBhcmFtZXRlcnMpO1xuICAgIH0gZWxzZSBpZiAodG9vbFR5cGUgPT09IFwiVG9Eb1wiKSB7XG4gICAgICBuZXdUb29sID0gVG9EbyhwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgY29uc3QgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gICAgY3VyUHJvamVjdC5hZGRJdGVtKHRvb2xUeXBlLCBuZXdUb29sKTtcbiAgfTtcblxuICAvLyBUbyBkZWxldGUgYSB0b29sXG4gIGNvbnN0IGRlbGV0ZVRvb2wgPSAodG9vbFR5cGUsIG5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmRlbGV0ZUl0ZW0odG9vbFR5cGUsIG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSB0aGUgY29udGVudHMgb2YgYSB0b29sXG4gIGNvbnN0IGVkaXRUb29sID0gKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgY3VyUHJvaiA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY29uc29sZS5sb2coXCJNb2RlbCFcIik7XG4gICAgY29uc29sZS5sb2codG9vbFR5cGUpO1xuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuICAgIGNvbnNvbGUubG9nKHBhcmFtZXRlcnMpO1xuICAgIGN1clByb2ouZWRpdEl0ZW0odG9vbFR5cGUsIG5hbWUsIHBhcmFtZXRlcnMpO1xuICB9O1xuXG4gIGFkZFByb2plY3QoKTsgLy8gaW5pdGlhbGl6ZXMgdGhlIHByb2plY3RcblxuICByZXR1cm4ge1xuICAgIGdldCBwcm9qZWN0cygpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TGlzdC5pdGVtTGlzdDtcbiAgICB9LFxuICAgIGdldCBuYW1lcygpIHtcbiAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3QuaXRlbUxpc3Q7XG4gICAgICByZXR1cm4gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUpO1xuICAgIH0sXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0TmFtZSxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICBnZXRUeXBlTmFtZUxpc3QsXG4gICAgc3dpdGNoUHJvamVjdCxcbiAgICBhZGRUb29sLFxuICAgIGRlbGV0ZVRvb2wsXG4gICAgZWRpdFRvb2wsXG4gICAgdXBkYXRlT2JzZXJ2ZXJzLFxuICAgIGFkZE9ic2VydmVycyxcbiAgICB1cGRhdGVPYnNlcnZlclxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsIi8vIFlvdSBjYW4gY29udGFpbiBPTkUgdHlwZSBvZiBvYmplY3QgKG5vdGVzLCB0by1kb3MsIGV0YylcbmNvbnN0IEl0ZW1Db250YWluZXIgPSAoa2luZCkgPT4ge1xuICBjb25zdCBpdGVtVHlwZSA9IGtpbmQ7XG4gIGNvbnN0IGl0ZW1MaXN0ID0gW107XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtVG9BZGQpID0+IHtcbiAgICBpdGVtTGlzdC5wdXNoKGl0ZW1Ub0FkZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChyZW1vdmVJbmRleCkgPT4ge1xuICAgIGl0ZW1MaXN0LnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbUluZGV4QnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBpdGVtTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlbUJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4QnlOYW1lKG5hbWUpO1xuICAgIHJldHVybiBpdGVtTGlzdFtpdGVtSW5kZXhdO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGl0ZW1MaXN0Lmxlbmd0aDtcblxuICBjb25zdCBlZGl0SXRlbSA9IChlZGl0SW5kZXgsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbnRhaW5lciFcIik7XG4gICAgY29uc29sZS5sb2coZWRpdEluZGV4KTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbWV0ZXJzKTtcbiAgICBpdGVtTGlzdFtlZGl0SW5kZXhdLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGl0ZW1MaXN0KCkge1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IGl0ZW1UeXBlKCkge1xuICAgICAgcmV0dXJuIGl0ZW1UeXBlO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRJdGVtQnlOYW1lLFxuICAgIGdldEl0ZW1JbmRleEJ5TmFtZSxcbiAgICBlZGl0SXRlbSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Db250YWluZXI7XG4iLCIvLyBNb2RlbCBmb3IgYSBOb3RlXG5jb25zdCBOb3RlID0gKFtnaXZlbk5hbWUsIGNvbnRlbnRzXSkgPT4ge1xuICBsZXQgbmFtZSA9IGdpdmVuTmFtZTtcbiAgbGV0IHRleHRDb250ZW50ID0gY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgdGV4dENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQgdGV4dENvbnRlbnQobmV3VGV4dCkge1xuICAgICAgdGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05vdGVOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3Tm90ZU5hbWU7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgdGV4dENvbnRlbnRdO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW25ld05hbWUsIG5ld0NvbnRlbnRzXSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld0NvbnRlbnRzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIiwiLy8gTW9kZWwgZm9yIGEgUHJvamVjdCAtPiBQcm9qZWN0cyBjYW4gaG9sZCBub3RlcyBhbmQgdG8tZG9zXG4vLyBtYWtlcyBTZXBhcmF0ZSBjb250YWluZXJzIGZvciBub3RlcyBhbmQgdG8tZG9zIDogd2lsbCBoYXZlIHRvIGRvIHRoYXQgbXVsdGlscGUgdGltZXNcblxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSBcIi4vaXRlbS1jb250YWluZXJcIjtcblxuY29uc3QgUHJvamVjdCA9IChnaXZlbk5hbWUsIHR5cGVMaXN0KSA9PiB7XG4gIC8vIEEgTWFwIG9mIENvbnRhaW5lcnNcbiAgbGV0IG5hbWUgPSBnaXZlbk5hbWU7XG4gIGNvbnN0IGNvbnRhaW5lck1hcCA9IG5ldyBNYXAoKTtcbiAgdHlwZUxpc3QuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnRhaW5lck1hcC5zZXQodHlwZSwgSXRlbUNvbnRhaW5lcih0eXBlKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiBjb250YWluZXJNYXAuZ2V0KHR5cGUpO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAodHlwZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgdHlwZUNvbnRhaW5lci5hZGRJdGVtKGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodHlwZSwgaXRlbU5hbWUpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdHlwZUNvbnRhaW5lci5nZXRJdGVtSW5kZXhCeU5hbWUoaXRlbU5hbWUpO1xuICAgIHR5cGVDb250YWluZXIucmVtb3ZlSXRlbShkZWxldGVJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAodHlwZSwgaXRlbU5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlByb2plY3QhXCIpO1xuICAgIGNvbnNvbGUubG9nKHR5cGUpO1xuICAgIGNvbnNvbGUubG9nKGl0ZW1OYW1lKTtcbiAgICBjb25zb2xlLmxvZyhwYXJhbWV0ZXJzKTtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGVkaXRJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLmVkaXRJdGVtKGVkaXRJbmRleCwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgZWRpdEl0ZW0sXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8vIE1vZGVsIGZvciBhIFRvLURvXG5cbmNvbnN0IFRvRG8gPSAoW25ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eV0pID0+IHtcbiAgbGV0IG5hbWUgPSBuZXdOYW1lOyAvLyBQbGFjZWhvbGRlciB3aWxsIGJlIGluIEhUTUxcbiAgbGV0IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247IC8vIFBsYWNlaG9sZGVyIHdpbGwgYmUgaW4gSFRNTFxuICBsZXQgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IC8vIHdpbGwgaW1wbGVtZW50IGEgdGltZSBsaWJyYXJ5IGxhdGVyLlxuICBsZXQgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgLy8gbWF5YmUgYW4gRU5VTSB0aGF0IHJlcHJlc2VudHMgdmFyaWFibGVzIGJ5IHByaW9yaXR5XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUoZ2l2ZW5OYW1lKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKGdpdmVuRGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gZ2l2ZW5EZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShnaXZlbkRhdGUpIHtcbiAgICAgIGR1ZURhdGUgPSBnaXZlbkRhdGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkoZ2l2ZW5Qcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHkgPSBnaXZlblByaW9yaXR5O1xuICAgIH0sXG4gICAgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgICByZXR1cm4gW25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eV07XG4gICAgfSxcbiAgICBzZXQgcGFyYW1ldGVycyhbZ2l2ZW5OYW1lLCBnaXZlbkRlc2NyaXB0aW9uLCBnaXZlbkRhdGUsIGdpdmVuUHJpb3JpdHldKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgICAgZGVzY3JpcHRpb24gPSBnaXZlbkRlc2NyaXB0aW9uO1xuICAgICAgZHVlRGF0ZSA9IGdpdmVuRGF0ZTtcbiAgICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiIsImltcG9ydCBQcm9qZWN0c1ZpZXcgZnJvbSBcIi4vdmlld3MvcHJvamVjdHMtdmlld1wiO1xuaW1wb3J0IFRvZG9WaWV3IGZyb20gXCIuL3ZpZXdzL3RvZG8tdmlld1wiXG5pbXBvcnQgTm90ZXNWaWV3IGZyb20gXCIuL3ZpZXdzL25vdGVzLXZpZXdcIjtcblxuXG5jb25zdCBWaWV3ID0gKGNvbnRyb2xsZXIpID0+IHtcbiAgLy8gVXBkYXRlcyB2aWV3IGZyb20gdGhlIG1vZGVsLlxuXG4gIC8vIFZJRVcgVVBEQVRFUlNcbiAgY29uc3QgcHJvalZpZXcgPSBQcm9qZWN0c1ZpZXcoY29udHJvbGxlci5wcm9qZWN0Q29udHJvbGxlcilcbiAgY29uc3Qgbm90ZXNWaWV3ID0gTm90ZXNWaWV3KGNvbnRyb2xsZXIubm90ZUNvbnRyb2xsZXIpXG4gIGNvbnNvbGUubG9nKG5vdGVzVmlldyk7XG4gIGNvbnN0IHRvZG9WaWV3ID0gVG9kb1ZpZXcoY29udHJvbGxlci50b2RvQ29udHJvbGxlcilcbiAgY29udHJvbGxlci5tb2RlbC5hZGRPYnNlcnZlcnMoW3Byb2pWaWV3LCB0b2RvVmlldywgbm90ZXNWaWV3XSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXc7XG4iLCJmdW5jdGlvbiBOb3Rlc1ZpZXcobm90ZUNvbnRyb2xsZXIpIHtcbiAgY29uc3QgY29udHJvbGxlciA9IG5vdGVDb250cm9sbGVyO1xuXG4gIGNvbnN0IG9ic2VydmVyTmFtZSA9IFwiTm90ZVwiO1xuXG4gIGNvbnN0IGdldFBhcmVudE5vdGUgPSAoZSkgPT4ge1xuICAgIHJldHVybiBlLnRhcmdldC5wYXJlbnRFbGVtZW50XG4gIH1cbiAgY29uc3QgZ2V0Tm90ZUNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIGdldFBhcmVudE5vdGUoZSkuY2hpbGRyZW5baW5kZXhdLnRleHRDb250ZW50XG4gIH1cbiAgY29uc3QgYWRkTm90ZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZVdpbmRvdy5jbGFzc05hbWUgPSBcImFkZC1ub3RlLXdpbmRvd1wiO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbiAgICBjb25zdCBub3RlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3RlTmFtZS50eXBlID0gXCJ0ZXh0XCI7XG5cbiAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3RlQ29udGVudC50eXBlID0gXCJ0ZXh0YXJlYVwiO1xuXG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3RlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgbm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5hZGROb3RlKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlTmFtZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuICAgIG5vdGVXaW5kb3cuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlLXZpZXdcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVXaW5kb3cpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXROb3RlVmlldyA9IChlKSA9PiB7XG4gICAgY29uc3QgZWRpdE5vdGVOYW1lID0gZ2V0Tm90ZUNvbnRlbnRzKGUsIDApXG4gICAgY29uc3QgZWRpdE5vdGVDb250ZW50ID0gZ2V0Tm90ZUNvbnRlbnRzKGUsMSlcbiAgICBjb25zdCBub3RlV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBub3RlV2luZG93LmNsYXNzTmFtZSA9IFwiZWRpdC1ub3RlLXdpbmRvd1wiO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgY29uc3Qgbm90ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZU5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5vdGVOYW1lLnZhbHVlID0gZWRpdE5vdGVOYW1lXG4gICAgY29uc3Qgbm90ZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZUNvbnRlbnQudHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICBub3RlQ29udGVudC52YWx1ZSA9IGVkaXROb3RlQ29udGVudFxuICAgIGNvbnN0IG5vdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgICBub3RlQnV0dG9uLnZhbHVlID0gXCJlZGl0XCI7XG4gICAgbm90ZUJ1dHRvbi5jbGFzc05hbWUgPSBcInRydWVFZGl0QnV0dG9uXCJcblxuXG4gICAgY29uc3QgaGlkZGVuT3JpZ2luYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaGlkZGVuT3JpZ2luYWwudHlwZSA9IFwiaGlkZGVuXCJcbiAgICBoaWRkZW5PcmlnaW5hbC52YWx1ZSA9IGVkaXROb3RlTmFtZVxuXG4gICAgbm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5lZGl0Tm90ZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZU5hbWUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVDb250ZW50KTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQnV0dG9uKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChoaWRkZW5PcmlnaW5hbClcbiAgICBub3RlV2luZG93LmFwcGVuZENoaWxkKG5vdGVGb3JtKTtcbiAgICBnZXRQYXJlbnROb3RlKGUpLnJlcGxhY2VDaGlsZHJlbihub3RlRm9ybSlcbiAgfVxuICBjb25zdCB1cGRhdGVFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgXG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtbm90ZS1idXR0b25cIilcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtbm90ZS1idXR0b25cIikgXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRyb2xsZXIuZGVsZXRlTm90ZSkpXG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlZGl0Tm90ZVZpZXcpKVxuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChnaXZlbk5vdGVMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZVZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld05vdGVWaWV3LmNsYXNzTmFtZSA9IFwibm90ZS12aWV3XCI7XG4gICAgZ2l2ZW5Ob3RlTGlzdC5mb3JFYWNoKChub3RlKSA9PiB7XG4gICAgICBjb25zdCBbbm90ZU5hbWUsIG5vdGVDb250ZW50XSA9IG5vdGUucGFyYW1ldGVycztcbiAgICAgIGNvbnN0IG5vdGVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIG5vdGVIb2xkZXIuY2xhc3NOYW1lID0gXCJub3RlXCI7XG4gICAgICBjb25zdCBub3RlTmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIG5vdGVOYW1lSGVhZGVyLnRleHRDb250ZW50ID0gbm90ZU5hbWU7XG4gICAgICBjb25zdCBub3RlTmFtZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIG5vdGVOYW1lQ29udGVudC50ZXh0Q29udGVudCA9IG5vdGVDb250ZW50O1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGVkaXRCdXR0b24udHlwZSA9IFwiYnV0dG9uXCJcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gXCJlZGl0LW5vdGUtYnV0dG9uXCJcbiAgICAgIGVkaXRCdXR0b24udmFsdWUgPSBcImVkaXRcIjtcbiAgICAgIFxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgZGVsZXRlQnV0dG9uLnZhbHVlID0gXCJkZWxldGVcIjtcbiAgICAgIGRlbGV0ZUJ1dHRvbi50eXBlID0gXCJidXR0b25cIlxuICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9IFwiZGVsZXRlLW5vdGUtYnV0dG9uXCJcblxuICAgICAgLy9idXRvbiBmb3JcbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQobm90ZU5hbWVIZWFkZXIpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUNvbnRlbnQpO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICAgIG5vdGVIb2xkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgIG5ld05vdGVWaWV3LmFwcGVuZENoaWxkKG5vdGVIb2xkZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdOb3RlVmlldy5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVmlldyA9IChtb2RlbCkgPT4ge1xuICAgIGNvbnN0IG5vdGVDb250YWluZXIgPSBtb2RlbC5nZXRUeXBlTmFtZUxpc3QoXCJOb3RlXCIpO1xuICAgIGNvbnN0IG5vdGVMaXN0ID0gbm90ZUNvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCBub3RlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubm90ZSwgLmFkZC1ub3RlLXdpbmRvd1wiKTtcbiAgICBub3RlVmlldy5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGNvbnN0IG5ld05vdGVWaWV3ID0gYnVpbGRWaWV3KG5vdGVMaXN0KTtcbiAgICBjb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudG9kby12aWV3XCIpO1xuICAgIGNvbnRlbnRTaWRlLmFwcGVuZENoaWxkKG5ld05vdGVWaWV3KTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKClcblxuICB9O1xuXG4gIGNvbnN0IGluc3RhbnRpYXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1ub3RlLWJ1dHRvblwiKTtcbiAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGROb3RlVmlldyk7XG4gIH07XG5cbiAgaW5zdGFudGlhdGUoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIGJ1aWxkVmlldyxcbiAgICB1cGRhdGVWaWV3LFxuICB9O1xuXG59XG5leHBvcnQgZGVmYXVsdCBOb3Rlc1ZpZXc7XG4iLCJmdW5jdGlvbiBQcm9qZWN0c1ZpZXcoKSB7XG4gIGNvbnN0IG9ic2VydmVyTmFtZSA9IFwiUHJvamVjdFwiO1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChwcm9qZWN0TGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5ld0xpc3QuY2xhc3NOYW1lID0gXCJwcm9qZWN0LWxpc3RcIjtcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgbmV3TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtdGl0bGVcIjtcbiAgICAgIG5ld05hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBuZXdMaXN0LmFwcGVuZENoaWxkKG5ld05hbWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdMaXN0LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gbW9kZWwucHJvamVjdHM7XG4gICAgY29uc3QgcHJvalZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnByb2plY3QtbGlzdFwiKTtcbiAgICBjb25zdCBuZXdQcm9qVmlldyA9IGJ1aWxkVmlldyhwcm9qZWN0TmFtZXMpO1xuICAgIGNvbnN0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnNpZGViYXJcIik7XG4gICAgc2lkZUJhci5yZXBsYWNlQ2hpbGQocHJvalZpZXcsIG5ld1Byb2pWaWV3KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzVmlldztcbiIsImZ1bmN0aW9uIFRvZG9WaWV3KCkge1xuXG4gIGNvbnN0IG9ic2VydmVyTmFtZSA9IFwiVG9Eb1wiO1xuXG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKGdpdmVuVG9kb0xpc3QpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3VG9kb1ZpZXcuY2xhc3NOYW1lID0gXCJ0b2RvLXZpZXdcIjtcbiAgICBnaXZlblRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IFt0b2RvTmFtZSwgdG9kb0Rlc2NyaXB0aW9uLCB0b2RvRHVlRGF0ZSwgdG9kb1ByaW9yaXR5XSA9XG4gICAgICAgIHRvZG8ucGFyYW1ldGVycztcbiAgICAgIGNvbnN0IHRkSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRkSG9sZGVyLmNsYXNzTmFtZSA9IFwidG9kb1wiO1xuXG4gICAgICBjb25zdCB0ZE5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICB0ZE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSB0b2RvTmFtZTtcbiAgICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkTmFtZUhlYWRlcik7XG5cbiAgICAgIGNvbnN0IHRkRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRkRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvRGVzY3JpcHRpb247XG4gICAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZERlc2NyaXB0aW9uKTtcblxuICAgICAgY29uc3QgdGREdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0ZER1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvRHVlRGF0ZTtcbiAgICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRHVlRGF0ZSk7XG5cbiAgICAgIGNvbnN0IHRkUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRkUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvUHJpb3JpdHk7XG4gICAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZFByaW9yaXR5KTtcblxuICAgICAgbmV3VG9kb1ZpZXcuYXBwZW5kQ2hpbGQodGRIb2xkZXIpO1xuICAgIH0pO1xuICAgIHJldHVybiBuZXdUb2RvVmlldy5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlVmlldyA9IChtb2RlbCkgPT4ge1xuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBtb2RlbC5nZXRUeXBlTmFtZUxpc3QoXCJUb0RvXCIpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0NvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGJ1aWxkVmlldyh0b2RvTGlzdCk7XG4gICAgY29uc3QgdG9kb1ZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2LnRvZG8tdmlld1wiKTtcbiAgICBjb25zdCBjb250ZW50U2lkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY29udGVudC1zaWRlXCIpO1xuICAgIGNvbnRlbnRTaWRlLnJlcGxhY2VDaGlsZCh0b2RvVmlldywgbmV3VG9kb1ZpZXcpO1xuICB9O1xuXG4gIHJldHVybiB7IGdldCBvYnNlcnZlck5hbWUoKSB7cmV0dXJuIG9ic2VydmVyTmFtZX0sYnVpbGRWaWV3LCB1cGRhdGVWaWV3IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9WaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE1vZGVsIGZyb20gXCIuL21vZHVsZXMvbW9kZWxcIjtcbmltcG9ydCBDb250cm9sbGVyIGZyb20gXCIuL21vZHVsZXMvY29udHJvbGxlclwiXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tb2R1bGVzL3ZpZXdcIlxuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gTW9kZWwoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xsZXIobW9kZWwpXG4gIGNvbnN0IHZpZXcgPSBWaWV3KGNvbnRyb2xsZXIpXG59O1xuXG5tYWluKCk7XG4vLyBUb2Rvc1xuLy8gUHJvamVjdHNcbi8vIFZpZXcgLyBVSVxuLy8gQnV0dG9uIGludGVyYWN0cyB3aXRoIHRvb2xzXG4vLyBQcm9qZWN0cyBpbXBsZW1lbnQgbm90ZXMgYW5kIHRvLWRvc1xuLy8gTm90ZXMgYXJlIGFueSB0ZXh0IChSRU1FTUJFUiBUTyBTQU5JVElaRSlcbi8vIFRvIGRvcyBhcmUgdGl0bGUsICBkdWUgZGF0ZSwgY29sb3IvaW1wb3J0YW5jZVxuLy8gRXhwYW5kaW5nICYgRGVsZXRpbmcgVG8gRG9zXG4vLyBTdG9yaW5nIFRvIERvIExpc3RzIG9uIExvY2FsIFN0b3JhZ2VcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==