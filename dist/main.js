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
___CSS_LOADER_EXPORT___.push([module.id, "@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n.sidebar .project-title .delete-project-button,\n.sidebar .project-title .edit-project-button, .sidebar .add-project-button, .content-side .todo-view .add-todo-button, .content-side .note-view .add-note-button, .content-side .note-view .note form .input-note-button,\n.content-side .note-view .add-note-window form .input-note-button, .content-side .note-view .note .edit-note-button,\n.content-side .note-view .note .true-edit-button,\n.content-side .note-view .note .delete-note-button,\n.content-side .note-view .add-note-window .edit-note-button,\n.content-side .note-view .add-note-window .true-edit-button,\n.content-side .note-view .add-note-window .delete-note-button {\n  background-color: #ef8354;\n  font-weight: bolder;\n  color: aliceblue;\n  font-size: calc(5px + 1rem);\n  border: 1px solid transparent;\n  border-radius: 4px;\n  width: 100%;\n  text-align: center; }\n  .sidebar .project-title .delete-project-button:hover,\n  .sidebar .project-title .edit-project-button:hover, .sidebar .add-project-button:hover, .content-side .todo-view .add-todo-button:hover, .content-side .note-view .add-note-button:hover, .content-side .note-view .note form .input-note-button:hover,\n  .content-side .note-view .add-note-window form .input-note-button:hover, .content-side .note-view .note .edit-note-button:hover,\n  .content-side .note-view .note .true-edit-button:hover,\n  .content-side .note-view .note .delete-note-button:hover,\n  .content-side .note-view .add-note-window .edit-note-button:hover,\n  .content-side .note-view .add-note-window .true-edit-button:hover,\n  .content-side .note-view .add-note-window .delete-note-button:hover {\n    color: #2d3142; }\n  .sidebar .project-title .delete-project-button:active,\n  .sidebar .project-title .edit-project-button:active, .sidebar .add-project-button:active, .content-side .todo-view .add-todo-button:active, .content-side .note-view .add-note-button:active, .content-side .note-view .note form .input-note-button:active,\n  .content-side .note-view .add-note-window form .input-note-button:active, .content-side .note-view .note .edit-note-button:active,\n  .content-side .note-view .note .true-edit-button:active,\n  .content-side .note-view .note .delete-note-button:active,\n  .content-side .note-view .add-note-window .edit-note-button:active,\n  .content-side .note-view .add-note-window .true-edit-button:active,\n  .content-side .note-view .add-note-window .delete-note-button:active {\n    box-shadow: 0px 2px 2px rgba(45, 49, 66, 0.5); }\n\n* {\n  box-sizing: border-box;\n  font-family: 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n  word-break: break-all; }\n\n:root,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: aliceblue; }\n\ninput,\ntextarea {\n  border-radius: 2px;\n  border: transparent;\n  resize: none;\n  background-color: #4f5d75; }\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%; }\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  background-color: #2d3142;\n  display: flex;\n  align-items: flex-end;\n  padding: 10px;\n  box-shadow: 0px 2px 2px rgba(79, 93, 117, 0.5); }\n  header .title {\n    margin: 0;\n    font-size: calc(4rem + 5px);\n    color: #ef8354; }\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  grid-template-columns: 225px 5fr;\n  height: 100%; }\n\n.sidebar {\n  height: 100%;\n  display: grid;\n  grid-template-rows: 75px 1fr 50px;\n  background-color: #4f5d75;\n  color: aliceblue;\n  text-align: center;\n  padding: 10px;\n  gap: 10px;\n  width: 225px;\n  box-shadow: 0px 0px 2px #102528; }\n  .sidebar input:hover, .sidebar input:focus, .sidebar .project-title:hover, .sidebar .project-title:focus {\n    background-color: #2d3142; }\n  .sidebar .show-name {\n    max-width: 205px; }\n  .sidebar .project-list {\n    padding-top: 5px;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, clamp(25px, 4vh, 50px));\n    gap: clamp(2px, 5px, 10px);\n    width: 100%; }\n  .sidebar .project-title {\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 10px;\n    place-items: center;\n    max-width: 220px; }\n    .sidebar .project-title .edit-title > input {\n      color: #ef8354; }\n    .sidebar .project-title .project-heading {\n      grid-column: 1 / 2;\n      font-weight: bold;\n      max-width: 150px;\n      height: fit-content;\n      font-size: 1.17em;\n      text-align: start;\n      display: block; }\n    .sidebar .project-title .delete-project-button,\n    .sidebar .project-title .edit-project-button {\n      grid-column: 2 / 3;\n      font-weight: bold;\n      padding: 0 5px;\n      justify-self: center;\n      max-height: fit-content;\n      max-width: fit-content;\n      font-size: 1rem; }\n  .sidebar .edit-content {\n    max-width: 150px; }\n\n.content-side {\n  display: grid; }\n  .content-side .todo-view {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin;\n    padding: 10px; }\n    .content-side .todo-view .add-todo-button {\n      grid-area: 1 / 1 / 2 / 4; }\n  .content-side .note-view {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    padding: 10px;\n    gap: 5px; }\n    .content-side .note-view .add-note-button {\n      grid-area: 1 / 1 / 2 / 5; }\n    .content-side .note-view .note,\n    .content-side .note-view .add-note-window {\n      place-self: center;\n      background-color: #2d3142;\n      height: 250px;\n      width: 200px;\n      justify-items: stretch;\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      grid-template-rows: 1fr 6fr 1fr;\n      padding: 10px;\n      gap: 4px;\n      border-radius: 4px; }\n      .content-side .note-view .note *,\n      .content-side .note-view .add-note-window * {\n        color: aliceblue; }\n      .content-side .note-view .note form,\n      .content-side .note-view .add-note-window form {\n        grid-area: 1 / 1 / 4 / 3;\n        display: grid;\n        grid-template-rows: 1fr 6fr 1fr;\n        place-items: center;\n        gap: 5%; }\n        .content-side .note-view .note form .input-note-name, .content-side .note-view .note form .edit-note-name,\n        .content-side .note-view .add-note-window form .input-note-name,\n        .content-side .note-view .add-note-window form .edit-note-name {\n          text-align: center;\n          font-size: calc(5px + 1rem);\n          font-weight: bold;\n          width: 100%; }\n        .content-side .note-view .note form .input-note-content, .content-side .note-view .note form .edit-note-content,\n        .content-side .note-view .add-note-window form .input-note-content,\n        .content-side .note-view .add-note-window form .edit-note-content {\n          height: 100%;\n          width: 100%; }\n        .content-side .note-view .note form .input-note-button,\n        .content-side .note-view .add-note-window form .input-note-button {\n          width: 100%; }\n      .content-side .note-view .note h3,\n      .content-side .note-view .add-note-window h3 {\n        grid-area: 1 / 1 / 2 / 3;\n        text-align: center;\n        word-break: break-all;\n        font-size: calc(5px + 1rem); }\n      .content-side .note-view .note p,\n      .content-side .note-view .add-note-window p {\n        word-break: break-all;\n        grid-area: 2 / 1 / 3 / 3;\n        width: 100%; }\n", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA,0BAAI;AACJ,yBAAI;AACJ,2BAAI;AACJ,yBAAI;AAUJ;;;;;;;;EACE,yBAPqB;EAQrB,mBAAmB;EACnB,gBAR0B;EAS1B,2BAPgC;EAQhC,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;EACX,kBAAkB,EAAA;EAClB;;;;;;;;IACE,cAlBmB,EAAA;EAoBrB;;;;;;;;IACE,6CArBmB,EAAA;;AA0BvB;EACE,sBAAsB;EACtB,oCAAoC;EACpC,SAAS;EACT,UAAU;EACV,qBAAqB,EAAA;;AAIvB;;EAEE,UAAU;EACV,SAAS;EACT,aAAa;EACb,2BArC0B,EAAA;;AAwC5B;;EAEE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;EACZ,yBA/CuB,EAAA;;AAkDzB;EACE,aAAa;EACb,4BAA4B;EAC5B,YAAY,EAAA;;AAGd;EACE,wBAAwB;EACxB,yBA3DqB;EA4DrB,aAAa;EACb,qBAAqB;EAOrB,aAAa;EACb,8CApEuB,EAAA;EAwDzB;IAOI,SAAS;IACT,2BAA2B;IAC3B,cAhEmB,EAAA;;AAuEvB;EACE,wBAAwB;EACxB,aAAa;EACb,gCAAgC;EAChC,YAAY,EAAA;;AAId;EACI,YAAY;EACd,aAAa;EACb,iCAAiC;EACjC,yBApFuB;EAqFvB,gBAnF0B;EAoF1B,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,YAAY;EACZ,+BAAuC,EAAA;EAVzC;IAgBM,yBAjGiB,EAAA;EAiFvB;IAoBI,gBAAgB,EAAA;EApBpB;IAuBI,gBAAgB;IAEhB,aAAa;IACb,4DAA4D;IAC5D,0BAA0B;IAC1B,WAAW,EAAA;EA5Bf;IAgCI,kBAAkB;IAClB,aAAa;IACb,8BAA8B;IAC9B,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB,EAAA;IArCpB;MAuCM,cAtHiB,EAAA;IA+EvB;MA2CM,kBAAkB;MAClB,iBAAiB;MACjB,gBAAgB;MAChB,mBAAmB;MACnB,iBAAiB;MACjB,iBAAiB;MACjB,cAAc,EAAA;IAjDpB;;MAqDM,kBAAkB;MAClB,iBAAiB;MAEjB,cAAc;MACd,oBAAoB;MACpB,uBAAuB;MACvB,sBAAsB;MACtB,eAAe,EAAA;EA5DrB;IAoEI,gBAAgB,EAAA;;AAIpB;EACE,aAAa,EAAA;EADf;IAII,aAAa;IACb,4BAA4B;IAC5B,qCAAqC;IACrC,UAAU;IACV,aAAa,EAAA;IARjB;MAUM,wBAAwB,EAAA;EAV9B;IAiBI,aAAa;IACb,4BAA4B;IAC5B,aAAa;IACb,QAAQ,EAAA;IApBZ;MAsBM,wBAAwB,EAAA;IAtB9B;;MA4BM,kBAAkB;MAClB,yBAtLiB;MAuLjB,aAAa;MACb,YAAY;MACZ,sBAAsB;MACtB,aAAa;MACb,8BAA8B;MAC9B,+BAA+B;MAC/B,aAAa;MACb,QAAQ;MACR,kBAAkB,EAAA;MAtCxB;;QAyCQ,gBA/LoB,EAAA;MAsJ5B;;QA6CQ,wBAAwB;QACxB,aAAa;QACb,+BAA+B;QAC/B,mBAAmB;QACnB,OAAO,EAAA;QAjDf;;;UAoDU,kBAAkB;UAClB,2BAzMwB;UA0MxB,iBAAiB;UACjB,WAAW,EAAA;QAvDrB;;;UA0DU,YAAY;UACZ,WAAW,EAAA;QA3DrB;;UA8DU,WAAW,EAAA;MA9DrB;;QAoEQ,wBAAwB;QACxB,kBAAkB;QAClB,qBAAqB;QAErB,2BA5N0B,EAAA;MAoJlC;;QA2EQ,qBAAqB;QACrB,wBAAwB;QACxB,WAAW,EAAA","sourcesContent":["@use 'styles/_header.scss';\n@use 'styles/_notes.scss';\n@use 'styles/_sidebar.scss';\n@use 'styles/_todos.scss';\n\n$primary-color: #2d3142;\n$secondary-color: #4f5d75;\n$ternary-color: #ef8354;\n$light-text-color: aliceblue;\n$dark-text-color: black;\n$title-font-size: calc(5px + 1rem);\n$content-font-size: calc(5px + 0.5rem);\n\n%action-button {\n  background-color: $ternary-color;\n  font-weight: bolder;\n  color: $light-text-color;\n  font-size: $title-font-size;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  width: 100%;\n  text-align: center;\n  &:hover {\n    color: $primary-color;\n  }\n  &:active {\n    box-shadow: 0px 2px 2px rgba($primary-color, 0.5);\n\n  }\n}\n\n* {\n  box-sizing: border-box;\n  font-family: 'Helvetica', sans-serif;\n  margin: 0;\n  padding: 0;\n  word-break: break-all;\n}\n\n// We have to use @import or @use  for SASS\n:root,\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  background-color: $light-text-color;\n}\n\ninput,\ntextarea {\n  border-radius: 2px;\n  border: transparent;\n  resize: none;\n  background-color: $secondary-color;\n}\n\n#container {\n  display: grid;\n  grid-template-rows: 1fr 10fr;\n  height: 100%;\n}\n\nheader {\n  grid-area: 1 / 1 / 2 / 2;\n  background-color: $primary-color;\n  display: flex;\n  align-items: flex-end;\n\n  .title {\n    margin: 0;\n    font-size: calc(4rem + 5px);\n    color: $ternary-color;\n  }\n  padding: 10px;\n  box-shadow: 0px 2px 2px rgba($secondary-color, 0.5);\n\n}\n\nmain {\n  grid-area: 2 / 1 / 3 / 2;\n  display: grid;\n  grid-template-columns: 225px 5fr;\n  height: 100%;\n\n}\n\n.sidebar {\n    height: 100%;\n  display: grid;\n  grid-template-rows: 75px 1fr 50px;\n  background-color: $secondary-color;\n  color: $light-text-color;\n  text-align: center;\n  padding: 10px;\n  gap: 10px;\n  width: 225px;\n  box-shadow: 0px 0px 2px rgb(16, 37, 40);\n\n  \n  input,.project-title {\n    &:hover,\n    &:focus {\n      background-color: $primary-color;\n    }\n  }\n  .show-name {\n    max-width: 205px;\n  }\n  .project-list {\n    padding-top: 5px;\n\n    display: grid;\n    grid-template-rows: repeat(auto-fit, clamp(25px, 4vh, 50px));\n    gap: clamp(2px, 5px, 10px);\n    width: 100%;\n  }\n\n  .project-title {\n    border-radius: 5px;\n    display: flex;\n    justify-content: space-between;\n    padding: 0px 10px;\n    place-items: center;\n    max-width: 220px;\n    .edit-title > input {\n      color: $ternary-color;\n    }\n\n    .project-heading {\n      grid-column: 1 / 2;\n      font-weight: bold;\n      max-width: 150px;\n      height: fit-content;\n      font-size: 1.17em;\n      text-align: start;\n      display: block;\n    }\n    .delete-project-button,\n    .edit-project-button {\n      grid-column: 2 / 3;\n      font-weight: bold;\n      @extend %action-button;\n      padding: 0 5px;\n      justify-self: center;\n      max-height: fit-content;\n      max-width: fit-content;\n      font-size: 1rem;\n    }\n  }\n  .add-project-button {\n    @extend %action-button;\n  }\n\n  .edit-content {\n    max-width: 150px;\n  }\n}\n\n.content-side {\n  display: grid;\n\n  .todo-view {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1vmin;\n    padding: 10px;\n    .add-todo-button {\n      grid-area: 1 / 1 / 2 / 4;\n\n      @extend %action-button;\n    }\n  }\n\n  .note-view {\n    display: grid;\n    grid-template-rows: 1fr 10fr;\n    padding: 10px;\n    gap: 5px;\n    .add-note-button {\n      grid-area: 1 / 1 / 2 / 5;\n      @extend %action-button;\n    }\n\n    .note,\n    .add-note-window {\n      place-self: center;\n      background-color: $primary-color;\n      height: 250px;\n      width: 200px;\n      justify-items: stretch;\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      grid-template-rows: 1fr 6fr 1fr;\n      padding: 10px;\n      gap: 4px;\n      border-radius: 4px;\n\n      * {\n        color: $light-text-color;\n      }\n\n      form {\n        grid-area: 1 / 1 / 4 / 3;\n        display: grid;\n        grid-template-rows: 1fr 6fr 1fr;\n        place-items: center;\n        gap: 5%;\n\n        .input-note-name, .edit-note-name {\n          text-align: center;\n          font-size: $title-font-size;\n          font-weight: bold;\n          width: 100%;\n        }\n        .input-note-content, .edit-note-content {\n          height: 100%;\n          width: 100%;\n        }\n        .input-note-button {\n          width: 100%;\n          @extend %action-button;\n        }\n      }\n\n      h3 {\n        grid-area: 1 / 1 / 2 / 3;\n        text-align: center;\n        word-break: break-all;\n\n        font-size: $title-font-size;\n      }\n      p {\n        word-break: break-all;\n        grid-area: 2 / 1 / 3 / 3;\n        width: 100%;\n      }\n\n      .edit-note-button,\n      .true-edit-button,\n      .delete-note-button {\n        @extend %action-button;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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

  const updateModel = () => {
    model.updateObserver('Note', model);
  };
  const addNote = (e) => {
    e.preventDefault();
    const properties = [e.target.form[0].value, e.target.form[1].value];
    model.addTool('Note', properties);
    updateModel();
  };
  const editNote = (e) => {
    const properties = [e.target.form[0].value, e.target.form[1].value];
    const noteName = e.target.form[3].value;
    model.editTool('Note', noteName, properties);
    updateModel();
  };
  const deleteNote = (e) => {
    const noteName = getNoteName(e);
    model.deleteTool('Note', noteName);
    updateModel();
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
  const updateModel = () => {
    model.updateObserver('Project', model);
  };
  const updateModelFull = () => {
    model.updateObservers(model);
  };
  const addProject = () => {
    if (model.names.length > 15) {
      return;
    }
    model.addProject();
    updateModel();
  };
  const editProjectName = (e) => {
    if (e.target.size < 16) {
      e.target.size = e.target.form[0].value.length;
    }
    if (e.key === 'Enter' || e.key === undefined) {
      e.preventDefault();
      const newName = e.target.form[0].value;
      const oldName = e.target.form[1].value;
      model.editProjectName(oldName, newName);
      updateModel();
    }
  };
  const deleteProject = (e) => {
    model.deleteProject(e.target.parentNode.children[0].textContent);
    updateModelFull();
  };
  const switchProject = (e) => {
    model.switchProject(e.target.textContent);
    updateModelFull();
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

  const updateModel = () => {
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
    updateModel();
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
    updateModel();
  };
  const deleteTodo = (e) => {
    const todoName = getTodoName(e);
    model.deleteTool('ToDo', todoName);
    updateModel();
  };
  return {
    get model() {
      return model;
    },
    addTodo,
    editTodo,
    deleteTodo,
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
  let curProjIndex = 0;
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
    const index = observers.findIndex(
      (observer) => observer.observerName === givenObserverName,
    );
    observers[index].updateView(model);
  };

  const getCurrentProject = () => projectList.itemList[curProjIndex];
  const getCurrentProjectName = () => getCurrentProject().name;

  const addProject = (projectName = `Project ${projCounter}`) => {
    const newProject = (0,_models_project__WEBPACK_IMPORTED_MODULE_1__["default"])(projectName, toolTypes);
    projectList.addItem(newProject);
    projCounter += 1;
    return newProject;
  };

  const getTypeNameList = (type) => {
    const curr = getCurrentProject();
    return curr.getTypeNameList(type);
  };

  const getProjectByName = (projectName) => projectList.getItemByName(projectName);

  const getProjectIndexByName = (projectName) => projectList.getItemIndexByName(projectName);

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

  const editProjectName = (originalName, newProjectName) => {
    const editProj = getProjectByName(originalName);
    editProj.name = newProjectName;
  };

  const switchProject = (name) => {
    curProjIndex = projectList.getItemIndexByName(name);
  };

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

  const deleteTool = (toolType, name) => {
    const curProj = getCurrentProject();
    curProj.deleteItem(toolType, name);
  };

  const editTool = (toolType, name, parameters) => {
    const curProj = getCurrentProject();
    curProj.editItem(toolType, name, parameters);
  };

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


const Project = (givenName, typeList) => {
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
const ToDo = ([newName, newDescription, newDueDate, newPriority]) => {
  let name = newName;
  let description = newDescription;
  let dueDate = newDueDate;
  let priority = newPriority;

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
/* harmony import */ var _views_todos_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/todos-view */ "./src/modules/views/todos-view.js");
/* harmony import */ var _views_notes_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/notes-view */ "./src/modules/views/notes-view.js");




const View = (givenController) => {
  const controller = givenController;
  const { model } = givenController;
  const projView = (0,_views_projects_view__WEBPACK_IMPORTED_MODULE_0__["default"])(controller.projectController);
  const notesView = (0,_views_notes_view__WEBPACK_IMPORTED_MODULE_2__["default"])(controller.noteController);
  const todoView = (0,_views_todos_view__WEBPACK_IMPORTED_MODULE_1__["default"])(controller.todoController);
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
  const addNoteView = (e) => {
    e.target.disabled = true;
    const noteWindow = document.createElement('div');
    noteWindow.className = 'add-note-window';
    const noteForm = document.createElement('form');

    const noteName = document.createElement('input');
    noteName.type = 'text';
    noteName.className = 'input-note-name'
    noteName.required = true;

    const noteContent = document.createElement('textarea');
    noteContent.className = 'input-note-content'
    noteContent.required = true;
   
    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'Add';
    noteButton.className = 'input-note-button'

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
    noteName.className = 'edit-note-name';

    const noteContent = document.createElement('textarea');
    noteContent.value = editNoteContent;
    noteContent.className = 'edit-note-content';

    const noteButton = document.createElement('input');
    noteButton.type = 'button';
    noteButton.value = 'edit';
    noteButton.className = 'true-edit-button';

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
    addNoteViewButton.textContent = 'Add Note';
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
    projForm.className = 'edit-title';

    const projName = document.createElement('input');
    projName.type = 'text';
    projName.value = editProjectName;
    projName.className = 'project-heading'
    projName.size = editProjectName.length;
    projName.maxLength = 15;

    const hiddenOriginal = document.createElement('input');
    hiddenOriginal.type = 'hidden';
    hiddenOriginal.value = editProjectName;

    projName.addEventListener('keydown', controller.editProjectName);
    projName.addEventListener('focusout', controller.editProjectName);
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
      const deleteProjectButton = document.createElement('button');
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

/***/ "./src/modules/views/todos-view.js":
/*!*****************************************!*\
  !*** ./src/modules/views/todos-view.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function TodoView(todoController) {
  const controller = todoController;
  const observerName = 'ToDo';

  const getParentTodo = (e) => e.target.parentElement;
  const getTodoContents = (e, index) => getParentTodo(e).children[index].textContent;

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
    deleteButtons.forEach((button) => button.addEventListener('click', controller.deleteTodo));
    editButtons.forEach((button) => button.addEventListener('click', editTodoView));
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
    addTodoViewButton.textContent = 'Add To-Do';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EscUVBQXFFLDRCQUE0Qiw4QkFBOEIsNEJBQTRCLHVxQkFBdXFCLDhCQUE4Qix3QkFBd0IscUJBQXFCLGdDQUFnQyxrQ0FBa0MsdUJBQXVCLGdCQUFnQix5QkFBeUIscXdCQUFxd0IsdUJBQXVCLGt4QkFBa3hCLHNEQUFzRCxPQUFPLDJCQUEyQix5Q0FBeUMsY0FBYyxlQUFlLDRCQUE0QixrQkFBa0IsZUFBZSxjQUFjLGtCQUFrQixrQ0FBa0Msc0JBQXNCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLGdDQUFnQyxnQkFBZ0Isa0JBQWtCLGlDQUFpQyxtQkFBbUIsWUFBWSw2QkFBNkIsOEJBQThCLGtCQUFrQiwwQkFBMEIsa0JBQWtCLHFEQUFxRCxtQkFBbUIsZ0JBQWdCLGtDQUFrQyx1QkFBdUIsVUFBVSw2QkFBNkIsa0JBQWtCLHFDQUFxQyxtQkFBbUIsY0FBYyxpQkFBaUIsa0JBQWtCLHNDQUFzQyw4QkFBOEIscUJBQXFCLHVCQUF1QixrQkFBa0IsY0FBYyxpQkFBaUIsc0NBQXNDLDhHQUE4RyxrQ0FBa0MseUJBQXlCLHlCQUF5Qiw0QkFBNEIsdUJBQXVCLG9CQUFvQixtRUFBbUUsaUNBQWlDLG9CQUFvQiw2QkFBNkIseUJBQXlCLG9CQUFvQixxQ0FBcUMsd0JBQXdCLDBCQUEwQix5QkFBeUIsbURBQW1ELHlCQUF5QixnREFBZ0QsMkJBQTJCLDBCQUEwQix5QkFBeUIsNEJBQTRCLDBCQUEwQiwwQkFBMEIseUJBQXlCLHlHQUF5RywyQkFBMkIsMEJBQTBCLHVCQUF1Qiw2QkFBNkIsZ0NBQWdDLCtCQUErQiwwQkFBMEIsNEJBQTRCLHlCQUF5QixtQkFBbUIsb0JBQW9CLDhCQUE4QixvQkFBb0IsbUNBQW1DLDRDQUE0QyxpQkFBaUIsc0JBQXNCLGlEQUFpRCxtQ0FBbUMsOEJBQThCLG9CQUFvQixtQ0FBbUMsb0JBQW9CLGlCQUFpQixpREFBaUQsbUNBQW1DLHNGQUFzRiwyQkFBMkIsa0NBQWtDLHNCQUFzQixxQkFBcUIsK0JBQStCLHNCQUFzQix1Q0FBdUMsd0NBQXdDLHNCQUFzQixpQkFBaUIsNkJBQTZCLDhGQUE4Riw2QkFBNkIsb0dBQW9HLG1DQUFtQyx3QkFBd0IsMENBQTBDLDhCQUE4QixvQkFBb0Isd1FBQXdRLCtCQUErQix3Q0FBd0MsOEJBQThCLDBCQUEwQixvUkFBb1IseUJBQXlCLDBCQUEwQiw4SUFBOEksMEJBQTBCLGdHQUFnRyxtQ0FBbUMsNkJBQTZCLGdDQUFnQyx3Q0FBd0MsOEZBQThGLGdDQUFnQyxtQ0FBbUMsd0JBQXdCLFNBQVMsdUZBQXVGLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsYUFBYSxpQkFBaUIsY0FBYyxtQkFBbUIsT0FBTyxZQUFZLGFBQWEsV0FBVyxVQUFVLGtCQUFrQixPQUFPLFVBQVUsVUFBVSxVQUFVLG1CQUFtQixRQUFRLFlBQVksYUFBYSxXQUFXLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxZQUFZLGNBQWMsWUFBWSxZQUFZLFdBQVcsa0JBQWtCLE9BQU8sVUFBVSxZQUFZLG1CQUFtQixPQUFPLFlBQVksV0FBVyxZQUFZLGlCQUFpQixLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsZUFBZSxjQUFjLFdBQVcsVUFBVSxVQUFVLGlCQUFpQixNQUFNLG1CQUFtQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsZ0JBQWdCLE1BQU0sYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGdCQUFnQixRQUFRLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGdCQUFnQixPQUFPLG1CQUFtQixNQUFNLGVBQWUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGVBQWUsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLFlBQVksV0FBVyxlQUFlLE1BQU0sa0JBQWtCLFFBQVEsYUFBYSxjQUFjLFlBQVksVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxpQkFBaUIsUUFBUSxtQkFBbUIsUUFBUSxhQUFhLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixRQUFRLGFBQWEsY0FBYyxjQUFjLGdCQUFnQixTQUFTLFdBQVcsZUFBZSxRQUFRLGdCQUFnQixRQUFRLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixRQUFRLGFBQWEsYUFBYSwrREFBK0QsNEJBQTRCLDhCQUE4Qiw0QkFBNEIsNEJBQTRCLDRCQUE0QiwwQkFBMEIsK0JBQStCLDBCQUEwQixxQ0FBcUMseUNBQXlDLG9CQUFvQixxQ0FBcUMsd0JBQXdCLDZCQUE2QixnQ0FBZ0Msa0NBQWtDLHVCQUF1QixnQkFBZ0IsdUJBQXVCLGFBQWEsNEJBQTRCLEtBQUssY0FBYyx3REFBd0QsT0FBTyxHQUFHLE9BQU8sMkJBQTJCLHlDQUF5QyxjQUFjLGVBQWUsMEJBQTBCLEdBQUcsK0RBQStELGVBQWUsY0FBYyxrQkFBa0Isd0NBQXdDLEdBQUcsc0JBQXNCLHVCQUF1Qix3QkFBd0IsaUJBQWlCLHVDQUF1QyxHQUFHLGdCQUFnQixrQkFBa0IsaUNBQWlDLGlCQUFpQixHQUFHLFlBQVksNkJBQTZCLHFDQUFxQyxrQkFBa0IsMEJBQTBCLGNBQWMsZ0JBQWdCLGtDQUFrQyw0QkFBNEIsS0FBSyxrQkFBa0Isd0RBQXdELEtBQUssVUFBVSw2QkFBNkIsa0JBQWtCLHFDQUFxQyxpQkFBaUIsS0FBSyxjQUFjLG1CQUFtQixrQkFBa0Isc0NBQXNDLHVDQUF1Qyw2QkFBNkIsdUJBQXVCLGtCQUFrQixjQUFjLGlCQUFpQiw0Q0FBNEMsZ0NBQWdDLDZCQUE2Qix5Q0FBeUMsT0FBTyxLQUFLLGdCQUFnQix1QkFBdUIsS0FBSyxtQkFBbUIsdUJBQXVCLHNCQUFzQixtRUFBbUUsaUNBQWlDLGtCQUFrQixLQUFLLHNCQUFzQix5QkFBeUIsb0JBQW9CLHFDQUFxQyx3QkFBd0IsMEJBQTBCLHVCQUF1QiwyQkFBMkIsOEJBQThCLE9BQU8sMEJBQTBCLDJCQUEyQiwwQkFBMEIseUJBQXlCLDRCQUE0QiwwQkFBMEIsMEJBQTBCLHVCQUF1QixPQUFPLHlEQUF5RCwyQkFBMkIsMEJBQTBCLCtCQUErQix1QkFBdUIsNkJBQTZCLGdDQUFnQywrQkFBK0Isd0JBQXdCLE9BQU8sS0FBSyx5QkFBeUIsNkJBQTZCLEtBQUsscUJBQXFCLHVCQUF1QixLQUFLLEdBQUcsbUJBQW1CLGtCQUFrQixrQkFBa0Isb0JBQW9CLG1DQUFtQyw0Q0FBNEMsaUJBQWlCLG9CQUFvQix3QkFBd0IsaUNBQWlDLGlDQUFpQyxPQUFPLEtBQUssa0JBQWtCLG9CQUFvQixtQ0FBbUMsb0JBQW9CLGVBQWUsd0JBQXdCLGlDQUFpQywrQkFBK0IsT0FBTyxzQ0FBc0MsMkJBQTJCLHlDQUF5QyxzQkFBc0IscUJBQXFCLCtCQUErQixzQkFBc0IsdUNBQXVDLHdDQUF3QyxzQkFBc0IsaUJBQWlCLDJCQUEyQixhQUFhLG1DQUFtQyxTQUFTLGdCQUFnQixtQ0FBbUMsd0JBQXdCLDBDQUEwQyw4QkFBOEIsa0JBQWtCLCtDQUErQywrQkFBK0Isd0NBQXdDLDhCQUE4Qix3QkFBd0IsV0FBVyxtREFBbUQseUJBQXlCLHdCQUF3QixXQUFXLDhCQUE4Qix3QkFBd0IsbUNBQW1DLFdBQVcsU0FBUyxjQUFjLG1DQUFtQyw2QkFBNkIsZ0NBQWdDLHdDQUF3QyxTQUFTLFdBQVcsZ0NBQWdDLG1DQUFtQyxzQkFBc0IsU0FBUyxtRkFBbUYsaUNBQWlDLFNBQVMsT0FBTyxLQUFLLEdBQUcscUJBQXFCO0FBQzVzYztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQTRJO0FBQzVJO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJc0Y7QUFDOUcsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyRDtBQUNNO0FBQ047O0FBRTNEO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWM7QUFDdkMseUJBQXlCLHdFQUFjO0FBQ3ZDLDRCQUE0QiwyRUFBaUI7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QjFCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM3Q2pDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Q3NCO0FBQ2I7QUFDTjtBQUNBOztBQUVqQztBQUNBO0FBQ0Esc0JBQXNCLGtFQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFlBQVk7QUFDM0QsdUJBQXVCLDJEQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFJO0FBQ3BCLE1BQU07QUFDTixnQkFBZ0Isd0RBQUk7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3JIckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDOUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0J5Qjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMkRBQWE7QUFDeEMsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0M2QjtBQUNQO0FBQ0M7O0FBRTNDO0FBQ0E7QUFDQSxVQUFVLFFBQVE7QUFDbEIsbUJBQW1CLGdFQUFZO0FBQy9CLG9CQUFvQiw2REFBUztBQUM3QixtQkFBbUIsNkRBQVE7QUFDM0I7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZHBCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqSnpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNyRzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN0T3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDVTtBQUNaO0FBQ1o7O0FBRXRCO0FBQ0EsZ0JBQWdCLDBEQUFLO0FBQ3JCLHFCQUFxQiwrREFBVTtBQUMvQixFQUFFLHlEQUFJO0FBQ047O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzL25vdGUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvY29udHJvbGxlcnMvcHJvamVjdC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVsLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvaXRlbS1jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGVscy9ub3RlLmpzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RlbHMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kZWxzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL25vdGVzLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3Byb2plY3RzLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3ZpZXdzL3RvZG9zLXZpZXcuanMiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zhc3Rlci10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mYXN0ZXItdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZmFzdGVyLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkB1c2UgJ3N0eWxlcy9faGVhZGVyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fbm90ZXMuc2Nzcyc7XFxuQHVzZSAnc3R5bGVzL19zaWRlYmFyLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fdG9kb3Muc2Nzcyc7XFxuLnNpZGViYXIgLnByb2plY3QtdGl0bGUgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbixcXG4uc2lkZWJhciAucHJvamVjdC10aXRsZSAuZWRpdC1wcm9qZWN0LWJ1dHRvbiwgLnNpZGViYXIgLmFkZC1wcm9qZWN0LWJ1dHRvbiwgLmNvbnRlbnQtc2lkZSAudG9kby12aWV3IC5hZGQtdG9kby1idXR0b24sIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtYnV0dG9uLCAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgZm9ybSAuaW5wdXQtbm90ZS1idXR0b24sXFxuLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgZm9ybSAuaW5wdXQtbm90ZS1idXR0b24sIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSAuZWRpdC1ub3RlLWJ1dHRvbixcXG4uY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgLnRydWUtZWRpdC1idXR0b24sXFxuLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIC5kZWxldGUtbm90ZS1idXR0b24sXFxuLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgLmVkaXQtbm90ZS1idXR0b24sXFxuLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgLnRydWUtZWRpdC1idXR0b24sXFxuLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgLmRlbGV0ZS1ub3RlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY4MzU0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiBhbGljZWJsdWU7XFxuICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXJlbSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuc2lkZWJhciAucHJvamVjdC10aXRsZSAuZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyLFxcbiAgLnNpZGViYXIgLnByb2plY3QtdGl0bGUgLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIsIC5zaWRlYmFyIC5hZGQtcHJvamVjdC1idXR0b246aG92ZXIsIC5jb250ZW50LXNpZGUgLnRvZG8tdmlldyAuYWRkLXRvZG8tYnV0dG9uOmhvdmVyLCAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLWJ1dHRvbjpob3ZlciwgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIGZvcm0gLmlucHV0LW5vdGUtYnV0dG9uOmhvdmVyLFxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgZm9ybSAuaW5wdXQtbm90ZS1idXR0b246aG92ZXIsIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSAuZWRpdC1ub3RlLWJ1dHRvbjpob3ZlcixcXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSAudHJ1ZS1lZGl0LWJ1dHRvbjpob3ZlcixcXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSAuZGVsZXRlLW5vdGUtYnV0dG9uOmhvdmVyLFxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgLmVkaXQtbm90ZS1idXR0b246aG92ZXIsXFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyAudHJ1ZS1lZGl0LWJ1dHRvbjpob3ZlcixcXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IC5kZWxldGUtbm90ZS1idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogIzJkMzE0MjsgfVxcbiAgLnNpZGViYXIgLnByb2plY3QtdGl0bGUgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjphY3RpdmUsXFxuICAuc2lkZWJhciAucHJvamVjdC10aXRsZSAuZWRpdC1wcm9qZWN0LWJ1dHRvbjphY3RpdmUsIC5zaWRlYmFyIC5hZGQtcHJvamVjdC1idXR0b246YWN0aXZlLCAuY29udGVudC1zaWRlIC50b2RvLXZpZXcgLmFkZC10b2RvLWJ1dHRvbjphY3RpdmUsIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtYnV0dG9uOmFjdGl2ZSwgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIGZvcm0gLmlucHV0LW5vdGUtYnV0dG9uOmFjdGl2ZSxcXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IGZvcm0gLmlucHV0LW5vdGUtYnV0dG9uOmFjdGl2ZSwgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIC5lZGl0LW5vdGUtYnV0dG9uOmFjdGl2ZSxcXG4gIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSAudHJ1ZS1lZGl0LWJ1dHRvbjphY3RpdmUsXFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgLmRlbGV0ZS1ub3RlLWJ1dHRvbjphY3RpdmUsXFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyAuZWRpdC1ub3RlLWJ1dHRvbjphY3RpdmUsXFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyAudHJ1ZS1lZGl0LWJ1dHRvbjphY3RpdmUsXFxuICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyAuZGVsZXRlLW5vdGUtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoNDUsIDQ5LCA2NiwgMC41KTsgfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7IH1cXG5cXG46cm9vdCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyB9XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjVkNzU7IH1cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMGZyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoNzksIDkzLCAxMTcsIDAuNSk7IH1cXG4gIGhlYWRlciAudGl0bGUge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0cmVtICsgNXB4KTtcXG4gICAgY29sb3I6ICNlZjgzNTQ7IH1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNXB4IDVmcjtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbi5zaWRlYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDc1cHggMWZyIDUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY1ZDc1O1xcbiAgY29sb3I6IGFsaWNlYmx1ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjI1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAjMTAyNTI4OyB9XFxuICAuc2lkZWJhciBpbnB1dDpob3ZlciwgLnNpZGViYXIgaW5wdXQ6Zm9jdXMsIC5zaWRlYmFyIC5wcm9qZWN0LXRpdGxlOmhvdmVyLCAuc2lkZWJhciAucHJvamVjdC10aXRsZTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDMxNDI7IH1cXG4gIC5zaWRlYmFyIC5zaG93LW5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDIwNXB4OyB9XFxuICAuc2lkZWJhciAucHJvamVjdC1saXN0IHtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIGNsYW1wKDI1cHgsIDR2aCwgNTBweCkpO1xcbiAgICBnYXA6IGNsYW1wKDJweCwgNXB4LCAxMHB4KTtcXG4gICAgd2lkdGg6IDEwMCU7IH1cXG4gIC5zaWRlYmFyIC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDIyMHB4OyB9XFxuICAgIC5zaWRlYmFyIC5wcm9qZWN0LXRpdGxlIC5lZGl0LXRpdGxlID4gaW5wdXQge1xcbiAgICAgIGNvbG9yOiAjZWY4MzU0OyB9XFxuICAgIC5zaWRlYmFyIC5wcm9qZWN0LXRpdGxlIC5wcm9qZWN0LWhlYWRpbmcge1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgZm9udC1zaXplOiAxLjE3ZW07XFxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgZGlzcGxheTogYmxvY2s7IH1cXG4gICAgLnNpZGViYXIgLnByb2plY3QtdGl0bGUgLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbixcXG4gICAgLnNpZGViYXIgLnByb2plY3QtdGl0bGUgLmVkaXQtcHJvamVjdC1idXR0b24ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcbiAgLnNpZGViYXIgLmVkaXQtY29udGVudCB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7IH1cXG5cXG4uY29udGVudC1zaWRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7IH1cXG4gIC5jb250ZW50LXNpZGUgLnRvZG8tdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAudG9kby12aWV3IC5hZGQtdG9kby1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDsgfVxcbiAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiA1cHg7IH1cXG4gICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNTsgfVxcbiAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUsXFxuICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IHtcXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzE0MjtcXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBnYXA6IDRweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXG4gICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgKixcXG4gICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyAqIHtcXG4gICAgICAgIGNvbG9yOiBhbGljZWJsdWU7IH1cXG4gICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgZm9ybSxcXG4gICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyBmb3JtIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyA0IC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNSU7IH1cXG4gICAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSBmb3JtIC5pbnB1dC1ub3RlLW5hbWUsIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSBmb3JtIC5lZGl0LW5vdGUtbmFtZSxcXG4gICAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IGZvcm0gLmlucHV0LW5vdGUtbmFtZSxcXG4gICAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IGZvcm0gLmVkaXQtbm90ZS1uYW1lIHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBmb250LXNpemU6IGNhbGMoNXB4ICsgMXJlbSk7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIGZvcm0gLmlucHV0LW5vdGUtY29udGVudCwgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIGZvcm0gLmVkaXQtbm90ZS1jb250ZW50LFxcbiAgICAgICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgZm9ybSAuaW5wdXQtbm90ZS1jb250ZW50LFxcbiAgICAgICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5hZGQtbm90ZS13aW5kb3cgZm9ybSAuZWRpdC1ub3RlLWNvbnRlbnQge1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLm5vdGUgZm9ybSAuaW5wdXQtbm90ZS1idXR0b24sXFxuICAgICAgICAuY29udGVudC1zaWRlIC5ub3RlLXZpZXcgLmFkZC1ub3RlLXdpbmRvdyBmb3JtIC5pbnB1dC1ub3RlLWJ1dHRvbiB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLmNvbnRlbnQtc2lkZSAubm90ZS12aWV3IC5ub3RlIGgzLFxcbiAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IGgzIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyg1cHggKyAxcmVtKTsgfVxcbiAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAubm90ZSBwLFxcbiAgICAgIC5jb250ZW50LXNpZGUgLm5vdGUtdmlldyAuYWRkLW5vdGUtd2luZG93IHAge1xcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwQkFBSTtBQUNKLHlCQUFJO0FBQ0osMkJBQUk7QUFDSix5QkFBSTtBQVVKOzs7Ozs7OztFQUNFLHlCQVBxQjtFQVFyQixtQkFBbUI7RUFDbkIsZ0JBUjBCO0VBUzFCLDJCQVBnQztFQVFoQyw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFdB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dHlsZXMvX2hlYWRlci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX25vdGVzLnNjc3MnO1xcbkB1c2UgJ3N0eWxlcy9fc2lkZWJhci5zY3NzJztcXG5AdXNlICdzdHlsZXMvX3RvZG9zLnNjc3MnO1xcblxcbiRwcmltYXJ5LWNvbG9yOiAjMmQzMTQyO1xcbiRzZWNvbmRhcnktY29sb3I6ICM0ZjVkNzU7XFxuJHRlcm5hcnktY29sb3I6ICNlZjgzNTQ7XFxuJGxpZ2h0LXRleHQtY29sb3I6IGFsaWNlYmx1ZTtcXG4kZGFyay10ZXh0LWNvbG9yOiBibGFjaztcXG4kdGl0bGUtZm9udC1zaXplOiBjYWxjKDVweCArIDFyZW0pO1xcbiRjb250ZW50LWZvbnQtc2l6ZTogY2FsYyg1cHggKyAwLjVyZW0pO1xcblxcbiVhY3Rpb24tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR0ZXJuYXJ5LWNvbG9yO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcXG4gIGZvbnQtc2l6ZTogJHRpdGxlLWZvbnQtc2l6ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAmOmhvdmVyIHtcXG4gICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgfVxcbiAgJjphY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKCRwcmltYXJ5LWNvbG9yLCAwLjUpO1xcblxcbiAgfVxcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4vLyBXZSBoYXZlIHRvIHVzZSBAaW1wb3J0IG9yIEB1c2UgIGZvciBTQVNTXFxuOnJvb3QsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xcbiAgcmVzaXplOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIC50aXRsZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDRyZW0gKyA1cHgpO1xcbiAgICBjb2xvcjogJHRlcm5hcnktY29sb3I7XFxuICB9XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgkc2Vjb25kYXJ5LWNvbG9yLCAwLjUpO1xcblxcbn1cXG5cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIyNXB4IDVmcjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3NXB4IDFmciA1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcXG4gIGNvbG9yOiAkbGlnaHQtdGV4dC1jb2xvcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMjI1cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCByZ2IoMTYsIDM3LCA0MCk7XFxuXFxuICBcXG4gIGlucHV0LC5wcm9qZWN0LXRpdGxlIHtcXG4gICAgJjpob3ZlcixcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICAgIH1cXG4gIH1cXG4gIC5zaG93LW5hbWUge1xcbiAgICBtYXgtd2lkdGg6IDIwNXB4O1xcbiAgfVxcbiAgLnByb2plY3QtbGlzdCB7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBjbGFtcCgyNXB4LCA0dmgsIDUwcHgpKTtcXG4gICAgZ2FwOiBjbGFtcCgycHgsIDVweCwgMTBweCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLnByb2plY3QtdGl0bGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIC5lZGl0LXRpdGxlID4gaW5wdXQge1xcbiAgICAgIGNvbG9yOiAkdGVybmFyeS1jb2xvcjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1oZWFkaW5nIHtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICAgIGZvbnQtc2l6ZTogMS4xN2VtO1xcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC5kZWxldGUtcHJvamVjdC1idXR0b24sXFxuICAgIC5lZGl0LXByb2plY3QtYnV0dG9uIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgQGV4dGVuZCAlYWN0aW9uLWJ1dHRvbjtcXG4gICAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICBtYXgtd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgfVxcbiAgLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIEBleHRlbmQgJWFjdGlvbi1idXR0b247XFxuICB9XFxuXFxuICAuZWRpdC1jb250ZW50IHtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIH1cXG59XFxuXFxuLmNvbnRlbnQtc2lkZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgLnRvZG8tdmlldyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMXZtaW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIC5hZGQtdG9kby1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNDtcXG5cXG4gICAgICBAZXh0ZW5kICVhY3Rpb24tYnV0dG9uO1xcbiAgICB9XFxuICB9XFxuXFxuICAubm90ZS12aWV3IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTBmcjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIC5hZGQtbm90ZS1idXR0b24ge1xcbiAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNTtcXG4gICAgICBAZXh0ZW5kICVhY3Rpb24tYnV0dG9uO1xcbiAgICB9XFxuXFxuICAgIC5ub3RlLFxcbiAgICAuYWRkLW5vdGUtd2luZG93IHtcXG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XFxuICAgICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgZ2FwOiA0cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgICAgICoge1xcbiAgICAgICAgY29sb3I6ICRsaWdodC10ZXh0LWNvbG9yO1xcbiAgICAgIH1cXG5cXG4gICAgICBmb3JtIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyA0IC8gMztcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogNSU7XFxuXFxuICAgICAgICAuaW5wdXQtbm90ZS1uYW1lLCAuZWRpdC1ub3RlLW5hbWUge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogJHRpdGxlLWZvbnQtc2l6ZTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmlucHV0LW5vdGUtY29udGVudCwgLmVkaXQtbm90ZS1jb250ZW50IHtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIH1cXG4gICAgICAgIC5pbnB1dC1ub3RlLWJ1dHRvbiB7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBAZXh0ZW5kICVhY3Rpb24tYnV0dG9uO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBoMyB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuXFxuICAgICAgICBmb250LXNpemU6ICR0aXRsZS1mb250LXNpemU7XFxuICAgICAgfVxcbiAgICAgIHAge1xcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgfVxcblxcbiAgICAgIC5lZGl0LW5vdGUtYnV0dG9uLFxcbiAgICAgIC50cnVlLWVkaXQtYnV0dG9uLFxcbiAgICAgIC5kZWxldGUtbm90ZS1idXR0b24ge1xcbiAgICAgICAgQGV4dGVuZCAlYWN0aW9uLWJ1dHRvbjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE5vdGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvbm90ZS1jb250cm9sbGVyJztcbmltcG9ydCBQcm9qZWN0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3Byb2plY3QtY29udHJvbGxlcic7XG5pbXBvcnQgVG9kb0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy90b2RvLWNvbnRyb2xsZXInO1xuXG5jb25zdCBDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuICBjb25zdCBub3RlQ29udHJvbGxlciA9IE5vdGVDb250cm9sbGVyKG1vZGVsKTtcbiAgY29uc3QgdG9kb0NvbnRyb2xsZXIgPSBUb2RvQ29udHJvbGxlcihtb2RlbCk7XG4gIGNvbnN0IHByb2plY3RDb250cm9sbGVyID0gUHJvamVjdENvbnRyb2xsZXIobW9kZWwpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgZ2V0IG5vdGVDb250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIG5vdGVDb250cm9sbGVyO1xuICAgIH0sXG4gICAgZ2V0IHRvZG9Db250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIHRvZG9Db250cm9sbGVyO1xuICAgIH0sXG4gICAgZ2V0IHByb2plY3RDb250cm9sbGVyKCkge1xuICAgICAgcmV0dXJuIHByb2plY3RDb250cm9sbGVyO1xuICAgIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcbiIsImNvbnN0IE5vdGVDb250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuXG4gIGNvbnN0IGdldE5vdGVOYW1lID0gKGUpID0+IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgdXBkYXRlTW9kZWwgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ05vdGUnLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZE5vdGUgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW2UudGFyZ2V0LmZvcm1bMF0udmFsdWUsIGUudGFyZ2V0LmZvcm1bMV0udmFsdWVdO1xuICAgIG1vZGVsLmFkZFRvb2woJ05vdGUnLCBwcm9wZXJ0aWVzKTtcbiAgICB1cGRhdGVNb2RlbCgpO1xuICB9O1xuICBjb25zdCBlZGl0Tm90ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtlLnRhcmdldC5mb3JtWzBdLnZhbHVlLCBlLnRhcmdldC5mb3JtWzFdLnZhbHVlXTtcbiAgICBjb25zdCBub3RlTmFtZSA9IGUudGFyZ2V0LmZvcm1bM10udmFsdWU7XG4gICAgbW9kZWwuZWRpdFRvb2woJ05vdGUnLCBub3RlTmFtZSwgcHJvcGVydGllcyk7XG4gICAgdXBkYXRlTW9kZWwoKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlTm90ZSA9IChlKSA9PiB7XG4gICAgY29uc3Qgbm90ZU5hbWUgPSBnZXROb3RlTmFtZShlKTtcbiAgICBtb2RlbC5kZWxldGVUb29sKCdOb3RlJywgbm90ZU5hbWUpO1xuICAgIHVwZGF0ZU1vZGVsKCk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbW9kZWwoKSB7XG4gICAgICByZXR1cm4gbW9kZWw7XG4gICAgfSxcbiAgICBhZGROb3RlLFxuICAgIGVkaXROb3RlLFxuICAgIGRlbGV0ZU5vdGUsXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgTm90ZUNvbnRyb2xsZXI7XG4iLCJjb25zdCBQcm9qZWN0Q29udHJvbGxlciA9IChnaXZlbk1vZGVsKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gZ2l2ZW5Nb2RlbDtcbiAgY29uc3QgdXBkYXRlTW9kZWwgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ1Byb2plY3QnLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IHVwZGF0ZU1vZGVsRnVsbCA9ICgpID0+IHtcbiAgICBtb2RlbC51cGRhdGVPYnNlcnZlcnMobW9kZWwpO1xuICB9O1xuICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGlmIChtb2RlbC5uYW1lcy5sZW5ndGggPiAxNSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBtb2RlbC5hZGRQcm9qZWN0KCk7XG4gICAgdXBkYXRlTW9kZWwoKTtcbiAgfTtcbiAgY29uc3QgZWRpdFByb2plY3ROYW1lID0gKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuc2l6ZSA8IDE2KSB7XG4gICAgICBlLnRhcmdldC5zaXplID0gZS50YXJnZXQuZm9ybVswXS52YWx1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBuZXdOYW1lID0gZS50YXJnZXQuZm9ybVswXS52YWx1ZTtcbiAgICAgIGNvbnN0IG9sZE5hbWUgPSBlLnRhcmdldC5mb3JtWzFdLnZhbHVlO1xuICAgICAgbW9kZWwuZWRpdFByb2plY3ROYW1lKG9sZE5hbWUsIG5ld05hbWUpO1xuICAgICAgdXBkYXRlTW9kZWwoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICAgIG1vZGVsLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCk7XG4gICAgdXBkYXRlTW9kZWxGdWxsKCk7XG4gIH07XG4gIGNvbnN0IHN3aXRjaFByb2plY3QgPSAoZSkgPT4ge1xuICAgIG1vZGVsLnN3aXRjaFByb2plY3QoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgIHVwZGF0ZU1vZGVsRnVsbCgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9LFxuICAgIGFkZFByb2plY3QsXG4gICAgZWRpdFByb2plY3ROYW1lLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc3dpdGNoUHJvamVjdCxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Q29udHJvbGxlcjtcbiIsImNvbnN0IFRvZG9Db250cm9sbGVyID0gKGdpdmVuTW9kZWwpID0+IHtcbiAgY29uc3QgbW9kZWwgPSBnaXZlbk1vZGVsO1xuXG4gIGNvbnN0IGdldFRvZG9OYW1lID0gKGUpID0+IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQ7XG5cbiAgY29uc3QgdXBkYXRlTW9kZWwgPSAoKSA9PiB7XG4gICAgbW9kZWwudXBkYXRlT2JzZXJ2ZXIoJ1RvRG8nLCBtb2RlbCk7XG4gIH07XG4gIGNvbnN0IGFkZFRvZG8gPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9wZXJ0aWVzID0gW1xuICAgICAgZS50YXJnZXQuZm9ybVswXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bMV0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzJdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVszXS52YWx1ZSxcbiAgICBdO1xuICAgIG1vZGVsLmFkZFRvb2woJ1RvRG8nLCBwcm9wZXJ0aWVzKTtcbiAgICB1cGRhdGVNb2RlbCgpO1xuICB9O1xuICBjb25zdCBlZGl0VG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IFtcbiAgICAgIGUudGFyZ2V0LmZvcm1bMF0udmFsdWUsXG4gICAgICBlLnRhcmdldC5mb3JtWzFdLnZhbHVlLFxuICAgICAgZS50YXJnZXQuZm9ybVsyXS52YWx1ZSxcbiAgICAgIGUudGFyZ2V0LmZvcm1bM10udmFsdWUsXG4gICAgXTtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGUudGFyZ2V0LmZvcm1bNV0udmFsdWU7XG4gICAgbW9kZWwuZWRpdFRvb2woJ1RvRG8nLCB0b2RvTmFtZSwgcHJvcGVydGllcyk7XG4gICAgdXBkYXRlTW9kZWwoKTtcbiAgfTtcbiAgY29uc3QgZGVsZXRlVG9kbyA9IChlKSA9PiB7XG4gICAgY29uc3QgdG9kb05hbWUgPSBnZXRUb2RvTmFtZShlKTtcbiAgICBtb2RlbC5kZWxldGVUb29sKCdUb0RvJywgdG9kb05hbWUpO1xuICAgIHVwZGF0ZU1vZGVsKCk7XG4gIH07XG4gIHJldHVybiB7XG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH0sXG4gICAgYWRkVG9kbyxcbiAgICBlZGl0VG9kbyxcbiAgICBkZWxldGVUb2RvLFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFRvZG9Db250cm9sbGVyO1xuIiwiaW1wb3J0IEl0ZW1Db250YWluZXIgZnJvbSAnLi9tb2RlbHMvaXRlbS1jb250YWluZXInO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9tb2RlbHMvcHJvamVjdCc7XG5pbXBvcnQgTm90ZSBmcm9tICcuL21vZGVscy9ub3RlJztcbmltcG9ydCBUb0RvIGZyb20gJy4vbW9kZWxzL3RvZG8nO1xuXG5mdW5jdGlvbiBNb2RlbCgpIHtcbiAgY29uc3QgdG9vbFR5cGVzID0gWydOb3RlJywgJ1RvRG8nXTtcbiAgY29uc3QgcHJvamVjdExpc3QgPSBJdGVtQ29udGFpbmVyKCdQcm9qZWN0Jyk7XG4gIGxldCBjdXJQcm9qSW5kZXggPSAwO1xuICBsZXQgcHJvakNvdW50ZXIgPSAwO1xuICBjb25zdCBvYnNlcnZlcnMgPSBbXTtcbiAgY29uc3QgYWRkT2JzZXJ2ZXJzID0gKHZpZXdzKSA9PiB7XG4gICAgdmlld3MuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiB1cGRhdGVPYnNlcnZlcnMobW9kZWwpIHtcbiAgICBvYnNlcnZlcnMuZm9yRWFjaCgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIG9ic2VydmVyLnVwZGF0ZVZpZXcobW9kZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgdXBkYXRlT2JzZXJ2ZXIgPSAoZ2l2ZW5PYnNlcnZlck5hbWUsIG1vZGVsKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBvYnNlcnZlcnMuZmluZEluZGV4KFxuICAgICAgKG9ic2VydmVyKSA9PiBvYnNlcnZlci5vYnNlcnZlck5hbWUgPT09IGdpdmVuT2JzZXJ2ZXJOYW1lLFxuICAgICk7XG4gICAgb2JzZXJ2ZXJzW2luZGV4XS51cGRhdGVWaWV3KG1vZGVsKTtcbiAgfTtcblxuICBjb25zdCBnZXRDdXJyZW50UHJvamVjdCA9ICgpID0+IHByb2plY3RMaXN0Lml0ZW1MaXN0W2N1clByb2pJbmRleF07XG4gIGNvbnN0IGdldEN1cnJlbnRQcm9qZWN0TmFtZSA9ICgpID0+IGdldEN1cnJlbnRQcm9qZWN0KCkubmFtZTtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKHByb2plY3ROYW1lID0gYFByb2plY3QgJHtwcm9qQ291bnRlcn1gKSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QocHJvamVjdE5hbWUsIHRvb2xUeXBlcyk7XG4gICAgcHJvamVjdExpc3QuYWRkSXRlbShuZXdQcm9qZWN0KTtcbiAgICBwcm9qQ291bnRlciArPSAxO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9O1xuXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiB7XG4gICAgY29uc3QgY3VyciA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgcmV0dXJuIGN1cnIuZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RCeU5hbWUgPSAocHJvamVjdE5hbWUpID0+IHByb2plY3RMaXN0LmdldEl0ZW1CeU5hbWUocHJvamVjdE5hbWUpO1xuXG4gIGNvbnN0IGdldFByb2plY3RJbmRleEJ5TmFtZSA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdExpc3QuZ2V0SXRlbUluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcblxuICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvakluZGV4ID0gZ2V0UHJvamVjdEluZGV4QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICBwcm9qZWN0TGlzdC5yZW1vdmVJdGVtKHByb2pJbmRleCk7XG4gICAgaWYgKGN1clByb2pJbmRleCA9PT0gcHJvakluZGV4KSB7XG4gICAgICBjdXJQcm9qSW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICBwcm9qQ291bnRlciA9IDA7XG4gICAgICBjdXJQcm9qSW5kZXggPSAwO1xuICAgICAgYWRkUHJvamVjdCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSAob3JpZ2luYWxOYW1lLCBuZXdQcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IGVkaXRQcm9qID0gZ2V0UHJvamVjdEJ5TmFtZShvcmlnaW5hbE5hbWUpO1xuICAgIGVkaXRQcm9qLm5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKG5hbWUpID0+IHtcbiAgICBjdXJQcm9qSW5kZXggPSBwcm9qZWN0TGlzdC5nZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9vbCA9ICh0b29sVHlwZSwgcGFyYW1ldGVycykgPT4ge1xuICAgIGxldCBuZXdUb29sO1xuICAgIGlmICh0b29sVHlwZSA9PT0gJ05vdGUnKSB7XG4gICAgICBuZXdUb29sID0gTm90ZShwYXJhbWV0ZXJzKTtcbiAgICB9IGVsc2UgaWYgKHRvb2xUeXBlID09PSAnVG9EbycpIHtcbiAgICAgIG5ld1Rvb2wgPSBUb0RvKHBhcmFtZXRlcnMpO1xuICAgIH1cbiAgICBjb25zdCBjdXJQcm9qZWN0ID0gcHJvamVjdExpc3QuaXRlbUxpc3RbY3VyUHJvakluZGV4XTtcbiAgICBjdXJQcm9qZWN0LmFkZEl0ZW0odG9vbFR5cGUsIG5ld1Rvb2wpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvb2wgPSAodG9vbFR5cGUsIG5hbWUpID0+IHtcbiAgICBjb25zdCBjdXJQcm9qID0gZ2V0Q3VycmVudFByb2plY3QoKTtcbiAgICBjdXJQcm9qLmRlbGV0ZUl0ZW0odG9vbFR5cGUsIG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb29sID0gKHRvb2xUeXBlLCBuYW1lLCBwYXJhbWV0ZXJzKSA9PiB7XG4gICAgY29uc3QgY3VyUHJvaiA9IGdldEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgY3VyUHJvai5lZGl0SXRlbSh0b29sVHlwZSwgbmFtZSwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgYWRkUHJvamVjdCgpO1xuICByZXR1cm4ge1xuICAgIGdldCBwcm9qZWN0cygpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0TGlzdC5pdGVtTGlzdDtcbiAgICB9LFxuICAgIGdldCBuYW1lcygpIHtcbiAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3QuaXRlbUxpc3Q7XG4gICAgICByZXR1cm4gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUpO1xuICAgIH0sXG4gICAgYWRkUHJvamVjdCxcbiAgICBkZWxldGVQcm9qZWN0LFxuICAgIGVkaXRQcm9qZWN0TmFtZSxcbiAgICBnZXRDdXJyZW50UHJvamVjdCxcbiAgICBnZXRDdXJyZW50UHJvamVjdE5hbWUsXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICAgIHN3aXRjaFByb2plY3QsXG4gICAgYWRkVG9vbCxcbiAgICBkZWxldGVUb29sLFxuICAgIGVkaXRUb29sLFxuICAgIHVwZGF0ZU9ic2VydmVycyxcbiAgICBhZGRPYnNlcnZlcnMsXG4gICAgdXBkYXRlT2JzZXJ2ZXIsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGVsO1xuIiwiY29uc3QgSXRlbUNvbnRhaW5lciA9IChraW5kKSA9PiB7XG4gIGNvbnN0IGl0ZW1UeXBlID0ga2luZDtcbiAgY29uc3QgaXRlbUxpc3QgPSBbXTtcblxuICBjb25zdCBhZGRJdGVtID0gKGl0ZW1Ub0FkZCkgPT4ge1xuICAgIGl0ZW1MaXN0LnB1c2goaXRlbVRvQWRkKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVJdGVtID0gKHJlbW92ZUluZGV4KSA9PiB7XG4gICAgaXRlbUxpc3Quc3BsaWNlKHJlbW92ZUluZGV4LCAxKTtcbiAgfTtcblxuICBjb25zdCBnZXRJdGVtSW5kZXhCeU5hbWUgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1JbmRleCA9IGl0ZW1MaXN0LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gaXRlbUluZGV4O1xuICB9O1xuICBjb25zdCBnZXRJdGVtQnlOYW1lID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBpdGVtSW5kZXggPSBnZXRJdGVtSW5kZXhCeU5hbWUobmFtZSk7XG4gICAgcmV0dXJuIGl0ZW1MaXN0W2l0ZW1JbmRleF07XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gaXRlbUxpc3QubGVuZ3RoO1xuXG4gIGNvbnN0IGVkaXRJdGVtID0gKGVkaXRJbmRleCwgcGFyYW1ldGVycykgPT4ge1xuICAgIGl0ZW1MaXN0W2VkaXRJbmRleF0ucGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgaXRlbUxpc3QoKSB7XG4gICAgICByZXR1cm4gaXRlbUxpc3Q7XG4gICAgfSxcbiAgICBnZXQgaXRlbVR5cGUoKSB7XG4gICAgICByZXR1cm4gaXRlbVR5cGU7XG4gICAgfSxcbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgcmV0dXJuIGl0ZW1MaXN0Lmxlbmd0aDtcbiAgICB9LFxuICAgIGFkZEl0ZW0sXG4gICAgcmVtb3ZlSXRlbSxcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0SXRlbUJ5TmFtZSxcbiAgICBnZXRJdGVtSW5kZXhCeU5hbWUsXG4gICAgZWRpdEl0ZW0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtQ29udGFpbmVyO1xuIiwiY29uc3QgTm90ZSA9IChbZ2l2ZW5OYW1lLCBjb250ZW50c10pID0+IHtcbiAgbGV0IG5hbWUgPSBnaXZlbk5hbWU7XG4gIGxldCB0ZXh0Q29udGVudCA9IGNvbnRlbnRzO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0IHRleHRDb250ZW50KCkge1xuICAgICAgcmV0dXJuIHRleHRDb250ZW50O1xuICAgIH0sXG4gICAgc2V0IHRleHRDb250ZW50KG5ld1RleHQpIHtcbiAgICAgIHRleHRDb250ZW50ID0gbmV3VGV4dDtcbiAgICB9LFxuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZShuZXdOb3RlTmFtZSkge1xuICAgICAgbmFtZSA9IG5ld05vdGVOYW1lO1xuICAgIH0sXG4gICAgZ2V0IHBhcmFtZXRlcnMoKSB7XG4gICAgICByZXR1cm4gW25hbWUsIHRleHRDb250ZW50XTtcbiAgICB9LFxuICAgIHNldCBwYXJhbWV0ZXJzKFtuZXdOYW1lLCBuZXdDb250ZW50c10pIHtcbiAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgICAgdGV4dENvbnRlbnQgPSBuZXdDb250ZW50cztcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90ZTtcbiIsImltcG9ydCBJdGVtQ29udGFpbmVyIGZyb20gJy4vaXRlbS1jb250YWluZXInO1xuXG5jb25zdCBQcm9qZWN0ID0gKGdpdmVuTmFtZSwgdHlwZUxpc3QpID0+IHtcbiAgbGV0IG5hbWUgPSBnaXZlbk5hbWU7XG4gIGNvbnN0IGNvbnRhaW5lck1hcCA9IG5ldyBNYXAoKTtcbiAgdHlwZUxpc3QuZm9yRWFjaCgodHlwZSkgPT4ge1xuICAgIGNvbnRhaW5lck1hcC5zZXQodHlwZSwgSXRlbUNvbnRhaW5lcih0eXBlKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGdldFR5cGVOYW1lTGlzdCA9ICh0eXBlKSA9PiBjb250YWluZXJNYXAuZ2V0KHR5cGUpO1xuXG4gIGNvbnN0IGFkZEl0ZW0gPSAodHlwZSwgaXRlbSkgPT4ge1xuICAgIGNvbnN0IHR5cGVDb250YWluZXIgPSBnZXRUeXBlTmFtZUxpc3QodHlwZSk7XG4gICAgdHlwZUNvbnRhaW5lci5hZGRJdGVtKGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUl0ZW0gPSAodHlwZSwgaXRlbU5hbWUpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGRlbGV0ZUluZGV4ID0gdHlwZUNvbnRhaW5lci5nZXRJdGVtSW5kZXhCeU5hbWUoaXRlbU5hbWUpO1xuICAgIHR5cGVDb250YWluZXIucmVtb3ZlSXRlbShkZWxldGVJbmRleCk7XG4gIH07XG5cbiAgY29uc3QgZWRpdEl0ZW0gPSAodHlwZSwgaXRlbU5hbWUsIHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCB0eXBlQ29udGFpbmVyID0gZ2V0VHlwZU5hbWVMaXN0KHR5cGUpO1xuICAgIGNvbnN0IGVkaXRJbmRleCA9IHR5cGVDb250YWluZXIuZ2V0SXRlbUluZGV4QnlOYW1lKGl0ZW1OYW1lKTtcbiAgICB0eXBlQ29udGFpbmVyLmVkaXRJdGVtKGVkaXRJbmRleCwgcGFyYW1ldGVycyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgIHJldHVybiBuYW1lO1xuICAgIH0sXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfSxcbiAgICBhZGRJdGVtLFxuICAgIGRlbGV0ZUl0ZW0sXG4gICAgZWRpdEl0ZW0sXG4gICAgZ2V0VHlwZU5hbWVMaXN0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiIsImNvbnN0IFRvRG8gPSAoW25ld05hbWUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eV0pID0+IHtcbiAgbGV0IG5hbWUgPSBuZXdOYW1lO1xuICBsZXQgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgbGV0IGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xuICBsZXQgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcblxuICByZXR1cm4ge1xuICAgIGdldCBuYW1lKCkge1xuICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfSxcbiAgICBzZXQgbmFtZShnaXZlbk5hbWUpIHtcbiAgICAgIG5hbWUgPSBnaXZlbk5hbWU7XG4gICAgfSxcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gZGVzY3JpcHRpb247XG4gICAgfSxcbiAgICBzZXQgZGVzY3JpcHRpb24oZ2l2ZW5EZXNjcmlwdGlvbikge1xuICAgICAgZGVzY3JpcHRpb24gPSBnaXZlbkRlc2NyaXB0aW9uO1xuICAgIH0sXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gZHVlRGF0ZTtcbiAgICB9LFxuICAgIHNldCBkdWVEYXRlKGdpdmVuRGF0ZSkge1xuICAgICAgZHVlRGF0ZSA9IGdpdmVuRGF0ZTtcbiAgICB9LFxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICB9LFxuICAgIHNldCBwcmlvcml0eShnaXZlblByaW9yaXR5KSB7XG4gICAgICBwcmlvcml0eSA9IGdpdmVuUHJpb3JpdHk7XG4gICAgfSxcbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgIHJldHVybiBbbmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5XTtcbiAgICB9LFxuICAgIHNldCBwYXJhbWV0ZXJzKFtnaXZlbk5hbWUsIGdpdmVuRGVzY3JpcHRpb24sIGdpdmVuRGF0ZSwgZ2l2ZW5Qcmlvcml0eV0pIHtcbiAgICAgIG5hbWUgPSBnaXZlbk5hbWU7XG4gICAgICBkZXNjcmlwdGlvbiA9IGdpdmVuRGVzY3JpcHRpb247XG4gICAgICBkdWVEYXRlID0gZ2l2ZW5EYXRlO1xuICAgICAgcHJpb3JpdHkgPSBnaXZlblByaW9yaXR5O1xuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb0RvO1xuIiwiaW1wb3J0IFByb2plY3RzVmlldyBmcm9tICcuL3ZpZXdzL3Byb2plY3RzLXZpZXcnO1xuaW1wb3J0IFRvZG9WaWV3IGZyb20gJy4vdmlld3MvdG9kb3Mtdmlldyc7XG5pbXBvcnQgTm90ZXNWaWV3IGZyb20gJy4vdmlld3Mvbm90ZXMtdmlldyc7XG5cbmNvbnN0IFZpZXcgPSAoZ2l2ZW5Db250cm9sbGVyKSA9PiB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBnaXZlbkNvbnRyb2xsZXI7XG4gIGNvbnN0IHsgbW9kZWwgfSA9IGdpdmVuQ29udHJvbGxlcjtcbiAgY29uc3QgcHJvalZpZXcgPSBQcm9qZWN0c1ZpZXcoY29udHJvbGxlci5wcm9qZWN0Q29udHJvbGxlcik7XG4gIGNvbnN0IG5vdGVzVmlldyA9IE5vdGVzVmlldyhjb250cm9sbGVyLm5vdGVDb250cm9sbGVyKTtcbiAgY29uc3QgdG9kb1ZpZXcgPSBUb2RvVmlldyhjb250cm9sbGVyLnRvZG9Db250cm9sbGVyKTtcbiAgbW9kZWwuYWRkT2JzZXJ2ZXJzKFtwcm9qVmlldywgdG9kb1ZpZXcsIG5vdGVzVmlld10pO1xuICBtb2RlbC51cGRhdGVPYnNlcnZlcnMoY29udHJvbGxlci5tb2RlbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWV3O1xuIiwiZnVuY3Rpb24gTm90ZXNWaWV3KG5vdGVDb250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBub3RlQ29udHJvbGxlcjtcblxuICBjb25zdCBvYnNlcnZlck5hbWUgPSAnTm90ZSc7XG5cbiAgY29uc3QgZ2V0UGFyZW50Tm90ZSA9IChlKSA9PiBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBnZXROb3RlQ29udGVudHMgPSAoZSwgaW5kZXgpID0+IGdldFBhcmVudE5vdGUoZSkuY2hpbGRyZW5baW5kZXhdLnRleHRDb250ZW50O1xuICBjb25zdCBhZGROb3RlVmlldyA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IG5vdGVXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub3RlV2luZG93LmNsYXNzTmFtZSA9ICdhZGQtbm90ZS13aW5kb3cnO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbm90ZU5hbWUuY2xhc3NOYW1lID0gJ2lucHV0LW5vdGUtbmFtZSdcbiAgICBub3RlTmFtZS5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICBjb25zdCBub3RlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgbm90ZUNvbnRlbnQuY2xhc3NOYW1lID0gJ2lucHV0LW5vdGUtY29udGVudCdcbiAgICBub3RlQ29udGVudC5yZXF1aXJlZCA9IHRydWU7XG4gICBcbiAgICBjb25zdCBub3RlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBub3RlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBub3RlQnV0dG9uLnZhbHVlID0gJ0FkZCc7XG4gICAgbm90ZUJ1dHRvbi5jbGFzc05hbWUgPSAnaW5wdXQtbm90ZS1idXR0b24nXG5cbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5hZGROb3RlKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlTmFtZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZUNvbnRlbnQpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVCdXR0b24pO1xuICAgIG5vdGVXaW5kb3cuYXBwZW5kQ2hpbGQobm90ZUZvcm0pO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5vdGUtdmlldycpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3RlV2luZG93KTtcbiAgfTtcblxuICBjb25zdCBlZGl0Tm90ZVZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IGVkaXROb3RlTmFtZSA9IGdldE5vdGVDb250ZW50cyhlLCAwKTtcbiAgICBjb25zdCBlZGl0Tm90ZUNvbnRlbnQgPSBnZXROb3RlQ29udGVudHMoZSwgMSk7XG4gICAgY29uc3Qgbm90ZVdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5vdGVXaW5kb3cuY2xhc3NOYW1lID0gJ2VkaXQtbm90ZS13aW5kb3cnO1xuICAgIGNvbnN0IG5vdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgY29uc3Qgbm90ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIG5vdGVOYW1lLnR5cGUgPSAndGV4dCc7XG4gICAgbm90ZU5hbWUudmFsdWUgPSBlZGl0Tm90ZU5hbWU7XG4gICAgbm90ZU5hbWUuY2xhc3NOYW1lID0gJ2VkaXQtbm90ZS1uYW1lJztcblxuICAgIGNvbnN0IG5vdGVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBub3RlQ29udGVudC52YWx1ZSA9IGVkaXROb3RlQ29udGVudDtcbiAgICBub3RlQ29udGVudC5jbGFzc05hbWUgPSAnZWRpdC1ub3RlLWNvbnRlbnQnO1xuXG4gICAgY29uc3Qgbm90ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgbm90ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgbm90ZUJ1dHRvbi52YWx1ZSA9ICdlZGl0JztcbiAgICBub3RlQnV0dG9uLmNsYXNzTmFtZSA9ICd0cnVlLWVkaXQtYnV0dG9uJztcblxuICAgIGNvbnN0IGhpZGRlbk9yaWdpbmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBoaWRkZW5PcmlnaW5hbC50eXBlID0gJ2hpZGRlbic7XG4gICAgaGlkZGVuT3JpZ2luYWwudmFsdWUgPSBlZGl0Tm90ZU5hbWU7XG5cbiAgICBub3RlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29udHJvbGxlci5lZGl0Tm90ZSk7XG4gICAgbm90ZUZvcm0uYXBwZW5kQ2hpbGQobm90ZU5hbWUpO1xuICAgIG5vdGVGb3JtLmFwcGVuZENoaWxkKG5vdGVDb250ZW50KTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChub3RlQnV0dG9uKTtcbiAgICBub3RlRm9ybS5hcHBlbmRDaGlsZChoaWRkZW5PcmlnaW5hbCk7XG4gICAgbm90ZVdpbmRvdy5hcHBlbmRDaGlsZChub3RlRm9ybSk7XG4gICAgZ2V0UGFyZW50Tm90ZShlKS5yZXBsYWNlQ2hpbGRyZW4obm90ZUZvcm0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1ub3RlLWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLW5vdGUtYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZGVsZXRlTm90ZSkpO1xuICAgIGVkaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdE5vdGVWaWV3KSk7XG4gICAgY29uc3QgdGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbi5hZGQtbm90ZS1idXR0b24nKTtcbiAgICB0YXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTm90ZVZpZXcpO1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkVmlldyA9IChnaXZlbk5vdGVMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3Tm90ZVZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdOb3RlVmlldy5jbGFzc05hbWUgPSAnbm90ZS12aWV3JztcbiAgICBnaXZlbk5vdGVMaXN0LmZvckVhY2goKG5vdGUpID0+IHtcbiAgICAgIGNvbnN0IFtub3RlTmFtZSwgbm90ZUNvbnRlbnRdID0gbm90ZS5wYXJhbWV0ZXJzO1xuICAgICAgY29uc3Qgbm90ZUhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgIG5vdGVIb2xkZXIuY2xhc3NOYW1lID0gJ25vdGUnO1xuXG4gICAgICBjb25zdCBub3RlTmFtZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICBub3RlTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IG5vdGVOYW1lO1xuXG4gICAgICBjb25zdCBub3RlTmFtZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBub3RlTmFtZUNvbnRlbnQudGV4dENvbnRlbnQgPSBub3RlQ29udGVudDtcblxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICBlZGl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGVkaXRCdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtbm90ZS1idXR0b24nO1xuICAgICAgZWRpdEJ1dHRvbi52YWx1ZSA9ICdlZGl0JztcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIGRlbGV0ZUJ1dHRvbi52YWx1ZSA9ICdkZWxldGUnO1xuICAgICAgZGVsZXRlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLW5vdGUtYnV0dG9uJztcblxuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChub3RlTmFtZUhlYWRlcik7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKG5vdGVOYW1lQ29udGVudCk7XG4gICAgICBub3RlSG9sZGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgICAgbm90ZUhvbGRlci5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgICAgbmV3Tm90ZVZpZXcuYXBwZW5kQ2hpbGQobm90ZUhvbGRlcik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGROb3RlVmlld0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZE5vdGVWaWV3QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtbm90ZS1idXR0b24nO1xuICAgIGFkZE5vdGVWaWV3QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBOb3RlJztcbiAgICBuZXdOb3RlVmlldy5hcHBlbmRDaGlsZChhZGROb3RlVmlld0J1dHRvbik7XG4gICAgcmV0dXJuIG5ld05vdGVWaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3Qgbm90ZUNvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdCgnTm90ZScpO1xuICAgIGNvbnN0IG5vdGVMaXN0ID0gbm90ZUNvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCBub3RlVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ub3RlLCAuYWRkLW5vdGUtd2luZG93Jyk7XG4gICAgbm90ZVZpZXcuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdOb3RlVmlldyA9IGJ1aWxkVmlldyhub3RlTGlzdCk7XG4gICAgY29uc3QgY29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYubm90ZS12aWV3Jyk7XG4gICAgY29uc3QgY29udGVudFZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudC1zaWRlJyk7XG4gICAgY29udGVudFZpZXcucmVwbGFjZUNoaWxkKG5ld05vdGVWaWV3LCBjb250ZW50U2lkZSk7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgZ2V0IGNvbnRyb2xsZXIoKSB7XG4gICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICB9LFxuICAgIGJ1aWxkVmlldyxcbiAgICB1cGRhdGVWaWV3LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgTm90ZXNWaWV3O1xuIiwiZnVuY3Rpb24gUHJvamVjdHNWaWV3KHByb2plY3RDb250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSBwcm9qZWN0Q29udHJvbGxlcjtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ1Byb2plY3QnO1xuXG4gIGNvbnN0IGdldFBhcmVudFByb2plY3QgPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0UHJvakNvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnRQcm9qZWN0KGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcblxuICBjb25zdCBlZGl0UHJvamVjdFZpZXcgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlZGl0UHJvamVjdE5hbWUgPSBnZXRQcm9qQ29udGVudHMoZSwgMCk7XG4gICAgY29uc3QgcHJvamVjdFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RXaW5kb3cuY2xhc3NOYW1lID0gJ2VkaXQtcHJvai13aW5kb3cnO1xuICAgIGNvbnN0IHByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHByb2pGb3JtLmNsYXNzTmFtZSA9ICdlZGl0LXRpdGxlJztcblxuICAgIGNvbnN0IHByb2pOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHByb2pOYW1lLnZhbHVlID0gZWRpdFByb2plY3ROYW1lO1xuICAgIHByb2pOYW1lLmNsYXNzTmFtZSA9ICdwcm9qZWN0LWhlYWRpbmcnXG4gICAgcHJvak5hbWUuc2l6ZSA9IGVkaXRQcm9qZWN0TmFtZS5sZW5ndGg7XG4gICAgcHJvak5hbWUubWF4TGVuZ3RoID0gMTU7XG5cbiAgICBjb25zdCBoaWRkZW5PcmlnaW5hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaGlkZGVuT3JpZ2luYWwudHlwZSA9ICdoaWRkZW4nO1xuICAgIGhpZGRlbk9yaWdpbmFsLnZhbHVlID0gZWRpdFByb2plY3ROYW1lO1xuXG4gICAgcHJvak5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNvbnRyb2xsZXIuZWRpdFByb2plY3ROYW1lKTtcbiAgICBwcm9qTmFtZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGNvbnRyb2xsZXIuZWRpdFByb2plY3ROYW1lKTtcbiAgICBwcm9qRm9ybS5hcHBlbmRDaGlsZChwcm9qTmFtZSk7XG4gICAgcHJvakZvcm0uYXBwZW5kQ2hpbGQoaGlkZGVuT3JpZ2luYWwpO1xuICAgIHByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQocHJvakZvcm0pO1xuICAgIFxuICAgIGdldFBhcmVudFByb2plY3QoZSkucmVwbGFjZUNoaWxkcmVuKHByb2pGb3JtKTtcbiAgfTtcblxuICBjb25zdCBhZGROZXdQcm9qZWN0VmlldyA9ICgpID0+IHtcbiAgICBjb250cm9sbGVyLmFkZFByb2plY3QoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVFdmVudEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtaGVhZGluZycpO1xuICAgIHN3aXRjaFByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLnN3aXRjaFByb2plY3QpO1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIGVkaXRQcm9qZWN0Vmlldyk7XG4gICAgfSk7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXByb2plY3QtYnV0dG9uJyk7XG4gICAgZGVsZXRlUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRyb2xsZXIuZGVsZXRlUHJvamVjdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKHByb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgbmV3UHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdQcm9qZWN0TGlzdC5jbGFzc05hbWUgPSAncHJvamVjdC1saXN0JztcbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgbmV3TGlzdC5jbGFzc05hbWUgPSAncHJvamVjdC10aXRsZSc7XG4gICAgICBjb25zdCBuZXdOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIG5ld05hbWUuY2xhc3NOYW1lID0gJ3Byb2plY3QtaGVhZGluZyc7XG4gICAgICBuZXdOYW1lLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLXByb2plY3QtYnV0dG9uJztcbiAgICAgIG5ld0xpc3QuYXBwZW5kQ2hpbGQobmV3TmFtZSk7XG4gICAgICBuZXdMaXN0LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdXR0b24pO1xuICAgICAgbmV3UHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3RMaXN0LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWVzID0gbW9kZWwubmFtZXM7XG4gICAgY29uc3QgcHJvalZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgJy5hZGQtcHJvamVjdC1idXR0b24sIC5wcm9qZWN0LWxpc3QsIC5wcm9qZWN0LXRpdGxlJyxcbiAgICApO1xuICAgIHByb2pWaWV3LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgY29uc3QgbmV3UHJvalZpZXcgPSBidWlsZFZpZXcocHJvamVjdE5hbWVzKTtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKG5ld1Byb2pWaWV3KTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmNsYXNzTmFtZSA9ICdhZGQtcHJvamVjdC1idXR0b24nO1xuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdQcm9qZWN0Vmlldyk7XG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gICAgY29uc3QgY3VycmVudE5hbWVIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvdy1uYW1lJyk7XG4gICAgY3VycmVudE5hbWVIZWFkZXIudGV4dENvbnRlbnQgPSBtb2RlbC5nZXRDdXJyZW50UHJvamVjdE5hbWUoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzVmlldztcbiIsImZ1bmN0aW9uIFRvZG9WaWV3KHRvZG9Db250cm9sbGVyKSB7XG4gIGNvbnN0IGNvbnRyb2xsZXIgPSB0b2RvQ29udHJvbGxlcjtcbiAgY29uc3Qgb2JzZXJ2ZXJOYW1lID0gJ1RvRG8nO1xuXG4gIGNvbnN0IGdldFBhcmVudFRvZG8gPSAoZSkgPT4gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgY29uc3QgZ2V0VG9kb0NvbnRlbnRzID0gKGUsIGluZGV4KSA9PiBnZXRQYXJlbnRUb2RvKGUpLmNoaWxkcmVuW2luZGV4XS50ZXh0Q29udGVudDtcblxuICBjb25zdCBhZGRUb2RvVmlldyA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb1dpbmRvdy5jbGFzc05hbWUgPSAnYWRkLXRvZG8td2luZG93JztcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZS50eXBlID0gJ3RleHQnO1xuXG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Db250ZW50LnR5cGUgPSAndGV4dCc7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9ICdkYXRlJztcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1ByaW9yaXR5LnR5cGUgPSAnbnVtYmVyJztcblxuICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9CdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIHRvZG9CdXR0b24udmFsdWUgPSAnQWRkJztcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmFkZFRvZG8pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9OYW1lKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvQ29udGVudCk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG4gICAgdG9kb1dpbmRvdy5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby12aWV3Jyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9XaW5kb3cpO1xuICB9O1xuXG4gIGNvbnN0IGVkaXRUb2RvVmlldyA9IChlKSA9PiB7XG4gICAgY29uc3QgZWRpdFRvZG9OYW1lID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IGVkaXRUb2RvQ29udGVudCA9IGdldFRvZG9Db250ZW50cyhlLCAxKTtcbiAgICBjb25zdCBlZGl0VG9kb0R1ZURhdGUgPSBnZXRUb2RvQ29udGVudHMoZSwgMik7XG4gICAgY29uc3QgZWRpdFRvZG9Qcmlvcml0eSA9IGdldFRvZG9Db250ZW50cyhlLCAzKTtcblxuICAgIGNvbnN0IHRvZG9XaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvV2luZG93LmNsYXNzTmFtZSA9ICdlZGl0LXRvZG8td2luZG93JztcbiAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcblxuICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0b2RvTmFtZS50eXBlID0gJ3RleHQnO1xuICAgIHRvZG9OYW1lLnZhbHVlID0gZWRpdFRvZG9OYW1lO1xuXG4gICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRvZG9Db250ZW50LnR5cGUgPSAndGV4dCc7XG4gICAgdG9kb0NvbnRlbnQudmFsdWUgPSBlZGl0VG9kb0NvbnRlbnQ7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0R1ZURhdGUudHlwZSA9ICdkYXRlJztcbiAgICB0b2RvRHVlRGF0ZS52YWx1ZSA9IGVkaXRUb2RvRHVlRGF0ZTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb1ByaW9yaXR5LnR5cGUgPSAnbnVtYmVyJztcbiAgICB0b2RvUHJpb3JpdHkudmFsdWUgPSBlZGl0VG9kb1ByaW9yaXR5O1xuXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgdG9kb0J1dHRvbi52YWx1ZSA9ICdlZGl0JztcbiAgICB0b2RvQnV0dG9uLmNsYXNzTmFtZSA9ICd0cnVlVG9Eb0VkaXRCdXR0b24nO1xuXG4gICAgY29uc3QgaGlkZGVuT3JpZ2luYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhpZGRlbk9yaWdpbmFsLnR5cGUgPSAnaGlkZGVuJztcbiAgICBoaWRkZW5PcmlnaW5hbC52YWx1ZSA9IGVkaXRUb2RvTmFtZTtcblxuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmVkaXRUb2RvKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTmFtZSk7XG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnQpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGhpZGRlbk9yaWdpbmFsKTtcbiAgICB0b2RvV2luZG93LmFwcGVuZENoaWxkKHRvZG9Gb3JtKTtcbiAgICBnZXRQYXJlbnRUb2RvKGUpLnJlcGxhY2VDaGlsZHJlbih0b2RvRm9ybSk7XG4gIH07XG5cbiAgY29uc3QgaG9sZGVyR2VuZXJhdG9yID0gKHBhcmFtZXRlcnMpID0+IHtcbiAgICBjb25zdCBbdG9kb05hbWUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eV0gPSBwYXJhbWV0ZXJzO1xuICAgIGxldCB2aXNpYmlsaXR5O1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLXRvZG8tYnV0dG9uJykgIT09IG51bGwpIHtcbiAgICAgIHZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hyaW5rLXRvZG8tYnV0dG9uJykgIT09IG51bGwpIHtcbiAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIH1cblxuICAgIGNvbnN0IHRkSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHRkSG9sZGVyLmNsYXNzTmFtZSA9ICd0b2RvJztcbiAgICBjb25zdCB0ZE5hbWVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRkTmFtZUhlYWRlci50ZXh0Q29udGVudCA9IHRvZG9OYW1lO1xuXG4gICAgY29uc3QgdGREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0ZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHRkRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ3RvZG8tZGVzY3JpcHRpb24nO1xuICAgIHRkRGVzY3JpcHRpb24uc3R5bGUudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG5cbiAgICBjb25zdCB0ZER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGREdWVEYXRlLnRleHRDb250ZW50ID0gdG9kb0R1ZURhdGU7XG5cbiAgICBjb25zdCB0ZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRkUHJpb3JpdHkudGV4dENvbnRlbnQgPSB0b2RvUHJpb3JpdHk7XG5cbiAgICBjb25zdCBleHBhbmRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBleHBhbmRUb2RvQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBpZiAodmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICAgIGV4cGFuZFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2V4cGFuZC10b2RvLWJ1dHRvbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cGFuZFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ3Nocmluay10b2RvLWJ1dHRvbic7XG4gICAgfVxuICAgIGV4cGFuZFRvZG9CdXR0b24udmFsdWUgPSAnLi4uJztcblxuICAgIGNvbnN0IGVkaXRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBlZGl0VG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZWRpdFRvZG9CdXR0b24uY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1idXR0b24nO1xuICAgIGVkaXRUb2RvQnV0dG9uLnZhbHVlID0gJ2VkaXQnO1xuXG4gICAgY29uc3QgZGVsZXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgZGVsZXRlVG9kb0J1dHRvbi5jbGFzc05hbWUgPSAnZGVsZXRlLXRvZG8tYnV0dG9uJztcbiAgICBkZWxldGVUb2RvQnV0dG9uLnZhbHVlID0gJ2RlbGV0ZSc7XG5cbiAgICB0ZEhvbGRlci5hcHBlbmRDaGlsZCh0ZE5hbWVIZWFkZXIpO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRGVzY3JpcHRpb24pO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKHRkRHVlRGF0ZSk7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQodGRQcmlvcml0eSk7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kVG9kb0J1dHRvbik7XG4gICAgdGRIb2xkZXIuYXBwZW5kQ2hpbGQoZWRpdFRvZG9CdXR0b24pO1xuICAgIHRkSG9sZGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdXR0b24pO1xuICAgIHJldHVybiB0ZEhvbGRlci5jbG9uZU5vZGUodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3Qgc2hyaW5rVG9kb1ZpZXcgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9OYW1lID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDApO1xuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGdldFRvZG9Db250ZW50cyhlLCAxKTtcbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IGdldFRvZG9Db250ZW50cyhlLCAyKTtcbiAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBnZXRUb2RvQ29udGVudHMoZSwgMyk7XG5cbiAgICBjb25zdCB0ZEhvbGRlciA9IGhvbGRlckdlbmVyYXRvcihbXG4gICAgICB0b2RvTmFtZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb1ByaW9yaXR5LFxuICAgIF0pO1xuICAgIGdldFBhcmVudFRvZG8oZSkucmVwbGFjZUNoaWxkcmVuKHRkSG9sZGVyKTtcbiAgICB1cGRhdGVFdmVudEhhbmRsZXJzKCk7XG4gIH07XG4gIGNvbnN0IGV4cGFuZFRvZG9WaWV3ID0gKGUpID0+IHtcbiAgICBjb25zdCB0b2RvTmFtZSA9IGdldFRvZG9Db250ZW50cyhlLCAwKTtcbiAgICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBnZXRUb2RvQ29udGVudHMoZSwgMSk7XG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBnZXRUb2RvQ29udGVudHMoZSwgMik7XG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gZ2V0VG9kb0NvbnRlbnRzKGUsIDMpO1xuXG4gICAgY29uc3QgdGRIb2xkZXIgPSBob2xkZXJHZW5lcmF0b3IoW1xuICAgICAgdG9kb05hbWUsXG4gICAgICB0b2RvRGVzY3JpcHRpb24sXG4gICAgICB0b2RvRHVlRGF0ZSxcbiAgICAgIHRvZG9Qcmlvcml0eSxcbiAgICBdKTtcbiAgICBnZXRQYXJlbnRUb2RvKGUpLnJlcGxhY2VDaGlsZHJlbih0ZEhvbGRlcik7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUV2ZW50SGFuZGxlcnMgPSAoKSA9PiB7XG4gICAgY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC10b2RvLWJ1dHRvbicpO1xuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvZG8tYnV0dG9uJyk7XG4gICAgY29uc3QgZXhwYW5kQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5leHBhbmQtdG9kby1idXR0b24nKTtcbiAgICBjb25zdCBzaHJpbmtCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNocmluay10b2RvLWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250cm9sbGVyLmRlbGV0ZVRvZG8pKTtcbiAgICBlZGl0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRUb2RvVmlldykpO1xuICAgIGV4cGFuZEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBleHBhbmRUb2RvVmlldyk7XG4gICAgfSk7XG4gICAgc2hyaW5rQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNocmlua1RvZG9WaWV3KTtcbiAgICB9KTtcbiAgICBjb25zdCB0b2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLmFkZC10b2RvLWJ1dHRvbicpO1xuICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb2RvVmlldyk7XG4gIH07XG5cbiAgY29uc3QgYnVpbGRWaWV3ID0gKGdpdmVuVG9kb0xpc3QpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1RvZG9WaWV3LmNsYXNzTmFtZSA9ICd0b2RvLXZpZXcnO1xuICAgIGdpdmVuVG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdGRIb2xkZXIgPSBob2xkZXJHZW5lcmF0b3IodG9kby5wYXJhbWV0ZXJzKTtcbiAgICAgIG5ld1RvZG9WaWV3LmFwcGVuZENoaWxkKHRkSG9sZGVyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFRvZG9WaWV3QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVG9kb1ZpZXdCdXR0b24uY2xhc3NOYW1lID0gJ2FkZC10b2RvLWJ1dHRvbic7XG4gICAgYWRkVG9kb1ZpZXdCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFRvLURvJztcbiAgICBuZXdUb2RvVmlldy5hcHBlbmRDaGlsZChhZGRUb2RvVmlld0J1dHRvbik7XG4gICAgcmV0dXJuIG5ld1RvZG9WaWV3LmNsb25lTm9kZSh0cnVlKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVWaWV3ID0gKG1vZGVsKSA9PiB7XG4gICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IG1vZGVsLmdldFR5cGVOYW1lTGlzdCgnVG9EbycpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gdG9kb0NvbnRhaW5lci5pdGVtTGlzdDtcbiAgICBjb25zdCB0b2RvVmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLCAuYWRkLXRvZG8td2luZG93Jyk7XG4gICAgdG9kb1ZpZXcuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICBjb25zdCBuZXdUb2RvVmlldyA9IGJ1aWxkVmlldyh0b2RvTGlzdCk7XG4gICAgY29uc3QgY29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudG9kby12aWV3Jyk7XG4gICAgY29uc3QgYWN0dWFsQ29udGVudFNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY29udGVudC1zaWRlJyk7XG4gICAgYWN0dWFsQ29udGVudFNpZGUucmVwbGFjZUNoaWxkKG5ld1RvZG9WaWV3LCBjb250ZW50U2lkZSk7XG4gICAgdXBkYXRlRXZlbnRIYW5kbGVycygpO1xuICB9O1xuXG4gIHVwZGF0ZUV2ZW50SGFuZGxlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIGdldCBvYnNlcnZlck5hbWUoKSB7XG4gICAgICByZXR1cm4gb2JzZXJ2ZXJOYW1lO1xuICAgIH0sXG4gICAgYnVpbGRWaWV3LFxuICAgIHVwZGF0ZVZpZXcsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9WaWV3O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kdWxlcy9tb2RlbCc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcic7XG5pbXBvcnQgVmlldyBmcm9tICcuL21vZHVsZXMvdmlldyc7XG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1vZGVsID0gTW9kZWwoKTtcbiAgY29uc3QgY29udHJvbGxlciA9IENvbnRyb2xsZXIobW9kZWwpO1xuICBWaWV3KGNvbnRyb2xsZXIpO1xufTtcblxubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9