const { DataTypes, Sequelize, sequelize  } = require('../database');

const Publicacion = sequelize.define('Publicacion', {
    
    titulo: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    detalle: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    url_imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'publicaciones'
});

// Publicacion.sync({ force: true })

module.exports = Publicacion;


