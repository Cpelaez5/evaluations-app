import { Router } from "express"
const router = Router()
import * as authController from "../controllers/auth.controller.js"
import { verifyRegister } from "../middlewares/index.js";

router.post('/register',[verifyRegister.checkDuplicateUsernameOrEmail, verifyRegister.checkRolesExisted], authController.register);
router.post('/login', authController.login);

export default router;