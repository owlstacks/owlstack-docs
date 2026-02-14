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
        Reddit, Slack, Tumblr, and WhatsApp — all through a unified interface.
      </>
    ),
  },
  {
    title: 'Zero Dependencies',
    icon: '⚡',
    description: (
      <>
        Pure PHP 8.1+ with only ext-curl and ext-json required. No bloated
        SDKs. Every concern is backed by clean interfaces.
      </>
    ),
  },
  {
    title: 'Framework Integrations',
    icon: '🔌',
    description: (
      <>
        First-class support for Laravel (10/11/12) and WordPress (6.4+).
        Or use standalone — no framework required.
      </>
    ),
  },
  {
    title: 'Immutable & Type-Safe',
    icon: '🛡️',
    description: (
      <>
        Readonly value objects, PHP 8.1 enums, and strict typing throughout.
        Publisher never throws — always returns a result.
      </>
    ),
  },
  {
    title: 'Smart Formatting',
    icon: '✨',
    description: (
      <>
        Each platform has its own formatter respecting character limits,
        markup syntax, and media constraints automatically.
      </>
    ),
  },
  {
    title: 'Pro Features',
    icon: '🚀',
    description: (
      <>
        Batch publishing, scheduling, automation, AI integration, analytics,
        and delivery logging with retry strategies.
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
