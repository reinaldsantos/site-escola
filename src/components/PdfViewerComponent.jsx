import React, { useState } from 'react';
import '../styles/styles.css';

const PdfViewerComponent = ({ pdfFiles = [] }) => {
    const [currentPdfIndex, setCurrentPdfIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Se não houver PDFs, mostrar estado vazio
    if (!pdfFiles || pdfFiles.length === 0) {
        return (
            <div className="pdf-viewer-container">
                <div className="pdf-header">
                    <div className="pdf-header-title">
                        <h1>📄 Visualizador de Documentos</h1>
                    </div>
                </div>
                <div className="pdf-main-area">
                    <div className="pdf-viewer">
                        <div className="pdf-container">
                            <div className="pdf-empty">
                                <div className="pdf-empty-icon">📄</div>
                                <p>Nenhum documento disponível</p>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>
                                    Adicione arquivos PDF para visualizar
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const currentPdf = pdfFiles[currentPdfIndex];
    const totalPages = currentPdf?.pages || 1;

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

    const handlePageSelect = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleDownload = () => {
        // Aqui você implementaria o download do PDF
        alert(`Download: ${currentPdf.name}`);
    };

    const handlePrint = () => {
        // Aqui você implementaria a impressão
        alert(`Imprimir: ${currentPdf.name}`);
    };

    return (
        <div className="pdf-viewer-container">
            {/* Header */}
            <div className="pdf-header">
                <div className="pdf-header-title">
                    <h1>📄 {currentPdf.name}</h1>
                </div>
                <div className="pdf-header-controls">
                    <button 
                        className="pdf-btn pdf-btn-secondary"
                        onClick={handlePrint}
                    >
                        🖨️ Imprimir
                    </button>
                    <button 
                        className="pdf-btn pdf-btn-primary"
                        onClick={handleDownload}
                    >
                        ⬇️ Download
                    </button>
                </div>
            </div>

            {/* Área principal */}
            <div className="pdf-main-area">
                {/* Sidebar com lista de PDFs */}
                <div className="pdf-sidebar">
                    <h2>Documentos</h2>
                    <ul className="pdf-list">
                        {pdfFiles.map((pdf, index) => (
                            <li
                                key={pdf.id || index}
                                className={`pdf-list-item ${currentPdfIndex === index ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentPdfIndex(index);
                                    setCurrentPage(1);
                                }}
                            >
                                <div>
                                    <strong>{pdf.name}</strong>
                                    <div style={{ fontSize: '12px', color: '#718096', marginTop: '4px' }}>
                                        {pdf.size} • {pdf.date}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visualizador de PDF */}
                <div className="pdf-viewer">
                    {/* Toolbar */}
                    <div className="pdf-viewer-toolbar">
                        <h2>Visualização</h2>
                        <div className="pdf-toolbar-controls">
                            <span className="page-info">
                                Página {currentPage} de {totalPages}
                            </span>
                        </div>
                    </div>

                    {/* Container do PDF */}
                    <div className="pdf-container">
                        {currentPdf.url ? (
                            // Se tiver URL, usar iframe
                            <iframe
                                src={currentPdf.url}
                                title={currentPdf.name}
                                className="pdf-frame"
                            />
                        ) : (
                            // Se não tiver URL, mostrar placeholder
                            <div className="pdf-empty">
                                <div className="pdf-empty-icon">📄</div>
                                <p>Visualização do PDF</p>
                                <p style={{ fontSize: '14px', marginTop: '10px' }}>
                                    {currentPdf.name}
                                </p>
                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                    <p>Arquivo: {currentPdf.size}</p>
                                    <p>Data: {currentPdf.date}</p>
                                    <p>Páginas: {currentPdf.pages}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controles de paginação */}
                    {totalPages > 1 && (
                        <div className="pdf-pagination">
                            <button
                                className="page-btn"
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                            >
                                ←
                            </button>
                            
                            <div style={{ display: 'flex', gap: '5px' }}>
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        className="page-btn"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '5px',
                                            backgroundColor: currentPage === index + 1 ? '#4299e1' : 'white',
                                            color: currentPage === index + 1 ? 'white' : '#4299e1'
                                        }}
                                        onClick={() => handlePageSelect(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default PdfViewerComponent;
