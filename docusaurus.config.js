// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `Hello, I'm Rendani Luvhengo`,
  tagline: `I explore products and collaborate with SMEs' to create documentation that solves problems for users and companies.`,
  url: 'https://github.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Renda02', // Usually your GitHub org/user name.
  projectName: 'my-doc-website', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Renda02',
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
        title: 'Rendani',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logs.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Portfolio',
          },
          // {to: '/blog', label: 'Post', position: 'left'},
          {
            href: 'https://github.com/Renda02',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://www.linkedin.com/in/rendani-luvhengo/',
            label: 'LinkedIn',
            position: 'right',
          },
          {
            href: 'mailto:rluvhengo@gmail.com',
            label: 'Contact Me',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Portfolio',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:rluvhengo@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/rendani-luvhengo/',
              },
             
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Portfolio',
                to: '/docs/intro',
              },// {
                //label: 'Post',
               // to: '/blog',
             // },
              {
                label: 'GitHub',
                href: 'https://github.com/Renda02',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rendani Luvhengo. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
