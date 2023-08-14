import {DataTypes} from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const user = sequelize.define('usuarios', {
    ID_USUARIO: {
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Usuario: {
        type: DataTypes.STRING
    },
    Contrasena: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    }
});