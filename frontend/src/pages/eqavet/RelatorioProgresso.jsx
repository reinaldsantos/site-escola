import React from 'react';
import PdfViewerLayout from '../../components/PdfViewerLayout';

const RelatorioProgresso = () => {
    // PDFs para esta página
    const pdfFiles = [
        {
            id: 1,
            name: "Relatórios de Progresso Anual.pdf",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/eqavet/.pdf"
        }
    ];

    return (
        <div>
            <PdfViewerLayout pdfFiles={pdfFiles} />
        </div>
    );
};

export default RelatorioProgresso;
