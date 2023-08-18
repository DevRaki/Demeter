import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { sale } from './sale.model.js';

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

waiter.hasMany(sale, {
    foreignKey: 'ID_MESERO',
    sourceKey: 'ID_MESERO'
})

sale.belongsTo(waiter, {
    foreignKey: 'ID_MESERO',
    targetId: 'ID_MESERO'
})