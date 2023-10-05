
import Sale_detail_creation from '../sale_detail_creation';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import  './saleCreations.css'
import SaleForm from './saleForm';


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
  return (
    <div>
      {List_Products.map((value, key) => (
        <span key={value.ID_PRODUCTO}>
          <button className="product_button" onClick={() => createDetail(value.ID_PRODUCTO)}>
            {value.Nombre_Producto}
          </button>
          {(key + 1) % 3 === 0 && <br />} 
        </span>
      ))}
    </div>
  );
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

      <div className="formS">
          <SaleForm/>
      </div>

      <div className="left-side">
          <div className="detail_table">
            <Sale_detail_creation  updateTrigger={updateTrigger} />
          </div>
      </div>
      <div className="rigth-side"> 
        {getProduct()}    
      
      </div>
    </div>



  );
}

export default SaleCreation;