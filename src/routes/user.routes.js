import { Router } from "express";
import { createUser, getUsers } from '../controllers/user.controller.js'

const router = Router();

router.get('/user', getUsers);
router.post('/user', createUser);
router.put('/user/:id');
router.delete('/user/:id');
router.get('/user/:id');

export default router;