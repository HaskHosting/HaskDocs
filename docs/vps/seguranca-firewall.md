---
id: seguranca-firewall
title: Segurança, Firewall e Proteção DDoS
sidebar_label: Segurança & Firewall
---

# 🛡️ Segurança e Proteção de Dados

A **HaskHosting** oferece proteção Anti-DDoS de borda em todos os planos, mas a segurança interna da sua instância depende de uma boa configuração de Firewall.

## 🧱 Configurando Firewall no Linux (UFW)
O UFW é a ferramenta mais simples para proteger sua VPS Linux contra acessos não autorizados.

```bash
# 1. Permitir SSH (ESSENCIAL para não perder o acesso)
ufw allow 22/tcp

# 2. Abrir portas específicas (Ex: Minecraft e Web)
ufw allow 25565/tcp
ufw allow 80/tcp
ufw allow 443/tcp

# 3. Ativar o Firewall
ufw enable