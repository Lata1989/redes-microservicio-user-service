import express from 'express';
import { registerUser, getUserByUsername } from '../controllers/userController.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para obtener un usuario por nombre de usuario
router.get('/:username', getUserByUsername);

export default router;
