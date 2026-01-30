import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const DocumentosExemplo = () => {
    const meusPdfs = [
        {
            id: 1,
            name: "Autorização de Funcionamento.pdf",
            size: "2.4 MB",
            date: "28/01/2000",
            pages: 3
        },
        {
            id: 2,
            name: "Certificação EQAVET.pdf",
            size: "1.8 MB",
            date: "15/03/2023",
            pages: 5
        },
        {
            id: 3,
            name: "Projeto Educativo.pdf",
            size: "4.1 MB",
            date: "05/09/2023",
            pages: 8
        }
    ];

    return <PdfViewerLayout pdfFiles={meusPdfs} />;
};

export default DocumentosExemplo;
