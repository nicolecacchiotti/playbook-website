'use client';

import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  albumArt?: string;
  episodeTitle?: string;
  episodeDate?: string;
  showName?: string;
  spotifyUrl?: string;
}

export default function AudioPlayer({ src, title, audioRef, albumArt, episodeTitle, episodeDate, showName, spotifyUrl }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [volume, setVolume] = useState(1);
  const [isSpeedMenuOpen, setIsSpeedMenuOpen] = useState(false);
  const [isVolumeMenuOpen, setIsVolumeMenuOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaybackRateOpen, setIsPlaybackRateOpen] = useState(false);

  useEffect(() => {
    console.log('AudioPlayer mounted with src:', src);
    setIsLoading(true);
    setError(null);

    if (audioRef.current) {
      audioRef.current.addEventListener('canplay', () => {
        console.log('Audio can play');
        setIsLoading(false);
      });

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

      const timeoutId = setTimeout(() => {
        if (isLoading) {
          console.log('Audio loading timeout - forcing play state');
          setIsLoading(false);
        }
      }, 10000);

      return () => {
        clearTimeout(timeoutId);
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplay', () => {});
          audioRef.current.removeEventListener('loadeddata', () => {});
          audioRef.current.removeEventListener('error', () => {});
        }
      };
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
            playPromise.catch(() => setError('Error playing audio file'));
          }
        }
        setIsPlaying(!isPlaying);
      } catch {
        setError('Error controlling audio playback');
      }
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 15, duration);
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 15, 0);
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

  // Placeholders if props are missing
  const art = albumArt || 'https://via.placeholder.com/200x200?text=Podcast';
  const epTitle = episodeTitle || 'Podcast Episode Title';
  const epDate = episodeDate || 'Jan 1 · Show Name';
  const show = showName || 'Show Name';
  const spotify = spotifyUrl || '#';

  // Handle click outside for speed menu
  useEffect(() => {
    if (!isSpeedMenuOpen) return;
    function handleClick(e: MouseEvent) {
      setIsSpeedMenuOpen(false);
    }
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isSpeedMenuOpen]);

  return (
    <div className="bg-ink rounded-2xl p-4 w-full max-w-4xl mx-auto shadow-lg flex flex-col justify-between min-h-[180px] relative">
      {/* Playback Rate Dropdown */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setIsPlaybackRateOpen(!isPlaybackRateOpen)}
          className="bg-paper/10 text-paper px-3 py-1 rounded font-medium text-sm shadow hover:bg-paper/20"
        >
          {playbackRate}x
        </button>
        {isPlaybackRateOpen && (
          <div className="absolute right-0 mt-2 w-20 bg-ink/90 rounded shadow-lg py-1 text-paper text-sm">
            {[0.5, 1, 1.5, 2].map((rate) => (
              <button
                key={rate}
                onClick={() => {
                  setPlaybackRate(rate);
                  setIsPlaybackRateOpen(false);
                }}
                className={`block w-full text-left px-4 py-1 hover:bg-ink/60 ${playbackRate === rate ? 'font-bold' : ''}`}
              >
                {rate}x
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Episode Info */}
      <div className="flex-1">
        <div className="uppercase text-paper/80 text-xs tracking-widest font-medium mb-1 text-left">{show}</div>
        <h2 className="text-paper text-lg md:text-xl font-bold text-left leading-tight">{epTitle}</h2>
      </div>

      {/* Controls */}
      <div className="flex items-center space-x-4 mt-4">
        <button onClick={togglePlayPause} className="bg-paper text-ink rounded-full w-12 h-12 flex items-center justify-center shadow hover:scale-105 transition-transform text-2xl" disabled={isLoading} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-ink border-t-transparent rounded-full animate-spin"></div>
          ) : isPlaying ? (
            <span>⏸</span>
          ) : (
            <span>▶</span>
          )}
        </button>

        <div className="flex-1 flex items-center space-x-2">
          <span className="text-paper/80 text-xs w-10 text-right">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleProgressChange}
            className="flex-1 h-1 bg-paper/40 rounded-lg appearance-none cursor-pointer accent-paper"
          />
          <span className="text-paper/80 text-xs w-10">{formatTime(duration)}</span>
        </div>
      </div>

      {isLoading && <div className="text-paper/70 mt-2 text-center text-xs">Loading audio...</div>}
      {error && <div className="text-orange mt-2 text-center text-xs">{error}</div>}
    </div>
  );
} 