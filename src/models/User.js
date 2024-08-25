// Modelo de usuario
export function createUser(username, password) {
    return {
      username,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
  