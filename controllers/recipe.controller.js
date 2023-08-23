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
    const { ID_PRODUCTO, Cantidad } = req.body

    try {
        const newRecipe = await recipe.create({
            ID_PRODUCTO,
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

        const updateRecipe = await recipe.findByPk(id)

        updateRecipe.Cantidad = Cantidad

        await updateRecipe.save()

        res.json(updateRecipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params

        await recipe.destroy({
            where: { ID_RECETA: id, }
        });

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getRecipe = async (req, res) => {
    try {
        const { id } = req.params
        const getRecipe = await recipe.findOne({
            where: {
                ID_RECETA: id
            }
        })

        if (!getRecipe) return res.status(404).json({ message: 'La receta no existe no existe' })

        res.json(getRecipe);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};