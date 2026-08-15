# Dyego Ferreira da Silva — Portfólio Pessoal

Portfólio pessoal desenvolvido com Next.js, apresentando trajetória acadêmica, skills técnicas e projetos desenvolvidos ao longo da graduação em Sistemas de Informação no CIn-UFPE.

**Site publicado:** [cin.ufpe.br/~dfs10](https://www.cin.ufpe.br/~dfs10/)

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) + [Base UI](https://base-ui.com/)
- [Lucide Icons](https://lucide.dev/)

## Estrutura do projeto

```
app/
  layout.tsx           # Layout raiz, fontes e metadados
  page.tsx             # Composição da página inicial
  globals.css          # Tema dark, tokens de cor e tipografia
components/
  ui/                  # Componentes shadcn/ui (button, etc.)
  portfolio/           # Componentes das seções do portfólio
    header.tsx         # Navegação fixa
    hero.tsx           # Seção de introdução (Início)
    portrait.tsx       # Retrato com efeito de vinheta
    about.tsx          # Seção Sobre (trajetória e objetivos)
    projects.tsx       # Seção de Projetos
    footer.tsx         # Rodapé
    icons.tsx          # Ícones de redes sociais
public/
  .htaccess             # Headers de segurança para o Apache
```

## Rodando localmente

Pré-requisitos: [Node.js](https://nodejs.org/) 18+ e npm (ou pnpm).

```bash
# instalar dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build e publicação (hospedagem estática)

Este projeto é configurado para gerar um **export estático** (`output: 'export'` no `next.config.mjs`), pensado para rodar em servidores Apache tradicionais sem Node.js — como o webserver acadêmico do CIn-UFPE.

```bash
npm run build
```

Isso gera a pasta `out/` com todo o HTML/CSS/JS estático.

## Licença

Uso pessoal — todos os direitos reservados a Dyego Ferreira da Silva.