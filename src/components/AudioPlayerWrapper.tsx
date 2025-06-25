'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface AudioPlayerWrapperProps {
  audioUrl: string;
  imageSrc: any; // Accept imported SVG or image
}

export default function AudioPlayerWrapper({ audioUrl, imageSrc }: AudioPlayerWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
  }, [audioUrl]);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => setError('Error playing audio file'));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image with Play Button overlay */}
      <div className="w-full mb-4">
        <Image
          src={imageSrc}
          alt="Audio Art"
          width={320}
          height={320}
          className="rounded-lg object-cover w-full h-80"
        />
      </div>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      {/* Progress Bar */}
      <div className="flex items-center w-full gap-2 mt-2">
        <button
          onClick={togglePlayPause}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          disabled={isLoading}
        >
          {isPlaying ? (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="7" y="4" width="4" height="16" rx="2" fill="white"/><rect x="14" y="4" width="4" height="16" rx="2" fill="white"/></svg>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M7 4v16l13-8-13-8z" fill="white"/></svg>
          )}
        </button>
        <span className="text-gray-500 text-xs w-10 text-right">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleProgressChange}
          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          style={{ accentColor: '#3b82f6' }} // Tailwind blue-500
        />
        <span className="text-gray-500 text-xs w-10">{formatTime(duration)}</span>
      </div>
      {isLoading && <div className="text-gray-400 mt-2 text-center text-xs">Loading audio...</div>}
      {error && <div className="text-red-500 mt-2 text-center text-xs">{error}</div>}
    </div>
  );
} 