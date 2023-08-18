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

        const product = await product.findByPk(id)

        product.Nombre_Producto = Nombre_Producto
        product.Precio = Precio
        product.Imagen = Imagen

        await product.save()

        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        await product.destroy({
            where: {
                id,
            }
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await product.findOne({
            where: {
                id
            }
        })

        if (!product) return res.status(404).json({ message: 'El producto no existe' })

        res.json(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getProductRecipes = async (req, res) => {
    const { id } = req.params
    const recipes = await recipe.findAll({
        where: { ID_PRODUCTO: id }
    });

    res.json(recipes);
};