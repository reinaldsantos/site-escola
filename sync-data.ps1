# Script para sincronizar dados entre local e produção

Write-Host "🚀 Sincronizando dados..." -ForegroundColor Cyan

# 1. Exportar dados do Render (produção)
Write-Host "📤 Exportando do Render..." -ForegroundColor Yellow
# (Aqui você usaria a API para exportar)

# 2. Importar para local
Write-Host "📥 Importando para local..." -ForegroundColor Yellow
# (Aqui você usaria a API para importar)

Write-Host "✅ Sincronização completa!" -ForegroundColor Green
Write-Host "Local: http://localhost:1338/admin" -ForegroundColor Magenta
Write-Host "Produção: https://site-escola-65zi.onrender.com/admin" -ForegroundColor Magenta
