import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const comingSoonMessages: Record<string, {title: string; message: string; cta: string}> = {
  fa: {
    title: 'مستندات به زودی به فارسی ارائه خواهد شد',
    message: 'ما در حال ترجمه مستندات به فارسی هستیم. لطفاً فعلاً از نسخه انگلیسی استفاده کنید.',
    cta: 'مشاهده نسخه انگلیسی',
  },
  zh: {
    title: 'OwlStack 文档即将推出中文版',
    message: '我们正在将文档翻译成中文。请暂时使用英文版。',
    cta: '查看英文版',
  },
  ja: {
    title: 'OwlStack ドキュメントの日本語版は近日公開予定です',
    message: '現在、ドキュメントを日本語に翻訳中です。それまでは英語版をご利用ください。',
    cta: '英語版を見る',
  },
};

function ComingSoon({locale}: {locale: string}) {
  const info = comingSoonMessages[locale];
  return (
    <Layout title="Coming Soon">
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          textAlign: 'center',
          padding: '2rem',
        }}>
        <Heading as="h1" style={{fontSize: '2.5rem'}}>
          🦉 {info.title}
        </Heading>
        <p style={{fontSize: '1.25rem', maxWidth: '600px', marginTop: '1rem'}}>
          {info.message}
        </p>
        <Link className="button button--primary button--lg" style={{marginTop: '2rem'}} to="/">
          {info.cta}
        </Link>
      </main>
    </Layout>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Publish content to <strong>11 social media platforms</strong> through a single,
          cloud-powered API. Works with PHP, Laravel, and WordPress.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/getting-started/installation">
            Get Started - Free
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/plans/overview">
            View Plans
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const currentLocale = i18n.currentLocale;

  if (currentLocale !== 'en' && comingSoonMessages[currentLocale]) {
    return <ComingSoon locale={currentLocale} />;
  }

  return (
    <Layout
      title="Cloud-Powered Social Media Publishing"
      description="Publish content to 11 social media platforms through a single, cloud-powered API. Works with PHP, Laravel, and WordPress.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
