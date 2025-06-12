'use client';

import { useRef } from 'react';
import AudioPlayer from './AudioPlayer';

interface AudioPlayerWrapperProps {
  audioUrl: string;
}

export default function AudioPlayerWrapper({ audioUrl }: AudioPlayerWrapperProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <AudioPlayer 
      src={audioUrl}
      title=""
      audioRef={audioRef}
    />
  );
} 