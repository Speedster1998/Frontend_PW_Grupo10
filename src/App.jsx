import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import HelpFooter from './components/helpFooter';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import CartPage from './screens/CartPage';
import ProductPage from './screens/ProductPage';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/productos')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error al obtener productos:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openCartPage = () => {
    const newWindow = window.open('', '_blank');
    if (newWindow) {
      const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

      newWindow.document.write(`
        <html>
          <head>
            <title>Carrito de Compras</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .container {
                max-width: 800px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              }
              .cart-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px;
                border-bottom: 1px solid #ddd;
              }
              .cart-item img {
                width: 80px;
                height: 80px;
                object-fit: cover;
              }
              .cart-footer {
                margin-top: 20px;
                text-align: right;
                font-size: 18px;
              }
              .total-price {
                font-weight: bold;
              }
              .form-group {
                margin-bottom: 15px;
              }
              .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: bold;
              }
              .form-group input {
                width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 14px;
              }
              button {
                background-color: #007bff;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 16px;
                margin-top: 15px;
              }
              button:hover {
                background-color: #0056b3;
              }
              .hidden {
                display: none;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>Carrito de Compras</h1>
              ${
                cartItems.length === 0
                  ? '<p>No hay artículos en el carrito.</p>'
                  : `
                    <ul style="list-style: none; padding: 0;">
                      ${cartItems
                        .map(
                          (item) => `
                            <li class="cart-item">
                              <div>
                                <img src="${item.imageUrl}" alt="${item.name}" />
                              </div>
                              <div>
                                <h2>${item.name}</h2>
                                <p>Precio: S/ ${item.price.toFixed(2)}</p>
                                <p>Categoría: ${item.category}</p>
                              </div>
                            </li>
                          `
                        )
                        .join('')}
                    </ul>
                    <div class="cart-footer">
                      <p class="total-price">Total: S/ ${totalPrice}</p>
                    </div>
                    <hr />
                    <h3>Opciones de Pago</h3>
                    <form>
                      <div>
                        <input type="radio" id="creditCard" name="paymentMethod" value="creditCard" onclick="togglePaymentFields(true)" />
                        <label for="creditCard">Tarjeta de Crédito/Débito</label>
                      </div>
                      <div>
                        <input type="radio" id="cashOnDelivery" name="paymentMethod" value="cashOnDelivery" onclick="togglePaymentFields(false)" />
                        <label for="cashOnDelivery">Pago contra entrega</label>
                      </div>
                      <div id="cardFields" class="hidden">
                        <div class="form-group">
                          <label for="cardNumber">Número de Tarjeta</label>
                          <input type="text" id="cardNumber" placeholder="0000 0000 0000 0000" autocomplete="off" />
                        </div>
                        <div class="form-group">
                          <label for="cvv">CVV</label>
                          <input type="text" id="cvv" placeholder="123" />
                        </div>
                        <div class="form-group">
                          <label for="cardHolder">Nombre del Titular</label>
                          <input type="text" id="cardHolder" placeholder="Nombre Completo" />
                        </div>
                        <div class="form-group">
                          <label for="expiryDate">Fecha de Vencimiento</label>
                          <input type="text" id="expiryDate" placeholder="MM/AA" />
                        </div>
                      </div>
                      <hr />
                      <div class="form-group">
                        <label for="deliveryAddress">Dirección de Entrega</label>
                        <input type="text" id="deliveryAddress" placeholder="Ingrese su dirección de entrega" required />
                      </div>
                      <button type="button" onclick="alert('¡Pago procesado exitosamente!')">
                        Pagar
                      </button>
                    </form>
                  `
              }
            </div>
            <script>
              function togglePaymentFields(showCardFields) {
                const cardFields = document.getElementById('cardFields');
                if (showCardFields) {
                  cardFields.classList.remove('hidden');
                } else {
                  cardFields.classList.add('hidden');
                }
              }
            </script>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <HelpFooter />
              <Navbar openCartPage={openCartPage} />
              <HeroSection />
              <Sponsors />
              <h2>Nuestros Productos</h2>
              <div className="store">
                <ProductList products={products} addToCart={addToCart} />
                <Cart
                  cartItems={cartItems}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                  navigateToCart={() => window.location.replace('/cart')}
                />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;