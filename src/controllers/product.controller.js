import { product } from '../models/product.model.js'
import { recipe } from '../models/recipe.model.js'

export const getProducts = async (req, res) => {

    try {

        const products = await product.findAll()
        res.json(products);

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
};

export const createProduct = async (req, res) => {

    const { Nombre_Producto, Precio, Imagen } = req.body;

    try {

        const newProduct = await product.create({
            Nombre_Producto,
            Precio,
            Imagen
        })

        res.json(newProduct);

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
};

export const updateProduct = async (req, res) => {

    try {

        const { id } = req.params
        const { Nombre_Producto, Precio, Imagen } = req.body

        const updateProduct = await product.findByPk(id)

        updateProduct.Nombre_Producto = Nombre_Producto
        updateProduct.Precio = Precio
        updateProduct.Imagen = Imagen

        await updateProduct.save()

        res.json(updateProduct);

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
};

export const deleteProduct = async (req, res) => {

    try {

        const { id } = req.params

        await product.destroy({
            where: { ID_PRODUCTO: id, }
        });

        res.sendStatus(204);

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
};

export const getProduct = async (req, res) => {

    try {

        const { id } = req.params
        const getProduct = await product.findOne({
            where: {
                ID_PRODUCTO: id
            }
        })

        if (!getProduct) return res.status(404).json({ message: 'El producto no existe' })

        res.json(getProduct);

    } catch (error) {

        return res.status(500).json({ message: error.message });

    }
};

export const getProductRecipes = async (req, res) => {

    const { ID_PRODUCTO } = req.params
    const recipes = await recipe.findAll({
        where: { ID_PRODUCTO: ID_PRODUCTO }
    });

    res.json(recipes);
};