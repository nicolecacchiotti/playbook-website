'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import contentGovernanceArt from '@/../assets/Card Art/ContentGovernance.svg';
import PlayAuthors from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function CMSContentGovernancePage() {
  const title = "CMS Content Governance";
  const section = "Feature Design";
  const audioUrl = "";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors />
          
          <p className="text-gray-700 leading-relaxed">
            Content governance is the system and processes in place to manage content from the point of inception through to publication and future revisions. It incorporates workflows, review processes, guidelines and policies, compliance, and the content life cycle. This play is focussed on the Content Management System (CMS) and efficiency improvements for publishing.
          </p>
          
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={contentGovernanceArt} 
            title="CMS Content Governance"
            labels={['Content', 'Governance']}
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
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Content governance supports clients in managing and optimizing content across a product. Artifacts might include editorial guidelines for how teams should create, publish, maintain, and revise content, and creating templates in a CMS like Contentful or WordPress to organize and push content to end-users.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This play focuses on the "non-technical" aspects of content governance with guidance on collaborating with product architects and engineers to support both editorial and technical needs.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>1. As part of a content audit</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    In some cases, a content audit may include reviewing a content management system already in place. There may be opportunities to improve templates (e.g. grouping content more efficiently so that SMEs are able to more efficiently load content into the CMS) and how they point to public-facing content, like on a landing page.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>2. As a prospective model included in discovery work</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Even when conducting discovery (or strategy) work for a client that won't amount to a full set of wireframes, it can be helpful to introduce content governance solutions, such as outlining a high-level editorial workflow. You can also touch on content governance through other deliverables; in a journey map or service blueprint, for instance, you might include a swim lane to explore systems that can help support user actions that rely on content.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>3. To support an initial prototype</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    As wireframes are completed and evolve into prototypes with front-end functionality, you might have the client test run creating and publishing a piece of content in a potential CMS. You can then make changes to the proposed process and accompanying systems before applying the full breadth of content types that require governance support to that framework.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>4. To support a final product</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Before a full product is launched, you may need to build out several templates in a CMS specific to each content type and document when and how different stakeholders should be involved in the editorial process for each. The "final" may be a comprehensive set of guidelines that provide everything they need to independently manage and scale content.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="mt-8" id="planning-prep-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Determine need for content governance with client</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When and how to establish content governance will vary greatly on the scope of the project. During onboarding and kick-off sessions, it is helpful to determine if there is an opportunity to build off existing frameworks or systems, or if you will be exploring governance use cases from scratch.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The "How to Run the Play" section below assumes a "from scratch" approach but you may only take a few of those steps in the span of one SOW.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Determine editorial roles on client side</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  What specific stakeholders will be involved in writing and managing content? There may be different SME's for different content types or certain individuals who have more "authority" to edit content. This will give a good sense of who should collaborate on guidelines and will affect levels of access in a management system down the line.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Specify content types that require content governance</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In general, microcopy integral to the IA and progression of a flow - like headers, menu labels, and CTAs - will be hardcoded. However, certain helper text (like in Modals or tooltips), body copy, operational copy (like verification emails), marketing collateral, or educational resources that may be revised, removed, or re-organized over time are good candidates for CMS support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Assess availability of product architect or developer and discuss next steps</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The availability of a product architect or developer (on client side or at WT) will greatly affect scope and final output for content governance.
                </p>
              </div>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Create a log of content types and prioritize ones most in need of governance support</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  It may be helpful for the team to have a list of all the content types associated with the product and what level of governance support is needed for each. Here are some prompts to consider:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                  <li>
                    <strong>What kind of content is it?</strong> This description may be very granular or higher-level depending on need, but for instance: "marketing emails", "landing page value props", "educational copy taken from a textbook that appears in an accordion", etc.
                  </li>
                  <li>
                    <strong>Should the content be hard coded, or is there an opportunity to move it to a CMS?</strong>
                  </li>
                  <li>
                    <strong>Where does the content occur (or where might it be projected to occur) in the structure of the UI?</strong> e.g., if the design team has aligned on a piece of educational content appearing in an accordion on a certain screen, that might impact technical requirements for a CMS.
                  </li>
                  <li>
                    <strong>Is the content being transferred through any other platforms?</strong> If so, it's important to identify those platforms, how content flows through them on the back-end, and how authors or editors should approach content to ensure compatibility.
                  </li>
                  <li>
                    <strong>What content types should be prioritized for governance support?</strong> For instance, maybe the client has indicated that they've had particular trouble maintaining or seeing the biggest ROI by focusing on marketing blogs.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Explore CMSes that support content types alongside product architect or developer</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Consider both editorial requirements and technical requirements, such as:
                </p>
                <div className="mb-4">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">Editorial requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Customizable workflows.</li>
                    <li>Multi-tier user access (e.g. administrators, writers, view-only).</li>
                    <li>Content versioning (i.e. can access an older version).</li>
                    <li>Preview capabilities.</li>
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">Technical requirements:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                    <li>Supports content types in terms of how they appear in the UI.</li>
                    <li>Personalization (i.e. CMS can recommend specific content for users based upon given criteria).</li>
                    <li>Localization.</li>
                    <li>Headless system.</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Draft templates and move them into proposed CMS</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  After you've rounded up content types and selected a CMS, build out a few "pilot" templates. Depending on the system, it may be easier to draft the template in a Google doc or another space where you can track edits and feedback, and then have the architect move new versions of a template back into the CMS.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">4. "Usability test" the CMS</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Choose a few content types and simulate the process of creating or editing them in the CMS. This will help determine where there may be opportunities to improve templates, or shed light on parts of the process that will require more guidance.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">5. Draft and review documentation with the client</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  After you've validated the CMS with the client, you can create and review guidelines that outline the entire governance process. Guidelines might include but are not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1 ml-4">
                  <li>An editorial flow that visualizes the end-to-end process of creating.</li>
                </ul>
              </div>

              <BlueCard
                header="When You're Done"
                body={`Teams should feel confident in answering:

What are the processes for the client to manage current content or push new content to end-users in a product?

Why was a certain CMS chosen and how does it support the editorial and technical requirements of a product?

Share findings

Potential slides for a client presentation:

• Step-by-step editorial flow.

• Proposed CMS requirements.

• Examples of CMS templates.

• A "side-by-side view" of content in a CMS and its corresponding page in the product.

It may also be helpful to "demo" the CMS in action via video or prototype walkthrough, pending bandwidth.`}
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
                    header="Not Looping in Tech Partners Into How Content Functions in a CMS"
                    body={`Product architects and developers can help ensure templates are effectively working on the back-end and "pointing" to the UI in the right places. Building a CMS in a vacuum could result in content (text, imagery, etc.) not being delivered to end-users.`}
                  />
                  
                  <RedCard
                    header="A Governance Framework That Client Cannot Manage Independently"
                    body={`WillowTree shouldn't have to provide "troubleshooting" support over time. Clients should be able to use the infrastructure (i.e. a customized CMS solution) and guidelines to manage and scale content independently.`}
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="Contentful"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="WordPress"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Strapi"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Sanity"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Content Governance Framework"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Content Model Template"
                    href="#"
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