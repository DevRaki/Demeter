import { permission } from "../models/permission.model";

export const getPermissions = async (req, res) => {
    try {
        const permissions = await permission.findAll()
        res.json(permissions)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const createPermission = async (req, res) => {
    const { Nombre_Permiso, _Url } = req.body

    try {
        const newPermission = await permission.create({
            Nombre_Permiso,
            _Url
        })

        res.json(newPermission);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const updatePermission = async (req, res) => {
    try {
        const { id } = req.params
        const { Nombre_Permiso, _Url } = req.body

        const permission = await permission.findByPk(id)

        permission.Nombre_Permiso = Nombre_Permiso
        permission._Url = _Url

        await permission.save()

        res.json(permission);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deletePermission = async (req, res) => {
    try {
        const { id } = req.params

        await permission.destroy({
            where: {
                id,
            }
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getPermission = async (req, res) => {
    try {
        const { id } = req.params
        const permission = await permission.findOne({
            where: {
                id
            }
        })

        if (!permission) return res.status(404).json({ message: 'El permiso no existe' })

        res.json(permission);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};