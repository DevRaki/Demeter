import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { user } from './user.model.js';
import { role_permission } from './role_permission.model.js';

export const role = sequelize.define('ROLES', {
    ID_ROL: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Rol: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
        unique: true
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

role.hasOne(role_permission, {
    foreignKey: 'ID_ROL',
    sourceKey: 'ID_ROL'
})

role_permission.belongsTo(role, {
    foreignKey: 'ID_ROL',
    targetKey: 'ID_ROL'
})