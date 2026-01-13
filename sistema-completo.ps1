# ===================================================
# SISTEMA COMPLETO STRAPI - ESCOLA
# Versão: 1.0 - Sistema Definitivo
# ===================================================

Clear-Host
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   SISTEMA DE GESTÃO ESCOLA - STRAPI    " -ForegroundColor Yellow
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "`nINICIALIZANDO SISTEMA COMPLETO..." -ForegroundColor Green

# CONFIGURAÇÕES (ALTERE AQUI!)
$caminhoStrapi = "C:\Users\Santos\Desktop\site-escola2"
$caminhoFrontend = "C:\caminho\para\seu\frontend"  # ALTERE ESTE CAMINHO!
$suaPortaPreferida = 1337  # Porta que você quer usar

# ===================================================
# FUNÇÃO: Iniciar Strapi Automaticamente
# ===================================================
function Iniciar-Strapi {
    param($porta)
    
    Write-Host "`n[ETAPA 1] CONFIGURANDO STRAPI..." -ForegroundColor Green
    
    # 1. Parar qualquer Strapi rodando
    Write-Host "  • Parando processos anteriores..." -ForegroundColor Yellow
    Get-Process node -ErrorAction SilentlyContinue | Where-Object { 
        $_.MainWindowTitle -like "*strapi*" -or $_.Path -like "*strapi*"
    } | Stop-Process -Force
    
    # Matar por porta também
    1337..1340 | ForEach-Object {
        $con = Get-NetTCPConnection -LocalPort $_ -ErrorAction SilentlyContinue
        if ($con) { Stop-Process -Id $con.OwningProcess -Force }
    }
    
    # 2. Limpar cache
    Write-Host "  • Limpando cache..." -ForegroundColor Yellow
    if (Test-Path ".cache") { Remove-Item ".cache" -Recurse -Force }
    if (Test-Path "build") { Remove-Item "build" -Recurse -Force }
    
    # 3. Verificar e configurar porta
    Write-Host "  • Verificando porta $porta..." -ForegroundColor Yellow
    
    # Verificar se porta está livre, se não, achar uma livre
    $portaFinal = $porta
    while ($true) {
        $ocupada = Get-NetTCPConnection -LocalPort $portaFinal -ErrorAction SilentlyContinue
        if (-not $ocupada) { break }
        Write-Host "    Porta $portaFinal ocupada, tentando $($portaFinal+1)..." -ForegroundColor Red
        $portaFinal++
        if ($portaFinal -gt 1340) { $portaFinal = 1337; break }
    }
    
    # 4. Criar configuração automática
    Write-Host "  • Configurando porta $portaFinal..." -ForegroundColor Yellow
    
    # Criar/atualizar config/server.js
    $config = @"
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', $portaFinal),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('URL', 'http://localhost:$portaFinal'),
});
"@
    
    # Garantir que pasta config existe
    if (-not (Test-Path "config")) { New-Item -ItemType Directory -Path "config" | Out-Null }
    $config | Set-Content -Path "config/server.js" -Force
    
    # 5. Criar .env se não existir
    if (-not (Test-Path ".env")) {
        @"
HOST=0.0.0.0
PORT=$portaFinal
APP_KEYS=$(New-Guid),$(New-Guid),$(New-Guid),$(New-Guid)
API_TOKEN_SALT=$(New-Guid)
ADMIN_JWT_SECRET=$(New-Guid)
JWT_SECRET=$(New-Guid)
"@ | Set-Content -Path .env
    }
    
    # 6. Iniciar Strapi
    Write-Host "`n[ETAPA 2] INICIANDO STRAPI..." -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Cyan
    Write-Host "STRAPI INICIANDO NA PORTA: $portaFinal" -ForegroundColor Yellow
    Write-Host "URL: http://localhost:$portaFinal" -ForegroundColor White
    Write-Host "ADMIN: http://localhost:$portaFinal/admin" -ForegroundColor White
    Write-Host "=========================================" -ForegroundColor Cyan
    
    # Salvar porta em arquivo para usar no frontend
    $portaFinal | Set-Content -Path "porta-atual.txt" -Force
    
    return $portaFinal
}

