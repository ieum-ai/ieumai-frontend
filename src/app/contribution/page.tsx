'use client';
import { Button } from '@ieum/components/button';
import { Card, CardBody, CardHeader } from '@ieum/components/card';
import { Input } from '@ieum/components/input';
import { Select } from '@ieum/components/select';

import * as styles from './page.css';

const YEARS = [
  { value: '2020', label: '2020년' },
  { value: '2021', label: '2021년' },
  { value: '2022', label: '2022년' },
  { value: '2023', label: '2023년' },
  { value: '2024', label: '2024년' },
];

const ContributionPage = () => {
  return (
    <main className={styles.root} data-animate={true}>
      <Card className={styles.card}>
        <CardHeader asChild>
          <h2>연락처</h2>
        </CardHeader>
        <CardBody className={styles.grid}>
          <div className={styles.formContainer}>
            <Input placeholder="이메일" required />
            <Button size="sm" colorScheme="primary" className={styles.formInnerButton}>
              인증
            </Button>
          </div>
          <div className={styles.formContainer}>
            <Input placeholder="인증번호" required disabled />
            <Button size="sm" colorScheme="secondary" className={styles.formInnerButton}>
              확인
            </Button>
          </div>
        </CardBody>
      </Card>
      <Card className={styles.card}>
        <CardHeader asChild>
          <h2>상세정보</h2>
        </CardHeader>
        <CardBody className={styles.grid}>
          <Input placeholder="닉네임" required />
          <Select label="출생 연도" options={YEARS} required />
          <Select label="지역(도)" options={[]} required />
          <Select label="성별" options={[]} required />
          <Select label="지역(시/군/구)" options={[]} disabled />
        </CardBody>
      </Card>
    </main>
  );
};

export default ContributionPage;
