import Link from 'next/link';

import { Button } from '@ieum/components/ui';
import { ROUTES } from '@ieum/constants';

import * as styles from './page.css';

const HomePage = () => {
  return (
    <div data-animate={true}>
      <section className={styles.section} data-animate={true}>
        <h2 className={styles.heading}>한국 고유 음성의 가치</h2>
        <p className={styles.description}>
          과거와 현재를 잇는 소리의 다리, 미래로 전하는 우리의 울림
        </p>

        <Button asChild>
          <Link className={styles.aboutLink} href={ROUTES.about}>
            더 알아보기
          </Link>
        </Button>
      </section>

      <section className={styles.mapSection}></section>

      <section className={styles.section} data-animate={true}>
        <p className={styles.slogan}>
          우리는 역사를 <strong>잇고</strong>
          <br />
          <strong>미래</strong>로 나아갑니다
        </p>
        <Link className={styles.contributionLink} href={ROUTES.contribution}>
          함께하기 →
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
