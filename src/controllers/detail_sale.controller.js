import { sale } from '../models/sale.model.js';
import { detail_sale } from '../models/detail_sale.model.js';
import { product } from '../models/product.model.js';


export const createDetailSale = async(req, res) => {
    
    const {ID_DETALLE_VENTA, Cantidad, ID_VENTA, ID_PRODUCTO} = req.body;
    console.log(ID_PRODUCTO)
    

try {
    
    const producto = await product.findByPk(ID_PRODUCTO)

    const SubTotal = producto.Precio * Cantidad

    const newSale = await detail_sale.create({
        ID_DETALLE_VENTA,
        Cantidad,
        SubTotal,
        ID_VENTA,
        ID_PRODUCTO
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
