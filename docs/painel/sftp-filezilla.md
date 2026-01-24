# Enviando arquivos pesados

Se você precisa enviar um Modpack, um Mapa customizado ou arquivos acima de **100MB**, o Gerenciador de Arquivos do navegador pode falhar. Para isso, usamos o **SFTP**.

## 🛠️ O que você vai precisar:
1. Baixar o [FileZilla Client](https://filezilla-project.org/).
2. Seus dados de acesso SFTP (disponíveis na aba **Settings** do seu Painel).

## 🚀 Passo a Passo
1. Abra o FileZilla.
2. No topo, preencha:
   - **Host:** O endereço IP do seu servidor (ex: `sftp.haskhosting.com.br`).
   - **Username:** Seu usuário do painel.
   - **Password:** A mesma senha que você usa para logar no Painel.
   - **Port:** A porta é a mesma que está em seu painel.
3. Clique em **Conexão Rápida**.
4. Arraste os arquivos da esquerda (seu PC) para a direita (Servidor).

:::tip CUIDADO
Sempre desligue o servidor antes de substituir arquivos críticos como o `server.jar` ou pastas de mundo.
:::