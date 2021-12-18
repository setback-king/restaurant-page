/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Courgette-Regular.ttf */ \"./src/Courgette-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n  \\n@font-face {\\n    font-family: 'Courgette', cursive;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('ttf');\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n\\nbody {\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Courgette', cursive;\\n    background-color: blanchedalmond;\\n\\n}\\n\\nnav {\\n    display: flex;\\n    gap: 30px;\\n    margin-right: 100px;\\n}\\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    min-height: 100vh;\\n}\\n\\n.header {\\n    background-color: rgb(31, 28, 28);\\n    color: blanchedalmond;\\n    display: flex;\\n    justify-content: space-between;\\n    justify-items: center;\\n    align-items: center;\\n\\n\\n}\\n\\n.navLink {\\n    background-color: rgb(31, 28, 28);\\n    color: blanchedalmond;\\n    font-size: 25px;\\n    font-family: 'Courgette', cursive;\\n    transition: transform 0.3s;\\n    border: none;\\n\\n\\n}\\n.navLink.active {\\n    border-bottom: 2px solid blanchedalmond;\\n  }\\n\\n.navLink:hover {\\n        transform: translateY(-10%);\\n      \\n}\\n\\n.phoPic {\\n    height: 100%;\\n    width: 700px;\\n    \\n}\\n\\n.flag {\\n    margin-top: 6px;\\n    margin-left: 120px;\\n}\\n\\n.restaurantName {\\n    margin-left: 130px;\\n    font-size: 35px;\\n}\\n\\n.home {\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    text-align: center;\\n    background-color: blanchedalmond;\\n    animation: fadeIn 1.5s;\\n   \\n}\\n\\n.homeText {\\n  width: 700px;\\n  font-size: 40px;\\n  background-color: blanchedalmond;\\n  margin-left: 15px;\\n  border-style: double;\\n  margin-top: 10px;\\n  border-radius: 1em;\\n  margin-bottom: 10px;\\n \\n  \\n    \\n}\\n\\n.homeDiv {\\n    height: 640px;\\n}\\n\\n.contact {\\n    background-color: blanchedalmond;\\n    text-align: center;\\n    font-size: 40px;\\n    display: flex;\\n    flex-direction: column;\\n    animation: fadeIn 1.5s; \\n}\\n\\n.contactHeader {\\n    text-align: center;\\n    margin-bottom: 90px;\\n    \\n}\\n\\n.contactDiv {\\n    display: flex;\\n    background-color: blanchedalmond;\\n    color: black;\\n    gap: 20px;\\n    justify-content: space-around;\\n    \\n}\\n\\n.info {\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 40px;\\n    border: solid black 1px;\\n    padding: 30px;\\n    background-color: white;\\n\\n}\\n\\n.fullInfo {\\n    font-size: 30px;\\n   \\n}\\n\\n\\n.menu {\\n    \\n    display: flex;\\n    flex-direction: column;\\n    text-align: center;\\n    font-size: 70px;\\n    animation: fadeIn 1.5s;\\n}\\n\\n.menuType {\\n    font-size: 30px;\\n    margin-bottom: 10px;\\n}\\n\\n.fullItem {\\n    display: flex;\\n    flex-direction: column;\\n    border: solid black 1px;\\n    margin-left: 450px;\\n    margin-right: 450px;\\n    margin-bottom: 20px;\\n    background-color: white;\\n\\n}\\n\\n.fullItem:hover {\\n    transform: translateY(-10%);\\n}\\n\\n.itemDiv {\\n    display: flex;\\n    text-align: center;\\n    justify-content: center;\\n    gap: 20px;\\n    align-items: center;\\n   \\n   \\n}\\n.itemName {\\n    font-size: 25px;\\n}\\n.itemInfo {\\n    color: gray;\\n    font-size: 22px;\\n}\\n\\n\\n\\n\\n.footer {\\n    display: flex;\\n    justify-content: center;\\n    background-color: rgb(31, 28, 28);\\n    color: blanchedalmond;\\n    font-size: 17px;\\n    \\n}\\n\\n\\n@keyframes fadeIn {\\n    0% {\\n      opacity: 0;\\n    }\\n  \\n    100% {\\n      opacity: 1;\\n    }\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n    const contactHeader = document.createElement('h2');\n    contactHeader.classList.add('contactHeader');\n    contactHeader.textContent = \"Contact Information\";\n    \n    const contactDiv = document.createElement('div');\n    contactDiv.classList.add('contactDiv');\n    \n    const address = document.createElement('div');\n    address.classList.add('info');\n    address.textContent = \"Location:\";\n    const fullAddress = document.createElement('span');\n    fullAddress.textContent = \"80 Wood Ave\";\n    fullAddress.classList.add('fullInfo');\n    const fullState = document.createElement('span');\n    fullState.classList.add('fullInfo');\n    fullState.textContent = \"Bridgeport, CT 06605\";\n\n    const hours = document.createElement('div');\n    hours.classList.add('info');\n    hours.textContent = \"Hours:\"\n    const weekday = document.createElement('span');\n    weekday.classList.add('fullInfo')\n    const weekend = document.createElement('span');\n    weekend.classList.add('fullInfo');\n    weekday.textContent = \"M-F: 12:00pm - 8:00pm\";\n    weekend.textContent = \"SS: 2:00pm - 9:00pm\";\n\n    const call = document.createElement('div');\n    call.classList.add('info');\n    call.textContent = \"Reach us at:\"\n    const number = document.createElement('span');\n    number.classList.add('fullInfo')\n    number.textContent = \"(203) 239 XXXX\";\n    const email = document.createElement('span');\n    email.classList.add('fullInfo')\n    email.textContent = \"phosaigon@gmail.com\"\n\n\n    call.appendChild(number);\n    call.appendChild(email);\n\n    hours.appendChild(weekday);\n    hours.appendChild(weekend);\n   \n    address.appendChild(fullAddress);\n    address.appendChild(fullState);\n    contactDiv.appendChild(address);\n    contactDiv.appendChild(hours);\n    contactDiv.appendChild(call);\n\n\n    contact.appendChild(contactHeader);\n    contact.appendChild(contactDiv);\n    \n\n\n    \n\n\n    return contact;\n}\n\n\nfunction loadContact() {\n    const homeMain = document.getElementById('main');\n    homeMain.textContent = \"\";\n    homeMain.appendChild(contactPage());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant-page/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_pho_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/pho.jpg */ \"./src/images/pho.jpg\");\n\n\n\n\n\n\nfunction homePage () {\n    const home = document.createElement('div');\n    home.classList.add('home');\n    \n    const homeText = document.createElement('div');\n    homeText.classList.add('homeText')\n    const homeWriteUp = document.createElement('h1');\n     homeWriteUp.textContent = \"★ Phở Saigon ★\";\n     const homeParagraph = document.createElement('p');\n     homeParagraph.textContent = \"Bridgeport's best kept secret since 1994\";\n    \n     \n\n     homeText.appendChild(homeWriteUp);\n     homeText.appendChild(homeParagraph);\n    \n \n    const homeDiv = document.createElement('div');\n    homeDiv.classList.add('homeDiv');\n\n    const homeImage = new Image();\n    homeImage.src = _images_pho_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    homeImage.classList.add('phoPic');\n\n    homeDiv.appendChild(homeImage);\n    \n    \n    home.appendChild(homeText);\n    home.appendChild(homeDiv);\n  \n\n    return home\n\n}\n\nfunction loadHome() {\n    const homeMain = document.getElementById('main');\n    homeMain.textContent = \"\";\n    homeMain.appendChild(homePage());\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/home.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage () {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    menu.textContent = \"Menu\";\n    const appetizers = document.createElement('span');\n    appetizers.classList.add('menuType');\n    appetizers.textContent = 'Appetizers'\n    const noodles = document.createElement('span');\n    noodles.classList.add('menuType');\n    noodles.textContent = \"Noodle Soups\";\n    const fried = document.createElement('span');\n    fried.textContent = 'Fried Dishes'\n    fried.classList.add('menuType');\n\n    menu.appendChild(appetizers);\n    menu.appendChild(item1);\n    menu.appendChild(item2);\n    menu.appendChild(item3);\n    menu.appendChild(noodles);\n    menu.appendChild(item4);\n    menu.appendChild(item5);\n    menu.appendChild(item6);\n    menu.appendChild(item7);\n    menu.appendChild(fried);\n    menu.appendChild(item8);\n    menu.appendChild(item9);\n    menu.appendChild(item10);\n\n    return menu\n}\n\n\nfunction loadMenu() {\n    const homeMain = document.getElementById('main');\n    homeMain.textContent = \"\";\n    homeMain.appendChild(menuPage());\n\n}\n\n\nclass menuItem {\n    constructor(item, description, price){\n        const fullItemDiv = document.createElement('div');\n        fullItemDiv.classList.add('fullItem');\n        const itemDiv = document.createElement('div');\n        itemDiv.classList.add('itemDiv');\n        const itemName = document.createElement('div');\n        itemName.classList.add('itemName');\n        itemName.textContent = item;\n        const itemPrice = document.createElement('span');\n        itemPrice.classList.add('itemInfo');\n        itemPrice.textContent = \"$\" + price;\n        const itemDescription = document.createElement('p');\n        itemDescription.classList.add('itemInfo');\n        itemDescription.textContent = description;\n        \n\n        itemDiv.appendChild(itemName);\n        itemDiv.appendChild(itemPrice)\n        fullItemDiv.appendChild(itemDiv);\n        fullItemDiv.appendChild(itemDescription);\n        \n        \n\n        return fullItemDiv;\n    }\n\n}\n\n\n\nconst item1 = new menuItem('Chả Giò', 'crispy fried spring rolls', '7');\nconst item2 = new menuItem('Bánh Xèo', 'fried pancake with pork and shrimp', '7');\nconst item3 = new menuItem('Bánh Cuốn Chá Lua', \"rice crepes with pork\", '8' )\nconst item4 = new menuItem('Phở Saigon', 'combination beef noodle soup', '8');\nconst item5 = new menuItem('Phở Gá', 'shredded chicken in beef noodle soup', '8');\nconst item6 = new menuItem('Hủ Tiếu Nam Vang', 'shrimp and pork with clear noodle soup', '7');\nconst item7 = new menuItem('Phở Bở Tái', 'rare beef noodle soup', '9');\nconst item8 = new menuItem('Mi Xao Don Gá', 'sauteed chicken w. crispy fried noodles', '10');\nconst item9 = new menuItem('Bún Bò Xào', 'sauteed beef on vermicelli noodles', '8');\nconst item10 = new menuItem('Hủ Tiếu Thàp Cam', 'special combination w. fried flat noodles', '10');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/menu.js?");

