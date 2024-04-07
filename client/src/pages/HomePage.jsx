import React from 'react';
import '../css/dis.css';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
      <div className="home-container">
      <header>
        <div className="logo">Logo</div>
      </header>
      <section className="main-content">
        <h1 className='letras'>Bienvenido a BOGA </h1>
        <p className='letras'>Descubre nuestros servicios y cómo podemos ayudarte.</p>
        <button className='letras'>Ver más</button>
      </section>
      <footer>
        <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>

    )
}

export default HomePage;



