import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("🔧 Configurando sistema de email...");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

// Testar conexão com email
export const testarConexaoEmail = async () => {
  try {
    console.log("🔍 Testando conexão com Gmail...");
    await transporter.verify();
    console.log("✅ Conexão com Gmail OK!");
    return true;
  } catch (error) {
    console.error("❌ Erro na conexão:", error.message);
    return false;
  }
};

// Enviar email de teste
export const enviarEmailTeste = async () => {
  try {
    console.log("✉️ Enviando email teste...");
    
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO_DIRECAO,
      subject: "✅ Teste do Site da Escola",
      text: "Este é um teste do sistema de email. Se recebeu, está funcionando!",
      html: "<h1>✅ Teste OK!</h1><p>Sistema de email funcionando!</p>"
    });
    
    console.log("📤 Email enviado!");
    return { sucesso: true, id: info.messageId };
    
  } catch (error) {
    console.error("❌ Erro ao enviar:", error.message);
    return { sucesso: false, erro: error.message };
  }
};
