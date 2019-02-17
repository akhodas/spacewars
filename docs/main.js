/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game */ \"./src/modules/Game.js\");\n\nwindow.Game = _modules_Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"];\nvar game = new _modules_Game__WEBPACK_IMPORTED_MODULE_0__[\"Game\"]();\ngame.init();\ngame.start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Bullet.js":
/*!*******************************!*\
  !*** ./src/modules/Bullet.js ***!
  \*******************************/
/*! exports provided: Bullet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bullet\", function() { return Bullet; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/modules/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Bullet =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Bullet, _Entity);\n\n  function Bullet(options) {\n    var _this;\n\n    _classCallCheck(this, Bullet);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Bullet).call(this, {\n      type: \"bullet\",\n      x: options.x,\n      y: options.y,\n      width: Game.size.width * 0.01,\n      height: Game.size.height * 0.01\n    }));\n    _this.nameSpaceship = options.nameSpaceship;\n    _this.radius = _this.width / 2;\n    _this.color = options.colorSpaceship;\n    return _this;\n  }\n\n  _createClass(Bullet, [{\n    key: \"draw\",\n    value: function draw() {\n      Game.ctx.strokeStyle = this.color;\n      Game.ctx.fillStyle = this.color;\n      Game.ctx.beginPath();\n      Game.ctx.arc(this.x, this.y, this.radius * 0.5, 0, 2 * Math.PI);\n      Game.ctx.stroke();\n      Game.ctx.fill();\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      this.y -= Game.size.height * 0.01;\n    }\n  }]);\n\n  return Bullet;\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]);\n\n//# sourceURL=webpack:///./src/modules/Bullet.js?");

/***/ }),

/***/ "./src/modules/Enemy.js":
/*!******************************!*\
  !*** ./src/modules/Enemy.js ***!
  \******************************/
/*! exports provided: Enemy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Enemy\", function() { return Enemy; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/modules/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\nvar Enemy =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Enemy, _Entity);\n\n  function Enemy() {\n    var _this;\n\n    _classCallCheck(this, Enemy);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Enemy).call(this, {\n      type: \"enemy\",\n      x: Math.random() * (Game.size.width * 0.9) + Game.size.width * 0.05,\n      y: 0,\n      width: Enemy.calculateSize(),\n      height: Enemy.calculateSize()\n    }));\n    _this.speed = Math.random() + 0.2;\n    _this.radius = _this.width / 2;\n    _this.y = -_this.radius;\n    _this.direction = Math.random() - 0.5;\n    return _this;\n  }\n\n  _createClass(Enemy, [{\n    key: \"draw\",\n    value: function draw() {\n      Game.ctx.strokeStyle = \"black\";\n      Game.ctx.fillStyle = \"#A9A9A9\";\n      Game.ctx.beginPath();\n      Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); // Game.ctx.stroke();\n      // Game.ctx.fill();\n\n      /* Для отрисовки астероидов закоментировать код \"\"Game.ctx.fill();\"\" и\r\n              раскоментировать 3 строки внизу */\n\n      Game.ctx.drawImage(Game.imageResources.enemy.image, this.x - this.radius, this.y - this.radius, this.width, this.width);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      this.y += Game.size.height * 0.01 * this.speed * Game.speedGame.speed;\n      this.x += Game.size.height * 0.01 * this.speed * Game.speedGame.speed * this.direction;\n    }\n  }], [{\n    key: \"calculateSize\",\n    value: function calculateSize() {\n      return Game.size.width * 0.045;\n    }\n  }]);\n\n  return Enemy;\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]);\n\n//# sourceURL=webpack:///./src/modules/Enemy.js?");

/***/ }),

