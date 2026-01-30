import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const PlanoAcaoIntegrado = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Plano de Ação Integrado",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/eqavet/planoacaointegrado.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default PlanoAcaoIntegrado;
