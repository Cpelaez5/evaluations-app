import { Router } from "express";
const router = Router();

import * as evaluationsController from "../controllers/evaluations.controller.js";
import { authJwt } from "../middlewares/index.js";

// Crear una nueva evaluación (solo managers o admins)
router.post('/', [authJwt.verifyToken, authJwt.isManagerOrAdmin], evaluationsController.createEvaluation);

// Obtener todas las evaluaciones (solo admins)
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], evaluationsController.getEvaluations);

// Obtener evaluaciones para un empleado específico
router.get('/employee/:employeeId', [authJwt.verifyToken], evaluationsController.getEvaluationsByEmployee);

// Obtener una evaluación específica por ID
router.get('/:evaluationId', [authJwt.verifyToken], evaluationsController.getEvaluationById);

// Actualizar una evaluación (solo el creador o admin)
router.put('/:evaluationId', [authJwt.verifyToken, authJwt.isCreatorOrAdmin], evaluationsController.updateEvaluationById);

// Eliminar una evaluación (solo admins)
router.delete('/:evaluationId', [authJwt.verifyToken, authJwt.isAdmin], evaluationsController.deleteEvaluationById);

// Iniciar una evaluación (cambiar estado a 'inProgress')
router.post('/:evaluationId/start', [authJwt.verifyToken, authJwt.isManagerOrAdmin], evaluationsController.startEvaluation);

// Finalizar una evaluación (cambiar estado a 'completed')
router.post('/:evaluationId/complete', [authJwt.verifyToken, authJwt.isManagerOrAdmin], evaluationsController.completeEvaluation);

// Obtener el progreso de una evaluación
router.get('/:evaluationId/progress', [authJwt.verifyToken], evaluationsController.getEvaluationProgress);

// Enviar feedback para una evaluación
router.post('/:evaluationId/feedback', [authJwt.verifyToken], evaluationsController.submitFeedback);

export default router;