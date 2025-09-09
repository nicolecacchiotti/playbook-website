'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import accessibilityAuditArt from '@/../assets/Card Art/AccessibilityAudit.svg';
import PlayAuthors, { userTestingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function AccessibilityAuditPage() {
  const title = "Accessibility Audit";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors authors={userTestingAuthors} />
          
          <p className="text-gray-700 leading-relaxed">
            An accessibility audit reviews the degree to which people with disabilities can access your digital experience. Audits should be conducted to assess whether the experience meets the current accessibility standards and to provide recommendations to a client on how to make their experience more accessible.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={accessibilityAuditArt} 
            title="Accessibility Audit"
            labels={['Accessibility', 'Audit']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Why</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  An accessibility audit is helpful to run at the beginning of a project with existing products that we will be re-imagining or iterating upon. It's imperative for us to understand the current level of accessibility and educate our clients on the importance of meeting the ideal standard.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>In the discovery phase</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Conduct an accessibility audit as part of the discovery phase during an existing product redesign. Run this play to review the accessibility of an existing app to provide recommendations on what improvements should be made.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>As part of a research or strategy project</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Review how accessible a current experience is and provide recommendations for a future design and build or changes that can be made to the current experience.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>For a discovery or business development proposal</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Run an accessibility audit as part of a discovery/business development proposal to determine our recommendations for new work.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Before launching a new experience</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Audit the accessibility of your experience as a quality check before launching your product.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>During a longterm project</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Audit the experience to ensure that we are adhering to standards and provide recommendations for future enhancements.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Establish definition of "accessible"</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Assess the level of accessibility needed for your product. Most major markets in the US require <a href="https://accessibleweb.com/rating/aa/" className="text-blue-600 underline hover:text-blue-800">WCAG AA</a> accessibility, and as such, this is what we aim for as a baseline at WillowTree. However, certain industries require a higher standard (e.g., financial, government and healthcare). Consult your PM or client stakeholder to obtain this information.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Review standards</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Review the current <a href="https://accessibleweb.com/rating/aa/" className="text-blue-600 underline hover:text-blue-800">accessibility standards</a>. Make sure you are familiar with the WCAG standards and any changes that may have been released in the latest version. If auditing an app, the current HIG (Apple) and/or Material (Android) guidelines should also be reviewed and assessed.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Assess the scope of audit</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Review the IA and assess the scope of the audit. Determine if we're responsible for reviewing all or only some of the standard items, i.e. imagery with alt tags, color contrast, content's effectiveness with links, voiceover, etc.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Create testing documentation</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Set up the testing document. The testing document should include the scope and standards that are being tested. A spreadsheet typically works well here or something like a notion board can also work.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Possibly involve automated testing</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If your project involves automated testing, work with your TE to determine where automated testing is right for the project. Partner with a test engineer to set up automated testing to identify a majority of accessibility issues.
                </p>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Manual test</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Most audits begin with manual testing, as we may have limited access to the client's existing product(s). You will need to manually test the accessibility of the different criteria and rate the level of accessibility achieved. If using WCAG as the guideline here, you can rate your level by A, AA, and AAA standards.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Automated test</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  If we have access to the code of a product, we can perform automated testing. The results from the manual test usually help us to assess whether or not it will be valuable to invest in automated testing.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Report</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Record your findings from both of your testing methods into your testing document for review and analysis.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">4. Solution</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Provide determinations and ideas for how greater accessibility can be reached if the required level is not currently met.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">5. Prioritize and Recommend</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Review your audit findings/solutions and run a prioritization exercise (like RICE) to determine the impact and level of effort of each change needed to recommend what should be focused on first.</li>
                </ul>
              </div>

              <BlueCard
                header="When You're Done"
                body={
                  <div>
                    <p className="mb-4" style={{fontSize: '14px'}}>
                      Teams should feel confident in answering:
                    </p>
                    <ul className="ml-6 space-y-1" style={{fontSize: '14px'}}>
                      <li>• Have we completed both manual and automated testing where applicable?</li>
                      <li>• Are all findings documented with clear prioritization recommendations?</li>
                      <li>• Do we have actionable solutions for accessibility improvements?</li>
                      <li>• Has the audit been reviewed against the required accessibility standards (WCAG AA)?</li>
                    </ul>
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
                    header="Relying Solely on Automated Testing"
                    body="Automated checkers have limitations. They can only detect about 25% to 30% or so of accessibility issues. The remainder of issues—75% to 80%—require manual checking, by a person."
                  />
                  
                  <RedCard
                    header="Individuals Familiar with Accessible Implementations"
                    body="Relying solely on an individual who isn't familiar with accessible implementation — an accessibility audit requires a combination of disciplines."
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="Inclusive Design Audit Template"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Audit Recommendations Presentation"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="WT completed audits"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Contrast Plugin"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Audit Report Template"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Audit Prioritization Guidelines"
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