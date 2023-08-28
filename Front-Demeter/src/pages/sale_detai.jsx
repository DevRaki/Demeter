import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import '../sales_css/sales.css'

function Sale_detail() {
    let{id} = useParams()

    const [List_Sales, setList_Sales] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/DetailWSale/${id}`).then((response) => {
            setList_Sales(response.data)
        })
    }, [])

    function getSale() {
        return List_Sales.map((value, key) => (
            <tr> 
                <th scope="row">{value.ID_DETALLE_VENTA}</th> 
                <th scope="row">{value.ID_PRODUCTO}</th> 
                <th scope="row">{value.Cantidad}</th> 
                <th scope='row'>{value.SubTotal}</th>    
            </tr>
        ))
    }

    return (
        <div className='Sales'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">SubTotal</th>
                </tr>
            </thead>
            <tbody>
                {getSale()} 
            </tbody>
        </table>
        </div>
    )
}

export default Sale_detail;