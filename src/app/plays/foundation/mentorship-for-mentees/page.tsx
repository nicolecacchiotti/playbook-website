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

export default function MentorshipForMenteesPage() {
  const title = "Mentorship for Mentees";
  const section = "Foundation";
  const audioUrl = "/audio/Mentorship for Mentees.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={mentorshipAuthors} />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>
            Mentorship engagements provide an opportunity to give and receive feedback on a specific growth area. Any skill or area of professional development can be the focus of a mentorship engagement. As a mentee, you'll work on a focused skill over a set period of time with a mentor as your coach.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={mentorshipArt} 
            title="Mentorship for Mentees"
            labels={['Teams', 'Growth']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                Through mentorship, you will target a specific skill or growth area to work on. Mentorship empowers you to manage your own growth, and is meant to be customized and tailored to your unique personal ambitions and career objectives. Outcomes are initiated and owned by you, the mentee, to give you more control over your personal development.
              </p>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                If you are a solo designer on a project, you will have the extra guidance of someone who can provide feedback on your work and skills you might not get otherwise. You'll be able to collect feedback on a skill you're working on that can help during mid and end of year reviews to show growth and improvement.
              </p>
              
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      You may have identified your own growth area, and will want to ask your manager to help you find a mentor. Your manager may also identify a potential area for growth and ask if you'd be interested in having a mentor help you.
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      Any area you'd like to improve is a potential focus for mentorship. Discrete skills or areas of professional development are all potential candidates for mentorship. Your manager may also identify a potential area for growth through feedback or a review.
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
                      You 🙂
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>Could DRI</h3>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                      Your manager may recommend a mentor to you to start, but you will own the relationship with your mentor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Planning & Prep</h2>
              
              <div className="space-y-6" style={{ fontSize: '14px' }}>
                <div>
                  <h3 className="font-semibold text-gray-400 mb-3" style={{ fontSize: '16px' }}>
                    Review feedback
                  </h3>
                  <p className="mb-4 text-foreground">
                    Review your own lattice feedback and work with your manager to identify specific areas where you'd like to grow. You may also have your own ideas that stretch outside of your project or feedback area that you may want to grow.
                  </p>
                  <p className="mb-4 text-foreground">
                    When refining goals, be as specific as possible, and remember that this mentorship should be time-boxed. Think critically about how to define goals that are specific and actionable.
                  </p>
                  <p className="mb-6 text-foreground">
                    The mentee should be the most accountable person for the success of the mentorship by driving and coming up with their plan.
                  </p>
                  
                  <GreenCard 
                    header="AI prompt idea"
                    body={`"Help me understand how to set a SMART goal focused on [insert growth area]"`}
                  />
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-gray-400 mb-3" style={{ fontSize: '16px' }}>
                    Create a Growth Area in Lattice
                  </h3>
                  <p className="text-foreground">
                    In Lattice under the Grow tab, add a new "Growth Area". Work with your manager to come up with a clear title ("Mentoring: Skill Mentor/Mentee") and add a core competency that closely aligns with the skill you're working on. You'll fill out the rest of this with your mentor after the kickoff and during your mentorship.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <ol className="list-decimal list-inside space-y-8 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Mentorship kickoff</span>
                  <p className="mt-3 ml-6">
                    You, your mentor, and your manager will join a kickoff meeting. In this meeting, you'll align on the scope, timing, and outcomes of the mentorship. Together, you will update your goal in Lattice Grow with milestones and key results, and come up with right-sized chunks of weekly actions.
                  </p>
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Initial meeting with your mentor</span>
                  <p className="mt-3 ml-6">
                    Your mentor will set an agenda prior to this meeting so you know what to expect. You both should be working towards three goals for this first meeting:
                  </p>
                  <ul className="list-disc ml-12 space-y-2 mt-3">
                    <li><span className="font-semibold">Build rapport</span> - learn about each other, discuss personal and professional history, look for common ground.</li>
                    <li><span className="font-semibold">Discuss mentoring topics</span> - such as skill-related, career story, situational advice, and leadership topics.</li>
                    <li><span className="font-semibold">Set initial expectations</span> - tell each other what you expect from the relationship, figure out a regular meeting schedule, verbalize your goals and what success looks like.</li>
                  </ul>
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">During mentorship</span>
                  <p className="mt-3 ml-6">
                    Over the following weeks, meet with your mentor regularly to discuss progress and learnings from your engagement. At each 1:1, you both should be tracking towards your key results in Lattice and working towards overall milestones.
                  </p>
                  <p className="mt-3 ml-6">
                    Depending on the skill or growth area you're working on, this can also take shape in other formats outside of Lattice, such as a Figjam board, shared Figma file, Notion, or something else entirely. <em>(Reference resources section at the bottom of the play.)</em>
                  </p>
                  <p className="mt-3 ml-6">
                    <span className="font-semibold">Come prepared:</span> Bring specific examples from your work, questions you've encountered, or situations where you've tried to apply what you're learning. The more concrete examples you can share, the more targeted guidance your mentor can provide.
                  </p>
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Ongoing feedback and self-reflection</span>
                  <p className="mt-3 ml-6">
                    Actively seek feedback from your mentor on your progress and be open to constructive criticism. Also regularly reflect on your own growth and what you're learning. Consider keeping a reflection journal or notes about key insights from each mentoring session.
                  </p>
                  <p className="mt-3 ml-6">
                    Don't be afraid to ask for feedback from your project team where applicable to see if they notice improvements in the skill area you're working on. This external validation can help confirm your progress and identify areas that still need work.
                  </p>
                  <p className="mt-3 ml-6">
                    Consider setting up specific midpoint check-ins with your mentor to make sure you're both feeling like you are progressing on your goal. If you need to pivot or adjust, it will be easier to do that earlier in the process.
                  </p>
                  
                  <GreenCard 
                    header="AI prompt idea"
                    body={`"Help me reflect on my progress in [skill area] and create questions to ask my mentor about areas where I'm still struggling"`}
                  />
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Apply learnings in real work</span>
                  <p className="mt-3 ml-6">
                    Look for opportunities to practice and apply what you're learning in your day-to-day project work. Share these experiences with your mentor - both successes and challenges. This real-world application is crucial for solidifying your growth.
                  </p>
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Midpoint check-in with your manager</span>
                  <p className="mt-3 ml-6">
                    Around the halfway point, check in with your manager to discuss progress on your Lattice Grow goal. This is an opportunity to pivot or extend the timeline if needed, and to get their perspective on improvements they've noticed.
                  </p>
                </li>
                
                <li>
                  <span className="text-xl font-semibold mb-2 text-foreground">Wrap up and assessment</span>
                  <p className="mt-3 ml-6">
                    At the end of the shared goal's due date, you, your mentor, and your manager will assess progress against the goal. If work remains, the engagement may be extended in right-sized chunks assuming availability of all parties. Otherwise, the goal is marked as complete. 
                  </p>
                  <p className="mt-3 ml-6">
                    Take time to reflect on your overall growth and document key learnings that you can reference in future reviews or when mentoring others. Be sure to provide feedback to your mentor about what was most helpful and what could be improved for future mentoring relationships.
                  </p>
                </li>
              </ol>
              
              <div className="mt-8">
                <BlueCard 
                  header="When You're Done"
                  body="Request and give feedback"
                  icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
                >
                  <p className="text-blue-card-text mb-4" style={{ fontSize: '14px' }}>
                    Make sure to request 360 feedback from your mentor as you close out your mentorship. You may also want to consider requesting any feedback from your project teams (if applicable) or anyone else you may have worked with during your mentorship to show growth and progress.
                  </p>
                  <p className="text-blue-card-text" style={{ fontSize: '14px' }}>
                    Additionally, be sure to give feedback to your mentor so they can take that into their next mentorship with someone else.
                  </p>
                </BlueCard>
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Common Pitfalls</h2>
              
              <div className="space-y-6">
                <RedCard 
                  header="Not Being Prepared"
                  body="Mentees should not come to a meeting unprepared, or expect the mentor to drive the conversation or learning."
                />
                
                <RedCard 
                  header="Vague and Nebulous Goals"
                  body="Be specific and actionable with the goal you select (i.e. not 'be a better designer'). Goals that are too broad will be difficult to focus in a short amount of time, and without specific action there may not be any noticeable progress."
                />
                
                <RedCard 
                  header="Not Timeboxed"
                  body="Mentorship should be timeboxed, allowing for success to be more tightly defined and easily achievable. The timeline set for mentorship should be right-sized for the skillset and collaboratively established with the help of your manager and mentee/mentor."
                >
                  <p className="mt-2 text-red-card-text" style={{ fontSize: '14px' }}>
                    If you find at the end of your time you need to extend, work with your mentor and their manager to identify the right amount of extension that makes sense.
                  </p>
                </RedCard>
                
                <RedCard 
                  header="No Measure for Success"
                  body="Mentee should own the measure for success. Mentorship engagements are based on clear, actionable steps that are transparent and easy to manage. Be sure to identify those early in the engagement and keep them top of mind every 1:1 to stay on track."
                >
                  <p className="mt-2 text-red-card-text" style={{ fontSize: '14px' }}>
                    Make sure your goals and actions are established in Lattice to provide progress transparency to make this process easier. Remember they are primarily owned by you, and they should be visible to your mentor and manager.
                  </p>
                  <p className="mt-2 text-red-card-text" style={{ fontSize: '14px' }}>
                    Actions should right-sized and contemplate the bandwidth of both mentor and mentee.
                  </p>
                </RedCard>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ResourceCard 
                      title="Team & Mentorship Resources"
                      href="https://www.figma.com/files/879788932150384554/project/33204209/Team-%26-Mentorship?fuid=760953545900395345"
                    />
                    <ResourceCard 
                      title="Glow & Grow Template"
                      href="https://www.figma.com/file/mJmJe1a9WvcGckwfxAADM1/glow-%26-grow?type=design&node-id=0%3A1&mode=design&t=G2pIBzLUnm5Zh2Bi-1"
                    />
                    <ResourceCard 
                      title="SMART Goals Framework"
                      href="https://www.mindtools.com/a4wo118/smart-goals"
                    />
                    <ResourceCard 
                      title="Mentoring Best Practices"
                      href="https://deliverypractices.refined.site/space/DELP/2004189185/Mentoring"
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