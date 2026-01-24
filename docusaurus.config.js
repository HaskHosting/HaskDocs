// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HaskHosting DOCS',
  tagline: 'Sua infraestrutura de alta performance',
  favicon: 'img/favicon.ico',

  url: 'https://docs.haskhosting.com.br',
  baseUrl: '/',

  organizationName: 'HaskHosting', 
  projectName: 'docs', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // MODO DOCUMENTAÇÃO ATIVADO:
          routeBasePath: '/', // Isso faz a doc ser a página inicial
          editUrl: 'https://github.com/HaskHosting/docs/tree/main/',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
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
          // Removi o link "Documentação" pois agora o site JÁ É a documentação
          {
            href: 'https://haskhosting.com.br',
            label: 'Voltar para o Site',
            position: 'right',
          },
          {
            href: 'https://haskhosting.com.br/submitticket.php',
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
              { label: 'Banco de Dados', to: '/apps/banco-de-dados' },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              { label: 'Discord', href: 'https://discord.gg/seulink' },
              { label: 'Instagram', href: 'https://instagram.com/haskhosting' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} HaskHosting. Todos os direitos reservados.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;