@echo off
chcp 65001 > nul
cls

echo ========================================
echo   SISTEMA EPF FUNDAO - INICIANDO
echo ========================================
echo.

echo [1/3] Iniciando Strapi CMS...
start powershell -NoExit -WindowStyle Hidden -Command "cd '%~dp0'; npm run develop"

echo [2/3] Iniciando seu React App...
timeout /t 5 /nobreak > nul
start powershell -NoExit -Command "cd '%~dp0'; npm start"

echo [3/3] Tornando acessivel para celular...
if exist "C:\ngrok\ngrok.exe" (
    start powershell -WindowStyle Hidden -Command "cd /d C:\ngrok; ngrok http 1337"
    echo    NGrok iniciado! Acesso celular: http://localhost:4040
) else (
    echo    NGrok nao instalado. Para acesso celular: https://ngrok.com/download
)

echo.
echo ========================================
echo   SISTEMA INICIADO COM SUCESSO!
echo ========================================
echo.
echo ACESSOS:
echo 1. Painel Admin (Professor): http://localhost:1337/admin
echo 2. Seu Site React: http://localhost:3000
echo 3. Acesso Celular: http://localhost:4040
echo.
echo CREDENCIAIS STRAPI:
echo Email: epfundaosite@gmail.com
echo Senha: JorgeGamboa!
echo.
pause
