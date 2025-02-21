'use client';

import { MicIcon } from '@ieum/components/icons';

import ScriptCard from './_components/ScriptCard';
import * as styles from './page.css';

const VoiceTestPage = () => {
  return (
    <div>
      <ScriptCard />

      <button className={styles.recordButton}>
        <MicIcon size={24} />
      </button>
    </div>
  );
};

export default VoiceTestPage;
