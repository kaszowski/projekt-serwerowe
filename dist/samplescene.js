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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    margin: 0;\\r\\n\\r\\n}\\r\\n\\r\\n#root {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    z-index: -1;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./node_modules/three/examples/jsm/libs/stats.module.js":
/*!**************************************************************!*\
  !*** ./node_modules/three/examples/jsm/libs/stats.module.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Stats = function () {\n\n\tvar mode = 0;\n\n\tvar container = document.createElement( 'div' );\n\tcontainer.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';\n\tcontainer.addEventListener( 'click', function ( event ) {\n\n\t\tevent.preventDefault();\n\t\tshowPanel( ++ mode % container.children.length );\n\n\t}, false );\n\n\t//\n\n\tfunction addPanel( panel ) {\n\n\t\tcontainer.appendChild( panel.dom );\n\t\treturn panel;\n\n\t}\n\n\tfunction showPanel( id ) {\n\n\t\tfor ( var i = 0; i < container.children.length; i ++ ) {\n\n\t\t\tcontainer.children[ i ].style.display = i === id ? 'block' : 'none';\n\n\t\t}\n\n\t\tmode = id;\n\n\t}\n\n\t//\n\n\tvar beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;\n\n\tvar fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );\n\tvar msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );\n\n\tif ( self.performance && self.performance.memory ) {\n\n\t\tvar memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );\n\n\t}\n\n\tshowPanel( 0 );\n\n\treturn {\n\n\t\tREVISION: 16,\n\n\t\tdom: container,\n\n\t\taddPanel: addPanel,\n\t\tshowPanel: showPanel,\n\n\t\tbegin: function () {\n\n\t\t\tbeginTime = ( performance || Date ).now();\n\n\t\t},\n\n\t\tend: function () {\n\n\t\t\tframes ++;\n\n\t\t\tvar time = ( performance || Date ).now();\n\n\t\t\tmsPanel.update( time - beginTime, 200 );\n\n\t\t\tif ( time >= prevTime + 1000 ) {\n\n\t\t\t\tfpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );\n\n\t\t\t\tprevTime = time;\n\t\t\t\tframes = 0;\n\n\t\t\t\tif ( memPanel ) {\n\n\t\t\t\t\tvar memory = performance.memory;\n\t\t\t\t\tmemPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );\n\n\t\t\t\t}\n\n\t\t\t}\n\n\t\t\treturn time;\n\n\t\t},\n\n\t\tupdate: function () {\n\n\t\t\tbeginTime = this.end();\n\n\t\t},\n\n\t\t// Backwards Compatibility\n\n\t\tdomElement: container,\n\t\tsetMode: showPanel\n\n\t};\n\n};\n\nStats.Panel = function ( name, fg, bg ) {\n\n\tvar min = Infinity, max = 0, round = Math.round;\n\tvar PR = round( window.devicePixelRatio || 1 );\n\n\tvar WIDTH = 80 * PR, HEIGHT = 48 * PR,\n\t\tTEXT_X = 3 * PR, TEXT_Y = 2 * PR,\n\t\tGRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,\n\t\tGRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;\n\n\tvar canvas = document.createElement( 'canvas' );\n\tcanvas.width = WIDTH;\n\tcanvas.height = HEIGHT;\n\tcanvas.style.cssText = 'width:80px;height:48px';\n\n\tvar context = canvas.getContext( '2d' );\n\tcontext.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';\n\tcontext.textBaseline = 'top';\n\n\tcontext.fillStyle = bg;\n\tcontext.fillRect( 0, 0, WIDTH, HEIGHT );\n\n\tcontext.fillStyle = fg;\n\tcontext.fillText( name, TEXT_X, TEXT_Y );\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\tcontext.fillStyle = bg;\n\tcontext.globalAlpha = 0.9;\n\tcontext.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );\n\n\treturn {\n\n\t\tdom: canvas,\n\n\t\tupdate: function ( value, maxValue ) {\n\n\t\t\tmin = Math.min( min, value );\n\t\t\tmax = Math.max( max, value );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 1;\n\t\t\tcontext.fillRect( 0, 0, WIDTH, GRAPH_Y );\n\t\t\tcontext.fillStyle = fg;\n\t\t\tcontext.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );\n\n\t\t\tcontext.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );\n\n\t\t\tcontext.fillStyle = bg;\n\t\t\tcontext.globalAlpha = 0.9;\n\t\t\tcontext.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );\n\n\t\t}\n\n\t};\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);\n\n\n//# sourceURL=webpack://test/./node_modules/three/examples/jsm/libs/stats.module.js?");

/***/ }),

