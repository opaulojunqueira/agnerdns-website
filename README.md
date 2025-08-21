# 🌐 Agner DNS — Website

Este projeto é o front-end do **Agner DNS**, criado para ajudar usuários a conhecer, utilizar e acompanhar os servidores públicos de DNS que oferecem filtros de anúncios, malwares, cassinos e conteúdo indesejado. O site oficial do projeto é [agnerdns.com.br](https://agnerdns.com.br).

---

## 📄 Descrição do Projeto

O Agner DNS Website é um site informativo e funcional, feito com **Vite + React + TypeScript + Tailwind CSS**, que mostra:

* Como configurar os servidores DNS em diferentes dispositivos 🌐
* Status dos servidores e latência 📊
* Seções de ajuda e instruções de uso 📚
* Links de contribuição e suporte 💡

O objetivo é facilitar o uso do Agner DNS e divulgar o projeto para a comunidade.

---

## ⚙️ Requisitos

Antes de instalar, você precisa ter:

* Node.js ≥ 18 📦
* npm / pnpm / yarn 💻
* Git 🧭
* Navegador moderno (Chrome, Edge, Firefox) 🌐

Se quiser gerenciar diferentes versões do Node, use [nvm](https://github.com/nvm-sh/nvm) 🔧

---

## 🚀 Instalação Local

Siga esses passos para rodar o site no seu computador:

1. **Clonar o repositório**

```bash
git clone <URL-DO-REPO>
cd <NOME-DO-PROJETO>
```

2. **Instalar dependências**

```bash
npm install         # ou pnpm install / yarn
```

3. **Rodar em modo desenvolvimento**

```bash
npm run dev
```

Abra [http://localhost:8080](http://localhost:8080) no navegador 🌟

4. **Build para produção**

```bash
npm run build       # gera versão otimizada 🏗️
npm run preview     # preview do build local 👀
```

> Se o projeto utilizar variáveis de ambiente, crie um arquivo `.env` e **não** faça commit das chaves 🔒

---

## 🌍 Deploy

Você pode publicar o site usando:

* **Vercel**: conecta o repositório e configura o comando de build (`npm run build`) e pasta `dist`.
* **Netlify**: semelhante ao Vercel, build em `dist/`.
* **GitHub Pages**: gerar build e publicar `dist/` no branch `gh-pages`.

---

## 📊 Tecnologias utilizadas

* [Vite](https://vitejs.dev/) ⚡
* [React](https://reactjs.org/) ⚛️
* [TypeScript](https://www.typescriptlang.org/) 💙
* [Tailwind CSS](https://tailwindcss.com/) 🎨
* [shadcn/ui](https://ui.shadcn.com/) 🛠️
