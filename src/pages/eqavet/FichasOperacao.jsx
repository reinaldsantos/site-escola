import React from 'react';
import PdfViewerComponent from '../components/PdfViewerComponent';

const FichasOperacao = () => {
    // Array de PDFs para esta página
    // SUBSTITUA ESTES DADOS PELOS SEUS PDFs REAIS
    const pdfFiles = [
        // Exemplo:
        // {
        //     id: 1,
        //     name: 'Fichas de Operação.pdf',
        //     url: '/pdfs/fichasoperacao.pdf', // URL do seu PDF
        //     size: '2.5 MB',
        //     date: '2024-01-01',
        //     pages: 10
        // },
        // {
        //     id: 2,
        //     name: 'Anexos Fichas de Operação.pdf',
        //     url: '/pdfs/anexos-fichasoperacao.pdf',
        //     size: '1.2 MB',
        //     date: '2024-01-01',
        //     pages: 5
        // }
        
        // REMOVA ESTE OBJETO DE EXEMPLO E ADICIONE SEUS PDFs:
        {
            id: 1,
            name: 'Fichas de Operação.pdf',
            url: '', // Coloque a URL do seu PDF aqui
            size: '-- MB',
            date: '--/--/----',
            pages: 1
        }
    ];

    return <PdfViewerComponent pdfFiles={pdfFiles} />;
};

export default FichasOperacao;
