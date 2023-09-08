// Instancia de conexión a la Base de Datos
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize('pruebadb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const conectarDB = async () => {
    try {
        await sequelize.authenticate();
        // await sequelize.sync({ force: false });
        console.log('Conexión a BD exitosa');
      } catch (error) {
        console.error('Error:', error);
      }
}

module.exports = {
    conectarDB,
    sequelize,
    Sequelize,
    DataTypes
}