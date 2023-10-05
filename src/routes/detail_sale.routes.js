import { Router } from "express";
import { createDetailSale, getDetailSale, getDetailWSale, updateDetail_ADD, updateDetail_SUBSTRACT } from "../controllers/detail_sale.controller.js";

const router = Router();

router.get("/detailSale",  getDetailSale)
router.get('/DetailWSale/:id', getDetailWSale)
router.post('/detailSale', createDetailSale)
router.put('/updateDetail_ADD/:id', updateDetail_ADD)
router.put('/updateDetail_SUBSTRACT/:id', updateDetail_SUBSTRACT)


export default router;