import {DataTypes} from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { user } from './user.model.js';
import { role_permissions } from './role_permissions.model.js';

export const role = sequelize.define('rols', {
    ID_ROL: {
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Rol: {
        type: DataTypes.STRING
    }
});

role.hasMany(user, {
    foreignKey: 'ID_ROL',
    sourceKey: 'ID_ROL'
})

user.belongsTo(role, {
    foreignKey: 'ID_ROL',
    targetId: 'ID_ROL'
})

role.hasOne(role_permissions, {
    foreignKey: 'ID_ROL',
    sourceKey: 'ID_ROL'
})

role_permissions.belongsTo(role, {
    foreignKey: 'ID_ROL',
    targetKey: 'ID_ROL'
})