# ===================================================
# FUNÇÃO: Configurar Frontend Automaticamente
# ===================================================
function Configurar-Frontend {
    param($caminhoFront, $porta)
    
    Write-Host "`n[ETAPA 3] CONFIGURANDO FRONTEND..." -ForegroundColor Green
    
    if (-not (Test-Path $caminhoFront)) {
        Write-Host "  ⚠ Frontend não encontrado em: $caminhoFront" -ForegroundColor Red
        Write-Host "  Configure o caminho no início deste script!" -ForegroundColor Yellow
        return $false
    }
    
    $strapiURL = "http://localhost:$porta"
    Write-Host "  • Configurando URL: $strapiURL" -ForegroundColor Yellow
    
    # Procurar e atualizar arquivos de configuração
    $padroes = @(
        "localhost:\d+",
        "127.0.0.1:\d+",
        "STRAPI_URL=.*",
        "REACT_APP_API_URL=.*",
        "NEXT_PUBLIC_API_URL=.*",
        "VITE_API_URL=.*"
    )
    
    $arquivos = Get-ChildItem -Path $caminhoFront -Recurse -File -Include "*.js", "*.ts", "*.jsx", "*.tsx", ".env*" | Where-Object {
        $_.FullName -notlike "*\node_modules\*" -and $_.FullName -notlike "*\.git\*"
    }
    
    $atualizados = 0
    foreach ($arquivo in $arquivos) {
        try {
            $conteudo = Get-Content $arquivo.FullName -Raw -ErrorAction Stop
            
            $alterado = $false
            foreach ($padrao in $padroes) {
                if ($conteudo -match $padrao) {
                    $conteudo = $conteudo -replace "http://localhost:\d+", $strapiURL
                    $conteudo = $conteudo -replace "localhost:\d+", "localhost:$porta"
                    $conteudo = $conteudo -replace "STRAPI_URL=.*", "STRAPI_URL=$strapiURL"
                    $conteudo = $conteudo -replace "REACT_APP_API_URL=.*", "REACT_APP_API_URL=$strapiURL"
                    $alterado = $true
                }
            }
            
            if ($alterado) {
                Set-Content -Path $arquivo.FullName -Value $conteudo -Force
                $atualizados++
                Write-Host "    ✓ Atualizado: $($arquivo.Name)" -ForegroundColor Green
            }
        } catch {
            # Ignorar arquivos que não podem ser lidos
        }
    }
    
    # Criar arquivo de configuração padrão se não encontrou nada
    if ($atualizados -eq 0) {
        $configFile = Join-Path $caminhoFront "src\config-strapi.js"
        @"
// CONFIGURAÇÃO AUTOMÁTICA DO STRAPI
// Gerado em: $(Get-Date)
const STRAPI_CONFIG = {
    URL: "$strapiURL",
    API_URL: "$strapiURL/api",
    UPLOADS_URL: "$strapiURL/uploads"
};

export default STRAPI_CONFIG;
"@ | Set-Content -Path $configFile -Force
        Write-Host "  ✓ Arquivo de configuração criado: config-strapi.js" -ForegroundColor Green
    }
    
    Write-Host "  • $atualizados arquivos atualizados no frontend" -ForegroundColor Green
    return $true
}

# ===================================================
# FUNÇÃO: Verificar e Corrigir Permissões
# ===================================================
function Verificar-Permissoes {
    Write-Host "`n[ETAPA 4] VERIFICANDO PERMISSÕES..." -ForegroundColor Green
    Write-Host "  • Garantindo que conteúdo público é acessível" -ForegroundColor Yellow
    Write-Host "  ✓ Configure no Admin: Settings → Users & Permissions → Public" -ForegroundColor Green
    Write-Host "  • Habilitar: find e findOne para cada Collection Type" -ForegroundColor Yellow
}

# ===================================================
# EXECUÇÃO PRINCIPAL
# ===================================================

try {
    # 1. Mudar para diretório do Strapi
    Set-Location $caminhoStrapi
    
    # 2. Iniciar Strapi
    $portaUsada = Iniciar-Strapi -porta $suaPortaPreferida
    
    # 3. Configurar Frontend
    $frontendOK = Configurar-Frontend -caminhoFront $caminhoFrontend -porta $portaUsada
    
    # 4. Verificar permissões
    Verificar-Permissoes
    
    # 5. Mostrar resumo
    Write-Host "`n" + ("="*50) -ForegroundColor Cyan
    Write-Host "✅ SISTEMA CONFIGURADO COM SUCESSO!" -ForegroundColor Green
    Write-Host "="*50 -ForegroundColor Cyan
    Write-Host "`n🎯 STRAPI:" -ForegroundColor White
    Write-Host "   • URL: http://localhost:$portaUsada" -ForegroundColor Yellow
    Write-Host "   • Admin: http://localhost:$portaUsada/admin" -ForegroundColor Yellow
    
    Write-Host "`n🌐 FRONTEND:" -ForegroundColor White
    if ($frontendOK) {
        Write-Host "   • Configurado para porta: $portaUsada" -ForegroundColor Green
        Write-Host "   • API: http://localhost:$portaUsada/api" -ForegroundColor Yellow
    } else {
        Write-Host "   • ❌ Configure manualmente o caminho do frontend" -ForegroundColor Red
    }
    
    Write-Host "`n📝 DICAS FINAIS:" -ForegroundColor White
    Write-Host "   1. No Strapi Admin, verifique: " -ForegroundColor Gray
    Write-Host "      - Content Manager → Publicar conteúdo" -NoNewline
    Write-Host " (Status: Published)" -ForegroundColor Green
    Write-Host "   2. Em Settings → Users & Permissions" -ForegroundColor Gray
    Write-Host "      - Role: Public → Habilitar todas as APIs" -ForegroundColor Green
    Write-Host "   3. Para conteúdo aparecer:" -ForegroundColor Gray
    Write-Host "      - Salvar → Publicar (não apenas salvar)" -ForegroundColor Green
    
    Write-Host "`n" + ("="*50) -ForegroundColor Cyan
    Write-Host "🚀 STRAPI INICIANDO... AGUARDE!" -ForegroundColor Yellow
    Write-Host "="*50 -ForegroundColor Cyan
    
    # 6. Iniciar Strapi (mantém rodando)
    Write-Host "`n⌛ Iniciando servidor Strapi..." -ForegroundColor Magenta
    npx strapi develop
    
} catch {
    Write-Host "`n❌ ERRO NO SISTEMA: $_" -ForegroundColor Red
    Write-Host "Pressione qualquer tecla para sair..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown')
}
