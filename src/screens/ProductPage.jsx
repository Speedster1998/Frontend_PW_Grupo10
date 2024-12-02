import React from 'react';

const ProductPage = ({ product }) => {
  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} style={{ width: '300px', marginBottom: '20px' }} />
      <p>Categoría: {product.category}</p>
      <p>Descripción: {product.description}</p>
      <p>Precio: S/ {product.price.toFixed(2)}</p>
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductPage;
