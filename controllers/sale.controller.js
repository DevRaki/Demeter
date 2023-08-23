import { sale } from '../models/sale.model.js';
import { detail_sale } from '../models/detail_sale.model.js';
import { where } from 'sequelize';

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
        const {Descuento} = req.body;
        const ID_METODO_PAGO = 1;
        const ID_MESERO = 0;
    try {
        const newSale = await sale.create({   
            Descuento,
            Sub_Total,
            Total, 
            ID_METODO_PAGO,
            ID_MESERO
        })

        res.json(newSale)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



export const updateSale = async(req, res) => {

    const {id} = req.params

    const sale = await sale.findByPk(id)
    try {
        sale.Total = detail_sale.findAll({
        where: {
            ID_VENTA : id 
        }
        })
        res.json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
   
}