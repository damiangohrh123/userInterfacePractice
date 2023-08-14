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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --backgroundColor: rgb(47, 58, 78);\n  --backgroundColorLight: rgb(94, 110, 139);\n  --bodyColor: rgb(145, 163, 197);\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: white;\n}\n\np,\nli {\n  font-size: 20px;\n  color: white;\n}\n\nbody {\n  font-family: Helvetica, sans-serif;\n  height: 100vh;\n  background-color: var(--bodyColor);\n}\n\n.content {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 10% 1fr 4fr;\n}\n\n/* Header section */\n.headerContainer {\n  grid-row: 1 / 2;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  background-color: var(--backgroundColor);\n}\n\n.headerTitle {\n  padding: 1rem;\n}\n\n.headerList {\n  height: 100%;\n  list-style: none;\n\n  display: flex;\n  gap: 50px;\n\n  padding: 0 1rem;\n}\n\n.headerItems {\n  height: 100%;\n\n  display: flex;\n  align-items: center;\n\n  border-bottom: 4px solid transparent;\n}\n\n.headerItems:hover {\n  cursor: pointer;\n  border-bottom: 4px solid white;\n}\n\n/* Dropdown Menu section */\n.dropdownSection {\n  grid-row: 2 / 3;\n  display: flex;\n}\n\n.dropdownContainer {\n  position: relative;\n  width: 400px;\n  padding: 1em;\n}\n\n.dropdownTitle {\n  background-color: var(--backgroundColor);\n  padding: 1em;\n  cursor: pointer;\n  border-radius: 0.5em;\n}\n\n.dropdownTitle:hover {\n  background-color: var(--backgroundColorLight);\n}\n\n.dropdownTitleClicked {\n  border: 2px solid rgb(27, 255, 46);\n}\n\n.list {\n  position: absolute;\n  z-index: 1;\n  top: 90px;\n  width: calc(100% - 2em);\n\n  background-color: var(--backgroundColorLight);\n  list-style: none;\n\n  padding: 1em;\n  border-radius: 0.5em;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.listItems {\n  cursor: pointer;\n  padding: 0.5em 0.2em;\n\n  border-radius: 0.5em;\n}\n\n.listItems:hover {\n  background-color: var(--backgroundColor);\n}\n\n.listHidden {\n  display: none;\n}\n\n/* Image carousell section */\n.imageCarousellSection {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.imageContainer {\n  border: 2px solid var(--backgroundColor);\n  border-radius: 1rem;\n}\n\n.btnNext,\n.btnPrevious {\n  height: 100px;\n}\n\n.btnNext:hover,\n.btnPrevious:hover {\n  cursor: pointer;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://userinterfacepractice/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://userinterfacepractice/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://userinterfacepractice/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _images_bulbasaur_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/bulbasaur.png */ \"./src/images/bulbasaur.png\");\n/* harmony import */ var _images_ivysaur_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ivysaur.png */ \"./src/images/ivysaur.png\");\n/* harmony import */ var _images_venusaur_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/venusaur.png */ \"./src/images/venusaur.png\");\n/* harmony import */ var _images_charmander_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/charmander.png */ \"./src/images/charmander.png\");\n/* harmony import */ var _images_charmeleon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/charmeleon.png */ \"./src/images/charmeleon.png\");\n/* harmony import */ var _images_charizard_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/charizard.png */ \"./src/images/charizard.png\");\n/* harmony import */ var _images_squirtle_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/squirtle.png */ \"./src/images/squirtle.png\");\n/* harmony import */ var _images_wartortle_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/wartortle.png */ \"./src/images/wartortle.png\");\n/* harmony import */ var _images_blastoise_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/blastoise.png */ \"./src/images/blastoise.png\");\n/* harmony import */ var _images_chevron_right_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/chevron-right.svg */ \"./src/images/chevron-right.svg\");\n/* harmony import */ var _images_chevron_left_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/chevron-left.svg */ \"./src/images/chevron-left.svg\");\n\n\n// Import image src\n\n\n\n\n\n\n\n\n\n\n\n\n// Create content container\nconst content = document.createElement('div');\ncontent.classList.add('content');\ndocument.body.appendChild(content);\n\n// Create dropdown section\nconst dropdownSection = document.createElement('div');\ndropdownSection.classList.add('dropdownSection');\ncontent.appendChild(dropdownSection);\n\n// Create header section\nconst headerContainer = document.createElement('div');\nheaderContainer.classList.add('headerContainer');\n\n// Create image carousell section\nconst imageCarousellSection = document.createElement('div');\nimageCarousellSection.classList.add('imageCarousellSection');\n\n// Create header factory function\nconst createHeader = (titleName, ...items) => {\n  // Create header title\n  const title = document.createElement('h1');\n  title.classList.add('headerTitle');\n  title.textContent = titleName;\n\n  // Create ul container\n  const headerList = document.createElement('ul');\n  headerList.classList.add('headerList');\n\n  // Create li items\n  for (let i = 0; i < items.length; i++) {\n    const headerListItem = document.createElement('li');\n    headerListItem.classList.add('headerItems');\n    headerListItem.textContent = items[i];\n    headerList.appendChild(headerListItem);\n  }\n\n  headerContainer.appendChild(title);\n  headerContainer.appendChild(headerList);\n  content.appendChild(headerContainer);\n};\n\n// Create dropdown factory function\nconst createDropdownContainer = (titleName, ...items) => {\n  // Create dropdown Container\n  const dropdownContainer = document.createElement('div');\n  dropdownContainer.classList.add('dropdownContainer');\n\n  // Create title\n  const title = document.createElement('p');\n  title.classList.add('dropdownTitle');\n  title.textContent = titleName;\n\n  // Create ul\n  const list = document.createElement('ul');\n  list.classList.add('list', 'listHidden');\n\n  // Toggle the ul on and off\n  title.addEventListener('click', () => {\n    list.classList.toggle('listHidden');\n    title.classList.toggle('dropdownTitleClicked');\n  });\n\n  // Create li items\n  for (let i = 0; i < items.length; i++) {\n    const listItem = document.createElement('li');\n    listItem.classList.add('listItems');\n    listItem.textContent = items[i];\n    list.appendChild(listItem);\n  }\n\n  dropdownContainer.appendChild(title);\n  dropdownContainer.appendChild(list);\n\n  return dropdownContainer;\n};\n\n// Creat image carousell factory function\nconst createImageCarousell = (...imageSrc) => {\n  // Create image array\n  const imageArray = [];\n\n  for (let i = 0; i < imageSrc.length; i++) {\n    imageArray.push(imageSrc[i]);\n  }\n\n  // Create current image number\n  let currentImageIndex = 0;\n\n  // Create Image container\n  const imageContainer = document.createElement('div');\n  imageContainer.classList.add('imageContainer');\n\n  // Render image function\n  const renderImage = () => {\n    imageContainer.textContent = '';\n    const renderedImage = document.createElement('img');\n    renderedImage.src = imageArray[currentImageIndex];\n    imageContainer.appendChild(renderedImage);\n  };\n  renderImage();\n\n  // Create previous button\n  const btnPrevious = document.createElement('img');\n  btnPrevious.classList.add('btnPrevious');\n  btnPrevious.src = _images_chevron_left_svg__WEBPACK_IMPORTED_MODULE_11__;\n  btnPrevious.addEventListener('click', () => {\n    if (currentImageIndex > 0) {\n      currentImageIndex--;\n      renderImage();\n    } else {\n      currentImageIndex = imageArray.length - 1;\n      renderImage();\n    }\n  });\n\n  // Create next button\n  const btnNext = document.createElement('img');\n  btnNext.classList.add('btnNext');\n  btnNext.src = _images_chevron_right_svg__WEBPACK_IMPORTED_MODULE_10__;\n  btnNext.addEventListener('click', () => {\n    if (currentImageIndex < imageArray.length - 1) {\n      currentImageIndex++;\n      renderImage();\n    } else {\n      currentImageIndex = 0;\n      renderImage();\n    }\n  });\n\n  imageCarousellSection.appendChild(btnPrevious);\n  imageCarousellSection.appendChild(imageContainer);\n  imageCarousellSection.appendChild(btnNext);\n  content.appendChild(imageCarousellSection);\n};\n\n// Create header content\ncreateHeader('Kingslayer', 'Home', 'News', 'About', 'Contact', 'Settings');\n\n// Create food drop down menu\nconst foodDropdownMenu = createDropdownContainer(\n  'Food List',\n  'Pizza',\n  'Sushi',\n  'Fried Rice',\n);\ndropdownSection.appendChild(foodDropdownMenu);\n\n// Create item drop down menu\nconst itemDropdownMenu = createDropdownContainer(\n  'Item List',\n  'Bowl',\n  'Phone',\n  'Keyboard',\n);\ndropdownSection.appendChild(itemDropdownMenu);\n\ncreateImageCarousell(\n  _images_bulbasaur_png__WEBPACK_IMPORTED_MODULE_1__,\n  _images_ivysaur_png__WEBPACK_IMPORTED_MODULE_2__,\n  _images_venusaur_png__WEBPACK_IMPORTED_MODULE_3__,\n  _images_charmander_png__WEBPACK_IMPORTED_MODULE_4__,\n  _images_charmeleon_png__WEBPACK_IMPORTED_MODULE_5__,\n  _images_charizard_png__WEBPACK_IMPORTED_MODULE_6__,\n  _images_squirtle_png__WEBPACK_IMPORTED_MODULE_7__,\n  _images_wartortle_png__WEBPACK_IMPORTED_MODULE_8__,\n  _images_blastoise_png__WEBPACK_IMPORTED_MODULE_9__,\n);\n\n\n//# sourceURL=webpack://userinterfacepractice/./src/index.js?");

/***/ }),

/***/ "./src/images/blastoise.png":
/*!**********************************!*\
  !*** ./src/images/blastoise.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8ed2e6521cb507a6ba1.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/blastoise.png?");

/***/ }),

