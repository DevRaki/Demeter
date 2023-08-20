import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { supplie } from './supplie.model.js';

export const category_supplie = sequelize.define('CATEGORIA_INSUMOS', {
    ID_CATEGORIA_INSUMO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Categoria: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Imagen: {
        type: DataTypes.BLOB,
        required: true
    }
});

category_supplie.hasMany(supplie, {
    foreignKey: 'ID_CATEGORIA_INSUMO',
    sourceKey: 'ID_CATEGORIA_INSUMO'
})

supplie.belongsTo(category_supplie, {
    foreignKey: 'ID_CATEGORIA_INSUMO',
    targetId: 'ID_CATEGORIA_INSUMO'
})