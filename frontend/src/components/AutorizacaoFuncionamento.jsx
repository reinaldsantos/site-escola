import React from 'react';
import PDFViewer from './PDFViewer';

const AutorizacaoFuncionamento = () => {
  const metadata = {
    numeroAutorizacao: '135',
    dataEmissao: '28 de Janeiro de 2000',
    entidadeEmissora: 'Departamento do Ensino Secundário',
    directorPedagogico: 'João Manuel dos Santos Costa',
    lotacaoAlunos: '255 alunos',
    regimeFuncionamento: 'Diurno',
    localizacao: 'Rua da Covilhã, 6230 - Fundão',
    cursosAutorizados: '5 cursos profissionais',
    validadeDocumento: 'Vigente',
    documentoRef: '118638'
  };

  return (
    <PDFViewer 
      pdfPath="/documents/autorizacao-funcionamento.pdf"
      title="Autorização Prévia de Funcionamento"
      subtitle="Associação Promotora de Ensino Profissional da Cova da Beira"
      referenceNumber="Documento Nº 118638"
      metadata={metadata}
    />
  );
};

export default AutorizacaoFuncionamento;