/***/ "./src/images/bulbasaur.png":
/*!**********************************!*\
  !*** ./src/images/bulbasaur.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07df7dd329cc007676b6.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/bulbasaur.png?");

/***/ }),

/***/ "./src/images/charizard.png":
/*!**********************************!*\
  !*** ./src/images/charizard.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcbd756832d38f3d5016.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/charizard.png?");

/***/ }),

/***/ "./src/images/charmander.png":
/*!***********************************!*\
  !*** ./src/images/charmander.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"54fdbc5952b9923d0ae9.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/charmander.png?");

/***/ }),

/***/ "./src/images/charmeleon.png":
/*!***********************************!*\
  !*** ./src/images/charmeleon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79b88dceb3693518b95d.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/charmeleon.png?");

/***/ }),

/***/ "./src/images/chevron-left.svg":
/*!*************************************!*\
  !*** ./src/images/chevron-left.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3490f5eea08639f690a3.svg\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/chevron-left.svg?");

/***/ }),

/***/ "./src/images/chevron-right.svg":
/*!**************************************!*\
  !*** ./src/images/chevron-right.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb3e629604702ef8bc66.svg\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/chevron-right.svg?");

/***/ }),

/***/ "./src/images/ivysaur.png":
/*!********************************!*\
  !*** ./src/images/ivysaur.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"adc44080b519336a33f3.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/ivysaur.png?");

/***/ }),

/***/ "./src/images/squirtle.png":
/*!*********************************!*\
  !*** ./src/images/squirtle.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92d4eeef5107cc2bce59.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/squirtle.png?");

/***/ }),

/***/ "./src/images/venusaur.png":
/*!*********************************!*\
  !*** ./src/images/venusaur.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"793403abb08f93033a75.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/venusaur.png?");

/***/ }),

/***/ "./src/images/wartortle.png":
/*!**********************************!*\
  !*** ./src/images/wartortle.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a653f68b626758857935.png\";\n\n//# sourceURL=webpack://userinterfacepractice/./src/images/wartortle.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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