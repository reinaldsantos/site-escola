import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const ProjetoEducativo = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Projeto Educativo",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/escola/projetoeducativo.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default ProjetoEducativo;
