import {DataTypes} from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { role_permissions } from './role_permissions.model.js';

export const permissions = sequelize.define('permisos', {
    ID_PERMISO: {
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Permiso: {
        type: DataTypes.STRING
    },
    _Url: {
        type: DataTypes.STRING
    }
});

permissions.hasOne(role_permissions, {
    foreignKey: 'ID_PERMISO',
    sourceKey: 'ID_PERMISO'
})

role_permissions.belongsTo(permissions, {
    foreignKey: 'ID_PERMISO',
    targetKey: 'ID_PERMISO'
})