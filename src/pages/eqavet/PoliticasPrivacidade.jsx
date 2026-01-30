import React from 'react';
import PdfViewerComponent from '../components/PdfViewerComponent';

const PoliticasPrivacidade = () => {
    // Array de PDFs para esta página
    // SUBSTITUA ESTES DADOS PELOS SEUS PDFs REAIS
    const pdfFiles = [
        // Exemplo:
        // {
        //     id: 1,
        //     name: 'Políticas de Privacidade.pdf',
        //     url: '/pdfs/politicasprivacidade.pdf', // URL do seu PDF
        //     size: '2.5 MB',
        //     date: '2024-01-01',
        //     pages: 10
        // },
        // {
        //     id: 2,
        //     name: 'Anexos Políticas de Privacidade.pdf',
        //     url: '/pdfs/anexos-politicasprivacidade.pdf',
        //     size: '1.2 MB',
        //     date: '2024-01-01',
        //     pages: 5
        // }
        
        // REMOVA ESTE OBJETO DE EXEMPLO E ADICIONE SEUS PDFs:
        {
            id: 1,
            name: 'Políticas de Privacidade.pdf',
            url: '', // Coloque a URL do seu PDF aqui
            size: '-- MB',
            date: '--/--/----',
            pages: 1
        }
    ];

    return <PdfViewerComponent pdfFiles={pdfFiles} />;
};

export default PoliticasPrivacidade;
