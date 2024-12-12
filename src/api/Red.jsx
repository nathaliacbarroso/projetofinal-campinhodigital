import { useState } from 'react';
import ApiRed from '../Components/December'; //Importando December
import Menu from '../Components/Menu'; // Importando Menu
import Header from '../Components/Header'; // Importando Cabeçalho
import Footer from '../Components/Footer'; // Importando Rodapé
import React from 'react';

function Red() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu /> {/* Adicionando Menu no topo */}
      <Header /> {/* Adicionando Cabeçalho abaixo do Menu */}
      <main>
        <div className="about"> {/* Modificado para remover o espaço */}
          <p>Neste Dezembro Vermelho, mês de conscientização sobre a luta contra a Aids, o Pandaflix preparou uma seleção especial de filmes que discutem abertamente o impacto do HIV ao longo dos últimos 40 anos. Produções como Meu Querido Companheiro (1990) e Filadélfia (1993) retratam a realidade da infecção em uma época em que o diagnóstico era frequentemente associado a uma sentença de morte. Essas obras não apenas refletem sobre os desafios sociais, clínicos e comportamentais enfrentados por pessoas vivendo com HIV, mas também destacam a importância da conscientização e prevenção, especialmente entre as gerações mais jovens. Aproveite também nosso Especial de Natal, trazendo filmes que celebram a magia e o espírito natalino.</p>
        </div>
        <ApiRed />
      </main>
      <Footer /> {/* Adicionando Rodapé no final */}
    </>
  );
}

export default Red;