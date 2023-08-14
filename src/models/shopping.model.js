import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const shopping = sequelize.define('COMPRAS', {
    ID_COMPRAS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha_Compra: {
        type: DataTypes.DATE,
        required: true,
        trim: true
    },
    Valor_Compra: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    Estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        required: true
    }
});