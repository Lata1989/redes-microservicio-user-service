import { createUser } from '../models/User.js';
import { getDB } from '../config/database.js';
import { userCollection } from '../config/envConfig.js';

// Registra un nuevo usuario
export async function registerUser(req, res) {
  const { username, password } = req.body;

  try {
    const db = getDB();
    const usersCollection = db.collection(userCollection);

    // Verifica si el usuario ya existe
    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El nombre de usuario ya existe' });
    }

    // Crea y guarda el nuevo usuario
    const newUser = createUser(username, password);
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: 'Usuario creado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar el usuario' });
  }
}

// Obtiene un usuario por nombre de usuario
export async function getUserByUsername(req, res) {
  const { username } = req.params;

  try {
    const db = getDB();
    const usersCollection = db.collection(userCollection);

    // Busca al usuario
    const user = await usersCollection.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo obtener el usuario' });
  }
}
