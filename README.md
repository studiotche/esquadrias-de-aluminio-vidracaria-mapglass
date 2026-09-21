# MAP GLASS - Esquadrias de Alumínio & Vidraçaria

Site institucional de alta performance para a **MAP GLASS - Esquadrias de Alumínio & Vidraçaria** (Novo Hamburgo - RS), desenvolvido com [Astro](https://astro.build/).

## Tecnologias

- **Astro v5+** — Static Site Generation (SSG) de alta velocidade
- **TypeScript** — Tipagem estática e segurança de código
- **Lenis** — Smooth scrolling nativo
- **Phosphor Icons & Font Awesome** — Iconografia moderna
- **GitHub Pages & Actions** — Deploy contínuo automatizado

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Gerar build estático
npm run build

# Pré-visualizar build de produção
npm run preview
```

## Deploy no GitHub Pages

O projeto conta com o workflow oficial do Astro configurado em `.github/workflows/deploy.yml`.

A cada push na branch `main`:
1. O GitHub Actions compila o site estático usando `withastro/action`.
2. Os artefatos são publicados automaticamente no GitHub Pages em:
   `https://studiotche.github.io/esquadrias-de-aluminio-vidracaria-mapglass/`
