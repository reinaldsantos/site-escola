import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const LegislacaoApoio = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Legislação de Apoio",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/escola/legislacaoapoio.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default LegislacaoApoio;
