'use client';

import { MicIcon } from '@ieum/components/icons';
import { RippleVisualizer } from '@ieum/components/ui';
import { useAudioRecorder } from '@ieum/hooks/useAudioRecorder';

import ScriptCard from './_components/ScriptCard';
import * as styles from './page.css';

const VoiceTestPage = () => {
  const { status, audioBlob, startRecording, stopRecording, audioStream, error } =
    useAudioRecorder();

  return (
    <>
      <ScriptCard />

      <div className={styles.controlPanel}>
        <div className={styles.rippleContainer}>
          {status === 'recording' && audioStream && <RippleVisualizer stream={audioStream} />}
        </div>
        <button
          className={styles.recordButton}
          onClick={status === 'recording' ? stopRecording : startRecording}
        >
          <MicIcon size={24} />
        </button>
      </div>

      {audioBlob && (
        <div>
          <h3>녹음된 오디오 미리 듣기:</h3>
          <audio controls src={URL.createObjectURL(audioBlob)} />
        </div>
      )}
    </>
  );
};

export default VoiceTestPage;
