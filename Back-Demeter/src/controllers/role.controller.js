import { role } from '../models/role.model.js'
import { user } from '../models/user.model.js'

export const getRoles = async (req, res) => {
    try {
        const roles = await role.findAll()
        res.json(roles);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createRoles = async (req, res) => {
    const { Nombre_Rol } = req.body;

    try {
        const newRole = await role.create({
            Nombre_Rol
        })

        res.json(newRole);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateRole = async (req, res) => {
    try {
        const { id } = req.params
        const { Nombre_Rol } = req.body

        const role = await role.findByPk(id)

        role.Nombre_Rol = Nombre_Rol

        await role.save()

        res.json(role);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteRole = async (req, res) => {
    try {
        const { id } = req.params

        await role.destroy({
            where: {
                id,
            }
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getRole = async (req, res) => {
    try {
        const { id } = req.params
        const role = await role.findOne({
            where: {
                id
            }
        })

        if (!role) return res.status(404).json({ message: 'El rol no existe.' })

        res.json(role);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getRoleUser = async (req, res) => {
    const { id } = req.params
    const users = await user.findAll({
        where: { ID_ROL: id }
    });

    res.json(users);
};