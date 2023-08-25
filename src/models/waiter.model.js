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
        required: true
    },
    ID_RESTAURANTE: {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});

waiter.hasMany(sale, {
    foreignKey: 'ID_MESERO',
    sourceKey: 'ID_MESERO'
})

waiter.belongsTo(sale, {
    foreignKey: 'ID_MESERO',
    targetId: 'ID_MESERO'
})

