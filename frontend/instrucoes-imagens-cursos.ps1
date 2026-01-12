# 📸 INSTRUÇÕES PARA IMAGENS DOS NOVOS CURSOS EPF
# =================================================

Write-Host "🖼️  IMAGENS NECESSÁRIAS PARA OS NOVOS CURSOS" -ForegroundColor Cyan

# Lista de imagens necessárias
$imagensNecessarias = @{
    "manutencao-industrial.jpg" = @{
        Curso = "Técnico de Manutenção Industrial"
        Pasta = "public/images/cursos/manutencao/"
        Descricao = "Imagem mostrando manutenção de máquinas industriais"
        Sugestao = "Máquinas, ferramentas, técnicos em ação"
    }
    "mecatronica-automovel.jpg" = @{
        Curso = "Técnico de Mecatrónica Automóvel"
        Pasta = "public/images/cursos/manutencao/"
        Descricao = "Mecatrónica aplicada a veículos automóveis"
        Sugestao = "Carros, diagnósticos computorizados, eletrónica automóvel"
    }
    "padaria-pastelaria.jpg" = @{
        Curso = "Padeiro/Pasteleiro (CEF)"
        Pasta = "public/images/cursos/alimentacao/"
        Descricao = "Artesanato em panificação e pastelaria"
        Sugestao = "Pães, bolos, pasteis, cozinha profissional"
    }
    "restaurante-bar.jpg" = @{
        Curso = "Empregado de Restaurante/Bar"
        Pasta = "public/images/cursos/alimentacao/"
        Descricao = "Serviço em restauração e hotelaria"
        Sugestao = "Restaurante, serviço de mesa, bar, hotelaria"
    }
    "desenho-construcao.jpg" = @{
        Curso = "Técnico de Desenho de Construção Civil"
        Pasta = "public/images/cursos/construcao/"
        Descricao = "Desenho técnico e projetos de construção"
        Sugestao = "Plantas, AutoCAD, projetos arquitetónicos"
    }
    "programacao-informatica.jpg" = @{
        Curso = "Programação de Informática"
        Pasta = "public/images/cursos/informatica/"
        Descricao = "Desenvolvimento de software e aplicações"
        Sugestao = "Computadores, código, programação, desenvolvimento"
    }
}

Write-Host "`n📋 LISTA DE IMAGENS NECESSÁRIAS:" -ForegroundColor Green

foreach ($imagem in $imagensNecessarias.Keys) {
    $info = $imagensNecessarias[$imagem]
    Write-Host "`n📷 $imagem" -ForegroundColor White
    Write-Host "   Curso: $($info.Curso)" -ForegroundColor Gray
    Write-Host "   Pasta: $($info.Pasta)" -ForegroundColor Gray
    Write-Host "   Descrição: $($info.Descricao)" -ForegroundColor Gray
    Write-Host "   Sugestão: $($info.Sugestao)" -ForegroundColor Gray
}

Write-Host "`n📁 ESTRUTURA DE PASTAS CRIADA:" -ForegroundColor Yellow

Get-ChildItem "public/images/cursos" -Directory | ForEach-Object {
    $pasta = $_.Name
    $arquivos = Get-ChildItem $_.FullName -File
    Write-Host "  📁 $pasta/ ($($arquivos.Count) arquivos)" -ForegroundColor Cyan
    foreach ($arquivo in $arquivos) {
        Write-Host "     📄 $($arquivo.Name)" -ForegroundColor Gray
    }
}

Write-Host "`n🚀 COMO ADICIONAR AS IMAGENS:" -ForegroundColor Green

@"
1. BAIXAR/CRIAR IMAGENS:
   • Tamanho recomendado: 800x500 pixels
   • Formato: JPG ou PNG
   • Nome: Use os nomes sugeridos acima

2. COLOCAR NAS PASTAS:
   Copie cada imagem para a pasta correspondente:
   Exemplo: manutencao-industrial.jpg → public/images/cursos/manutencao/

3. FORMATOS ACEITES:
   • .jpg (recomendado para fotos)
   • .png (recomendado para gráficos)
   • .webp (ótima compressão)

4. DICAS PARA IMAGENS:
   • Use imagens profissionais
   • Mostre a prática do curso
   • Inclua estudantes em ação
   • Mostre equipamentos/ferramentas

5. TESTAR:
   • Execute: npm run dev
   • Acesse: http://localhost:3000/formacao
   • Verifique cada curso
"@ | Write-Host -ForegroundColor White

Write-Host "`n🔧 COMANDOS ÚTEIS:" -ForegroundColor Cyan
Write-Host "• Verificar pastas: Get-ChildItem public/images/cursos -Recurse -File" -ForegroundColor Gray
Write-Host "• Reiniciar servidor: npm run dev" -ForegroundColor Gray
Write-Host "• Testar galeria: http://localhost:3000/formacao" -ForegroundColor Gray

Write-Host "`n🎯 IMAGENS AGUARDADAS:" -ForegroundColor Yellow
Write-Host "1. Técnico de Manutenção Industrial" -ForegroundColor White
Write-Host "2. Técnico de Mecatrónica Automóvel" -ForegroundColor White  
Write-Host "3. Padeiro/Pasteleiro (CEF)" -ForegroundColor White
Write-Host "4. Empregado de Restaurante/Bar" -ForegroundColor White
Write-Host "5. Técnico de Desenho de Construção Civil" -ForegroundColor White
Write-Host "6. Programação de Informática" -ForegroundColor White

Write-Host "`n✅ PRONTO PARA RECEBER AS IMAGENS!" -ForegroundColor Green
