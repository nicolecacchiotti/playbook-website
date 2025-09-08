'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designSprintsArt from '@/../assets/Card Art/DesignPlan.svg';
import PlayAuthors from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DesignSprintsPage() {
  const title = "Design Sprints";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            Placeholder description for Design Sprints methodology.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designSprintsArt} 
            title="Design Sprints"
            labels={['Design', 'Agile']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for why to use Design Sprints.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Placeholder content for when to use Design Sprints.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for planning and preparation of Design Sprints.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for how to run Design Sprints.
              </p>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for support and troubleshooting Design Sprints.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 