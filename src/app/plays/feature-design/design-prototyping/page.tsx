'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designPrototypingArt from '@/../assets/Card Art/DesignPrototyping.svg';
import PlayAuthors, { designPrototypingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DesignPrototypingPage() {
  const title = "Design Prototyping";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors authors={designPrototypingAuthors} />
          
          <p className="text-gray-700 leading-relaxed">
            Prototyping is an essential step in the product design process that involves creating a representation of a design concept. It is used to test and validate the design concept and flows before moving to the final stage of production.
          </p>
          
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designPrototypingArt} 
            title="Design Prototyping"
            labels={['Design', 'Prototyping']}
          />

          <SecondaryTabNav
            tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />

          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Why</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Laying out and connecting flows and interactions allows you to get valuable feedback on how users will interact with your designs. It also serves as a visual way to communicate your product to the client or your internal team.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>You want to check your flow and product strategy</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Even just connecting screens into a full flow will reveal if it is intuitive to users and whether it's clear what action needs to be taken. It also helps to connect content design throughout, and get the client excited about the designs, flow, and product as a whole.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>The team needs to check for feasibility and scope</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Sharing early strategy and flows with developers and other internal team members can give insight into the product vision and help get buy-in and feedback.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>You want to specify interactions, animations and transitions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Be as specific as possible when mapping out flows and interactions. Doing so will not only help the developers to understand the product vision, but also communicate what you are trying to build to the client and other stakeholders.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="mt-8" id="planning-prep-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Feature planning</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Meet with members of your team to discuss the feature or screens that need to be designed and prototyped to ideate and collaborate on how it could work.</li>
                </ul>
              </div>

              <div className="mb-8">
                <BlueCard
                  header="AI Prompt Idea"
                  body="I'm making an animation of a user going through a checkout flow, what screens should I consider animating"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Wireframing (or hi-fi design)</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Map out the feature you intend to design, while focusing only on the flow between screens. Pay attention to every state of the golden path and make sure everything is fully vetted. Make sure your screens are the right size to fit the ideal device mock-up for your prototype.</li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Choose the right prototyping tool</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Use Figma for simple and straight forward prototypes, Origami if you need access to device hardware, and Principle for really rich, more complex prototypes. The use of code may be needed if live data or getting a feel for platform capabilities is important. Keep in mind the goals of the project, the audience, scope and effort of what's needed.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Create connections</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  For the most common type of prototype, start with Figma. Establish a starting point and connect screen to screen for each flow. Make the experience as realistic as possible by adding every state (keyboard, loading, search, etc.) to fully see the user experience and time it takes for each feature and flow.
                </p>
              </div>

              <div className="mb-8">
                <BlueCard
                  header="AI Prompt Idea"
                  body="I'm designing a voice automated home assistant that helps me schedule smart home routines, which interactions should I consider animating for a user flow"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Create interactions</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Specify the interactions and animations between each screen to guide development and ensure specific feedback. Pay attention to the way states transition in, animate, how it's interacted with and the time it takes between each state and screen.
                </p>
              </div>

              <div className="mb-8">
                <BlueCard
                  header="AI Prompt Idea"
                  body="What are some ideas for creative error handling for my voice assistant that have a friendly tone"
                  icon={
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                />
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">4. Review and adjust</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Make sure to choose the correct device and model, then preview your prototype to see any pitfalls or holes in the experience. Do this for all flows and connect them together to envision the whole experience of the product.
                </p>
              </div>

              <BlueCard
                header="When You're Done"
                body={
                  <div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2" style={{color: '#1e40af', fontSize: '14px'}}>Teams should feel confident in answering:</h4>
                      <ul className="ml-6 space-y-1" style={{fontSize: '14px'}}>
                        <li>• Does this feature align with the clients business goals?</li>
                        <li>• Does this feature ensure a positive and intuitive user experience?</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2" style={{color: '#1e40af', fontSize: '14px'}}>Share your findings with client</h4>
                      <p style={{fontSize: '14px'}}>
                        Share with all of the needed stakeholders and ensure the correct view and edit access options. Make sure all of the hotspots and connections work, and add any needed context to the prototype description in case members need to review the prototype without guidance.
                      </p>
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
                    header="Overly Complicated Interactions"
                    body="Don't make the prototype too complicated with transitions and animations. This can become confusing to the user and adds possible unnecessary scope to development."
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="VA Lotto"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Pepsi Halftime Show"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Edward Jones"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Field Guide to Rapid Prototyping & Testing"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Should You Prototype?"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Prototyping in Figma"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="An Intro to Prototyping"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Ways to Improve Your Prototypes"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Principle Tutorials"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Origami Tutorials"
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