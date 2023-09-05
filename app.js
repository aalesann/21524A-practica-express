// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const cors = require('cors');
const morgan = require('morgan');

const app = express()

// Middlwares
app.use(cors({
    // origin: "*" // Cualquiera puede realizar peticiones
    origin: "http://localhost:3000"
}));
app.use(morgan("dev"))
app.use(express.json()) // Para que el servidor comprenda datos en formato json

// Archivos estáticos - (carpeta pública)

// Rutas

// Servidor en esucha
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ruta-protegida',  (req, res) => {

   res.send({ name: "Alejandro"})
})

app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`))