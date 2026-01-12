// CONFIGURAÇÃO ATUALIZADA DE CURSOS EPF
// =========================================

const cursosImagens = {
  manutencao: {
    nome: "Manutenção Industrial",
    imagens: [
      {
        id: 1,
        nome: "Técnico de Manutenção Industrial",
        arquivo: "manutencao-industrial.jpg",
        descricao: "Manutenção de equipamentos e sistemas industriais",
        detalhes: "Curso completo em manutenção preventiva e corretiva de máquinas industriais, pneumática, hidráulica e automação."
      },
      {
        id: 2,
        nome: "Técnico de Mecatrónica Automóvel",
        arquivo: "mecatronica-automovel.jpg",
        descricao: "Mecatrónica aplicada à indústria automóvel",
        detalhes: "Especialização em sistemas eletromecânicos automóveis, diagnósticos computorizados e novas tecnologias automóveis."
      }
    ],
    cor: "#3498db",
    icon: "🔧",
    duracao: "3 anos",
    certificacao: "Nível 4",
    saidas: ["Técnico de Manutenção", "Técnico de Mecatrónica", "Operador Industrial"]
  },
  
  alimentacao: {
    nome: "Alimentação",
    imagens: [
      {
        id: 3,
        nome: "Padeiro/Pasteleiro (CEF)",
        arquivo: "padaria-pastelaria.jpg",
        descricao: "Artesanato em panificação e pastelaria",
        detalhes: "Formação prática em panificação tradicional, pastelaria fina, confeitaria e gestão de pequenas unidades de produção."
      },
      {
        id: 4,
        nome: "Empregado de Restaurante/Bar",
        arquivo: "restaurante-bar.jpg",
        descricao: "Serviço em restauração e hotelaria",
        detalhes: "Formação em técnicas de serviço de mesa, bar, gestão de salão, atendimento ao cliente e gestão de stocks."
      }
    ],
    cor: "#e74c3c",
    icon: "🍽️",
    duracao: "2 anos",
    certificacao: "Nível 2/3",
    saidas: ["Padeiro", "Pastelero", "Empregado de Mesa", "Barman"]
  },
  
  construcao: {
    nome: "Construção Civil",
    imagens: [
      {
        id: 5,
        nome: "Técnico de Desenho de Construção Civil",
        arquivo: "desenho-construcao.jpg",
        descricao: "Desenho técnico e projetos de construção",
        detalhes: "Formação em AutoCAD, projetos arquitetónicos, estruturas, orçamentação e fiscalização de obras."
      }
    ],
    cor: "#f39c12",
    icon: "🏗️",
    duracao: "3 anos",
    certificacao: "Nível 4",
    saidas: ["Desenhador Projetista", "Técnico de Obra", "Fiscal de Obra"]
  },
  
  informatica: {
    nome: "Informática",
    imagens: [
      {
        id: 6,
        nome: "Programação de Informática",
        arquivo: "programacao-informatica.jpg",
        descricao: "Desenvolvimento de software e aplicações",
        detalhes: "Curso completo em programação web e mobile, bases de dados, algoritmos e desenvolvimento de sistemas."
      }
    ],
    cor: "#9b59b6",
    icon: "💻",
    duracao: "3 anos",
    certificacao: "Nível 4",
    saidas: ["Programador", "Desenvolvedor Web", "Analista de Sistemas"]
  }
};

export default cursosImagens;
