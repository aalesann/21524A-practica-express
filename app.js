// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const { sequelize, conectarDB } = require('./database');
require('ejs');

const app = express()

// Alternativa de conexión 1
conectarDB();

// Alternativa de conexión 2
// Conexión a BD
// sequelize.authenticate()
//     .then(() => console.log('Conexión a BD exitosa'))
//     .catch((error)=> console.log(error))



// Middlwares
app.use(cors({
    // origin: "*" // Cualquiera puede realizar peticiones
    origin: "http://localhost:3000"
}));
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json

app.set('view engine', 'ejs')

// Archivos estáticos - (carpeta pública)
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.use(require('./routes/blog.routes'))
app.use(require('./routes/user.routes'))



// Servidor en esucha
app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`))