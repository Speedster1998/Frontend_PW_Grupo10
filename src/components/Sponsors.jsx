import React from 'react';

const Sponsors = () => {
  return (
    <footer className='Sponsors' style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: '15px',
        marginBottom: '28px',
    }}>
      <div>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
        }}>
            <li style={{ marginLeft: '15px', marginRight: '15px' }}>
                <img src="https://www8.hp.com/content/dam/sites/worldwide/galactic-nav/OMEN-logo3.png" alt="omen" id="omen" style={{ height: '60px' }} />
                <figcaption>Potencia máxima para tus juegos</figcaption>
            </li>
            <li style={{ marginLeft: '15px', marginRight: '15px' }}>
                <img src="https://www8.hp.com/content/dam/sites/worldwide/galactic-nav/HYPER-X-logo7.png" alt="hyperx" id="hyperx" style={{ height: '60px' }} />
                <figcaption>Mejora tu experiencia de juego</figcaption>
            </li>
            <li style={{ marginLeft: '15px', marginRight: '15px' }}>
                <img src="https://mx-files.hptiendaenlinea.com/home/marcas-hp/ferrari-scuderia-symbol_v2.png" alt="ferrari" id="ferrari"
                    style={{ height: '30px', marginTop: '16px', marginBottom: '17px' }} />
                <figcaption>Somos el socio oficial de la Scuderia Ferrari</figcaption>
            </li>
            <li style={{ marginLeft: '15px', marginRight: '15px' }}>
                <img src="https://mx-files.hptiendaenlinea.com/home/marcas-hp/real-madrid-emblem_v2.png" alt="realMadrid" id="realMadrid"
                    style={{ height: '57px', marginBottom: '5px' }} />
                <figcaption>Somos el socio tecnológico del Real Madrid</figcaption>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Sponsors;