import { recipe } from '../models/recipe.model.js'

export const getRecipes = async (req, res) => {
    try {
        const recipess = await recipe.findAll()
        res.json(recipess);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createRecipe = async (req, res) => {
    const { Cantidad } = req.body;

    try {
        const newRecipe = await recipe.create({
            Cantidad
        })

        res.json(newRecipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const { Cantidad } = req.body

        const recipe = await recipe.findByPk(id)

        recipe.Cantidad = Cantidad

        await recipe.save()

        res.json(recipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params

        await recipe.destroy({
            where: {
                id,
            }
        });

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await recipe.findOne({
            where: {
                id
            }
        })

        if (!recipe) return res.status(404).json({ message: 'La receta no existe no existe' })

        res.json(recipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};