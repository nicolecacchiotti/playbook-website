'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import competitiveOpportunityArt from '@/../assets/Card Art/CompetitiveOpportunity.svg';
import PlayAuthors, { competitiveOpportunityAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function CompetitiveOpportunityPage() {
  const title = "Competitive Opportunity";
  const section = "Immersion";
  const audioUrl = "/audio/Competitive Opportunity.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={competitiveOpportunityAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            The process in which we can gain a deep understanding of the conventions set by direct competitors and analogous brands in parallel problem spaces to help our clients meet and ideally exceed user expectations.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={competitiveOpportunityArt} 
            title="Competitive Opportunity"
            labels={['Research', 'Strategy']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our expectations are shaped by our experiences. If we can split a bill at a restaurant, we naturally expect to be able to split a bill on Airbnb or Uber. This is the anchoring effect in action and why competitive research is so important. User expectations are often shaped by external offerings.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                In order for our clients to meet and ideally exceed customer expectations, we have to have a deep understanding of the conventions set by direct competitors and analogous brands in parallel problem spaces.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Pre-Kickoff</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Get a primer on category dynamics to help inform kickoff material, discussion
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Research Phase</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A competitive review can help establish the baseline experience or service offering to inform design targets, user journeys and potential solutions
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Design Phase</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A competitive audit can uncover specific design and experience solutions like a guest ordering flow or how competitors structure the information architecture, navigation
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Establish Outcomes</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Establish or align on product outcomes to determine how we assess certain features and flows.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "Can you create some outcomes around a new loyalty feature in an apps" follow-up with "Can you create a user flow for interacting with a new loyalty feature in an app"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">Establish Approach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Establish methodology and approach to research (e.g., how are you sourcing content / identifying competitors? what info will be included?)
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Norm</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Norm on roles and responsibilities; establish milestones
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Define format</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Identify and align on format (e.g., Keynote, Figjam, etc.)
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Define Competitors</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Identify competitors; analogous brands and parallel industries to review
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "Can you list the apps with the best loyalty programs?" "What are industry benchmarks for loyalty retention in an app"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">Define Features</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Conduct or leverage existing customer journey to inform the high-value features, differentiators or unmet needs to include / focus on
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">1. Understand the playing field</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Identify all relevant features and offerings in the category before you go too deep. That way you don't miss anything and have to backtrack. I like to create a simplistic mind map to identify and organize features and feature sets in the category
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">2. Orienting around customer needs</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Use the customer journey to prioritize features included in the review. Journey stages can also make for a nice organizational tool to competitive reviews
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">3. Deep dive</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Go deep on each brand to capture screenshots, content, and simple user flows of features and offerings. Use this research to build out one-pagers on brand offerings or feature spotlights that document best in category examples or opportunity areas
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">4. Provide perspective</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Strive to create category summaries like feature heat maps to visualize the playing field. Positioning maps, user journeys and mental maps of features are also helpful perspectives for clients and team members alike
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">5. Insights + takeaways</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Document insights and takeaways at the feature level as well as holistic category observations. This content can serve as a strong introduction, conclusion, and even support findings throughout the competitive review.
                  </p>
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
                      <li>Market fit: What are the core services offered, emerging trends, and whitespace opportunities we can take advantage of?</li>
                      <li>Who are the innovators, entrants and established leaders we can learn from?</li>
                      <li>How does the client's offering stack up to the competition? Create a shared understanding of category dynamics and market fit with client and project team.</li>
                    </ul>
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
                  header="Not Looking Beyond the Category"
                  body="Analogous or parallel industries can have relevant solutions we can learn from and leverage. Users are not captive to a single industry, so our research should be bound by the confines of our client's category. Look beyond to find unique and provocative solutions. For example, a well-designed onboarding flow from a fitness app could still provide great takeaways for the onboarding flow of an airline app, or vice versa."
                />
              </div>

              <h2 className="text-xl font-semibold mb-6 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard 
                  title="Mastercard Trendsetter Report" 
                  href="#" 
                />
                <ResourceCard 
                  title="Electrify America | PW: Teamwork2022!" 
                  href="#" 
                />
                <ResourceCard 
                  title="THRIVE slides 17-27" 
                  href="#" 
                />
                <ResourceCard 
                  title="Research Deliverable Examples" 
                  href="#" 
                />
                <ResourceCard 
                  title="G2" 
                  href="#" 
                />
                <ResourceCard 
                  title="Capterra" 
                  href="#" 
                />
                <ResourceCard 
                  title="TechCrunch" 
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