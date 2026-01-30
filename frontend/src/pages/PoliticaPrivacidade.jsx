import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const PoliticaPrivacidade = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Política de Privacidade",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/escola/politicaprivacidade.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default PoliticaPrivacidade;