/***/ "./src/components/assets/floor.png":
/*!*****************************************!*\
  !*** ./src/components/assets/floor.png ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOC0wMVQxNzoyMDowMi0wNzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDgtMTFUMTQ6MzI6MzAtMDc6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDgtMTFUMTQ6MzI6MzAtMDc6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODQxNjY0ODQtNTc5MS1jNzRiLTkzMTYtZjg1NDM3ZWQ3NGVlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg0MTY2NDg0LTU3OTEtYzc0Yi05MzE2LWY4NTQzN2VkNzRlZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjg0MTY2NDg0LTU3OTEtYzc0Yi05MzE2LWY4NTQzN2VkNzRlZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODQxNjY0ODQtNTc5MS1jNzRiLTkzMTYtZjg1NDM3ZWQ3NGVlIiBzdEV2dDp3aGVuPSIyMDE5LTA4LTAxVDE3OjIwOjAyLTA3OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnYBYBEAAAiKSURBVEiJBcHJjizHdQDQGxE3phyrengDRYqAYBs0BG0M0mvBGwNa6T/slZf+Fn+CP8m2TL1HdldXdeUUGRlz6Bzy3//5p0qRMEZz8CEnUH/5688//eHvQ0ocRcpOqYGQwhheL7du6O1haqweiNmtNwfU1J5HKcSp782+mcOe+1E1TfTWHy4QRF+52x0QArUCQCI5AZ3uS8qQiLGR1GqQVKDc7ya/3SijbdP5kMaODe2Dblu77zG6aam5kpzJbV7LtBzbHmPqGo6//PpLDJGi4FycT/02b6Vg06pEcV4Pwsr19R0pUJR2D0gYlbB7e6xm6s8lbKLZm765fr0zpd0y1VJDsI9PTxQrQ8aVRFEroUxy4pObpjzfj81XAnC/3/dpZZwPfcMZj9GfHlvZymE4AyO72dx2pEgq7Bjyb78751j05+8IYy4kBknKFgBSCphVv60bFORK61b5QreLWc0xva/WB1Yw+ljCdttNTpUB0bphjCjGKLLDBwDmw0RradvOOy+EOH04l2ABNi4aRILnTj6ODSXM7qb6I5j9Ms8Evx3Pw+em23bjfDn28A9PHxlhXAmBhAtJagWKOedkj1RGlEgQAYjbnT9sI7ULDuKh+hO+Xm5mDRRpKdCODSrZto0LeTPe2OBSeTifSkqA8m6KKFVJ4d831Xfr9eq9UVoLxenhXcxN28VccsZUSGbq2HabF/Lv//pDAUEJCcm7mBnjQgjN2fs86aZNMeWcKaJ3u0QpJN7nbVCCC5FJ3V3otY6xJKi7MUIrtzuhuJaaUSAUU3Tkv/7tj6VAoWyepsfzUFJkyL0PSmtCMfqIgu1mTZmE6EiNgkugNKUMwJRWtZZtOxApAZC6cc7VCsZ6E/I//fDtfDf45bIAABBijJ1NTLVGH52LBUAxehweOR0ez0KgAEqILJkpxsy2h1y0T7lALXUytsYi+9JpOfaNy6T67eUy7S7i+dQxQpdt+ebjmVJWSgWAnFMFWJdlHCUyJLUISUsGZPxwft0OoCJEH7L7/tunnNIT7bhU27bVmpfNxBiV1A/jUMuMv7xeoiuQq+hSDOH5+RRDUELUWnXTdLotkGL0jJDKqlYcSWi4AEozFsqZPRxFlgtdp5nUTClNPps13nfz+dxsh8W+7QJ6znispGtlTnndXGkJFyKX8np7T7kIIQgkZNxD9DYRyqTge02yMLsYZ49aADvFkVMABgUYIOOU1FM3ovdxPJ1CDC1H5zxjMDYs54yMIhPbvgkUOftGNUphdE5SygXhvNKKNZW+1UqSYRgrw323MVYp6J6Dbloh1Ot0Yz/+pr/dtxzD/brEUrft8JXtm7Nmr4xpoWws1+vy9XUye0gZFhupFPe73fds94MrrFyvNsaUQ6xdK+dlqSnfp/nwjhKKYnza1+3rYmMqA6PG5TKbvm/XeSPz9eE8pJxMJdjqLaWSKmPsOh+1Vqk0BXHbE8VirHfOlxIZZc5F1WlQXWCt8wl//7tRiI9CqN2HlGMrZD5WSnHZl0YPhFGb5f/875d/+en722z7vmOM5WBTSjUDqoYJsc1z33fX9/fhdLbrNp4fl81mAqwWa2c0RxLBxrKVmk/9ORcSmbbevy9BeodQ3qbXvZCvt+Xlsjj3Rgnc52loBhfdd7/5eL+8Nac22C/YDV8u/w+UnY8sFJIctRpSRQyp3O6Lbjsf87ZdAYAQ0ijetl0MMTFAjjWlp8cPKLv3118p8k6M4/MjoeLyNo3PY9P05FRyTvvqGYN1nQc4eWvX2ahWIRzm88dHKeRunRBsn++qbwnhnOPL6xWxmafrtGdW3XnoG/G99fHQJufaafbNpwFK2XYvut7vy+n5Q4xBQ42Hqymcnp4oSZiYnGdzuGtNmVCeY7IvJpdy/vDhPAzjMNaUtv+7vF3u8/QXPT6EVBezeFuhXMcPz/5wdtvTlzfKMBLMtXZaACKB4T4vKUXsW0YoakEIoQDAEA+766YFAIbs159/JlxUQh4+fMqEUUKm6e1peGy+6wTKUtI6lW8+D9tqOLLoU8qZAeOt6oTetkxow3787Um1ncskFuJ8iikXoK9X4wt4Z0OpiOS2eMGybrvL3Xhffcb7bbXeX365Wh9JJUSo+90URqe3d8rVavZpns3uY87kP/78zz5nAPA+2n3nUlLKasmxJI6SMLpu2+5Cx1mO+TQ2iPxw3js/9A1HnNa174YKICW+3rencdzsipXOqzkNmlOK//hJVEJKygAylyYTVrxTTcOlrrX4Y6PQq0YCoeu6IeMCCdRKKHEhXd/Xp+5xWdyPPzwnIraPTYglxO7p9FhTiCkWwvE6W+uTkohcxBhqBbsa3VUom2rk0HW51tWmUstkAmUp+6i0QEokRyVw2sISgk/ROV9KNu/L+PS4GFMpS7lwLPhyN8j57BLNhjJEIVIV75c1xZxrapUUQnjvQ3Bj3336+JAZJySVXIpA4OJujU2Z8v7ry/X+fs+5Tn6mDEjNbasTT/jxoculBOdE08RCGatci05TJTHH4qJjlPRtA7UhAAAVKRVKMygpWi24QGwyQE3ffn785sMQUg4xZBcAgCuZU0IKxcfU9w0huE1zzZUwrhp9W3zT6ABZckFK1U1rdxNCKLncbvvz89naKAQBUmwuuwt/fblp2aJEZx3jWCoc23E+dXi5TlxJILVRwIEKLWSjKKXnVlFKrI25VO9tIUVzahaTYnx4PFPKTucRAIb2WI/CuXgYh9WsOXNktGskgSp4e1iDuuslpbnky23p2hYlf/n1TQ99WC1IFj0IJXotFntwRBdBqPa+HswGAEgubM5L2bxc3q93wyhnLACFI1cAqLmmw7Of/u5TIDxVBrzNTF0nw3WfC/ME3yYTKei2NaEU1tzMQVG6lGyMmXAf0p6T0E0q+TbvwEVluKcMqI9QrC/rvlcKfwOExhCXh3qynAAAAABJRU5ErkJggg==\");\n\n//# sourceURL=webpack://test/./src/components/assets/floor.png?");

/***/ }),

