import { Router } from "express"
const router = Router()

import * as employeesController from "../controllers/employees.controller.js"

router.post('/', employeesController.createEmployee);

router.get('/', employeesController.getEmployees);

router.get('/:employeeId', employeesController.getEmployeeById);

router.put('/:employeeId', employeesController.updateEmployeesById);

router.delete('/:employeeId', employeesController.deleteEmployeeById);

export default router;