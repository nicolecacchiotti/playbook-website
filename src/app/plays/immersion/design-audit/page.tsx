"use client";

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { designAuditAuthors } from '@/components/PlayAuthors';
import designAuditArt from '@/../assets/Card Art/DesignAudit.svg';

export default function DesignAuditPage() {
  const title = "Design Audit";
  const section = "Immersion";
  const audioUrl = "/audio/Design%20Audit.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designAuditAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>A design audit is a document outlining design and content observations discovered through an in-depth review of an application. The findings are often classified into three categories: visual design, UX, and accessibility. The detail and fidelity of this deliverable depend on the scope and timeline.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designAuditArt} 
            title="Design Audit"
            labels={['Design', 'Analysis']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-gray-700 mb-8 text-base leading-relaxed">
                This play documents the current state of the client's product. By identifying quick wins and longer term recommendations, we can help the client prioritize how to improve their user experience and visual design. Additionally, we can provide recommendations based on industry vertical and technical best practices to give our clients confidence that their product is competitive.
              </p>
              
              <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Planning</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Design audits often happen at two common junctures: during the process of winning a client, or at the start of a new engagement. The output of a design audit is useful when the client is planning budgets and establishing project roadmaps, needs help deciding where to start, or needs to know the level of lift and allocation needs.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Identifying improvements</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    A competitive landscape can also be useful when approaching designs at the feature level, particularly if the feature is mission critical, net new, or something we're looking to innovate on. In this case your research can be much more tactical and specific to the feature you're designing.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Showcase expertise</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    We can utilize this play as a tool to show our expertise in digital best practices, usability, accessibility, visual design, content design, user-centered approach, understanding of their industry, etc., if the client needs convincing.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">What are the opportunities and challenges?</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Establish what outcomes the client is hoping to achieve with this exercise. This could be a workshop or a simple, guided conversation with your stakeholders. Do they have any updates to the product that they're already considering or working on? Are there any constraints you should be aware of (deadline, upcoming executive meeting, budget, resources, technical constraints)? Find out what you can about the background of the project to give you context.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">What is the scope?</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Before looking at the examples in this play, it's crucial to understand the scope of the design audit to which you've been assigned. Design audits can be small (1-5 days), medium (1-2 weeks) or a full on project (lasting multiple sprints). Right sizing what you want the deliverable to look like based on the time and resources you have available will help you determine how in depth you can go.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Who's your audience?</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Learn what you can about what the main stakeholders care about. Do they have business objectives that this is closely tied to? Do they care more about design or tech? What level of detail makes sense for this audience?
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Get familiar with the product</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Get access to a current build of their existing product. If this isn't possible, connect with someone who can give a detailed product demo and be available for questions along the way.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-content">
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">1. Competitive analysis</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Conduct a competitive analysis to see what competitors and analogous products are doing well. Create a list of competitors or ask the client to provide this if their industry is more obscure. If applicable, collect any relevant WillowTree case studies. Gather screenshots, case studies, app store ratings & reviews, business outcomes, and any user sentiment. Be sure to include analogous and adjacent products to spur creative connections between problems.
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Example: if you're working on a complicated, multi-step workflow in the financial services industry, you may consider looking at TurboTax even if your product isn't about taxes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">2. Industry best practices</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Research best practices in the industry vertical and type of product. Are there any research studies or white papers to back up your recommendations? (WT has accounts with Forrester and Baymard, which are good resources).
                  </p>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    Example questions for a financial services client: What are some common finserv challenges? How are competitors solving those challenges? How has WT solved those challenges through design? What are fintech best practices? Can you identify any common themes (e.g., building trust, effective data visualization, appropriate moments of delight)?
                  </p>
                  <BlueCard 
                    header="AI Prompt Idea"
                    body="What are some basic design heuristics to consider when conducting a design audit and follow-up with which of those would be most important for a (ex: financial app)"
                  />
                  <div className="space-y-4 mt-6">
                    <BlueCard 
                      header=""
                      body="Practice brevity and offer solutions. We want to be helpful but should avoid verbose documentation and negative criticism. Always be respectful of work done to date, and offer recommendations with an objective, clear tone."
                    />
                    <BlueCard 
                      header=""
                      body="Refer to published research and industry standards (e.g., Apple's Human Interface Guidelines and Google's Material Design documentation) to support recommendations."
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">3. UX resources</h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-4">
                    Back up your recommendations with UX psychology, platform guidelines, and design heuristics when possible. Apple Human Interface Guidelines; Material Design Guidelines; Web Content Accessibility Guidelines; Nielsen Norman 10 Usability Heuristics; Nielsen Norman Articles; Growth Design; UX Core Guide
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">4. Pull it all together</h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    Compile your recommendations along with screenshots from the existing product, annotations, any competitor examples, and supporting research. You may optionally create wireframes or visual design concepts to illustrate how the recommendations might come to life. For each recommendation, denote the level of severity (high, medium, low), analysis categories (visual design, UX, accessibility, tech), and any corresponding usability heuristics.
                  </p>
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
                        <li>What updates do we recommend making to the existing product?</li>
                        <li>Is a full revamp needed or are there some smaller updates that'll improve the quality of the product?</li>
                        <li>Is more research needed to further evaluate the product and its usability?</li>
                      </ul>
                    </div>
                    
                    <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Share Your Findings</h3>
                    <p className="text-blue-card-text" style={{fontSize: '14px'}}>
                      It can be helpful to provide a summary slide denoting the highest severity recommendations to help the client prioritize the work.
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
                header="Misaligned Outcomes"
                body="Misalignment on the outcomes of the design audit."
              />
              
              <RedCard 
                header="Limited Resources"
                body="Limited access to their current product, analytics, industry knowledge, or user insights."
              />
              
              <RedCard 
                header="Insulting the Client Team"
                body="Be aware of negative language and how we could accidentally insult the designer or team who created the existing product."
              />
              
              <div className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Resources</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Standout Examples</h3>
                    <div className="space-y-3">
                      <ResourceCard 
                        title="Envestnet Design Audit & Visual Concepts"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="Mastercard PWR App Design Audit"
                        href="https://example.com"
                      />
                      <ResourceCard 
                        title="American Freight Design Audit"
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