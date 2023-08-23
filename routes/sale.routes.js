import { Router } from "express";
import { createSale, getSales, updateSale } from "../controllers/sale.controller.js";


const router = Router();


router.get("/sale",  getSales)
router.post('/sale', createSale)
router.put('/sale/:id', updateSale)

export default router;