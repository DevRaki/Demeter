import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { shopping } from './shopping.model.js';

export const supplier = sequelize.define('PROVEEDORES', {
    ID_PROVEEDOR: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Telefono: {
        type: DataTypes.INTEGER,
        required: true,
        trim: true
    },
    Email: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Ciudad: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    }
});

supplier.hasMany(shopping, {
    foreignKey: 'ID_PROVEEDOR',
    sourceKey: 'ID_PROVEEDOR'
})

shopping.belongsTo(supplier, {
    foreignKey: 'ID_PROVEEDOR',
    targetId: 'ID_PROVEEDOR'
})