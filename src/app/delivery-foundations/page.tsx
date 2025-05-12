'use client';

import AudioPlayer from '@/components/AudioPlayer';
import Breadcrumb from '@/components/Breadcrumb';
import { useRef } from 'react';

export default function DeliveryFoundations() {
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <Breadcrumb 
            items={[
              { label: 'Delivery Foundations' }
            ]} 
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Delivery Foundations</h1>
            <p className="text-gray-600">
              Welcome to the Delivery Foundations section. Here you'll find essential audio guides and resources
              to help you understand the core principles of effective delivery.
            </p>
          </div>

          <AudioPlayer 
            src="/sample-audio.mp3" 
            title=""
            audioRef={audioRef}
          />
        </div>
      </div>
    </main>
  );
} 