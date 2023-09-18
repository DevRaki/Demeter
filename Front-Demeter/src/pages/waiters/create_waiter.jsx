import React, { useState } from 'react';
import axios from 'axios';
import '../waiters/create_w.css'
import {Link} from 'react-router-dom'


function WaiterForm() {
  const [formData, setFormData] = useState({
    Nombre: '',
    ID_RESTAURANTE: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/meseros', formData);
      console.log('Form data submitted:', formData);
      console.log('Response from server:', response.data);
      window.location.href = '/sales'
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="waiter-form-container">
        <div className="back">
           <Link to="/sales">
           <button className="back-button">
                 &#8592; Regresar
            </button>
            </Link>
           </div>
      <div className='Title'>
        <h1 className='sale-Title'>Registro de meseros</h1>
      </div>
      <div className="waiter_form">
  <form onSubmit={handleSubmit}>
    <div className="input-field">
      <label htmlFor="Nombre" className='input-waiter'>Nombre:  </label>
      <input
        type="text"
        id="Nombre"
        name="Nombre"
        value={formData.Nombre}
        onChange={handleInputChange}
      />
    </div>
    <div className="input-field">
      <label htmlFor="ID_RESTAURANTE" className='input-waiter'>ID Restaurante:  </label>
      <input
        type="text"
        id="ID_RESTAURANTE"
        name="ID_RESTAURANTE"
        value={formData.ID_RESTAURANTE}
        onChange={handleInputChange}
      />
    </div>
    <button className="submit_button" type="submit">Enviar</button>
  </form>
</div>
    </div>
  );
}

export default WaiterForm;