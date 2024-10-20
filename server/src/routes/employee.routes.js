import { Router } from "express"
const router = Router()

import * as employeesController from "../controllers/employees.controller.js"
import { authJwt } from "../middlewares/index.js"
router.post('/', [authJwt.verifyToken], employeesController.createEmployee);

router.get('/', employeesController.getEmployees);

router.get('/:employeeId', employeesController.getEmployeeById);

router.put('/:employeeId', [authJwt.verifyToken], employeesController.updateEmployeesById);

router.delete('/:employeeId', [authJwt.verifyToken], employeesController.deleteEmployeeById);

export default router;