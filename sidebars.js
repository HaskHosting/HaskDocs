// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Começando',
      items: ['intro'],
    },
    {
      type: 'category',
      label: '🎮 Servidores de Jogos',
      collapsed: false,
      items: [
        'jogos/minecraft',
        'jogos/hytale',
        'jogos/mta-sa',
      ],
    },
    {
      type: 'category',
      label: '💻 Hospedagem VPS',
      items: [
        'vps/linux',
        'vps/windows',
        'vps/seguranca-firewall',
      ],
    },
    {
      type: 'category',
      label: '🤖 Aplicações & Bots',
      items: [
        'apps/nodejs',
        'apps/python',
        'apps/banco-de-dados',
      ],
    },
    {
      type: 'category',
      label: '🌐 Web & Domínios',
      items: [
        'web/hospedagem-site',
        'web/configurar-dominio',
      ],
    },
    {
      type: 'category',
      label: '📦 Gestão de Arquivos',
      items: ['painel/sftp-filezilla', 'painel/transferir-mundo'],
    },
    // ✅ Nova categoria adicionada
    {
      type: 'category',
      label: '🖥️ Painel',
      items: [
        'painel/alterar-eggs-painel',
      ],
    },
    {
      type: 'category',
      label: '⚙️ Configuração Avançada',
      items: [
        'painel/atualizar-mods',
        'painel/agendamento-tarefas',
        'jogos/comandos-basicos',
      ],
    },
    {
      type: 'category',
      label: '📊 Entendendo seu Plano',
      items: ['vps/recursos-cpu-ram', 'vps/escolha-de-plano'],
    },
    {
      type: 'category',
      label: '💳 Financeiro & Suporte',
      items: [
        'financeiro/formas-pagamento',
        'financeiro/termos-de-servico',
      ],
    },
  ],
};
export default sidebars;
