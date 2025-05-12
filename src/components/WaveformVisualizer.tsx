'use client';

import { useEffect, useRef } from 'react';

interface WaveformVisualizerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  barCount?: number;
}

export default function WaveformVisualizer({ audioRef, barCount = 48 }: WaveformVisualizerProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 128;
    const source = ctx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(ctx.destination);
    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    function draw() {
      analyser.getByteFrequencyData(dataArray);
      if (canvasRef.current) {
        const bars = Array.from(canvasRef.current.children) as HTMLDivElement[];
        for (let i = 0; i < barCount; i++) {
          const value = dataArray[i] || 0;
          bars[i].style.height = `${(value / 255) * 100}%`;
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      animationRef.current && cancelAnimationFrame(animationRef.current);
      ctx.close();
    };
    // eslint-disable-next-line
  }, [audioRef.current]);

  return (
    <div
      ref={canvasRef}
      className="flex items-end justify-center h-24 w-full gap-[2px] mt-8"
      style={{ minHeight: 48 }}
    >
      {Array.from({ length: barCount }).map((_, i) => (
        <div
          key={i}
          className="bg-green-400 rounded w-[3px] transition-all duration-75"
          style={{ height: '10%' }}
        />
      ))}
    </div>
  );
} 