import { Router } from "express";
import { createSale, getSales } from "../controllers/sale.controller.js";


const router = Router();


router.get("/sale",  getSales)
router.post('/sale', createSale)


export default router;