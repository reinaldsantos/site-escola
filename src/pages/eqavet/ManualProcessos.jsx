import React from 'react';
import PdfViewerComponent from '../components/PdfViewerComponent';

const ManualProcessos = () => {
    // Array de PDFs para esta página
    // SUBSTITUA ESTES DADOS PELOS SEUS PDFs REAIS
    const pdfFiles = [
        // Exemplo:
        // {
        //     id: 1,
        //     name: 'Manual Processos EQAVETS.pdf',
        //     url: '/pdfs/manualprocessos.pdf', // URL do seu PDF
        //     size: '2.5 MB',
        //     date: '2024-01-01',
        //     pages: 10
        // },
        // {
        //     id: 2,
        //     name: 'Anexos Manual Processos EQAVETS.pdf',
        //     url: '/pdfs/anexos-manualprocessos.pdf',
        //     size: '1.2 MB',
        //     date: '2024-01-01',
        //     pages: 5
        // }
        
        // REMOVA ESTE OBJETO DE EXEMPLO E ADICIONE SEUS PDFs:
        {
            id: 1,
            name: 'Manual Processos EQAVETS.pdf',
            url: '', // Coloque a URL do seu PDF aqui
            size: '-- MB',
            date: '--/--/----',
            pages: 1
        }
    ];

    return <PdfViewerComponent pdfFiles={pdfFiles} />;
};

export default ManualProcessos;
