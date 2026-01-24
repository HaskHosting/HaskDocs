---
id: banco-de-dados
title: Gerenciamento de Banco de Dados (MySQL)
sidebar_label: Banco de Dados MySQL
---

# 🗄️ Banco de Dados MySQL

A maioria das aplicações modernas e plugins avançados de Minecraft exigem um banco de dados para armazenar informações de forma persistente e rápida. Na **HaskHosting**, facilitamos a criação desses bancos diretamente pelo seu painel.

## 🚀 Como Criar um Banco de Dados

1. Acesse o seu **Painel de Controle**.
2. No menu lateral do seu servidor, clique em **Databases**.
3. Clique no botão **New Database**.
4. Dê um nome para identificar o banco (ex: `luckperms` ou `servidor_db`).
5. Em **Connections From**, deixe o símbolo `%` (isso permite que o servidor se conecte ao banco).
6. Clique em **Create Database**.

---

## 🔑 Obtendo suas Credenciais

Assim que o banco for criado, você verá um card com as informações necessárias para configurar seu plugin ou bot:

* **Endpoint (Host):** O endereço do servidor de banco de dados.
* **Username:** O usuário gerado automaticamente.
* **Password:** Clique no ícone do "olho" ou na chave para revelar a senha.
* **Port:** Geralmente `3306`.

---

## 🛠️ Como Gerenciar (phpMyAdmin)

Se você precisar visualizar as tabelas ou importar um arquivo `.sql`:

1. Na mesma aba **Databases**, procure pelo link ou botão **phpMyAdmin**.
2. Use o **Username** e a **Password** gerados no painel para fazer o login.
3. Ali você terá controle total sobre as tabelas do seu projeto.

:::warning ATENÇÃO
Nunca compartilhe sua senha de banco de dados com terceiros. Com ela, qualquer pessoa pode apagar ou roubar todos os dados dos seus jogadores ou da sua aplicação.
:::

---

## 💡 Exemplo de Configuração (Plugins)

Ao configurar um plugin, geralmente o arquivo `config.yml` pedirá os dados assim:

```yaml
storage-method: MySQL
address: 127.0.0.1:3306 # Use o Endpoint fornecido
database: s1_exemplo
username: u1_exemplo
password: sua_senha_secreta