/***/ "./src/modules/Entity.js":
/*!*******************************!*\
  !*** ./src/modules/Entity.js ***!
  \*******************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Entity\", function() { return Entity; });\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enemy */ \"./src/modules/Enemy.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Entity =\n/*#__PURE__*/\nfunction () {\n  function Entity(options) {\n    _classCallCheck(this, Entity);\n\n    this.id = Game.idResolver.getId();\n    this.type = options.type;\n    this.x = options.x;\n    this.y = options.y;\n    this.width = options.width;\n    this.height = options.height;\n  }\n\n  _createClass(Entity, [{\n    key: \"draw\",\n    value: function draw() {} // eslint-disable-line\n\n  }, {\n    key: \"move\",\n    value: function move() {} // eslint-disable-line\n\n  }, {\n    key: \"isOnScrean\",\n    value: function isOnScrean() {\n      if (this.y < -_Enemy__WEBPACK_IMPORTED_MODULE_0__[\"Enemy\"].calculateSize() || this.y > Game.size.height + _Enemy__WEBPACK_IMPORTED_MODULE_0__[\"Enemy\"].calculateSize() || this.x < 0 || this.x > Game.size.width) {\n        return false;\n      }\n\n      return true;\n    }\n  }]);\n\n  return Entity;\n}();\n\n//# sourceURL=webpack:///./src/modules/Entity.js?");

/***/ }),

/***/ "./src/modules/Game.js":
/*!*****************************!*\
  !*** ./src/modules/Game.js ***!
  \*****************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\n/* harmony import */ var _IdGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator */ \"./src/modules/IdGenerator.js\");\n/* harmony import */ var _GarbageCollector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GarbageCollector */ \"./src/modules/GarbageCollector.js\");\n/* harmony import */ var _MouseMoveTracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MouseMoveTracker */ \"./src/modules/MouseMoveTracker.js\");\n/* harmony import */ var _KeyTracker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeyTracker */ \"./src/modules/KeyTracker.js\");\n/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Enemy */ \"./src/modules/Enemy.js\");\n/* harmony import */ var _Spaceship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spaceship */ \"./src/modules/Spaceship.js\");\n/* harmony import */ var _InfoBlockPlayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InfoBlockPlayer */ \"./src/modules/InfoBlockPlayer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    Game.canvas.width = Game.size.width;\n    Game.canvas.height = Game.size.height;\n  }\n\n  _createClass(Game, [{\n    key: \"start\",\n    value: function start() {\n      var counter = 0;\n      window.setInterval(function () {\n        Game.speedGame.counter++;\n        counter++;\n\n        if (counter > 25 / Game.speedGame.speed) {\n          Game.entities.push(new _Enemy__WEBPACK_IMPORTED_MODULE_4__[\"Enemy\"]());\n          counter = 0;\n        }\n\n        if (Game.speedGame.counter === 500) {\n          Game.speedGame.speed += 0.1;\n          Game.speedGame.counter = 0;\n        }\n\n        var entitiesByType = {\n          spaceship: [],\n          enemy: [],\n          bullet: [],\n          infoBlockPlayer: []\n        };\n        Game.entities.forEach(function (entity) {\n          entity.move();\n\n          if (!entity.isOnScrean()) {\n            Game.garbageCollector.collect(entity.id);\n          } else {\n            entitiesByType[entity.type].push(entity);\n          }\n        });\n        entitiesByType.bullet.forEach(function (bullet) {\n          entitiesByType.enemy.some(function (enemy) {\n            var distance = Math.sqrt(Math.pow(enemy.x - bullet.x, 2) + Math.pow(enemy.y - bullet.y, 2));\n\n            if (enemy.radius + bullet.radius > distance) {\n              Game.garbageCollector.collect(enemy.id);\n              Game.garbageCollector.collect(bullet.id);\n              var spaceship = Game.options.spaceships.find(function (s) {\n                return s.name === bullet.nameSpaceship;\n              });\n              spaceship.score += Math.round(enemy.speed * 10);\n              return true;\n            }\n\n            return false;\n          });\n        });\n        entitiesByType.spaceship.forEach(function (spaceship) {\n          entitiesByType.enemy.some(function (enemy) {\n            var distance = Math.sqrt(Math.pow(enemy.x - spaceship.x, 2) + Math.pow(enemy.y - spaceship.y, 2));\n\n            if (enemy.radius + spaceship.radius > distance) {\n              Game.garbageCollector.collect(enemy.id);\n              Game.garbageCollector.collect(spaceship.id);\n              spaceship.destroy();\n              return true;\n            }\n\n            return false;\n          });\n        });\n        Game.entities = Game.garbageCollector.removeEntities(Game.entities);\n        Game.ctx.clearRect(0, 0, Game.size.width, Game.size.height);\n        Game.entities.forEach(function (entity) {\n          entity.draw();\n        });\n      }, 20);\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      var img1 = new Image();\n      img1.src = Game.imageResources.spaceship.resourse;\n\n      img1.onload = function () {\n        Game.imageResources.spaceship.image = img1;\n      };\n\n      Game.options.spaceships.forEach(function (spaceship) {\n        Game.entities.push(new _Spaceship__WEBPACK_IMPORTED_MODULE_5__[\"Spaceship\"](spaceship));\n        Game.entities.push(new _InfoBlockPlayer__WEBPACK_IMPORTED_MODULE_6__[\"InfoBlockPlayer\"](spaceship));\n      });\n      var img2 = new Image();\n      img2.src = Game.imageResources.enemy.resourse;\n\n      img2.onload = function () {\n        Game.imageResources.enemy.image = img2;\n      };\n    }\n  }]);\n\n  return Game;\n}();\n\n_defineProperty(Game, \"canvas\", document.getElementsByClassName(\"space\")[0]);\n\n_defineProperty(Game, \"ctx\", Game.canvas.getContext(\"2d\"));\n\n_defineProperty(Game, \"size\", {\n  width: window.innerWidth,\n  height: window.innerHeight\n});\n\n_defineProperty(Game, \"options\", {\n  spaceships: [{\n    isMouseEnabled: true,\n    name: \"1\",\n    image: \"img/spaceship.png\",\n    score: 0,\n    leftKey: \"ArrowLeft\",\n    rightKey: \"ArrowRight\",\n    strikeKey: \" \",\n    color: \"red\"\n  }, {\n    isMouseEnabled: false,\n    name: \"2\",\n    image: \"img/spaceship.png\",\n    score: 0,\n    leftKey: \"a\",\n    rightKey: \"d\",\n    strikeKey: \"z\",\n    color: \"blue\"\n  }]\n});\n\n_defineProperty(Game, \"idResolver\", new _IdGenerator__WEBPACK_IMPORTED_MODULE_0__[\"IdGenerator\"]());\n\n_defineProperty(Game, \"garbageCollector\", new _GarbageCollector__WEBPACK_IMPORTED_MODULE_1__[\"GarbageCollector\"]());\n\n_defineProperty(Game, \"mouseMoveTracker\", new _MouseMoveTracker__WEBPACK_IMPORTED_MODULE_2__[\"MouseMoveTracker\"](Game.canvas));\n\n_defineProperty(Game, \"keyTracker\", new _KeyTracker__WEBPACK_IMPORTED_MODULE_3__[\"KeyTracker\"]());\n\n_defineProperty(Game, \"entities\", []);\n\n_defineProperty(Game, \"score\", 0);\n\n_defineProperty(Game, \"speedGame\", {\n  counter: 0,\n  speed: 1\n});\n\n_defineProperty(Game, \"imageResources\", {\n  spaceship: {\n    resourse: \"img/spaceship.png\",\n    image: null\n  },\n  enemy: {\n    resourse: \"img/asteroid.png\",\n    image: null\n  }\n});\n\n//# sourceURL=webpack:///./src/modules/Game.js?");

