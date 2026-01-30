import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const EducacaoInclusiva = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Guião Educação Inclusiva",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/escola/educacaoinclusiva.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default EducacaoInclusiva;
