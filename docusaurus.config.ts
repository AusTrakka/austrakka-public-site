import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AusTrakka',
  tagline: 'Real-time pathogen genomics surveillance',
  favicon: 'img/branding/austrakka_favicon.ico',

  // Set the production url of your site here
  url: 'https://austrakka.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',

  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
      type: 'text/css',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/footer.css'),
            require.resolve('./src/css/content.css'),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: 'title',
        content: 'AusTrakka | Real-time pathogen genomics surveillance',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    image: 'img/branding/austrakka-social-card.png',
    navbar: {
      logo: {
        alt: 'AusTrakka Logo',
        src: 'img/branding/AusTrakka_Logo_cmyk.png',
        href: '/',
      },
      items: [
        {
          label: 'Overview',
          position: 'right',
          to: '/',
          exact: true,
        },
        {
          label: 'History',
          position: 'right',
          labelId: 'history',
          to: '/history',
        },
        {
          label: 'Governance',
          position: 'right',
          labelId: 'governance',
          to: '/governance',
        },
        {
          label: 'Partners',
          position: 'right',
          labelId: 'partners',
          to: '/partners',
        },
        {
          label: 'Team',
          position: 'right',
          labelId: 'team',
          to: '/team',
        },
        {
          html: `
            <span class="sign-in-button">
              LOGIN
              <i class="fas fa-sign-in-alt" style="margin-left: 8px;"></i> <!-- Icon on the right -->
            </span>
          `,
          position: 'right',
          to: 'https://portal.austrakka.net?auto_login=true',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/branding/AusTrakka_Logo_white.png',
        alt: 'AusTrakka',
        width: 300,
      },
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'AusTrakka Documentation',
              to: 'https://docs.austrakka.net/',
            },
          ],
        },
      ],
      copyright:
        'The AusTrakka team acknowledges the traditional owners of country throughout Australia, and their continuing connection to land, sea and community. We pay our respects to them and their cultures, and to elders both past and present.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
