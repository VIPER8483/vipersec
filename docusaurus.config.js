// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VIPERSEC',
  tagline: 'Cybersecurity Notes | Labs | Resources',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://viper8483.github.io',
  baseUrl: '/',

  organizationName: 'VIPER8483',
  projectName: 'vipersec',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },

        blog: {
          showReadingTime: true,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'VIPERSEC',

      logo: {
        alt: 'VIPERSEC Logo',
        src: 'logo/vipersec-logo.png',
      },

      items: [
        {
          to: '/',
          label: 'Home',
          position: 'left',
        },
        {
          to: '/docs/intro',
          label: 'Resources',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Labs',
          position: 'left',
        },
        {
          href: 'https://github.com/VIPER8483/vipersec',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} VIPERSEC`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;