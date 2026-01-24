---
id: transferir-mundo
title: Migração Completa de Mundo e Jogadores
sidebar_label: Transferir Mundo
---

# 🌍 Migrando para a HaskHosting

Transferir um mundo não é apenas mover a pasta `world`. Siga este checklist para não perder inventários ou construções.

## 📦 Passo 1: Preparação no Host Antigo
1. Desligue o servidor antigo.
2. Compacte as pastas: `world`, `world_nether`, `world_the_end` e a pasta `essentials` (se usar esse plugin para manter os Warps/Homes).
3. Baixe o arquivo `.zip`.

## 📤 Passo 2: Importação via SFTP
1. No painel da HaskHosting, acesse **Settings** e copie os dados de **SFTP Details**.
2. No FileZilla, envie o arquivo `.zip` para a raiz `/`.
3. No painel web, clique com o botão direito no arquivo e selecione **Unarchive**.

## 🛠️ Passo 3: Ajuste de Nível
No arquivo `server.properties`, verifique se a linha `level-name=` corresponde exatamente ao nome da pasta que você subiu.