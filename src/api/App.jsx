import { useState } from 'react';
import Card from '../Components/Card';
import Menu from '../Components/Menu'; // Importando Menu
import Header from '../Components/Header'; // Importando Cabeçalho
import Footer from '../Components/Footer'; // Importando Rodapé
import React from 'react';
import "../styles/App.css"

function App() {
  return (
    <>
      <Menu /> {/* Adicionando Menu no topo */}
      <Header/> {/* Adicionando Cabeçalho abaixo do Menu */}
      <main>
      <div className="about">
  <p>Bem-vindo ao Pandaflix! Somos uma base de dados online que reúne informações sobre filmes de diversos gêneros. Servindo como uma espécie de enciclopédia virtual, nós disponibilizamos uma vasta lista de filmes com informações sobre título, diretor, data de lançamento, e avaliação. Se você é um fã de entretenimento em busca de novidades de forma acessível, o Pandinha irá ajudá-lo a encontrar o que você está a fim e abrir seus olhos para novas possibilidades.
  </p>
</div>
        <Card /> {/* Exibindo o componente de filmes */}
      </main>
      <Footer /> {/* Adicionando Rodapé no final */}
    </>
  );
}

export default App;