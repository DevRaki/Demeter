import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const restaurant = sequelize.define('RESTAURANTES', {
    ID_RESTAURANTE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Restaurante: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    }
});