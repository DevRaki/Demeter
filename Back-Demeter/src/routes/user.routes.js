import { Router } from "express";
import { register, getUsers, login, logout, profile, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/user', authRequired, getUsers);
router.get('/user', authRequired, getUser);
router.put('/user', authRequired, updateUser);
router.delete('/user', authRequired, deleteUser);
router.post('/user', authRequired, register);
router.post('/login', login);
router.post('/logout', logout);
router.get("/profile", authRequired, profile);

export default router;