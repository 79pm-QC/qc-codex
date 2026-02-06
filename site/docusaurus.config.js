// @ts-check
const { themes } = require('prism-react-renderer');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Qualian Codex',
  tagline: 'QC documentation',
  favicon: 'img/favicon.ico',

  url: 'https://79pm-qc.github.io',
  baseUrl: '/qc-codex/',

  organizationName: '79pm-QC',
  projectName: 'qc-codex',

  onBrokenLinks: 'warn',
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
          { to: '/', label: 'Home', position: 'left' },
          { to: '/docs/start-here', label: 'Start Here', position: 'left' },
          { to: '/qc-assistant', label: 'QC Assistant', position: 'left' },
          {
            href: 'https://github.com/79pm-QC/qc-codex',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} 79pm-QC`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;