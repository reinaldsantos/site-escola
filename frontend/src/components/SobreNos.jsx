import React from 'react';
import PDFViewer from './PDFViewer';

const SobreNos = () => {
  const metadata = {
    numeroRegisto: 'EPF/001/2023',
    dataEmissao: '10 de Março de 2023',
    entidadeEmissora: 'Ministério da Educação',
    validade: 'Permanente',
    directora: 'Ana Maria Silva',
    revisao: 'Anual',
    paginas: '15',
    idioma: 'Português'
  };

  return (
    <PDFViewer 
      pdfPath="/autorizaçaodefuncionamento"
      title="Sobre Nós"
      subtitle="Documento Institucional - Escola Profissional do Fundão"
      metadata={metadata}
    />
  );
};

export default SobreNos;