// src/hooks/useStrapiUniversal.js
import { useState, useEffect } from 'react';

const useStrapiUniversal = (collectionName, limit = 10) => {
  const [dados, setDados] = useState([]);
  const [campos, setCampos] = useState({});
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null); // Novo: estado para erros

  // CORREÇÃO 1: Nova URL base
  const BASE_URL = 'https://strapi-definitivo.onrender.com';

  // CORREÇÃO 2: Função para garantir nomes no plural
  const garantirPlural = (nome) => {
    const mapaPlural = {
      'noticia': 'noticias',
      'evento': 'eventos',
      'aviso': 'avisos',
      'curso': 'cursos',
      'user': 'users',
      'category': 'categories'
    };
    
    // Se já está no plural, mantém
    if (nome.endsWith('s') || nome.endsWith('es')) {
      return nome;
    }
    
    // Se está no mapa, usa a versão plural
    if (mapaPlural[nome]) {
      return mapaPlural[nome];
    }
    
    // Fallback: adiciona 's'
    return nome + 's';
  };

  // Mapeamento FIXO de campos por coleção (ATUALIZADO!)
  const mapeamentoCampos = {
    'noticias': {
      titulo: 'titulo',
      conteudo: 'conteudo',
      data: 'data_publicacao',
      imagem: 'imagem',
      autor: 'autor',
      descricao: 'descricao'
    },
    'eventos': {
      titulo: 'titulo',
      conteudo: 'descricao',
      data: 'data_evento',
      imagem: 'imagem',
      local: 'local',
      horario: 'horario',
      data_inicio: 'data_inicio',
      data_fim: 'data_fim'
    },
    'cursos': {
      titulo: 'titulo',
      conteudo: 'descricao',
      data: 'createdAt',
      imagem: 'imagem',
      duracao: 'duracao',
      professor: 'professor'
    },
    'avisos': {
      titulo: 'titulo',
      conteudo: 'conteudo',
      data: 'createdAt',
      imagem: 'imagem',
      prioridade: 'prioridade',
      expira_em: 'expira_em'
    }
  };

  // Fallback melhorado para coleções não mapeadas
  const detectarCamposFallback = (item) => {
    if (!item) return {};
    
    const keys = Object.keys(item);
    console.log(`🔍 Analisando campos disponíveis:`, keys);
    
    return {
      titulo: keys.find(k => 
        k.includes('titulo') || k.includes('title') || k.includes('nome') || k.includes('name')
      ) || 'titulo',
      conteudo: keys.find(k => 
        k.includes('conteudo') || k.includes('content') || 
        k.includes('descricao') || k.includes('description') ||
        k.includes('texto') || k.includes('text')
      ) || 'conteudo',
      data: keys.find(k => 
        k.includes('data_publicacao') || k.includes('data') || 
        k.includes('date') || k.includes('created') ||
        k.includes('published')
      ) || 'createdAt',
      imagem: keys.find(k => 
        k.includes('imagem') || k.includes('image') || 
        k.includes('foto') || k.includes('photo') ||
        k.includes('cover') || k.includes('thumbnail')
      ) || null,
      local: keys.find(k => 
        k.includes('local') || k.includes('location') || 
        k.includes('localizacao') || k.includes('place')
      ) || null,
      horario: keys.find(k => 
        k.includes('horario') || k.includes('time') || 
        k.includes('hora') || k.includes('hour')
      ) || null
    };
  };

  // Função para extrair URL da imagem de forma consistente
  const extrairUrlImagem = (atributos) => {
    if (!atributos) return null;
    
    // Verificar campos de imagem comuns
    const camposImagem = ['imagem', 'image', 'foto', 'photo', 'cover', 'thumbnail', 'capa'];
    
    for (const campo of camposImagem) {
      const imagemData = atributos[campo];
      
      if (imagemData) {
        // Strapi v4 format: imagem.data.attributes.url
        if (imagemData.data?.attributes?.url) {
          return `${BASE_URL}${imagemData.data.attributes.url}`;
        }
        // Outros formatos possíveis
        if (imagemData.url) {
          return `${BASE_URL}${imagemData.url}`;
        }
        if (imagemData.attributes?.url) {
          return `${BASE_URL}${imagemData.attributes.url}`;
        }
      }
    }
    
    return null;
  };

  const buscarDados = async () => {
    try {
      setCarregando(true);
      setErro(null); // Resetar erro
      
      // CORREÇÃO 3: Usar nome no plural garantido
      const colecaoPlural = garantirPlural(collectionName);
      
      // CORREÇÃO 4: URL atualizada com novo servidor
      const apiUrl = `${BASE_URL}/api/${colecaoPlural}?populate=*&sort=createdAt:desc&pagination[pageSize]=${limit}`;
      
      console.log(`🔄 Buscando ${colecaoPlural}: ${apiUrl}`); // Debug melhorado
      
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        let mensagemErro = `Erro ${response.status}: ${response.statusText}`;
        
        if (response.status === 404) {
          mensagemErro = `Coleção "${colecaoPlural}" não encontrada. Verifique o nome ou crie a coleção no Strapi Admin.`;
        } else if (response.status === 503) {
          mensagemErro = `Servidor temporariamente indisponível. Tente novamente em alguns instantes.`;
        }
        
        throw new Error(mensagemErro);
      }
      
      const data = await response.json();
      
      // Log estruturado para debug
      console.group(`✅ ${colecaoPlural.toUpperCase()} - Resposta Recebida`);
      console.log(`📦 Estrutura:`, data);
      console.log(`📊 Total de itens:`, data.data?.length || 0);
      console.groupEnd();
      
      // Strapi v4 retorna data.data
      const items = data.data || [];
      
      if (items.length > 0) {
        // Usar mapeamento fixo ou fallback
        let camposDetectados = mapeamentoCampos[colecaoPlural];
        
        if (!camposDetectados) {
          console.log(`⚠️  Coleção "${colecaoPlural}" não mapeada, detectando campos automaticamente...`);
          camposDetectados = detectarCamposFallback(items[0].attributes || items[0]);
        }
        
        // Extrair atributos (Strapi v4) com formatação adicional
        const dadosFormatados = items.map(item => {
          const attributes = item.attributes || item;
          
          // Adicionar URL da imagem formatada
          const imagemUrl = extrairUrlImagem(attributes);
          
          return {
            id: item.id,
            ...attributes,
            // Campos computados adicionais
            imagemUrl: imagemUrl,
            dataFormatada: attributes[camposDetectados.data] 
              ? new Date(attributes[camposDetectados.data]).toLocaleDateString('pt-PT')
              : null,
            // Flag para indicar se tem imagem
            temImagem: !!imagemUrl
          };
        });
        
        console.log(`📋 Mapeamento de campos para ${colecaoPlural}:`, camposDetectados);
        console.log(`🎯 Primeiro item formatado:`, dadosFormatados[0]);
        
        setDados(dadosFormatados);
        setCampos(camposDetectados);
        setErro(null); // Limpar erro se sucesso
      } else {
        console.log(`ℹ️  Coleção "${colecaoPlural}" existe mas está vazia`);
        setDados([]);
        setCampos({});
      }
      
    } catch (erro) {
      console.error(`❌ Erro ao buscar ${collectionName}:`, erro);
      
      // Mensagens de erro detalhadas
      let mensagemUsuario = erro.message;
      
      if (erro.message.includes('Failed to fetch')) {
        mensagemUsuario = 'Não foi possível conectar ao servidor. Verifique sua conexão de internet.';
      } else if (erro.message.includes('coleção não encontrada')) {
        mensagemUsuario = `A coleção "${collectionName}" não foi encontrada no servidor.`;
      }
      
      setErro(mensagemUsuario);
      setDados([]);
      setCampos({});
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarDados();
  }, [collectionName, limit]);

  // Função para recarregar dados manualmente
  const recarregar = () => {
    buscarDados();
  };

  // Retornar também o estado de erro e função de recarregar
  return { 
    dados, 
    campos, 
    carregando, 
    erro, 
    recarregar,
    
    // Métodos úteis adicionais
    total: dados.length,
    temDados: dados.length > 0,
    
    // Helper para buscar por ID
    buscarPorId: (id) => {
      return dados.find(item => item.id == id);
    },
    
    // Helper para filtrar por campo
    filtrarPorCampo: (campo, valor) => {
      return dados.filter(item => item[campo] === valor);
    }
  };
};

export default useStrapiUniversal;