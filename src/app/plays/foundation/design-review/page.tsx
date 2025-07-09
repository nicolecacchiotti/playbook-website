'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designReviewArt from '@/../assets/Card Art/DesignReview.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { designReviewAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function DesignReviewPage() {
  const title = "Design Review";
  const section = "Foundation";
  const audioUrl = "/audio/Design Review Play.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designReviewAuthors} />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>A design review is a recurring meeting in which progress of design and other design-related elements are shared with stakeholders.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designReviewArt} 
            title="Design Review"
            labels={['Teams', 'Planning']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                A design review is a personalized experience led by Product Designers to get feedback and approval on designs (features, concepts, animation, creative direction). Use this time to connect with your client, build rapport, and negotiate design solutions. This functions best as a collaborative effort that brings perspectives from a diverse set of eyes, from engineering to requirements to analytics.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
                <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                  <span className="font-semibold">Weekly (but flexible)</span> The ideal state is to meet weekly for design reviews with the client to keep everyone on the same page and up to date on any progress. Remain flexible, follow up the next day with smaller focus groups or recommend "parking lot" topics to keep the meeting on track.
                </p>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Planning & Prep</h2>
              <ol className="list-decimal list-inside space-y-6 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Pre-design review:</span> Ahead of the design review connect with your primary stakeholder or PO to give them a preview of what you're thinking of presenting and work on getting their initial buy-in to your approach. This is also a great time to circulate any questions you have on technical feasibility and additional input/answers needed from the client side.
                </li>
                <li>
                  <span className="font-semibold">Defining the goal of the design review:</span> Before you begin, consider creating a narrative for your presentation.<br/>
                  <span className="font-semibold">Questions to ask yourself:</span> What are the business goals of the feature? What is the user journey for the feature? Are there any technical requirements that need definition? Are the APIs or technical dependencies ready for this feature? What are the design assumptions and requirements for the functionality of the feature? How are we going to measure if this feature is successful? Is there any user validation that we could explore with this feature? What is the deadline for releasing this feature?
                </li>
                <li>
                  <span className="font-semibold">Design roadmapping:</span> Design roadmapping is key for setting delivery expectations with your client. In your roadmap, note any key delivery dates and work backward from them; e.g., MVP launch date or final approval needed.<br/>
                  This basic structure is a good starting point, but you might have to be flexible based on deliverable timelines and complexity of features:<br/>
                  <strong>Week 1:</strong> Feature kick-off<br/>
                  <strong>Week 2:</strong> Revision review<br/>
                  <strong>Week 3:</strong> Final review<br/>
                  It's handy to set up a deck prior to your design review so that you can seamlessly flow through your talking points and have all of your thoughts documented and planned out. This will also make referencing documented decisions quicker if you keep dated copies of each review.
                </li>
              </ol>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Sample Design Review Agenda:</h2>
              <ul className="list-disc ml-6 space-y-2 text-muted-foreground mb-6" style={{ fontSize: '14px' }}>
                <li>Welcome and Introduction (5 minutes)</li>
                <li>Review of Feature Overview (10 minutes)</li>
                <li>Competitive Landscape Analysis (15 minutes)</li>
                <li>User Journey Mapping (20 minutes)</li>
                <li>Discussion of Design Requirements (15 minutes)</li>
                <li>Feedback on Initial Concepts (30 minutes)</li>
                <li>Next Steps and Action Items (5 minutes)</li>
                <li>Wrap-up (5 minutes)</li>
              </ul>
              
              <p className="text-muted-foreground mb-6" style={{ fontSize: '14px' }}>
                <span className="font-semibold">Note:</span> The duration allocated to each agenda item can be adjusted based on the complexity and importance of the discussion. It is essential to maintain a productive and inclusive atmosphere throughout the meeting, allowing all participants to contribute their ideas and perspectives.
              </p>

              <div className="mb-6">
                <GreenCard
                  header="AI Prompt Idea"
                  body="Suggest a creative icebreaker for designers when meeting a banking client for the first time"
                  icon={<Lightbulb className="w-6 h-6 text-green-700 mb-2" />}
                />
              </div>

              <ol className="list-decimal list-inside space-y-6 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Welcome and Introduction (5 minutes):</span> Start the meeting by welcoming all participants and introducing the purpose of the meeting. Briefly mention the importance of the new feature and its potential impact on the product.
                </li>
                <li>
                  <span className="font-semibold">Review of Feature Overview (10 minutes):</span> Provide a brief overview of the new feature, its objectives, and its key functionality. Highlight the value it will bring to the users and the overall product.
                </li>
                <li>
                  <span className="font-semibold">Competitive Landscape Analysis (15 minutes):</span> Present a summary of the competitive landscape related to the new feature. Discuss competitor solutions, their strengths, weaknesses, and notable design approaches. Encourage participants to share their insights and observations.
                </li>
                <li>
                  <span className="font-semibold">User Journey Mapping (20 minutes):</span> Conduct a user journey mapping exercise to understand the user's interaction with the new feature. Identify key touchpoints and pain points throughout the user's journey. Discuss opportunities for improving the user experience and identify areas where the new feature can add value.
                </li>
                <li>
                  <span className="font-semibold">Discussion of Design Requirements (15 minutes):</span> Present the design requirements for the new feature, including any technical or functional constraints. Encourage participants to ask questions and provide input regarding the requirements. Document any clarifications or changes to the requirements based on the discussion.
                </li>
                <li>
                  <span className="font-semibold">Feedback on Initial Concepts (30 minutes):</span> Share initial design concepts or prototypes related to the new feature. Allow participants to provide feedback, suggestions, and ask questions. Facilitate a constructive discussion to gather diverse perspectives and insights.
                </li>
                <li>
                  <span className="font-semibold">Next Steps and Action Items (5 minutes):</span> Summarize the key takeaways from the meeting. Discuss the next steps, including any follow-up activities or tasks. Assign action items to team members, ensuring clarity on responsibilities and deadlines.
                </li>
                <li>
                  <span className="font-semibold">Wrap-up (5 minutes):</span> Thank all participants for their valuable contributions and time. Confirm the availability of meeting notes or any other relevant documentation. Provide an opportunity for final questions or comments.
                </li>
              </ol>
            </div>
          )}
          {selectedTab === 2 && (
            <div>
              <BlueCard
                header="When You're Done"
                body=""
                icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
              >
                <div style={{ fontSize: '14px' }}>
                  <p className="mb-4 text-muted-foreground">
                    <span className="font-semibold">Post design review:</span> Shortly after your design review, circulate an email to all the attendees and stakeholders that briefly recaps the decisions, next steps and open questions following the review. This is a good opportunity to let stakeholders know what the next meeting will entail and to set expectations, e.g., "Next week, we'll be meeting on Thursday to review the revisions to component X and work to finalize the feature in our meeting."
                  </p>
                  
                  <p className="mb-4 text-muted-foreground">
                    <span className="font-semibold">DRI's & dependencies:</span> DRI's for any action items discussed in the design review, such as who is responsible for getting specific information and by what date. Make sure your client and your internal team know if you are blocked from moving forward or finalizing a feature design.
                  </p>
                  
                  <p className="text-muted-foreground">
                    <span className="font-semibold">Next steps:</span> Have a clear understanding of next steps and a planned date to have them completed. Promptly email out your design review documentation (within a day). Include next steps, blockers and the date of the next review.
                  </p>
                </div>
              </BlueCard>
              
              <div className="mt-6">
                <GreenCard
                  header="AI Prompt Idea"
                  body="Draft a short and friendly recap email of the next steps after a design review (ex: iterating on feedback and revising designs), thank the participants and mention the date for our next review (ex: next Thursday). Mention that we need the client to gather any additional feature requirements by the next meeting."
                  icon={<Lightbulb className="w-6 h-6 text-green-700 mb-2" />}
                />
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold text-foreground">Common Pitfalls</h2>
              <RedCard
                header="Client Swirl"
                body="Clients can get stuck on decisions that aren't mission-critical, such as a photo, word or color they don't like. A good move here is to offer user research to validate or inform this decision or ask the team that we do a quick poll via email after the meeting, so you can be sure to get through your whole agenda."
                className="mt-0"
              />
              <RedCard
                header="Not Knowing How to Build It"
                body="Not having technical representation in your design review can present problems. You need to be able to explain with confidence how something is going to be built to help guide the decision making and MVP sizing of your feature."
              />
              <RedCard
                header="Surprising Your Client"
                body="Surprises aren't always great. Sometimes it's important to get your key stakeholder onboard with your solution ahead of presenting it to a larger group so that you have an advocate on your side."
              />
              <RedCard
                header="Getting Feedback"
                body="Actively listening to client feedback is of utmost importance. Clients want to feel heard and validated; take notes and use techniques such as mirroring and labeling to get a deeper understanding of their thoughts. If the client doesn't like the size/color/font of something, patiently work towards finding out why and try to determine what outcome they're really seeking."
              />
              <RedCard
                header="Use Parking Lots"
                body="If conversations are being derailed in larger group reviews, ask to 'parking lot' the issues people are swirling around. Try to follow up with key stakeholders in smaller focus groups."
              />
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="FigJam Roundup"
                    href="https://www.figma.com/file/2GQJPl5wXR26tV7h5H0yEx/%F0%9F%A4%A0-FigJam-Roundup?node-id=0%3A1"
                  />
                  <ResourceCard
                    title="Weekly Design Review Examples"
                    href="https://www.figma.com/file/HkcFul2XAuIsUDcfwlWvva/Weekly-Design-Review-Examples?type=design&node-id=207%3A102424&mode=design&t=XGFYbc7L4y92HTfn-1"
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