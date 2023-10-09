import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import '../sales_css/sales.css';  

function Sale_detail_creation({ updateTrigger }) {
  const { id } = useParams();
  const [listSales, setListSales] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [updateTrigger]);

  const fetchData = () => {
    axios
      .get(`http://localhost:5000/DetailWSale/${id}`)
      .then((response) => {
        setListSales(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const handleAdd = async (id) => {
    try {
      await axios.put(`http://localhost:5000/updateDetail_ADD/${id}`);
      fetchData();
    } catch (error) {
      console.log('Error adding quantity:', error);
    }
  };

  const handleSubtract = async (id) => {
    try {
      await axios.put(`http://localhost:5000/updateDetail_SUBSTRACT/${id}`);
      fetchData();
    } catch (error) {
      console.log('Error subtracting quantity:', error);
    }
  };

  const calculateTotal = () => {
    let sum = 0;
    listSales.forEach((value) => {
      sum += value.SubTotal;
    });
    return sum;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = listSales.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(listSales.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="details_creation">
        
      <div className="Title_detail">
        <h1 className="sale-Title-Detail">Venta Numero {id}</h1>
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
          {currentItems.map((value, key) => (
            <tr key={key}>
              <td scope="row">{value.ID_PRODUCTO}</td>
              <td scope="row">
                <button className="add_cuantity" onClick={() => handleSubtract(value.ID_DETALLE_VENTA)}>
                  <AiOutlineMinusCircle />
                </button>
                {value.Cantidad}
                <button className="subtract_cuantity" onClick={() => handleAdd(value.ID_DETALLE_VENTA)}>
                  <AiOutlinePlusCircle />
                </button>
              </td>
              <td scope="row">{value.SubTotal}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination text-center mt-4 mx-100 ml-100">
        <div className="pagination_c">
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-1 px-3 py-1 rounded ${currentPage === number ? 'bg-orange-700 text-white' : 'bg-orange-400 hover:bg-orange-600 text-black'}`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
      <div className="total">
        <h1>Total: {calculateTotal()}</h1>
      </div>
    </div>
  );
}

export default Sale_detail_creation;
