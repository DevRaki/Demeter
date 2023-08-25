import { Router } from "express";
import { createRestaurant } from "../controllers/restaurant.controller.js";


const router = Router();


//router.get("/restaurant",  getSales)
router.post('/restaurant', createRestaurant)


export default router;