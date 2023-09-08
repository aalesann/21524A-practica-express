export const crearPublicaciones = async () => {
    fetch()
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/obtener-publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    fetch()
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(user => {
        registros += `
            <tr>
                <td>${user.id}</td>
                <td>${user.titulo}</td>
                <td>${user.detalle}</td>
                <td>${user.fecha_publicacion}</td>
            </tr>
        `
    });

    elemento.innerHTML = registros
}
