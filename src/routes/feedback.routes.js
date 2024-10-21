import { Router } from 'express';
import * as feedbackController from '../controllers/feedback.controller.js';
import { authJwt } from '../middlewares/index.js';

const router = Router();

// Crear un nuevo feedback (cualquiera autenticado puede hacerlo)
router.post('/', [authJwt.verifyToken], feedbackController.createFeedback);

// Obtener feedback por ID (cualquiera autenticado puede hacerlo)
router.get('/:feedbackId', [authJwt.verifyToken], feedbackController.getFeedbackById);

// Obtener todos los feedbacks para una evaluación (cualquiera autenticado puede hacerlo)
router.get('/evaluation/:evaluationId', [authJwt.verifyToken], feedbackController.getFeedbackByEvaluation);

// Actualizar feedback (solo el creador o un admin puede hacerlo)
router.put('/:feedbackId', [authJwt.verifyToken, authJwt.isCreatorOrAdmin], feedbackController.updateFeedback);

// Eliminar feedback (solo el creador o un admin puede hacerlo)
router.delete('/:feedbackId', [authJwt.verifyToken, authJwt.isCreatorOrAdmin], feedbackController.deleteFeedback);

export default router;