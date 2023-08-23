import { sale } from '../models/sale.model.js';
import { detail_sale } from '../models/detail_sale.model.js';
import { product } from '../models/product.model.js';

export const createDetailSale = async(req, res) => {
    
    const { Cantidad, ID_VENTA, ID_PRODUCT} = req.body;
try {
    const newSale = await detail_sale.create({
        Cantidad,
        ID_VENTA,
        ID_PRODUCT
    })
    res.json(newSale)


} catch (error) {
    return res.status(500).json({ message: error.message });
}
}


export const getDetailSale = async (req, res) => {
    const Data = await detail_sale.findAll()
    res.json(Data)
}


const total = async () =>{

    const data = await product.findOne({where:{ ID_PRODUCTO : }})

}




