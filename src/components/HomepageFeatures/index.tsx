import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Overview from '@site/docs/overview.md';

export default function HomepageFeatures(): ReactNode {
  return (
      <div className="container">
          <Overview />
      </div>
  );
}
