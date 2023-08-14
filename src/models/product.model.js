import { DataTypes } from 'sequelize';
import { sequelize } from '../db/dataBase.js';
import { recipes } from './recipes.model.js';
import { detail_sale } from './detail_sale.model.js'

export const product = sequelize.define('PRODUCTOS', {
    ID_PRODUCTO: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre_Producto: {
        type: DataTypes.STRING,
        required: true,
        trim: true
    },
    Precio: {
        type: DataTypes.DECIMAL(10, 2),
        required: true
    },
    Imagen: {
        type: DataTypes.BLOB,
        required: true
    }
});

product.hasMany(recipes, {
    foreignKey: 'ID_PRODUCTO',
    sourceKey: 'ID_PRODUCTO'
})

recipes.belongsTo(product, {
    foreignKey: 'ID_PRODUCTO',
    targetId: 'ID_PRODUCTO'
})

product.hasMany(detail_sale, {
    foreignKey: 'ID_PRODUCTO',
    sourceKey: 'ID_PRODUCTO'
})

detail_sale.belongsTo(product, {
    foreignKey: 'ID_PRODUCTO',
    targetId: 'ID_PRODUCTO'
})