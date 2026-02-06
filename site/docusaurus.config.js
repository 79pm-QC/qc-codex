// @ts-check
const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qualian Codex',
  tagline: 'QC documentation',
  favicon: 'img/favicon.ico',

  // Your GitHub Pages URL (user site)
  url: 'https://79pm-qc.github.io',
  // Repo name must be the baseUrl for project pages
  baseUrl: '/qc-codex/',

  organizationName: '79pm-QC',
  projectName: 'qc-codex',

  onBrokenLinks: 'warn',
  // Keep this as warn for now so the build doesn’t fail on missing links while you’re setting up
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: 'https://github.com/79pm-QC/qc-codex/tree/main/site/',
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
      navbar: {
  title: 'Qualian Codex',
  items: [
    {
      to: '/',
      label: 'Home',
      position: 'left',
    },
    {
      to: '/docs/start-here',
      label: 'Start Here',
      position: 'left',
    },
    {
      to: '/qc-assistant',
      label: 'QC Assistant',
      position: 'left',
    },
    {
      href: 'https://github.com/79pm-QC/qc-codex',
      label: 'GitHub',
      position: 'right',
    },
  ],
},

