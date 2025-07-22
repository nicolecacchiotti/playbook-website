'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';
import designPlanArt from '@/../assets/Card Art/DesignPlan.svg';

export default function StakeholderMappingPage() {
  const title = "Stakeholder Mapping";
  const section = "Design Training";
  const audioUrl = "/audio/Stakeholder Mapping.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>
            Stakeholder mapping helps designers identify and understand the key players in a project, their influence, interests, and how to effectively engage with them throughout the design process.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designPlanArt}
            title="Stakeholder Mapping"
            labels={['Training', 'Business']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Content coming soon...
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Planning & Prep</h2>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Content coming soon...
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">How to run the play</h2>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Content coming soon...
              </p>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Support</h2>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Content coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 