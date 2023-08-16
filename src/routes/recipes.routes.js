import { Router } from "express";
import { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from '../controllers/recipes.controller.js'

const router = Router();

router.get('/recipes', getRecipes);
router.post('/recipes', createRecipe);
router.put('/recipes/:id', updateRecipe);
router.delete('/recipes/:id', deleteRecipe);
router.get('/recipes/:id', getRecipe);

export default router;