import { Router } from "express";
import { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from '../controllers/recipe.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/recipe', authRequired, getRecipes);
router.post('/recipe', authRequired, createRecipe);
router.put('/recipe/:id', authRequired, updateRecipe);
router.delete('/recipe/:id', authRequired, deleteRecipe);
router.get('/recipe/:id', authRequired, getRecipe);

export default router;