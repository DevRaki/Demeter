import { Router } from "express";
import { createRoles, deleteRole, getRole, getRoles, updateRole, getRoleUser } from '../controllers/role.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/role', authRequired, getRoles);
router.post('/role', authRequired, createRoles);
router.put('/role/:id', authRequired, updateRole);
router.delete('/role/:id', authRequired, deleteRole);
router.get('/role/:id', authRequired, getRole);
router.get('/role/:id/user', authRequired, getRoleUser);

export default router;