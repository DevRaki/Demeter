import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const payment_method = sequelize.define('METODO_PAGO', {
    ID_METODO_PAGO: {
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