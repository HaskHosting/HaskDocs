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
            title: 'Tutoriais Rápidos',
            items: [
              { label: 'Minecraft', to: '/jogos/minecraft' },
              { label: 'VPS Linux', to: '/vps/linux' },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              { label: 'Discord', href: 'https://discord.gg/H2xdSCJSHt' },
              { label: 'Instagram', href: 'https://instagram.com/haskhosting' },
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