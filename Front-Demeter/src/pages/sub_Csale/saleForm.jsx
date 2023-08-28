 
import { useState } from 'react';
import './SaleForm.css'
import axios from 'axios';




function SaleForm() {
  const [formValues, setFormValues] = useState({
    venta_Rapida: false,
    Descuento: '',
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

  const onSubmit = (data) =>{
    data.preventDefault()
    axios.post("http://localhost:5000/sale", formValues ).then((response) =>{
      console.log(response.data)
      console.log("xdnt")
    });
    console.log(formValues)
  }

  return (
    <div className="sale-form-container">
      <h1>Formulario Simple</h1>
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
            value={formValues.descuento}
            onChange={handleInputChange}
          />
        </div>
        <button className="submit-button" type="submit">Enviar</button>
      </form>
    </div>
  );
}


export default SaleForm;
