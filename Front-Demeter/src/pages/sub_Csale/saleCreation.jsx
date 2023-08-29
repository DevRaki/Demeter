
import Sale_detail from '../sale_detai';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import  './saleCreations.css'
function SaleCreation() {

  let { id } = useParams(); 
  const intID_VENTA = parseInt(id, 10);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  

  const [List_Products, setList_Products] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/product").then((response) => {
        setList_Products(response.data)
    })
}, [])

function getProduct() {

  return List_Products.map((value, key) => (
      <th>
          <button className="button" onClick={() => {createDetail(value.ID_PRODUCTO), console.log}}>{value.Nombre_Producto}</button>
      </th>
      
  ))

  
}


  const createDetail = async (ID_PRODUCTO, ) => {
    try {
      const dataToSend = {
        Cantidad: 1,
        ID_VENTA: intID_VENTA,
        ID_PRODUCTO: ID_PRODUCTO,
      
      };
        const response = await axios.post("http://localhost:5000/detailSale",dataToSend);

        const update = await axios.put(`http://localhost:5000/sales/${intID_VENTA}`)

        setUpdateTrigger(!updateTrigger)


    } catch (error) {
      console.log(error);
    }
  };


  return (

    <div className="whole">
      <div className="left-side">
          <Sale_detail  updateTrigger={updateTrigger} />
      </div>
      <div className="rigth-side">
      <table className="table_p">
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                <tr>
                  {getProduct()}
                </tr> 
            </tbody>
        </table>
      </div>
    </div>



  );
}

export default SaleCreation;