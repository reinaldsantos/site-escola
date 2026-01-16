#!/bin/bash
# Script de inicialização para Render

# Garante que todas as pastas necessárias existam
mkdir -p public/uploads
mkdir -p public/uploads/images
mkdir -p public/uploads/files  
mkdir -p public/uploads/videos
mkdir -p public/uploads/audios

# Inicia o Strapi
strapi start
