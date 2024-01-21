import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <meta name="og:image" content="/og" />
        <meta name="twitter:image" content="/og" />
      </Head>
      <Layout
        description="Wisp Build is an incrementally-adoptable build system designed to migrate you from shell scripts to reproducible guarantees.">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
