import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/Card.css'; // Se estiver em uma pasta de estilos, acima do componente


const Card = ({ data }) => {

    const [movies, setMovies] = useState([]); // Estado para armazenar os dados
    const apiUrl = 'https://ecom-back-strapi.onrender.com/api/movies'; //Colocar o URL da API de filmes que irei utilizar
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMjM3NjMzLCJleHAiOjE3MzU4Mjk2MzN9.9RAy5Y0N5i3RYzuNlV2g0LxtvQRUTFzRfaNsub9bj78'; // Inserir meu token para acesso

    const configurarCabecalhos = {
        'Authorization': token,
        'Content-Type': 'application/json'
    };

    // Função para buscar os dados da API de filmes
    const fetchData = async (endpoint) => {
        try {
            const response = await axios.get(`${endpoint}`, {
                headers: configurarCabecalhos
            });
            console.log(response.data.data); // Verificando os dados no console

            // IDs dos filmes que eu vou exibir
            const selectedIds = [15, 16, 2, 3, 5, 6, 7, 8, 10, 12, 14, 11];

            // Filtrando os filmes para exibir somente os IDs selecionados
            const filteredMovies = response.data.data.filter(movie => selectedIds.includes(movie.id));
            setMovies(filteredMovies); // Atualizando o estado com os filmes filtrados

        } catch (error) {
            console.error(`Erro ao buscar dados de ${endpoint}:`, error);

            setMessage("Erro ao carregar os filmes. Tente novamente mais tarde.");
        }
    };

    // Chama a função fetchData quando o componente é montado
    useEffect(() => {
        fetchData(apiUrl);
    }, []); // O array vazio garante que só seja chamado uma vez, no carregamento do componente

    return (
        <div className="card-container">
            {movies.length > 0 ? (
                <div className="grid">
                    {movies.map((movie) => (
                        <div className="card" key={movie.id}>
                            <img src={movie.attributes.poster} alt={movie.attributes.title} />
                            <h2>{movie.attributes.title}</h2>
                            <p>{movie.attributes.description}</p>
                            <p><strong>Genre:</strong> {movie.attributes.genre}</p>
                            <p><strong>Release Date:</strong> {movie.attributes.releaseDate}</p>
                            <p><strong>Rating:</strong> {movie.attributes.rating}</p>
                            <p><strong>Director:</strong> {movie.attributes.director}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Carregando filmes...</p>
            )}
        </div>
    );
}

export default Card;