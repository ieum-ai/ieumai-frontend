import { FC, ReactElement } from 'react';

import { Card, CardBody, CardHeader } from '@ieum/components/card';
import { Input } from '@ieum/components/input';

import * as styles from './page.css';

const ContributionPage: FC = (): ReactElement => {
  return (
    <div className={styles.root}>
      <Card className={styles.card}>
        <CardHeader asChild>
          <h2>연락처</h2>
        </CardHeader>
        <CardBody>
          <Input label="이메일" required />
          <Input label="인증번호" />
        </CardBody>
      </Card>
      <Card className={styles.card}>
        <CardHeader asChild>
          <h2>상세정보</h2>
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </div>
  );
};

export default ContributionPage;
