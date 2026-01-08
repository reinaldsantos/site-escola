# Site Escola - EPF Fundão

Sistema completo de website institucional para escola com área administrativa, desenvolvido com React (frontend) e Node.js/Express (backend).

## 🚀 Funcionalidades

### Público
- ✅ Homepage com hero section e notícias
- ✅ Página "A Escola" com informações institucionais
- ✅ Listagem de cursos (Profissionais e CEF)
- ✅ Página de notícias
- ✅ Página de contactos
- ✅ Design responsivo e moderno

### Área Administrativa (Protegida)
- ✅ Login seguro com JWT
- ✅ Dashboard com estatísticas
- ✅ Gestão completa de notícias (criar, editar, deletar, publicar)
- ✅ Gestão completa de cursos (criar, editar, deletar, publicar)
- ✅ Interface administrativa intuitiva

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação Rápida

### ⚡ 3 Passos Simples:

1. **Instalar dependências:**
   ```bash
   npm run install:all
   ```

2. **Criar arquivo .env:**
   
   **Windows PowerShell (Automático):**
   ```powershell
   .\criar-env.ps1
   ```
   
   **Ou Manualmente:**
   ```powershell
   cd backend
   Copy-Item env.example .env
   cd ..
   ```
   
   📖 **Não sabe como criar?** Veja: **COMO_CRIAR_ENV.txt** ou **GUIA_INSTALACAO.md**

3. **Executar o projeto:**
   ```bash
   npm run dev
   ```

### ✅ Verificar se funcionou:

- Frontend: http://localhost:3000 ✅
- Backend: http://localhost:5000/api/health ✅
- Login Admin: http://localhost:3000/admin/login
  - Email: `admin@epfundao.pt`
  - Password: `admin123`

---

📚 **Para instruções detalhadas e solução de problemas, veja:**
- **INSTALACAO_RAPIDA.md** - Guia rápido
- **GUIA_INSTALACAO.md** - Guia completo passo a passo
- **COMO_CRIAR_ENV.txt** - Como criar o arquivo .env

**⚠️ IMPORTANTE**: Altere a `JWT_SECRET` e as credenciais do admin antes de colocar em produção!

## ▶️ Executar o Projeto

### Desenvolvimento

Para executar frontend e backend simultaneamente:
```bash
npm run dev
```

Ou execute separadamente:

**Backend:**
```bash
cd backend
npm run dev
```
O backend estará disponível em `http://localhost:5000`

**Frontend:**
```bash
cd frontend
npm run dev
```
O frontend estará disponível em `http://localhost:3000`

### Produção

1. Build do frontend:
```bash
cd frontend
npm run build
```

2. Execute o backend:
```bash
cd backend
npm start
```

## 🔐 Credenciais Padrão

- **Email**: admin@epfundao.pt
- **Password**: admin123

**⚠️ IMPORTANTE**: Altere estas credenciais após o primeiro login!

## 📁 Estrutura do Projeto

```
site-escola2/
├── frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas públicas
│   │   ├── pages/Admin/   # Páginas administrativas
│   │   ├── context/       # Context API (Auth)
│   │   └── App.jsx        # Componente principal
│   └── package.json
├── backend/               # API Node.js/Express
│   ├── models/            # Modelos de dados (mock DB)
│   ├── routes/            # Rotas da API
│   ├── middleware/        # Middlewares (auth)
│   └── server.js          # Servidor principal
└── package.json           # Scripts do projeto root
```

## 🔌 API Endpoints

### Públicos
- `GET /api/news` - Listar notícias publicadas
- `GET /api/news/:id` - Obter notícia específica
- `GET /api/courses` - Listar cursos publicados
- `GET /api/courses/:id` - Obter curso específico

### Autenticação
- `POST /api/auth/login` - Login (admin)
- `GET /api/auth/verify` - Verificar token

### Admin (Requer autenticação)
- `GET /api/admin/news` - Listar todas as notícias
- `POST /api/admin/news` - Criar notícia
- `PUT /api/admin/news/:id` - Atualizar notícia
- `DELETE /api/admin/news/:id` - Deletar notícia
- `GET /api/admin/courses` - Listar todos os cursos
- `POST /api/admin/courses` - Criar curso
- `PUT /api/admin/courses/:id` - Atualizar curso
- `DELETE /api/admin/courses/:id` - Deletar curso

## 🎨 Tecnologias Utilizadas

### Frontend
- React 18
- React Router DOM
- Vite
- Axios
- React Icons

### Backend
- Node.js
- Express
- JWT (autenticação)
- bcryptjs (hash de senhas)
- express-validator (validação)

## 📝 Notas Importantes

1. **Base de Dados**: O projeto usa dados mock em memória. Para produção, recomenda-se integrar com MongoDB, PostgreSQL ou outro banco de dados.

2. **Segurança**: 
   - Altere o `JWT_SECRET` antes de colocar em produção
   - Altere as credenciais padrão do admin
   - Configure HTTPS em produção
   - Adicione rate limiting nas rotas de autenticação

3. **Upload de Imagens**: Atualmente, o sistema usa URLs de imagens. Para produção, implemente upload de arquivos (ex: multer + cloud storage).

4. **Variáveis de Ambiente**: Nunca commite o arquivo `.env` no repositório.

## 🚀 Próximos Passos (Melhorias Futuras)

- [ ] Integração com banco de dados real
- [ ] Sistema de upload de imagens
- [ ] Newsletter funcional
- [ ] Página de detalhes de cursos
- [ ] Sistema de comentários nas notícias
- [ ] Busca e filtros
- [ ] SEO otimizado
- [ ] Testes automatizados

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👨‍💻 Desenvolvimento

Baseado no design do site [EPF Fundão](https://www.epfundao.edu.pt/page/homepage)
