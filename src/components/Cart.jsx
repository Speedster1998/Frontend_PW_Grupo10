import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, clearCart }) {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart">
      <h2>Tu Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay artículos en su carrito de compras.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="cart-item">
                  <img src={item.imageUrl} alt={item.name} />
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>S/ {item.price}.00</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-footer">
            <p>
              <strong>Total: S/{calculateTotal()}</strong>
            </p>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <button onClick={() => navigate('/cart')}>Comprar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;