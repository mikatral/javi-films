import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>🎬 JaviFilms</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/cadastro">Cadastrar Filme</Link>
      </nav>
    </header>
  );
}
