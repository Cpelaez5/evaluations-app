import { Router } from "express"
const router = Router()

import * as evaluationsController from "../controllers/evaluations.controller.js"
import { authJwt } from "../middlewares/index.js"
router.post('/', [authJwt.verifyToken, authJwt.isManager], evaluationsController.createEvaluation);

router.get('/', evaluationsController.getEvaluations);

router.get('/:evaluationId', evaluationsController.getEvaluationById);

router.put('/:evaluationId', [authJwt.verifyToken], evaluationsController.updateEvaluationsById);

router.delete('/:evaluationId', [authJwt.verifyToken], evaluationsController.deleteEvaluationById);

export default router;