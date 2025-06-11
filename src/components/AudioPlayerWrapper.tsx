'use client';

import { useRef, useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';

interface AudioPlayerWrapperProps {
  audioUrl: string;
}

export default function AudioPlayerWrapper({ audioUrl }: AudioPlayerWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log('AudioPlayerWrapper mounted with URL:', audioUrl);
    if (audioRef.current) {
      console.log('Audio element:', audioRef.current);
      
      // Test if the audio file is accessible
      fetch(audioUrl)
        .then(response => {
          console.log('Audio file fetch response in wrapper:', response.status, response.statusText);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.blob();
        })
        .then(blob => {
          console.log('Audio file blob in wrapper:', blob.type, blob.size);
          // Create object URL for the audio
          const objectUrl = URL.createObjectURL(blob);
          if (audioRef.current) {
            audioRef.current.src = objectUrl;
          }
        })
        .catch(error => {
          console.error('Error fetching audio file in wrapper:', error);
          setError('Error loading audio file');
        });

      audioRef.current.addEventListener('error', (e) => {
        const audioError = e.target as HTMLAudioElement;
        console.error('Audio error in wrapper:', {
          error: audioError.error,
          networkState: audioError.networkState,
          readyState: audioError.readyState
        });
        setError('Error playing audio file');
      });

      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio file loaded successfully in wrapper');
        setError(null);
      });
    }
  }, [audioUrl]);

  if (error) {
    return <div className="text-red-500 p-4 bg-red-100 rounded-lg">{error}</div>;
  }

  return (
    <AudioPlayer 
      src={audioUrl}
      title=""
      audioRef={audioRef}
    />
  );
} 