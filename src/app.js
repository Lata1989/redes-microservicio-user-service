import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware para parsear JSON usando body-parser
app.use(bodyParser.json());

// Usar las rutas de usuario
app.use('/users', userRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Microservicio de usuario funcionando OK!');
});


export default app;
