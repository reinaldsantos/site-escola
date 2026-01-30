import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const DocumentosPage = () => {
    // Exemplo de PDFs - substitua pelos seus arquivos reais
    const meusPdfs = [
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
            name: "Relatório Anual 2023.pdf",
            size: "5.6 MB",
            date: "30/06/2023",
            pages: 15,
            icon: "📊"
        },
        {
            id: 3,
            name: "Projeto Educativo.pdf",
            size: "4.1 MB",
            date: "05/09/2023",
            pages: 8,
            icon: "🎓"
        }
    ];

    return <PdfViewerLayout pdfFiles={meusPdfs} />;
};

export default DocumentosPage;
