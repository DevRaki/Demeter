import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../sales_css/sales.css'

function Sales() {

    const [List_Sales, setList_Sales] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/sale").then((response) => {
            setList_Sales(response.data)
        })
    }, [])

    function getSale() {
        return List_Sales.map((value, key) => (
            <tr> 
                <th scope="row">{value.ID_VENTA}</th> 
                <td>{value.Sub_Total}</td>  
                <td>{value.Descuento}</td>    
                <td>{value.Total}</td>    
                <td>{value.ID_MESERO}</td>    
                <td>
                    <a href={`/sale_detail/${value.ID_VENTA}`}><span className="icon">&#128065;</span></a>
                </td>
            </tr>
        ))
    }

    return (
        <div className='Sales'>
        <div className="button-cont">
        <Link to="/sale_form">
          <button>Nueva venta</button>
        </Link>
         </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Total</th>
                    <th scope="col">Mesero</th>
                    <th scope="col">Detalles</th>
                </tr>
            </thead>
            <tbody>
                {getSale()} 
            </tbody>
        </table>
        </div>
    )
}

export default Sales;