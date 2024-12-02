import React from 'react';
import logo from '../assets/images/HP_logo.png';
import cartIcon from '../assets/images/carrito.png';

const Navbar = ({ openCartPage }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: '8px 25px',
    }}>
      <div>
        <img src={logo} alt="HP Logo" style={{ height: '50px' }} />
      </div>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
        alignItems: 'center',
      }}>
        <li><a href="#laptops" style={{ textDecoration: 'none', color: 'black' }}>Laptops</a></li>
        <li><a href="#desktops" style={{ textDecoration: 'none', color: 'black' }}>Desktops</a></li>
        <li><a href="#impresoras" style={{ textDecoration: 'none', color: 'black' }}>Impresoras</a></li>
        <li><a href="#monitores" style={{ textDecoration: 'none', color: 'black' }}>Monitores</a></li>
        <li>
          <button onClick={openCartPage} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <img src={cartIcon} alt="Carrito de compras" style={{ height: '32px' }} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
