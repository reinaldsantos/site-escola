import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

// Carregar variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configurar CORS para permitir o frontend React
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar rotas de contato (as que criamos)
app.use("/api/contact", contactRoutes);

// Rota de saúde
app.get("/api/health", (req, res) => {
  res.json({
    status: "online",
    timestamp: new Date().toISOString(),
    service: "Backend Escola EP Fundão",
    emailConfigurado: !!process.env.SMTP_USERNAME,
    emailDestino: process.env.EMAIL_TO_DIRECAO || "Não configurado"
  });
});

// Rota principal
app.get("/", (req, res) => {
  res.json({
    message: "API da Escola EP Fundão",
    version: "1.0.0",
    sistema: "Sistema de Contato por Email",
    endpoints: {
      testarConexaoEmail: "GET /api/contact/testar-conexao-email",
      enviarTesteEmail: "GET /api/contact/enviar-teste-email",
      enviarContato: "POST /api/contact/enviar-contato",
      health: "GET /api/health"
    }
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log("🚀 Servidor backend rodando na porta " + PORT);
  console.log("🌐 Acesse: http://localhost:" + PORT);
  console.log("📧 Email configurado: " + (process.env.SMTP_USERNAME ? "Sim ✅" : "Não ❌"));
  console.log("📨 Receberá em: " + (process.env.EMAIL_TO_DIRECAO || "Não configurado"));
  
  if (process.env.SMTP_USERNAME && process.env.SMTP_PASSWORD) {
    console.log("");
    console.log("💡 TESTES DISPONÍVEIS:");
    console.log("1. http://localhost:" + PORT + "/api/health");
    console.log("2. http://localhost:" + PORT + "/api/contact/testar-conexao-email");
    console.log("3. http://localhost:" + PORT + "/api/contact/enviar-teste-email");
  }
});
