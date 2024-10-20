import { Router } from "express"
const router = Router()

import * as usersController from "../controllers/users.controller.js"
import { authJwt, verifyRegister } from "../middlewares/index.js"

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifyRegister.checkRolesExisted], usersController.createUser);

router.get('/', usersController.getUsers);

router.get('/:userId', usersController.getUserById);

router.put('/:userId', [authJwt.verifyToken], usersController.updateUsersById);

router.delete('/:userId', [authJwt.verifyToken], usersController.deleteUsersById);

export default router;