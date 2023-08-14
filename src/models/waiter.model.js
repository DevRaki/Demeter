import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const waiter = sequelize.define('MESEROS', {
    ID_MESERO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    }
});