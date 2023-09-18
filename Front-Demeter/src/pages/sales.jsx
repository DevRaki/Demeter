import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../sales_css/sales.css';
import ReactPaginate from 'react-paginate';
import { AiFillEdit, AiOutlineEye } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import PaymentMethodModal from './components/PaymentMethodModal';

function Sales() {
    const [sales, setSales] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(5);
    const [estadoFilter, setEstadoFilter] = useState('all');
    const [selectedSaleId, setSelectedSaleId] = useState(null);
    const [waiterNames, setWaiterNames] = useState({});
    const [waiterFilter, setWaiterFilter] = useState('');

    useEffect(() => {
        const fetchData = async () => {
          try {
            const salesResponse = await axios.get("http://localhost:5000/sale");
            const sortedSales = salesResponse.data.sort((a, b) => b.ID_VENTA - a.ID_VENTA);
            setSales(sortedSales);
      
            const waiterNamesData = {};
            for (const sale of sortedSales) {
              const waiterID = sale.ID_MESERO;
              if (waiterID !== null && !waiterNamesData[waiterID]) {
                try {
                  const response = await axios.get(`http://localhost:5000/GetWaiter/${waiterID}`);
                  waiterNamesData[waiterID] = response.data; 
                } catch (error) {
                  console.error(`Error fetching waiter name for ID ${waiterID}:`, error);
                }
              }
            }
            setWaiterNames(waiterNamesData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    const renderWaiterName = (waiterID) => {
        const waiterName = waiterNames[waiterID];
        return waiterName || 'No assigned waiter';
      };

    const openModal = (id) => {
        setSelectedSaleId(id);
    };

    const closeModal = () => {
        setSelectedSaleId(null);
    };

    const handlePaymentMethodSelect = (method) => {
        console.log('Selected payment method:', method);
        setSelectedSaleId(null); 
        window.location.reload()
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleEstadoFilterChange = (e) => {
        setEstadoFilter(e.target.value);
    };

    const handleWaiterFilterChange = (e) => {
        setWaiterFilter(e.target.value);
    };

    const filterSalesByEstado = (sale) => {
        const estadoMatch = estadoFilter === 'all' || (sale.Estado ? 'Pendiente' : 'Pagado') === estadoFilter;
        const waiterNameMatch = waiterFilter === '' || renderWaiterName(sale.ID_MESERO).toLowerCase().includes(waiterFilter.toLowerCase());
        return estadoMatch && waiterNameMatch;
    };

    const filteredSales = sales.filter(filterSalesByEstado);

    const offset = currentPage * itemsPerPage;

    const currentPageData = filteredSales
      .slice(offset, offset + itemsPerPage)
      .map((sale, index) => (
        <tr key={index}>
          <td scope="row">{sale.ID_VENTA}</td>
          <td>{sale.Sub_Total}</td>
          <td>{sale.Descuento}</td>
          <td>{sale.Total}</td>
          <td>{sale.ID_MESERO ? renderWaiterName(sale.ID_MESERO) : 'Venta Rapida'}</td>
          <td>{sale.Estado ? 'Pendiente' : 'Pagado'}</td>
          <td>
            <div className="edit-icons">
              <Link to={`/sale_creation/${sale.ID_VENTA}`}><AiFillEdit /></Link>
              <Link to={`/sale_detail/${sale.ID_VENTA}`}><AiOutlineEye /></Link>
              <Link to={`/sale_detail/${sale.ID_VENTA}`}><MdOutlineCancel /></Link>
              <button onClick={() => openModal(sale.ID_VENTA)}>
                <FaRegMoneyBillAlt />
              </button>
            </div>
          </td>
        </tr>
      ));

    const click = async () => {
        try {
            const response = await axios.post("http://localhost:5000/sale", {
                Venta_Rapida: 1,
                Descuento: 0.0
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
            <h1 className='sale_Title'>Ventas</h1>
            <div className="button-cont">
                <button className='New_saleButton' onClick={() => click()}>Nueva venta</button>
            </div>
            <div className="filter_container">
                <label htmlFor="estado">Estado:</label>
                <select
                    id="estado"
                    value={estadoFilter}
                    onChange={handleEstadoFilterChange}
                >
                    <option value="all">Todos</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Pagado">Pagado</option>
                </select>
            </div>
            <div className="filter_container">
                <label htmlFor="waiterFilter">mesero: </label>
                <input
                    type="text"
                    id="waiterFilter"
                    value={waiterFilter}
                    onChange={handleWaiterFilterChange}
                />
            </div>
            <div className="sale_table">
                <table className="table_sales">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">SubTotal</th>
                            <th scope="col">Descuento</th>
                            <th scope="col">Total</th>
                            <th scope="col">Mesero</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData}
                    </tbody>
                </table>
            </div>
            <div className="pagination-container">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(filteredSales.length / itemsPerPage)}
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
            {selectedSaleId !== null && (
                <PaymentMethodModal
                    isOpen={true}
                    onRequestClose={closeModal}
                    onSelectPaymentMethod={handlePaymentMethodSelect}
                    id={selectedSaleId}
                />
            )}
        </div>
    )
}

export default Sales;
