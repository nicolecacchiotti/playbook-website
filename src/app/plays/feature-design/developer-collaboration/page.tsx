'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import developerCollaborationArt from '@/../assets/Card Art/DesignHandoff.svg';
import PlayAuthors, { developerCollaborationAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DeveloperCollaborationPage() {
  const title = "Developer Collaboration";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={developerCollaborationAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">Designer-developer collaboration happens throughout the product development lifecycle. Designers should pair with developers from ideation through implementation.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={developerCollaborationArt} 
            title="Developer Collaboration"
            labels={['Development', 'Collaboration']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Handing project designs over to our development team is a crucial step in moving a product into production. These meetings are essential for capturing the intended behavior and look and feel of our work as it begins to be implemented in code.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Early and often</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Work with engineering throughout concept development in order to inform designs along the way. As a design concept is nearing client sign off, have a final check-in to secure engineering approval prior to client approval.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Backlog refinement</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As the project continues, additional functionality is usually presented and spelled out during backlog refinement meetings.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">On-going</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                During development, it is typical for questions to come up frequently with regards to anything from spacing and alignment to icon fonts and assets. It is good practice to stay in tight communication with your engineers throughout implementation.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Ensure Figma file is cleaned up and well-organized</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Pages and artboards should be neatly arranged and labeled in order to indicate whether a design is in progress, approved, etc. Artboard layers should be named and organized, and layers should be collapsed by default.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Figma files should be annotated as necessary</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Not every project is built or run the same way, but designers should align with the development team up front on what additional level of context they'd like to have present within the design files. This can be accomplished via Figma comments, or hidden layers that can be activated within each page.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Organize external assets</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Be sure that fonts, stock images, and any other media files needed for the build are collected and organized, usually on Google Drive, but wherever is best suited for the specific project.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Schedule and run an initial concept handoff meeting with your developers</h3>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>This should happen once the initial design concepting is complete, or near approval with the client.</li>
                  <li>The goal here is to get your development team fully familiar with the look, feel, and overall UI behavior of your application.</li>
                  <li>Be sure to cover things like palette, fonts, iconography, reusable modules, and anything else you've established in your design system so far.</li>
                  <li>It's also critical to cover microinteractions and other animations you've intended for the design.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Align on ongoing handoff protocol</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Not every project is run the same way, and not every project is handed off to developers within WillowTree.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Discuss tooling and handoff needs.
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Some projects can be run entirely within Figma. Align on the level of annotation and other information needs the developers will require as the project progresses.</li>
                  <li>Some projects will need to be exported to Zeplin, especially when working with external developers during handoff.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Design collaboration should continue as the project continues</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Usually best handled in backlog refinement meetings, this is your opportunity to keep the development team in the loop of new designs, pages, and features that have been added as design sprint work continues.
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>In addition to reviewing new design features, this is a critical opportunity for developers to estimate the implementation of the designs, so it's important to make sure they're aware of all user flows, exceptions, error states, and other behaviors that will need to be accounted for.</li>
                  <li>It can be very helpful for developers to see these design flows in a prototype form, to better visualize all states they'll need to account for. Make sure Figma prototype links are shared.</li>
                </ul>
              </div>
              
              <BlueCard
                header="When You're Done"
                body={
                  <div className="text-blue-card-text" style={{ fontSize: '14px' }}>
                    <p className="text-blue-card-header font-semibold mb-3">Development team should have a clear understanding of:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• The overall design direction and visual language</li>
                      <li>• Design system components and patterns established</li>
                      <li>• Handoff process and tooling preferences</li>
                      <li>• Ongoing collaboration expectations</li>
                      <li>• Access to all design files and prototypes</li>
                      <li>• Timeline and milestone expectations for implementation</li>
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
                header="Communication Silos"
                body="Developers should be brought in early in the design process. Their expertise and feedback should be valued while creating prototypes and designing the user interface. It is important to keep an open dialogue so that you can discuss what worked well in earlier projects and what didn't.

Good communication will help:

• Create a more refined design collaboration

• Provide the developers with background knowledge and context

• Avoid issues after the design collaboration"
              />
              
              <RedCard
                header="Avoid Jargon"
                body="You don't want to confuse the developer by using terms that are specific to your role or your design team. Communicate in a language that is simple and easy to understand. It is important to find a middle ground and be on the same page throughout the process.

Be as universal and specific as possible to ensure everything you need to share is clearly understood. This will save a lot of time as it cuts back on unnecessary back and forth."
              />
              
              <RedCard
                header="Be Aware of Each Other's Expertise"
                body="While you are not expected to be able to code, you should possess an understanding of the programming language that developers use and the challenges that they may face in their role. Knowing the basics of vital front end skills, such as CSS, Javascript and HTML, will make you a much better collaborator and will ultimately improve the quality of your product.

If you are aware of the programming language as a designer, you will be able to assess which designs can be implemented by a developer. From this, they can create designs accurately.

You should be aware of the complexities of each other's roles and respect the time that is required to move a project from the design stage into the development stage.

A developer's role is not an easy task. It requires continuous and long hours of writing and rewriting lines of codes, which at times may not yield the same results as you expected."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Ceati"
                  href="#"
                />
                <ResourceCard
                  title="Potbelly annotations"
                  href="#"
                />
                <ResourceCard
                  title="Polaris DS Component Documentation"
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