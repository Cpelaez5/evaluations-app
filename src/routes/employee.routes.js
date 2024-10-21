import { Router } from "express";
const router = Router();

import * as employeesController from "../controllers/employees.controller.js";
import { authJwt } from "../middlewares/index.js";

// Ruta para crear un nuevo empleado (solo admins o managers)
router.post('/', [authJwt.verifyToken, authJwt.isManagerOrAdmin], employeesController.createEmployee);

// Ruta para obtener todos los empleados (solo admins)
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], employeesController.getEmployees);

// Ruta para obtener un empleado por ID (cualquiera autenticado puede hacerlo)
router.get('/:employeeId', [authJwt.verifyToken], employeesController.getEmployeeById);

// Ruta para actualizar un empleado por ID (solo admins o managers)
router.put('/:employeeId', [authJwt.verifyToken, authJwt.isManagerOrAdmin], employeesController.updateEmployeesById);

// Ruta para eliminar un empleado por ID (solo admins)
router.delete('/:employeeId', [authJwt.verifyToken, authJwt.isAdmin], employeesController.deleteEmployeeById);

export default router;