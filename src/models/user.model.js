import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const user = sequelize.define('USUARIOS', {
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Usuario: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Contrasena: {
        type: DataTypes.STRING,
        required: true
    },
    Email: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    }
});