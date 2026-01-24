---
id: configurar-dominio
title: Configuração de Domínio e Subdomínios
sidebar_label: Configurar Domínio
---

# 🔗 Apontando seu Domínio

Para que seus players conectem via `jogar.haskhosting.com.br`, siga estas configurações no seu provedor de DNS (Cloudflare, Registro.br, etc).

## 📌 Registro Tipo A (Obrigatório)
Crie um registro que aponte o nome para o IP do servidor:
- **Tipo:** `A`
- **Nome:** `jogar`
- **Conteúdo:** `123.456.78.90` (O IP do seu servidor Hask)
- **TTL:** Automático ou 3600.

## 📌 Registro SRV (Para Minecraft sem Porta)
Se o seu servidor não usa a porta padrão `25565`, você precisa de um SRV para o player não precisar digitar a porta:
- **Serviço:** `_minecraft`
- **Protocolo:** `_tcp`
- **Nome:** `jogar`
- **Prioridade:** `0`
- **Peso:** `5`
- **Porta:** `SUA_PORTA_AQUI`
- **Destino:** `jogar.seudominio.com`