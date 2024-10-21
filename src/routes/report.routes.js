"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _reports = require("../controllers/reports.controller");
var _index = require("../middlewares/index");
// Asegúrate de tener el middleware de autenticación

var router = (0, _express.Router)();

// Generar reporte de evaluación para un empleado (solo Admin y Manager)
router.get('/employee/:id', [_index.authJwt.verifyToken, _index.authJwt.isManagerOrAdmin], _reports.generateReportForEmployee);
var _default = exports["default"] = router;