/***/ "./src/components/Camera.js":
/*!**********************************!*\
  !*** ./src/components/Camera.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\nclass Camera extends three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera {\r\n    constructor(fov, width, height) {\r\n        super(fov, width / height, 0.1, 10000)\r\n\r\n        this.width = width\r\n        this.height = height\r\n\r\n        this.updateSize();\r\n        // resize\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        // aspect ratio kamery\r\n        this.aspect = this.width / this.height;\r\n        this.updateProjectionMatrix();\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://test/./src/components/Camera.js?");

/***/ }),

/***/ "./src/components/CustomAmbientLight.js":
/*!**********************************************!*\
  !*** ./src/components/CustomAmbientLight.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomAmbientLight)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\n\r\nclass CustomAmbientLight {\r\n\r\n    constructor(color, brightness) {\r\n        this.container = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\r\n        this.init(color, brightness)\r\n    }\r\n\r\n    init(color, brightness) {\r\n        this.light = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight(color, brightness);\r\n        this.light.position.set(0, 0, 0);\r\n        this.container.add(this.light);\r\n    }\r\n\r\n    getLight() {\r\n        return this.container;\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/components/CustomAmbientLight.js?");

/***/ }),

/***/ "./src/components/Ico.js":
/*!*******************************!*\
  !*** ./src/components/Ico.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ico)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Ico extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {\r\n\r\n    constructor() {\r\n        super(new three__WEBPACK_IMPORTED_MODULE_0__.IcosahedronGeometry(), new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial({ side: three__WEBPACK_IMPORTED_MODULE_0__.DoubleSide }))\r\n        this.scale.set(5, 5, 5)\r\n    }\r\n    // obrót\r\n    update() {\r\n        this.rotation.y += 0.1\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://test/./src/components/Ico.js?");

/***/ }),

