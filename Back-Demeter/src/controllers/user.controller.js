import { user } from '../models/user.model.js';
import { bcrypt } from 'bcryptjs';
import {jwt} from 'jsonwebtoken';

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
        });

        jwt.sign(
            {
            id: newUser.id,
            },
            "secreto123",
            {}
        )

        res.json({
            id: newUser.id,
            Nombre: newUser.Nombre_Usuario,
            Correo: newUser.Email,
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