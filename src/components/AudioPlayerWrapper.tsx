'use client';

import { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';

interface AudioPlayerWrapperProps {
  audioUrl: string;
  imageSrc: any; // Accept imported SVG or image
  title?: string;
  duration?: string;
  labels?: string[];
}

export default function AudioPlayerWrapper({ audioUrl, imageSrc, title = 'Delivery Foundations', duration = '12:45', labels = ['Teams', 'Planning'] }: AudioPlayerWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setCurrentTime(0);
    setAudioDuration(0);
    setIsPlaying(false);
  }, [audioUrl]);

  const handleLoadedMetadata = useCallback(() => {
    if (audioRef.current) {
      setAudioDuration(audioRef.current.duration);
      setIsLoading(false);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  }, []);

  const handleProgressChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  const togglePlayPause = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.error('Audio play error:', err);
          setError('Error playing audio file');
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleError = useCallback(() => {
    setError('Failed to load audio file');
    setIsLoading(false);
  }, []);

  const handleEnded = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const formatTime = useMemo(() => {
    return (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden flex flex-col md:flex-row bg-[#0D423C] shadow-lg">
      {/* Card Art */}
      <div className="w-full md:w-auto md:flex-shrink-0 p-4">
        <Image
          src={imageSrc}
          alt="Audio Art"
          className="rounded-xl h-auto max-h-48 w-full md:w-auto object-cover md:object-contain"
        />
      </div>
      {/* Content & Controls */}
      <div className="flex-1 flex flex-col justify-center p-3 text-white">
        {/* Chips */}
        <div className="flex gap-2 mb-4">
          {labels.map(label => (
            <span key={label} className={
              label === 'Teams'
                ? 'bg-blue-700/80 text-white px-3 py-1 rounded-full font-medium'
                : 'bg-purple-600/80 text-white px-3 py-1 rounded-full font-medium'
            } style={{ fontSize: '12px' }}>
              {label}
            </span>
          ))}
        </div>
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{title}</h2>
        {/* Duration */}
        <div className="text-gray-300 text-sm mb-6">{duration} min</div>
        {/* Audio Controls */}
        <div className="flex items-center gap-3 w-full">
          <button
            onClick={togglePlayPause}
            className="bg-[#19B39F] hover:bg-[#15a08e] text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19B39F] transition"
            aria-label={isPlaying ? 'Pause' : 'Play'}
            disabled={isLoading}
          >
            {isPlaying ? (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="4" width="4" height="16" rx="2" fill="white"/><rect x="14" y="4" width="4" height="16" rx="2" fill="white"/></svg>
            ) : (
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 4v16l13-8-13-8z" fill="white"/></svg>
            )}
          </button>
          <span className="text-gray-300 text-xs w-10 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={audioDuration}
            value={currentTime}
            onChange={handleProgressChange}
            className="flex-1 h-1 bg-[#EF8665] rounded-lg appearance-none cursor-pointer accent-[#19B39F]"
            style={{ accentColor: '#19B39F' }}
          />
          <span className="text-gray-300 text-xs w-10">{formatTime(audioDuration)}</span>
        </div>
        {isLoading && <div className="text-gray-400 mt-2 text-xs">Loading audio...</div>}
        {error && <div className="text-red-500 mt-2 text-xs">{error}</div>}
      </div>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={handleError}
        className="hidden"
        preload="metadata"
      />
    </div>
  );
} 