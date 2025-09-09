'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designSprintsArt from '@/../assets/Card Art/DesignPlan.svg';
import PlayAuthors, { designPlanAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DesignSprintsPage() {
  const title = "Design Sprints";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designPlanAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            WillowTree's Product Design Sprint method enables Designers to iterate on feature flows, incorporate user and stakeholder feedback, and drive continuous team communication and collaboration. Design sprints emphasize dynamic documentation that can seamlessly tie into development workflows.
          </p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={designSprintsArt} 
              title="Design Sprints"
              labels={['Design', 'Agile']}
            />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Design Sprints allow product teams to move efficiently from design to code while accounting for the constantly evolving nature of client partnerships.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choose Design Sprints when joining agile product teams that need to make smart decisions in fast-paced client engagement environments.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Establishing a Feature List</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                It is appropriate to run this play once you've identified the complete list of features that have been agreed upon between your WillowTree team and your client team. Getting to this point can involve a variety of factors, including but not limited to:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Features recommended by the WillowTree team through a conceptual exercise during this engagement</li>
                <li>Features recommended by a WillowTree team during a previous strategy or design engagement</li>
                <li>Features identified in the client's Request for Proposal (RFP)</li>
                <li>Features identified in WillowTree's Statement of Work (SOW)</li>
                <li>Features identified by the client Product Owner or larger client stakeholder group</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Norming Around Collaboration</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Design should be regularly reviewing work with engineers on the team. This can happen super collaboratively, by mob designing (informal designing side-by-side with one or more designers) or in more formal design/dev feasibility reviews once a week, or daily in stand-ups. It's up to the team to decide but it must happen and should be determined at the start.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Scheduling a Meeting Cadence</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This assumes 2 week sprints, but this can be adjusted based on the length of your engagement and the scope/scale of your work.
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Feature Kickoff</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This meeting is an opportunity to immerse your team in the problem space at hand. During this session, it is helpful to explore:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>The business case for the problem this feature will attempt to solve</li>
                <li>The client stakeholders who make be connected to this feature and why it matters to them</li>
                <li>Any technical constraints holding back the current state of this feature or that must be considering when creating/optimizing it</li>
                <li>Any work the client has done in an attempt to solve this problem</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Schedule 1 Feature Kickoff per feature sprint. Include your complete WillowTree project team and your main client points of contact in this meeting.
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Collaborative Ideation Sessions/Mobbing</h4>
              <p className="text-blue-600 mb-4 leading-relaxed">
                <a href="/plays/feature-design/developer-collaboration" className="text-blue-600 underline hover:text-blue-800">
                  See Developer Collaboration Play
                </a>
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                These sessions allow your team to come together to rapidly explore a problem space by throwing many ideas at the wall to see what sticks. These generative sessions should be safe spaces for low-fidelity dreaming.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Schedule as many of these sessions as needed based on the scope of your work and the preferences of your team, or skip the formality in favor of ad hoc "mobbing" or quick, problem-focused team huddles. Include product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Build Reviews</h4>
              <p className="text-blue-600 mb-4 leading-relaxed">
                <a href="/plays/feature-design/build-reviews" className="text-blue-600 underline hover:text-blue-800">
                  See Build Reviews Play
                </a>
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A build review allows you to create a dialogue between designers and engineers regarding technical feasibility. Aligning with engineers early on in the process is key to making sure that the ideas you have are possible from an execution standpoint and will mitigate any surprises later on in the process.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Schedule build reviews as a normalized cadence of internal reviews between Design & Development throughout the project to ensure design quality in finished software.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Include product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Client Reviews</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This meeting allows your team to socialize your design decision-making with your primary client stakeholders to build consensus. This is intentionally not called a "presentation," because it should ideally be informal, direct and vulnerable when walking the client through your work as a way to normalize open communication. If you are open, hopefully your client will respond in kind. Trust in action!
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                You should schedule at least 2 client reviews per sprint, including one at a midway point and another at the end of the sprint. This could be influenced by a variety of factors and should be determined with your client. Socialize early and often.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Include your primary client stakeholders, product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Retrospective</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This meeting allows your team to reflect on the sprint that is coming to an end. Have a facilitator structure a dialogue around:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>What went well during this sprint</li>
                <li>What held the team back from doing your best work</li>
                <li>What risks and opportunities are on the horizon</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Include your primary client stakeholders, product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
              </p>
              
              <h4 className="text-base font-semibold mb-3 text-gray-800">Sprint Planning</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A Sprint Planning session allows your team to prepare for the next sprint. During this session, it is helpful to ask:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Is there any reason to extend this sprint's work into the next sprint cycle?</li>
                <li>Do we know what problem we are hoping to solve with our next sprint?</li>
                <li>Have we scheduled the next sprint's feature kickoff?</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Plan to run 1 sprint planning session per sprint. Include product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Feature Kickoff + Rapid Ideation</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>The team sketches out the core flow of the feature. This sketching is low fidelity (whiteboard or pen and paper). If needed, high fidelity, digital wireframes are created after the sketches.</li>
                  <li>Designers and researchers evaluate the competitive landscape, review existing analytics data, and search for inspiration.</li>
                  <li>Technical discussions happen to identify bare bones user stories, API needs, and other high level technical constraints.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Visual Design + Prototyping</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Designers move into creating visual mockups for the feature. We start by designing the key screens in a flow, and eventually design all needed screens for the development team.</li>
                  <li>Designers consider accessibility, audit internally for consistency, and propose necessary updates to existing design systems.</li>
                  <li>We prototype meaningful parts of the Golden path, and other animations or transitions that need prototyping to be properly critiqued. We also potentially prototype key parts of a product, such as navigation.</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Evaluation</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Designers socialize their work with the larger internal team, including engineers, to confirm that the proposal matches client intent and is technically feasible</li>
                  <li>Designers work with researchers to coordinate user testing during feature sprints of a design-only, or design plus development project. With feature sprint user testing, you can get quick feedback on acceptance and usability of designs and flows, allowing for verification and iteration before moving those designs into development.</li>
                  <li>Designers walk through their work with primary client stakeholders and collect feedback</li>
                </ul>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">4. Optimization</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>Designers incorporate user feedback as well as client feedback in an effort to optimize their feature design concepts. Feedback and changes are incorporated, but also evaluated against scope and timeline.</li>
                </ul>
              </div>
              
              <BlueCard
                header="When You're Done"
                body={
                  <div className="text-blue-card-text" style={{ fontSize: '14px' }}>
                    <p className="text-blue-card-header font-semibold mb-3">Teams should feel confident in answering:</p>
                    <ul className="ml-6 space-y-1">
                      <li>• Do user insights validate our design hypotheses?</li>
                      <li>• Given the known constraints, have we designed a feature that is technically feasible?</li>
                      <li>• Have any new opportunities come out of examining the problem space of this feature?</li>
                      <li>• What have we learned that can improve how we work?</li>
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
                header="Immortalizing Feature Lists in a Design Sprint Plan Without Confirming Alignment Across All Stakeholders"
                body="Refer back to your planning documents on a frequent basis to ensure that client priorities have not shifted over the course of your engagement. If your plan is not continuously aligned with your client's vision, you may find yourself expending effort in the wrong places."
              />
              
              <RedCard
                header="Dramatically Underestimating the Level of Effort for Certain Features"
                body="A variety of factors can lead practitioners to underestimate the effort required to reach an acceptable level of output fidelity during a sprint. Taking on more work than you can realistically achieve during a sprint can result in project delays, cross-team bottlenecks, and client frustration. When in doubt, run your estimate by your team colleagues or your manager."
              />
              
              <RedCard
                header="Getting Tunnel Vision and Forgetting About the Product Roadmap"
                body="It's important to have a prioritized list of features in a product roadmap so that everyone knows what is coming up next. Don't forget to revisit the prioritized feature list as well as any planning documents to ensure alignment. This can be as simple as bringing it up at the beginning of Sprint Planning, flashing the roadmap and pointing out what we just finished, what we're kicking off now, and what is coming up next. That way everyone has the opportunity to point out if priorities have changed."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="2-week sprint template (Coming Soon)"
                  href="#"
                />
                <ResourceCard
                  title="WillowTree Website Planning"
                  href="#"
                />
                <ResourceCard
                  title="Spotify Design's Remote Design Sprint template"
                  href="#"
                />
                <ResourceCard
                  title="Workshop Tactics"
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