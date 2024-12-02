import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>S/ {product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            Ver detalles
          </Link>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
