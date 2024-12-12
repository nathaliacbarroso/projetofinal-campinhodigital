import React, { useState, useEffect } from 'react';
import '../styles/Header.css'; // Estilos do Header

// Imagens do carrossel e seus respectivos links
const carrouselImages = [
  {
    url: 'src/img/c.png',
    link: '/filmes/1',
  },  
  {
      url: 'https://64.media.tumblr.com/43b1c2d952ea83472d3ea4126b6636c8/0f6d3531b95bdd24-24/s2048x3072/c4d4d1584fa707dd801507dfaca6bcdc1fe72b2d.jpg',
      link: '/filmes/1', // Link para a página desejada
      text: 'Filme 2 - Aventura',
    },
    {
      url: 'src/img/c3.png',
      link: '/filmes/2',
      text: 'Filme 3 - Aventura',
    },
    {
      url: 'https://64.media.tumblr.com/2c6811fb0c36f84fab5200068cb6dd48/c44dfeb911555bc8-c4/s1280x1920/d17701b29339cb04aa74a8dff66c505b1f6dcdad.pnj',
      link: '/filmes/3',
      text: 'Filme 4 - Aventura',
    },
  ]; // Colocar todos os dados do carrosel (imagens, links e textos)
  
  const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para o índice da imagem atual
  
    // Função para avançar para a próxima imagem
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carrouselImages.length);
    };
  
    // Função para voltar para a imagem anterior
    const prevImage = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + carrouselImages.length) % carrouselImages.length
      );
    };
  
    // Altere a imagem a cada 5 segundos
    useEffect(() => {
      const interval = setInterval(nextImage, 7000); // Troca a imagem a cada 7 segundos
      return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    }, [currentImageIndex]); // << adicionar o currentImageIndex como dependencia do array no useEffect para evitar o bug de passar de imagem após os 7 segundos mesmo já tendo trocado de slide no meio do tempo.
  
    return (
      <div className="header">
        {/* Imagem de fundo com texto sobreposto */}
        <a href={carrouselImages[currentImageIndex].link}>
        <div
          className="header-background"
          style={{
            backgroundImage: `url(${carrouselImages[currentImageIndex].url})`,
          }} // Define a imagem de fundo dinamicamente
        >
          {/* <div className="header-content">*/}
            {/* Texto sobre a imagem */}
            {/*<h2>{carrouselImages[currentImageIndex].text}</h2> */}
            <p></p> {/* Se eu quiser escrever algo sobre o carrossel */}
          {/*</div>*/}
        </div> 
        </a>
  
        {/* Botões de navegação */}
        <button onClick={prevImage} className="prev-button">←</button>
        <button onClick={nextImage} className="next-button">→</button>
  
        {/* Link para a imagem com navegação */}
       

       {/* ************* 
          No mobile está duplicado pois o código abaixo renderiza uma imagem tambem.
          Para adicionar um link ao slide sem duplicar basta remover o código abaixo, e adicionar a
          tag <a> envolvendo a div com a class "header-background" como implementado no exemplo acima
        *********** */}





        {/* <a
          href={carrouselImages[currentImageIndex].link} // Link para a página associada à imagem
          target="_blank" // Abre o link em uma nova aba
          rel="noopener noreferrer" // Segurança ao abrir em nova aba
          className="image-link"
        >
          <img
            src={carrouselImages[currentImageIndex].url}
            alt="Carrossel"
            className="carrousel-image"
          />
        </a> */}
      </div>
    );
  };

  export default Header;