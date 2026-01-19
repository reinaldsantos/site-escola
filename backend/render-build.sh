#!/bin/bash
# Script de fallback para build no Render
echo "?? Iniciando build com limpeza completa..."

# Limpeza total
rm -rf node_modules package-lock.json .cache build
npm cache clean --force

# Instalação segura
echo "?? Instalando dependências..."
npm install --legacy-peer-deps --no-audit --no-fund --loglevel=error

# Build do Strapi
echo "?? Building Strapi..."
npm run build

echo "? Build completo!"
