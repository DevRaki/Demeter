
import React from 'react';
import Modal from 'react-modal';
import './PaymentMethodModal.css'; 
import axios from 'axios';

Modal.setAppElement('#root'); 

function PaymentMethodModal({ isOpen, onRequestClose, onSelectPaymentMethod, id  }) {



  const pay = async () => {
    try {
        const response = await axios.put(`http://localhost:5000/paySale/${id}`);
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
};


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="payment-modal"
      overlayClassName="payment-modal-overlay"
    >
      <h2>Selecciona el método de pago</h2> 
      <div className="payment-options">
        <button onClick={() => {onSelectPaymentMethod('QR'), pay() }}>QR</button>
        <button onClick={() => {onSelectPaymentMethod('Tarjeta'), pay() }}>Tarjeta</button>
        <button onClick={() => {onSelectPaymentMethod('Efectivo'), pay() }}>Efectivo</button>
      </div>
    </Modal>
  );
}

export default PaymentMethodModal;
