import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { detail_shopping } from './detail_shopping.model.js';

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

shopping.hasMany(detail_shopping, {
    foreignKey: 'ID_COMPRAS',
    sourceKey: 'ID_COMPRAS'
})

detail_shopping.belongsTo(shopping, {
    foreignKey: 'ID_COMPRAS',
    targetId: 'ID_COMPRAS'
})