/***/ "./src/components/Plane.js":
/*!*********************************!*\
  !*** ./src/components/Plane.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Plane)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_floor_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/floor.png */ \"./src/components/assets/floor.png\");\n\r\n\r\n\r\nclass Plane {\r\n\r\n    constructor(scene) {\r\n        this.planebase = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(250, 250);\r\n\r\n        this.texture = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader().load(_assets_floor_png__WEBPACK_IMPORTED_MODULE_0__.default)\r\n        this.texture.wrapS = three__WEBPACK_IMPORTED_MODULE_1__.RepeatWrapping\r\n        this.texture.wrapT = three__WEBPACK_IMPORTED_MODULE_1__.RepeatWrapping\r\n        this.texture.repeat.set(10, 10)\r\n\r\n        this.floortexture = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({\r\n            specular: 0xffffff,\r\n            shininess: 50,\r\n            side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide,\r\n            map: this.texture\r\n        })\r\n\r\n        this.planemesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(this.planebase, this.floortexture);\r\n        this.planemesh.position.set(0, 0, 0)\r\n        this.planemesh.rotation.x = 1 / 2 * Math.PI\r\n        //this.plane.receiveShadow = true\r\n\r\n        scene.add(this.planemesh)\r\n    }\r\n}\n\n//# sourceURL=webpack://test/./src/components/Plane.js?");

/***/ }),

/***/ "./src/components/Renderer.js":
/*!************************************!*\
  !*** ./src/components/Renderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Renderer)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nclass Renderer extends three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer {\r\n    constructor(container) {\r\n        super({ antialias: true })\r\n\r\n        this.container = container\r\n\r\n        this.container.appendChild(this.domElement);\r\n        //this.setClearColor(0xffffff);\r\n        // resize\r\n        this.updateSize();\r\n        document.addEventListener('DOMContentLoaded', () => this.updateSize(), false);\r\n        window.addEventListener('resize', () => this.updateSize(), false);\r\n    }\r\n\r\n    updateSize() {\r\n        this.setSize(window.innerWidth, window.innerHeight);\r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://test/./src/components/Renderer.js?");

/***/ }),

/***/ "./src/components/SampleScene.js":
/*!***************************************!*\
  !*** ./src/components/SampleScene.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SampleScene)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/components/Renderer.js\");\n/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Camera */ \"./src/components/Camera.js\");\n/* harmony import */ var _Ico__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ico */ \"./src/components/Ico.js\");\n/* harmony import */ var _CustomAmbientLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomAmbientLight */ \"./src/components/CustomAmbientLight.js\");\n/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Plane */ \"./src/components/Plane.js\");\n/* harmony import */ var three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/libs/stats.module.js */ \"./node_modules/three/examples/jsm/libs/stats.module.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass SampleScene {\r\n    constructor(container) {\r\n\r\n        this.scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();\r\n        this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__.default(container);\r\n\r\n        this.stats = new three_examples_jsm_libs_stats_module_js__WEBPACK_IMPORTED_MODULE_6__.default();\r\n        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb\r\n        container.appendChild(this.stats.dom);\r\n\r\n        //this.renderer.autoClear = false\r\n\r\n        // camera 1\r\n        this.camera1 = new _Camera__WEBPACK_IMPORTED_MODULE_1__.default(30, window.innerWidth / 2, window.innerHeight / 2);\r\n        this.camera1.position.set(500, 500, 500)\r\n        this.camera1.lookAt(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3(0, 0, 0))\r\n\r\n        this.ico = new _Ico__WEBPACK_IMPORTED_MODULE_2__.default()\r\n        this.scene.add(this.ico)\r\n\r\n        this.plane = new _Plane__WEBPACK_IMPORTED_MODULE_4__.default(this.scene)\r\n\r\n        this.light = new _CustomAmbientLight__WEBPACK_IMPORTED_MODULE_3__.default(\"0xffffff\", 2)\r\n        this.scene.add(this.light.getLight())\r\n\r\n        console.log(this.scene)\r\n        this.render();\r\n\r\n    }\r\n\r\n    render() {\r\n\r\n        this.renderer.clear()\r\n        this.stats.begin()\r\n\r\n        this.renderer.render(this.scene, this.camera1);\r\n\r\n        this.ico.update() // obrót ico\r\n        this.stats.end()\r\n        requestAnimationFrame(this.render.bind(this));\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://test/./src/components/SampleScene.js?");

/***/ }),

/***/ "./src/samplescene.js":
/*!****************************!*\
  !*** ./src/samplescene.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_SampleScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SampleScene */ \"./src/components/SampleScene.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\nfunction init() {\r\n    //div\r\n    const container = document.getElementById('root');\r\n    //main class\r\n    new _components_SampleScene__WEBPACK_IMPORTED_MODULE_0__.default(container);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://test/./src/samplescene.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/samplescene.js");
/******/ 	
/******/ })()
;