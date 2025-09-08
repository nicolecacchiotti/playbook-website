'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import projectOutbriefArt from '@/../assets/Card Art/Project Outbrief.svg';
import PlayAuthors, { rapidIdeationWorkshopAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ProjectOutbriefPage() {
  const title = "Project Outbrief";
  const section = "Immersion";
  const audioUrl = "/audio/Project Outbrief.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={rapidIdeationWorkshopAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            An outbrief provides a holistic look at the work that's been done on a project. It allows the team to showcase how they arrived at the outputs and deliverables of an engagement.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={projectOutbriefArt} 
            title="Project Outbrief"
            labels={['Project', 'Documentation']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sharing the journey of what we've accomplished and learned throughout a project helps strengthen our final recommendations by giving the audience context and evidence for why we've landed where we've landed.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">End of project</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Near or at the end of a project to recap the work and share our team's final recommendations.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Collect outbrief content along the way</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To save time from having to track down files and information at the end of the project, have a central location to store deliverables, insights, etc. along the way. Effective solutions are a team Google Drive or even a presentation deck where the team can drop content that can eventually be turned into slides.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Draft the outbrief</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The format of an outbrief is typically a presentation deck. The DRIs should carve out time as far in advance of the outbrief as possible to put together a draft of the narrative around the project and start figuring out ways to showcase the project activities and learnings. This will help the team understand the scope of outbrief-specific tasks in addition to wrapping up the project itself.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "Can you write the outline of a project out-brief that spent 10 weeks designing new learning pathways for a client website"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">3. Ensure there are no surprises surrounding the work shared at the outbrief</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While an outbrief can be a time to pull out some stops and bring a wow factor in certain ways, it isn't the time for big reveals of information or recommendations. The final output shouldn't be a surprise to our key stakeholders.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The work should be approached collaboratively and iteratively along the way with the client to ensure there's alignment and satisfaction with the final results. The outbrief should be a recap of the journey our collective team has been on together through the engagement and a summary of solutions aligned upon prior to the outbrief.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Plan to practice and dry run the outbrief presentation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Outbriefs usually consist of handoffs between teammates speaking to the work, may contain various media elements such as videos or slide transitions, and other logistics — not to mention they are a high stakes moment in a project. To ensure things go smoothly, plan to practice at least one run-through of the outbrief as a team.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Recap the problem/opportunity</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To provide overall context for the work, briefly and succinctly explain what problem/opportunity the work was focused on.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Share the scope of the work</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Include information about the timeline of the project and an overview of how the time was used. This will help give the outbrief audience a sense of all that was accomplished during the engagement.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Give an overview of the key activities and deliverables</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Recall important elements of the work and outputs that were created. Focus on the parts of the project that helped move the work along and drive towards a final solution. Provide a summary of the insights and learnings that came out of these items to show the value of them.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Focus on the key takeaways and recommendations</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ensure your outbrief has a clear punchline by highlighting the main things the client should take away from the work such as recommendations and solutions we're suggesting they implement.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Offer next steps</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Outline what the client should do next in order to put the proposed recommendations into action. This will end the presentation on an energetic note with future possibilities in mind.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Thank the client and open the floor for any final questions and discussion</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Show appreciation for the opportunity to have done the work. Even if questions and discussion were welcome throughout the outbrief, folks may have a few final things to share after the work has been shared in totality.
              </p>
              
              <BlueCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                }
                header="When You're Done"
                body={
                  <div className="text-blue-card-text" style={{ fontSize: '14px' }}>
                    <p className="mb-3">Teams should feel confident in answering:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>Does the client have a clear sense of our final recommendations now that we've completed the work?</li>
                      <li>Does the client understand how all the parts of the project lead to the final recommendations?</li>
                      <li>Do the final recommendations fulfill the project outcomes?</li>
                    </ul>
                  </div>
                }
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
              
              <RedCard
                header="Over or Under Explaining the Work"
                body="Outbriefs need to cover a lot of ground to recap an entire project in a brief fashion. Finding the right fidelity of content to share can be difficult. Getting too in the weeds in particular areas of the work can take away from the goal of providing a succinct recap. Providing too little details on elements of the project can detract from their value or make the narrative confusing."
              />
              
              <RedCard
                header="Not Including a Clear 'Punchline' to the Work"
                body="It's easy to get caught up in the process of explaining the project and forget to focus on clearly articulating what the client should take away from the engagement. This can leave the outbrief feeling like a process overview rather than a valuable final deliverable that gathers up the key content and recommendations they should take away from the project."
              />
              
              <RedCard
                header="Not Seeking Alignment on the Project Narrative and Solutions Prior to the Outbrief Meeting"
                body="While the outbrief may be one of the final steps in a project, waiting until the outbrief to share how you're recapping the work and final solutions can be risky. Without alignment sought prior, the client may voice concerns and dissatisfaction during the outbrief. This could leave the team in a tough position if the outbrief aligns with the very end of the project, leaving little to no time to correct the situation within the project timeframe."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Electrify America | 2022 Wrapped"
                  href="#"
                />
                <ResourceCard
                  title="Electrify America | App Review Prompt One-Pager"
                  href="#"
                />
                <ResourceCard
                  title="Unisys Outbrief"
                  href="#"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 