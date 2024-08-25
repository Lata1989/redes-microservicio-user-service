import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

export const port = process.env.PORT || 3001;
export const mongodbUri = process.env.MONGO_URI;
export const dbName = process.env.DB_NAME;
export const userCollection = process.env.USER_COLLECTION;
