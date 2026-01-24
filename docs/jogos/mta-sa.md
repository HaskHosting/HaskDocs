---
id: mta-sa
title: Servidor de MTA:SA Profissional
sidebar_label: MTA:SA
---

# 🏎️ MTA: San Andreas (Multi Theft Auto)

Gerencie seu servidor de Roleplay ou Race com total liberdade de scripts.

## 📂 Instalação de Resources
1. Acesse o **File Manager**.
2. Navegue até `/mods/deathmatch/resources/`.
3. **Dica:** Para otimizar o carregamento dos players, utilize arquivos `.zip` para cada resource.
4. No arquivo `mtaserver.conf`, certifique-se de adicionar a linha `<resource src="nome_do_seu_resource" startup="1" />`.

## 🛢️ Integração com MySQL
Servidores de Roleplay exigem banco de dados. 
- Vá na aba **Databases** do Pterodactyl.
- Crie um banco chamado `mta_internal`.
- No seu script de conexão (`dbConnect`), utilize o endereço IP `127.0.0.1` se o banco estiver no mesmo servidor, ou o IP externo fornecido na aba.