# INSTRUÇÕES PARA IMAGENS REAIS

Para usar as imagens reais dos selos Erasmus+:

## 1. COLOCAR AS IMAGENS:
Coloque os arquivos das imagens na pasta:
src/assets/

Sugestão de nomes:
- src/assets/vet-mobility-charter.png
- src/assets/erasmus-cofinanciado.png
- src/assets/logo-republica.png

## 2. ATUALIZAR O CÓDIGO:
No arquivo src/pages/ErasmusPage.jsx, substitua as divs com texto pelas imagens:

### Para o VET Mobility Charter:
SUBSTITUIR:
<div style={{...}}>VET Mobility Charter...</div>

POR:
<img src="/src/assets/vet-mobility-charter.png" alt="VET Mobility Charter" className="charter-image" />

### Para o selo cofinanciado:
SUBSTITUIR:
<div style={{...}}>Cofinanciado pelo Erasmus+...</div>

POR:
<img src="/src/assets/erasmus-cofinanciado.png" alt="Cofinanciado pelo Erasmus+" className="funding-image" />

## 3. CSS ADICIONAL (se precisar):
Adicione no arquivo ErasmusPage.css:

.charter-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.funding-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

## 4. VERSÃO ATUAL:
A versão atual já tem os selos em formato de texto/styling.
Quando tiver as imagens reais, basta substituir conforme acima.
