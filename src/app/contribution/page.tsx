import { Button, Card, CardBody, CardHeader, Checkbox, Input, Select } from '@ieum/components/ui';

import * as styles from './page.css';

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 101 }, (_, i) => {
  const year = currentYear - i;
  return { value: year.toString(), label: `${year}년` };
});

const ContributionPage = () => {
  return (
    <div data-animate={true}>
      <Card className={styles.card}>
        <CardHeader asChild>
          <h2>연락처</h2>
        </CardHeader>
        <CardBody className={styles.grid}>
          <div className={styles.formContainer}>
            <Input placeholder="이메일" type="email" required />
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

      <div className={styles.formSubmitContainer}>
        <Checkbox label="개인 정보 이용 약관에 동의하는 것을 최종 확인했습니다." labelAlign="end" />
        <Button colorScheme="secondary">확인</Button>
      </div>
    </div>
  );
};

export default ContributionPage;
