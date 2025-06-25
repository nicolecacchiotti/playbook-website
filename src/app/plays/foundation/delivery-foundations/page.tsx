'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import deliveryFoundationsArt from '@/../assets/Card Art/Delivery Foundations.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function DeliveryFoundationsPage() {
  const title = "Delivery Foundations";
  const section = "Foundation";
  const audioUrl = "/audio/delivery-foundations-playbook.wav"; // Place the .wav file in public/audio/
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>Delivery responsibilities span four key areas: client, project, product, and team. When a delivery lead is not assigned, Delivery Foundations offers guidance to help others fulfill these roles and ensure smooth project management. This play primarily focuses on delivery for Design and Discovery projects.</p>
          <AudioPlayerWrapper audioUrl={audioUrl} imageSrc={deliveryFoundationsArt} />
          <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2">Why to use this play</h2>
              <p className="text-gray-700 mb-2">
                Non-delivery roles should be familiar with delivery concepts, terminology, and processes (they do NOT need to memorize them). It's important non-delivery leads are aware of key tools like Jira and backlogs, as well as ceremonies like refinement sessions. This knowledge helps manage both customer expectations and personal workloads, ensuring they don't become overcommitted. Feeling comfortable with these aspects will contribute to smoother project coordination and better alignment with delivery teams, especially when a specific delivery lead is not assigned.
              </p>
              <p className="text-gray-700">
                You won't need everything here when managing your project, but use this as a flexible guide to explore the tools and practices that best support your project.
              </p>
              <GreenCard
                body="If you are staffed on a project without a DL or PL, reach out to John Migliorisi to find a kick off buddy on the delivery team for your project."
              />
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">When to use this play</h2>
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold">At the beginning of a new engagement:</span> At the start of a project the leads should review the agreed upon scope, including client outcome & timeline expectations. Non-delivery leads should make sure their schedule estimates account for more time needed to manage delivery activities normally owned by delivery leads.
                  </li>
                  <li>
                    <span className="font-semibold">During contract reviews:</span> Work with your business development partner to ensure that all of the following aspects of the contract are covered, if relevant to your project. The contract type and scope details can significantly impact your approach to the work, client discussions, and managing timelines and changes.<br/>
                    <ul className="list-disc ml-8 mt-2 space-y-1">
                      <li>Types of Contracts: T&amp;M &amp; Fixed implications</li>
                      <li>
                        Scope Considerations &amp; Adjustments
                        <ul className="list-disc ml-8 mt-1 space-y-1">
                          <li>Designing for various devices Desktop/Mobile/Tablet/Glasses</li>
                          <li>Platform Overview - focus (iOS/Android/Web)</li>
                          <li>Check with legal for committing to WCAG 2.1 A, AA and what type of contract is applied for Accessibility in all of the client agreements.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span className="font-semibold">During the project kickoffs:</span> The project kickoff is a crucial time to establish clear expectations for timelines, deliverables, and communication. Leads should align all team members and stakeholders on goals, roles, responsibilities, and provide a roadmap of key milestones and dependencies to guide the project. Reference the Design Kickoff Play and Onboarding Play
                  </li>
                  <li>
                    <span className="font-semibold">After the project has been running for a couple of sprints:</span> The project leads should hold a team meeting to review and confirm scope and expectations. This meeting should include feedback for account leadership, the client, and internal teams to ensure alignment and address any necessary adjustments.
                  </li>
                  <li>
                    <span className="font-semibold">During typical scrum lifecycle ceremonies:</span> Non-delivery leads should align on who will be responsible for ongoing sprint ceremonies such as sprint planning, reviews, refinement, demos, and retros. 
                  </li>
                  <li>
                    <span className="font-semibold">At the end of the project:</span> At the end of a project, it's important to strengthen relationships with your client and team. Plan for any necessary handoffs to the client or a new team, and determine if an outbrief would be beneficial. Hold a full team retrospective to discuss lessons learned and celebrate the project's successes.
                  </li>
                </ol>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2">Become Familiar with Key Delivery Responsibilities</h2>
              <p className="text-gray-700 mb-4">Key Delivery responsibilities focus on 4 areas:&nbsp;</p>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                <li>
                  <span className="font-semibold">Client:</span> Understanding the client's needs, expectations, and business objectives is essential. Clear and regular communication ensures the client stays informed about progress, issues, and decisions that impact the product. Designate a point person to manage weekly executive reports or status updates, potential barriers, and milestones and help maintain satisfaction for a strong, long-term relationship.
                </li>
                <li>
                  <span className="font-semibold">Project:</span> Project management involves planning, organizing, and managing resources to meet project goals within time, budget, and scope constraints. Risks are anticipated and controlled, and Salesforce and timesheet data are accurate and approved promptly. Use project management tools and agile methods to organize tasks, track progress, and manage timelines. Regular team meetings help allocate tasks, address issues, and monitor progress, while periodic reviews of budgets and resources help identify and escalate financial risks.
                </li>
                <li>
                  <span className="font-semibold">Product:</span> Product management involves understanding product requirements, making informed decisions, managing the product backlog, and shaping the product's future. A designated "product owner" should have a deep understanding of user needs, business objectives, and the product vision. This person is responsible for prioritizing work based on business value and user needs, ensuring the product's design is feasible, and facilitating decisions on functionality and design.
                </li>
                <li>
                  <span className="font-semibold">Team:</span> Ensure the team can perform effectively by setting clear expectations, fostering good communication, and promoting collaboration. Support team members while managing performance to create a motivated and cohesive group. The senior team member typically handles this, with tools like bi-weekly satisfaction surveys to track morale. Encourage open communication, respect, and collaboration, using peer feedback and team-building activities to strengthen team dynamics.<br />
                  Identify DRIs for each focus area within the existing resources assigned to the team. If the team is small, one person may DRI multiple areas. REMEMBER: No project intentionally succeeds without managing these elements.
                </li>
              </ol>
              <GreenCard
                body={"You can use this trello matrix as a tool to assign typical project leadership tasks among your DRIs.\n"}
                icon={<Lightbulb className="w-6 h-6 text-teal-700 mb-2" />}
              >
                <a
                  href="https://trello.com/invite/b/670fe91095ef4115c1ca0914/ATTI842f4b9a6c1a81247414d6574dbe853a4ECAE490/triforce-responsibility-matrix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-900 underline font-medium"
                >
                  Triforce Responsibilities Matrix
                </a>
              </GreenCard>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2">How to run the play</h2>
              <ol className="list-decimal list-inside space-y-6 text-gray-700">
                <li>
                  <span className="font-semibold">Salesforce Delivery Basics</span> <br/>
                  At the start of every project, it must be added to Salesforce for record keeping and tracking. Reference the following confluence pages if you are responsible for setting up the Salesforce project for your team:
                  <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>Opportunity Setup</li>
                    <li>Project Setup</li>
                    <li>Resource Request Setup</li>
                    <li>Assignment Setup</li>
                    <li>Timecard Approval</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Internal Kickoff:</span> Internal kickoff should be facilitated by the business development partner and solution architect (they may need help scheduling the meeting). The goal of this meeting is for the biz-dev team to share as much context about the project and client as possible. Ask for the pitch deck and details about the client meetings and discussions so far.<br/>
                  <span className="italic">Tip:</span> Ask your bizdev team to recreate the pitch that they did for the client so you can hear exactly what the client heard.
                </li>
                <li>
                  <span className="font-semibold">Norming:</span> Norming as a team (before/during kickoff) allows for team members to get to know each other and determine how to work together. In addition to norming as a full team consider having a one hour norming session for just the designers on the project. Goals of norming:
                  <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>Determine project purpose & goals</li>
                    <li>Create alignment on deliverable(s)</li>
                    <li>Discuss available budget & scope to be done</li>
                    <li>Coverage of key delivery responsibilities & assignments</li>
                    <li>Determine sprint cadence and schedule</li>
                    <li>Define statuses (in progress, in review, done etc.)</li>
                  </ul>
                  <GreenCard
                    body="Check out the Norming delivery play for more details on how to run a norming session."
                    icon={<Lightbulb className="w-6 h-6 text-teal-700 mb-2" />}
                  >
                    <a
                      href="https://willowtree.atlassian.net/wiki/spaces/DPPC/pages/2523168790/Playbook+Team+Formation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-900 underline font-medium"
                    >
                      Teaming Norming Play
                    </a>
                  </GreenCard>
                </li>
                <li>
                  <span className="font-semibold">Client Kickoff:</span> The client kickoff is an opportunity to align on project goals and expectations. Prepare by identifying what your team needs to start the project effectively and how to use this time to gather that information. Ensure you create a polished, clear presentation deck, allowing enough time to finalize it before the meeting.<br/>
                  <span className="italic">Note:</span> If you have never facilitated a client kickoff before reach out to John Miglorisi for assistance.
                  <GreenCard
                    body="Check out the Client Kickoff delivery play for more details on how to successfully kickoff a project with the client."
                    icon={<Lightbulb className="w-6 h-6 text-teal-700 mb-2" />}
                  >
                    <a
                      href="https://willowtree.atlassian.net/wiki/spaces/DPPC/pages/1874395147/Playbook+Project+Kickoff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-900 underline font-medium"
                    >
                      Client kickoff play
                    </a>
                  </GreenCard>
                </li>
                <li>
                  <span className="font-semibold">Planning Work and Establishing a Cadence:</span>
                  <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>Begin by defining a clear intake process for new requests, ensuring all incoming work is documented, prioritized, and assessed for feasibility before adding it to the project workflow.</li>
                    <li>Create a project timeline and align on how you want to track the progress of work. This could be in JIRA, FigJam, Google Sheets, or Trello depending on the scale of the project and preferences of the team.</li>
                    <li>Schedule regular reviews and refinement sessions to align on details, clarify requirements, and adapt designs based on team or client feedback.</li>
                    <li>Establish a transparent scope adjustment process to address changes, balancing client needs with project constraints while minimizing disruption.</li>
                    <li>Consistently set client expectations by communicating progress, upcoming deliverables, and potential risks during recurring touchpoints, fostering trust and alignment throughout the project.</li>
                  </ul>
                  <GreenCard
                    body="Check out the Design Plan play for more details on how to plan for your project work."
                    icon={<Lightbulb className="w-6 h-6 text-teal-700 mb-2" />}
                  />
                </li>
                <li>
                  <span className="font-semibold">Using JIRA:</span> JIRA is a powerful project management tool that helps teams organize, track, and collaborate on tasks across various stages of a project. It's particularly useful for design projects involving multiple stakeholders, tight deadlines, and complex workflows, such as product launches, website redesigns, or feature development. With JIRA, you can create and assign tasks, track progress visually using boards, and communicate effectively through comments and file sharing. Whether managing a small design team or coordinating with cross-functional partners, JIRA keeps projects on track and ensures accountability.<br/>
                  Consider how many workflows you will be tracking to decide if JIRA may be right for your project. There are other tools such as Trello and Figjam that may work better for short term projects or projects with limited workstreams.
                </li>
                <li>
                  <span className="font-semibold">Working within Established Cadence & Ceremonies:</span> As a team, decide if working in sprints and following the typical sprint cadence and ceremonies makes sense.<br/>
                  Working in sprints is helpful if you have a longer term project (3+ months), and it includes defined milestones, tight timelines, cross-functional collaboration or iterative refinement.
                  <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>A typical sprint is 2 or 3 week. (Scrum Life Cycle)</li>
                    <li>Consider Sprint Planning to align the team before starting a new sprint. (Before Sprint starts - 1 hr max per sprint)</li>
                    <li>A Daily Scrum or standup can be helpful to keep the team aligned on what everyone is working on and help remove blockers early. (Daily - what you did yesterday, what you did today, blockers, 15 min max)</li>
                    <li>At the end of a sprint, a Sprint Retrospective will help the team talk through what to continue doing or what to change for the next sprint.(30-60 mins max)</li>
                    <li>If your team is using JIRA, Backlog Prioritization & Management and the Sprint Board should be constantly maintained and updated.</li>
                    <li>Consider how many internal and client design Reviews are needed and set a repeating cadence for the sprint. (Reference the Design Review Play)</li>
                    <li>Sprints may not work well for your team when doing exploratory work (strategy, concept, vision etc.), when there are a lot of ad-hoc requests or for small-scale tasks.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">End of Project Activities:</span> As your project comes to a close, check the SOW for any activities and deliverables specifically outlined to ensure that the team is fulfilling the contract. On top of any required handoff items, consider if there is anything else that will help set up the client or the next team for success.
                  <ul className="list-disc ml-8 mt-2 space-y-1">
                    <li>An outbrief document or presentation shows the value that the team has provided and provides an opportunity to drive the client towards the next phase of work.</li>
                    <li>Design system and file documentation help inform the client, and future designers and developers on the decisions that were made and how to successfully use the designs.</li>
                    <li>Consider scheduling an end of project retro or post-mortem to reflect on the project as a whole and discuss learnings that can be taken to the team's next project.</li>
                    <li>If you are responsible for Salesforce, make sure to close out the project.</li>
                  </ul>
                </li>
              </ol>
            </div>
          )}
          {selectedTab === 2 && (
            <BlueCard
              header="When You're Done"
              body="Teams should feel confident in answering:"
              icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
            >
              <ul className="list-disc ml-6 space-y-1 text-gray-700">
                <li>Who is responsible for what typical delivery responsibilities?</li>
                <li>What work have we agreed to do?</li>
                <li>How will we prioritize our work?</li>
                <li>How will we manage our work?</li>
                <li>How long will it take to complete our work?</li>
                <li>When will our work be completed?</li>
              </ul>
            </BlueCard>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-2">Common Pitfalls</h2>
              <RedCard
                header="Failing to Account for Extra Responsibilities"
                body="Expect longer schedules - a team with no product and/or project lead will progress slower than a team with these roles assigned.  More work divided among fewer people requires more time."
                className="mt-0"
              />
              <RedCard
                header="Lack of Clear Ownership"
                body="There may be confusion around who is responsible for ensuring that timelines are adhered to. This can lead to missed deadlines, project delays, and misaligned expectations between the client and the team. Without someone actively managing milestones and dependencies, it's easy for tasks to fall behind."
              />
              <RedCard
                header="Poor Communication and Coordination"
                body="A PL often acts as a key liaison between various stakeholders. Without this role, miscommunication or gaps in coordination can arise, leading to misunderstandings about project scope, priorities, or deliverables. This can result in rework, scope creep, or client dissatisfaction."
              />
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Resources</h2>
                <ResourceCard
                  name="Doing Without Delivery Leads (Figma Whiteboard)"
                  link="https://www.figma.com/file/yy0AtV5d6jF0BS4hQey8gr/Doing-Without-Delivery-Leads?type=whiteboard&node-id=0%3A1&t=Vcoub0fCSXgfzbMd-1"
                />
                <ResourceCard
                  name="Triforce Responsibilities Matrix"
                  link="https://trello.com/invite/b/670fe91095ef4115c1ca0914/ATTI842f4b9a6c1a81247414d6574dbe853a4ECAE490/triforce-responsibility-matrix"
                />
                <ResourceCard
                  name="Norming Sessions"
                  link="https://willowtree.atlassian.net/wiki/spaces/DPPC/pages/2523168790/Playbook+Team+Formation"
                />
                <ResourceCard
                  name="Client Kickoff"
                  link="https://willowtree.atlassian.net/wiki/spaces/DPPC/pages/2523168790/Playbook+Team+Formation"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 