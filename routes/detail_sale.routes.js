import { Router } from "express";
import { createDetailSale, getDetailSale } from "../controllers/detail_sale.controller.js";

const router = Router();

router.get("/detailSale",  getDetailSale)
router.post('/detailSale', createDetailSale)


export default router;