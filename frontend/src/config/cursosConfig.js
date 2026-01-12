const cursosConfig = {
  areas: [
    {
      id: "manutencao",
      nome: "Manutenção Industrial",
      cor: "#3498db",
      icon: "🔧",
      cursos: [
        {
          id: 1,
          nome: "Técnico de Manutenção Industrial",
          descricao: "Formação em manutenção de equipamentos e sistemas industriais",
          duracao: "3 anos",
          certificacao: "Nível 4",
          saidas: ["Técnico de Manutenção", "Operador Industrial", "Técnico de Produção"]
        },
        {
          id: 2,
          nome: "Técnico de Mecatrónica Automóvel",
          descricao: "Especialização em sistemas eletromecânicos automóveis",
          duracao: "3 anos",
          certificacao: "Nível 4",
          saidas: ["Técnico de Mecatrónica", "Diagnóstico Automóvel", "Eletricista Automóvel"]
        }
      ]
    },
    {
      id: "alimentacao",
      nome: "Alimentação",
      cor: "#e74c3c",
      icon: "🍽️",
      cursos: [
        {
          id: 3,
          nome: "Padeiro/Pasteleiro (CEF)",
          descricao: "Artesanato em panificação e pastelaria tradicional",
          duracao: "2 anos",
          certificacao: "Nível 2",
          saidas: ["Padeiro", "Pastelero", "Confeiteiro"]
        },
        {
          id: 4,
          nome: "Empregado de Restaurante/Bar",
          descricao: "Serviço em restauração e hotelaria",
          duracao: "2 anos",
          certificacao: "Nível 3",
          saidas: ["Empregado de Mesa", "Barman", "Rececionista"]
        }
      ]
    },
    {
      id: "construcao",
      nome: "Construção Civil",
      cor: "#f39c12",
      icon: "🏗️",
      cursos: [
        {
          id: 5,
          nome: "Técnico de Desenho de Construção Civil",
          descricao: "Desenho técnico e projetos de construção civil",
          duracao: "3 anos",
          certificacao: "Nível 4",
          saidas: ["Desenhador Projetista", "Técnico de Obra", "Fiscal de Obra"]
        }
      ]
    },
    {
      id: "informatica",
      nome: "Informática",
      cor: "#9b59b6",
      icon: "💻",
      cursos: [
        {
          id: 6,
          nome: "Programação de Informática",
          descricao: "Desenvolvimento de software e aplicações web/mobile",
          duracao: "3 anos",
          certificacao: "Nível 4",
          saidas: ["Programador", "Desenvolvedor Web", "Analista de Sistemas"]
        }
      ]
    }
  ]
};

export default cursosConfig;

