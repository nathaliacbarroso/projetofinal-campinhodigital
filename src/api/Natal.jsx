import { useState } from 'react';
import ApiRed from '../Components/December'; //Importando December
import Menu from '../Components/Menu'; // Importando Menu
import Header from '../Components/Header'; // Importando Cabeçalho
import Footer from '../Components/Footer'; // Importando Rodapé
import React from 'react';

function Natal() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu /> {/* Adicionando Menu no topo */}
      <Header /> {/* Adicionando Cabeçalho abaixo do Menu */}
      <main>
        <div className="about"> {/* Modificado para remover o espaço */}
          <p>O Natal está chegando e o Pandaflix preparou algo especial para você! 🎄🌟 Que tal se envolver na magia dessa época com um Especial de Natal repleto de filmes clássicos que celebram o melhor do espírito natalino? Separamos 6 produções imperdíveis, como Esqueceram de Mim (1990), O Grinch (2000) e Um Conto de Natal (1984), que vão deixar o seu coração aquecido e cheio de alegria. ❤️🎬

São histórias que nos lembram do verdadeiro significado do Natal: o valor da família, a importância do amor ao próximo e a magia de estarmos juntos. Reúna a família, prepare um chocolate quente e aproveite esses filmes que vão tornar sua temporada de festas ainda mais encantadora!</p>
        </div>
        <ApiRed />
      </main>
      <Footer /> {/* Adicionando Rodapé no final */}
    </>
  );
}

export default Natal;