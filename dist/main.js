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
___CSS_LOADER_EXPORT___.push([module.id, ":root, body {\n  padding: 0;\n  margin: 0; }\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 5fr; }\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  display: flex;\n  background-color: pink; }\n  header .title {\n    font-size: calc(2rem + 5px); }\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  background-color: palegoldenrod;\n  display: grid;\n  grid-template-columns: 1fr 4fr; }\n\n.sidebar {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  border-right: 1px solid black; }\n\n.content-side {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr; }\n  .content-side .task-view {\n    display: grid; }\n  .content-side .note-view {\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 1fr);\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin; }\n    .content-side .note-view .add-note-button {\n      grid-area: 1 / 1 / 2 / 4;\n      /*background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0);*/ }\n    .content-side .note-view .note {\n      place-self: center;\n      background-color: antiquewhite;\n      height: 200px;\n      width: 200px; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AACA;EACI,UAAU;EACV,SAAS,EAAA;;AAGb;EACI,aAAa;EACb,2BAA2B,EAAA;;AAG/B;EACI,wBAAwB;EACxB,aAAa;EACb,sBAAsB,EAAA;EAH1B;IAKQ,2BAA2B,EAAA;;AAInC;EACI,wBAAwB;EACxB,+BAA+B;EAC/B,aAAa;EACb,8BAA8B,EAAA;;AAKlC;EACI,aAAa;EACb,2BAA2B;EAC3B,6BAA6B,EAAA;;AAGjC;EACI,aAAa;EACb,0BAA2B;EAC3B,2BAA2B,EAAA;EAH/B;IAMQ,aAAa,EAAA;EANrB;IASQ,aAAa;IACb,yCAAyC;IACzC,qCAAqC;IACrC,UAAU,EAAA;IAZlB;MAcY,wBAAwB;MACxB;;;;;;gDALoC,EAWC;IArBjD;MAyBY,kBAAkB;MAClB,8BAA8B;MAC9B,aAAa;MACb,YAAY,EAAA","sourcesContent":["// We have to use @import or @use  for SASS\n:root, body {\n    padding: 0;\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    grid-template-rows: 1fr 5fr;\n}\n\nheader {\n    grid-area: 1 / 1 / 2 / 2;\n    display: flex;\n    background-color: pink;\n    .title {\n        font-size: calc(2rem + 5px);\n    }\n}\n\nmain {\n    grid-area: 2 / 1 / 3 / 2; \n    background-color: palegoldenrod;\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n\n    \n}\n\n.sidebar {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    border-right: 1px solid black;\n}\n\n.content-side {\n    display: grid;\n    grid-template-columns:  1fr;\n    grid-template-rows: 1fr 1fr;\n\n    .task-view {\n        display: grid;\n    }\n    .note-view {\n        display: grid;\n        grid-template-rows: repeat(auto-fit, 1fr);\n        grid-template-columns: repeat(3, 1fr);\n        gap: 1vmin;\n        .add-note-button {\n            grid-area: 1 / 1 / 2 / 4;\n            /*background: transparent;\n            border: transparent;\n            width: fit-content;\n            height: fit-content;\n            align-self: center;\n            justify-self: end;\n            box-shadow: 0 0  35px rgb(8, 0, 0);*/\n        }\n\n        .note {\n            place-self: center;\n            background-color: antiquewhite;\n            height: 200px;\n            width: 200px;\n        }\n    }\n\n    \n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _models_to_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/to-do */ "./src/modules/models/to-do.js");





// Create A Container of All Projects.
function Model() {
  const toolTypes = ["Note", "ToDo"];
  const projectList = (0,_models_item_container__WEBPACK_IMPORTED_MODULE_0__["default"])("Project");
  let curProjIndex = 0; // index of the currentProject
  let projCounter = 0;
  let observers = [];
  const addObserver = (view) => {
    observers.push(view);
  };

  const updateObservers = () => {
    observers.forEach((observer) => {
      observer.updateView(this);
    });
  };
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
      newTool = (0,_models_to_do__WEBPACK_IMPORTED_MODULE_3__["default"])(parameters);
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
    addObserver
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

/***/ "./src/modules/models/to-do.js":
/*!*************************************!*\
  !*** ./src/modules/models/to-do.js ***!
  \*************************************/
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

/***/ "./src/modules/view-controller.js":
/*!****************************************!*\
  !*** ./src/modules/view-controller.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ViewController = (model) => {
    // When you click on a button ((defined by instantiator)), it calls a Menu Opener.
    // When you save the information in that button, it calls a model updater.
    // Then, you save it with the view updater.

    // MODEL UPDATERS

    const getSaveFields = (e) => {}
    const deleteTask = (type, name) => {}
    const saveTask = (type, parameters) => {} // saves to model upon click


    // MENU OPENERS

    const addTask = () => {} // add task menu
    const editTask = () => {}
    const addNote = () => {} // add note menu
    const editNote = () => {}
    const addProject = () => {} //adds Project Menu
    const editProject = () => {} //edits Project Menu 


    // INSTANTIATORS : Define the Event handlers.

    
    const taskForm = () => {
        const formholder = document.createElement("div")
        const savebutton = document.createElement("button")
        savebutton.addEventListener( "click", updateNotes)

    }
    const addTaskButton = () => {
        const taskButton = document.querySelector("button.add-note-button")
        taskButton.addEventListener("click", (e) => {
            console.log(`wow`);
            
        })
        
    }
    addTaskButton()

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewController);


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
/* harmony import */ var _modules_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view-controller */ "./src/modules/view-controller.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");




const main = () => {
  const model = (0,_modules_model__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const viewController = (0,_modules_view_controller__WEBPACK_IMPORTED_MODULE_1__["default"])(model)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ2tCO0FBQ2hDOztBQUV0QjtBQUNBLGdCQUFnQiwwREFBSztBQUNyQix5QkFBeUIsb0VBQWM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVsLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvaXRlbS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9ub3RlLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3RvLWRvLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy92aWV3LWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290LCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1ZnI7IH1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7IH1cXG4gIGhlYWRlciAudGl0bGUge1xcbiAgICBmb250LXNpemU6IGNhbGMoMnJlbSArIDVweCk7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBhbGVnb2xkZW5yb2Q7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyOyB9XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLmNvbnRlbnQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7IH1cXG4gIC5jb250ZW50LXNpZGUgLnRhc2stdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IH1cXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgICBnYXA6IDF2bWluOyB9XFxuICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtYnV0dG9uIHtcXG4gICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgICAgLypiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIDM1cHggcmdiKDgsIDAsIDApOyovIH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIHtcXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgd2lkdGg6IDIwMHB4OyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDSSxVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUdiO0VBQ0ksYUFBYTtFQUNiLDJCQUEyQixFQUFBOztBQUcvQjtFQUNJLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFIMUI7SUFLUSwyQkFBMkIsRUFBQTs7QUFJbkM7RUFDSSx3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTs7QUFLbEM7RUFDSSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLGFBQWE7RUFDYiwwQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUE7RUFIL0I7SUFNUSxhQUFhLEVBQUE7RUFOckI7SUFTUSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLHFDQUFxQztJQUNyQyxVQUFVLEVBQUE7SUFabEI7TUFjWSx3QkFBd0I7TUFDeEI7Ozs7OztnREFMb0MsRUFXQztJQXJCakQ7TUF5Qlksa0JBQWtCO01BQ2xCLDhCQUE4QjtNQUM5QixhQUFhO01BQ2IsWUFBWSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8vIFdlIGhhdmUgdG8gdXNlIEBpbXBvcnQgb3IgQHVzZSAgZm9yIFNBU1NcXG46cm9vdCwgYm9keSB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDVmcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbiAgICAudGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKDJyZW0gKyA1cHgpO1xcbiAgICB9XFxufVxcblxcbm1haW4ge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7IFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxlZ29sZGVucm9kO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuXFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jb250ZW50LXNpZGUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG5cXG4gICAgLnRhc2stdmlldyB7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuICAgIC5ub3RlLXZpZXcge1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCAxZnIpO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgICAgIGdhcDogMXZtaW47XFxuICAgICAgICAuYWRkLW5vdGUtYnV0dG9uIHtcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDQ7XFxuICAgICAgICAgICAgLypiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgIDM1cHggcmdiKDgsIDAsIDApOyovXFxuICAgICAgICB9XFxuXFxuICAgICAgICAubm90ZSB7XFxuICAgICAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSBcIi4vbW9kZWxzL2l0ZW0tY29udGFpbmVyXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9tb2RlbHMvcHJvamVjdFwiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4vbW9kZWxzL25vdGVcIjtcbmltcG9ydCBUb0RvIGZyb20gXCIuL21vZGVscy90by1kb1wiO1xuXG4vLyBDcmVhdGUgQSBDb250YWluZXIgb2YgQWxsIFByb2plY3RzLlxuZnVuY3Rpb24gTW9kZWwoKSB7XG4gIGNvbnN0IHRvb2xUeXBlcyA9IFtcIk5vdGVcIiwgXCJUb0RvXCJdO1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IEl0ZW1Db250YWluZXIoXCJQcm9qZWN0XCIpO1xuICBsZXQgY3VyUHJvakluZGV4ID0gMDsgLy8gaW5kZXggb2YgdGhlIGN1cnJlbnRQcm9qZWN0XG4gIGxldCBwcm9qQ291bnRlciA9IDA7XG4gIGxldCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3QgYWRkT2JzZXJ2ZXIgPSAodmlldykgPT4ge1xuICAgIG9ic2VydmVycy5wdXNoKHZpZXcpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZU9ic2VydmVycyA9ICgpID0+IHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcodGhpcyk7XG4gICAgfSk7XG4gIH07XG4gIC8vIFRvIERpc3BsYXkgdGhlIEN1cnJlbnQgUHJvamVjdCBvbnRvIHRoZSBTY3JlZW5cbiAgY29uc3QgZ2V0Q3VycmVudFByb2plY3QgPSAoKSA9PiBwcm9qZWN0TGlzdC5pdGVtTGlzdFtjdXJQcm9qSW5kZXhdO1xuXG4gIC8vIFRvIEFkZCBhIHByb2plY3QgdG8gdGhlIHRhYiAoZG8gbm90IHN3aXRjaCB0byBpdC4pXG4gIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdE5hbWUgPSBgUHJvamVjdCAke3Byb2pDb3VudGVyfWApID0+IHtcbiAgICBwcm9qZWN0TGlzdC5hZGRJdGVtKFByb2plY3QocHJvamVjdE5hbWUsIHRvb2xUeXBlcykpO1xuICAgIHByb2pDb3VudGVyKys7XG4gIH07XG5cbiAgLy8gVG8gR2V0IGEgbGlzdCBvZiBhbGwgeCdzIGFuZCB5J3NcbiAgY29uc3QgZ2V0VHlwZU5hbWVMaXN0ID0gKHR5cGUpID0+IHtcbiAgICBjb25zdCBjdXJyID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICByZXR1cm4gY3Vyci5nZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0UHJvamVjdEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0TGlzdC5nZXRJdGVtQnlOYW1lKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICBjb25zdCBnZXRQcm9qZWN0SW5kZXhCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdExpc3QuZ2V0SXRlbUluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgfTtcblxuICAvLyBUbyBkZWxldGUgYSBwcm9qZWN0XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qSW5kZXggPSBnZXRQcm9qZWN0SW5kZXhCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LnJlbW92ZUl0ZW0ocHJvakluZGV4KTtcbiAgfTtcblxuICAvLyBUbyBjaGFuZ2UgYW55IHByb2plY3QncyBuYW1lXG4gIGNvbnN0IGVkaXRQcm9qZWN0TmFtZSA9IChvcmlnaW5hbE5hbWUsIG5ld1Byb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgZWRpdFByb2ogPSBnZXRQcm9qZWN0QnlOYW1lKG9yaWdpbmFsTmFtZSk7XG4gICAgZWRpdFByb2oubmFtZSA9IG5ld1Byb2plY3ROYW1lO1xuICB9O1xuXG4gIC8vIFdoZW4gY2xpY2tlZCwgc3dpdGNoIFByb2plY3QuXG4gIGNvbnN0IHN3aXRjaFByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgIGN1clByb2pJbmRleCA9IHByb2plY3RMaXN0LmdldEl0ZW1JbmRleEJ5TmFtZShuYW1lKTtcbiAgfTtcblxuICAvLyBUbyBhZGQgYSBuZXcgVG9vbFxuICBjb25zdCBhZGRUb29sID0gKHRvb2xUeXBlLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgbGV0IG5ld1Rvb2w7XG4gICAgaWYgKHRvb2xUeXBlID09PSBcIk5vdGVcIikge1xuICAgICAgbmV3VG9vbCA9IE5vdGUocGFyYW1ldGVycyk7XG4gICAgfSBlbHNlIGlmICh0b29sVHlwZSA9PT0gXCJUb0RvXCIpIHtcbiAgICAgIG5ld1Rvb2wgPSBUb0RvKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBjb25zdCBjdXJQcm9qZWN0ID0gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcbiAgICBjdXJQcm9qZWN0LmFkZEl0ZW0odG9vbFR5cGUsIG5ld1Rvb2wpO1xuICB9O1xuXG4gIC8vIFRvIGRlbGV0ZSBhIHRvb2xcbiAgY29uc3QgZGVsZXRlVG9vbCA9ICh0b29sVHlwZSwgbmFtZSkgPT4ge1xuICAgIGNvbnN0IGN1clByb2ogPSBnZXRDdXJyZW50UHJvamVjdCgpO1xuICAgIGN1clByb2ouZGVsZXRlSXRlbSh0b29sVHlwZSwgbmFtZSk7XG4gIH07XG5cbiAgLy8gVG8gY2hhbmdlIHRoZSBjb250ZW50cyBvZiBhIHRvb2xcbiAgY29uc3QgZWRpdFRvb2wgPSAodG9vbFR5cGUsIG5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmVkaXRJdGVtKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKTtcbiAgfTtcblxuICBhZGRQcm9qZWN0KCk7IC8vIGluaXRpYWxpemVzIHRoZSBwcm9qZWN0XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgcHJvamVjdHMoKSB7XG4gICAgICByZXR1cm4gcHJvamVjdExpc3QuaXRlbUxpc3Q7XG4gICAgfSxcbiAgICBnZXQgbmFtZXMoKSB7XG4gICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0Lml0ZW1MaXN0O1xuICAgICAgcmV0dXJuIHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lKTtcbiAgICB9LFxuICAgIGFkZFByb2plY3QsXG4gICAgZGVsZXRlUHJvamVjdCxcbiAgICBlZGl0UHJvamVjdE5hbWUsXG4gICAgZ2V0Q3VycmVudFByb2plY3QsXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICAgIHN3aXRjaFByb2plY3QsXG4gICAgYWRkVG9vbCxcbiAgICBkZWxldGVUb29sLFxuICAgIGVkaXRUb29sLFxuICAgIHVwZGF0ZU9ic2VydmVycyxcbiAgICBhZGRPYnNlcnZlclxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcbiIsIi8vIFlvdSBjYW4gY29udGFpbiBPTkUgdHlwZSBvZiBvYmplY3QgKG5vdGVzLCB0by1kb3MsIGV0YylcbmNvbnN0IEl0ZW1Db250YWluZXIgPSAoa2luZCkgPT4ge1xuICBjb25zdCBpdGVtVHlwZSA9IGtpbmQ7XG4gIGNvbnN0IGl0ZW1MaXN0ID0gW107XG5cbiAgY29uc3QgYWRkSXRlbSA9IChpdGVtVG9BZGQpID0+IHtcbiAgICBpdGVtTGlzdC5wdXNoKGl0ZW1Ub0FkZCk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlSXRlbSA9IChyZW1vdmVJbmRleCkgPT4ge1xuICAgIGl0ZW1MaXN0LnNwbGljZShyZW1vdmVJbmRleCwgMSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0SXRlbUluZGV4QnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBpdGVtTGlzdC5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1JbmRleDtcbiAgfTtcbiAgY29uc3QgZ2V0SXRlbUJ5TmFtZSA9IChuYW1lKSA9PiB7XG4gICAgY29uc3QgaXRlbUluZGV4ID0gZ2V0SXRlbUluZGV4QnlOYW1lKG5hbWUpO1xuICAgIHJldHVybiBpdGVtTGlzdFtpdGVtSW5kZXhdO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGl0ZW1MaXN0Lmxlbmd0aDtcblxuICBjb25zdCBlZGl0SXRlbSA9IChlZGl0SW5kZXgsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBpdGVtTGlzdFtlZGl0SW5kZXhdLnBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IGl0ZW1MaXN0KCkge1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0O1xuICAgIH0sXG4gICAgZ2V0IGl0ZW1UeXBlKCkge1xuICAgICAgcmV0dXJuIGl0ZW1UeXBlO1xuICAgIH0sXG4gICAgYWRkSXRlbSxcbiAgICByZW1vdmVJdGVtLFxuICAgIGdldExlbmd0aCxcbiAgICBnZXRJdGVtQnlOYW1lLFxuICAgIGdldEl0ZW1JbmRleEJ5TmFtZSxcbiAgICBlZGl0SXRlbSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1Db250YWluZXI7XG4iLCIvLyBNb2RlbCBmb3IgYSBOb3RlXG5jb25zdCBOb3RlID0gKFtnaXZlbk5hbWUsIGNvbnRlbnRzXSkgPT4ge1xuICBsZXQgbmFtZSA9IGdpdmVuTmFtZTtcbiAgbGV0IHRleHRDb250ZW50ID0gY29udGVudHM7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgdGV4dENvbnRlbnQoKSB7XG4gICAgICByZXR1cm4gdGV4dENvbnRlbnQ7XG4gICAgfSxcbiAgICBzZXQgdGV4dENvbnRlbnQobmV3VGV4dCkge1xuICAgICAgdGV4dENvbnRlbnQgPSBuZXdUZXh0O1xuICAgIH0sXG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICByZXR1cm4gbmFtZTtcbiAgICB9LFxuICAgIHNldCBuYW1lKG5ld05vdGVOYW1lKSB7XG4gICAgICBuYW1lID0gbmV3Tm90ZU5hbWU7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgdGV4dENvbnRlbnRdO1xuICAgIH0sXG4gICAgc2V0IHBhcmFtZXRlcnMoW25ld05hbWUsIG5ld0NvbnRlbnRzXSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgICB0ZXh0Q29udGVudCA9IG5ld0NvbnRlbnRzO1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RlO1xuIiwiLy8gTW9kZWwgZm9yIGEgUHJvamVjdCAtPiBQcm9qZWN0cyBjYW4gaG9sZCBub3RlcyBhbmQgdG8tZG9zXG4vLyBtYWtlcyBTZXBhcmF0ZSBjb250YWluZXJzIGZvciBub3RlcyBhbmQgdG8tZG9zIDogd2lsbCBoYXZlIHRvIGRvIHRoYXQgbXVsdGlscGUgdGltZXNcblxuaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSBcIi4vaXRlbS1jb250YWluZXJcIjtcblxuY29uc3QgUHJvamVjdCA9IChnaXZlbk5hbWUsIHR5cGVMaXN0KSA9PiB7XG4gIC8vIEEgTWFwIG9mIENvbnRhaW5lcnNcbiAgbGV0IG5hbWUgPSBnaXZlbk5hbWU7XG4gIGNvbnN0IGNvbnRhaW5lck1hcCA9IG5ldyBNYXAoKTtcbiAgdHlwZUxpc3QuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnRhaW5lck1hcC5zZXQodHlwZSwgSXRlbUNvbnRhaW5lcih0eXBlKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiBjb250YWluZXJNYXAuZ2V0KHR5cGUpO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAodHlwZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgdHlwZUNvbnRhaW5lci5hZGRJdGVtKGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodHlwZSwgaXRlbU5hbWUpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdHlwZUNvbnRhaW5lci5nZXRJdGVtSW5kZXhCeU5hbWUoaXRlbU5hbWUpO1xuICAgIHR5cGVDb250YWluZXIucmVtb3ZlSXRlbShkZWxldGVJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAodHlwZSwgaXRlbU5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGVkaXRJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLmVkaXRJdGVtKGVkaXRJbmRleCwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgZWRpdEl0ZW0sXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsIi8vIE1vZGVsIGZvciBhIFRvLURvXG5cbmNvbnN0IFRvRG8gPSAoW25ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eV0pID0+IHtcbiAgbGV0IG5hbWUgPSBuZXdOYW1lOyAvLyBQbGFjZWhvbGRlciB3aWxsIGJlIGluIEhUTUxcbiAgbGV0IGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247IC8vIFBsYWNlaG9sZGVyIHdpbGwgYmUgaW4gSFRNTFxuICBsZXQgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7IC8vIHdpbGwgaW1wbGVtZW50IGEgdGltZSBsaWJyYXJ5IGxhdGVyLlxuICBsZXQgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTsgLy8gbWF5YmUgYW4gRU5VTSB0aGF0IHJlcHJlc2VudHMgdmFyaWFibGVzIGJ5IHByaW9yaXR5XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUoZ2l2ZW5OYW1lKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgIH0sXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgc2V0IGRlc2NyaXB0aW9uKGdpdmVuRGVzY3JpcHRpb24pIHtcbiAgICAgIGRlc2NyaXB0aW9uID0gZ2l2ZW5EZXNjcmlwdGlvbjtcbiAgICB9LFxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIGR1ZURhdGU7XG4gICAgfSxcbiAgICBzZXQgZHVlRGF0ZShnaXZlbkRhdGUpIHtcbiAgICAgIGR1ZURhdGUgPSBnaXZlbkRhdGU7XG4gICAgfSxcbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gcHJpb3JpdHk7XG4gICAgfSxcbiAgICBzZXQgcHJpb3JpdHkoZ2l2ZW5Qcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHkgPSBnaXZlblByaW9yaXR5O1xuICAgIH0sXG4gICAgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgICByZXR1cm4gW25hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eV07XG4gICAgfSxcbiAgICBzZXQgcGFyYW1ldGVycyhbZ2l2ZW5OYW1lLCBnaXZlbkRlc2NyaXB0aW9uLCBnaXZlbkRhdGUsIGdpdmVuUHJpb3JpdHldKSB7XG4gICAgICBuYW1lID0gZ2l2ZW5OYW1lO1xuICAgICAgZGVzY3JpcHRpb24gPSBnaXZlbkRlc2NyaXB0aW9uO1xuICAgICAgZHVlRGF0ZSA9IGdpdmVuRGF0ZTtcbiAgICAgIHByaW9yaXR5ID0gZ2l2ZW5Qcmlvcml0eTtcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9EbztcbiIsImNvbnN0IFZpZXdDb250cm9sbGVyID0gKG1vZGVsKSA9PiB7XG4gICAgLy8gV2hlbiB5b3UgY2xpY2sgb24gYSBidXR0b24gKChkZWZpbmVkIGJ5IGluc3RhbnRpYXRvcikpLCBpdCBjYWxscyBhIE1lbnUgT3BlbmVyLlxuICAgIC8vIFdoZW4geW91IHNhdmUgdGhlIGluZm9ybWF0aW9uIGluIHRoYXQgYnV0dG9uLCBpdCBjYWxscyBhIG1vZGVsIHVwZGF0ZXIuXG4gICAgLy8gVGhlbiwgeW91IHNhdmUgaXQgd2l0aCB0aGUgdmlldyB1cGRhdGVyLlxuXG4gICAgLy8gTU9ERUwgVVBEQVRFUlNcblxuICAgIGNvbnN0IGdldFNhdmVGaWVsZHMgPSAoZSkgPT4ge31cbiAgICBjb25zdCBkZWxldGVUYXNrID0gKHR5cGUsIG5hbWUpID0+IHt9XG4gICAgY29uc3Qgc2F2ZVRhc2sgPSAodHlwZSwgcGFyYW1ldGVycykgPT4ge30gLy8gc2F2ZXMgdG8gbW9kZWwgdXBvbiBjbGlja1xuXG5cbiAgICAvLyBNRU5VIE9QRU5FUlNcblxuICAgIGNvbnN0IGFkZFRhc2sgPSAoKSA9PiB7fSAvLyBhZGQgdGFzayBtZW51XG4gICAgY29uc3QgZWRpdFRhc2sgPSAoKSA9PiB7fVxuICAgIGNvbnN0IGFkZE5vdGUgPSAoKSA9PiB7fSAvLyBhZGQgbm90ZSBtZW51XG4gICAgY29uc3QgZWRpdE5vdGUgPSAoKSA9PiB7fVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7fSAvL2FkZHMgUHJvamVjdCBNZW51XG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAoKSA9PiB7fSAvL2VkaXRzIFByb2plY3QgTWVudSBcblxuXG4gICAgLy8gSU5TVEFOVElBVE9SUyA6IERlZmluZSB0aGUgRXZlbnQgaGFuZGxlcnMuXG5cbiAgICBcbiAgICBjb25zdCB0YXNrRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3Qgc2F2ZWJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgc2F2ZWJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIHVwZGF0ZU5vdGVzKVxuXG4gICAgfVxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uLmFkZC1ub3RlLWJ1dHRvblwiKVxuICAgICAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYHdvd2ApO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbiAgICBhZGRUYXNrQnV0dG9uKClcblxufTtcbmV4cG9ydCBkZWZhdWx0IFZpZXdDb250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE1vZGVsIGZyb20gXCIuL21vZHVsZXMvbW9kZWxcIjtcbmltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9tb2R1bGVzL3ZpZXctY29udHJvbGxlclwiXG5pbXBvcnQgXCIuL3N0eWxlLnNjc3NcIjtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBNb2RlbCgpO1xuICBjb25zdCB2aWV3Q29udHJvbGxlciA9IFZpZXdDb250cm9sbGVyKG1vZGVsKVxufTtcblxubWFpbigpO1xuLy8gVG9kb3Ncbi8vIFByb2plY3RzXG4vLyBWaWV3IC8gVUlcbi8vIEJ1dHRvbiBpbnRlcmFjdHMgd2l0aCB0b29sc1xuLy8gUHJvamVjdHMgaW1wbGVtZW50IG5vdGVzIGFuZCB0by1kb3Ncbi8vIE5vdGVzIGFyZSBhbnkgdGV4dCAoUkVNRU1CRVIgVE8gU0FOSVRJWkUpXG4vLyBUbyBkb3MgYXJlIHRpdGxlLCAgZHVlIGRhdGUsIGNvbG9yL2ltcG9ydGFuY2Vcbi8vIEV4cGFuZGluZyAmIERlbGV0aW5nIFRvIERvc1xuLy8gU3RvcmluZyBUbyBEbyBMaXN0cyBvbiBMb2NhbCBTdG9yYWdlXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=