import { obtenerPublicaciones, mostrarDatosPublicaciones } from './crud-post.js';



document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM Cargado!")
    const publicaciones = await obtenerPublicaciones()
    const main = document.querySelector('#lista-publicaciones')
    mostrarDatosPublicaciones(publicaciones, main)
})