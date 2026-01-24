---
id: linux
title: Gerenciamento e Performance em VPS Linux
sidebar_label: Linux (SSH)
---

# 🐧 Servidores VPS Linux

As instâncias Linux da **HaskHosting** utilizam virtualização KVM (Kernel-based Virtual Machine), garantindo que os recursos de CPU e RAM contratados sejam 100% dedicados ao seu projeto. Este guia ensina desde o acesso básico até a otimização avançada do sistema.

## 🔑 Acesso Remoto via SSH
O gerenciamento de uma VPS Linux é feito através do protocolo SSH (Secure Shell).

### Credenciais de Acesso
* **IP do Servidor:** Localizado no seu e-mail de ativação ou painel.
* **Porta padrão:** `22`
* **Usuário:** `root`
* **Senha:** Definida no momento da compra.

### Como conectar?
* **Windows:** Utilize o software **PuTTY** ou o Terminal do Windows.
* **Linux/Mac:** Utilize o terminal nativo com o comando:
```bash
ssh root@seu_ip_aqui
```
### 🚀 Primeiros Passos e Manutenção

Após realizar o primeiro login, o passo mais importante é atualizar os repositórios do sistema para garantir que você tenha os patches de segurança mais recentes.

**Atualização do Sistema (Ubuntu/Debian)**

```bash 
apt update && apt upgrade -y
```
### Comandos de Monitoramento Essenciais
**Para entender o que está acontecendo com o seu hardware, utilize:**

* `htop`: Mostra o uso de CPU e RAM em tempo real (Instale com apt install htop).

* `df -h`: Verifica o uso de espaço nos discos NVMe.

* `free -m`: Exibe a quantidade de memória RAM livre e usada em megabytes.

### ⚙️ Otimização: Criando Memória Swap
Se o seu servidor rodar aplicações pesadas que podem esgotar a RAM, configurar um arquivo Swap evita que o processo do seu jogo ou site seja encerrado abruptamente pelo sistema (erro OOM Killer).

**Siga os comandos abaixo para criar 2GB de Swap:**

```Bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab 
```
### 🛡️ Gestão de Portas e Firewall
Mantenha seu servidor seguro fechando portas desnecessárias. O UFW é o firewall simplificado recomendado para Linux.

```Bash
# 1. Liberar porta do SSH (NUNCA esqueça este passo!)
ufw allow 22/tcp

# 2. Liberar portas de aplicações (Ex: Minecraft)
ufw allow 25565/tcp

# 3. Ativar o Firewall
ufw enable
```
### 💡 Dicas de Especialista HaskHosting
**Troca de Senha**: Digite o comando passwd no console para alterar sua senha root a qualquer momento.

**Editores de Texto**: Utilize o nano ou vim para editar arquivos de configuração diretamente pelo terminal.

**SFTP**: Para enviar arquivos da sua máquina para a VPS, utilize o FileZilla ou WinSCP conectando na porta específica.

:::warning CUIDADO O usuário root tem poder total sobre o sistema.

 Evite executar comandos de fontes desconhecidas para não comprometer a integridade dos seus arquivos. 
 
© 2026 HaskHosting - Infraestrutura de Alta Performance.