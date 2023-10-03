import { Router } from "express";
import { createWaiter, findWaiterByRest, updateWaiter, GetWaiter, GetWaiters } from "../controllers/waiter.controller.js";

const router = Router()

router.post("/meseros", createWaiter)
router.get('/findWaiters/:id', findWaiterByRest)
router.put('/updateWaiter/:id' , updateWaiter)
router.get('/GetWaiter/:id', GetWaiter)
router.get('/GetWaiters', GetWaiters)
export default router