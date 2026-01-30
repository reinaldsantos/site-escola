import React from 'react';
import PdfViewerLayout from '../../components/PdfViewerLayout';

const PlanoAcao = () => {
    // PDFs para esta página
    const pdfFiles = [
        {
            id: 1,
            name: "Plano de Ação EQAVETS.pdf",
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

export default PlanoAcao;
