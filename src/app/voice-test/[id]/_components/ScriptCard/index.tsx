'use client';

import { motion } from 'motion/react';

import { Card } from '@ieum/components/ui';

import * as styles from './styles.css';

const ScriptCard = () => {
  return (
    <Card asChild>
      <motion.div
        className={styles.card}
        layoutId="voice-test-container"
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      >
        <motion.p
          className={styles.script}
          initial={{ y: 4, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          안녕하세요? 오늘 날씨 참 좋네요. 햇볕도 따뜻하고 바람도 시원한 게 산책하기 딱 좋죠. 혹시
          근처에 맛있는 카페 알고 계세요? 친구랑 만나기로 했는데 어디로 가야 할지 고민이라서요.
        </motion.p>

        <motion.div>
          <p>1</p>
          <p>2</p>
        </motion.div>
      </motion.div>
    </Card>
  );
};

export default ScriptCard;
