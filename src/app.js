import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de usuario
app.use('/users', userRoutes);

export default app;
