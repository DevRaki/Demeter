import { product } from '../models/product.model.js'
import { recipes } from '../models/recipes.model.js'

export const getProducts = async (req, res) => { };

export const createProduct = async (req, res) => { };

export const updateProduct = async (req, res) => { };

export const deleteProduct = async (req, res) => { };

export const getProduct = async (req, res) => { };

export const getProductRecipes = async (req, res) => {
    const { id } = req.params
    const recipe = await recipes.findAll({
        where: { ID_PRODUCTO: id }
    });

    res.json(recipe);
};