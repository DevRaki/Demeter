import  {restaurant} from '../models/restaurant.model.js'


export const createRestaurant = async(req, res) => {
    
    const {Nombre_Restaurante} = req.body;
try {
    const newRestaurant = await restaurant.create({
        Nombre_Restaurante
    })

    res.json(newRestaurant)
} catch (error) {
    return res.status(500).json({ message: error.message });
}
}