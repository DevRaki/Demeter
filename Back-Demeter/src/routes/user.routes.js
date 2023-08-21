import { Router } from "express";
import { register, getUsers, login, logout, profile } from '../controllers/user.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/user', getUsers);
router.post('/user', register);
router.post('/login', login);
router.post('/logout', logout);
router.get("/profile", authRequired, profile);

export default router;