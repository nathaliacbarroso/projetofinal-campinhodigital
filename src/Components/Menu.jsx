import React from 'react';
import '../styles/Menu.css'; // Estilos do Menu

const Menu = () => {
  return (
    <header className="menu">
      <div className="logo">
        <img src="src/img/logo.png" alt="Pandaflix" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="home">Início</a></li>
          <li><a href="src\api\Red.jsx">Dezembro Vermelho</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;