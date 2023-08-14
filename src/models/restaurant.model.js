import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { waiter } from './waiter.model.js'

export const restaurant = sequelize.define('RESTAURANTES', {
    ID_RESTAURANTE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Restaurante: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    }
});

restaurant.hasMany(waiter, {
    foreignKey: 'ID_RESTAURANTE',
    sourceKey: 'ID_RESTAURANTE'
})

waiter.belongsTo(restaurant, {
    foreignKey: 'ID_RESTAURANTE',
    targetId: 'ID_RESTAURANTE'
})