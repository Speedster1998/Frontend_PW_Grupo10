import React, { useState } from 'react';

const CartPage = ({ cartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <p>No hay artículos en el carrito.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt={item.name} />
              <div>
                <h2>{item.name}</h2>
                <p>Precio: S/ {item.price}</p>
                <p>Categoría: {item.category}</p>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <p><strong>Total:</strong> S/ {totalPrice}</p>
          </div>
          <h3>Opciones de Pago</h3>
          <form>
            <div>
              <input
                type="radio"
                id="creditCard"
                name="paymentMethod"
                value="creditCard"
                onChange={() => setPaymentMethod('creditCard')}
              />
              <label htmlFor="creditCard">Tarjeta de Crédito/Débito</label>
            </div>
            <div>
              <input
                type="radio"
                id="cashOnDelivery"
                name="paymentMethod"
                value="cashOnDelivery"
                onChange={() => setPaymentMethod('cashOnDelivery')}
              />
              <label htmlFor="cashOnDelivery">Pago contra entrega</label>
            </div>
            {paymentMethod === 'creditCard' && (
              <>
                <div className="form-group">
                  <label htmlFor="cardNumber">Número de Tarjeta</label>
                  <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="123" />
                </div>
                <div className="form-group">
                  <label htmlFor="cardHolder">Nombre del Titular</label>
                  <input type="text" id="cardHolder" placeholder="Nombre Completo" />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Fecha de Vencimiento</label>
                  <input type="text" id="expiryDate" placeholder="MM/AA" />
                </div>
              </>
            )}
            <div className="form-group">
              <label htmlFor="deliveryAddress">Dirección de Entrega</label>
              <input type="text" id="deliveryAddress" placeholder="Ingrese su dirección de entrega" required />
            </div>
            <button type="button" onClick={() => alert('¡Compra realizada exitosamente!')}>
              Pagar
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CartPage;