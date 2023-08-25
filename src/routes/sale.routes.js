import { Router } from "express";
import { createSale, getSales, getSalesWithDetails, updateSale } from "../controllers/sale.controller.js";


const router = Router();


router.get("/sale",  getSales)
router.get("/saleWdetails/:id", getSalesWithDetails)
router.post('/sale', createSale)
router.put('/sales/:id', updateSale)


export default router;