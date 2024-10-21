import { Router } from 'express';
import { generateReportForEmployee } from '../controllers/reports.controller';
import { authJwt } from '../middlewares/index'; // Asegúrate de tener el middleware de autenticación

const router = Router();

// Generar reporte de evaluación para un empleado (solo Admin y Manager)
router.get('/employee/:id', [authJwt.verifyToken, authJwt.isManagerOrAdmin], generateReportForEmployee);

export default router;