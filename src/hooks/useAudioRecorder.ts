import { useState, useRef, useEffect } from 'react';

const ERROR_MESSAGES = {
  NOT_SUPPORTED: 'MediaRecorder API is not supported in this browser.',
  START_FAILURE: 'Unable to start recording.',
};

type StatusMessages = 'idle' | 'recording' | 'recorded';

interface AudioRecorderResult {
  status: StatusMessages;
  audioBlob: Blob | null;
  audioStream: MediaStream | null;
  startRecording: () => Promise<void>;
  stopRecording: () => void;
  clear: () => void;
  error: string | null;
}

export const useAudioRecorder = (): AudioRecorderResult => {
  const [status, setStatus] = useState<StatusMessages>('idle');
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioStream, setAudioStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setAudioStream(stream);
      if (typeof MediaRecorder === 'undefined') {
        setError(ERROR_MESSAGES.NOT_SUPPORTED);
        return;
      }

      let options: MediaRecorderOptions = {};
      if (MediaRecorder.isTypeSupported('audio/webm')) {
        options = { mimeType: 'audio/webm' };
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        options = { mimeType: 'audio/mp4' };
      }

      const recorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data && e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, {
          type: options.mimeType || 'audio/webm',
        });
        setAudioBlob(blob);
        stream.getTracks().forEach((track) => track.stop());
        setAudioStream(null);
        setStatus('recorded');
      };

      recorder.start();
      setStatus('recording');
    } catch (err) {
      console.error('Error starting recording: ', err);
      setError(ERROR_MESSAGES.START_FAILURE);
    }
  };

  const stopRecording = () => {
    if (status !== 'recording') return;
    mediaRecorderRef.current?.stop();
  };

  const clear = () => {
    if (status === 'recording') {
      stopRecording();
    }
    setAudioBlob(null);
    setError(null);
    chunksRef.current = [];
    mediaRecorderRef.current = null;
    setAudioStream(null);
    setStatus('idle');
  };

  useEffect(() => {
    return () => {
      audioStream?.getTracks().forEach((track) => track.stop());
    };
  }, [audioStream]);

  return {
    status,
    audioBlob,
    audioStream,
    startRecording,
    stopRecording,
    clear,
    error,
  };
};
