
const Publicacion = require('../models/Publicaciones');
const ctrl = {}


ctrl.getPosts = async (req, res) => {

    try {
        const publicaciones = await Publicacion.findAll();
        return res.json(publicaciones)
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al consultar las publicaciones"
        })
    }

}


ctrl.newPost = async (req, res) => {
    const { titulo, detalle, url_imagen, fecha_publicacion } = req.body;

    try {
        const publicacion = await Publicacion.create({
            titulo, detalle, url_imagen, fecha_publicacion
        });

        res.send({ msg: "Publicación creada con éxito", publicacion })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Error al crear la publicación"
        })
    }
}

module.exports = ctrl;