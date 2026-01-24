---
id: recursos-cpu-ram
title: Hardware de Alta Performance
sidebar_label: Recursos CPU/RAM
---

# 📊 Entendendo o Hardware HaskHosting

Diferente de hosts que fazem "Overselling" (vender mais do que possuem), na HaskHosting seus recursos são dedicados via Docker.

## 🧠 RAM (Memória Aleatória)
- **O que faz:** Armazena os chunks carregados e a lista de jogadores ativos.
- **Sinal de alerta:** Se o gráfico de memória no painel atingir 95%, o processo "OOM Killer" do Linux irá desligar seu servidor para proteger o sistema.

## ⚡ CPU (Clock vs Cores)
- **Frequência (GHz):** Minecraft e MTA dependem de **Single Core**. Por isso usamos processadores de alto clock.
- **VCore:** Se sua CPU estiver em 100% constantemente, o servidor sofrerá "Tick Lag", onde o tempo no jogo passa mais devagar que o tempo real.

## 💾 Armazenamento NVMe
Utilizamos apenas discos **NVMe Gen4**, que são até 10x mais rápidos que SSDs comuns, garantindo que o salvamento do mundo não cause travamentos (lag de escrita).