import { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {
    try {
      const response = await api.get('/filmes');
      setFilmes(response.data);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
    }
  }

  async function excluirFilme(id) {
    if (window.confirm('Tem certeza que deseja excluir este filme?')) {
      try {
        await api.delete(`/filmes/${id}`);
        alert('Filme excluído com sucesso!');
        carregarFilmes();
      } catch (error) {
        console.error('Erro ao excluir filme:', error);
        alert('Erro ao excluir filme!');
      }
    }
  }

  return (
    <div className="container">
      <h2>🎬 Filmes Cadastrados</h2>
      {filmes.length === 0 ? (
        <p>Nenhum filme encontrado.</p>
      ) : (
        <div className="lista-filmes">
          {filmes.map((filme) => (
            <div className="card-filme" key={filme._id}>
              <img
                src={
                  filme.imagem && filme.imagem.startsWith('http')
                    ? filme.imagem
                    : 'https://via.placeholder.com/120x180?text=Sem+Imagem'
                }
                alt={filme.titulo}
                width="120"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/120x180?text=Erro+na+Imagem';
                }}
              />
              <div className="info-filme">
                <h3>{filme.titulo}</h3>
                <p>{filme.categoria}</p>
                <div className="acoes">
                  <Link to={`/editar/${filme._id}`}>Editar</Link>
                  <button onClick={() => excluirFilme(filme._id)}>Excluir</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
