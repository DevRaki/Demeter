import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import '../sales_css/sales.css'
import ReactPaginate from 'react-paginate';

function Sales() {

    const [List_Sales, setList_Sales] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; 

    useEffect(() => {
        axios.get("http://localhost:5000/sale").then((response) => {
            const sortedSales = response.data.sort((a, b) => b.ID_VENTA - a.ID_VENTA);
            setList_Sales(sortedSales);
        })
    }, []);
    function handlePageChange(selectedPage) {
        setCurrentPage(selectedPage.selected);
    }

    function getSale() {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
    

        
        return List_Sales.slice(startIndex, endIndex).map((value, key) => (
            <tr> 
                <td scope="row">{value.ID_VENTA}</td> 
                <td>{value.Sub_Total}</td>  
                <td>{value.Descuento}</td>    
                <td>{value.Total}</td>    
                <td>{value.ID_MESERO}</td>    
                <td>
                    <a href={`/sale_detail/${value.ID_VENTA}`}><span className="icon">&#128065;</span></a>
                </td>
                <td>{value.Estado ? 'Pendiente' : 'Pagado'}</td>
            </tr>
        ))
        
    }
    const click = async () => {
        try {
          const response = await axios.post("http://localhost:5000/sale", {
            Venta_Rapida : 1,
            Descuento : 0.0
          });
          console.log("gols")
          const { ID_VENTA } = response.data;
          window.location.href = `http://localhost:5173/sale_creation/${ID_VENTA}`;
          console.log(formValues);
        } catch (error) {
          console.log(error);
        }
      };
    

    return (
        <div className='Sales'>
            <div className='Title'>
                <h1 className='sale-Title'>Ventas</h1>
            </div>
         <div className="button-cont">
       
          <button className='New_saleButton' onClick={() => click()}>Nueva venta</button>
        
         </div>
         <div className="button-waiter">
        <Link to="/waiter_form">
          <button className='New_saleButton'>Regristrar Mesero</button>
        </Link>
         </div>
        <div className="sale_table">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Total</th>
                    <th scope="col">Mesero</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                {getSale()} 
            </tbody>
        </table>
        </div>
        <div className="pagination-container">
        <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={Math.ceil(List_Sales.length / itemsPerPage)}
                onPageChange={handlePageChange}
                containerClassName={'pagination'}
                activeClassName={'active'}
                previousClassName={'pagination-item'}
                nextClassName={'pagination-item'}
                pageClassName={'pagination-item'}
                breakClassName={'pagination-item'}
                disabledClassName={'pagination-disabled'}
                
            />
            </div>
        </div>
    )
}

export default Sales;