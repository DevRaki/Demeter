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
        allowNull: false
        // validate: {
        //     is: /^[0-9a-f]{64}$/i
        // }
    },
    Contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});