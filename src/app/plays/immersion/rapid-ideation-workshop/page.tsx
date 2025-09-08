'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import rapidIdeationWorkshopArt from '@/../assets/Card Art/RapidIdeationWorkshop.svg';
import PlayAuthors, { rapidIdeationWorkshopAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function RapidIdeationWorkshopPage() {
  const title = "Rapid Ideation Workshop";
  const section = "Immersion";
  const audioUrl = "/audio/Rapid Ideation Workshop.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={rapidIdeationWorkshopAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            A rapid ideation workshop is a collaborative exercise used to foster innovative product ideas and solutions to provide strategic direction and/or alignment.
          </p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={rapidIdeationWorkshopArt} 
              title="Rapid Ideation Workshop"
              labels={['Workshop', 'Ideation']}
            />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This play helps the team align on a vision for a section of work or feature before beginning the design or as needed during the design process.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                An ideation workshop provides a focused session where folks can share their ideas and expectations for the work as well as how they envision solving the problem or problems at hand. This play offers the team and client plenty of time to discuss and work through approaches, concerns, and anything else that's important to consider for the work. It can help get important information and expectations out of participants' heads and onto the page sooner rather than later, allowing time to consider wants and needs from the very beginning.
              </p>
              
              <BlueCard 
                header="" 
                body="There may be times when it's appropriate to bring a recommendation to the table if the team feels strongly aligned internally on a path forward. Be ready, however, to remix your ideas during the workshop."
              />
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Prior to starting on design work</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This ensures the session shapes the approach and execution of the work.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>When you're having trouble progressing on design work</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This may be due to misaligned expectations with the client on the design approach, scope, etc. This play can help reset and align expectations.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Definition</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Using a workshop template/previous workshop as a base file, define the objective, outcome, and problem you're focused on solving for the workshop to help the team understand:
              </p>
              <ul className="space-y-2 text-gray-700 text-base leading-relaxed mb-6 ml-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>What the work is striving to do.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>What you'll all get out of the workshop.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>What problem space you'll be designing for.</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Gather context</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Gather relevant context that participants will need to understand the problem space and to come up with approaches and solutions. These can be known constraints, requirements, business goals and objectives, industry standards and benchmarks, or any term that helps get participants' brains on the same wavelength about the problem space.
              </p>
              
              <BlueCard 
                header="AI Prompt Idea" 
                body='"What are industry standards for time to complete a checkout flow on an app?" "what are some possible business goals for optimizing a checkout flow"'
              />
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Gather inspiration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gather inspiration and research to help everyone understand the problem space and consider potential approaches and solutions. This can be a review of competitors or other experiences that have solved similar problems, best practices, expertise from valued sources, past user research and insights. The DRI can execute this inspiration gathering, and/or this can be homework prior to the workshop for participants. They can then share things that inspired them with the group (this adds time to the session but potentially a lot of value too).
              </p>
              
              <BlueCard 
                header="AI Prompt Idea" 
                body='"Can you list apps that have the most user friendly checkout designs" "what are the most innovative travel and leisure apps"'
              />
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Choose the activity</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Prepare the workshop activity that the team will do together. The activity you choose will depend on the problem you're trying to solve. Crazy 8s is a great option for getting participants involved in ideating on solutions and exploring the problem space from different perspectives and roles. Reference past workshops for ideas for activities. (Prep steps 1-3 should give participants the information and inspiration they need to do the activity successfully). Enlist the help of any other teammates for running the activity, such as time keeping or sticky note sorting.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Determine workshop length and participants</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Align on the participant list and schedule the workshop – at least 1 hour, but this depends on the work you're doing. Assess if you need extra time to review context, inspiration, and ideas.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">1. Welcome</h3>
                    <span className="text-gray-500 text-sm">~5 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The DRI will welcome the participants and share the objective, outcome, and problem and explain activity that you'll be doing together.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">2. Icebreaker</h3>
                    <span className="text-gray-500 text-sm">~10 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Consider opening your workshop with an icebreaker. This will help in creating an environment of psychological safety.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">3. Review context</h3>
                    <span className="text-gray-500 text-sm">~5-15 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To prime participants' brains, the DRI will lead the group through reviewing the context. Encourage folks to raise any questions or concerns and ensure they have the context needed to successfully solve the problem you're tackling together.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">4. Review inspiration</h3>
                    <span className="text-gray-500 text-sm">~30 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The DRI will lead the team reviewing the inspiration, calling out key insights, ideas, and considerations. Encourage discussion during this part and get everyone feeling excited about the possibilities of the problem space!
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">5. Run the activity</h3>
                    <span className="text-gray-500 text-sm">~15-30 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The DRI will re-explain the activity and execute the activity. This may look like individual ideation or collabing as a group. Music can be a fun addition as folks are ideating and working through solutions.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">6. Run the discussion</h3>
                    <span className="text-gray-500 text-sm">~15 min</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    The DRI will facilitate a discussion of the ideas. This is an important part of the workshop since you're able to get folks to explain their perspectives and ideas in real time. Tip: the DRI can help gather consensus on top solutions and ideas, which will help the team understand the most important ideas to move forward with.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">7. Wrap up</h3>
                    <span className="text-gray-500 text-sm">~2 min</span>
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The DRI reiterates the outcomes of the workshop and shares any key next steps with the group. They should thank the participants for taking the time to help shape the product!
                  </p>
                </div>
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
                    <li>What expectations do key stakeholders have about the design solution we're working towards?</li>
                    <li>What are the top solutions our team has identified for solving this problem?</li>
                  </ul>
                  
                  <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Present your findings to the client</h3>
                  <ul className="list-disc ml-6 space-y-2 text-blue-card-text">
                    <li>The output of the workshop could be as simple as sharing a link to the workshop space/board with markers and annotations indicating the top findings.</li>
                    <li>A formal share-out of workshop findings may not be needed since this workshop is meant to be a powerful tool for enabling design work, not an end itself. The top solutions could be turned into designs and workshop findings shared in tandem with the designs during a review or regroup with the workshop participants.</li>
                  </ul>
                </div>
              </BlueCard>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Common Pitfalls</h3>
              <div className="space-y-4 mb-8">
                <RedCard 
                  header="Lack of Focus"
                  body="Not focusing on the right problem. This workshop is valuable when time has been taken to assess the problem you're trying to solve and to choose an activity that suits it."
                />
                
                <RedCard 
                  header="Lack of Content"
                  body="Not providing enough context or inspiration to help participants solve the right problem. Ensure you're thinking through the right inputs and priming participants with the right information to make the activity effective."
                />
                
                <RedCard 
                  header="Too Much Emphasis on Quality"
                  body="Participants are distracted by not being 'good' at design or drawing. Participants should be encouraged to share their ideas in whatever means they can. The DRI should remind everyone that activities like Crazy 8s aren't an art contest and that their unique non-design perspectives during the problem solving phase should be seen as a superpower, not a hindrance. Consider providing an option for users who don't want to draw, allowing them to write out the idea for discussion."
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard 
                  title="Crazy 8s"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Empathy Map"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="How Might We"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="EJ Match"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Progressive Level20"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Special Olympics Feature Workshop (Mural Link)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="PipDeck Workshops"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="How to Run an Effective Ideation Workshop (UXPlanet)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="5 Exercises That Break Down Barriers (IDEO icebreakers)"
                  href="https://example.com"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 