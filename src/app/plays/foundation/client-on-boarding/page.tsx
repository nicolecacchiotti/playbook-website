'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import clientOnboardingArt from '@/../assets/Card Art/ClientOnboarding.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { clientOnboardingAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function ClientOnboardingPage() {
  const title = "Client On-Boarding";
  const section = "Foundation";
  const audioUrl = "/audio/Client Onboarding and Collaboration Playbook.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={clientOnboardingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p style={{ fontSize: '14px' }}>Client onboarding is the process of aligning the client, design team, and other team members on how to work together as well as outlining how the project will proceed.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={clientOnboardingArt} 
            title="Client On-Boarding"
            labels={['Teams', 'Planning']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2">Why to use this play</h2>
              <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                WillowTree designers collaborate and partner directly with our stakeholders. Norming and onboarding are crucial to establishing trust early on in any project. In this play, the client, design team, and other team members align on how to work together and ensure everyone is on the same page regarding the project's direction.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>At the beginning of an new engagement or project</h3>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      Similar to onboarding with your internal team, it's crucial to also norm and onboard with your clients. This involves establishing meeting cadences, setting review and feedback expectations, and building a personal connection to establish rapport.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>When you're joining an existing project</h3>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      As a designer joining an existing team, this play provides an excellent opportunity to discuss current design processes with stakeholders and team members, and make any necessary adjustments.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>When your stakeholders change:</h3>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      When stakeholders join or leave a project team, it's important to ensure they are brought up to speed. This involves adjusting communication style and meeting cadence to fit their needs. We want new stakeholders to feel included in the team and the design process from the start, rather than feeling like outsiders.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>After a misalignment or client issue:</h3>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>
                      Sometimes projects get off track, and we need to shift into recovery mode. If the design process gets derailed or tensions rise, it's important to take a step back and realign with the stakeholders. Are we still on track with our goals? Are we communicating frequently enough? What does the client need to be more successful, and what does the design need to be more successful?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2">Planning & Prep</h2>
              
              <ol className="list-decimal list-inside space-y-8 text-gray-700" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Gather project context</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>What is the nature of the project/engagement? What are the responsibilities and deliverables for the design team?</li>
                    <li>What client meeting cadence would make sense for this engagement and this particular set of stakeholders?</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Gather stakeholder/client context</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Who are your main stakeholders? If you're not sure yet, work with your PM/PD to find out.</li>
                    <li>
                      Have they worked with WillowTree before? Are they part of an existing project?
                      <ol className="list-lower-alpha ml-6 mt-2">
                        <li>If yes, what are they used to by way of design interaction? What are their expectations around cadences and delivery?</li>
                      </ol>
                    </li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Explore how WillowTree executed workshops and norming</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Review workshops, onboarding documents, and templates as needed (check the team Figma and Google Drive for resources).</li>
                    <li>Work with team leadership to discuss goals for norming the client and make sure they align with internal team's goals around meeting cadences and touch-points.</li>
                    <li>Reach out to other designers if you have questions or concerns.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Determine the needs you want to address in your orientation/norming session:</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>
                      Plan the intentions of the norming session. Examples of things you may want to cover:
                      <ol className="list-lower-alpha ml-6 mt-2 space-y-1">
                        <li>Getting to know each other (e.g. icebreakers)</li>
                        <li>Meeting cadences & scheduling</li>
                        <li>How to handle approvals & feedback</li>
                        <li>Communication & collaboration norms</li>
                        <li>High-level overview of the project's design process</li>
                        <li>Preview of design engagement & deliverables</li>
                      </ol>
                    </li>
                    <li>Time box your questions and activities. Try to keep your norming workshop to 90 minutes or less.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Align with your team and leadership:</span>
                  <p className="ml-6 mt-2">
                    Prior to contacting the client to arrange initial meetings, it's important to confer with your internal team and leadership to ensure everyone is on the same page and that your schedule aligns with the rest of the project schedule.
                  </p>
                </li>
              </ol>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2">How to run the play</h2>
              
              <ol className="list-decimal list-inside space-y-8 text-gray-700" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Introductions & coordinating</span> <span className="text-gray-500 text-sm">~30 min</span>
                  <ul className="list-disc ml-8 space-y-3 mt-3">
                    <li>After identifying your stakeholders, it's important to introduce yourself. Whether in person or over email, inform them that you're the designer on the project and share some information about yourself. Don't feel like you need to mention tenure, or years of experience in your intro.</li>
                    <li>If your project manager (PM) or product director (PD) has already arranged a meeting time, simply send out the meeting invite to the relevant parties.</li>
                    <li>If no meeting time has been set yet, propose a few available time slots and coordinate with the main stakeholder(s) or client point of contact.</li>
                    <li>Scheduling a meeting with many participants, especially those outside the organization, can be challenging. Rely on your PM/PD and client contact to ensure the most relevant people attend the meeting, and be prepared to recap the discussion for those who couldn't make it.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Meeting preparation</span> <span className="text-gray-500 text-sm">~2-3 hours</span>
                  <ul className="list-disc ml-8 space-y-3 mt-3">
                    <li>Plan an ice breaker or light-hearted introduction activity to get people engaged.</li>
                    <li>
                      Determine the discussions and activities that can help you achieve your meeting goals. Here are some ideas:
                      <ol className="list-lower-alpha ml-6 mt-2 space-y-1">
                        <li>Create an interactive calendar for clients to mark when they're typically most available during the week.</li>
                        <li>Conduct polls or surveys to determine communication preferences.</li>
                        <li>Facilitate an open discussion about what stakeholders are excited or nervous about.</li>
                      </ol>
                    </li>
                    <li>Figure out who your primary stakeholder(s) are. They will be the people who get the final say in your reviews.</li>
                    <li>Set up a FigJam (or similar program) to run the meeting from. Even if your meeting is mostly discussion based, it's helpful to have a visual source of documentation.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Running the meeting</span> <span className="text-gray-500 text-sm">~1 hour</span>
                  <ul className="list-disc ml-8 space-y-3 mt-3">
                    <li>Start by stating your goals and outcomes of the meeting. Give a play-by-play of what to expect.</li>
                    <li>Move through your discussion topics or activities, making sure to keep an eye on time and engage with the internal and client team as much as possible.</li>
                    <li>Leave space for casual conversation! This meeting is just as important for building rapport as it is for setting up the project.</li>
                    <li>Try to make the meeting interactive and enjoyable. This should be a relatively light and fun part of the process to build excitement around what's to come!</li>
                    <li>Make sure everyone feels heard, but also recognize who your primary stakeholder(s) will be and ensure that they're happy with all decisions before you close out the meeting.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Record & playback</span> <span className="text-gray-500 text-sm">~15 min</span>
                  <ul className="list-disc ml-8 space-y-3 mt-3">
                    <li>If possible, have someone (who's not helping facilitate) take notes during the meeting.</li>
                    <li>Compile notes, decisions, and any other thoughts into an email, playing back the meeting.</li>
                    <li>Share with all pertinent team members and client stakeholders.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">Follow up</span> <span className="text-gray-500 text-sm">~15 min</span>
                  <ul className="list-disc ml-8 space-y-3 mt-3">
                    <li>Schedule a follow-up meeting to continue discussions, set up workshops to cover a new topic, and/or get recurring meetings on the books.</li>
                    <li>If there were any outstanding questions or asks from the meeting, start tracking those down.</li>
                  </ul>
                </li>
              </ol>
              
              <BlueCard
                header="When You're Done"
                body="Teams should feel confident in answering:"
                icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
              >
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li>How will design be working with the client and internal team?</li>
                  <li>Have we established firm lines of communication and collaboration?</li>
                  <li>What are the most important areas of focus for the client, coming out the meeting?</li>
                </ul>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Recap</h4>
                  <p className="text-gray-700" style={{ fontSize: '14px' }}>
                    If necessary post-meeting or workshop, send a recap email to document all the decisions made — both to remind those who were there, and to give a TL;DR for any members of the team who missed the session.
                  </p>
                </div>
              </BlueCard>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold">Common Pitfalls</h2>
              
              <RedCard
                header="Getting Started Without Establishing a Relationship"
                body="The beginning of a project can be hectic, but it's crucial to take the time to build trust with the client. Nailing down meeting cadence and design collaboration is the easy part; the true challenge is making sure the client feels heard, engaged, and eager to partner with the designer(s) on the project."
                className="mt-4"
              />
              
              <RedCard
                header="Allowing the Client to Take Charge of the Design Direction"
                body="Some of our clients are used to having direct contractors, but it's important to make sure the design direction and ownership on the projects rests with WillowTree designers. At the end of the day, our clients are hiring us to be experts and the best in our field - so we need to make sure we're fully living up to the doctors-not-waiters mantra."
              />
              
              <RedCard
                header="Not Having a Clear Intention or Direction"
                body="Intention during this play is everything. This isn't just a getting-to-know-you phase. This is the time to align on how you'll work together, how you'll get approvals, who you'll get them from, and where you'll lay the groundwork for every interaction from here on out. Spend adequate time planning workshops, intro meetings, and make the effort to actually get to know your client team. It will pay in dividends when it comes to trust and mitigate any speed bumps down the road."
              />
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Client Introductions"
                    href="https://deliverypractices.refined.site/space/DELP/2004189185/Client%20Introductions"
                  />
                  <ResourceCard
                    title="Workshop Tactics - PIP Decks"
                    href="https://www.figma.com/file/u31fRcX1hpU6na5IcG1zC6/Workshop-Tactics---PIP-Decks?type=whiteboard&node-id=0%3A1&t=Nj9mG8dTY8GXcZIX-1"
                  />
                  <ResourceCard
                    title="FigJam Roundup"
                    href="https://www.figma.com/file/2GQJPl5wXR26tV7h5H0yEx/%F0%9F%A4%A0-FigJam-Roundup?node-id=0%3A1"
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