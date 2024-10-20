import { Router } from "express"
const router = Router()
import * as authController from "../controllers/auth.controller.js"

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router;