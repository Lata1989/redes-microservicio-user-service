import { MongoClient } from 'mongodb';
import { mongodbUri, dbName } from './envConfig.js'; // Importar variables de entorno

let db = null;

export async function connectToDatabase() {
  if (db) return db;

  const client = new MongoClient(mongodbUri);
  await client.connect();
  db = client.db(dbName);

  return db;
}

export function getDB() {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db;
}
