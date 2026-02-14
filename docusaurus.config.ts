import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OwlStack',
  tagline: 'Unified Social Media Publishing SDK',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.owlstack.dev',
  baseUrl: '/',

  organizationName: 'owlstacks',
  projectName: 'owlstack-docs',

  onBrokenLinks: 'throw',

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fa', 'zh', 'ja'],
    localeConfigs: {
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
      fa: {
        label: 'فارسی',
        direction: 'rtl',
        htmlLang: 'fa-IR',
      },
      zh: {
        label: '中文',
        htmlLang: 'zh-CN',
      },
      ja: {
        label: '日本語',
        htmlLang: 'ja-JP',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/owlstacks/owlstack-docs/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          lastVersion: '1.0',
          versions: {
            current: {
              label: 'Next 🚧',
              path: 'next',
            },
            '1.0': {
              label: '1.0',
              path: '',
            },
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/owlstacks/owlstack-docs/tree/main/',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh', 'ja'],
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/owlstack-social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'launch',
      content:
        '🦉 OwlStack is now available! <a href="/blog/introducing-owlstack">Read the announcement</a>.',
      backgroundColor: '#6C3FC5',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'OwlStack',
      logo: {
        alt: 'OwlStack Logo',
        src: 'img/logo-light-transparent.png',
        srcDark: 'img/logo-dark-transparent.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/owlstacks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/getting-started/installation',
            },
            {
              label: 'Core Concepts',
              to: '/core-concepts/posts-and-content',
            },
            {
              label: 'Platforms',
              to: '/platforms/overview',
            },
          ],
        },
        {
          title: 'Frameworks',
          items: [
            {
              label: 'Laravel',
              to: '/frameworks/laravel/installation',
            },
            {
              label: 'WordPress',
              to: '/frameworks/wordpress/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/owlstacks',
            },
            {
              label: 'Packagist',
              href: 'https://packagist.org/packages/owlstack/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'owlstack.dev',
              href: 'https://owlstack.dev',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OwlStack. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash', 'json', 'diff', 'ini'],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
