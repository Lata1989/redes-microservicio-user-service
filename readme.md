user-service/
│
├── src/
│   ├── config/
│   │   ├── envConfig.js       # Configuración de las variables de entorno
│   │   └── database.js        # Conexión a la base de datos y funciones relacionadas
│   ├── models/
│   │   └── User.js            # Definición del modelo de usuario
│   ├── controllers/
│   │   └── userController.js  # Lógica de negocio para la gestión de usuarios
│   ├── routes/
│   │   └── userRoutes.js      # Rutas relacionadas con usuarios
│   ├── app.js                 # Configuración de la aplicación Express
│   └── server.js              # Punto de entrada del servidor
│
├── .env                       # Variables de entorno
├── .gitignore                 # Archivos y carpetas a ignorar en Git
└── package.json               # Dependencias y scripts
