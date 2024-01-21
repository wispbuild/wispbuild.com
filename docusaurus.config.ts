import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { writeFileSync } from 'fs';

const encodeOgComponent = (strings, ...inputs) => {
  let output = "";
  let encoded = inputs.map(input => encodeURIComponent(input));
  for (let i = 0; i < strings.length; i++) {
    output += strings[i];
    if (encoded[i]) {
      output += encoded[i];
    }
  }
  return output;
}

const ogAllowList = [];

const config: Config = {
  title: 'Wisp Build',
  tagline: 'A spark for your builds',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.wispbuild.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wispbuild', // Usually your GitHub org/user name.
  projectName: 'wispbuild.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    parseFrontMatter: async (params) => {
      const result = await params.defaultParseFrontMatter(params);

      if (!result.frontMatter.image) {
        result.frontMatter.image = encodeOgComponent`/og?header=${"Wisp Build"}&subheader=${result.frontMatter.title}`
      }

      ogAllowList.push(result.frontMatter.image);
      writeFileSync('./functions/og-allow-list.json', JSON.stringify(ogAllowList));

      return result;      
    }
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wispbuild/wispbuild.com/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wispbuild/wispbuild.com/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Wisp Build',
      logo: {
        alt: 'Wisp Build',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'theory',
          label: 'Build Theory',
          position: 'left',
        },
        {
          to: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'reference',
          label: 'Reference',
          position: 'left',
        },
        {
          href: 'https://discord.gg/JBfRavr3ef',
          label: 'Discord',
          className: "header-discord-link",
          position: 'right',
        },
        {
          href: 'https://github.com/wispbuild/wispbuild.com',
          label: 'GitHub',
          className: "header-github-link",
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Wisp Build. By <a href="https://github.com/nathanhammond">@nathanhammond</a>.`,
    },
    mermaid: {
      theme: {
        light: 'neutral',
        dark: 'forest'
      },
    },
    prism: {
      additionalLanguages: ['bash'],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
