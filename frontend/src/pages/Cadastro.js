import { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Cadastro() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo || !categoria || !imagem) {
      alert('Preencha todos os campos!');
      return;
    }

    try {
      await api.post('/filmes', { titulo, categoria, imagem });
      alert('Filme cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
  console.error('Erro ao cadastrar filme:', error.response?.data || error.message);
  alert('Erro ao cadastrar filme!');
}

  };

  return (
    <div className="container">
      <h2>Cadastrar Novo Filme</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Categoria:</label>
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>URL da Imagem:</label>
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </div>

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
