import { obtenerPublicaciones, mostrarDatosPublicaciones } from './crud-post.js'


// EVENTOS
// document.addEventListener('DOMContentLoaded', async () => {

//     // Consulta al servidor por los datos de usuarios
//     const response = await fetch('/obtener-usuarios');
//     const users = await response.json();

//     console.log(users)
// });



const mostrarDatos = (users, elemento) => {
    let registros = '';
    users.forEach(user => {
        registros += `
            <tr>
                <td>${user.username}</td>
                <td>${user.name}</td>
                <td>${user.lastname}</td>
            </tr>
        `
    });

    elemento.innerHTML = registros
}

// // Se obtiene la referencia al elemento html (botón html)
// const btnUsers = document.querySelector('.btn-get-users')

// Se añade un evento que escucha cuando el usuario hace clic en el botón
// btnUsers.addEventListener('click', async () => {
//     // Consulta al servidor por los datos de usuarios
//     const response = await fetch('/obtener-usuarios');
//     const users = await response.json();
//     const tablaUsuarios = document.querySelector('#tabla-usuarios');
    

//     // Modificar el DOM para mostrar los datos
//     mostrarDatos(users, tablaUsuarios)

// })


// Se obtiene la referencia al elemento html (botón html)
const btnUsers = document.querySelector('.btn-get-posts')
// Se añade un evento que escucha cuando el usuario hace clic en el botón
btnUsers.addEventListener('click', async () => {
    const tablaPublicaciones = document.querySelector('#tabla-publicaciones');    
    const publicaciones = await obtenerPublicaciones()
    mostrarDatosPublicaciones(publicaciones, tablaPublicaciones)

})