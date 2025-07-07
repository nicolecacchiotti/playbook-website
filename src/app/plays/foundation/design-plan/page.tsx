'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designPlanArt from '@/../assets/Card Art/DesignPlan.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { designPlanAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function DesignPlanPage() {
  const title = "Design Plan";
  const section = "Foundation";
  const audioUrl = "/audio/design-plan-playbook.wav"; // Update with actual audio file path when available
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designPlanAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p style={{ fontSize: '14px' }}>The creation of a Design Plan is an essential exercise that allows for design-specific project outcome alignment between WillowTree teams and their client partners. At its core, a Design Plan is executed in order to set a project team up for success.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designPlanArt} 
            title="Design Plan"
            labels={['Teams', 'Planning']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2">Why to use this play</h2>
              <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                A Design Plan is an exercise designed to create enough structure to support progress and forward momentum, even in situations where you simply do not have all of the answers. In fact, assuming that things will change helps to prepare you for when they do. After all, if clients knew how to solve their problems and seamlessly execute on their vision without disruption, they wouldn't come to us in the first place.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>At the beginning of a new engagement</h3>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      Before you can journey toward a shared design outcome, it is critical to plant a seed of shared understanding with your internal team and external client partners. When built collaboratively with all involved stakeholders, a Design Plan can set table stakes for your engagement while acting as a tool to build trust.
                    </p>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      That being said, it is crucial that this happens in the early stages of your client relationship. Your instinct may lead you to a "wait and see" approach out of fear that you do not possess all necessary information to make informed decisions. Rather than being reactive, celebrate this starting point and make it clear that the plan will be revisited and updated often.
                    </p>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      Think of a Design Plan as the grease that keeps the wheels moving smoothly. Even if the destination is not completely known at the beginning of your journey, the plan ensures that teams continue to move forward. Onward!
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>After the project has been running for a couple of sprints</h3>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>
                      At the outset of the engagement, make a note to check back in on the plan periodically. Preparing your team for the reality that the plan will likely change makes it easier to take action if the need for change arrives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2">Planning & Prep</h2>
              <p className="text-gray-700" style={{ fontSize: '14px' }}>
                Planning & Prep content will go here.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2">How to run the play</h2>
              <p className="text-gray-700" style={{ fontSize: '14px' }}>
                How to run content will go here.
              </p>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold">Common Pitfalls</h2>
              <RedCard
                header="Placeholder Pitfall"
                body="Placeholder content for common pitfalls."
                className="mt-0"
              />
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Placeholder Resource"
                    href="https://example.com"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 