'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import buildReviewsArt from '@/../assets/Card Art/BuildReviews.svg';
import PlayAuthors, { buildReviewsAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function BuildReviewsPage() {
  const title = "Build Reviews";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={buildReviewsAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            Build reviews are a normalized cadence of internal reviews between design and development throughout the project to ensure design quality in finished software.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={buildReviewsArt} 
            title="Build Reviews"
            labels={['Development', 'Review']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                This is a critical step in the collaboration between design and development. This step ensures that the vision of the product is executed in a way that meets the expectations of the designer, developer and client.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Internal design reviews</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Establish an internal review process early. Aligning with engineers early on in the process is key to making sure that the ideas you have are possible from an execution standpoint and will mitigate any surprises later on in the process.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During active development</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Collaboration is key in this step, making yourself available to collaborate while the engineering team is developing the product ensures that any need changes are identified as early as possible to mitigate as much rework as possible.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Internal dev demos</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This is typically the final checkpoint in making sure that the execution matches the requirements and expectations before the client sees the product. If the steps above were actioned properly this step should be smooth and not full of surprises.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Make designs shareable</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Making sure designs are easy to share with the team. This ensures everyone on the team is referencing the same thing and expectations are clear.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Gain alignment</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Work with the Product Architect and client to make sure that requirements meet expectations.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Ensure feasibility</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Early internal alignment makes sure that what is being proposed is executable.</li>
                  <li>This helps the product team have guardrails for the proposed solution to the client.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Collaborate while designing</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Regular, agreed upon check ins with dev team ensures that we are not over promising.</li>
                  <li>Gives the dev team time to test or look into anything that requires more research.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Collaborate during development</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Check in on progress with engineer; make yourself available for conversation and collaboration.</li>
                  <li>Identify any risks or necessary changes.</li>
                </ul>
                
                <BlueCard
                  header="AI Prompt Idea"
                  body="Meeting with developers to review designs of my new event calendar feature, we only have 30 minutes - what would be a good agenda to keep us on track? I want to make sure we cover what's being reviewed, what's in progress and what has been completed to keep us all aligned."
                />
                
                <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">4. Provide detailed feedback</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Make sure any and all feedback is documented in a place that everyone can share.</li>
                  <li>Be flexible; some things may skew from expectations. Be open to change and make sure that is documented.</li>
                </ul>
                
                <BlueCard
                  header="Common elements to review:"
                  body={
                    <div className="text-blue-card-text" style={{ fontSize: '14px' }}>
                      <p className="mb-3">Overall we're evaluating accuracy with the design mockup and how it is translating to live code. Keep in mind not every detail may be feasible, so being flexible and creative in working with your dev counterpart is the goal:</p>
                      <ul className="ml-6 space-y-1">
                        <li>• Typography</li>
                        <li>• Padding, margins, overall spacing</li>
                        <li>• Color accuracy</li>
                        <li>• Transitions</li>
                        <li>• Accessibility (ensure the level of compliance in the designs has been implemented properly or assess if it needs to be adjusted)</li>
                      </ul>
                    </div>
                  }
                />
              </div>
              
              <BlueCard
                header="When You're Done"
                body={
                  <div className="text-blue-card-text" style={{ fontSize: '14px' }}>
                    <p className="text-blue-card-header font-semibold mb-3">Teams should feel confident in answering:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• Did the final product meet expectations?</li>
                      <li>• Does everyone on the team feel proud of the work done?</li>
                      <li>• Did we collaborate enough across disciplines?</li>
                    </ul>
                    <p className="text-blue-card-header font-semibold mt-4 mb-3">Present your findings to client</p>
                    <ul className="ml-6 space-y-1">
                      <li>• Share any learnings along with proposed solutions with the client.</li>
                    </ul>
                  </div>
                }
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                  </svg>
                }
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <RedCard
                header="Not Enough Collaboration"
                body="When we silo ourselves that can lead to undesirable solutions and not meeting the expectation of the product and its desired outcome."
              />
              
              <RedCard
                header="Over Promising"
                body="By not aligning early there is a risk that the proposed solution to the client wasn't feasible, and that can lead to distrust from the client."
              />
              
              <RedCard
                header="Not Being Flexible"
                body="In every product there is a right-sized solution. Make sure the effort aligns with the desired outcome"
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Build Review Checklist"
                  href="#"
                />
                <ResourceCard
                  title="Design QA Process"
                  href="#"
                />
                <ResourceCard
                  title="Developer Collaboration Guide"
                  href="#"
                />
                <ResourceCard
                  title="Feedback Documentation Template"
                  href="#"
                />
                <ResourceCard
                  title="Design System Implementation Guide"
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