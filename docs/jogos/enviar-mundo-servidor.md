---
id: enviar-mundo-servidor
title: Como Enviar seu Mundo para o Servidor
sidebar_label: Enviar Mundo
---

## 🌍 Enviando seu Mundo para o Servidor

Quer jogar no seu servidor com o mundo que você já criou no seu computador? É possível fazer isso de forma simples pelo painel da HaskHosting, tanto para servidores **Java** quanto **Bedrock**.

Siga o guia correspondente à sua versão abaixo.

---

## ☕ Java Edition

### 📋 Pré-requisitos

- Servidor **parado** antes de qualquer alteração  
- Seu mundo localizado na pasta `.minecraft/saves/` do seu computador  
- Acesso ao painel da HaskHosting  

---

### 🗺️ Onde fica o mundo no Java?

No Java Edition, cada mundo é uma **pasta** dentro de `.minecraft/saves/`. O nome da pasta é o nome do seu mundo.

**Caminho padrão por sistema operacional:**

| Sistema | Caminho |
|---------|---------|
| Windows | `%appdata%\.minecraft\saves\` |
| macOS | `~/Library/Application Support/minecraft/saves/` |
| Linux | `~/.minecraft/saves/` |

---

### 🚀 Passo a Passo

1. **Pare o servidor:**  
   No painel da HaskHosting, clique em **Stop** e aguarde o servidor encerrar completamente.

2. **Localize seu mundo no computador:**  
   Abra a pasta `.minecraft/saves/` e identifique a pasta do mundo que deseja enviar (ex: `MeuMundo`).

3. **Compacte a pasta do mundo:**  
   Clique com o botão direito na pasta do mundo → **Compactar em .zip** (ou use 7-Zip/WinRAR).

4. **Acesse o Gerenciador de Arquivos no painel:**  
   No painel, clique em **Files (Arquivos)** no menu lateral.

5. **Faça o upload do .zip:**  
   Clique em **Upload**, selecione o `.zip` do seu mundo e aguarde o envio.

6. **Extraia o arquivo:**  
   Após o upload, clique com o botão direito no `.zip` → **Unarchive (Extrair)**.

7. **Renomeie a pasta do mundo para `world`:**  
   O servidor Java busca por padrão a pasta chamada `world`. Renomeie a pasta extraída para `world`.  
   > Se já existir uma pasta `world` antiga, apague-a antes ou faça um backup primeiro.

8. **Inicie o servidor:**  
   Clique em **Start** e aguarde o carregamento. Seu mundo estará disponível!

---

### ⚠️ Recomendações Importantes — Java

- 🔸 Sempre faça backup da pasta `world` existente antes de substituir  
- 🔸 Verifique se a versão do mundo é compatível com a versão do servidor  
- 🔸 Mundos com mods precisam dos mods instalados no servidor  
- 🔸 O servidor deve estar **parado** durante todo o processo de upload  

---

## 🟢 Bedrock Edition

### 📋 Pré-requisitos

- Servidor **parado** antes de qualquer alteração  
- Seu mundo localizado na pasta de saves do Minecraft Bedrock  
- Acesso ao painel da HaskHosting  

---

### 🗺️ Onde fica o mundo no Bedrock?

No Bedrock Edition, os mundos ficam dentro da pasta `minecraftWorlds`. Cada mundo é uma **pasta** com um nome gerado automaticamente (código aleatório).

**Caminho padrão por sistema operacional:**

| Sistema | Caminho |
|---------|---------|
| Windows | `%localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds\` |
| Android | `/sdcard/games/com.mojang/minecraftWorlds/` |
| iOS | Acesse via **Arquivos → Minecraft → games/com.mojang/minecraftWorlds/** |

> 💡 **Dica:** No Windows, abra o **Executar** (`Win + R`), cole o caminho acima e pressione Enter.

---

### 🚀 Passo a Passo

1. **Pare o servidor:**  
   No painel da HaskHosting, clique em **Stop** e aguarde o servidor encerrar completamente.

2. **Localize seu mundo no dispositivo:**  
   Abra a pasta `minecraftWorlds` e identifique a pasta do mundo desejado.  
   > As pastas têm nomes aleatórios. Abra cada uma e verifique o arquivo `levelname.txt` para descobrir o nome do mundo.

3. **Compacte a pasta do mundo:**  
   Clique com o botão direito na pasta → **Compactar em .zip**.

4. **Acesse o Gerenciador de Arquivos no painel:**  
   No painel, clique em **Files (Arquivos)** no menu lateral.

5. **Navegue até a pasta `worlds`:**  
   O servidor Bedrock armazena os mundos dentro da pasta `worlds/`. Acesse-a no gerenciador.

6. **Faça o upload do .zip:**  
   Clique em **Upload**, selecione o `.zip` e aguarde o envio.

7. **Extraia o arquivo:**  
   Após o upload, clique com o botão direito no `.zip` → **Unarchive (Extrair)**.

8. **Ajuste o nome do mundo no `server.properties`:**  
   Abra o arquivo `server.properties` no painel e localize a linha:
   ```
   level-name=Bedrock level
   ```
   Altere o valor para o **nome exato** da pasta do mundo que você enviou.

9. **Inicie o servidor:**  
   Clique em **Start** e aguarde o carregamento. Seu mundo estará pronto!

---

### ⚠️ Recomendações Importantes — Bedrock

- 🔸 Sempre faça backup da pasta `worlds` existente antes de substituir  
- 🔸 O nome em `level-name` no `server.properties` deve ser **idêntico** ao nome da pasta  
- 🔸 Certifique-se de que o mundo foi salvo corretamente no dispositivo antes de enviar  
- 🔸 O servidor deve estar **parado** durante todo o processo de upload  

---

## 💡 Dicas Gerais

- ⚡ Mundos muito grandes podem demorar mais no upload — tenha paciência  
- 🗜️ Compactar em `.zip` antes do envio agiliza o processo  
- 🔄 Após o envio, sempre reinicie o servidor para garantir que tudo carregue corretamente  
- 🛠️ Em caso de dúvida, abra um chamado no suporte da HaskHosting  

---

## 📦 Mundo com mais de 100MB?

Se o arquivo do seu mundo for **maior que 100MB**, recomendamos utilizar o método de transferência via **SFTP** em vez do upload pelo painel, pois ele é mais estável e adequado para arquivos pesados.

📖 [Veja como fazer isso aqui → Enviando arquivos pesados | HaskHosting DOCS](https://docs.haskhosting.com.br/painel/sftp-filezilla)

---

Com esse tutorial, seu mundo favorito estará rodando no servidor em poucos minutos! 🚀
