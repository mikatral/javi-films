import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Edicao from './pages/Edicao';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/editar/:id" element={<Edicao />} />
      </Routes>
    </Router>
  );
}

export default App;
