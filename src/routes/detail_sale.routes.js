import { Router } from "express";
import { createDetailSale, getDetailSale, getDetailWSale } from "../controllers/detail_sale.controller.js";

const router = Router();

router.get("/detailSale",  getDetailSale)
router.get('/DetailWSale/:id', getDetailWSale)
router.post('/detailSale', createDetailSale)


export default router;