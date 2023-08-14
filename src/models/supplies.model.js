import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const supplies = sequelize.define('INSUMOS', {
    ID_INSUMOS: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Insumo: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Cantidad_Insumo: {
        type: DataTypes.SMALLINT,
        // defaultValue: 0,
        required: true
    },
    Imagen: {
        type: DataTypes.BLOB,
        required: true
    },
    Stock_Minimo: {
        type: DataTypes.INTEGER,
        required: true
    }
});