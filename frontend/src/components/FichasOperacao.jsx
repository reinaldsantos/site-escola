import React, { useState } from 'react';
import PDFViewer from './PDFViewer';
import './MultiPDFViewer.css'; // ← SEU CSS

const FichasOperacao = () => {
  const [activePDF, setActivePDF] = useState(0);

  const fichas = [
    {
      id: 1,
      title: "Ficha de Operação 2023/2024 - CEF PESSOAS2030",
      fileName: "23.24 CEF PESSOAS2030_FichaOperacao_A4_sem_selo_FSE.pdf",
      pdfPath: "/documents/ficha-cef-2023-2024.pdf",
      year: "2023-2024",
      type: "CEF",
      pages: "15",
      size: "7.6 MB"
    },
    {
      id: 2,
      title: "Ficha de Operação 2023/2024 - Profissionais PESSOAS2030",
      fileName: "23.24 Profissionais PESSOAS2030_FichaOperacao_A4_com_selo_FSE.pdf",
      pdfPath: "/documents/ficha-profissionais-2023-2024.pdf",
      year: "2023-2024",
      type: "Profissionais",
      pages: "12",
      size: "5.7 MB"
    },
    {
      id: 3,
      title: "Ficha de Operação 2024/2025 - CEF PESSOAS2030",
      fileName: "24.25 CEF PESSOAS2030_FichaOperacao_A4_sem_selo_FSE.pdf",
      pdfPath: "/documents/ficha-cef-2024-2025.pdf",
      year: "2024-2025",
      type: "CEF",
      pages: "15",
      size: "7.6 MB"
    },
    {
      id: 4,
      title: "Ficha de Operação 2024/2025 - Profissionais PESSOAS2030",
      fileName: "24.25 Profissionais PESSOAS2030_FichaOperacao_A4_com_selo_FSE.pdf",
      pdfPath: "/documents/ficha-profissionais-2024-2025.pdf",
      year: "2024-2025",
      type: "Profissionais",
      pages: "12",
      size: "5.7 MB"
    }
  ];

  return (
    <div className="multi-pdf-container">
      {/* Cabeçalho */}
      <header className="multi-pdf-header">
        <h1>Fichas de Operação</h1>
        <p className="subtitle"></p>
      </header>

      <div className="multi-pdf-layout">
        {/* Sidebar com lista de PDFs */}
        <div className="pdf-sidebar">
          <h3>📋 Fichas Disponíveis</h3>
          <div className="pdf-list">
            {fichas.map((ficha, index) => (
              <button
                key={ficha.id}
                className={`pdf-item ${activePDF === index ? 'active' : ''}`}
                onClick={() => setActivePDF(index)}
              >
                <div className="pdf-item-header">
                  <span className="pdf-icon">📄</span>
                  <span className="pdf-title">{ficha.type}</span>
                </div>
                <div className="pdf-item-info">
                  <span className="pdf-year">{ficha.year}</span>
                  <span className="pdf-size">{ficha.size}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Área principal */}
        <div className="pdf-main-area">
          {/* Controles */}
          <div className="multi-pdf-controls">
            <div className="controls-left">
              <span className="control-label">Ficha Selecionada:</span>
              <span className="pdf-title">{fichas[activePDF].type} {fichas[activePDF].year}</span>
            </div>

            <div className="controls-right">
              <a 
                href={fichas[activePDF].pdfPath} 
                download 
                className="control-btn download-btn"
              >
                Download
              </a>
              <a 
                href={fichas[activePDF].pdfPath} 
                target="_blank" 
                rel="noopener noreferrer"
                className="control-btn newtab-btn"
              >
                Nova Aba
              </a>
            </div>
          </div>

          {/* Informações da Ficha */}
          <div className="pdf-info">
            <h2>{fichas[activePDF].title}</h2>
            <p>Documento de operacionalização para cursos {fichas[activePDF].type} do ano letivo {fichas[activePDF].year}</p>
            <div className="file-info">
              <span>Arquivo: {fichas[activePDF].fileName}</span>
              <span>Páginas: {fichas[activePDF].pages}</span>
              <span>Tamanho: {fichas[activePDF].size}</span>
            </div>
          </div>

          {/* Visualizador de PDF */}
          <div className="multi-pdf-viewer">
            <PDFViewer 
              pdfPath={fichas[activePDF].pdfPath}
              title={fichas[activePDF].title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FichasOperacao;