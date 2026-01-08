# Como Instalar o Node.js no Windows

## 🚀 Passo a Passo

### Opção 1: Download Direto (Mais Fácil)

1. **Acesse o site oficial:**
   - Vá para: https://nodejs.org/
   - Ou direto: https://nodejs.org/en/download/

2. **Baixe a versão LTS (Long Term Support):**
   - Clique em "Download Node.js (LTS)"
   - A versão recomendada é a mais recente LTS (ex: v20.x.x ou v18.x.x)

3. **Execute o instalador:**
   - Abra o arquivo `.msi` baixado
   - Clique em "Next" várias vezes
   - **IMPORTANTE:** Marque a opção "Add to PATH" (geralmente vem marcada por padrão)
   - Complete a instalação

4. **Reinicie o PowerShell/Terminal:**
   - Feche e abra novamente o PowerShell
   - Ou feche e abra o Cursor/VS Code

5. **Verifique a instalação:**
   ```powershell
   node --version
   npm --version
   ```

### Opção 2: Usando Chocolatey (Se já tiver instalado)

Se você já tem o Chocolatey instalado:
```powershell
choco install nodejs-lts
```

### Opção 3: Usando Winget (Windows 11/10 com Windows Package Manager)

```powershell
winget install OpenJS.NodeJS.LTS
```

## ✅ Após Instalar

Depois de instalar o Node.js, você poderá:

1. **Instalar as dependências:**
   ```powershell
   npm run install:all
   ```

2. **Executar o projeto:**
   ```powershell
   npm run dev
   ```

## 🔍 Verificar se está funcionando

Execute estes comandos no PowerShell:
```powershell
node --version
npm --version
```

Ambos devem mostrar números de versão (ex: v20.11.0 e 10.2.4)

## ⚠️ Se ainda não funcionar após instalar

1. **Reinicie o computador** (às vezes necessário para atualizar o PATH)
2. **Verifique se o Node.js está no PATH:**
   - Abra "Variáveis de Ambiente" no Windows
   - Verifique se `C:\Program Files\nodejs\` está na variável PATH
3. **Use o caminho completo temporariamente:**
   ```powershell
   "C:\Program Files\nodejs\npm.cmd" run dev
   ```
