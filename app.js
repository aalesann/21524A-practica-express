// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('ejs');

const { sequelize, conectarDB } = require('./database');

const app = express()
const port = process.env.PORT || 4000;

// Alternativa de conexión 1
conectarDB();

// Middlwares
app.use(cors());
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json

app.set('view engine', 'ejs')

// Archivos estáticos - (carpeta pública)
app.use(express.static(path.join(__dirname, 'public')))

// Rutas
app.use(require('./routes/blog.routes'))



// Servidor en esucha
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`))