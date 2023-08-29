import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct, getProductRecipes } from '../controllers/product.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/product',  getProducts);
router.post('/product', authRequired, createProduct);
router.put('/product/:id', authRequired, updateProduct);
router.delete('/product/:id', authRequired, deleteProduct);
router.get('/product/:id', authRequired, getProduct);
router.get('/product/:id/recipes', authRequired, getProductRecipes);

export default router;