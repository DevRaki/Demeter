import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { sale } from './sale.model.js';

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

payment_method.hasMany(sale, {
    foreignKey: 'ID_METODO_PAGO',
    sourceKey: 'ID_METODO_PAGO'
})

sale.belongsTo(payment_method, {
    foreignKey: 'ID_METODO_PAGO',
    targetId: 'ID_METODO_PAGO'
})