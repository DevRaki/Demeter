import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user.controller.js'

const router = Router();

router.get('/user', getUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUser);

export default router;