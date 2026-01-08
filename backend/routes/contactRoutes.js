import express from 'express';
import { testarConexaoEmail, enviarEmailTeste } from '../services/emailService.js';

const router = express.Router();

// Rota para testar conexão com email
router.get('/testar-conexao-email', async (req, res) => {
  const conectado = await testarConexaoEmail();
  res.json({ 
    conectado,
    configuracao: {
      usuario: process.env.SMTP_USERNAME ? 'Configurado' : 'Não configurado',
      destinatario: process.env.EMAIL_TO_DIRECAO || 'Não configurado'
    }
  });
});

// Rota para enviar email de teste
router.get('/enviar-teste-email', async (req, res) => {
  const resultado = await enviarEmailTeste();
  res.json(resultado);
});

// Rota para enviar contato real
router.post('/enviar-contato', async (req, res) => {
  try {
    const { nome, email, assunto, mensagem, telefone, aluno, turma } = req.body;
    
    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return res.status(400).json({
        sucesso: false,
        erro: 'Preencha todos os campos obrigatórios: nome, email, assunto e mensagem'
      });
    }
    
    console.log('📨 Recebendo contato:', req.body);

    
    // Por enquanto só registramos no console
    // Depois implementamos o envio real de email
    res.json({
      sucesso: true,
      mensagem: 'Mensagem recebida com sucesso! (modo teste)',
      dados: { 
        nome, 
        email, 
        assunto,
        telefone: telefone || 'Não informado',
        aluno: aluno || 'Não informado', 
        turma: turma || 'Não informado'
      }
    });
    
  } catch (error) {
    console.error('❌ Erro na rota de contato:', error);
    res.status(500).json({
      sucesso: false,
      erro: 'Erro interno do servidor'
    });
  }
});

export default router;
