import { Router } from "express";
import { createWaiter, findWaiterByRest, updateWaiter } from "../controllers/waiter.controller.js";

const router = Router()

router.post("/meseros", createWaiter)
router.get('/findWaiters/:id', findWaiterByRest)
router.put('/updateWaiter/:id' , updateWaiter)
export default router