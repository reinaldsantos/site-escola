@echo off
chcp 65001 > nul
echo.
echo =======================================
echo   🏫 SISTEMA ESCOLA - INICIANDO TUDO
echo =======================================
echo.
echo [1/4] Iniciando Strapi CMS...
start powershell -NoExit -WindowStyle Hidden -Command "cd /d '%~dp0' && npm run develop"
timeout /t 10 /nobreak > nul

echo [2/4] Tornando acessível para celular...
if exist "C:\ngrok\ngrok.exe" (
    start powershell -NoExit -WindowStyle Hidden -Command "cd /d C:\ngrok && ngrok http 1337"
    echo    Ngrok iniciado! Acesso celular em: http://localhost:4040
) else (
    echo    Ngrok não instalado. Instale em: https://ngrok.com/download
)

echo [3/4] Iniciando atualizador automático...
start powershell -WindowStyle Hidden -Command "cd /d '%~dp0' && powershell -ExecutionPolicy Bypass -File auto-atualizar.ps1"

echo [4/4] Abrindo painel de controle...
start powershell -WindowStyle Hidden -Command "cd /d '%~dp0' && powershell -ExecutionPolicy Bypass -File painel-controle.ps1"

echo.
echo =======================================
echo   ✅ SISTEMA PRONTO PARA USO!
echo =======================================
echo.
echo LINKS IMPORTANTES:
echo 1. Painel Admin (Professor): http://localhost:1337/admin
echo 2. Site da Escola: site-escola.html
echo 3. Acesso Celular: http://localhost:4040
echo.
echo Mantenha esta janela aberta!
echo.
pause
