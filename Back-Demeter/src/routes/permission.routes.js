import { Router } from "express";
import { getPermissions, createPermission, updatePermission, deletePermission, getPermission } from '../controllers/permission.controller.js';
import { authRequired } from '../middlewares/validateToken.js'

const router = Router();

router.get('/permission', authRequired, getPermissions);
router.post('/permission', authRequired, createPermission);
router.put('/permission/:id', authRequired, updatePermission);
router.delete('/permission/:id', authRequired, deletePermission);
router.get('/permission/:id', authRequired, getPermission);

export default router;