/***/ }),

/***/ "./src/components/website.js":
/*!***********************************!*\
  !*** ./src/components/website.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_vietnam_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/vietnam.jpeg */ \"./src/images/vietnam.jpeg\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/components/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/components/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/components/menu.js\");\n\n\n\n\n\n\n\n\nfunction createHeader() {\n\nconst header = document.createElement('header');\nheader.classList.add('header');\n\nconst restaurantName = document.createElement('h1');\nrestaurantName.classList.add('restaurantName');\nrestaurantName.textContent = 'Phở Saigon';\n\nconst divFlag = document.createElement('div');\ndivFlag.classList.add('flag');\nconst flagg = new Image();\nflagg.src = _images_vietnam_jpeg__WEBPACK_IMPORTED_MODULE_0__\n\ndivFlag.append(flagg);\n\nheader.appendChild(restaurantName);\nheader.appendChild(divFlag);\nheader.appendChild(createNav());\n\nreturn header \n\n}\n\nfunction createNav(){\n    const nav = document.createElement('nav')\n\n    const homeButton = document.createElement('button');\n    homeButton.classList.add('navLink');\n    homeButton.textContent = \"Home\";\n    homeButton.addEventListener('click', (e) => {\n      console.log(e.target.textContent);\n      if (e.target.classList.contains(\"active\")) return;\n      \n      setActiveButton(homeButton);\n      (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n      \n  \n\n    const menuButton = document.createElement('button');\n    menuButton.classList.add('navLink');\n    menuButton.textContent = \"Menu\";\n    menuButton.addEventListener('click', (e) => {\n        console.log(e.target.textContent);\n        if (e.target.classList.contains(\"active\")) return;\n        \n        setActiveButton(menuButton);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n\n    \n\n\n    const contactButton = document.createElement('button');\n    contactButton.classList.add('navLink')\n    contactButton.textContent = \"Contact\";\n    contactButton.addEventListener('click', (e) => {\n        console.log(e.target.textContent)\n        if (e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactButton);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n     });\n    \n\n\n    nav.appendChild(homeButton);\n    nav.appendChild(menuButton);\n    nav.appendChild(contactButton);\n\n    return nav;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    return main;\n  }\n\n\nfunction createFooter(){\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n    const footerText = document.createElement('div');\n    footerText.textContent = \"Created by Setback King ♕ 2021\";\n\n    footer.appendChild(footerText);\n\n    return footer;\n}\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll(\".navLink\");\n  \n    buttons.forEach((button) => {\n      if (button !== this) {\n        button.classList.remove(\"active\");\n      }\n    });\n  \n    button.classList.add(\"active\");\n  }\n\nfunction initializeWebsite() {\n    const content = document.getElementById(\"content\");\n  \n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".navLink\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    \n    \n\n    return content\n    \n    \n\n   \n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/components/website.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _components_website__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/website */ \"./src/components/website.js\");\n\n\n\n\ndocument.addEventListener(\"click\", (e) => {\n    const target = e.target.textContent;\n    if (target === \"Menu\") {\n      setActiveButton(menuButton);\n      loadMenu();\n    }\n  })\n\n;(0,_components_website__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/Courgette-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Courgette-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"af9c15cb720a8108634f.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/Courgette-Regular.ttf?");

/***/ }),

/***/ "./src/images/pho.jpg":
/*!****************************!*\
  !*** ./src/images/pho.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"75d3e028fa81015b1e81.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pho.jpg?");

/***/ }),

/***/ "./src/images/vietnam.jpeg":
/*!*********************************!*\
  !*** ./src/images/vietnam.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e822ef432344d3eab6a.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/vietnam.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;