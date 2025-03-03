import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
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

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: ['./src/css/custom.css','./src/css/navbar.css'],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          position: 'left',
          labelId: 'about'
        },
        {
          label: 'AusTrakka Login',
          to: 'https://austrakka.net',
          position: 'right',
          className: 'sign-in-button',
        }
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
              href: 'https://www.doherty.edu.au/',
            },
            {
              label: 'The University of Melbourne',
              href: 'https://www.unimelb.edu.au/',
            },
            {
              label: 'The Royal Melbourne Hospital',
              href: 'https://www.thermh.org.au/',
            },
            {
              label: 'CDGN',
              href: 'https://www.cdgn.org.au/',
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
              href: 'https://github.com/AusTrakka',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AusTrakka. Cey would know the copyright I think`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
