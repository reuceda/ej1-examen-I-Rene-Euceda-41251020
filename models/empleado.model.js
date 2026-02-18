const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empleado = sequelize.define('Empleado', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    puesto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
}, {
    tableName: 'Empleado',
    timestamps: true,
});

module.exports = Empleado;