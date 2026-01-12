// src/pages/Cursos/data/cursosData.js - VERSÃO COMPLETA COM TODOS OS CURSOS
const cursosData = [
  // ========== CURSOS PROFISSIONAIS ==========
  {
    id: 1,
    slug: "tecnico-de-comercio",
    nome: "Técnico de Comércio",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "💼",
    cor: "#2196F3",
    descricaoBreve: "Profissional qualificado para organizar e planear vendas em estabelecimentos comerciais.",
    
    descricaoCompleta: `O Técnico de Comércio é o profissional qualificado apto a organizar e planear a venda de produtos e ou serviços em estabelecimentos comerciais, garantindo a satisfação dos clientes, tendo como objetivo a sua fidelização. Pretende-se um profissional de negócios moderno e polivalente.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Apetência para a função de atendimento",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos e adaptação a novas situações",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Desenvolver ações empreendedoras com carácter inovador, criativo e dinâmico",
      "Conhecer os produtos e ou serviços da empresa",
      "Caracterizar o tipo de clientes e recolher informação sobre a concorrência",
      "Participar na conceção, organização e animação do ponto de venda",
      "Colaborar na pesquisa, definição e composição dos produtos",
      "Atender e aconselhar clientes",
      "Processar a venda de produtos e ou serviços",
      "Proceder a operações de abertura e fecho do dia",
      "Efetuar o controlo quantitativo e qualitativo de produtos",
      "Assegurar o serviço pós-venda",
      "Proceder à organização da documentação relativa ao processo de compra e venda",
      "Participar na gestão comercial e do pessoal",
      "Utilizar as novas tecnologias nas atividades comerciais",
      "Planear e acompanhar o site de comércio eletrónico",
      "Aplicar as normas de segurança, higiene e saúde"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor e em países da UE",
    
    saidasProfissionais: [
      "Técnico de Comércio em instituições privadas ou públicas",
      "Agente ou Delegado Comercial",
      "Promotor de Vendas",
      "Auxiliar Administrativo",
      "Empresas industriais, comerciais e de serviços",
      "Profissional em cooperativas",
      "Técnico em companhias de seguros",
      "Profissional em departamentos de Marketing",
      "Colaborador em shopping center",
      "Colaborador em grandes superfícies"
    ],
    
    vagas: 25,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 2,
    slug: "tecnico-de-cozinha-pastelaria",
    nome: "Técnico de Cozinha/Pastelaria",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "👨‍🍳",
    cor: "#FF9800",
    descricaoBreve: "Um ativo na área da restauração com formação em gastronomia.",
    
    descricaoCompleta: `O Técnico de Cozinha Pastelaria é um profissional que domina as normas de higiene e segurança alimentar, planifica e dirige os trabalhos de cozinha e/ou pastelaria, colabora na estruturação de ementas, bem como na preparação e confeção de refeições num enquadramento de especialidade, nomeadamente gastronomia regional portuguesa e internacional.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Dominar as normas de higiene e segurança alimentar",
      "Planificar e dirigir os trabalhos de cozinha e/ou pastelaria",
      "Colaborar na estruturação de ementas",
      "Preparar e confecionar refeições",
      "Especialidade em gastronomia regional portuguesa e internacional"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor, e em países da UE",
    
    saidasProfissionais: [
      "Empreendimentos turísticos",
      "Unidades hoteleiras",
      "Estabelecimentos de restauração e bebidas",
      "Empresas de catering"
    ],
    
    vagas: 15,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 3,
    slug: "tecnico-de-restaurante-bar",
    nome: "Técnico de Restaurante/Bar",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "🍽️",
    cor: "#4CAF50",
    descricaoBreve: "Especializado em atendimento e serviço de mesa em restauração.",
    
    descricaoCompleta: `As atividades principais a desempenhar por este técnico são verificar e preparar as condições de utilização e limpeza dos equipamentos e utensílios utilizados no serviço de restaurante e bar, efetuar o arranjo da sala de refeições e a preparação dos equipamentos e utensílios do serviço de mesa, de acordo com as características do serviço a executar.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Verificar e preparar condições de utilização e limpeza de equipamentos",
      "Efetuar o arranjo da sala de refeições",
      "Assegurar a gestão corrente de aprovisionamento",
      "Acolher e atender os clientes",
      "Efetuar o serviço de bar",
      "Efetuar a faturação do serviço prestado",
      "Executar diferentes serviços de cafetaria, copa, mesa e bar"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor, e em países da UE",
    
    saidasProfissionais: [
      "Técnico de Restaurante | Bar",
      "Diretor(a) de restauração",
      "Chefe de mesa",
      "Empregado(a) de mesa"
    ],
    
    vagas: 20,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 4,
    slug: "tecnico-de-gestao-do-ambiente",
    nome: "Técnico de Gestão do Ambiente",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "🌱",
    cor: "#009688",
    descricaoBreve: "Profissional qualificado para gestão ambiental e desenvolvimento sustentável.",
    
    descricaoCompleta: `É o profissional qualificado apto a, respeitando as normas de qualidade, segurança e saúde no trabalho, intervir ativamente no domínio da gestão da qualidade do ambiente e do desenvolvimento sustentável. Pretende-se um polivalente centrado na natureza.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Qualificar técnicos aptos a atuar ao nível de qualidade ambiental",
      "Recolha de análises laboratoriais",
      "Conservação e requalificação dos recursos naturais",
      "Domínio da gestão e qualidade do ambiente",
      "Desenvolvimento sustentável",
      "Utilização de sistemas de informação geográfica",
      "Participação em programas de monitorização ambiental"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor e em países da UE",
    
    saidasProfissionais: [
      "Técnicos das autarquias na área do saneamento",
      "Técnicos de conservação e gestão da natureza",
      "Técnicos nas áreas da qualidade e segurança ambiental",
      "Guias de eco-museus",
      "Técnicos adjuntos de ambiente em empresas municipais"
    ],
    
    vagas: 18,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 5,
    slug: "tecnico-de-desenho-da-construcao-civil",
    nome: "Técnico de Desenho da Construção Civil",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "🏗️",
    cor: "#795548",
    descricaoBreve: "Especializado em acompanhamento de obras e apoio a gabinetes de arquitetura.",
    
    descricaoCompleta: `Com o Curso de Técnico de Desenho da Construção Civil pretende-se colmatar as necessidades da região, nomeadamente ao nível do acompanhamento de obras públicas ou particulares, no apoio a gabinetes de arquitectura, quer ao nível do desenho, medições e orçamentos, em resposta à exigência legislativa. Pretende-se um interlocutor privilegiado junto dos Engenheiros e Arquitetos.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Assumir como interlocutor privilegiado junto de Engenheiros e Arquitetos",
      "Acompanhar obras públicas ou particulares",
      "Apoiar gabinetes de arquitectura",
      "Proceder à análise do projeto e caderno de encargos",
      "Colaborar na determinação da sequência das fases de construção",
      "Orientar a execução dos trabalhos com controlo de custos"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do sector e em países da UE",
    
    saidasProfissionais: [
      "Desenhador de Construção Civil",
      "Desenhador de Arquitectura e Topografia",
      "Condução, Encarregado, Fiscal e Técnico de Obra",
      "Preparador de Obra",
      "Medidor Orçamentista"
    ],
    
    vagas: 22,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 6,
    slug: "tecnico-de-manutencao-industrial-eletromecanica",
    nome: "Técnico de Manutenção Industrial - Electromecânica",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "🔧",
    cor: "#607D8B",
    descricaoBreve: "Profissional qualificado na análise, diagnóstico e manutenção de aparelhos industriais.",
    
    descricaoCompleta: `As atividades principais a desempenhar por este técnico são interpretar desenhos, normas e outras especificações técnicas, a fim de identificar formas e dimensões, funcionalidade, materiais e outros dados complementares relativos a equipamentos eletromecânicos e instalações elétricas industriais.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Interpretar desenhos, normas e especificações técnicas",
      "Controlar o funcionamento dos equipamentos",
      "Detetar e diagnosticar anomalias",
      "Planear, desenvolver e controlar trabalhos de manutenção",
      "Avaliar meios humanos e materiais para intervenção",
      "Proceder à instalação, preparação e ensaio de máquinas"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor, e em países da UE",
    
    saidasProfissionais: [
      "Desempenho de funções em avaliação e manutenção de equipamentos",
      "Empresas de Metalomecânica",
      "Fabrico de máquinas e ferramentas",
      "Empresas de venda de máquinas e equipamentos",
      "Empresas com serviço de assistência pós-venda"
    ],
    
    vagas: 20,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 7,
    slug: "tecnico-de-mecatronica-automovel",
    nome: "Técnico de Mecatrónica Automóvel",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "🚗",
    cor: "#F44336",
    descricaoBreve: "Técnico especializado em diagnóstico e reparação de sistemas automóveis.",
    
    descricaoCompleta: `Este técnico procede à manutenção e diagnóstico de anomalias e efectua reparações nos diversos sistemas mecânicos, elétricos e eletrónicos de automóveis ligeiros de acordo com os parâmetros e especificações técnicas definidas pelos fabricantes e com as regras de segurança e de proteção ambiental aplicáveis.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência para adquirir novos conhecimentos",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Diagnóstico e reparação dos sistemas mecânicos, elétricos e eletrónicos",
      "Interpretar e analisar esquemas elétricos",
      "Manusear aparelhos de medida",
      "Diagnosticar, reparar e verificar motores",
      "Sistemas de ignição, alimentação, arrefecimento, lubrificação",
      "Sistemas de transmissão, direção, suspensão, travagem",
      "Organizar e controlar a qualidade de trabalho"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas nacionais do setor, e em países da UE",
    
    saidasProfissionais: [
      "Oficinas de reparação mecânica/elétrica/eletrónica",
      "Empresas de eletrónica e automação",
      "Empresas de metalurgia e metalomecânica",
      "Empresas de reparação automóvel e robótica",
      "Indústrias do fabrico de produtos metálicos"
    ],
    
    vagas: 18,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 8,
    slug: "programador-de-informatica",
    nome: "Programador de Informática",
    tipo: "Profissional",
    duracao: "3 anos letivos",
    icon: "💻",
    cor: "#3F51B5",
    descricaoBreve: "Curso de programação com formação em desenvolvimento de software e aplicações.",
    
    descricaoCompleta: `Curso profissional de programação com formação em desenvolvimento de software, aplicações web e mobile, preparando os alunos para as necessidades do mercado de tecnologia.`,
    
    destinatarios: [
      "Jovens com o 9º ano ou equivalente",
      "Idade inferior a 20 anos",
      "Apetência para a integração em trabalho de equipa",
      "Iniciativa e criatividade",
      "Apetência por tecnologia",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Desenvolver aplicações web e mobile",
      "Programar em várias linguagens",
      "Criar e gerir bases de dados",
      "Implementar soluções de segurança informática",
      "Trabalhar com frameworks modernos",
      "Desenvolver softwares empresariais"
    ],
    
    certificacao: {
      profissional: "Diploma de Qualificação Profissional de nível IV",
      escolar: "Diploma de Estudos Secundários (12º ano)",
      acessoSuperior: "Permitem o normal acesso ao Ensino Superior"
    },
    
    formacaoContextoTrabalho: "630h, repartidas pelos 3 anos letivos, em empresas de tecnologia e em países da UE",
    
    saidasProfissionais: [
      "Programador Web",
      "Desenvolvedor de Aplicações Mobile",
      "Programador de Software Empresarial",
      "Administrador de Bases de Dados",
      "Técnico de Suporte Informático"
    ],
    
    vagas: 25,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80"
  },
  
  // ========== CURSOS CEF ==========
  {
    id: 9,
    slug: "eletricista-de-instalacoes",
    nome: "Eletricista de Instalações",
    tipo: "CEF",
    duracao: "2 anos",
    icon: "⚡",
    cor: "#FFC107",
    descricaoBreve: "Curso CEF para executar instalações elétricas de edificações.",
    
    descricaoCompleta: `Executar instalações elétricas de edificações, bem como efetuar o controlo, a colocação em serviço e a manutenção dos dispositivos dos aparelhos elétricos, eletrónicos e de domótica, de acordo com as normas de higiene e segurança e ambiente e os regulamentos em vigor.`,
    
    destinatarios: [
      "Jovens com idade superior a 15 anos",
      "Escolaridade mínima de 6º ano",
      "Apetência para trabalho prático",
      "Sentido de responsabilidade"
    ],
    
    objetivos: [
      "Executar instalações elétricas de edificações",
      "Efetuar o controlo e manutenção de dispositivos elétricos",
      "Trabalhar com aparelhos eletrónicos e de domótica",
      "Aplicar normas de higiene, segurança e ambiente"
    ],
    
    certificacao: {
      profissional: "Certificação Profissional nível II",
      escolar: "9º ano de escolaridade",
      acessoSuperior: "Acesso a cursos profissionais"
    },
    
    formacaoContextoTrabalho: "Formação prática em empresas do setor",
    
    saidasProfissionais: [
      "Eletricista de instalações",
      "Técnico de manutenção elétrica",
      "Assistente de eletricista",
      "Instalador de sistemas de domótica"
    ],
    
    vagas: 15,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 10,
    slug: "pastelaria-padaria",
    nome: "Pastelaria/Padaria",
    tipo: "CEF",
    duracao: "2 anos",
    icon: "🥐",
    cor: "#E91E63",
    descricaoBreve: "Curso CEF especializado em confeção de bolos, pão e produtos de pastelaria.",
    
    descricaoCompleta: `Organizar e preparar o serviço de pastelaria/padaria, confecionar bolos e outros produtos de pastelaria, pão e produtos afins, respeitando as normas de higiene e segurança, em unidades de produção ou em estabelecimentos de restauração e bebidas, integrados ou não em unidades hoteleiras, com vista a garantir um serviço de qualidade e satisfação do cliente.`,
    
    destinatarios: [
      "Jovens com idade superior a 15 anos",
      "Escolaridade mínima de 6º ano",
      "Interesse por culinária e pastelaria",
      "Criatividade e atenção ao detalhe"
    ],
    
    objetivos: [
      "Organizar e preparar o serviço de pastelaria/padaria",
      "Confeccionar bolos e produtos de pastelaria",
      "Produzir pão e produtos afins",
      "Respeitar normas de higiene e segurança",
      "Garantir qualidade e satisfação do cliente"
    ],
    
    certificacao: {
      profissional: "Certificação Profissional nível II",
      escolar: "9º ano de escolaridade",
      acessoSuperior: "Acesso a cursos profissionais"
    },
    
    formacaoContextoTrabalho: "Formação prática em padarias e pastelarias",
    
    saidasProfissionais: [
      "Pastelheiro",
      "Padeiro",
      "Auxiliar de pastelaria",
      "Trabalhador em estabelecimentos de restauração"
    ],
    
    vagas: 12,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
  },
  
  {
    id: 11,
    slug: "empregado-de-restaurante-bar",
    nome: "Empregado de Restaurante/Bar",
    tipo: "CEF",
    duracao: "2 anos",
    icon: "🍸",
    cor: "#9C27B0",
    descricaoBreve: "Curso CEF para organização e execução de serviço de restaurante/bar.",
    
    descricaoCompleta: `Organizar, preparar e executar o serviço de restaurante/bar, respeitando as normas de higiene e segurança, em estabelecimentos de restauração e bebidas, integrados ou não em unidades hoteleiras, em cooperação com os demais elementos da equipa, com vista a garantir um serviço de qualidade e satisfação do cliente.`,
    
    destinatarios: [
      "Jovens com idade superior a 15 anos",
      "Escolaridade mínima de 6º ano",
      "Boa capacidade de comunicação",
      "Sentido de serviço ao cliente"
    ],
    
    objetivos: [
      "Organizar e preparar o serviço de restaurante/bar",
      "Executar atendimento ao cliente",
      "Respeitar normas de higiene e segurança",
      "Cooperar com a equipa de trabalho",
      "Garantir qualidade no serviço"
    ],
    
    certificacao: {
      profissional: "Certificação Profissional nível II",
      escolar: "9º ano de escolaridade",
      acessoSuperior: "Acesso a cursos profissionais"
    },
    
    formacaoContextoTrabalho: "Formação prática em restaurantes e bares",
    
    saidasProfissionais: [
      "Empregado de mesa",
      "Empregado de bar",
      "Rececionista de restaurante",
      "Auxiliar de restauração"
    ],
    
    vagas: 18,
    anoLetivo: "2025/2026",
    imagem: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
  }
];

export default cursosData;
