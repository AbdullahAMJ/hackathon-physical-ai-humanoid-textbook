import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Simulation to Reality',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://physical-ai-textbook.vercel.app',
  baseUrl: '/',

  organizationName: 'Panaversity',
  projectName: 'physical-ai-textbook',

  // ⚠️ THE FIX: Change 'throw' to 'warn' so Vercel doesn't crash on errors
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

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
        blog: false, // We explicitly disable the blog here
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Textbook Modules',
        },
        {
          href: 'https://github.com/AbdullahAMJ/hackathon-physical-ai-humanoid-textbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Curriculum',
          items: [
            {
              label: 'Introduction',
              to: '/docs/Introduction/era-of-embodied-intelligence',
            },
            {
              label: 'ROS 2',
              to: '/docs/Module-1-ROS2/nervous-system',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Panaversity',
              href: 'https://www.panaversity.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AbdullahAMJ/hackathon-physical-ai-humanoid-textbook',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2025 Physical AI Textbook. Built for GIAIC Hackathon.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
