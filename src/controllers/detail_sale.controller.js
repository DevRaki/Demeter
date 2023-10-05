import { sale } from '../models/sale.model.js';
import { detail_sale } from '../models/detail_sale.model.js';
import { product } from '../models/product.model.js';
import { where } from 'sequelize';


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

export const getDetailWSale = async (req, res) => {

    const{id} = req.params 
    const Data = await detail_sale.findAll({where:{
        ID_VENTA : id
    }})
    res.json(Data)
}
export const updateDetail_ADD = async(req, res) => {
    try {
    const {id} = req.params 
    const detail = await detail_sale.findByPk(id)
    const producto = await product.findByPk(detail.ID_PRODUCTO)
    const Cantidad = detail.Cantidad+1
    const SubTotal = Cantidad * producto.Precio
    
    await detail.update({
        Cantidad : Cantidad,
        SubTotal : SubTotal
    })

    res.json(detail)
    } catch (error) { 
        return res.status(500).json({ message: error.message });
    }
}

export const updateDetail_SUBSTRACT = async(req, res) => {
    try {
    const {id} = req.params 
    const detail = await detail_sale.findByPk(id)
    const producto = await product.findByPk(detail.ID_PRODUCTO)
    const Cantidad = detail.Cantidad-1
    const SubTotal = Cantidad * producto.Precio
    
    await detail.update({
        Cantidad : Cantidad,
        SubTotal : SubTotal
    })

    res.json(detail)
    } catch (error) { 
        return res.status(500).json({ message: error.message });
    }
}