import React from 'react';
import PdfViewerLayout from '../components/PdfViewerLayout';

const RelatorioVerificacao = () => {
    // Substitua por seus PDFs reais
    const pdfFiles = [
        {
            id: 1,
            name: "Relatório de Verificação EQAVET",
            size: "2.5 MB",
            date: "01/01/2024",
            pages: 10,
            url: "/pdfs/eqavet/relatorioverificacao.pdf"  // Ex: "/pdfs/sobre-nos.pdf"
        }
    ];

    return <PdfViewerLayout pdfFiles={pdfFiles} />;
};

export default RelatorioVerificacao;
