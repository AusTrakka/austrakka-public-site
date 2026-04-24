import useBaseUrl from '@docusaurus/useBaseUrl';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import type { ReactNode } from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        {/* Logo at bottom-left */}
        <div className={styles.logoContainer}>
          <img
            src={useBaseUrl('img/branding/AusTrakka_Logo_white.png')}
            alt="AusTrakka Logo"
            className={styles.heroLogo}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="AusTrakka" description="About">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
