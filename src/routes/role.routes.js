import { Router } from "express";
import { createRoles, deleteRole, getRole, getRoles, updateRole, getRoleUser } from '../controllers/role.controller.js'

const router = Router();

router.get('/role', getRoles);
router.post('/role', createRoles);
router.put('/role/:id', updateRole);
router.delete('/role/:id', deleteRole);
router.get('/role/:id', getRole);
router.get('/role/:id/user', getRoleUser);

export default router;