/***/ }),

/***/ "./src/modules/GarbageCollector.js":
/*!*****************************************!*\
  !*** ./src/modules/GarbageCollector.js ***!
  \*****************************************/
/*! exports provided: GarbageCollector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GarbageCollector\", function() { return GarbageCollector; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GarbageCollector =\n/*#__PURE__*/\nfunction () {\n  function GarbageCollector() {\n    _classCallCheck(this, GarbageCollector);\n\n    this._collection = [];\n  }\n\n  _createClass(GarbageCollector, [{\n    key: \"removeEntities\",\n    value: function removeEntities(entities) {\n      var _this = this;\n\n      var filtered = entities.filter(function (entity) {\n        return !_this._collection.includes(entity.id);\n      });\n      this._collection = [];\n      return filtered;\n    }\n  }, {\n    key: \"collect\",\n    value: function collect(id) {\n      this._collection.push(id);\n    }\n  }]);\n\n  return GarbageCollector;\n}();\n\n//# sourceURL=webpack:///./src/modules/GarbageCollector.js?");

/***/ }),

/***/ "./src/modules/IdGenerator.js":
/*!************************************!*\
  !*** ./src/modules/IdGenerator.js ***!
  \************************************/
/*! exports provided: IdGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IdGenerator\", function() { return IdGenerator; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar IdGenerator =\n/*#__PURE__*/\nfunction () {\n  function IdGenerator() {\n    _classCallCheck(this, IdGenerator);\n\n    this._id = 0;\n  }\n\n  _createClass(IdGenerator, [{\n    key: \"getId\",\n    value: function getId() {\n      this._id += 1;\n      return this._id;\n    }\n  }]);\n\n  return IdGenerator;\n}();\n\n//# sourceURL=webpack:///./src/modules/IdGenerator.js?");

/***/ }),

/***/ "./src/modules/InfoBlockPlayer.js":
/*!****************************************!*\
  !*** ./src/modules/InfoBlockPlayer.js ***!
  \****************************************/
/*! exports provided: InfoBlockPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InfoBlockPlayer\", function() { return InfoBlockPlayer; });\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity */ \"./src/modules/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar InfoBlockPlayer =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(InfoBlockPlayer, _Entity);\n\n  function InfoBlockPlayer(config) {\n    var _this;\n\n    _classCallCheck(this, InfoBlockPlayer);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(InfoBlockPlayer).call(this, {\n      type: \"infoBlockPlayer\",\n      x: Game.size.width * 0.05,\n      y: Game.size.height * 0.05,\n      width: Game.size.width * 0.05,\n      height: Game.size.height * 0.05\n    }));\n    _this.radius = _this.width / 2;\n    _this.config = config;\n    _this.position = InfoBlockPlayer.counter++;\n    return _this;\n  }\n\n  _createClass(InfoBlockPlayer, [{\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      Game.ctx.strokeStyle = this.config.color;\n      Game.ctx.fillStyle = \"rgba(255, 255, 255, 0.6)\";\n      Game.ctx.beginPath();\n      Game.ctx.arc(this.x, (2.3 * this.position - 1) * this.radius, this.radius, 0, 2 * Math.PI);\n      Game.ctx.lineWidth = Game.size.width * 0.005;\n      Game.ctx.stroke();\n      Game.ctx.fill();\n      Game.ctx.fillStyle = this.config.color;\n      Game.ctx.font = \"\".concat(this.radius * 0.7, \"px Arial\");\n      Game.ctx.textAlign = \"center\";\n      Game.ctx.fillText(Game.options.spaceships.find(function (spaceship) {\n        return spaceship.name === _this2.config.name;\n      }).score, this.x, (2.3 * this.position - 0.75) * this.radius);\n    }\n  }]);\n\n  return InfoBlockPlayer;\n}(_Entity__WEBPACK_IMPORTED_MODULE_0__[\"Entity\"]);\n\n_defineProperty(InfoBlockPlayer, \"counter\", 1);\n\n//# sourceURL=webpack:///./src/modules/InfoBlockPlayer.js?");

/***/ }),

