@echo off
echo ================================
echo  DEPLOY CORS FIX
echo ================================
echo.

echo 1. Verificando alterações...
git add vercel.json
git add src/pages/NoticiasPage.jsx

echo.
echo 2. Commit...
git commit -m "fix: cors para vercel"

echo.
echo 3. Push...
git push origin main

echo.
echo ✅ Deploy iniciado!
echo.
echo 🔗 Seu site: https://site-escola-five-sand.vercel.app
echo ⏱️  Aguarde 2-3 minutos para atualizar
pause
