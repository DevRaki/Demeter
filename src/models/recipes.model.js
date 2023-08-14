import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const recipes = sequelize.define('RECETAS', {
    ID_RECETA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Cantidad: {
        type: DataTypes.SMALLINT,
        required: true,
        trim: true
    }
});