import React, { useState } from 'react';
import './FormSale.css';
import axios from 'axios';
import {Link} from 'react-router-dom'


function SaleForm() {
  const [formValues, setFormValues] = useState({
    venta_Rapida: false,
    Descuento: 0,
    ID_MESERO: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    if (name === 'venta_Rapida' && checked) {
      const { ID_MESERO, ...restWithoutMesero } = formValues;
      setFormValues({
        ...restWithoutMesero,
        [name]: newValue
      });
    } else {
      setFormValues({
        ...formValues,
        [name]: newValue
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/sale", formValues);
      const { ID_VENTA } = response.data;
      console.log('Form Values:', formValues);
      console.log('ID_VENTA:', ID_VENTA);
      window.location.href = `http://localhost:5173/sale_creation/${ID_VENTA}`;
      console.log(formValues);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sale-form-container">
      <div className="back">
           <Link to="/sales">
           <button className="back-button">
                 &#8592; Regresar
            </button>
            </Link>
           </div>
      <h1>Nueva Venta</h1>
      <form onSubmit={onSubmit}>
        <label>
          <input
            type="checkbox"
            name="venta_Rapida"
            checked={formValues.venta_Rapida}
            onChange={handleInputChange}
          />
          Venta rápida
        </label>
        {!formValues.venta_Rapida && (
          <div className="form-field">
            <label>ID Mesero:</label>
            <input
              type="text"
              name="ID_MESERO"
              value={formValues.ID_MESERO}
              onChange={handleInputChange}
            />
          </div>
        )}
        <div className="form-field">
          <label>Descuento:</label>
          <input
            type="number"
            name="Descuento"
            value={formValues.Descuento}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-button" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
}

export default SaleForm;