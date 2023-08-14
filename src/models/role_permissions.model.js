import {DataTypes} from 'sequelize';
import { sequelize } from '../db/dataBase.js';

export const role_permissions = sequelize.define('rol_permisos', {
    ID_ROL_PERMISOS: {
        type: DataTypes.BIGINT(11),
        primaryKey: true,
        autoIncrement: true
    }
});