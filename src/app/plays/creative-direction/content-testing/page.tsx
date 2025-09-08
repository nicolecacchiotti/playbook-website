'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import contentTestingArt from '@/../assets/Card Art/ContentTesting.svg';
import PlayAuthors, { contentTestingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ContentTestingPage() {
  const title = "Content Testing";
  const section = "Creative Direction";
  const audioUrl = "/audio/Content Testing.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={contentTestingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            The practice of validating and gathering feedback specifically on UX content.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={contentTestingArt} 
            title="Content Testing"
            labels={['Content', 'Testing']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                While content design can be tested in the scope of broader research initiatives (e.g. a multivariate or usability test of a prototype), you can also run tests that focus granularly on content. These tests can be shorter and unmoderated and elicit feedback on the clarity and effectiveness of copy (navigation labels, instructions, CTAs etc.), information hierarchy, or stylistic attributes, like capitalization rules or tone.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Throughout the design process</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Content testing should ideally be done as early as possible, as this could shape future design direction, as well as minor tweaks to tone and style.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">As part of a content audit of an existing product</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It may be helpful to gather user feedback to validate opportunities surfaced in a content audit, this could include content relevancy, terminology use, placement and visibility. For example, the use of solutions based terms within in navigation may work for some industries, but may work against ingrained behavior in others.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Determine available budget and platforms for content testing</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                How and when to conduct content testing will first depend on the platforms available to WT and the client. One client may already have a subscription to research platforms like UserZoom or Dscout, some may be willing to temporarily subscribe to platforms for that specific engagement, and others may not be able or willing to create accounts at all.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                In addition, the team's budget and bandwidth towards other research initiatives will help determine scope for content testing (see step #3 below).
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Decide what copy fields to test</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Align with the design team on what copy fields should be tested throughout product flows and what kind of feedback is needed for each.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                For example, you may have drafted four different versions of a "welcome" message at the start of an onboarding flow, but the internal team may favor two of the four versions because they are most closely aligned to the brand's voice and tone guidelines. In this case, you can make it easier on users — and collect clearer data — by only surfacing those two versions in the test.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use your best judgment to determine when internal alignment is "enough" on copy drafts and when items should be tested with users.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Define focus areas for content-specific protocols relative to other research initiatives</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As you create a list of copy items to test, consider which ones might be "covered" by other research initiatives that the team has planned.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                For example, A/B testing two versions of an onboarding message is so granular that it makes sense in a content-specific protocol.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                On the other hand, if you wanted to assess content across six different wireframes in a product flow, it might make sense to include that in a usability test that is validating design more broadly.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Draft protocols</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                First, determine test types. The type of protocol will depend on available platforms, project timelines, and what fields are being tested:
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Unmoderated surveys</strong> (e.g. in UserZoom) are ideal for content testing because they allow you to gather a bevy of feedback in a few days. Wireframes can be included as images in the survey or linked to in a separate, public Figma space. A good rule of thumb is to keep unmoderated surveys to 10 questions or fewer and target a 5-10 minute test time.</li>
                <li><strong>Moderated studies</strong> are less conducive to testing several copy fields at once, but it may be helpful to talk with a participant more thoroughly about stylistic decisions, like voice / tone.</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Draft protocol in a doc or in the platform directly (depending on what's more feasible for gathering team feedback):
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Narrow down participant field;</strong> you'll likely have target audiences the team aligned on during product discovery. Create screening questions or employ other filters in testing software.</li>
                <li><strong>Provide unbiased context to the user</strong> on the product or industry and the purpose of the protocol. For example, "We are building a mobile banking app and want to determine the clarity of screen copy throughout the 'Lost Card' flow."</li>
                <li><strong>Group like-questions within a study.</strong> For example, a survey might have 5 questions A/B testing CTAs throughout an experience and 5 questions asking users if they find various tooltip fields helpful.</li>
                <li><strong>Give users prompts that translate to clear quantitative data.</strong> For example: "On a scale from 1-5, how clear or confusing were these instructions (with 1 being very confusing and 5 being very clear)." This wording allows the team to easily validate the effectiveness of content and provides reporting metrics for the client.</li>
                <li><strong>Include open-ended response fields for qualitative data.</strong> For example, a participant might indicate that a piece of content is "2" on the confusing / clear scale above, and then have additional feedback about why it is confusing. These responses will provide guidance when making changes to the content and can help expand on quantitative data when reporting out to client.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Review protocols with team</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Review protocol with the team to ensure it feels unbiased and clear to the user, and incorporates all questions the team wants to ask.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Staff for and run protocol</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For unmoderated surveys, this may be as simple as launching it and checking on progress throughout. For moderated surveys, you may ask the product researcher or designer to help facilitate.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. Analyze data, make changes to content, and retest</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once the study is complete, analyze the results and decide as a team which content to update. Prioritize fields that measured particularly poorly (e.g. 95% of participants selected "1" or "2" on the 1-5 confusing-to-clear scale).
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                As you update fields, leave comments about how testing data is influencing changes. In some cases, designs may need to change more substantially (See the UX Writing play for more details).
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                It will often be helpful to quickly retest updated fields to validate that they are solving user needs. As such, you may run the same (or very similar) surveys 2-3 times in a row.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Create report</h2>
              <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
                <li>Download the rough data for the study and share with team.</li>
                <li>Create an "executive summary" in a doc or design file that can be shared with client (see specific recommendations for sharing with client below).</li>
              </ul>
              
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
                      <li>What content needs to be tweaked or updated based on user data?</li>
                      <li>How might user data on content have broader implications on the product flow? For example, if users felt copy on a certain screen wasn't helpful, could that screen be removed or integrated into another part of the design?</li>
                    </ul>
                    <p className="mt-4 mb-2 text-blue-card-header font-semibold">Share your findings with client</p>
                    <p className="mb-2">Clients will likely be happy with a high-level view of the purpose and methodology for running a test, with a few examples of how data helped evolve the content and overall design. You can share the raw data (in an organized view) if they would like to dive deeper.</p>
                    <p className="mb-2">It helps to lean on data visualizations. If content tested poorly and then scored better after it was changed, display that in a graph to show how testing altered the content's success.</p>
                  </div>
                }
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
              
              <RedCard
                header="Biasing Users with Too Much Context"
                body="Like with all research initiatives, avoid context or phrasing that might bias a user. For instance, if you were A/B testing two different versions of a welcome message, it's not necessary to explain the pros/cons of each version. Let the users react to the options in a vacuum."
              />
              
              <RedCard
                header="Not Isolating Content from Visual Design"
                body="It's natural for users to react to text in the context of a product's visual elements, but for the purpose of content testing, you want to isolate the UX copy from the design. For example, it is hard to know if a welcome message is 'enthusiastic' based only on the text if the screen contains warm colors and imagery that may bias the user to feel this way. If you need to surface designs that have already been given visual treatment, blur out elements and leave directions in the study for users to disregard colors, imagery, etc. and focus only on the text as best they can."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="(Connor) - Progressive - Prism: Voice / Tone Protocol Draft & Feedback"
                  href="#"
                />
                <ResourceCard
                  title="(Maggie) - UX Writer Conference Presentation: Subjective Cloze Test, Highlighter Testing, Resonance Ranking"
                  href="#"
                />
                <ResourceCard
                  title="(Connor) - Progressive - Prism: Presentation of Survey Results"
                  href="#"
                />
                <ResourceCard
                  title="EJ Match Landing Page Research"
                  href="#"
                />
                <ResourceCard
                  title="(Rosemary) - Thrive: Booking & Navigation Tests"
                  href="#"
                />
                <ResourceCard
                  title="NNg - Testing Content with Users"
                  href="#"
                />
                <ResourceCard
                  title="User Testing - content testing and measurement: how to evaluate and what to use"
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