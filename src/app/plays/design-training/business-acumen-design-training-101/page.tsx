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

export default function BusinessAcumenDesignTraining101Page() {
  const title = "Business Acumen: Design Training 101";
  const section = "Design Training";
  const audioUrl = "/audio/Business Acumen Training for Designers.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>
            Business acumen training for designers focuses on understanding the business context, client value, and market dynamics that influence design decisions. This foundational training helps designers align their work with business objectives and stakeholder needs.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designPlanArt}
            title="Business Acumen: Design Training 101"
            labels={['Training', 'Business']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Business acumen training helps designers understand the broader business context in which their work operates. This knowledge enables better decision-making, more effective stakeholder communication, and designs that better serve business objectives.
              </p>
              <p className="text-foreground mb-4" style={{ fontSize: '14px' }}>
                Designers with strong business acumen can better advocate for user needs while understanding business constraints, leading to more successful projects and stronger client relationships.
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