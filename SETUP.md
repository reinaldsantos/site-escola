# Instruções de Configuração - Conexão Frontend/Backend

## ⚠️ Problema Resolvido

A conexão entre frontend e backend foi corrigida. Siga estes passos:

## 1. Criar arquivo .env no backend

No Windows PowerShell:
```powershell
cd backend
Copy-Item env.example .env
```

Ou manualmente:
1. Vá para a pasta `backend`
2. Copie o arquivo `env.example` e renomeie para `.env`
3. O conteúdo deve ser:
```
PORT=5000
JWT_SECRET=epfundao-secret-key-2024-change-in-production
JWT_EXPIRES_IN=7d
NODE_ENV=development
ADMIN_EMAIL=admin@epfundao.pt
ADMIN_PASSWORD=admin123
```

## 2. Instalar dependências (se ainda não fez)

```bash
npm run install:all
```

## 3. Executar o projeto

**Opção A - Executar ambos simultaneamente:**
```bash
npm run dev
```

**Opção B - Executar separadamente:**

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

## 4. Verificar se está funcionando

- Backend deve estar em: `http://localhost:5000`
- Frontend deve estar em: `http://localhost:3000`

Teste no navegador:
- Frontend: http://localhost:3000
- Backend health check: http://localhost:5000/api/health

## 🔧 O que foi corrigido:

1. ✅ Configuração do CORS no backend melhorada
2. ✅ Criado arquivo de configuração centralizado do axios
3. ✅ Todas as chamadas de API atualizadas para usar a nova configuração
4. ✅ Interceptors para adicionar token automaticamente
5. ✅ Tratamento de erros melhorado

## 🐛 Se ainda não funcionar:

1. **Verifique se ambos os servidores estão rodando:**
   - Backend na porta 5000
   - Frontend na porta 3000

2. **Verifique o console do navegador (F12):**
   - Veja se há erros de CORS
   - Veja as requisições na aba Network

3. **Verifique o console do backend:**
   - Deve mostrar "Server running on port 5000"

4. **Teste o backend diretamente:**
   ```bash
   curl http://localhost:5000/api/health
   ```
   Deve retornar: `{"status":"OK","message":"Server is running"}`

5. **Se usar uma porta diferente no backend:**
   - Edite `frontend/src/config/axios.js`
   - Altere `baseURL` para sua porta
