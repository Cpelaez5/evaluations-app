"use strict";

function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var employeesController = _interopRequireWildcard(require("../controllers/employees.controller.js"));
var _index = require("../middlewares/index.js");
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || "object" != _typeof(e) && "function" != typeof e) return {
    "default": e
  };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = {
      __proto__: null
    },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
    var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
    i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
  }
  return n["default"] = e, t && t.set(e, n), n;
}
var router = (0, _express.Router)();
// Ruta para crear un nuevo empleado (solo admins o managers)
router.post('/', [_index.authJwt.verifyToken, _index.authJwt.isManagerOrAdmin], employeesController.createEmployee);

// Ruta para obtener todos los empleados (solo admins)
router.get('/', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], employeesController.getEmployees);

// Ruta para obtener un empleado por ID (cualquiera autenticado puede hacerlo)
router.get('/:employeeId', [_index.authJwt.verifyToken], employeesController.getEmployeeById);

// Ruta para actualizar un empleado por ID (solo admins o managers)
router.put('/:employeeId', [_index.authJwt.verifyToken, _index.authJwt.isManagerOrAdmin], employeesController.updateEmployeesById);

// Ruta para eliminar un empleado por ID (solo admins)
router["delete"]('/:employeeId', [_index.authJwt.verifyToken, _index.authJwt.isAdmin], employeesController.deleteEmployeeById);
var _default = exports["default"] = router;