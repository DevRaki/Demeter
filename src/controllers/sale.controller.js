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
        const { Venta_Rapida, Descuento , ID_MESERO} = req.body;
    try {
        const newSale = await sale.create({
            Venta_Rapida,   
            Descuento,
            Sub_Total,
            Total,
            ID_MESERO
        })

        res.json(newSale)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



export const updateSale = async(req, res) => {
    try {
    const {id} = req.params 
    let Sub_Total = 0
    const newSale = await sale.findByPk(id,{ include : [{model : detail_sale}]})
    for (const detail of newSale.DETALLE_VENTAs) {
       Sub_Total += detail.SubTotal
    }
    let total = Sub_Total
    await newSale.update({
        Sub_Total : Sub_Total,
        Total : total
    })

    res.json(newSale)
    } catch (error) { 
        return res.status(500).json({ message: error.message });
    }
}

export const getSalesWithDetails = async (req, res) =>{
    const {id} = req.params
    try {
        const query = await sale.findByPk(id, {include : detail_sale})
        res.json(query)    
    } catch (error) {
        return res.status(500).json({ message: error.message }); 
    }
    

}


export const updateSaleParams = async(req, res) => {
    try {
    const {id} = req.params
    const { Venta_Rapida, ID_MESERO, Descuento } = req.body
    const newSale = await sale.findByPk(id)
    await newSale.update({
        Venta_Rapida : Venta_Rapida,   
        Descuento : Descuento,
        ID_MESERO : ID_MESERO
    })

    res.json(newSale)
    } catch (error) { 
        return res.status(500).json({ message: error.message });
    }
}