// @ts-check
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HaskHosting DOCS',
  tagline: 'Sua infraestrutura de alta performance',
  favicon: 'img/favicon.ico',

  url: 'https://docs.haskhosting.com.br',
  baseUrl: '/',

  // Configurações do GitHub
  organizationName: 'HaskHosting', 
  projectName: 'HaskDocs', 
  deploymentBranch: 'main',

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js',
      async: true,
    },
    {
      src: 'https://embed.tawk.to/5f4fcc46f0e7167d000ce70a/1eqfdjunv',
      async: true,
      charset: 'UTF-8',
      crossorigin: 'anonymous',
  },
  ],

  onBrokenLinks: 'throw',
  
  // Configuração de Markdown (Correção do Warning de v4)
  markdown: {
    format: 'mdx',
    mermaid: false,
    emoji: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      require.resolve("docusaurus-plugin-search-local"),
      /** @type {import('docusaurus-plugin-search-local').Options} */
      ({
        hashed: true,
        // Removido "language" para evitar ValidationError na v3
        docsRouteBasePath: "/",
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/HaskHosting/HaskDocs/tree/main/',
          routeBasePath: '/', // Documentação na home
        },
        blog: false, 
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/haskhosting-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'HaskHosting',
        logo: {
          alt: 'HaskHosting Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentação',
          },
          {
            href: 'https://haskhosting.com.br',
            label: 'Voltar para o Site',
            position: 'right',
          },
          {
            href: 'https://cliente.haskhosting.com.br/submitticket.php',
            label: 'Área do Cliente',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'HaskHosting',
            items: [
              {
                html: `
                  <p style="color: #9ca3af; margin-bottom: 1.5rem; font-size: 0.9rem;">
                    Servidores de alta performance para Minecraft, NodeJS e VPS. Suporte especializado e preços competitivos.
                  </p>
                  <div style="display: flex; gap: 1rem;">
                    <a href="https://www.facebook.com/share/1FwQK7zYzn/" target="_blank" rel="noopener" style="color: #9ca3af; font-size: 1.2rem;"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/haskhosting" target="_blank" rel="noopener" style="color: #9ca3af; font-size: 1.2rem;"><i class="fab fa-twitter"></i></a>
                    <a href="https://instagram.com/haskhosting" target="_blank" rel="noopener" style="color: #9ca3af; font-size: 1.2rem;"><i class="fab fa-instagram"></i></a>
                    <a href="https://discord.gg/H2xdSCJSHt" target="_blank" rel="noopener" style="color: #9ca3af; font-size: 1.2rem;"><i class="fab fa-discord"></i></a>
                  </div>
                `,
              },
            ],
          },
          {
            title: 'Serviços',
            items: [
              { label: 'Minecraft', href: 'https://haskhosting.com.br/hospedagem/minecraft/' },
              { label: 'NodeJS', href: 'https://haskhosting.com.br/hospedagem/nodejs/' },
              { label: 'Servidores VPS', href: 'https://haskhosting.com.br/hospedagem/servidores-vps/' },
              { label: 'Hospedagem', href: 'https://haskhosting.com.br/hospedagem/' },
            ],
          },
          {
            title: 'Links Úteis',
            items: [
              { label: 'Termos de Serviço', href: 'https://haskhosting.com.br/termos/' },
              { label: 'Política de Privacidade', href: 'https://haskhosting.com.br/politica-privacidade/' },
              { label: 'Status dos Serviços', href: 'https://status.haskhosting.com.br/' },
              { label: 'FAQ', href: 'https://haskhosting.com.br/faq/' },
            ],
          },
          {
            title: 'Contato',
            items: [
              {
                html: `
                  <ul style="list-style: none; padding: 0; color: #9ca3af; font-size: 0.9rem;">
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-envelope" style="margin-right: 8px; color: #3b82f6;"></i> atendimento@haskhosting.com.br</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-map-marker-alt" style="margin-right: 11px; color: #3b82f6;"></i> Brasil</li>
                    <li style="margin-bottom: 0.5rem;"><i class="fas fa-headset" style="margin-right: 8px; color: #3b82f6;"></i> Suporte 24/7</li>
                  </ul>
                  <a href="https://discord.com/channels/744772510620450896/1076542272784580608" target="_blank" rel="noopener" style="background-color: #3b82f6; color: white; padding: 0.6rem 1.2rem; border-radius: 9999px; display: inline-flex; align-items: center; text-decoration: none; margin-top: 1rem; font-weight: 600; font-size: 0.8rem;">
                    <i class="fas fa-paper-plane" style="margin-right: 0.5rem;"></i> ENVIAR MENSAGEM
                  </a>
                `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} HaskHosting. Todos os direitos reservados.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
