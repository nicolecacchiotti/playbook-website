'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userNeedsAssumptionsArt from '@/../assets/Card Art/UserNeeds&Assumptions.svg';
import PlayAuthors, { userNeedsAssumptionsAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function UserNeedsAssumptionsPage() {
  const title = "User Needs & Assumptions";
  const section = "Immersion";
  const audioUrl = "/audio/User Needs & Assumptions Workshop.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={userNeedsAssumptionsAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            The practice of documenting and aligning on user needs to be solved by a digital experience.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={userNeedsAssumptionsArt} 
            title="User Needs & Assumptions"
            labels={['Research', 'UX']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In order to create user-centered digital experiences, it is important to identify early the user needs those experiences are expected to meet. A User Needs and Assumptions workshop allows you to surface, evaluate, and prioritize those needs to ensure you are designing to solve real problems for users. This workshop includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                <li>Identifying key user needs your product or service should address</li>
                <li>Understand the clients' perspective and current understanding on their users and target audience priorities</li>
                <li>Identifying open questions and uncertainty related to "who" users are and their needs</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">At the beginning of a project</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Running this play early ensures that you're designing for the right set of user needs and have time to answer open questions about users.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">When the team and/or client are making assumptions about users' needs or relying on "guesses"</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                You might encounter disagreements about what user needs you're prioritizing and designing for. Running this play will allow you to facilitate an informed conversation between stakeholders and gain alignment with the client on the priority of user needs.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Before you run user research</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Running this play will help you get an idea of who your target audience is and a hypothesized set of user needs and attributes to explore with users.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Identify target audience</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                To prepare for the workshop, you will first need to create an initial target audience that you will use as a jumping off point during the session with your client stakeholders. It could be as simple as general users (e.g., dog owners for an app about pets). It could be more specific to a business goal (lapsed users, engaged users, new segment to target), or it could be based on existing segments from the client.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "Who would be the primary audience for a smart home automation app?" follow-up with "Can you take the top three and breakdown their unique needs and pain points"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">Document target audience data</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Gather known data about the audience from:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                <li>Client (ie: interview, data analytics etc)</li>
                <li>Past research</li>
                <li>Third-party tools like Forrester</li>
                <li>Competitive and analogous landscape</li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Be creative and expansive in sourcing this information!
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Create invitee list</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Identify who on the client side is important to include in business/feature prioritizations, well-versed in prior user research, and works closely with end-users. An example of this stakeholder might be a Project Manager, Product Owner, or a customer domain expert. Make sure to work with your main client stakeholder to include the right people in the workshop.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Schedule time in advance</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Schedule a meeting to run the workshop (recommended 1.5 hours minimum) and include an agenda/description in the meeting invite.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Prepare your collaboration materials in advance</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Create a shared space (digital or in-person) for people to share their thoughts and feedback during the workshop. Make sure the client will be able to access any virtual tools ahead of time.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">1. Introductions</h2>
                    <span className="text-gray-500 text-sm">~10 min</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Get started by introducing yourself and all in attendance.</li>
                    <li>Introduce idea of a user needs workshop: to identify key needs of target audience.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">2. Review current user insights</h2>
                    <span className="text-gray-500 text-sm">~20 min</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Introduce known information about users, collected from client, WT, or third-party research.</li>
                    <li>Add insights as sticky notes to virtual or in-person white board.</li>
                    <li>"Parking lot" any additions that are not backed up in data — we'll review those next.</li>
                    <li>Consider sorting: demographic information, attitudes, habits, needs.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">3. Add questions and assumptions</h2>
                    <span className="text-gray-500 text-sm">~10 min</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Invite participants to add additional Questions they have about users.</li>
                    <li>Invite participants to add any "hunches" they have about users.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">4. Prioritize needs and questions</h2>
                    <span className="text-gray-500 text-sm">~20 min</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Use a prioritization activity to identify which needs the team wants to incorporate into the product design and which questions and assumptions need to be further explored with research. Options include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Dot voting: participants add dots or votes to stickies they think are most important to meet for users or explore with further research.</li>
                    <li>Spectrum voting: participants place insights on a spectrum from least to most Important.</li>
                    <li>Elimination voting: participants collaboratively eliminate insights in groups of 3-5 at a time in successive rounds of deliberation until a core set of about 10 insights remain.</li>
                  </ul>
                </div>

                <BlueCard 
                  header="When You're Done"
                  body=""
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-check w-6 h-6 text-blue-700 mb-2" aria-hidden="true">
                      <path d="M11 18H3"></path>
                      <path d="m15 18 2 2 4-4"></path>
                      <path d="M16 12H3"></path>
                      <path d="M16 6H3"></path>
                    </svg>
                  }
                >
                  <div style={{fontSize: '14px'}}>
                    <p className="mb-4 text-blue-card-text font-semibold">Teams should feel confident in answering:</p>
                    <ul className="list-disc ml-6 space-y-2 text-blue-card-text mb-6">
                      <li>What needs should we be designing for? User needs the team is confident about and wants to address becomes part of our user experience heuristics for design — what we want this design to solve for users.</li>
                      <li>What do we want to further explore with users? Questions and assumptions we want to address become opportunities for future user research. Some of these may need to be urgently addressed before design while others can be explored later in the project.</li>
                    </ul>
                    
                    <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Define as the user needs heuristics</h3>
                    <p className="text-blue-card-text">
                      We recommend presenting this back as a set of "user needs heuristics," "design pillars," or "user experience outcomes". These can be referenced throughout the project as goals for a particular design/choice and research objective measures for the product.
                    </p>
                  </div>
                </BlueCard>
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Common Pitfalls</h2>
              
              <div className="space-y-6 mb-10">
                <RedCard 
                  header="Too Much Stock in Proto-Personas"
                  body="If the focus turns to things outside of user needs (such as demographics) you may introduce inherent bias into the project."
                />
                
                <RedCard 
                  header="Not Evolving Over Time"
                  body="User needs evolve over time and should be continually evaluated through user research."
                />
                
                <RedCard 
                  header="Over Valuing Initial Concepts"
                  body="At the end of this play you will only have a hypothesis about the user needs and who the user is. User research is needed and always recommended to evaluate this hypothesis."
                />
              </div>

              <h2 className="text-xl font-semibold mb-6 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard 
                  title="What We Know and Need To Know (Mural)" 
                  href="#" 
                />
                <ResourceCard 
                  title="Signature Aviation (Keynote)" 
                  href="#" 
                />
                <ResourceCard 
                  title="Edward Jones (Keynote)" 
                  href="#" 
                />
                <ResourceCard 
                  title="Electrify America (Mural)" 
                  href="#" 
                />
                <ResourceCard 
                  title="McGraw Hill - Audience Assumptions (Mural)" 
                  href="#" 
                />
                <ResourceCard 
                  title="McGraw Hill - What We Don't Know (FIGJAM)" 
                  href="#" 
                />
                <ResourceCard 
                  title="Workshop Tactics" 
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