/***/ "./src/modules/KeyTracker.js":
/*!***********************************!*\
  !*** ./src/modules/KeyTracker.js ***!
  \***********************************/
/*! exports provided: KeyTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KeyTracker\", function() { return KeyTracker; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar KeyTracker =\n/*#__PURE__*/\nfunction () {\n  function KeyTracker() {\n    var _this = this;\n\n    _classCallCheck(this, KeyTracker);\n\n    this.keys = {};\n    window.addEventListener(\"keydown\", function (event) {\n      _this.keys[event.key] = true;\n    });\n    window.addEventListener(\"keyup\", function (event) {\n      _this.keys[event.key] = false;\n    });\n  }\n\n  _createClass(KeyTracker, [{\n    key: \"isKeyPressed\",\n    value: function isKeyPressed(key) {\n      return !!this.keys[key];\n    }\n  }]);\n\n  return KeyTracker;\n}();\n\n//# sourceURL=webpack:///./src/modules/KeyTracker.js?");

/***/ }),

/***/ "./src/modules/MouseMoveTracker.js":
/*!*****************************************!*\
  !*** ./src/modules/MouseMoveTracker.js ***!
  \*****************************************/
/*! exports provided: MouseMoveTracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MouseMoveTracker\", function() { return MouseMoveTracker; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar MouseMoveTracker =\n/*#__PURE__*/\nfunction () {\n  function MouseMoveTracker(element) {\n    var _this = this;\n\n    _classCallCheck(this, MouseMoveTracker);\n\n    this._x = 0;\n    this._y = 0;\n    element.addEventListener(\"mousemove\", function (event) {\n      _this._x = event.offsetX;\n      _this._y = event.offsetY;\n    });\n  }\n\n  _createClass(MouseMoveTracker, [{\n    key: \"getCurrentPosition\",\n    value: function getCurrentPosition() {\n      return {\n        x: this._x,\n        y: this._y\n      };\n    }\n  }]);\n\n  return MouseMoveTracker;\n}();\n\n//# sourceURL=webpack:///./src/modules/MouseMoveTracker.js?");

/***/ }),

