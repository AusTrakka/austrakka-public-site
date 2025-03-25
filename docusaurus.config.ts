import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AusTrakka',
  tagline: 'Real-time pathogen genomics surveillance',
  favicon: 'img/austrakka_favicon.ico',

  // Set the production url of your site here
  url: 'https://austrakka.net',
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
    image: 'img/austrakka-social-card.png',
    navbar: {
      logo: {
        alt: 'AusTrakka Logo',
        src: 'img/AusTrakka_Logo_cmyk.png',
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
          label: 'Governance',
          position: 'right',
          labelId: 'governance',
          to: '/governance',
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
          to: 'https://portal.austrakka.net',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [

        {
          title: 'Affiliated Labratories',
          items: [
            {
              label: 'ACT Pathology',
              to: 'https://www.canberrahealthservices.act.gov.au/health-professionals/act-pathology',
            },
            {
              label: 'Institute of Clinical Pathology and Medical Research',
              to: 'https://pathology.health.nsw.gov.au/',
            },
            {
              label: 'Microbiological Diagnostic Unit Public Health Laboratory',
              to: 'https://biomedicalsciences.unimelb.edu.au/departments/microbiology-Immunology/research/services/microbiological-diagnostic-unit-public-health-laboratory',
            },
            {
              label: 'Public and Environmental Health Reference Laboratory',
              to: 'https://www.health.qld.gov.au/',
            },
            {
              label: 'PathWest',
              to: 'https://www.pathwest.health.wa.gov.au/',
            },
            {
              label: 'Royal Darwin Hospital',
              to: 'https://nt.gov.au/wellbeing/hospitals-health-services/royal-darwin-hospital',
            },
            {
              label: 'Royal Hobart Hospital',
              to: 'https://www.health.tas.gov.au/hospitals/royal-hobart-hospital',
            },
            {
              label: 'SA Pathology',
              to: 'https://www.sapathology.sa.gov.au/',
            },
            {
              label: 'Victorian Infectious Diseases Reference Laboratory',
              to: 'https://www.vidrl.org.au/',
            },
          ],
        },
        {
          title: 'Networks',
          items: [
            {
              label: 'Australian Health Protection Principal Committee',
              to: 'https://www.directory.gov.au/portfolios/health-and-aged-care/department-health-and-aged-care/australian-health-protection-principal-committee',
            },
            {
              label: 'Communicable Diseases Genomics Network',
              to: 'https://www.cdgn.org.au/',
            },
            {
              label: 'OzFoodNet',
              to: 'https://www.health.gov.au/our-work/ozfoodnet-network',
            },
            {
              label: 'Public Health Laboratory Network',
              to: 'https://www.health.gov.au/committees-and-groups/phln',
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
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
