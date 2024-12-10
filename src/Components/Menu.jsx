import React from 'react';
import '../styles/Menu.css'; // Estilos do Menu

const Menu = () => {
  return (
    <header className="menu">
      <div className="logo">
        <img src="src/img/logop6.png" alt="Logo My Movie App" className="logo-img" />
      </div>
      <nav>
        <ul>
          <li><a href="/home">Início</a></li>
          <li><a href="/red">Dezembro Vermelho</a></li>
          <li><a href="/natal">Especial Natalino</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;