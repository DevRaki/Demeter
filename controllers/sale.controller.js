import { sale } from '../models/sale.model.js';
import { detail_sale } from '../models/detail_sale.model.js';

export const getSales = async (req, res) => {
    try {
        const sales = await sale.findAll()
        res.json(sales)
    } catch (error) {
        return res.status(500).json({message : error.message})        
    }
}


export const createSale = async(req, res) => {
        const Sub_Total = 0.0
        const Total = 0.0
        const { Venta_Rapida, Descuento} = req.body;
    try {
        const newSale = await sale.create({
            Venta_Rapida,   
            Descuento,
            Sub_Total,
            Total
        })

        res.json(newSale)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

