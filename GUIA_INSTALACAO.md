# 📚 Guia Completo de Instalação - Passo a Passo

Este guia vai te ajudar a configurar o projeto do zero, com explicações detalhadas para cada passo.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

1. **Node.js** (versão 18 ou superior)
   - Baixe em: https://nodejs.org/
   - Para verificar se está instalado, abra o PowerShell e digite:
   ```powershell
   node --version
   ```
   - Deve mostrar algo como: `v18.17.0` ou superior

2. **npm** (geralmente vem com o Node.js)
   - Para verificar:
   ```powershell
   npm --version
   ```

---

## 🚀 PASSO 1: Verificar se está na pasta correta

Abra o PowerShell (ou Terminal) e navegue até a pasta do projeto:

```powershell
cd C:\Users\Santos\Desktop\site-escola2
```

Verifique se está na pasta certa:
```powershell
dir
```

Você deve ver pastas como: `frontend`, `backend`, `package.json`, etc.

---

## 📦 PASSO 2: Instalar Dependências

Execute este comando na pasta raiz do projeto:

```powershell
npm run install:all
```

**O que este comando faz:**
- Instala as dependências do projeto raiz
- Instala as dependências do frontend
- Instala as dependências do backend

**⏱️ Tempo estimado:** 2-5 minutos

**💡 Se aparecer algum erro:**
- Certifique-se de ter Node.js instalado
- Tente executar novamente

---

## ⚙️ PASSO 3: Criar o arquivo .env no backend

Este é o passo MAIS IMPORTANTE! Sem este arquivo, o backend não funciona.

### Opção A: Usando PowerShell (Recomendado)

```powershell
cd backend
Copy-Item env.example .env
cd ..
```

### Opção B: Manualmente (Passo a Passo)

1. Vá até a pasta `backend` no Windows Explorer
2. Procure o arquivo chamado `env.example`
3. Clique com o botão direito nele
4. Selecione **"Copiar"**
5. Clique com o botão direito em um espaço vazio na mesma pasta
6. Selecione **"Colar"**
7. Renomeie o arquivo copiado de `env.example - Cópia` para `.env`
   - **Importante:** O nome deve ser exatamente `.env` (sem extensão)

### Opção C: Criar manualmente (Se não tiver env.example)

1. Na pasta `backend`, crie um novo arquivo de texto
2. Renomeie para `.env` (sem extensão)
3. Abra o arquivo com um editor de texto (Bloco de Notas, VS Code, etc.)
4. Cole o seguinte conteúdo:

```
PORT=5000
JWT_SECRET=epfundao-secret-key-2024-change-in-production
JWT_EXPIRES_IN=7d
NODE_ENV=development
ADMIN_EMAIL=admin@epfundao.pt
ADMIN_PASSWORD=admin123
```

5. Salve o arquivo

### ✅ Verificar se criou corretamente:

No PowerShell:
```powershell
cd backend
dir .env
```

Se aparecer o arquivo `.env`, está correto! 🎉

---

## 🏃 PASSO 4: Executar o Projeto

Agora você tem duas opções:

### Opção A: Executar tudo de uma vez (Recomendado)

Na pasta raiz do projeto:
```powershell
npm run dev
```

Isso vai iniciar:
- ✅ Backend na porta 5000
- ✅ Frontend na porta 3000

### Opção B: Executar separadamente

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```

Você deve ver: `Server running on port 5000` ✅

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm run dev
```

Você deve ver algo como:
```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

---

## ✅ PASSO 5: Verificar se está funcionando

### 1. Testar o Backend

Abra no navegador:
```
http://localhost:5000/api/health
```

**Deve aparecer:**
```json
{"status":"OK","message":"Server is running"}
```

✅ Se aparecer isso, o backend está funcionando!

### 2. Testar o Frontend

Abra no navegador:
```
http://localhost:3000
```

**Deve aparecer:**
- A página inicial da escola
- Menu de navegação
- Sem erros no console (F12)

✅ Se aparecer a página, o frontend está funcionando!

### 3. Testar a Área Admin

1. Vá para: http://localhost:3000/admin/login
2. Use as credenciais:
   - **Email:** `admin@epfundao.pt`
   - **Password:** `admin123`
3. Clique em "Entrar"

✅ Se entrar no dashboard, a conexão está funcionando perfeitamente!

---

## 🔍 Solução de Problemas

### ❌ Problema: "Cannot find module"

**Solução:**
```powershell
# Na pasta raiz
npm run install:all
```

### ❌ Problema: "Port 5000 already in use"

**Solução 1:** Pare o processo que está usando a porta
```powershell
netstat -ano | findstr :5000
# Anote o PID e depois:
taskkill /PID <numero_do_pid> /F
```

**Solução 2:** Mude a porta no arquivo `backend/.env`:
```
PORT=5001
```

E no arquivo `frontend/src/config/axios.js`, mude:
```javascript
baseURL: 'http://localhost:5001/api'
```

### ❌ Problema: "Cannot GET /api/health"

**Solução:**
1. Verifique se o backend está rodando
2. Verifique se o arquivo `.env` existe na pasta `backend`
3. Verifique se o console do backend não mostra erros

### ❌ Problema: Frontend não carrega dados

**Solução:**
1. Abra o console do navegador (F12)
2. Vá na aba "Network" (Rede)
3. Recarregue a página (F5)
4. Veja se há requisições falhando
5. Verifique se o backend está rodando na porta 5000

### ❌ Problema: "CORS error" no console

**Solução:**
1. Certifique-se de que ambos os servidores estão rodando
2. Verifique se a URL no navegador é `http://localhost:3000` (não `127.0.0.1`)
3. Reinicie ambos os servidores

---

## 📝 Checklist Final

Antes de considerar tudo pronto, verifique:

- [ ] Node.js instalado e funcionando
- [ ] Dependências instaladas (`npm run install:all` executado com sucesso)
- [ ] Arquivo `.env` criado na pasta `backend`
- [ ] Backend rodando na porta 5000
- [ ] Frontend rodando na porta 3000
- [ ] Backend responde em: http://localhost:5000/api/health
- [ ] Frontend carrega em: http://localhost:3000
- [ ] Login admin funciona

---

## 🎯 Comandos Rápidos de Referência

```powershell
# Instalar tudo
npm run install:all

# Executar tudo
npm run dev

# Só backend
cd backend
npm run dev

# Só frontend
cd frontend
npm run dev

# Criar .env
cd backend
Copy-Item env.example .env
```

---

## 💡 Dicas

1. **Mantenha dois terminais abertos** se executar separadamente
2. **Não feche os terminais** enquanto estiver usando o projeto
3. **Use Ctrl+C** para parar os servidores
4. **Sempre verifique os consoles** se algo não funcionar

---

## 📞 Precisa de Ajuda?

Se ainda tiver problemas:

1. Verifique os erros no console do navegador (F12)
2. Verifique os erros no terminal do backend
3. Certifique-se de seguir TODOS os passos acima
4. Verifique se está usando as portas corretas (3000 e 5000)

---

**🎉 Pronto! Seu projeto deve estar funcionando agora!**
