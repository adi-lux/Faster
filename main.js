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

  const getNoteName = (e) => {
    return e.target.parentElement.children[0].textContent
  }

  const update = () => {
    model.updateObserver("Note", model)
  }
  const addNote = (e) => {
    // update Model
    // call update on view

    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value]
    model.addTool("Note", properties)
    update()
  }
  const editNote = (e) => {
    // update Model
    // call update on view
    const properties = [e.target.form[0].value, e.target.form[1].value]
    const noteName = getNoteName(e)
    model.editTool("Note", noteName, properties)
    model.updateObserver("Note", model)
    update()
  }
  const deleteNote = (e) => {
    // update Model
    // call update on view
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

  const addNoteView = () => {
    const noteWindow = document.createElement("div");
    noteWindow.className = "add-note-window";
    const noteForm = document.createElement("form");
    //const noteNameLabel = document.createElement("label")
    const noteName = document.createElement("input");
    noteName.type = "text";
    //const noteContentLabel = document.createElement("label")
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

  const editNoteView = () => {
    
  }
  const updateEventHandlers = () => {
      
    const editButtons = document.querySelectorAll(".edit-note-button")
    const deleteButtons = document.querySelectorAll(".delete-note-button") 
    deleteButtons.forEach(button => button.addEventListener("click", controller.deleteNote))
    editButtons.forEach(button => button.addEventListener("click", controller.editNote))
  };
  const buildView = (givenNoteList) => {
    const newNoteView = document.createElement("div");
    newNoteView.className = "note-view";
    givenNoteList.forEach((note) => {
      const [noteName, noteContent] = note.parameters;
      const noteHolder = document.createElement("div");
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
      editButton.type = "button"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDUztBQUNaO0FBQ1g7O0FBRXRCO0FBQ0EsZ0JBQWdCLDBEQUFLO0FBQ3JCLHFCQUFxQiwrREFBVTtBQUMvQixlQUFlLHlEQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy9ub3RlLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvdG9kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL2l0ZW0tY29udGFpbmVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvbm90ZS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy90b2RvLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9ub3Rlcy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy9wcm9qZWN0cy12aWV3LmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3cy90b2RvLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290LCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7IH1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG4gIGhlYWRlciAudGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDVweCk7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGVnb2xkZW5yb2Q7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyOyB9XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLmNvbnRlbnQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7IH1cXG4gIC5jb250ZW50LXNpZGUgLnRvZG8tdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IH1cXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDF2bWluOyB9XFxuICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtYnV0dG9uIHtcXG4gICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgICAgLypiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIDM1cHggcmdiKDgsIDAsIDApOyovIH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIHtcXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgd2lkdGg6IDIwMHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFIMUI7SUFLUSwyQkFBMkIsRUFBQTs7QUFJbkM7RUFDSSx3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFLbEM7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGFBQWE7RUFDYiwwQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7RUFIL0I7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFTUSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyxVQUFVLEVBQUE7SUFabEI7TUFjWSx3QkFBd0I7TUFDeEI7Ozs7OztnREFMb0MsRUFXQztJQXJCakQ7TUF5Qlksa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixhQUFhO01BQ2IsWUFBWSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFdlIGhhdmUgdG8gdXNlIEBpbXBvcnQgb3IgQHVzZSAgZm9yIFNBU1NcXG46cm9vdCwgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyA1cHgpO1xcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ29sZGVucm9kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb250ZW50LXNpZGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXG4gICAgLnRvZG8tdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5ub3RlLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIGdhcDogMXZtaW47XFxuICAgICAgICAuYWRkLW5vdGUtYnV0dG9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgICAgICAgICAgLypiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIDM1cHggcmdiKDgsIDAsIDApOyovXFxuICAgICAgICB9XFxuXFxuICAgICAgICAubm90ZSB7XFxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE5vdGVDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL25vdGUtY29udHJvbGxlclwiO1xuaW1wb3J0IFByb2plY3RDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlclwiO1xuaW1wb3J0IFRvZG9Db250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL3RvZG8tY29udHJvbGxlclwiO1xuXG5jb25zdCBDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgLy8gV2hlbiB5b3UgY2xpY2sgb24gYSBidXR0b24gKChkZWZpbmVkIGJ5IGluc3RhbnRpYXRvcikpLCBpdCBjYWxscyBhIE1lbnUgT3BlbmVyLlxuICAvLyBXaGVuIHlvdSBzYXZlIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGF0IGJ1dHRvbiwgaXQgY2FsbHMgYSBtb2RlbCB1cGRhdGVyLlxuICAvLyBUaGVuLCB5b3Ugc2F2ZSBpdCB3aXRoIHRoZSB2aWV3IHVwZGF0ZXIuXG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3Qgbm90ZUNvbnRyb2xsZXIgPSBOb3RlQ29udHJvbGxlcihtb2RlbClcbiAgY29uc3QgdG9kb0NvbnRyb2xsZXIgPSBUb2RvQ29udHJvbGxlcihtb2RlbClcbiAgY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSBQcm9qZWN0Q29udHJvbGxlcihtb2RlbClcblxuXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgZ2V0IG5vdGVDb250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIG5vdGVDb250cm9sbGVyXG4gICAgfSxcbiAgICBnZXQgdG9kb0NvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gdG9kb0NvbnRyb2xsZXJcbiAgICB9LFxuICAgIGdldCBwcm9qZWN0Q29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0Q29udHJvbGxlclxuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImNvbnN0IE5vdGVDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuXG4gIGNvbnN0IGdldE5vdGVOYW1lID0gKGUpID0+IHtcbiAgICByZXR1cm4gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS50ZXh0Q29udGVudFxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKFwiTm90ZVwiLCBtb2RlbClcbiAgfVxuICBjb25zdCBhZGROb3RlID0gKGUpID0+IHtcbiAgICAvLyB1cGRhdGUgTW9kZWxcbiAgICAvLyBjYWxsIHVwZGF0ZSBvbiB2aWV3XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtlLnRhcmdldC5mb3JtWzBdLnZhbHVlLCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlXVxuICAgIG1vZGVsLmFkZFRvb2woXCJOb3RlXCIsIHByb3BlcnRpZXMpXG4gICAgdXBkYXRlKClcbiAgfVxuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7XG4gICAgLy8gdXBkYXRlIE1vZGVsXG4gICAgLy8gY2FsbCB1cGRhdGUgb24gdmlld1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPSBbZS50YXJnZXQuZm9ybVswXS52YWx1ZSwgZS50YXJnZXQuZm9ybVsxXS52YWx1ZV1cbiAgICBjb25zdCBub3RlTmFtZSA9IGdldE5vdGVOYW1lKGUpXG4gICAgbW9kZWwuZWRpdFRvb2woXCJOb3RlXCIsIG5vdGVOYW1lLCBwcm9wZXJ0aWVzKVxuICAgIG1vZGVsLnVwZGF0ZU9ic2VydmVyKFwiTm90ZVwiLCBtb2RlbClcbiAgICB1cGRhdGUoKVxuICB9XG4gIGNvbnN0IGRlbGV0ZU5vdGUgPSAoZSkgPT4ge1xuICAgIC8vIHVwZGF0ZSBNb2RlbFxuICAgIC8vIGNhbGwgdXBkYXRlIG9uIHZpZXdcbiAgICBjb25zdCBub3RlTmFtZSA9IGdldE5vdGVOYW1lKGUpXG4gICAgbW9kZWwuZGVsZXRlVG9vbChcIk5vdGVcIiwgbm90ZU5hbWUpXG4gICAgdXBkYXRlKClcblxuICB9XG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkTm90ZSxcbiAgICBlZGl0Tm90ZSxcbiAgICBkZWxldGVOb3RlLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IE5vdGVDb250cm9sbGVyO1xuIiwiY29uc3QgUHJvamVjdENvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICBjb25zdCBtb2RlbCA9IGdpdmVuTW9kZWw7XG4gIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7fTtcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKCkgPT4ge307XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoKSA9PiB7fTtcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9ICgpID0+IHt9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBhZGRQcm9qZWN0QnV0dG9uLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RDb250cm9sbGVyO1xuIiwiY29uc3QgVG9kb0NvbnRyb2xsZXIgPSAoZ2l2ZW5Nb2RlbCkgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbFxuICAgIGNvbnN0IGFkZFRvZG8gPSAoKSA9PiB7fVxuICAgIGNvbnN0IGVkaXRUb2RvID0gKCkgPT4ge31cbiAgICBjb25zdCBkZWxldGVUb2RvID0gKCkgPT4ge31cbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gKCkgPT4ge31cbiAgICBjb25zdCBleHBhbmRUb2RvID0gKCkgPT4ge31cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgbW9kZWwoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgICAgICB9LFxuICAgICAgICBhZGRUb2RvLFxuICAgICAgICBlZGl0VG9kbyxcbiAgICAgICAgZGVsZXRlVG9kbyxcbiAgICAgICAgYWRkVG9kb0J1dHRvbixcbiAgICAgICAgZXhwYW5kVG9kb1xuICAgICAgfTtcbn0gXG5leHBvcnQgZGVmYXVsdCBUb2RvQ29udHJvbGxlciIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gXCIuL21vZGVscy9pdGVtLWNvbnRhaW5lclwiO1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vbW9kZWxzL3Byb2plY3RcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuL21vZGVscy9ub3RlXCI7XG5pbXBvcnQgVG9EbyBmcm9tIFwiLi9tb2RlbHMvdG9kb1wiO1xuXG4vLyBDcmVhdGUgQSBDb250YWluZXIgb2YgQWxsIFByb2plY3RzLlxuZnVuY3Rpb24gTW9kZWwoKSB7XG4gIGNvbnN0IHRvb2xUeXBlcyA9IFtcIk5vdGVcIiwgXCJUb0RvXCJdO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEl0ZW1Db250YWluZXIoXCJQcm9qZWN0XCIpO1xuICBsZXQgY3VyUHJvakluZGV4ID0gMDsgLy8gaW5kZXggb2YgdGhlIGN1cnJlbnRQcm9qZWN0XG4gIGxldCBwcm9qQ291bnRlciA9IDA7XG4gIGxldCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3QgYWRkT2JzZXJ2ZXJzID0gKHZpZXdzKSA9PiB7XG4gICAgdmlld3MuZm9yRWFjaCggKG9ic2VydmVyKSA9PiB7XG4gICAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZU9ic2VydmVycyhtb2RlbCkge1xuICAgIG9ic2VydmVycy5mb3JFYWNoKChvYnNlcnZlcikgPT4ge1xuICAgICAgb2JzZXJ2ZXIudXBkYXRlVmlldyhtb2RlbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlT2JzZXJ2ZXIgPSAoZ2l2ZW5PYnNlcnZlck5hbWUsIG1vZGVsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBvYnNlcnZlcnMuZmluZEluZGV4KG9ic2VydmVyID0+IG9ic2VydmVyLm9ic2VydmVyTmFtZSA9PT0gZ2l2ZW5PYnNlcnZlck5hbWUpXG4gICAgY29uc29sZS5sb2cobW9kZWwpO1xuICAgIG9ic2VydmVyc1tpbmRleF0udXBkYXRlVmlldyhtb2RlbClcbiAgICBcbiAgfVxuICAvLyBUbyBEaXNwbGF5IHRoZSBDdXJyZW50IFByb2plY3Qgb250byB0aGUgU2NyZWVuXG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0ID0gKCkgPT4gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcblxuICAvLyBUbyBBZGQgYSBwcm9qZWN0IHRvIHRoZSB0YWIgKGRvIG5vdCBzd2l0Y2ggdG8gaXQuKVxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lID0gYFByb2plY3QgJHtwcm9qQ291bnRlcn1gKSA9PiB7XG4gICAgcHJvamVjdExpc3QuYWRkSXRlbShQcm9qZWN0KHByb2plY3ROYW1lLCB0b29sVHlwZXMpKTtcbiAgICBwcm9qQ291bnRlcisrO1xuICB9O1xuXG4gIC8vIFRvIEdldCBhIGxpc3Qgb2YgYWxsIHgncyBhbmQgeSdzXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgY3VyciA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGN1cnIuZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3QuZ2V0SXRlbUJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEluZGV4QnlOYW1lID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgcmV0dXJuIHByb2plY3RMaXN0LmdldEl0ZW1JbmRleEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gZGVsZXRlIGEgcHJvamVjdFxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvakluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVJdGVtKHByb2pJbmRleCk7XG4gIH07XG5cbiAgLy8gVG8gY2hhbmdlIGFueSBwcm9qZWN0J3MgbmFtZVxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAob3JpZ2luYWxOYW1lLCBuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qID0gZ2V0UHJvamVjdEJ5TmFtZShvcmlnaW5hbE5hbWUpO1xuICAgIGVkaXRQcm9qLm5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgfTtcblxuICAvLyBXaGVuIGNsaWNrZWQsIHN3aXRjaCBQcm9qZWN0LlxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjdXJQcm9qSW5kZXggPSBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gYWRkIGEgbmV3IFRvb2xcbiAgY29uc3QgYWRkVG9vbCA9ICh0b29sVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGxldCBuZXdUb29sO1xuICAgIGlmICh0b29sVHlwZSA9PT0gXCJOb3RlXCIpIHtcbiAgICAgIG5ld1Rvb2wgPSBOb3RlKHBhcmFtZXRlcnMpO1xuICAgIH0gZWxzZSBpZiAodG9vbFR5cGUgPT09IFwiVG9Eb1wiKSB7XG4gICAgICBuZXdUb29sID0gVG9EbyhwYXJhbWV0ZXJzKTtcbiAgICB9XG4gICAgY29uc3QgY3VyUHJvamVjdCA9IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gICAgY3VyUHJvamVjdC5hZGRJdGVtKHRvb2xUeXBlLCBuZXdUb29sKTtcbiAgfTtcblxuICAvLyBUbyBkZWxldGUgYSB0b29sXG4gIGNvbnN0IGRlbGV0ZVRvb2wgPSAodG9vbFR5cGUsIG5hbWUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhuYW1lKTtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmRlbGV0ZUl0ZW0odG9vbFR5cGUsIG5hbWUpO1xuICB9O1xuXG4gIC8vIFRvIGNoYW5nZSB0aGUgY29udGVudHMgb2YgYSB0b29sXG4gIGNvbnN0IGVkaXRUb29sID0gKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgY3VyUHJvaiA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY3VyUHJvai5lZGl0SXRlbSh0b29sVHlwZSwgbmFtZSwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgYWRkUHJvamVjdCgpOyAvLyBpbml0aWFsaXplcyB0aGUgcHJvamVjdFxuXG4gIHJldHVybiB7XG4gICAgZ2V0IHByb2plY3RzKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RMaXN0Lml0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWVzKCkge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdC5pdGVtTGlzdDtcbiAgICAgIHJldHVybiBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3QubmFtZSk7XG4gICAgfSxcbiAgICBhZGRQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICAgIGdldEN1cnJlbnRQcm9qZWN0LFxuICAgIGdldFR5cGVOYW1lTGlzdCxcbiAgICBzd2l0Y2hQcm9qZWN0LFxuICAgIGFkZFRvb2wsXG4gICAgZGVsZXRlVG9vbCxcbiAgICBlZGl0VG9vbCxcbiAgICB1cGRhdGVPYnNlcnZlcnMsXG4gICAgYWRkT2JzZXJ2ZXJzLFxuICAgIHVwZGF0ZU9ic2VydmVyXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiLy8gWW91IGNhbiBjb250YWluIE9ORSB0eXBlIG9mIG9iamVjdCAobm90ZXMsIHRvLWRvcywgZXRjKVxuY29uc3QgSXRlbUNvbnRhaW5lciA9IChraW5kKSA9PiB7XG4gIGNvbnN0IGl0ZW1UeXBlID0ga2luZDtcbiAgY29uc3QgaXRlbUxpc3QgPSBbXTtcblxuICBjb25zdCBhZGRJdGVtID0gKGl0ZW1Ub0FkZCkgPT4ge1xuICAgIGl0ZW1MaXN0LnB1c2goaXRlbVRvQWRkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJdGVtID0gKHJlbW92ZUluZGV4KSA9PiB7XG4gICAgaXRlbUxpc3Quc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtSW5kZXhCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGl0ZW1MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gaXRlbUluZGV4O1xuICB9O1xuICBjb25zdCBnZXRJdGVtQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1MaXN0W2l0ZW1JbmRleF07XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gaXRlbUxpc3QubGVuZ3RoO1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKGVkaXRJbmRleCwgcGFyYW1ldGVycykgPT4ge1xuICAgIGl0ZW1MaXN0W2VkaXRJbmRleF0ucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaXRlbUxpc3QoKSB7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSxcbiAgICBnZXQgaXRlbVR5cGUoKSB7XG4gICAgICByZXR1cm4gaXRlbVR5cGU7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIHJlbW92ZUl0ZW0sXG4gICAgZ2V0TGVuZ3RoLFxuICAgIGdldEl0ZW1CeU5hbWUsXG4gICAgZ2V0SXRlbUluZGV4QnlOYW1lLFxuICAgIGVkaXRJdGVtLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbUNvbnRhaW5lcjtcbiIsIi8vIE1vZGVsIGZvciBhIE5vdGVcbmNvbnN0IE5vdGUgPSAoW2dpdmVuTmFtZSwgY29udGVudHNdKSA9PiB7XG4gIGxldCBuYW1lID0gZ2l2ZW5OYW1lO1xuICBsZXQgdGV4dENvbnRlbnQgPSBjb250ZW50cztcblxuICByZXR1cm4ge1xuICAgIGdldCB0ZXh0Q29udGVudCgpIHtcbiAgICAgIHJldHVybiB0ZXh0Q29udGVudDtcbiAgICB9LFxuICAgIHNldCB0ZXh0Q29udGVudChuZXdUZXh0KSB7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld1RleHQ7XG4gICAgfSxcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3Tm90ZU5hbWUpIHtcbiAgICAgIG5hbWUgPSBuZXdOb3RlTmFtZTtcbiAgICB9LFxuICAgIGdldCBwYXJhbWV0ZXJzKCkge1xuICAgICAgcmV0dXJuIFtuYW1lLCB0ZXh0Q29udGVudF07XG4gICAgfSxcbiAgICBzZXQgcGFyYW1ldGVycyhbbmV3TmFtZSwgbmV3Q29udGVudHNdKSB7XG4gICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICAgIHRleHRDb250ZW50ID0gbmV3Q29udGVudHM7XG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGU7XG4iLCIvLyBNb2RlbCBmb3IgYSBQcm9qZWN0IC0+IFByb2plY3RzIGNhbiBob2xkIG5vdGVzIGFuZCB0by1kb3Ncbi8vIG1ha2VzIFNlcGFyYXRlIGNvbnRhaW5lcnMgZm9yIG5vdGVzIGFuZCB0by1kb3MgOiB3aWxsIGhhdmUgdG8gZG8gdGhhdCBtdWx0aWxwZSB0aW1lc1xuXG5pbXBvcnQgSXRlbUNvbnRhaW5lciBmcm9tIFwiLi9pdGVtLWNvbnRhaW5lclwiO1xuXG5jb25zdCBQcm9qZWN0ID0gKGdpdmVuTmFtZSwgdHlwZUxpc3QpID0+IHtcbiAgLy8gQSBNYXAgb2YgQ29udGFpbmVyc1xuICBsZXQgbmFtZSA9IGdpdmVuTmFtZTtcbiAgY29uc3QgY29udGFpbmVyTWFwID0gbmV3IE1hcCgpO1xuICB0eXBlTGlzdC5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgY29udGFpbmVyTWFwLnNldCh0eXBlLCBJdGVtQ29udGFpbmVyKHR5cGUpKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0VHlwZU5hbWVMaXN0ID0gKHR5cGUpID0+IGNvbnRhaW5lck1hcC5nZXQodHlwZSk7XG5cbiAgY29uc3QgYWRkSXRlbSA9ICh0eXBlLCBpdGVtKSA9PiB7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGdldFR5cGVOYW1lTGlzdCh0eXBlKTtcbiAgICB0eXBlQ29udGFpbmVyLmFkZEl0ZW0oaXRlbSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSXRlbSA9ICh0eXBlLCBpdGVtTmFtZSkgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgY29uc3QgZGVsZXRlSW5kZXggPSB0eXBlQ29udGFpbmVyLmdldEl0ZW1JbmRleEJ5TmFtZShpdGVtTmFtZSk7XG4gICAgdHlwZUNvbnRhaW5lci5yZW1vdmVJdGVtKGRlbGV0ZUluZGV4KTtcbiAgfTtcblxuICBjb25zdCBlZGl0SXRlbSA9ICh0eXBlLCBpdGVtTmFtZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgY29uc3QgZWRpdEluZGV4ID0gdHlwZUNvbnRhaW5lci5nZXRJdGVtSW5kZXhCeU5hbWUoaXRlbU5hbWUpO1xuICAgIHR5cGVDb250YWluZXIuZWRpdEl0ZW0oZWRpdEluZGV4LCBwYXJhbWV0ZXJzKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZShuZXdOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3TmFtZTtcbiAgICB9LFxuICAgIGFkZEl0ZW0sXG4gICAgZGVsZXRlSXRlbSxcbiAgICBlZGl0SXRlbSxcbiAgICBnZXRUeXBlTmFtZUxpc3QsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiLy8gTW9kZWwgZm9yIGEgVG8tRG9cblxuY29uc3QgVG9EbyA9IChbbmV3TmFtZSwgbmV3RGVzY3JpcHRpb24sIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5XSkgPT4ge1xuICBsZXQgbmFtZSA9IG5ld05hbWU7IC8vIFBsYWNlaG9sZGVyIHdpbGwgYmUgaW4gSFRNTFxuICBsZXQgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjsgLy8gUGxhY2Vob2xkZXIgd2lsbCBiZSBpbiBIVE1MXG4gIGxldCBkdWVEYXRlID0gbmV3RHVlRGF0ZTsgLy8gd2lsbCBpbXBsZW1lbnQgYSB0aW1lIGxpYnJhcnkgbGF0ZXIuXG4gIGxldCBwcmlvcml0eSA9IG5ld1ByaW9yaXR5OyAvLyBtYXliZSBhbiBFTlVNIHRoYXQgcmVwcmVzZW50cyB2YXJpYWJsZXMgYnkgcHJpb3JpdHlcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZShnaXZlbk5hbWUpIHtcbiAgICAgIG5hbWUgPSBnaXZlbk5hbWU7XG4gICAgfSxcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBzZXQgZGVzY3JpcHRpb24oZ2l2ZW5EZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSBnaXZlbkRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gZHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKGdpdmVuRGF0ZSkge1xuICAgICAgZHVlRGF0ZSA9IGdpdmVuRGF0ZTtcbiAgICB9LFxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9LFxuICAgIHNldCBwcmlvcml0eShnaXZlblByaW9yaXR5KSB7XG4gICAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XTtcbiAgICB9LFxuICAgIHNldCBwYXJhbWV0ZXJzKFtnaXZlbk5hbWUsIGdpdmVuRGVzY3JpcHRpb24sIGdpdmVuRGF0ZSwgZ2l2ZW5Qcmlvcml0eV0pIHtcbiAgICAgIG5hbWUgPSBnaXZlbk5hbWU7XG4gICAgICBkZXNjcmlwdGlvbiA9IGdpdmVuRGVzY3JpcHRpb247XG4gICAgICBkdWVEYXRlID0gZ2l2ZW5EYXRlO1xuICAgICAgcHJpb3JpdHkgPSBnaXZlblByaW9yaXR5O1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIiwiaW1wb3J0IFByb2plY3RzVmlldyBmcm9tIFwiLi92aWV3cy9wcm9qZWN0cy12aWV3XCI7XG5pbXBvcnQgVG9kb1ZpZXcgZnJvbSBcIi4vdmlld3MvdG9kby12aWV3XCJcbmltcG9ydCBOb3Rlc1ZpZXcgZnJvbSBcIi4vdmlld3Mvbm90ZXMtdmlld1wiO1xuXG5cbmNvbnN0IFZpZXcgPSAoY29udHJvbGxlcikgPT4ge1xuICAvLyBVcGRhdGVzIHZpZXcgZnJvbSB0aGUgbW9kZWwuXG5cbiAgLy8gVklFVyBVUERBVEVSU1xuICBjb25zdCBwcm9qVmlldyA9IFByb2plY3RzVmlldyhjb250cm9sbGVyLnByb2plY3RDb250cm9sbGVyKVxuICBjb25zdCBub3Rlc1ZpZXcgPSBOb3Rlc1ZpZXcoY29udHJvbGxlci5ub3RlQ29udHJvbGxlcilcbiAgY29uc29sZS5sb2cobm90ZXNWaWV3KTtcbiAgY29uc3QgdG9kb1ZpZXcgPSBUb2RvVmlldyhjb250cm9sbGVyLnRvZG9Db250cm9sbGVyKVxuICBjb250cm9sbGVyLm1vZGVsLmFkZE9ic2VydmVycyhbcHJvalZpZXcsIHRvZG9WaWV3LCBub3Rlc1ZpZXddKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcbiIsImZ1bmN0aW9uIE5vdGVzVmlldyhub3RlQ29udHJvbGxlcikge1xuICBjb25zdCBjb250cm9sbGVyID0gbm90ZUNvbnRyb2xsZXI7XG5cbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gXCJOb3RlXCI7XG5cbiAgY29uc3QgYWRkTm90ZVZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbm90ZVdpbmRvdy5jbGFzc05hbWUgPSBcImFkZC1ub3RlLXdpbmRvd1wiO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgLy9jb25zdCBub3RlTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbm90ZU5hbWUudHlwZSA9IFwidGV4dFwiO1xuICAgIC8vY29uc3Qgbm90ZUNvbnRlbnRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5vdGVDb250ZW50LnR5cGUgPSBcInRleHRhcmVhXCI7XG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBub3RlQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuXG4gICAgbm90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY29udHJvbGxlci5hZGROb3RlKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlTmFtZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuICAgIG5vdGVXaW5kb3cuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RlLXZpZXdcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVXaW5kb3cpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXROb3RlVmlldyA9ICgpID0+IHtcbiAgICBcbiAgfVxuICBjb25zdCB1cGRhdGVFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgXG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmVkaXQtbm90ZS1idXR0b25cIilcbiAgICBjb25zdCBkZWxldGVCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtbm90ZS1idXR0b25cIikgXG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRyb2xsZXIuZGVsZXRlTm90ZSkpXG4gICAgZWRpdEJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjb250cm9sbGVyLmVkaXROb3RlKSlcbiAgfTtcbiAgY29uc3QgYnVpbGRWaWV3ID0gKGdpdmVuTm90ZUxpc3QpID0+IHtcbiAgICBjb25zdCBuZXdOb3RlVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3Tm90ZVZpZXcuY2xhc3NOYW1lID0gXCJub3RlLXZpZXdcIjtcbiAgICBnaXZlbk5vdGVMaXN0LmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGNvbnN0IFtub3RlTmFtZSwgbm90ZUNvbnRlbnRdID0gbm90ZS5wYXJhbWV0ZXJzO1xuICAgICAgY29uc3Qgbm90ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBub3RlSG9sZGVyLmNsYXNzTmFtZSA9IFwibm90ZVwiO1xuICAgICAgY29uc3Qgbm90ZU5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBub3RlTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5vdGVOYW1lO1xuICAgICAgY29uc3Qgbm90ZU5hbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBub3RlTmFtZUNvbnRlbnQudGV4dENvbnRlbnQgPSBub3RlQ29udGVudDtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICBlZGl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdC1ub3RlLWJ1dHRvblwiXG4gICAgICBlZGl0QnV0dG9uLnZhbHVlID0gXCJlZGl0XCI7XG4gICAgICBcbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi52YWx1ZSA9IFwiZGVsZXRlXCI7XG4gICAgICBlZGl0QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiXG4gICAgICBkZWxldGVCdXR0b24uY2xhc3NOYW1lID0gXCJkZWxldGUtbm90ZS1idXR0b25cIlxuXG4gICAgICAvL2J1dG9uIGZvclxuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUhlYWRlcik7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKG5vdGVOYW1lQ29udGVudCk7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgbmV3Tm90ZVZpZXcuYXBwZW5kQ2hpbGQobm90ZUhvbGRlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld05vdGVWaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdChcIk5vdGVcIik7XG4gICAgY29uc3Qgbm90ZUxpc3QgPSBub3RlQ29udGFpbmVyLml0ZW1MaXN0O1xuICAgIGNvbnN0IG5vdGVWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RlLCAuYWRkLW5vdGUtd2luZG93XCIpO1xuICAgIG5vdGVWaWV3LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3Tm90ZVZpZXcgPSBidWlsZFZpZXcobm90ZUxpc3QpO1xuICAgIGNvbnN0IGNvbnRlbnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi50b2RvLXZpZXdcIik7XG4gICAgY29udGVudFNpZGUuYXBwZW5kQ2hpbGQobmV3Tm90ZVZpZXcpO1xuICAgIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKVxuXG4gIH07XG5cbiAgY29uc3QgaW5zdGFudGlhdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b24uYWRkLW5vdGUtYnV0dG9uXCIpO1xuICAgIHRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZE5vdGVWaWV3KTtcbiAgfTtcblxuICBpbnN0YW50aWF0ZSgpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG9ic2VydmVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck5hbWU7XG4gICAgfSxcbiAgICBnZXQgY29udHJvbGxlcigpIHtcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG5cbn1cbmV4cG9ydCBkZWZhdWx0IE5vdGVzVmlldztcbiIsImZ1bmN0aW9uIFByb2plY3RzVmlldygpIHtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gXCJQcm9qZWN0XCI7XG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmV3TGlzdC5jbGFzc05hbWUgPSBcInByb2plY3QtbGlzdFwiO1xuICAgIHByb2plY3RMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IG5ld05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBuZXdOYW1lLmNsYXNzTmFtZSA9IFwicHJvamVjdC10aXRsZVwiO1xuICAgICAgbmV3TmFtZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld0xpc3QuY2xvbmVOb2RlKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZVZpZXcgPSAobW9kZWwpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBtb2RlbC5wcm9qZWN0cztcbiAgICBjb25zdCBwcm9qVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYucHJvamVjdC1saXN0XCIpO1xuICAgIGNvbnN0IG5ld1Byb2pWaWV3ID0gYnVpbGRWaWV3KHByb2plY3ROYW1lcyk7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYuc2lkZWJhclwiKTtcbiAgICBzaWRlQmFyLnJlcGxhY2VDaGlsZChwcm9qVmlldywgbmV3UHJvalZpZXcpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG9ic2VydmVyTmFtZSgpIHtcbiAgICAgIHJldHVybiBvYnNlcnZlck5hbWU7XG4gICAgfSxcbiAgICBidWlsZFZpZXcsXG4gICAgdXBkYXRlVmlldyxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNWaWV3O1xuIiwiZnVuY3Rpb24gVG9kb1ZpZXcoKSB7XG5cbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gXCJUb0RvXCI7XG5cblxuICBjb25zdCBidWlsZFZpZXcgPSAoZ2l2ZW5Ub2RvTGlzdCkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG9WaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuZXdUb2RvVmlldy5jbGFzc05hbWUgPSBcInRvZG8tdmlld1wiO1xuICAgIGdpdmVuVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgW3RvZG9OYW1lLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHldID1cbiAgICAgICAgdG9kby5wYXJhbWV0ZXJzO1xuICAgICAgY29uc3QgdGRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdGRIb2xkZXIuY2xhc3NOYW1lID0gXCJ0b2RvXCI7XG5cbiAgICAgIGNvbnN0IHRkTmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIHRkTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IHRvZG9OYW1lO1xuICAgICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGROYW1lSGVhZGVyKTtcblxuICAgICAgY29uc3QgdGREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGREZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRGVzY3JpcHRpb24pO1xuXG4gICAgICBjb25zdCB0ZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIHRkRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG9EdWVEYXRlO1xuICAgICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGREdWVEYXRlKTtcblxuICAgICAgY29uc3QgdGRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgdGRQcmlvcml0eS50ZXh0Q29udGVudCA9IHRvZG9Qcmlvcml0eTtcbiAgICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkUHJpb3JpdHkpO1xuXG4gICAgICBuZXdUb2RvVmlldy5hcHBlbmRDaGlsZCh0ZEhvbGRlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1RvZG9WaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdChcIlRvRG9cIik7XG4gICAgY29uc3QgdG9kb0xpc3QgPSB0b2RvQ29udGFpbmVyLml0ZW1MaXN0O1xuICAgIGNvbnN0IG5ld1RvZG9WaWV3ID0gYnVpbGRWaWV3KHRvZG9MaXN0KTtcbiAgICBjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXYudG9kby12aWV3XCIpO1xuICAgIGNvbnN0IGNvbnRlbnRTaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdi5jb250ZW50LXNpZGVcIik7XG4gICAgY29udGVudFNpZGUucmVwbGFjZUNoaWxkKHRvZG9WaWV3LCBuZXdUb2RvVmlldyk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0IG9ic2VydmVyTmFtZSgpIHtyZXR1cm4gb2JzZXJ2ZXJOYW1lfSxidWlsZFZpZXcsIHVwZGF0ZVZpZXcgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb1ZpZXc7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgTW9kZWwgZnJvbSBcIi4vbW9kdWxlcy9tb2RlbFwiO1xuaW1wb3J0IENvbnRyb2xsZXIgZnJvbSBcIi4vbW9kdWxlcy9jb250cm9sbGVyXCJcbmltcG9ydCBWaWV3IGZyb20gXCIuL21vZHVsZXMvdmlld1wiXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBNb2RlbCgpO1xuICBjb25zdCBjb250cm9sbGVyID0gQ29udHJvbGxlcihtb2RlbClcbiAgY29uc3QgdmlldyA9IFZpZXcoY29udHJvbGxlcilcbn07XG5cbm1haW4oKTtcbi8vIFRvZG9zXG4vLyBQcm9qZWN0c1xuLy8gVmlldyAvIFVJXG4vLyBCdXR0b24gaW50ZXJhY3RzIHdpdGggdG9vbHNcbi8vIFByb2plY3RzIGltcGxlbWVudCBub3RlcyBhbmQgdG8tZG9zXG4vLyBOb3RlcyBhcmUgYW55IHRleHQgKFJFTUVNQkVSIFRPIFNBTklUSVpFKVxuLy8gVG8gZG9zIGFyZSB0aXRsZSwgIGR1ZSBkYXRlLCBjb2xvci9pbXBvcnRhbmNlXG4vLyBFeHBhbmRpbmcgJiBEZWxldGluZyBUbyBEb3Ncbi8vIFN0b3JpbmcgVG8gRG8gTGlzdHMgb24gTG9jYWwgU3RvcmFnZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9