import clsx from 'clsx';
import { Metadata } from 'next';
import Image from 'next/image';

import { BrandLogo } from '@ieum/components/icons';
import { METADATA, ROUTES } from '@ieum/constants';

import { ABOUT } from './_constants';
import * as styles from './page.css';

const AboutPage = () => {
  return (
    <div data-animate={true}>
      <div className={styles.hero}>
        <h2>{ABOUT.hero.title}</h2>
        <BrandLogo width={156} height={29} />
      </div>

      <section className={styles.section}>
        <div className={styles.imageContainer}>
          <Image
            src="https://static.ieumai.org/assets/about/seoul-ethan-brooke.webp"
            alt="Seoul (Photo by Ethan Brooke)"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
            priority={false}
            draggable={false}
            fill
          />
        </div>
        <div>
          <header className={styles.header}>
            <span>{ABOUT.overview.number}</span>
            <div className={styles.headerTitle}>
              <h3>{ABOUT.overview.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: ABOUT.overview.subtitle }} />
            </div>
          </header>

          <div className={styles.content}>
            {ABOUT.overview.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>

      <section className={clsx(styles.section, styles.reverse)}>
        <div className={styles.imageContainer}>
          <Image
            src="https://static.ieumai.org/assets/about/busan-markus-winkler.webp"
            alt="Busan (Photo by Markus Winkler)"
            sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, (min-width: 1200px) 33vw"
            priority={false}
            draggable={false}
            fill
          />
        </div>
        <div>
          <header className={styles.header}>
            <span>{ABOUT.goal.number}</span>
            <div className={styles.headerTitle}>
              <h3>{ABOUT.goal.title}</h3>
              <p>{ABOUT.goal.subtitle}</p>
            </div>
          </header>

          <div className={styles.content}>
            {ABOUT.goal.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

export const generateMetadata = () => {
  const metadata: Metadata = {
    title: `프로젝트 소개 — ${METADATA.siteName}`,
    openGraph: {
      title: `프로젝트 소개 — ${METADATA.siteName}`,
      url: `${METADATA.siteUrl}${ROUTES.about}`,
    },
    twitter: {
      title: `프로젝트 소개 — ${METADATA.siteName}`,
    },
  };

  return metadata;
};
