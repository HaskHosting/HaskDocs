---
id: nodejs
title: Hospedagem Node.js (Pterodactyl)
sidebar_label: Node.js
---

# 🤖 Hospedagem de Bots e APIs Node.js

Utilizamos containers Docker isolados para garantir que seu Bot de Discord ou API tenha 100% de performance sem interferência de outros usuários.

## 🚀 Preparação do Projeto
1. Certifique-se de que seu arquivo principal se chama `index.js` (ou altere a variável `MAIN_FILE` na aba **Startup**).
2. O arquivo `package.json` deve estar na raiz. O painel detectará as dependências e rodará o `npm install` automaticamente no primeiro boot.

## 🔧 Variáveis de Ambiente (.env)
Para segurança, não coloque seu Token do Discord direto no código.
- Vá na aba **Settings** ou use o gerenciador de arquivos para criar um `.env`.
- Defina as portas utilizando a variável `SERVER_PORT` fornecida pelo painel.