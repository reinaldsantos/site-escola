import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Páginas principais
import HomePage from "./pages/HomePage";
import FormacaoPage from "./pages/FormacaoPage";
import EscolaPage from "./pages/EscolaPage";
import EQAVETPage from "./pages/EQAVETPage";
import ErasmusPage from "./pages/ErasmusPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import AlumniPage from "./pages/AlumniPage";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas de curso
import CursoDetalhe from "./pages/Cursos/CursoDetalhe";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/formacao" element={<FormacaoPage />} />
            <Route path="/escola" element={<EscolaPage />} />
            <Route path="/eqavet" element={<EQAVETPage />} />
            <Route path="/erasmus" element={<ErasmusPage />} />
            <Route path="/noticias" element={<NewsPage />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            
            {/* Página de detalhe do curso */}
            <Route path="/cursos/:cursoId" element={<CursoDetalhe />} />
            
            <Route path="*" element={<div className="container"><h1>404 - Página não encontrada</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
