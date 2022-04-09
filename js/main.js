/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./jsx/main.jsx":
/*!**********************!*\
  !*** ./jsx/main.jsx ***!
  \**********************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar Square = /*#__PURE__*/function (_React$Component) {\n  _inherits(Square, _React$Component);\n\n  var _super = _createSuper(Square);\n\n  function Square() {\n    _classCallCheck(this, Square);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"button\", {\n        className: \"square\",\n        onClick: function onClick() {\n          console.log(this.props.value);\n        }\n      }, this.props.value);\n    }\n  }]);\n\n  return Square;\n}(React.Component);\n\nvar Board = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Board, _React$Component2);\n\n  var _super2 = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super2.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: \"renderSquare\",\n    value: function renderSquare(i) {\n      return /*#__PURE__*/React.createElement(Square, {\n        value: i\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var status = \"Next player: X\";\n      return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"status\"\n      }, status), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"border-row\"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"border-row\"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"border-row\"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(React.Component);\n\nvar Game = /*#__PURE__*/function (_React$Component3) {\n  _inherits(Game, _React$Component3);\n\n  var _super3 = _createSuper(Game);\n\n  function Game() {\n    _classCallCheck(this, Game);\n\n    return _super3.apply(this, arguments);\n  }\n\n  _createClass(Game, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"game\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"game-border\"\n      }, /*#__PURE__*/React.createElement(Board, null)), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"game-info\"\n      }, /*#__PURE__*/React.createElement(\"div\", null), /*#__PURE__*/React.createElement(\"div\", null)));\n    }\n  }]);\n\n  return Game;\n}(React.Component); // ================================================\n\n\nReactDOM.render( /*#__PURE__*/React.createElement(Game, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://react-test/./jsx/main.jsx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./jsx/main.jsx"]();
/******/ 	
/******/ })()
;