---
id: agendamento-tarefas
title: Agendamento de Tarefas (Reinícios Automáticos)
sidebar_label: Agendamento de Tarefas
---

# ⏰ Agendamento de Tarefas

Manter seu servidor saudável exige reinícios periódicos. No painel da **HaskHosting**, você pode automatizar isso e muito mais através do sistema de **Schedules**.

## 🚀 Por que agendar tarefas?
* **Limpeza de Memória:** Libera a RAM acumulada por plugins ou mods.
* **Backups Automáticos:** Garante que você tenha cópias de segurança sem precisar fazer manualmente.
* **Mensagens Automáticas:** Envie avisos de "Reinício em 5 minutos" para seus players.

---

## 🛠️ Passo a Passo para Criar um Reinício Diário

1. Acesse seu **Painel de Controle**.
2. No menu lateral, clique em **Schedules** (Agendamentos).
3. Clique no botão **Create Schedule**.
4. Configure o horário usando o padrão **Cron**:
   - **Minute:** `0`
   - **Hour:** `04` (Isso fará a tarefa rodar às 04:00 da manhã).
   - *Deixe os demais campos com asterisco (`*`).*
5. Clique em **Create Schedule**.

### Adicionando a Ação
Após criar o agendamento, você precisa dizer o que ele deve fazer:
1. Clique no agendamento que você acabou de criar.
2. Clique em **New Task**.
3. Em **Action**, selecione **Send Power Action**.
4. Em **Payload**, selecione **Restart**.
5. Salve a tarefa.

---

:::info DICA PROFISSIONAL
Recomendamos agendar reinícios em horários de baixo fluxo de jogadores (ex: 04:00 ou 05:00 da manhã) para não impactar a experiência da sua comunidade.
:::