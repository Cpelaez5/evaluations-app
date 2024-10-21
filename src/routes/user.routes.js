import { Router } from "express";
const router = Router();

import * as usersController from "../controllers/users.controller.js";
import { authJwt } from "../middlewares/index.js"; // Asegúrate de que estás importando el middleware

// Obtener todos los usuarios (solo Admin)
router.get('/', [authJwt.verifyToken, authJwt.isAdmin], usersController.getUsers);

// Obtener un usuario por ID (solo Admin)
router.get('/:userId', [authJwt.verifyToken, authJwt.isAdmin], usersController.getUserById);

// Actualizar un usuario por ID (solo Admin)
router.put('/:userId', [authJwt.verifyToken, authJwt.isAdmin], usersController.updateUsersById);

// Eliminar un usuario por ID (solo Admin)
router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], usersController.deleteUsersById);

export default router;