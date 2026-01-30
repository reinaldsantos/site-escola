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
        },
        {
            id: 4,
            name: "Projeto Educativo.pdf",
            size: "4.1 MB",
            date: "05/09/2023",
            pages: 8,
            icon: "🎓"
        },
        {
            id: 5,
            name: "Relatório Anual.pdf",
            size: "5.6 MB",
            date: "30/06/2023",
            pages: 15,
            icon: "📊"
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

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDownload = () => {
        const activePdfFile = pdfs[activePdf];
        alert(`Download iniciado: ${activePdfFile.name}`);
        // Aqui você implementaria a lógica real de download
    };

    const handlePrint = () => {
        alert(`Imprimindo: ${pdfs[activePdf].name}`);
        // Aqui você implementaria a lógica real de impressão
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
                    <button className="pdf-btn pdf-btn-outline" onClick={handlePrint}>
                        <span>🖨️</span> Imprimir
                    </button>
                    <button className="pdf-btn pdf-btn-primary" onClick={handleDownload}>
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
                            {/* Documento - Autorização de Funcionamento */}
                            {currentPage === 1 && (
                                <>
                                    <div className="document-header">
                                        <h1 className="document-title">Escola Profissional do Fundão</h1>
                                        <p className="document-subtitle">
                                            Associação Promotora de Ensino Profissional da Cova da Beira
                                        </p>
                                        <div className="document-address">
                                            <p>Rua da Covilhã, 6230 - Fundão</p>
                                            <p>sita em Rua da Covilhã - Apartado 250</p>
                                        </div>
                                    </div>
                                    <div className="document-content">
                                        <p className="document-paragraph">
                                            com uma lotação global, em regime diurno, fixada em 
                                            <span className="highlight"> 255 alunos</span>, 
                                            e nas Delegações: ---
                                        </p>
                                    </div>
                                </>
                            )}

                            {currentPage === 2 && (
                                <div className="document-content">
                                    <p className="document-paragraph">
                                        O estabelecimento de ensino <strong>fica autorizado a ministrar</strong>, 
                                        nas instalações e demais condições indicadas, <strong>os cursos profissionais</strong> 
                                        previstos nos art. 6º e 7º, do Decreto-Lei 4/98, de 8/1, bem como 
                                        <strong> os cursos e actividades de formação</strong> previstos nos números 1 e 2, 
                                        do artº 10º, do mesmo Decreto-Lei, <strong>discriminados</strong> nas páginas seguintes 
                                        do presente documento, ou em Aditamento(s) ao mesmo, emitido(s) pelos serviços 
                                        competentes do Ministério da Educação.
                                    </p>
                                </div>
                            )}

                            {currentPage === 3 && (
                                <>
                                    <div className="document-content">
                                        <div className="signature-line">
                                            <p style={{ backgroundColor: 'white', display: 'inline-block', padding: '0 20px' }}>
                                                É seu Director Pedagógico/Pres.Dir.Pedagógica:
                                            </p>
                                        </div>
                                        <div className="document-footer">
                                            <div className="footer-left">
                                                <p>Departamento do Ensino Secundário, em 28/Jan/00</p>
                                            </div>
                                            <div className="footer-right">
                                                <p>O Director</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
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
                                    onClick={() => handlePageClick(page)}
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
