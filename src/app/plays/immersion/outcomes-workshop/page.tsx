'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import outcomesWorkshopArt from '@/../assets/Card Art/OutcomesWorkshop.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import PlayAuthors, { outcomesWorkshopAuthors } from '@/components/PlayAuthors';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function OutcomesWorkshopPage() {
  const title = "Outcomes Workshop";
  const section = "Immersion";
  const audioUrl = "/audio/Outcomes Workshop.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={outcomesWorkshopAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            An outcomes workshop is a collaborative activity to align the client and WillowTree on KPIs linked to business and user goals and how we will measure them. Defining outcomes helps focus energy, resources, and attention on what matters most to the business and to users.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={outcomesWorkshopArt} 
            title="Outcomes Workshop"
            labels={['Workshop', 'Strategy']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Defining outcomes helps focus energy, resources, and attention on what matters most to the business and to users. For clients, defining outcomes ensures we're providing the right solutions. For Willow Tree, it ensures we know what we're trying to achieve and provides a framework to use for prioritization and product analytics. From a product perspective, an outcomes workshop answers the question "What are the customer behaviors that drive business results and for users?" and "How does the product help me?".
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>There's an SOW requirement</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Some SOWs require an Outcomes Workshop. If a full workshop isn't a good fit, consider a lightweight option (details below).
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>The team is starting on new features</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                An outcomes workshop can help you gain clarity and assist with prioritization when starting work on major new features and flows.
              </p>
              <BlueCard 
                header="AI Prompt Idea" 
                body='"Can you explain how to structure an outcomes statement for a new product feature"'
              />
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>You need to jump-start work</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Stalled work can be re-energized or calibrated with an outcomes workshop.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Scheduling</h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Identify representative stakeholders from all relevant business units</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Schedule your workshop. Plan for a minimum of one hour for a group of three to five stakeholders. Ideally you will schedule this workshop to happen within the first week or two after external kickoff.</span>
                </li>
              </ul>
              
              <BlueCard 
                header="" 
                body=""
              >
                <p className="text-blue-card-text" style={{fontSize: '14px'}}>
                  If we know the client well or can't get all stakeholders together, consider a lightweight workshop such as a value proposition worksheet or a desired outcomes template.
                </p>
              </BlueCard>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Content</h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Gather any pre-defined business goals the client may have. Craft your workshop based on these goals.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Source a previous WT project and identify an example feature with an outcome that you will use as your example during the workshop intro. It's helpful if this example relates in some way to the client's project and objectives. See the Resources section below for standout examples and tips for choosing.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Identify your workshop format. If business goals are not clear, we recommend starting with questions that encourage stakeholders to align on business goals and product outcomes. If business goals are clear, one helpful framework to dive deeper is to align goals to each letter in Google's HEART framework for improved user experience (Happiness, Engagement, Adoption, Retention, and Task Success).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Create a cheat sheet of features to help spark ideas in case the workshop stalls.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Copy one of the workshop templates below and update as needed to fit your client needs and/or your style. There is no need to create from scratch and "reinvent the wheel" here.</span>
                </li>
              </ul>
              
              <BlueCard 
                header="AI Prompt Idea" 
                body='"/////" (this prompt will provide a outlined agenda for your workshop)'
              />
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Outcomes deck</h3>
              <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                <li className="flex items-start">
                  <span className="mr-3 mt-1">•</span>
                  <span>Prepare your post-workshop deck prior to running the workshop. Doing so will shorten the turnaround time of providing the synthesis deck to the client.</span>
                </li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">1. Introduction to workshop</h3>
                    <span className="text-gray-500 text-sm">~5 min</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Get started by introducing yourself and all in attendance.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Discuss how you'll spend the time together, define the purpose and goal of the workshop, and explain to the client what outcomes are and how they are used to measure success. If working on a web or app delivery project, it's helpful to explain outcomes-driven roadmaps and vertical development as well. Example slides can be found in the Resources section below.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">2. Ice breaker</h3>
                    <span className="text-gray-500 text-sm">~5 min</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Spend a few minutes to ensure all know how to use the chosen tool. A quick walkthrough of the tool or method is a great place to start, but an ice breaker activity is a simple way to address any questions while also having some fun.
                  </p>
                  
                  <BlueCard 
                    header="AI Prompt Idea" 
                    body='"Can you give me a list of ice breakers for a rigid finance client?" "Can you give me a list of ice breakers for a travel and leisure client?"'
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">3. Discuss example</h3>
                    <span className="text-gray-500 text-sm">~5 min</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Using your example feature identified in "Planning & Prep," walk the client through this example and discuss the type of feedback you're looking for.
                  </p>
                  
                  <BlueCard 
                    header="" 
                    body="Visit the resources section for examples."
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">4. Individual ideation</h3>
                    <span className="text-gray-500 text-sm">~15 min</span>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Have one outcome per sticky per user type (e.g. business units).
                  </p>
                  
                  <BlueCard 
                    header="" 
                    body="Considering playing some music to lighten the mood and keep things casual. After a few minutes ask the group if anyone has any questions you can answer."
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">5. Discuss & synthesize</h3>
                    <span className="text-gray-500 text-sm">~15 min</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-4">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Talk through each sticky. Let everyone get all their thoughts out on paper but be prepared to support the client to reframe into outcomes during discussion time.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Prioritize outcomes using dot-voting. This is optional if time allows and/or outcomes haven't been narrowed down enough. Consider limiting each participant to a maximum amount of votes.</span>
                    </li>
                  </ul>
                  
                  <BlueCard 
                    header="" 
                    body="One size does not fit all so don't feel like you have to distill everything on the spot, get through what you can and use your follow up materials to put a bow on anything remaining."
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">6. Wrap up</h3>
                    <span className="text-gray-500 text-sm">~2 min</span>
                  </div>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Thank everyone for their time, recap the goal of the workshop, and prepare the group for what next steps will be.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Craft an outcomes deck after to share back with the client.</span>
                    </li>
                  </ul>
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
                  <ul className="list-disc ml-6 space-y-2 text-blue-card-text">
                    <li>What are the client's business goals?</li>
                    <li>What are the client's top priorities?</li>
                    <li>How does the client define success for this project?</li>
                  </ul>
                </div>
                
                <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Share your findings with client</h3>
                <p className="text-blue-card-text" style={{fontSize: '14px'}}>
                  Finalize any placeholder content in the post-workshop deck you created in the planning phase and share with the client so everyone is aligned on the output from the workshop. The method of sharing may depend on the client and engagement. For example, sharing could be incorporated into the first design review or sent out via email to key stakeholders.
                </p>
              </BlueCard>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <div className="space-y-4 mb-8">
                <RedCard 
                  header="Certain key stakeholders are unable or unwilling to attend"
                  body="Have WT representatives role-play as key stakeholders. You would need to understand the business well enough to do this."
                />
                
                <RedCard 
                  header="Complicated dynamics between workshop attendees"
                  body="Conduct separate workshops. One-on-one sessions, or provide a 'homework' or an outcomes worksheet."
                />
                
                <RedCard 
                  header="Business goals are unclear"
                  body="Research the business and come with a few possibilities in advance. Run them by a primary client stakeholder to get approval if possible, and then include them as the outcomes workshop so that all are aligned."
                />
                
                <RedCard 
                  header="Beware of workshop creep"
                  body="Outcomes workshops can quickly turn into feature ideation. Create a parking lot to move these types of stickies to discuss in a separate meeting."
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard 
                  title="Business Goals to Product Outcomes"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Electrify America Business Solutions Outcomes"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Papa Murphy's Outcomes Workshop Intro Deck"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Snackter's Coffee Business Goals Workshop"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Bonsai Team GROW Outcomes Workshop"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="How to run an Outcomes Workshop"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="North Star Playbook"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Workshop Tactics"
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