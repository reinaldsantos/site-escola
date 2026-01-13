# ============================================
# CORREÇÃO PARA STRAPI v5 - ESCOLA
# ============================================

Clear-Host
Write-Host "🔧 CORRIGINDO STRAPI v5" -ForegroundColor Yellow
Write-Host "=========================" -ForegroundColor Cyan

# 1. Testar API
Write-Host "`n[1/4] Testando endpoints da API..." -ForegroundColor Green

$endpoints = @(
    "http://localhost:1337/api/noticias",
    "http://localhost:1337/api/eventos", 
    "http://localhost:1337/api/cursos"
)

foreach ($endpoint in $endpoints) {
    try {
        $response = Invoke-RestMethod -Uri $endpoint -Method Get -ErrorAction Stop
        Write-Host "  ✓ $endpoint" -ForegroundColor Green
    } catch {
        Write-Host "  ✗ $endpoint - $($_.Exception.Message)" -ForegroundColor Red
    }
}

# 2. Criar script de teste
Write-Host "`n[2/4] Criando script de teste..." -ForegroundColor Green

$testScript = @"
// test-strapi-api.js
// Execute: node test-strapi-api.js

const fetchNoticias = async () => {
    try {
        console.log('🔍 Testando API do Strapi v5...');
        
        // Teste 1: Listar notícias
        const response = await fetch('http://localhost:1337/api/noticias');
        const data = await response.json();
        
        console.log('✅ API conectada com sucesso!');
        console.log('📊 Total de notícias:', data.meta?.pagination?.total || data.data?.length || 0);
        
        // Teste 2: Listar com populate
        const response2 = await fetch('http://localhost:1337/api/noticias?populate=*');
        const data2 = await response2.json();
        
        if (data2.data && data2.data.length > 0) {
            console.log('📰 Última notícia:', data2.data[0].attributes?.titulo || 'Sem título');
        }
        
    } catch (error) {
        console.error('❌ Erro ao conectar com a API:', error.message);
        console.log('📝 Verifique:');
        console.log('   1. Strapi está rodando? (http://localhost:1337)');
        console.log('   2. Permissões públicas estão habilitadas?');
        console.log('   3. URL correta: http://localhost:1337/api/noticias');
    }
};

fetchNoticias();
"@

$testScript | Set-Content -Path "test-strapi-api.js" -Force
Write-Host "  ✓ Script de teste criado: test-strapi-api.js" -ForegroundColor Green

# 3. Atualizar frontend React
Write-Host "`n[3/4] Atualizando frontend React..." -ForegroundColor Green

cd "C:\Users\Santos\Desktop\site-escola2\frontend"

# Criar/corrigir arquivo de configuração
$configContent = @"
// config.js - Configuração Strapi v5
export const API_CONFIG = {
    BASE_URL: 'http://localhost:1337',
    API_URL: 'http://localhost:1337/api',
    
    // Endpoints
    NOTICIAS: 'noticias',
    EVENTOS: 'eventos',
    CURSOS: 'cursos',
    UPLOADS: 'uploads',
    
    // Funções úteis
    getUrl: (endpoint) => \`\${API_CONFIG.API_URL}/\${endpoint}\`,
    getNoticias: () => \`\${API_CONFIG.API_URL}/noticias?populate=*\`,
    getNoticia: (id) => \`\${API_CONFIG.API_URL}/noticias/\${id}?populate=*\`
};

export default API_CONFIG;
"@

$configContent | Set-Content -Path "src/config.js" -Force
Write-Host "  ✓ Configuração atualizada: src/config.js" -ForegroundColor Green

# 4. Criar exemplo de chamada React
Write-Host "`n[4/4] Criando exemplo de uso..." -ForegroundColor Green

$exemploReact = @"
// Exemplo de uso no React - src/services/api.js
import API_CONFIG from '../config';

export const getNoticias = async () => {
    try {
        const response = await fetch(API_CONFIG.getNoticias());
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        
        // Strapi v5 retorna { data: [...] }
        if (data.data) {
            return data.data.map(item => ({
                id: item.id,
                ...item.attributes
            }));
        }
        
        return data;
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
        return [];
    }
};

export const getNoticiaById = async (id) => {
    try {
        const response = await fetch(\`\${API_CONFIG.API_URL}/noticias/\${id}?populate=*\`);
        if (!response.ok) throw new Error('Erro na API');
        
        const data = await response.json();
        return {
            id: data.data.id,
            ...data.data.attributes
        };
    } catch (error) {
        console.error('Erro ao buscar notícia:', error);
        return null;
    }
};
"@

$exemploReact | Set-Content -Path "src/services/api-example.js" -Force
Write-Host "  ✓ Exemplo criado: src/services/api-example.js" -ForegroundColor Green

# 5. Mostrar resumo
Write-Host "`n" + ("="*50) -ForegroundColor Cyan
Write-Host "✅ CONFIGURAÇÃO COMPLETA!" -ForegroundColor Green
Write-Host "="*50 -ForegroundColor Cyan

Write-Host "`n📌 URLs IMPORTANTES:" -ForegroundColor White
Write-Host "   • Strapi Admin: http://localhost:1337/admin" -ForegroundColor Yellow
Write-Host "   • API Notícias: http://localhost:1337/api/noticias" -ForegroundColor Yellow
Write-Host "   • Frontend: http://localhost:3000" -ForegroundColor Yellow

Write-Host "`n🔧 PRÓXIMOS PASSOS:" -ForegroundColor White
Write-Host "   1. Reinicie o Strapi:" -ForegroundColor Gray
Write-Host "      cd C:\Users\Santos\Desktop\site-escola2\backend" -ForegroundColor Gray
Write-Host "      npm run develop" -ForegroundColor Gray
Write-Host "   " -NoNewline
Write-Host "   2. Configure permissões:" -ForegroundColor Gray
Write-Host "      Acesse: http://localhost:1337/admin" -ForegroundColor Gray
Write-Host "      Settings → Users & Permissions → Public" -ForegroundColor Gray
Write-Host "      Habilitar: find e findOne para cada collection" -ForegroundColor Gray
Write-Host "   " -NoNewline
Write-Host "   3. Teste a API:" -ForegroundColor Gray
Write-Host "      Abra: http://localhost:1337/api/noticias" -ForegroundColor Gray
Write-Host "      Deve retornar JSON com notícias" -ForegroundColor Gray
Write-Host "   " -NoNewline
Write-Host "   4. No seu código React, use:" -ForegroundColor Gray
Write-Host "      import { getNoticias } from './services/api-example';" -ForegroundColor Green

Write-Host "`n" + ("="*50) -ForegroundColor Cyan
Write-Host "🎯 TESTE RÁPIDO DA API:" -ForegroundColor Yellow
Write-Host "="*50 -ForegroundColor Cyan
Write-Host "`nExecute no navegador:" -ForegroundColor White
Write-Host "  http://localhost:1337/api/noticias" -ForegroundColor Yellow
Write-Host "`nSe aparecer 'Forbidden', configure as permissões!" -ForegroundColor Red
Write-Host "`nSe aparecer JSON, está funcionando! 🎉" -ForegroundColor Green
