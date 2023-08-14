import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const product = sequelize.define('PRODUCTOS', {
    ID_PRODUCTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Producto: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    Imagen: {
        type: DataTypes.BLOB,
        required: true
    }
});