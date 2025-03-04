import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AusTrakka',
  tagline: 'Real-time pathogen genomics surveillance',
  favicon: 'img/austrakka_favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/navbar.css',
            './src/css/footer.css',
            './src/css/content.css',
          ],
        },
      } satisfies Preset.Options,
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      logo: {
        alt: 'AusTrakka Logo',
        src: 'img/Austrakka_Logo_cmyk.png',
        href: '/',
      },
      items: [
        {
          label: 'About',
          position: 'right',
          labelId: 'about',
          to: '/about',
        },
        {
          label: 'FAQ',
          position: 'right',
          labelId: 'faq',
          to: '/faq',
        },
        {
          label: 'Contact',
          position: 'right',
          labelId: 'contact',
          to: '/contact',
        },
        {
          label: 'Governance',
          position: 'right',
          labelId: 'governance',
          to: '/governance',
        },
        {
          html: `
            <span class="sign-in-button">
              LOGIN
              <i class="fas fa-sign-in-alt" style="margin-left: 8px;"></i> <!-- Icon on the right -->
            </span>
          `,
          position: 'right',
          to: 'https://austrakka.net',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Affiliated',
          items: [
            {
              label: 'The Peter Doherty Institute',
              to: 'https://www.doherty.edu.au/',
            },
            {
              label: 'The University of Melbourne',
              to: 'https://www.unimelb.edu.au/',
            },
            {
              label: 'The Royal Melbourne Hospital',
              to: 'https://www.thermh.org.au/',
            },
            {
              label: 'CDGN',
              to: 'https://www.cdgn.org.au/',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'AusTrakka Documentation',
              to: 'https://docs.austrakka.net/',
            },
          ],
        },
       
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/AusTrakka',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
