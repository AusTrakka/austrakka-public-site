import React from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        {/* Background div for future image support */}
        <div className={styles.heroBackground} />

        {/* Logo at bottom-left */}
        <div className={styles.logoContainer}>
          <img
            src={useBaseUrl('img/AusTrakka_Logo_white.png')}
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
    <Layout
      title="AusTrakka"
      description="About AusTrakka"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
