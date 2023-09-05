import { Router } from "express";
import { createSale, getSales, getSalesWithDetails, updateSale, updateSaleParams } from "../controllers/sale.controller.js";


const router = Router();


router.get("/sale",  getSales)
router.get("/saleWdetails/:id", getSalesWithDetails)
router.post('/sale', createSale)
router.put('/sales/:id', updateSale)
router.put('/salesParams/:id', updateSaleParams)


export default router;