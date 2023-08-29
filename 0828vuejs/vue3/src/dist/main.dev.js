"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _bootstrapVue = require("bootstrap-vue");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Import Bootstrap and BootstrapVue CSS files (order is important)
(0, _vue.createApp)(_App["default"]).use(_router["default"]).mount('#app');
//# sourceMappingURL=main.dev.js.map
