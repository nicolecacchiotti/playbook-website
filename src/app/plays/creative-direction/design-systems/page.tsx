'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designSystemsArt from '@/../assets/Card Art/DesignSystems.svg';
import PlayAuthors, { designSystemsAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DesignSystemsPage() {
  const title = "Design Systems";
  const section = "Creative Direction";
  const audioUrl = "/audio/Design Systems.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designSystemsAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designSystemsArt} 
            title="Design Systems"
            labels={['Design', 'Systems']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A well-implemented design system enables design and development work to be created and replicated quickly and at scale. As a unified design language, a design system fosters consistency between dispersed or cross functional teams, across products, while mitigating strain on design resources. Our clients look to us for help building a design system from the ground up, or building upon an existing design system.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Cross functional teams</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When there are multiple cross functional team members and stakeholders working on a product – and a single reference of design truth is required.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Scaling the product across different projects</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When the design system is able to deliver scalability and consistency for a design project outside the one you are working on. In other words, the client can use the design system to evolve their product later, or reference for other projects.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Generally, scaling the product</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When a product design scales to the point where UI component maintenance becomes a nightmare. By that point, the design should already be component-based. A design system will make it easier to maintain a single component and push updates across the designs rather than updating all individual instances of a component.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">When it's in the SOW</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When it is a project SOW requirement; either the client is looking for new components from your design to implement into their existing design system, or a custom design system deliverable.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Assess the value</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Assess the value of creating a design system to ensure it delivers scalability and consistency, not just across your project but also across the client's product ecosystem.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Dedicated DRI</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Creating and maintaining a design system is a time-intensive activity, so establish a dedicated team/DRI that will build and maintain the design system. This person should have strong design proficiency, and the ability to work closely with engineering and design teams. Governance is required – even with a federated approach, establish which team members will be updating the design system, what the component iteration workflow looks like and how to communicate design system updates to stakeholders.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Legacy design system audit</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Depending on the landscape of your client's digital products (and if they already have a design system), you might have to audit their current UI component usage to determine if you are adopting, adapting or creating your own proprietary design system. During the audit process, inconsistencies might be revealed; and you may find that an old component can be improved and realized through your designs. Once you have completed an audit, you can focus on prioritizing how components can evolve.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Management platform</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine the platform you will use to manage and deliver your design system. For basic systems, you can leverage tools like Figma to automatically structure and document component libraries directly from your design layouts. If you are creating a more robust design system (for example, using design tokens to connect a design system to the code production), consider using a platform such as Invision DSM or one of these platforms.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Establish stakeholder buy-in</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Get organizational buy-in for your design system. Before moving forward with the system, you need the support of your team and stakeholders.
              </p>
              
              <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-6">
                <li>Describe the process of building the design system</li>
                <li>Present building the design system as the answer to a challenge</li>
                <li>Focus on the successful metrics of an influential design system (e.g., reduce from 10 to three types of buttons, one comprehensive icon library with the ability to inform how new icons should be styled, etc.)</li>
                <li>Explain that building a design system is an ongoing process, and a small team will manage this process.</li>
                <li>Clarify that all designers and developers will have a right to contribute to the system.</li>
                <li>Emphasize that building a design system will help the company deliver a better experience to the market faster.</li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Establish a baseline</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Often, the baseline required to build a design system will naturally be derived from your screen/flow designs. Start by documenting elements like color palette, typographic scale, icons, and other style properties.
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>AI Prompt Idea</strong> 'Can you recommend a hierarchy structure for a mobile app design system?' Follow up with 'Can you recommend a standardized naming convention to use for my design system?'
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">2. Building patterns</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Build your first design system pattern, keeping in mind that building design system patterns is an iterative process. Do not focus on building all the patterns in one go. Start by identifying the best architecture for your pattern library and build it one by one. Less is more – when starting out, strike a balance between component basics and documenting the finer details.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Component & pattern documentation</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Component and pattern documentation is key. Rather than just a collection of UI components, a good design system should have annotated pattern details, usage guidelines, sizing, ratio, spacing, defined component states, animation info, etc. Your design system should communicate everything that a developer, designer or client would require to realize that component or pattern.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                A design system can (and will eventually) encompass a lot. In order to create real value and effectiveness, your design system can evolve to cover more than just UI components. For example: it could eventually include overarching design principles, UX research, copy writing assets, brand resources, image libraries, and various coded components.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Evangelize it</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Put as much time into evangelizing design collaboration and consistency as actually building your design system. One of the hardest parts about building a design system is convincing other people (or the client) to use it. Approach your design system as a partnership – work closely with the various stakeholders to capture their input.
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>AI Prompt Idea</strong> 'How would I test the organization of my component library?' Follow up with 'What are some ideas for Test Scenarios and Testing Goals I should consider?'
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">5. Test it</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Test the organization of your component library. With so many moving parts, make sure that your structure (ie: how you organize your design system) makes sense. Difficulty finding a component or asset can be a frustrating experience. Test the terminology and information architecture of your design system. And of course, ensure that your components are built to high quality standards (properly linked in your design software, built responsive, accessible, etc.).
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
                    <p className="mb-3 text-blue-card-header font-semibold">Teams should feel confident in answering:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>"Where can I refer to this component's specifications or behavior?"</li>
                      <li>"Can someone, a year from now, open this design system and understand how to use it?"</li>
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
                header="Starting Too Big"
                body="Don't try to build everything at once. Start with the most commonly used components and patterns, then expand gradually. Focus on quality over quantity in the initial phases."
              />
              
              <RedCard
                header="Lack of Governance"
                body="Without clear ownership and governance, design systems can become inconsistent and outdated. Establish clear roles, responsibilities, and processes for maintaining and updating the system."
              />
              
              <RedCard
                header="Poor Documentation"
                body="A design system without proper documentation is essentially useless. Ensure every component has clear usage guidelines, examples, and specifications that developers and designers can easily understand and implement."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Design System Starter Kit"
                  href="#"
                />
                <ResourceCard
                  title="Intro to Storybook for Product Designers"
                  href="#"
                />
                <ResourceCard
                  title="Brightline"
                  href="#"
                />
                <ResourceCard
                  title="Synchrony"
                  href="#"
                />
                <ResourceCard
                  title="FOX Local"
                  href="#"
                />
                <ResourceCard
                  title="Material"
                  href="#"
                />
                <ResourceCard
                  title="Design System Canvas: plan your design system"
                  href="#"
                />
                <ResourceCard
                  title="Design system checklist"
                  href="#"
                />
                <ResourceCard
                  title="Useful Design System examples"
                  href="#"
                />
                <ResourceCard
                  title="The Ultimate Design Systems Resources List"
                  href="#"
                />
                <ResourceCard
                  title="Design System Checklist"
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