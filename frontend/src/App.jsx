// src/App.jsx - VERSÃO FINAL (SEM PÁGINA /cursos)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Páginas principais
import HomePage from "./pages/HomePage";
import FormacaoPage from "./pages/FormacaoPage";
import EscolaPage from "./pages/EscolaPage";
import EQAVETPage from "./pages/EQAVETPage";
import ErasmusPage from "./pages/ErasmusPage";
import NoticiasPage from "./pages/NoticiasPage";
import ContactPage from "./pages/ContactPage";
import AlumniPage from "./pages/AlumniPage";

// Páginas de detalhes (APENAS para detalhe de curso, não listagem)
import CursoDetalhe from "./pages/Cursos/CursoDetalhe";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            {/* Página inicial */}
            <Route path="/" element={<HomePage />} />

            {/* Páginas principais */}
            <Route path="/formacao" element={<FormacaoPage />} />
            <Route path="/escola" element={<EscolaPage />} />
            <Route path="/eqavet" element={<EQAVETPage />} />
            <Route path="/erasmus" element={<ErasmusPage />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/alumni" element={<AlumniPage />} />

            {/* NOTÍCIAS - SÓ LISTAGEM */}
            <Route path="/noticias" element={<NoticiasPage />} />

            {/* CURSOS - APENAS DETALHE (não temos mais listagem em /cursos) */}
            <Route path="/cursos/:cursoId" element={<CursoDetalhe />} />

            {/* Fallback para página não encontrada */}
            <Route path="*" element={<div className="container"><h1>404 - Página não encontrada</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
