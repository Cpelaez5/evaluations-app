"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: '.env'
});
var EVALUATIONS_APP_MONGODB_HOST = process.env.EVALUATIONS_APP_MONGODB_HOST;
var MONGODB_URI = "".concat(EVALUATIONS_APP_MONGODB_HOST);
_mongoose["default"].connect(MONGODB_URI, {}).then(function (db) {
  return console.log('Database connected');
})["catch"](function (err) {
  return console.error(err);
});