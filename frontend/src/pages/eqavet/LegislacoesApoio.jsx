import React from 'react';
import PdfViewerLayout from '../../components/PdfViewerLayout';

const LegislacoesApoio = () => {
    // PDFs para esta página
    const pdfFiles = [
        {
            id: 1,
            name: "Legislação de Apoio.pdf",
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

export default LegislacoesApoio;
