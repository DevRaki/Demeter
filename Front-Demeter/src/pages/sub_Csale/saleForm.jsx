import React, { useState } from 'react';
import './FormSale.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'


function SaleForm() {


  let { id } = useParams(); 
  const intID_VENTA = parseInt(id, 10);

  const [formValues, setFormValues] = useState({
    venta_Rapida: false,
    Descuento: 0,
    ID_MESERO: null
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormValues({
      ...formValues,
      [name]: newValue,
    });
    updateFormData();
  };

  const updateFormData = async () => {
    await axios.put(`http://localhost:5000/salesParams/${intID_VENTA}`, formValues)
      .then(response => {
        console.log('Datos actualizados con éxito', response.data);
      })
      .catch(error => {
        console.error('Error al actualizar los datos', error);
      });
  };

  return (
    <div className="sale-form-container">
      <form>
        <label>Venta rápida  
          <input
            type="checkbox"
            name="venta_Rapida"
            checked={formValues.venta_Rapida}
            onChange={handleInputChange}
          />
            
        </label>
        
          {!formValues.venta_Rapida && (
            <label>ID Mesero:</label>
          )}
          {!formValues.venta_Rapida && (
            <input
              type="text"
              name="ID_MESERO"
              value={formValues.ID_MESERO}
              onChange={handleInputChange}
            />
          )}
       
          <label>Descuento:</label>
          <input
            type="number"
            name="Descuento"
            value={formValues.Descuento}
            onChange={handleInputChange}
          />
         <button
            type="button"
            onClick={handleInputChange}
            className="custom-button"
          >
            Guardar
          </button>
      </form>
    </div>
  );
}

export default SaleForm;