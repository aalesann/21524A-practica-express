// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('ejs');

const app = express()

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