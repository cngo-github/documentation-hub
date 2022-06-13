const path = require('path');

module.exports = {
  title: 'Constellation Documentation',
  tagline:
    'Lorem ipsum dolor sit amet',
  url: 'https://constellationnetwork.io',
  baseUrl: "/",
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: { label: 'English' },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/meta/favicon-96x96.png',
  organizationName: 'StardustCollective',
  projectName: 'docshub',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: 'Site Logo',
        src: `/logos/constellation-docs-dark.svg`,
        srcDark: `/logos/constellation-docs-light.svg`,
        href: '/',
        target: '_self',
        width: 220,
        height: 29,
      },
      items: [
        {
          type: 'iconLink',
          position: 'left',
          icon: {
            alt: 'Constellation Docs',
            src: `/logos/constellation-icon.svg`,
            href: '/',
            target: '_self',
          },
        },
        {
          type: 'doc',
          docId: 'learn',
          label: 'Learn',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'build',
          label: 'Build',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'nodes',
          label: 'Validate',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'design',
          label: 'Design',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'api',
          label: 'API',
          position: 'left',
        },
        {
          type: 'cta',
          position: 'left',
          text: 'Buy DAG',
          href: `https://constellationnetwork.io/buy/`,
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          label: 'Support',
          position: 'right',
          items: [
            {
              href: 'https://intercom.help/constellation-network',
              label: 'Help Center',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://t.me/StardustSupport',
              label: 'Support on Telegram',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--support',
        },
        {
          label: 'Community',
          position: 'right',
          items: [
            {
              href: 'https://t.me/constellationcommunity',
              label: 'Telegram',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://twitter.com/conste11ation',
              label: 'Twitter',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://www.youtube.com/channel/UChMBV4al3p_iO4bnfzcIzVQ?guided_help_flow=3&disable_polymer=true',
              label: 'YouTube',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://www.reddit.com/r/constellation/',
              label: 'Reddit',
              target: '_blank',
              rel: null,
            },
            {
              href: 'https://medium.com/constellationlabs',
              label: 'Medium',
              target: '_blank',
              rel: null,
            },
          ],
          className: 'navbar__link--community',
        },
        {
          type: 'separator',
          position: 'right',
        },
        {
          type: 'iconLink',
          position: 'right',
          icon: {
            alt: 'github logo',
            src: `/logos/github.svg`,
            href: 'https://github.com/StardustCollective',
            target: '_blank',
          },
        },
      ],
    },
    algolia: {
      appId: 'O9QSL985BS',
      apiKey: 'ceb5366064b8fbf70959827cf9f69227',
      indexName: 'dev_constellation',
      contextualSearch: true,
    },
  },
  plugins: [
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        exclude: ['README.md'],
        lastVersion: 'current',
        versions: {
          current: {
            label: '1.0',
            banner: 'none',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'learn',
        path: 'learn',
        routeBasePath: 'learn',
        sidebarPath: require.resolve('./sidebarsLearn.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'statechannels',
        path: 'statechannels',
        routeBasePath: 'statechannels',
        sidebarPath: require.resolve('./sidebarsStatechannels.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nodes',
        path: 'nodes',
        routeBasePath: 'nodes',
        sidebarPath: require.resolve('./sidebarsNodes.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'stargazer',
        path: 'stargazer',
        routeBasePath: 'stargazer',
        sidebarPath: require.resolve('./sidebarsStargazer.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
        lastVersion: 'current',
        versions: {
          current: {
            label: 'v1.0',
            banner: 'none',
          },
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'dapp',
        path: 'dapp',
        routeBasePath: 'dapp',
        sidebarPath: require.resolve('./sidebarsDapp.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'design',
        path: 'design',
        routeBasePath: 'design',
        sidebarPath: require.resolve('./sidebarsDesign.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'api',
        routeBasePath: 'api',
        sidebarPath: require.resolve('./sidebarsAPI.js'),
        editUrl: ({ versionDocsDirPath, docPath, locale }) => {
          if (locale != 'en') {
            return '/';
          }
          return `https://github.com/Constellation-Labs/documentation-hub/edit/main/${versionDocsDirPath}/${docPath}`;
        },
      },
    ],
    '@docusaurus/plugin-content-pages',
    '@docusaurus/plugin-debug',
    '@docusaurus/plugin-sitemap',
  ],
  themes: [
    [
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, 'docusaurus-theme-classic'),
      {
        customCss: [
          require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
          require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
          require.resolve('./src/styles/custom.scss'),
        ],
      },
    ],
    path.resolve(__dirname, './node_modules/@docusaurus/theme-search-algolia'),
  ],
  customFields: {},
};