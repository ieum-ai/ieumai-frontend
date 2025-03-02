'use client';

import React, { useEffect, useRef } from 'react';

type Ripple = {
  startTime: number;
};

type RippleVisualizerProps = {
  stream: MediaStream;
};

export const RippleVisualizer = ({ stream }: RippleVisualizerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const audioContext = new AudioContext();

    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;

    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);

    const dataArray = new Uint8Array(analyser.fftSize);

    let lastRippleTime: number = 0;
    const rippleInterval: number = 300;
    const duration: number = 1500;

    const animate = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX: number = canvas.width / 2;
      const centerY: number = canvas.height / 2;
      const maxRadius: number = Math.min(canvas.width, canvas.height) / 2;

      analyser.getByteTimeDomainData(dataArray);

      let sum: number = 0;
      for (let i: number = 0; i < dataArray.length; i++) {
        const deviation: number = dataArray[i] - 128;
        sum += deviation * deviation;
      }
      const rms: number = Math.sqrt(sum / dataArray.length);

      if (rms > 10 && Date.now() - lastRippleTime > rippleInterval) {
        ripplesRef.current.push({ startTime: Date.now() });
        lastRippleTime = Date.now();
      }

      const computedColor: string = getComputedStyle(canvas).color;
      const currentTime: number = Date.now();

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        const progress: number = (currentTime - ripple.startTime) / duration;
        if (progress > 1) return false;

        const radius: number = progress * maxRadius;
        const opacity: number = 1 - progress;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);

        ctx.save();
        ctx.globalAlpha = opacity;
        ctx.fillStyle = computedColor;
        ctx.fill();
        ctx.restore();

        return true;
      });

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      audioContext.close().catch((err) => console.error('AudioContext close error:', err));
    };
  }, [stream]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};
