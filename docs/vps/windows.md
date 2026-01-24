---
id: windows
title: Servidores VPS Windows (RDP)
sidebar_label: Windows (RDP)
---

# 🪟 VPS Windows Server

Nossas instâncias Windows na **HaskHosting** são ideais para usuários que precisam de uma interface gráfica familiar para gerenciar servidores de MTA:SA, MuOnline, Bots complexos ou aplicações .NET.

## 🖥️ Acesso Remoto (RDP)
O acesso é feito através da "Conexão de Área de Trabalho Remota", nativa de qualquer computador Windows.

1. No seu teclado, pressione `Windows + R`, digite `mstsc` e aperte Enter.
2. No campo **Computador**, insira o IP da sua VPS.
3. Clique em **Conectar**.
4. Insira as credenciais de administrador:
    * **Usuário:** `Administrator`
    * **Senha:** (Enviada no e-mail de ativação).

---

## ⚙️ Configurações Iniciais e Otimização

### Alteração de Senha
Por segurança, mude a senha no primeiro acesso. Dentro da VPS, pressione `CTRL + ALT + END` (atalho que simula o Ctrl+Alt+Del na conexão remota) e escolha **"Alterar uma senha"**.

### Gerenciador de Servidores (Server Manager)
O Windows Server bloqueia downloads por padrão. Para baixar navegadores (Chrome/Brave):
1. Abra o **Server Manager**.
2. Clique em **Local Server**.
3. Localize **IE Configuração de Segurança Reforçada** e marque como **Off**.

---

## ⚡ Dicas de Performance
* **Gestão de RAM:** O sistema operacional Windows utiliza cerca de 1.5GB a 2GB de RAM para operar. Certifique-se de que seu plano comporta o sistema + sua aplicação.
* **Desconexão Correta:** Ao sair, use o botão **"Disconnect"**. Nunca utilize o "Shutdown" (Desligar) dentro do menu iniciar da VPS, caso contrário, a máquina ficará offline até ser ligada manualmente pelo painel.

:::info AVISO
Utilizamos discos **NVMe Gen4** em nossas VPS Windows, eliminando travamentos de interface e garantindo leitura rápida de arquivos pesados.
:::