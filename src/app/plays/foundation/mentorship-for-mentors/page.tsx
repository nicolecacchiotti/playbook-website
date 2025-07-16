'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import mentorshipArt from '@/../assets/Card Art/Mentorship.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { mentorshipAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function MentorshipForMentorsPage() {
  const title = "Mentorship for Mentors";
  const section = "Foundation";
  const audioUrl = "/audio/Mentorship for Mentors.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={mentorshipAuthors} />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>
            Mentorship engagements provide an opportunity to give and receive feedback on a specific growth area. Any skill or area of professional development can be the focus of a mentorship engagement. As a mentor, you'll be coaching and guiding another designer on a team through a skill area that is one of your strengths or areas of competency.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={mentorshipArt} 
            title="Mentorship for Mentors"
            labels={['Teams', 'Growth']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                Through mentorship, you will help guide mentees through their goals and growth development targeting a specific skill.
              </p>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                Serving as a mentor opens up opportunities to collaborate with designers from different teams and cultivate patience for those who need additional support. It's a chance to develop leadership skills within a safe environment, share insights to enrich your team, and broaden your perspective. Mentorship is important because it enables people on our team to continually improve their skills, which makes our team more valuable in the market place.
              </p>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                You'll also have the opportunity to step outside of your project work and typical team to gain a new understanding of another designer's perspective. Mentorship is a great practice for anyone who is curious about or intending to move towards a management position.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      You might be approached by your manager or another designer if someone wants to learn a skill you're good at.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      If you're looking for someone to mentor, you may reach out to your manager to see if they can identify someone else who could benefit from your mentorship.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2 text-foreground">Who should run this play</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>Ideal DRI</h3>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                      Anyone at any level can be a mentor, but it is important to recognize both career and diversity of experiences.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>Could DRI</h3>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                      Mentors can be cross-functional on a case by case basis with manager approval.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Planning & Prep</h2>
              
              <div className="space-y-6 text-muted-foreground" style={{ fontSize: '14px' }}>
                <div>
                  <h3 className="font-semibold text-foreground mb-3" style={{ fontSize: '16px', color: '#4A5568' }}>
                    Meet with your mentee's manager
                  </h3>
                  <p>
                    Prior to the start of your mentorship, you should meet with your mentee's manager to get an understanding from their perspective what growth area(s) you'll be working on during your time together. They may provide insight into some feedback or more detail about what you should work on together.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">How to run the play</h2>
              
              <ol className="list-decimal list-inside space-y-8 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Mentorship kickoff</span>
                  <p className="mt-3 ml-6">
                    You, your mentee, and their manager will join a kickoff meeting. In this meeting, you'll align on the scope, timing, and outcomes of the mentorship. Together, you will update their goal in Lattice Grow with milestones and key results, and come up with right-sized chunks of weekly actions.
                  </p>
                </li>
                
                <li>
                  <span className="font-semibold">Initial meeting</span>
                  <p className="mt-3 ml-6">
                    Set an agenda prior to this meeting so your mentee knows what to expect. You both should be working towards three goals for this first meeting:
                  </p>
                  <ul className="list-disc ml-12 space-y-2 mt-3">
                    <li><span className="font-semibold">Build rapport</span> learn about each other, discuss personal and professional history, look for common ground.</li>
                    <li><span className="font-semibold">Discuss mentoring topics</span> such as skill-related, career story, situational advice, and leadership topics.</li>
                    <li><span className="font-semibold">Set initial expectations</span> tell each other what you expect from the relationship, figure out a regular meeting schedule, verbalize the mentee's goals.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="font-semibold">During mentorship</span>
                  <p className="mt-3 ml-6">
                    Over the following weeks, meet with your mentee regularly to discuss progress and learnings from your engagement. At each 1:1, you both should be tracking towards your key results in Lattice and working towards overall milestones.
                  </p>
                  <p className="mt-3 ml-6">
                    Depending on the skill or growth area you're working on, this can also take shape in other formats outside of Lattice, such as a Figjam board, shared Figma file, Notion, or something else entirely. <em>(Reference resources section at the bottom of the play.)</em>
                  </p>
                </li>
                
                <li>
                  <span className="font-semibold">Ongoing feedback</span>
                  <p className="mt-3 ml-6">
                    Be sure to also regularly provide and request feedback on your mentee's progress. Provide feedback to your mentee regularly as you see them continue to grow and work towards their goal. Request feedback from your mentee's project team (where applicable) to ensure they are progressing against key results. Make sure you also request feedback from your mentee to make sure you both are getting the most out of the engagement.
                  </p>
                  <p className="mt-3 ml-6">
                    Consider setting up a specific midpoint or regular retros with your mentee to make sure you're both feeling like you are progressing on your goal. If you need to pivot or adjust, it will be easier to do that earlier in their process. You may also want to consider a meeting with their manager at least once during the engagement to check in.
                  </p>
                  
                  <GreenCard 
                    header="AI Prompt Idea"
                    body={`"list of questions to ask my manager at a midpoint check-in on my growth goal towards improving my presentation skills"`}
                  />
                </li>
                
                <li>
                  <span className="font-semibold">Check in with your mentee's manager</span>
                  <p className="mt-3 ml-6">
                    Around the halfway point, check in with your mentee's manager to discuss progress. They will be able to speak to the Lattice Grow goal and discuss progress in more detail. This is an opportunity to pivot or extend the timeline if needed.
                  </p>
                </li>
                
                <li>
                  <span className="font-semibold">Wrap up</span>
                  <p className="mt-3 ml-6">
                    At the end of the shared goal's due date, you, your mentee, and their manager will assess progress against the goal. If work remains, the engagement may be extended in right sized chunks assuming availability of all parties. Otherwise, the goal is marked as complete. Be sure to request and provide feedback for all parties at the close of the mentorship.
                  </p>
                </li>
              </ol>
              
              <div className="mt-8">
                <BlueCard 
                  header="When You're Done - Request and give feedback"
                  body="Make sure to give 360 feedback to your mentee as you close out your mentorship. Be sure to request feedback from your mentee so you can take that into your next mentorship with someone else."
                />
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Common Pitfalls</h2>
              
              <div className="space-y-6">
                <RedCard 
                  header="Vague and Nebulous Goals"
                  body="While the goal should be owned by your mentee, be sure to guide them in writing specific and actionable goals. Goals that are too broad will be difficult to focus in a short amount of time, and without specific action there may not be any noticeable progress."
                />
                
                <RedCard 
                  header="Not Timeboxed"
                  body="Mentorship should be timeboxed, allowing for success to be more tightly defined and easily achievable. The timeline set for mentorship should be right-sized for the skillset and collaboratively established with the help of your manager and mentee/mentor."
                >
                  <p className="mt-2 text-gray-700 dark:text-red-100" style={{ fontSize: '14px' }}>
                    If you find at the end of your time you need to extend, work with your mentee and their manager to identify the right amount of extension that makes sense.
                  </p>
                </RedCard>
                
                <RedCard 
                  header="No Measure for Success"
                  body="Mentorship engagements are based on clear, actionable steps that are transparent and easy to manage. Be sure to identify those early in the engagement and keep them top of mind every 1:1 to stay on track."
                >
                  <div className="mt-2 space-y-2 text-gray-700 dark:text-red-100" style={{ fontSize: '14px' }}>
                    <p>Be sure to track goals and actions in Lattice to provide progress transparency to make this process easier. They should be owned by both the mentee and mentor, and visible to the mentee's manager.</p>
                    <p>Actions should right-sized and contemplate the bandwidth of both mentor and mentee.</p>
                  </div>
                </RedCard>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Mentorship Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ResourceCard 
                      title="Team & Mentorship Resources"
                      href="https://www.figma.com/files/879788932150384554/project/33204209/Team-%26-Mentorship?fuid=760953545900395345"
                    />
                    <ResourceCard 
                      title="Glow & Grow Template"
                      href="https://www.figma.com/file/mJmJe1a9WvcGckwfxAADM1/glow-%26-grow?type=design&node-id=0%3A1&mode=design&t=G2pIBzLUnm5Zh2Bi-1"
                    />
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