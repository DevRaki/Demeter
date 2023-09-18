import  {waiter} from '../models/waiter.model.js'


export const createWaiter = async (req, res) => {
    try {
        const {Nombre, ID_RESTAURANTE} = req.body;
        try {
            const newWaiter = await waiter.create(
                {
                    Nombre,
                    ID_RESTAURANTE
                }
            ) 
            res.json(newWaiter)
        } catch (error) {
            return res.status(500).json({ message: error.message });
            
        }
       
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};



export const findWaiterByRest = async (req, res ) => {

    const {id} = req.params

    try {

        const query = await waiter.findAll({where : {
            ID_RESTAURANTE : id
        }}) 

        res.json(query)
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }



}

export const updateWaiter = async(req, res) =>{
    const {id} = req.params;
    const {Nombre , ID_RESTAURANTE} = req.body

    try {
        const TempWaiter = await waiter.findByPk(id)

        TempWaiter.Nombre = Nombre
        TempWaiter.ID_RESTAURANTE = ID_RESTAURANTE

        await TempWaiter.save()

        res.json(TempWaiter)
        

    } catch (error) {
    return res.status(500).json({message : error.message})

    }
}

export const GetWaiter = async(req, res) =>{
    const {id} = req.params;
    try {
        const Waiter = await waiter.findByPk(id)
        res.json(Waiter.Nombre)
        

    } catch (error) {
    return res.status(500).json({message : error.message})

    }
}