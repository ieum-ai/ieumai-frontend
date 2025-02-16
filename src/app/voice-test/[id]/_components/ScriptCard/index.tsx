'use client';

import { motion } from 'motion/react';

import { Card } from '@ieum/components/ui';

import * as styles from './styles.css';

const ScriptCard = () => {
  return (
    <Card asChild>
      <motion.div
        className={styles.root}
        layoutId="voice-test-container"
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <motion.p
          className={styles.script}
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          안녕하세요? 오늘 날씨 참 좋네요. 햇볕도 따뜻하고 바람도 시원한 게 산책하기 딱 좋죠. 혹시
          근처에 맛있는 카페 알고 계세요? 친구랑 만나기로 했는데 어디로 가야 할지 고민이라서요.
        </motion.p>
      </motion.div>
    </Card>
  );
};

export default ScriptCard;
