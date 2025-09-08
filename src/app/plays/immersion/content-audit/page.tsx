'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import contentAuditArt from '@/../assets/Card Art/ContentAudit.svg';
import PlayAuthors, { contentAuditAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ContentAuditPage() {
  const title = "Content Audit";
  const section = "Immersion";
  const audioUrl = "/audio/Content Audit.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={contentAuditAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            A content audit is a systematic review and analysis of existing content within a website or app. Possessing a strong understanding of the content that drives a product and how that content performs helps us to identify needs, gaps, and areas of opportunity.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={contentAuditArt} 
            title="Content Audit"
            labels={['Content', 'Analysis']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A content audit provides a holistic picture of content on a client's platform(s), enabling practitioners to gain an understanding of where content is delivering a strong user experience and driving client goals, and where it's not. This type of audit is often undertaken with the goal of understanding the "what, where, how, when, why" of product content. These insights enable us to improve the user experience, advance client goals, and identify areas of opportunity.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Due diligence is required</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Content audits can be effective tools throughout every stage of a project, but they are often most impactful at the start when in-depth knowledge of the product overall will inform your plan and help you identify priority needs.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">You want to understand how content is performing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At the outset of a project, partnering with the analytics team, SEO, or a researcher as part of your audit can give you a data-informed picture of how content measures against set goals. After updates have been made, you can continue to measure performance to track success and see where further changes may be needed.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Redesigning a product, or a rebrand</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When considering a product redesign or a rebrand it's important to understand where content is and is not currently serving user needs and client goals. This allows you to identify the content changes that will drive the most impact.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Pitching additional work</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A content audit can help you understand where current stumbling blocks (such as underperforming content, content gaps, poor navigation, the need for reorganization or improved language, etc.) can open areas of opportunity for the client.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">You need to assess, track, or take inventory</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This type of audit can also take the form of a comprehensive review of pages or screens in a product and the content found on each (for example: URL, H1, title, metadata, page description, images, etc.). This helps you to assess the current state / quality of the client's content and to keep track of pages and screens across complex products. Tracking can be quantitative (list or spreadsheet) or qualitative (adding a quality rating for each page or piece of content, tracking noted issues and suggested changes, and whether something should be kept, updated, or removed).
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Understand the goals of the client and project</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Be sure that you have a solid understanding of what the client is hoping to accomplish by hiring WT, in terms of actual product UX and functionality as well as with their brand and audience relationships. We can often take content recommendations beyond UX/UI and into larger brand/audience/thought leadership strategy.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Choose your template</h2>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li>The content you are examining will often inform the most effective method of tracking it.</li>
                <li>When you are examining larger content segments such as flows, navigational structure, UI, etc., using Figma and Figjam plus screenshots can help keep things clean and structured.</li>
                <li>A spreadsheet can be ideal in cases where you are reviewing smaller details (microcopy, inconsistencies in tone, title case vs. sentence case, etc.) over a large number of flows or pages.</li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Start with a holistic look</h2>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li>Ensure you have a clear understanding of the client's concerns. Do they know that certain areas of their product are underperforming and want to know why? Are they trying to capture a new audience segment, or increase engagement with an existing one? Do they feel that their product needs a refresh?</li>
                <li>Keeping that information in mind, examine the site or app as a whole. Taking this high-level look will give you important context and a picture of how the content connects across the product. It will also surface issues and areas that need attention. Are you finding that audience needs are not being answered? Is important content missing or buried? Is language vague or misleading?</li>
              </ul>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    As with most areas of digital product design, a data-informed approach works best. An analytics architect, SEO expert, or researcher may be able to provide information at the start of your audit that can help you better understand current user behavior and determine where to focus your efforts, and help to support recommendations you make once the audit is complete.
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">2. Dig deeper into areas of opportunity</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once you have a solid overview of the product and have identified areas to examine further (such as language, copy, UX, UI, navigation/structure, etc.), drill down to understand consistent issues. Utilize screenshots and other tools in Figma to help you keep track of where and when issues surface.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Determine priorities</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The amount of content found in a given product can be overwhelming, so it's important to focus your efforts on the areas that will provide the most impact. If multiple areas for improvement are identified, determine which are quick wins, the most urgent, highest impact, etc. to help you prioritize your approach.
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    Keep your Product Designer plus your Project Director up to date on your findings and recommendations. They can give you input on feasibility, timeline, etc.
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">4. Present recommendations and solutions</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once you've identified areas for improvement, make a strong case for why you are recommending changes and explain the reasoning behind your proposed solutions. Try to go beyond "best practices" to include how your recommendations directly connect to client goals.
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
                      <li>What content performs strongly and what content does not?</li>
                      <li>Why is under-performing content not delivering in the way the client hoped it would?</li>
                      <li>What types of changes will have the most impact on performance and goals?</li>
                      <li>What are the best UX strategies to address these issues and why?</li>
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
                header="Presentation of Findings"
                body="Focus on sharing findings from a positive place. We are shining a light on areas of opportunity rather than criticizing the client's product and the people who built it. When presenting to the client you often only need to show a few examples rather than your complete background documentation (but do make sure that your documentation is clean, organized, and free of any subjectivity or criticism in case it needs to be shared)."
              />
              
              <RedCard
                header="Subjective Suggestions"
                body="Remain objective and point to clear research, best practices, and user/client goals in your suggestions. Avoid statements that lean toward personal preferences."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Assessment and Tracking Audit"
                  href="#"
                />
                <ResourceCard
                  title="SYF CareCredit Content Audit + Research Outbrief"
                  href="#"
                />
                <ResourceCard
                  title="Edward Jones IA and Navigation Audit Outbrief"
                  href="#"
                />
                <ResourceCard
                  title="CEATI Content Audi"
                  href="#"
                />
                <ResourceCard
                  title="Site Crawl Content Audit"
                  href="#"
                />
                <ResourceCard
                  title="Asset Level Content Audit"
                  href="#"
                />
                <ResourceCard
                  title="Content Gap Analysis"
                  href="#"
                />
                <ResourceCard
                  title="Content Wire Mapping + Gaps"
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