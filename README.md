# README - Institucional

## Visão Geral
Site institucional de apresentação da MangaLab.

## Pré-requisitos
- Node.js (v18.x ou superior)
- npm (v9.x ou superior)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Mangalabs/institutional.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o ambiente:
```bash
cp .env-example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O aplicativo estará disponível em: `http://localhost:5173`

## Variáveis de Ambiente (.env-example)

```ini
# Configurações básicas .env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

## Comandos Úteis

| Comando          | Descrição                          |
|------------------|------------------------------------|
| `npm run dev`    | Inicia servidor de desenvolvimento |
| `npm run build`  | Cria build para produção           |
| `npm run preview`| Visualiza build de produção local  |
| `npm run lint`   | Executa análise de código          |

## Estrutura Básica
```
/public
  /images
    /projects
/src
  /components
  /data
.env-example
```

## Observações
- Lembre-se de nunca commitar o arquivo `.env` real
- Configure as variáveis no `.env` de acordo com seu ambiente

Para dúvidas, contate o desenvolvedor responsável.