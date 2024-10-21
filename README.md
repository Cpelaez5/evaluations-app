# Evaluations App

## Descripción

Evaluations App es una API RESTful construida con Node.js y Express, que utiliza Mongoose para interactuar con una base de datos MongoDB. Esta aplicación permite gestionar evaluaciones de manera eficiente y escalable.

## Características

- API RESTful para gestionar evaluaciones.
- Conexión a MongoDB utilizando Mongoose.
- Rutas para crear, leer, actualizar y eliminar evaluaciones.
- Middleware para manejo de errores y validaciones.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de aplicaciones web y APIs.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar los datos de las evaluaciones.

## Instalación

1. Clona el repositorio:

   bash
   git clone https://github.com/tu-usuario/evaluations-app.git

2. Navega al directorio del proyecto:
    cd evaluations-app/server

3. Instala las dependencias
    npm install
4. Configura las variables de entorno. Crea un archivo .env en la raíz del proyecto y agrega tus configuraciones de MongoDB:

  ´´´
  EVALUATIONS_APP_MONGODB_PORT=tu_puerto
  EVALUATIONS_APP_MONGODB_HOST=tu_url_de_mongoDB
  EVALUATIONS_APP_MONGODB_DATABASE=nombre_de_db
  ´´´
  
5. Ejecuta la aplicación:
  npm run build
  npm start

Uso
La API está disponible en el siguiente enlace:

[Evaluations API](https://evaluations-app.onrender.com)

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme:

Nombre: Carlos Peláez
Email: cpelaez0811@gmail.com