/***/ "./src/modules/Spaceship.js":
/*!**********************************!*\
  !*** ./src/modules/Spaceship.js ***!
  \**********************************/
/*! exports provided: Spaceship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Spaceship\", function() { return Spaceship; });\n/* harmony import */ var _Bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bullet */ \"./src/modules/Bullet.js\");\n/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ \"./src/modules/Entity.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Spaceship =\n/*#__PURE__*/\nfunction (_Entity) {\n  _inherits(Spaceship, _Entity);\n\n  function Spaceship(config) {\n    var _this;\n\n    _classCallCheck(this, Spaceship);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spaceship).call(this, {\n      type: \"spaceship\",\n      x: Game.size.width / 2,\n      y: Game.size.height - Game.size.height * 0.1,\n      width: Game.size.width * 0.055,\n      height: Game.size.height * 0.055\n    }));\n    _this.radius = _this.width / 2;\n    _this.config = config;\n    _this.eventListener = null;\n\n    if (_this.config.isMouseEnabled) {\n      _this.eventListener = function () {\n        _this.strike();\n      };\n\n      window.addEventListener(\"click\", _this.eventListener);\n    } else {\n      _this.eventListener = function (event) {\n        if (event.key === _this.config.strikeKey) {\n          _this.strike();\n        }\n      };\n\n      window.addEventListener(\"keydown\", _this.eventListener);\n    }\n\n    return _this;\n  }\n\n  _createClass(Spaceship, [{\n    key: \"draw\",\n    value: function draw() {\n      var _this2 = this;\n\n      Game.ctx.strokeStyle = this.config.color;\n      Game.ctx.fillStyle = this.config.color;\n      Game.ctx.beginPath();\n      Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);\n      Game.ctx.lineWidth = this.radius * 0.1;\n      Game.ctx.stroke(); // Game.ctx.fill();\n\n      Game.ctx.drawImage(Game.imageResources.spaceship.image, this.x - this.radius, this.y - this.radius, this.width, this.width);\n      Game.ctx.fillStyle = \"white\";\n      Game.ctx.font = \"\".concat(0.7 * this.radius, \"px Arial\");\n      Game.ctx.textAlign = \"center\";\n      Game.ctx.fillText(Game.options.spaceships.find(function (spaceship) {\n        return spaceship.name === _this2.config.name;\n      }).score, this.x, this.y + 1.7 * this.radius);\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      if (this.config.isMouseEnabled) {\n        this.x = Game.mouseMoveTracker.getCurrentPosition().x;\n        this.y = Game.mouseMoveTracker.getCurrentPosition().y;\n      } else {\n        var delta = Game.size.width * 0.01;\n\n        if (Game.keyTracker.isKeyPressed(this.config.leftKey)) {\n          if (this.x > delta) {\n            this.x -= delta;\n          }\n        } else if (Game.keyTracker.isKeyPressed(this.config.rightKey)) {\n          if (this.x < Game.size.width - delta) {\n            this.x += delta;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"strike\",\n    value: function strike() {\n      Game.entities.push(new _Bullet__WEBPACK_IMPORTED_MODULE_0__[\"Bullet\"]({\n        x: this.x,\n        y: this.y,\n        nameSpaceship: this.config.name,\n        colorSpaceship: this.config.color\n      }));\n    }\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      window.removeEventListener(\"click\", this.eventListener);\n      window.removeEventListener(\"keydown\", this.eventListener);\n    }\n  }]);\n\n  return Spaceship;\n}(_Entity__WEBPACK_IMPORTED_MODULE_1__[\"Entity\"]);\n\n//# sourceURL=webpack:///./src/modules/Spaceship.js?");

/***/ })

/******/ });