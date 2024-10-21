"use strict";

require("./database");
var _server = _interopRequireDefault(require("./server"));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
require('dotenv').config();
var port = process.env.EVALUATIONS_APP_MONGODB_PORT;
_server["default"].listen(port, function () {
  console.log("server started on port http://localhost:".concat(port, "/api"));
});