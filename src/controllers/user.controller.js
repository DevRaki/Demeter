import { user } from '../models/user.model.js'

export const getUsers = async (req, res) => {
    const users = await user.findAll()
    res.json(users)
}

export const createUser = async (req, res) => {
    const {Nombre_Usuario, Contrasena, Email} = req.body
    
    const newUser = await user.create({
        Nombre_Usuario,
        Email,
        Contrasena
    })

    res.json(newUser);
}