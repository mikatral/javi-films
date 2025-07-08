import { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edicao() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function carregarFilme() {
      try {
        const response = await api.get(`/filmes/${id}`);
        const { titulo, categoria, imagem } = response.data;
        setTitulo(titulo);
        setCategoria(categoria);
        setImagem(imagem);
      } catch (error) {
        console.error('Erro ao buscar filme:', error);
      }
    }

    carregarFilme();
  }, [id]);

  async function handleSubmit(e) {
  e.preventDefault();

  if (!titulo || !categoria || !imagem) {
    alert('Preencha todos os campos!');
    return;
  }

  try {
    await api.put(`/${id}`, { titulo, categoria, imagem });
    alert('Filme atualizado com sucesso!');
    navigate('/');
  } catch (error) {
    console.error('Erro ao atualizar filme:', error);
    alert('Erro ao atualizar filme!');
  }
}


  return (
    <div className="container">
      <h2>Editar Filme</h2>
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

        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}
