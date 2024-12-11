import { useState } from 'react';
import December from 'src\Components\December.jsx'; //Importando December
import Menu from '../Components/Menu'; // Importando Menu
import Header from '../Components/Header'; // Importando Cabeçalho
import Footer from '../Components/Footer'; // Importando Rodapé
import React from 'react';

function Red() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu /> {/* Adicionando Menu no topo */}
      <Header/> {/* Adicionando Cabeçalho abaixo do Menu */}
      <main>
      <div className="Dezembro-Vermelho"> {/* Modificado para remover o espaço */}
  <p>
    O Dezembro Vermelho é dedicado à conscientização sobre o HIV/AIDS, com o objetivo de aumentar o conhecimento sobre prevenção, tratamento e direitos das pessoas vivendo com o vírus...
  </p>
</div>
        <Card /> {/* Exibindo o componente de filmes */}
      </main>
      <Footer /> {/* Adicionando Rodapé no final */}
    </>
  );
}

export default Red;