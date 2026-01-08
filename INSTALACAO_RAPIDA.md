# ⚡ Instalação Rápida - 3 Passos

## Passo 1: Instalar dependências
```powershell
npm run install:all
```

## Passo 2: Criar arquivo .env

### Opção A - Automático (Recomendado):
```powershell
.\criar-env.ps1
```

### Opção B - Manual:
```powershell
cd backend
Copy-Item env.example .env
cd ..
```

## Passo 3: Executar
```powershell
npm run dev
```

## ✅ Pronto!

- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Admin: http://localhost:3000/admin/login
  - Email: `admin@epfundao.pt`
  - Password: `admin123`

---

📚 Para instruções detalhadas, veja: **GUIA_INSTALACAO.md**
