'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designPlanArt from '@/../assets/Card Art/DesignPlan.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { designPlanAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function DesignPlanPage() {
  const title = "Design Plan";
  const section = "Foundation";
  const audioUrl = "/audio/The Design Plan_ Structure for Unforeseen Journeys.wav";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designPlanAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p style={{ fontSize: '14px' }}>The creation of a Design Plan is an essential exercise that allows for design-specific project outcome alignment between WillowTree teams and their client partners. At its core, a Design Plan is executed in order to set a project team up for success.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designPlanArt} 
            title="Design Plan"
            labels={['Teams', 'Planning']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2">Why to use this play</h2>
              <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                A Design Plan is an exercise designed to create enough structure to support progress and forward momentum, even in situations where you simply do not have all of the answers. In fact, assuming that things will change helps to prepare you for when they do. After all, if clients knew how to solve their problems and seamlessly execute on their vision without disruption, they wouldn't come to us in the first place.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>At the beginning of a new engagement</h3>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      Before you can journey toward a shared design outcome, it is critical to plant a seed of shared understanding with your internal team and external client partners. When built collaboratively with all involved stakeholders, a Design Plan can set table stakes for your engagement while acting as a tool to build trust.
                    </p>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      That being said, it is crucial that this happens in the early stages of your client relationship. Your instinct may lead you to a "wait and see" approach out of fear that you do not possess all necessary information to make informed decisions. Rather than being reactive, celebrate this starting point and make it clear that the plan will be revisited and updated often.
                    </p>
                    <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                      Think of a Design Plan as the grease that keeps the wheels moving smoothly. Even if the destination is not completely known at the beginning of your journey, the plan ensures that teams continue to move forward. Onward!
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>After the project has been running for a couple of sprints</h3>
                    <p className="text-gray-700" style={{ fontSize: '14px' }}>
                      At the outset of the engagement, make a note to check back in on the plan periodically. Preparing your team for the reality that the plan will likely change makes it easier to take action if the need for change arrives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-4">Planning & Prep</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Gathering essential information</h3>
                  <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                    Every WillowTree design engagement requires product designers to balance the power of design (access, intuitiveness, joy, and delight) against the objective realities of commercial organizations (time, money, requirements, client agendas, and technological limitations).
                  </p>
                  <p className="text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    In an effort to make your best educated guess regarding the structure and sequencing of your work, consider the following:
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Deliverables, activities, and milestones</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        The amount of detail offered in WillowTree scopes of work can vary depending on the client and type of work. An essential first step is to review the proposal, executed scope, and any procurement process notes shared by the business development team. Use this information to outline your initial understanding of the work that the WillowTree team MUST do. In this context, MUST do versus COULD do is a very important distinction.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Design requirements and technical dependencies</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        To begin assessing the particular needs of your design engagement, it's important to ask a fundamental question of your internal WillowTree team: is design driving requirements, or are requirements driving design?
                      </p>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        In some instances, clients have one or several end business goals in mind but are completely open as to have they are achieved. In these cases, the WillowTree design team may be called upon to define project requirements in-real-time as the engagement progresses.
                      </p>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        In other instances, a variety of scenarios may have led to requirements already being defined to some degree. These determinations can involve a variety of factors, including but not limited to:
                      </p>
                      <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        <li>Features or functionality identified in WillowTree's SOW</li>
                        <li>Features or functionality recommended by a WillowTree team during a previous strategy or design engagement</li>
                        <li>Features or functionality identified in the client's RFP</li>
                        <li>Features or functionality identified by the client Product Owner or larger client stakeholder group (e.g., a client stakeholder with a specific feature request is only available during a portion of your engagement and is eager to review progress)</li>
                        <li>Technical constraints or limitations defined by existing client systems, tooling, or partner relationships (e.g., the front end team has identified complexities which require a certain feature to be addressed first)</li>
                        <li>Accessibility requirements as defined by a company, organization, or governing body</li>
                      </ul>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        It's worth mentioning that defining requirements is not an exact science. Don't be afraid to be bold and make educated bets based on the information you have at a given moment. If your team's understanding of requirements is not in sync with the client team, it will create space for dialogue and alignment.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Period of performance</h4>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        Though this seems objective, this can be a nuanced topic. Is the allotted time outlined in the scope directly related to a budget cap or a hard delivery launch target? Does the scope outline specific milestones related to that constraint? Is the work a proof of concept to ideally capture additional opportunities? Talk to your business development counterpart to get a sense of the business context surrounding the time you have to complete the work, and factor that into your plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4">How to run the play</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Establish the timeline</h3>
                  <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                    Once the team has gathered context across all of the topics outlined above and has established a representative list of all features that could be completed during the engagement, it's time to:
                  </p>
                  <ul className="list-disc ml-6 space-y-4 text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    <li>In the case that you do not have prioritization clarity, facilitate a prioritization workshop with key client stakeholders to gauge hypothesized business impact of features as they relate to each other.</li>
                    <li>Evaluate the time you have based on milestones and then segment up the time such that, when comparing features against each other, you allot time as meaningfully as you can. This decision-making <em>only</em> happens within the context of the actual time that you have, so being realistic and accounting for tradeoffs is essential. Consider framing the exercise in terms of what you can accomplish with the time you are given, as opposed to the time you think you need to complete a specific body of work.</li>
                    <li>Structure your work cadence according to what can be accomplished (often aligning features to "sprints", but not in every case).</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Visually represent the work to be done</h3>
                  <p className="text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    Once you've established an initial timeline for the completion of the defined body of work, create a timeline artifact for shared alignment with your internal team and client partners. This will often a Gantt-style chart and/or presentation deck, but can be displayed in any format that effectively created shared understanding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Build consensus</h3>
                  <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                    After your team has estimated, structured, and scheduled your work, socialize it across disciplines and with your client stakeholder group to ensure that all decision-makers have a shared vision for the work to be done. Revise as needed.
                  </p>
                  <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                    If this process unearths any significant misalignment between scoped work and what is actually feasible, proactively escalate to your WillowTree team leadership to prevent risk to delivery.
                  </p>
                  <p className="text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    After you've socialized the plan and built consensus, revisit the decisions internally on a weekly basis. A plan is, at best, a structured series of assumptions with a desired outcome in mind. As your team tackles the work, execute against your plan while being prepared for the unexpected.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">4. Create a communications plan to support the timeline</h3>
                  <p className="text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    Establishing and nurturing a client communication plan is a crucial step toward being seen by your client as a "trusted advisor." When planning out the various ways in which you will communicate with your client, always be sure to lead with intention. Our clients' time is limited, so it is essential to maximize the value of every interaction for both parties.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Ownership</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        From the outset of your engagement, define clear expectations within your WillowTree team as to who will reach out to the client, when, and for what purpose. In some cases, client partners may be more comfortable having all communication flow through specific individuals. In other cases, client teams may be more comfortable allowing communication to flow more organically between peers. Taking the time to understand your client's preferred communication style and responding to it will demonstrate that you are paying attention.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Vehicles for communication</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        Any time your team needs to connect with your client, ask yourself and your colleagues how you can maximize value and efficiency. Is what you need to discuss best addressed via email? A messaging platform? A conference call? Being sensitive to communication format is a signal that you respect and value your client partner's time.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Sample client-facing communication settings</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        With so many methods for gathering at your disposal, structuring a cadence that includes the right groupings and contexts can feel overwhelming. Fear not! Possible ways to assemble include but are not limited to:
                      </p>
                      
                      <div className="space-y-4 ml-4">
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Standup</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            Daily, brief "standups" have become a ubiquitous piece of the product development process puzzle, largely because, when run effectively, they allow complex and diverse teams to efficiently report out bite-sized progress while identifying impediments that could block progress. Hands-on client product owners may have a particular interest in participating in these sessions.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Feature kickoff</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            This meeting is an opportunity to immerse your team in the problem space at hand. During this session, it is helpful to explore:
                          </p>
                          <ul className="list-disc ml-6 space-y-1 text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            <li>The business case for the problem this feature will attempt to solve</li>
                            <li>The client stakeholders who make be connected to this feature and why it matters to them</li>
                            <li>Any technical constraints holding back the current state of this feature or that must be considering when creating/optimizing it</li>
                            <li>Any work the client has done in an attempt to solve this problem</li>
                          </ul>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            Schedule 1 Feature Kickoff per feature sprint. Include your complete WillowTree project team and your main client points of contact in this meeting.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Design review</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            This meeting allows your team to socialize your design decision-making with your primary client stakeholders to build consensus. This is intentionally not called a "presentation," because it should ideally be informal. Be direct and vulnerable when walking the client through your work as a way to normalize open communication. If you are open, hopefully your client will respond in kind. Trust in action!
                          </p>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            You should plan for at least 2 client reviews per sprint, including one at a midway point and another at the end of the sprint. This could be influenced by a variety of factors and should be determined with your client. Socialize early and often!
                          </p>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            Include your primary client stakeholders, product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
                          </p>
                          <p className="text-gray-700 mb-3 italic" style={{ fontSize: '14px' }}>
                            Visit the Design Review play for an in-depth look at this vital exercise.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Build review</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            A build review allows you to create a dialogue between designers and engineers regarding technical feasibility. Aligning with engineers early on in the process is key to making sure that the ideas you have are possible from an execution standpoint and will mitigate any surprises later on in the process.
                          </p>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            Schedule build reviews at a normalized cadence of internal reviews between Design & Development throughout the project to ensure design quality in finished software.
                          </p>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            Include product designers, content designers, researchers, product architects, and engineers in these sessions (depending on the structure of your WillowTree team).
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Insights review</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            This type of client presentation can be particularly effective for fast-paced engagements that include practitioners from multiple product disciplines (product design, content design, research, analytics, etc.). When scheduled as a recurring session, this review creates space for progress-sharing that responds to the natural ebb-and-flow of an engagement. As an example, one week's session may be research insight heavy, where the next may focus more on analytics reporting.
                          </p>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Formal stakeholder shareout</h5>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            In most cases, a client will assign a product owner or primary stakeholder who is the most engaged member of their team and is responsible for most day-to-day decision-making throughout an engagement. While many of the above rituals are most relevant to that individual or team, it is also crucial to be intentional about creating opportunities for larger client stakeholder teams to have consistent visibility into WillowTree progress.
                          </p>
                          <p className="text-gray-700 mb-3" style={{ fontSize: '14px' }}>
                            With this context in mind, plan to structure less frequent presentations for extended stakeholder groups to review your progress and offer feedback. Consult your client product owner to establish the attendee list and frequency of these sessions.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{ fontSize: '14px' }}>Preparation and follow through</h4>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        The work we do and the relationships we build are complex. In a world where attention spans are fractured, there are tactical ways to keep your client partners engaged while reducing distraction and noise.
                      </p>
                      <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                        Ahead of a client touchpoint, be sure to have a structured agenda that you plan to follow. Where it makes sense, add the agenda to your calendar event for the touchpoint to give the client a chance to review it in an effort to get into the proper headspace for the call.
                      </p>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        After a touchpoint, send out an email to all attendees including key decision points that were reached during the meeting as well as action items and their relevant DRIs. Closing the loop on conversations and tasks can go a long way toward reducing the cognitive load on your client team. It's also deeply satisfying to see a record of WillowTree promising a thing and then following through on that thing in-real-time. Trust in action!
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-800">5. Establish task management processes to stay accountable to the initial plan</h3>
                  <p className="text-gray-700 mb-4" style={{ fontSize: '14px' }}>
                    While initial planning exercises align teams around a singular vision in the abstract, the day-to-day management of the individual, digestible actions that support the vision is where the rubber truly meets the road. This is where project management tools play a meaningful role in helping teams organize, track, and collaborate on tasks across various stages of a project.
                  </p>
                  <p className="text-gray-700 mb-6" style={{ fontSize: '14px' }}>
                    Various task-tracking visualization methodologies are outlined below:
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>To-do List</h4>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        A simple and straightforward method for managing tasks by listing them in order of priority or due date. Tasks are checked off as they are completed. This method is useful for individual task management and can be easily adapted for team use. (i.e. Notion)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Kanban Board</h4>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        A visual task management method that uses cards and columns to represent tasks and their stages in the workflow. Tasks move from left to right through stages such as "To Do," "In Progress," and "Done." This method helps visualize work, limit work in progress, and optimize flow. (i.e. Trello, Confluence)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Gantt Chart</h4>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        A project management tool that uses a bar chart to represent a project schedule, showing the start and end dates of tasks. Tasks are displayed along a timeline, allowing for easy visualization of task dependencies, project milestones, and overall project progress. (i.e. SmartSheet)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2" style={{ fontSize: '14px' }}>Scrum Backlog</h4>
                      <p className="text-gray-700" style={{ fontSize: '14px' }}>
                        A task management visualization commonly used in Agile frameworks, where tasks are organized into a prioritized list. The backlog is divided into sprints (time-boxed iterations), and tasks are moved from the backlog to the sprint backlog for completion within the sprint period. (i.e. Jira)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <BlueCard
                header="When You're Done"
                body=""
                icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
              >
                <div style={{ fontSize: '14px' }}>
                  <p className="mb-4 text-gray-700 font-semibold">
                    Teams should feel confident in answering:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    <li>What work have we agreed to do?</li>
                    <li>How will we communicate?</li>
                    <li>How will we prioritize our work?</li>
                    <li>How will we manage our work?</li>
                    <li>When will our work be completed?</li>
                  </ul>
                </div>
              </BlueCard>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold">Common Pitfalls</h2>
              <RedCard
                header="Not Including Your Client as a Co-Creator in the Process"
                body="Failing to engage key stakeholders consistently throughout the planning phase can lead to misaligned goals, unmet expectations, and lack of buy-in."
                className="mt-0"
              />
              <RedCard
                header="Not Revisiting the Plan as You Learn About Changing Priorities"
                body="The nature of our work can be ambiguous, and our initial plans are often educated guesses at approach to reach a desired outcome. Make a concerted effort to periodically revisit the plan to ensure that it is a realistic representation of where you are. If it isn't, adjust as necessary and be transparent about changes with your client partners. If you've set this expectation ahead of time, these conversations are always easier."
              />
              <RedCard
                header="Not Managing Scope Effectively"
                body="It is normal for client stakeholders to make requests to add new or expanded functionality during an engagement. It is the job of the team to assess whether or not committing to such requests creates delivery risk."
              />
              <RedCard
                header="Waiting Too Long to Call Out Issues"
                body="Do not be afraid to put your hand up the moment you notice that your work is not going to plan. ICs often feel the burden of executing against a plan, and that pressure can lead to the internalization or suppression of issues until too late. Calling out risks as soon as they arise dramatically decreases the impact to delivery. Waiting too long, however, can have disastrous consequences."
              />
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Placeholder Resource"
                    href="https://example.com"
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