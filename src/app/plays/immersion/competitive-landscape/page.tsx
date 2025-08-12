"use client";

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { competitiveLandscapeAuthors } from '@/components/PlayAuthors';
import competitiveLandscapeArt from '@/../assets/Card Art/CompetitiveLandscape.svg';

export default function CompetitiveLandscapePage() {
  const title = "Competitive Landscape";
  const section = "Immersion";
  const audioUrl = "/audio/Competitive_Landscape.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={competitiveLandscapeAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>A competitive landscape is a collection and comparison of competitors, often with a glance over other industries for insight and inspiration. It provides a broader perspective and helps identify new ideas and trends to inform your strategic benchmark of user expectations within the space.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={competitiveLandscapeArt} 
            title="Competitive Landscape"
            labels={['Research', 'Analysis']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-gray-700 mb-8 text-base leading-relaxed">
                Identifying, exploring, and evaluating competitor experiences helps us to evaluate our client's strengths, weaknesses, opportunities, and threats (also known as SWOT analysis) and understand user expectations and best practices for specific industries. Through the examination of both direct and indirect competitors, as well as industry leaders, we can provide more informed recommendations, gain a new outlook, and pinpoint genuinely innovative ideas and solutions.
              </p>
              
              <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>We're redesigning a product</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We expand our domain of knowledge through UX research and exploration to collect as much relevant information as possible early on. When creating concepts for new information architecture and visual treatments, it's helpful to understand the trends and patterns that similar services are using. Depending on how much information we have about the project and client needs, we can begin a competitive landscape as early as internal kickoff.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>We're ideating a specific feature</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A competitive landscape can also be useful when approaching designs at the feature level, particularly if the feature is mission critical, net new, or something we're looking to innovate on. In this case your research can be much more tactical and specific to the feature you're designing.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>As an ongoing practice</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A lightweight internal-only version can be helpful as an ongoing part of your design process. It may not need to be formalized as a client deliverable if it doesn't make sense for your project. This might be as simple as grabbing screenshots that the team can revisit for inspiration.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>As support for decision making</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    If you find yourself in a situation in which you don't have the resources to conduct user research, a competitive landscape into specific features can help support design decisions when communicating with clients. If you have an existing competitive landscape, you can revisit previous insights and pull in new examples to facilitate discussions with clients.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Identify your goals</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    First, you should identify what you aim to learn from your competitive analysis. This will determine if you will conduct a high-level analysis or focus on specific features. Depending on the DRI and need, you may want to focus your efforts on a feature-gap analysis, an IA & visual design comparison, or some combination of the two.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Establish your workspace</h3>
                  <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Once you know what your goals are, set up a space to collect all the resources and information relevant to your landscape. This can be anything from a spreadsheet, to a FigJam board, to a page in your project Figma file.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>When you are examining high level information architecture, navigation, UI, etc., using Figma and FigJam with screenshots can help you keep track of your findings visually.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>A spreadsheet can be ideal in cases where you're comparing smaller details like feature offerings across a wide array of competitors.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-content">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Define the competition</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Once the team has established a representative list of all features to be completed during the engagement, it's time to:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Estimate the rough effort required to complete each feature based on your team's definition of "done."</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Structure your work cadence according to what can be accomplished during each sprint (which will often be a "feature" but not in every case).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Schedule your work by priority while considering cross-team dependencies (e.g., the front end team has identified complexities which require a certain feature to be addressed first) and specific client requests (e.g., a client stakeholder with a specific feature request is only available during a portion of your engagement and is eager to review progress).</span>
                    </li>
                  </ul>
                  <BlueCard 
                    header="AI Prompt Idea" 
                    body='"List the top travel and leisure apps" "What brands are the most successful in decreasing call center volume"'
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">2. Identify key features and flows</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Begin by identifying the most significant flows and features within your client's product. Some examples include:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Sign up and login</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Purchase of a product</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Subscription to a service</span>
                    </li>
                  </ul>
                  <BlueCard 
                    header="AI Prompt Idea" 
                    body='"Describe a travel booking user flow" "Can you give me a prioritized list of applications of ai to solve these user pain points to decrease call center volume"'
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">3. Feature-gap analysis</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    When conducting a feature-gap analysis, the next step is to go through each competitor and note if their product:
                  </p>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Has the feature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Does not have the feature</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Has the feature but with limitations</span>
                    </li>
                  </ul>
                  <BlueCard 
                    header="AI Prompt Idea" 
                    body='"Can you do a feature-gap analysis on the apps that you listed above for the top travel and leisure apps?"'
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">4. IA & visual design comparison</h3>
                  <ul className="space-y-4 text-gray-700 text-base leading-relaxed mb-6">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>If you are conducting a Visual Design Comparison, focus on what's relevant to your design questions or challenges. Add screenshots, notes and even arrows to indicate interactions as you go through each competitor.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <div>
                        <span>Assess if the client's highest priority features and information are easier to find in their product or a competitor's. Some examples could be:</span>
                        <ol className="mt-3 ml-6 space-y-2">
                          <li className="text-gray-700">i. Navigation: are core products or offerings featured prominently in comparison to competitors?</li>
                          <li className="text-gray-700">ii. Verbiage: what language is being used for primary CTAs and similar important info?</li>
                          <li className="text-gray-700">iii. Hierarchy: are there opportunities to direct users attention through the use of typography and color?</li>
                        </ol>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">5. Analysis</h3>
                  <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Use the data you've collected in order to name the strengths and weaknesses of your competitor's and your client's product as well. The important information lies in the details of what worked and what didn't across competitors.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-1">•</span>
                      <span>Determine areas of opportunity and define actionable recommendations. What are the biggest strengths of competing designs? What trends arise? Are they good or bad? Did any competitor offer unique solutions to a common problem?</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-card rounded-xl p-6 mt-8">
                  <div className="flex flex-col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-check w-6 h-6 text-blue-700 mb-2" aria-hidden="true">
                      <path d="M11 18H3"></path>
                      <path d="m15 18 2 2 4-4"></path>
                      <path d="M16 12H3"></path>
                      <path d="M16 6H3"></path>
                    </svg>
                    <h3 className="font-semibold mb-2 text-blue-card-header" style={{fontSize: '14px'}}>When You're Done</h3>
                    <p className="mb-2 text-blue-card-text" style={{fontSize: '14px'}}></p>
                    <div style={{fontSize: '14px'}}>
                      <p className="mb-4 text-blue-card-text font-semibold">Teams should feel confident in answering:</p>
                      <ul className="list-disc ml-6 space-y-2 text-blue-card-text">
                        <li>What are the competitors doing in the space and how does the client measure up?</li>
                        <li>What minimum features or improvements do we recommend to keep up with the competition and what are the opportunities to innovate?</li>
                        <li>What innovative approaches have been successful in other industries?</li>
                      </ul>
                    </div>
                    
                    <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Share your findings with client</h3>
                    <p className="text-blue-card-text" style={{fontSize: '14px'}}>
                      In addition to creating a sharable deliverable, this type of information is valuable to walk through with clients so they can ask questions. Plan to spend about 45 minutes sharing your findings and have a list of actionable recommendations to establish next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-6 text-foreground">Common Pitfalls</h2>
              
              <RedCard 
                header="Information Overload"
                body="After compiling a wide array of examples and findings, it's important to communicate the most important takeaways clearly and concisely. When presenting to the client, it's helpful to group your findings into themes. Choose one or two strong examples for each theme that align with your recommendations."
              />
              
              <RedCard 
                header="Not a Design or Content Audit"
                body="This is an assessment of the market and where our client stands within it. We are comparing, not simply critiquing their current product. The output here would be larger feature ideas, architecture changes, refactoring, etc. Our audits will typically identify smaller and near-term improvements."
              />
              
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Resources</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Templates</h3>
                    <div className="space-y-3">
                      <ResourceCard 
                        title="WT Compiled Example Templates"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Competitive Landscape Findings Deck (Keynote)"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Competitive Analysis Figjam (Figma Community)"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Competitive Analysis Template (Figma Community)"
                        href="https://example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Standout Examples</h3>
                    <div className="space-y-3">
                      <ResourceCard 
                        title="WT Compiled Example Templates"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Scooter's Coffee: Competitive Landscape"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Edward Jones P40X: Insights Review"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Mastercard: Trendsetter Outbrief"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="L20 Everest: Account Home Competitive Review & Analysis"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Zumba Competitive Landscape"
                        href="https://example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">WillowTree Resources</h3>
                    <div className="space-y-3">
                      <ResourceCard 
                        title="Compiling Your Findings: Scooter's Example"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Conceptual Landscape Research - EJ RCT"
                        href="https://example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Third Party Resources</h3>
                    <div className="space-y-3">
                      <ResourceCard 
                        title="Competitive Usability Evaluations: Learning from Your Competition - Nielsen Norman Group"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Tables Figma/FigJam Widget to enable spreadsheets"
                        href="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 