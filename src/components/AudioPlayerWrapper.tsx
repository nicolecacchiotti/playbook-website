'use client';

import { useRef, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';

interface AudioPlayerWrapperProps {
  audioUrl: string;
}

export default function AudioPlayerWrapper({ audioUrl }: AudioPlayerWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

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
        })
        .catch(error => {
          console.error('Error fetching audio file in wrapper:', error);
        });

      audioRef.current.addEventListener('error', (e) => {
        const audioError = e.target as HTMLAudioElement;
        console.error('Audio error in wrapper:', {
          error: audioError.error,
          networkState: audioError.networkState,
          readyState: audioError.readyState
        });
      });

      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio file loaded successfully in wrapper');
      });
    }
  }, [audioUrl]);

  return (
    <AudioPlayer 
      src={audioUrl}
      title=""
      audioRef={audioRef}
    />
  );
} 