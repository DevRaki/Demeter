import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const sale = sequelize.define('VENTAS', {
    ID_VENTA: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        required: true
    },
    Fecha: {
        type: DataTypes.DATE,
        required: true
    },
    Venta_Rapida: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        required: true
    },
    Descuento: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    Sub_Total: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    Total: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    }

});