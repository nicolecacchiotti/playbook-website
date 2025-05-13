'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title: string;
  audioRef: React.RefObject<HTMLAudioElement>;
}

export default function AudioPlayer({ src, title, audioRef }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false);
  const [isVolumeMenuOpen, setIsVolumeMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('AudioPlayer mounted with src:', src);
    setIsLoading(true);
    setError(null);

    if (audioRef.current) {
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio file loaded successfully');
        setIsLoading(false);
      });

      audioRef.current.addEventListener('error', (e) => {
        const audioError = e.target as HTMLAudioElement;
        console.error('Audio error in AudioPlayer:', {
          error: audioError.error,
          networkState: audioError.networkState,
          readyState: audioError.readyState
        });
        setError('Error loading audio file');
        setIsLoading(false);
      });
    }
  }, [src, audioRef]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
            playPromise.catch(error => {
              console.error('Error playing audio:', error);
              setError('Error playing audio file');
            });
          }
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Error in togglePlayPause:', error);
        setError('Error controlling audio playback');
      }
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 5, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 5, 0);
    }
  };

  const handlePlaybackRateChange = (rate: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
      setPlaybackRate(rate);
      setIsSpeedMenuOpen(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
      {isLoading && (
        <div className="text-gray-500 mb-4">
          Loading audio...
        </div>
      )}
      {error && (
        <div className="text-red-500 mb-4">
          {error}
        </div>
      )}
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => {
          const audioError = e.target as HTMLAudioElement;
          console.error('Audio element error:', {
            error: audioError.error,
            networkState: audioError.networkState,
            readyState: audioError.readyState
          });
          setError('Error loading audio file');
          setIsLoading(false);
        }}
      />
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 w-12">{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm text-gray-600 w-12">{formatTime(duration)}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="relative">
            <button
              onClick={() => setIsVolumeMenuOpen(!isVolumeMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </button>
            {isVolumeMenuOpen && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-white rounded-lg shadow-lg">
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.1}
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer rotate-180"
                  disabled={isLoading}
                />
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={skipBackward}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
            </button>
            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={isLoading}
            >
              {isPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              )}
            </button>
            <button
              onClick={skipForward}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              disabled={isLoading}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3" />
              </svg>
            </button>
          </div>
          <div className="relative w-24">
            <button
              onClick={() => setIsSpeedMenuOpen(!isSpeedMenuOpen)}
              className="w-full px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
              disabled={isLoading}
            >
              {playbackRate}x
            </button>
            {isSpeedMenuOpen && (
              <div className="absolute right-0 mt-1 w-full bg-white rounded-lg shadow-lg py-1 z-10">
                {[0.5, 1, 1.5, 2].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => handlePlaybackRateChange(rate)}
                    className={`w-full px-2 py-1 text-sm text-left hover:bg-gray-100 ${
                      playbackRate === rate ? 'text-gray-900 font-medium' : 'text-gray-600'
                    }`}
                    disabled={isLoading}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 