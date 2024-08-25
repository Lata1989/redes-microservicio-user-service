import { connectToDatabase } from './config/database.js';
import app from './app.js';
import { port } from './config/envConfig.js';

/**
 * Iniciar el servidor.
 */
async function startServer() {
  try {
    await connectToDatabase(); // Conectar a la base de datos
    app.listen(port, () => {
      console.log(`Server de usuario funciona en puerto ${port}`); // Mensaje de inicio
    });
  } catch (error) {
    console.error('Fallo la conexion a la base de datos', error);
    process.exit(1); // Salir con error si no se puede conectar
  }
}

startServer();
