'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import conceptUsabilityTestingArt from '@/../assets/Card Art/DesignUsabilityTesting.svg';
import PlayAuthors from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ConceptUsabilityTestingPage() {
  const title = "Concept & Usability Testing";
  const section = "Creative Direction";
  const audioUrl = "/audio/Concept & Usability Testing.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">This is the page for Concept & Usability Testing.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={conceptUsabilityTestingArt} 
            title="Concept & Usability Testing"
            labels={['Testing', 'Usability']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for why to use Concept & Usability Testing.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Placeholder content for when to use Concept & Usability Testing.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for planning and preparation for Concept & Usability Testing.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for how to run Concept & Usability Testing.
              </p>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Placeholder content for support and troubleshooting Concept & Usability Testing.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 