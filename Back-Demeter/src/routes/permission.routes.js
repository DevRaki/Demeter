import { Router } from "express";
import { getPermissions, createPermission, updatePermission, deletePermission, getPermission } from '../controllers/permission.controller.js'

const router = Router();

router.get('/permission', getPermissions);
router.post('/permission', createPermission);
router.put('/permission/:id', updatePermission);
router.delete('/permission/:id', deletePermission);
router.get('/permission/:id', getPermission);

export default router;