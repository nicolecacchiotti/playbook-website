'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import contentDesignCollaborationArt from '@/../assets/Card Art/ContentDesignCollaboration.svg';
import PlayAuthors, { contentTestingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ContentDesignCollaborationPage() {
  const title = "Content Design Collaboration";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={contentTestingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            Collaboration best practices between content designers and product designers, researchers, and other disciplines.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={contentDesignCollaborationArt} 
            title="Content Design Collaboration"
            labels={['Content', 'Collaboration']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Content designers craft the flow of information within digital products to meet user needs and business goals. Beyond core competencies like UX writing and information architecture, content designers can impact a project throughout the UX cycle and will overlap with other disciplines on many initiatives. <strong>Here are some high-level considerations for different disciplines:</strong>
              </p>
              
              <ul className="text-gray-700 mb-8 space-y-4">
                <li>
                  <strong>For product designers:</strong> Content designers want to help design the product beyond "just" providing UX copy. Content designers can help divide up work on initially concepting a set of flows with a focus more on information than UI elements.
                </li>
                <li>
                  <strong>For product researchers:</strong> Content designers want to support and embed with both "generative" research initiatives in discovery and "evaluative" initiatives during the design phase (e.g. usability testing). Content designers can also run protocols to text UX copy and other content elements more granularly.
                </li>
                <li>
                  <strong>For growth partners:</strong> Content designers can help ensure a product's marketing strategy is aligned to its UX content strategy in substance and style (i.e. users should feel like they are using the product that was being advertised to them, down to the same brand voice).
                </li>
                <li>
                  <strong>What content designers don't usually do:</strong> Content designers tend to not specialize in visual design, hi-fidelity prototyping, long-form content creation, or coding (design-based or dev), but of course everyone has different skill sets!
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Across the UX Cycle</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                There are opportunities for collaboration across products regardless of where they are in the UX cycle. Below we'll highlight some specific activities.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Understand the project's needs</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Consider where the project falls within the UX cycle to determine potential points of collaboration. e.g. if we're in discovery, content design and product design may start to think about a joint UX / content audit of an existing product.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Determine points of ownership and collaboration on initiatives</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As part of general team norming, the team will establish a framework (e.g. sprint planning) for understanding who is owning vs. supporting various initiatives. Content designers who feel confident leading a certain initiative (like journey mapping) should vocalize that with the team. This can help unlock bandwidth for other disciplines to lead on other initiatives where there may not be overlapping competencies.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Discovery phase</h3>
                
                <h4 className="text-base font-semibold mb-3 text-gray-800">Activity Highlight: UX & Content Audits (Content Design x Product Design or Product Strategists)</h4>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Product and content designers can conduct a joint audit of a existing experience in the same Figma / FigJam space.</li>
                  <li>There will be a ton of overlap in insights each discipline is bringing, such as around IA, content hierarchy (e.g. what is "above the fold"), and other elements of the design.</li>
                  <li>By conducting the analysis in one shared file, it will help content designers grow as design thinkers beyond content, and allow product designers to expand their thinking around content.</li>
                  <li>In the same vein, disciplines can also conduct a landscape analysis in the same space.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Design phase</h3>
                
                <h4 className="text-base font-semibold mb-3 text-gray-800">Activity Highlight: Wireframing (Content Design x Product Design)</h4>
                
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>While not visual designers, content disciplines can support creation of at least lo-fi wireframes - with a focus more on content elements (e.g. how much real estate is needed for instructional copy) and less on visual / UI elements.</li>
                  <li>In practice, this could mean iterating different versions of a flow (or dividing up work if there are multiple flows) in separate sandboxes and then aligning on a shared flow to move forward with. See <a href="/plays/immersion/ux-writing" className="text-blue-600 underline hover:text-blue-800">UX writing play</a> for more guidance here.</li>
                  <li>When presenting designs together, POs/Tech Leads are able to ask questions about the whole experience (e.g. is there need for a new component? What's API vs experience content?) and address constraints (time, funding, tech) as a whole.</li>
                </ul>
                
                <h4 className="text-base font-semibold mb-3 text-gray-800">Activity Highlight: User Research | Usability Testing (Content Design x Product Research)</h4>
                
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Just like product designers, content designers should collaborate with UX researchers to ensure content needs are represented in an overall learning plan and specific usability tests.</li>
                  <li>If a product designer is helping generate questions on a certain flow or feature, content designers should offer feedback and expand on those questions to incorporate the 'content angle'.</li>
                  <li>See the <a href="/plays/creative-direction/content-testing" className="text-blue-600 underline hover:text-blue-800">content testing play</a> for more details texting UX copy and content elements.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Implementation phase</h3>
                
                <h4 className="text-base font-semibold mb-3 text-gray-800">Activity Highlight: Messaging Alignment (Content Design x Growth Marketers)</h4>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Ahead of launching a new project (and potentially early on in a project), <strong>content designers and growth marketers</strong> should ensure that messaging is aligned.</li>
                  <li>While UX writing tends to be less flowery and straight to the point in tone, the content across marketing channels and the actual product UI should embody the same brand voice and use the same terminology.</li>
                  <li>Descriptions of products / features in marketing collateral (e.g. email campaigns) should be directly represented in that product; i.e. if we are highlighting a low price on a new phone, that low price should be represented in the UI to follow through on the user's expectations.</li>
                  <li>Teams should ensure smooth pathways from marketing touchpoints (e.g. a link in an email) into product screens.</li>
                </ul>
              </div>
              
              <BlueCard
                header="When You're Done"
                body={
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2" style={{color: '#1e40af', fontSize: '14px'}}>Teams should feel confident in answering:</h4>
                      <ul className="ml-6 space-y-1" style={{fontSize: '14px'}}>
                        <li>• On a project team, what initiatives will content designers and other product disciplines own vs. overlap on and how does that drive norms in terms of meetings, check-ins, etc.?</li>
                        <li>• How did collaboration help us work more efficiently and strengthen our business impact? How can we improve upon collaboration practices moving forward (via retros)?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2" style={{color: '#1e40af', fontSize: '14px'}}>Share findings</h4>
                      <ul className="ml-6 space-y-1" style={{fontSize: '14px'}}>
                        <li>• If a team is presenting out findings from (e.g.) a UX / content audit or competitive analysis, it may be helpful for disciplines to handoff to one another to some specific insights relative to their discipline (e.g. content designer speaks to content items, product designer speaks to visual design items).</li>
                      </ul>
                    </div>
                  </div>
                }
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Common Pitfalls</h3>
                
                <div className="space-y-6">
                  <RedCard
                    header="Not Looping in Content Designers from Discovery / Kickoff"
                    body="Content designers will have the greatest impact when they are onboarding alongside everyone else and have opportunities early on to communicate initiatives they would feel comfortable driving vs. supporting."
                  />
                  
                  <RedCard
                    header="Not Encouraging Other Disciplines to Write UX Copy"
                    body="Content designers should always empower other disciplines to write their own UX copy or provide feedback - it doesn't take a writing background to have a good sense of what content the user needs."
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="(Content Design Team) - Business Development Deck (TBD)"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="(Maggie Wilson) - Activities across Design Cycle"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="(Emily B.) - Collaboration Work & Deliverables by Discipline"
                    url="#"
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