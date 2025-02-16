'use client';

import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button, Checkbox } from '@ieum/components/ui';
import { ROUTES } from '@ieum/constants';

import * as styles from './styles.css';

const TestIntroduce = () => {
  const [isPrivacyAgree, setIsPrivacyAgree] = useState<boolean>(false);

  const router = useRouter();

  const handleStartTest = () => {
    if (!isPrivacyAgree) {
      return;
    }
    router.push(`${ROUTES.test}/id`);
  };

  return (
    <motion.div
      className={styles.root}
      layoutId="voice-test-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div data-animate={true}>
        <h2 className={styles.introText}>
          어떤 지역의 한국어를 구사하고 있을까요?
          <br />
          0명의 사용자가 함께하고 있습니다.
        </h2>
        <Checkbox
          className={styles.privacyCheckbox}
          label="음성테스트를 위한 개인정보 이용에 동의합니다."
          checked={isPrivacyAgree}
          onCheckedChange={() => setIsPrivacyAgree(!isPrivacyAgree)}
        />
        <Button className={styles.testButton} colorScheme="primary" onClick={handleStartTest}>
          음성테스트 시작하기
        </Button>
      </div>
    </motion.div>
  );
};

export default TestIntroduce;
