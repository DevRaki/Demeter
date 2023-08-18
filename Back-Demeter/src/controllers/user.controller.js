import { user } from '../models/user.model.js';
import bcrypt from "bcryptjs";
import { createAccessToken } from '../libs/jwt.js';

export const getUsers = async (req, res) => {
    try {
        const users = await user.findAll()
        res.json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createUser = async (req, res) => {
    const { Nombre_Usuario, Contrasena, Email } = req.body;

    try {

        const passwordHast = await bcrypt.hast(Contrasena, 10)

        const newUser = await user.create({
            Nombre_Usuario,
            Email,
            Contrasena: passwordHast
        })

        const userSaved = await newUser.save();
        const token = await createAccessToken({ ID_USUARIO: userSaved.ID_USUARIO });
        res.cookie('token', token);

        res.json({
            id: userSaved.ID_USUARIO,
            usuario: userSaved.Nombre_Usuario,
            email: userSaved.Email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { Nombre_Usuario, Contrasena, Email } = req.body

        const user = await user.findByPk(id)

        user.Nombre_Usuario = Nombre_Usuario
        user.Contrasena = Contrasena
        user.Email = Email

        await user.save()

        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        await user.destroy({
            where: {
                id,
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
        const user = await user.findOne({
            where: {
                id
            }
        })

        if (!user) return res.status(404).json({ message: 'El usuario no existe' })

        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const { Email, Contrasena } = req.body

    try {

        const userFound = await user.findOne({ Email });
        if (!userFound) return res.status(400).json({ message: "Usuario no encontrado" });

        const isMatch = await bcrypt.compare(Contrasena, userFound.Contrasena)

        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

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