import { user } from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccessToken } from '../libs/jwt.js';

export const getUsers = async (req, res) => {
    try {
        const users = await user.findAll()
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const register = async (req, res) => {
    const { Nombre_Usuario, Contrasena, Email } = req.body;

    try {

        const passwordHast = await bcrypt.hash(Contrasena, 10)

        const newUser = await user.create({
            Nombre_Usuario,
            Email,
            Contrasena: passwordHast
        });

        const token = await createAccessToken({ id: newUser.id });

        res.cookie('token', token)
        res.json({
            message: "Usuario creado correctamente",
            id: newUser.id,
            Nombre: newUser.Nombre_Usuario,
            Correo: newUser.Email,
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { Email, Contrasena } = req.body
    try {

        const userFound = await user.findOne({ where: { Email } });
        if (!userFound) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(Contrasena, userFound.Contrasena)

        if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

        const token = await createAccessToken({ ID_USUARIO: userFound.ID_USUARIO });
        res.cookie('token', token);

        res.json({
            id: userFound.ID_USUARIO,
            usuario: userFound.Nombre_Usuario,
            email: userFound.Email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
};

export const profile = (req, res) => {

    const UserFound = user.findById(req.user.ID_USUARIO)
    if (!UserFound) return res.status(400).json({ message: "User not found" });

    return res.json({
        id: UserFound.ID_USUARIO,

    })
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { Nombre_Usuario, Contrasena, Email } = req.body

        const updateUser = await user.findByPk( id )

        updateUser.Nombre_Usuario = Nombre_Usuario
        updateUser.Contrasena = Contrasena
        updateUser.Email = Email
        
        await updateUser.save()

        res.json(updateUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                ID_USUARIO: id
            }
        });

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const getUser = await user.findOne({ where: { ID_USUARIO: id } })

        if (!getUser) return res.status(404).json({ message: 'El usuario no existe' })

        res.json(getUser);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};