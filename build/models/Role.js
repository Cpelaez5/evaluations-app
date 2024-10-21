"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ROLES = void 0;
var _mongoose = require("mongoose");
var ROLES = exports.ROLES = ['admin', 'manager', 'employee'];
var roleSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});
var _default = exports["default"] = (0, _mongoose.model)('Role', roleSchema);