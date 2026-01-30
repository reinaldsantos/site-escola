import React, { useState } from 'react';
import './styles/PdfViewerLayout.css';

const PdfViewerLayout = ({ pdfFiles = [] }) => {
    const [activePdf, setActivePdf] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    // Dados de exemplo para os PDFs
    const defaultPdfs = [
        {
            id: 1,
            name: "Autorização de Funcionamento.pdf",
            size: "2.4 MB",
            date: "28/01/2000",
            pages: 3,
            icon: "📄"
        },
        {
            id: 2,
            name: "Certificação EQAVET.pdf",
            size: "1.8 MB",
            date: "15/03/2023",
            pages: 5,
            icon: "🏅"
        },
        {
            id: 3,
            name: "Regulamento Interno.pdf",
            size: "3.2 MB",
            date: "10/12/2022",
            pages: 12,
            icon: "📑"
        }
    ];

    const pdfs = pdfFiles.length > 0 ? pdfFiles : defaultPdfs;

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="pdf-viewer-container">
            {/* Header */}
            <header className="pdf-viewer-header">
                <div className="pdf-viewer-title">
                    <span className="pdf-icon">📄</span>
                    <h1>Visualizador de Documentos</h1>
                </div>
                <div className="pdf-controls">
                    <button className="pdf-btn pdf-btn-outline">
                        <span>🖨️</span> Imprimir
                    </button>
                    <button className="pdf-btn pdf-btn-primary">
                        <span>⬇️</span> Download
                    </button>
                </div>
            </header>

            {/* Conteúdo Principal */}
            <main className="pdf-main-container">
                {/* Sidebar com lista de PDFs */}
                <aside className="pdf-sidebar">
                    <h3>Documentos Disponíveis</h3>
                    <ul className="pdf-list">
                        {pdfs.map((pdf, index) => (
                            <li
                                key={pdf.id}
                                className={`pdf-list-item ${activePdf === index ? 'active' : ''}`}
                                onClick={() => {
                                    setActivePdf(index);
                                    setCurrentPage(1);
                                }}
                            >
                                <span className="pdf-list-icon">{pdf.icon}</span>
                                <div className="pdf-list-info">
                                    <h4>{pdf.name}</h4>
                                    <p>{pdf.size} • {pdf.date} • {pdf.pages} páginas</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Área de Visualização do PDF */}
                <section className="pdf-viewer-area">
                    {/* Barra de ferramentas do PDF */}
                    <div className="pdf-viewer-toolbar">
                        <h2>
                            <span>📋</span>
                            {pdfs[activePdf]?.name || "Documento.pdf"}
                        </h2>
                        <div className="pdf-toolbar-controls">
                            <span className="pdf-page-info">
                                Página {currentPage} de {totalPages}
                            </span>
                        </div>
                    </div>

                    {/* Container do Documento */}
                    <div className="pdf-document-container">
                        <div className="pdf-document-paper">
                            {/* Conteúdo do PDF será exibido aqui */}
                            <div style={{ padding: '20px', textAlign: 'center' }}>
                                <div style={{ fontSize: '48px', marginBottom: '20px' }}>📄</div>
                                <h3>{pdfs[activePdf]?.name || "Documento"}</h3>
                                <p>Visualização do PDF - Página {currentPage}</p>
                                <div style={{ marginTop: '30px', color: '#666' }}>
                                    <p>Tamanho: {pdfs[activePdf]?.size || "N/A"}</p>
                                    <p>Data: {pdfs[activePdf]?.date || "N/A"}</p>
                                    <p>Páginas: {pdfs[activePdf]?.pages || "N/A"}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controles de Paginação */}
                    <div className="pdf-pagination">
                        <button 
                            className="page-btn" 
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            ←
                        </button>
                        
                        <div className="page-numbers">
                            {[1, 2, 3].map(page => (
                                <div
                                    key={page}
                                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            className="page-btn" 
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            →
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default PdfViewerLayout;
