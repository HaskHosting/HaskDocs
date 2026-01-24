---
id: minecraft
title: Guia Mestre de Minecraft (Pterodactyl)
sidebar_label: Minecraft
---

# 🎮 Gerenciamento Avançado de Minecraft

Na HaskHosting, utilizamos o painel **Pterodactyl**, que oferece isolamento total de recursos para o seu servidor.

## 🚀 Inicialização e Versões
Para trocar a versão do seu servidor (ex: de Vanilla para Paper ou Forge):
1. Vá em **Settings** > **Reinstall Server** (isso baixará os arquivos base da versão escolhida).
2. Na aba **Startup**, em **Docker Image**, garanta que a versão do Java está correta:
   - **Java 8:** Para versões 1.8 até 1.12.
   - **Java 17:** Para versões 1.17 até 1.20.
   - **Java 21:** Para as versões mais recentes.

## ⚡ Otimização de Performance (Flags de Aikar)
Em nossa infraestrutura, você pode otimizar o consumo de RAM. Na aba **Startup**, no campo `Startup Command`, verifique se as flags de otimização estão ativas para reduzir o "Garbage Collection" e evitar quedas de TPS.

## 🛡️ Segurança e Whitelist
Nunca inicie um servidor público sem proteção.
- No console, digite `whitelist on` para restringir o acesso.
- Use o comando `whitelist add [seu_nick]` para se autorizar.