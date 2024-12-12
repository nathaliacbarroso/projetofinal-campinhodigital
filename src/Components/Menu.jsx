import React from 'react';
import '../styles/Menu.css'; // Estilos do Menu
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <header className="menu">
      <div className="logo">
        <img src="src/img/logo.png" alt="Pandaflix" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/red">Dezembro Vermelho</Link></li>
          <li><Link to="/sobre">Sobre Nós</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;