// ! Lógica de config del servidor
// Importaciones de módulos
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000, () => console.log(`Servidor corriendo en http://localhost:3000`))