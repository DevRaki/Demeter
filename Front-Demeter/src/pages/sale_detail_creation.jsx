import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom"
import '../sales_css/sales.css'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Sale_detail_creation(updateTrigger ) {
    let{id} = useParams()
    let total = 0
    const [List_Sales, setList_Sales] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/DetailWSale/${id}`).then((response) => {
            setList_Sales(response.data)
        })
    }, [updateTrigger])
    const ADD = async (id) => {
        try {
            await axios.put(`http://localhost:5000/updateDetail_ADD/${id}`);
            
        } catch (error) {
            console.log(error);
            console.log(id)
        }
    };

    const SubsTract = async (id) => {
        try {
            await axios.put(`http://localhost:5000/updateDetail_SUBSTRACT/${id}`);
            
        } catch (error) {
            console.log(error);
            console.log(id)
        }
    };

    function getSale() {
        List_Sales.map((value, key) => (
            total += value.SubTotal
        ))
        return List_Sales.map((value, key) => (
            <tr> 
                <td scope="row">{value.ID_PRODUCTO}</td> 
                <td scope="row" ><button className='add_cuantity' onClick={() => SubsTract(value.ID_DETALLE_VENTA)}><AiOutlineMinusCircle/></button>{value.Cantidad} <button className='subtract_cuantity' onClick={() => ADD(value.ID_DETALLE_VENTA)}><AiOutlinePlusCircle/></button> </td> 
                <td scope='row'>{value.SubTotal}</td>    
            </tr>
        ))
    }

    

    return (
        <div className='details_creation'>
           <div className="back">
           <Link to="/sales">
           <button className="back-button">
                 &#8592; Regresar
            </button>
            </Link>
           </div>
            <div className='Title_detail'>
                <h1 className='sale-Title-Detail'>Venta Numero {id}</h1>
            </div>
        <table className="table_detail">
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">SubTotal</th>
                </tr>
            </thead>
            <tbody>
                {getSale()} 
            </tbody>
        </table>
            <div className="total">
                <h1>Total: {total}</h1>
            </div>
        </div>
    )

    
}


export default Sale_detail_creation;