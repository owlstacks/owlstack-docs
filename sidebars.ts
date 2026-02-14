import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'introduction/what-is-owlstack',
        'introduction/why-owlstack',
        'introduction/architecture',
      ],
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/installation',
        'getting-started/quick-start',
        'getting-started/connect-platforms',
        'getting-started/quick-start-laravel',
        'getting-started/quick-start-wordpress',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'core-concepts/posts-and-content',
        'core-concepts/media-handling',
        'core-concepts/publishing',
        'core-concepts/delivery-status',
        'core-concepts/error-handling',
      ],
    },
    {
      type: 'category',
      label: 'Platforms',
      items: [
        'platforms/overview',
        'platforms/telegram',
        'platforms/twitter',
        'platforms/facebook',
        'platforms/linkedin',
        'platforms/discord',
        'platforms/instagram',
        'platforms/pinterest',
        'platforms/reddit',
        'platforms/slack',
        'platforms/tumblr',
        'platforms/whatsapp',
      ],
    },
    {
      type: 'category',
      label: 'Formatting',
      items: [
        'formatting/platform-formatters',
        'formatting/character-limits',
        'formatting/hashtag-extraction',
      ],
    },
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authentication/oauth-flow',
        'authentication/api-keys',
        'authentication/platform-credentials',
      ],
    },
    {
      type: 'category',
      label: 'Events',
      items: [
        'events/event-system',
        'events/post-published-failed',
        'events/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Laravel',
      items: [
        'frameworks/laravel/installation',
        'frameworks/laravel/configuration',
        'frameworks/laravel/usage',
        'frameworks/laravel/events',
        'frameworks/laravel/migration-from-larasap',
      ],
    },
    {
      type: 'category',
      label: 'WordPress',
      items: [
        'frameworks/wordpress/installation',
        'frameworks/wordpress/admin-panel',
        'frameworks/wordpress/meta-boxes',
        'frameworks/wordpress/rest-api',
        'frameworks/wordpress/hooks',
      ],
    },
    {
      type: 'category',
      label: 'Plans & Pricing',
      items: [
        'plans/overview',
        'plans/starter',
        'plans/pro',
        'plans/pro-ai',
        'plans/enterprise',
      ],
    },
    {
      type: 'category',
      label: 'Pro Features',
      items: [
        'pro/batch-publishing',
        'pro/scheduling',
        'pro/delivery-logging',
        'pro/templates',
        'pro/analytics',
      ],
    },
    {
      type: 'category',
      label: 'AI Features',
      items: [
        'ai/content-generation',
        'ai/post-optimization',
        'ai/auto-hashtags',
        'ai/content-calendar',
        'ai/ab-testing',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/overview',
        'api/authentication',
        'api/publishing',
        'api/scheduling',
        'api/ai',
        'api/analytics',
        'api/webhooks',
        'api/rate-limits',
      ],
    },
  ],
};

export default sidebars;
