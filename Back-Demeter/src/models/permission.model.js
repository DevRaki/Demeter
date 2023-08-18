import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { role_permission } from './role_permission.model.js';

export const permissions = sequelize.define('PERMISOS', {
    ID_PERMISO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Permiso: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true
    },
    _Url: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

permissions.hasOne(role_permission, {
    foreignKey: 'ID_PERMISO',
    sourceKey: 'ID_PERMISO'
})

role_permission.belongsTo(permissions, {
    foreignKey: 'ID_PERMISO',
    targetKey: 'ID_PERMISO'
})