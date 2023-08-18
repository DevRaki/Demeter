import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, getProductRecipes } from '../controllers/product.controller.js'

const router = Router();

router.get('/product', getProducts);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
router.get('/product/:id', getProduct);
router.get('/product/:id/recipes', getProductRecipes);

export default router;