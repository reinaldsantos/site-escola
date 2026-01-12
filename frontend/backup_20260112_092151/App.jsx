import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import EscolaPage from './pages/EscolaPage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import FormacaoPage from './pages/FormacaoPage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import AlumniPage from './pages/AlumniPage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import ErasmusPage from './pages/ErasmusPage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import EQAVETPage from './pages/EQAVETPage';
import CursosGrid from './components/cursos/CursosGrid';
import CursoCard from './components/cursos/CursoCard';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/escola" element={<EscolaPage />} />
            <Route path="/formacao" element={<FormacaoPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/erasmus" element={<ErasmusPage />} />
            <Route path="/eqavet" element={<EQAVETPage />} />
            <Route path="/noticias" element={<div className="container"><h1>Notícias</h1></div>} />
            <Route path="/contactos" element={<div className="container"><h1>Contactos</h1></div>} />
            <Route path="/inscricao" element={<div className="container"><h1>Inscrição</h1></div>} />
          </Routes>
        </main>

        <footer style={{
          background: '#004a8f',
          color: 'white',
          padding: '3rem 0',
          marginTop: '4rem'
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem'
            }}>
              <div>
                <h3 style={{ color: '#ffd700', marginBottom: '1rem' }}>Escola Profissional do Fundão</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '300px' }}>
                  Excelência em Formação Profissional desde 1998
                </p>
              </div>

              <div>
                <h4 style={{ color: '#ffd700', marginBottom: '1rem' }}>Contactos</h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>geral@epf.edu.pt</p>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>+351 275 XXX XXX</p>
              </div>
            </div>

            <div style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.9rem'
            }}>
              © {new Date().getFullYear()} Escola Profissional do Fundão. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

