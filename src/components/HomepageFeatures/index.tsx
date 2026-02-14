import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '11 Platforms, One API',
    icon: '🌐',
    description: (
      <>
        Telegram, Twitter/X, Facebook, LinkedIn, Discord, Instagram, Pinterest,
        Reddit, Slack, Tumblr, and WhatsApp - all through a single API call.
      </>
    ),
  },
  {
    title: 'Cloud-Powered',
    icon: '☁️',
    description: (
      <>
        No API tokens or platform SDKs to manage. Connect via OAuth in the
        dashboard, publish via your API key. We handle the rest.
      </>
    ),
  },
  {
    title: 'Framework Integrations',
    icon: '🔌',
    description: (
      <>
        First-class support for Laravel (10/11/12) and WordPress (6.4+).
        Or use the PHP SDK standalone - no framework required.
      </>
    ),
  },
  {
    title: 'Type-Safe SDK',
    icon: '🛡️',
    description: (
      <>
        PHP 8.1+ with readonly value objects, enums, and strict typing.
        The client never throws - always returns a result you can inspect.
      </>
    ),
  },
  {
    title: 'AI-Powered Content',
    icon: '🤖',
    description: (
      <>
        Generate platform-optimized posts, auto-hashtags, A/B testing, and
        optimal posting times - all powered by AI on the Pro+AI plan.
      </>
    ),
  },
  {
    title: 'Free Tier',
    icon: '🚀',
    description: (
      <>
        Start free with 1 platform and 10 posts/month. No credit card
        required. Upgrade as you grow.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
