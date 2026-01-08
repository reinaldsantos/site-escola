# Script para criar o arquivo .env no backend automaticamente
# Execute este script com: .\criar-env.ps1

Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Criando arquivo .env no backend..." -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# Verificar se está na pasta correta
if (-not (Test-Path "backend")) {
    Write-Host "❌ ERRO: Pasta 'backend' não encontrada!" -ForegroundColor Red
    Write-Host "   Certifique-se de executar este script na pasta raiz do projeto." -ForegroundColor Yellow
    Write-Host "   Pasta atual: $(Get-Location)" -ForegroundColor Gray
    exit 1
}

# Verificar se já existe .env
if (Test-Path "backend\.env") {
    Write-Host "⚠️  AVISO: O arquivo backend\.env já existe!" -ForegroundColor Yellow
    $resposta = Read-Host "   Deseja substituir? (S/N)"
    if ($resposta -ne "S" -and $resposta -ne "s") {
        Write-Host "   Operação cancelada." -ForegroundColor Gray
        exit 0
    }
    Remove-Item "backend\.env" -Force
}

# Verificar se existe env.example
if (Test-Path "backend\env.example") {
    Write-Host "📋 Copiando de env.example..." -ForegroundColor Green
    Copy-Item "backend\env.example" "backend\.env"
    Write-Host "✅ Arquivo .env criado com sucesso!" -ForegroundColor Green
} else {
    Write-Host "📝 Criando arquivo .env do zero..." -ForegroundColor Green
    
    # Conteúdo do arquivo .env
    $conteudo = @"
PORT=5000
JWT_SECRET=epfundao-secret-key-2024-change-in-production
JWT_EXPIRES_IN=7d
NODE_ENV=development
ADMIN_EMAIL=admin@epfundao.pt
ADMIN_PASSWORD=admin123
"@
    
    # Criar o arquivo
    $conteudo | Out-File -FilePath "backend\.env" -Encoding utf8 -NoNewline
    Write-Host "✅ Arquivo .env criado com sucesso!" -ForegroundColor Green
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Configuração:" -ForegroundColor Yellow
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  Porta do Backend: 5000" -ForegroundColor White
Write-Host "  Email Admin: admin@epfundao.pt" -ForegroundColor White
Write-Host "  Password Admin: admin123" -ForegroundColor White
Write-Host ""
Write-Host "⚠️  IMPORTANTE: Altere a senha e JWT_SECRET em produção!" -ForegroundColor Yellow
Write-Host ""
Write-Host "✅ Pronto! Agora você pode executar: npm run dev" -ForegroundColor Green
Write-Host ""
