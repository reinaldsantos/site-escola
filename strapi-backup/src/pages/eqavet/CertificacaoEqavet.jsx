import React from 'react';
import PdfViewerComponent from '../components/PdfViewerComponent';

const CertificacaoEqavet = () => {
    // Array de PDFs para esta página
    // SUBSTITUA ESTES DADOS PELOS SEUS PDFs REAIS
    const pdfFiles = [
        // Exemplo:
        // {
        //     id: 1,
        //     name: 'Certificação EQAVET 2020-2023.pdf',
        //     url: '/pdfs/certificacaoeqavet.pdf', // URL do seu PDF
        //     size: '2.5 MB',
        //     date: '2024-01-01',
        //     pages: 10
        // },
        // {
        //     id: 2,
        //     name: 'Anexos Certificação EQAVET 2020-2023.pdf',
        //     url: '/pdfs/anexos-certificacaoeqavet.pdf',
        //     size: '1.2 MB',
        //     date: '2024-01-01',
        //     pages: 5
        // }
        
        // REMOVA ESTE OBJETO DE EXEMPLO E ADICIONE SEUS PDFs:
        {
            id: 1,
            name: 'Certificação EQAVET 2020-2023.pdf',
            url: '', // Coloque a URL do seu PDF aqui
            size: '-- MB',
            date: '--/--/----',
            pages: 1
        }
    ];

    return <PdfViewerComponent pdfFiles={pdfFiles} />;
};

export default CertificacaoEqavet;
