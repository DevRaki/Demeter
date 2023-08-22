import { Router } from "express";
import { register, getUsers, login, logout, profile, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/user', authRequired, getUsers);
router.get('/user/:id', authRequired, getUser);
router.put('/user/:id', authRequired, updateUser);
router.delete('/user/:id', authRequired, deleteUser);
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get("/profile", authRequired, profile);

export default router;  