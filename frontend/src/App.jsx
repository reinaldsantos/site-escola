import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import CursosPage from "./pages/CursosPage";

// Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas de curso
import CursoDetalhe from "./pages/Cursos/CursoDetalhe";

// Páginas da ESCOLA - IMPORTE DE components/
import SobreNos from "./components/SobreNos";
import AutorizacaoFuncionamento from "./components/AutorizacaoFuncionamento";
import Estatutos from "./components/Estatutos";
import RegulamentoInterno from "./components/RegulamentoInterno";
import ProjetoEducativo from "./components/ProjetoEducativo";
import PoliticaPrivacidade from "./components/PoliticaPrivacidade";
import OrganizacaoEscolar from "./components/OrganizacaoEscolar";
import EducacaoInclusiva from "./components/EducacaoInclusiva";
import LegislacaoApoio from "./components/LegislacaoApoio";
import FichasOperacao from "./components/FichasOperacao";

// Páginas do EQAVET - IMPORTE DE components/
import SeloConformidade from "./components/SeloConformidade";
import DocumentoBase from "./components/DocumentoBase";
import PlanoAcao from "./components/PlanoAcao";
import RelatorioOperador from "./components/RelatorioOperador";
import PlanoAcaoIntegrado from "./components/PlanoAcaoIntegrado";
import RelatorioVerificacao from "./components/RelatorioVerificacao";
import ManualProcessos from "./components/ManualProcessos";
import RelatoriosAcompanhamento from "./components/RelatoriosAcompanhamento";
import RelatoriosProgressoAnual from "./components/RelatoriosProgressoAnual";
import CertificacaoEQAVET2023 from "./components/CertificacaoEQAVET2023";

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
            <Route path="/noticias" element={<NoticiasPage />} />
            <Route path="/contactos" element={<ContactPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            
            {/* Página principal de cursos */}
            <Route path="/cursos" element={<CursosPage />} />
            
            {/* Página de detalhe do curso */}
            <Route path="/cursos/:cursoId" element={<CursoDetalhe />} />
            
            {/* Rotas da ESCOLA */}
            {/* "Sobre Nós" redireciona para a página Escola */}
            <Route path="/escola/sobre-nos" element={<Navigate to="/escola" replace />} />
            
            {/* As outras páginas mostram PDFs */}
            <Route path="/escola/autorizacao-funcionamento" element={<AutorizacaoFuncionamento />} />
            <Route path="/escola/estatutos" element={<Estatutos />} />
            <Route path="/escola/regulamento-interno" element={<RegulamentoInterno />} />
            <Route path="/escola/projeto-educativo" element={<ProjetoEducativo />} />
            <Route path="/escola/politica-privacidade" element={<PoliticaPrivacidade />} />
            <Route path="/escola/organizacao-escolar" element={<OrganizacaoEscolar />} />
            <Route path="/escola/educacao-inclusiva" element={<EducacaoInclusiva />} />
            <Route path="/escola/legislacao-apoio" element={<LegislacaoApoio />} />
            <Route path="/escola/fichas-operacao" element={<FichasOperacao />} />
            
            {/* Rotas do EQAVET */}
            <Route path="/eqavet/selo-conformidade" element={<SeloConformidade />} />
            <Route path="/eqavet/documento-base" element={<DocumentoBase />} />
            <Route path="/eqavet/plano-acao" element={<PlanoAcao />} />
            <Route path="/eqavet/relatorio-operador" element={<RelatorioOperador />} />
            <Route path="/eqavet/plano-acao-integrado" element={<PlanoAcaoIntegrado />} />
            <Route path="/eqavet/relatorio-verificacao" element={<RelatorioVerificacao />} />
            <Route path="/eqavet/manual-processos" element={<ManualProcessos />} />
            <Route path="/eqavet/relatorios-acompanhamento" element={<RelatoriosAcompanhamento />} />
            <Route path="/eqavet/relatorios-progresso-anual" element={<RelatoriosProgressoAnual />} />
            <Route path="/eqavet/certificacao-2023" element={<CertificacaoEQAVET2023 />} />
            
            {/* Rota 404 */}
            <Route path="*" element={<div className="container"><h1>404 - Página não encontrada</h1></div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;