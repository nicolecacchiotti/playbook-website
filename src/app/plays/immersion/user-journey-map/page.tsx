'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userJourneyMapArt from '@/../assets/Card Art/UserJourneyMaps.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import GreenCard from '@/components/GreenCard';
import ResourceCard from '@/components/ResourceCard';
import PlayAuthors, { userJourneyMapAuthors } from '@/components/PlayAuthors';
import { useState } from 'react';
import { Lightbulb, ListCheck } from 'lucide-react';

export default function UserJourneyMapPage() {
  const title = "User Journey Map";
  const section = "Immersion";
  const audioUrl = "/audio/User Journey Map.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={userJourneyMapAuthors} />
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground" style={{ fontSize: '14px' }}>
            A user journey map describes the process by which a user navigates through tasks to complete a goal. This allows the team to view the product objectively from the user’s point of view while gaining an understanding of their tasks and pain-points and surfacing areas of improvement or potential opportunities.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={userJourneyMapArt} 
            title="User Journey Map"
            labels={['Research', 'UX']}
          />

          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>

          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Why to use this play</h2>
              <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                A user journey map represents the process that a user or multiple users go through to complete tasks. This deliverable allows the team to view the product objectively through the user’s point of view. It provides insight into the user’s actions, thoughts, and emotions to help the designer work towards creating a better user experience.
              </p>

              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2 text-foreground">When to use this play</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>You want to understand how users navigate through the product</h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      Not all users are alike. It is important to understand how specific users with various goals and subgoals navigate the product. Understanding the wants and needs of a user makes it easier to create an experience that benefits them. The journey map can be used to highlight the pain-points and outline potential solutions for optimization within their processes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>A comprehensive view of the product is needed</h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      To improve or redesign the product to meet users needs and expectations, the team must first understand the product. Observing how users interact with the product from beginning to end provides the holistic view needed to start an engagement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>We’re redesigning a product</h3>
                    <p className="text-muted-foreground mb-4" style={{ fontSize: '14px' }}>
                      Before redesigning a product, a journey map helps the team understand how the product functions in its current state. If major changes are made, consider the elements or processes that should remain unchanged and provide reasoning if making adjustments to process and workflows.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2" style={{ fontSize: '14px' }}>When qualitative research is needed</h3>
                    <p className="text-muted-foreground" style={{ fontSize: '14px' }}>
                      In presenting the final product to the client, the team will need to be able to provide an explanation for each of their choices. The user journey map, coupled with the product researcher’s findings, will give the team results that can be used for qualitative updates based on overall feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="mt-8" id="process-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">Planning & Prep</h2>
              <ol className="list-decimal list-inside space-y-8 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Identify project and business goals</span>
                  <p className="ml-6 mt-2">
                    The team must have a good understanding of the project goals and business goals to determine whether they align with the user’s goals. Part of the business goal should be to create a delightful and effective user experience; even if that is not explicitly stated, you should keep it in mind during this exercise.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Create clear expectations</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Are users able to find what they are looking for?</li>
                    <li>What are the current pain-points? The goal of this is not to solve pain points but to become aware of the pitfalls that a user experiences throughout their journey.</li>
                    <li>Is it easy to navigate through the product?</li>
                    <li>What type of prototype are we building? Examples of potential prototypes: animation (Lottie loading animation), gesture (ex: long press triggers a loading animation around tap area), screen transitions or screen to screen (what you have listed), simple build in an app (ex: build a collection view in x-code to see how tap animations work between different devices)</li>
                  </ul>
                </li>
                <GreenCard 
                  header="AI Prompt Idea"
                  body="I'm designing a custom learning pathway builder for students in grades K-12, what are some common points of user friction when engaging students in online education platforms? Follow up with 'what would be some ideas for increasing engagement and interactivity?'"
                  icon={<Lightbulb className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
                />
                <li>
                  <span className="font-semibold">Competitor market research</span>
                  <p className="ml-6 mt-2">
                    Market research can be used to compare and understand the industry as well as provide information needed to create products that are better aligned with customer goals and business needs.
                  </p>
                </li>
                <GreenCard 
                  header="AI Prompt Idea"
                  body="What are the most successful online learning platforms that use progress tracking and can you explain how they used gamification"
                  icon={<Lightbulb className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
                />
                <li>
                  <span className="font-semibold">Choose medium and format</span>
                  <p className="ml-6 mt-2">
                    A user journey map is a visual deliverable. The phases, goals, and actions need to be formatted in a way that is easily digestible. This is accomplished either through a flow or a series of cards (one for each user/scenario). Figma or Figjam are recommended in the creation of a journey map. Regardless of the medium used, the journey map should be formatted to easily share findings with the team and client.
                  </p>
                </li>
                <li>
                  <span className="font-semibold">Take off designer hat, put on user hat</span>
                  <p className="ml-6 mt-2">
                    This is especially important because each user has specific goals and is approaching the product under different circumstances. Try not to get ahead by trying to solve for every pain-point. It is more important to outline the role, actions, and emotions of the user by recording their process rather than to work towards solutions.
                  </p>
                </li>
              </ol>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-2 text-foreground">How to run the play</h2>
              <ol className="list-decimal list-inside space-y-8 text-muted-foreground" style={{ fontSize: '14px' }}>
                <li>
                  <span className="font-semibold">Users</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Make a list of user personas. Narrow it down to your top three.</li>
                    <li>Create at least three specific users with a clear narrative. <span className="italic">Example: a recent grad, a first time parent, a future retiree.</span></li>
                  </ul>
                </li>
                <GreenCard 
                  header="AI Prompt Idea"
                  body="What are three possible personas that might use an app to book a road trip across the country, specifically focusing on RV campgrounds"
                  icon={<Lightbulb className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
                />
                <li>
                  <span className="font-semibold">Scenario and goal</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Create a specific scenario. <span className="italic">Example: a recent grad trying to pay off student loan debt, a first time parent trying to financially plan for a baby, a future retiree trying to plan for retirement</span></li>
                    <li>Create one main goal. <span className="italic">Example: looking for ways to financially plan for a baby</span></li>
                    <li>Create one to three subgoals. <span className="italic">Example: starting a college fund and finding affordable child care options</span></li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">Phases</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Create at least three phases.</li>
                    <li>The phases need to form a sequence of events.</li>
                    <li>Keep the phases high level. <span className="italic">Example: landing page, search, results</span></li>
                  </ul>
                </li>
                <GreenCard 
                  header="AI Prompt Idea"
                  body="What would the phases of the user journey be to book a multi-stop roadtrip for the personas mentioned earlier"
                  icon={<Lightbulb className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
                />
                <li>
                  <span className="font-semibold">Actions, thoughts, and emotions</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Create these sections for each phase:</li>
                    <li className="ml-6">Action (I am): What is the user doing in this phase?</li>
                    <li className="ml-6">Thought (I think): What is the user thinking in this phase?</li>
                    <li className="ml-6">Emotions (I feel): What is the user feeling in this phase?</li>
                  </ul>
                </li>
                <GreenCard 
                  header="AI Prompt Idea"
                  body="What are some potential pain points that the personas may encounter during the user journey of booking a multi-stop RV road trip"
                  icon={<Lightbulb className="w-6 h-6 text-teal-700 dark:text-teal-300 mb-2" />}
                />
                <li>
                  <span className="font-semibold">Opportunities</span>
                  <ul className="list-disc ml-8 mt-3 space-y-2">
                    <li>Consider the next steps.</li>
                    <li>Identify internal ownership.</li>
                    <li className="ml-6 list-none">a. Who on the team can be responsible for ensuring the completion of certain steps?</li>
                    <li>Identify the biggest pitfalls for the user.</li>
                    <li>Consider the KPIs for implementation.</li>
                  </ul>
                </li>
              </ol>

              <BlueCard
                header="When You're Done"
                body="Teams should feel confident in answering:"
                icon={<ListCheck className="w-6 h-6 text-blue-700 mb-2" />}
              >
                <ul className="list-disc ml-6 space-y-1 text-gray-700 dark:text-white">
                  <li>What went well? What did not go well? Was anything unexpected?</li>
                  <li>What are the potential opportunities and general lift required to create a better user experience?</li>
                </ul>
              </BlueCard>
            </div>
          )}

          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold text-foreground">Common Pitfalls</h2>
              <RedCard
                header="ALIGN ON FIDELITY"
                body="Early on in the process figure out the right fidelity of the output and discussion based on audience."
                className="mt-4"
              />
              <RedCard
                header="CREATING THE USER(S)"
                body="Don’t overthink it. Yes, the user needs to be specific, but not hyper-specific. All that matters is that the user feels defined and not similar to the others. It’s best to start out with a list of various users and then narrow it down. Also, if you have a product researcher, they can be very helpful with this step."
              />
              <RedCard
                header="TOO MANY OPTIONS/PATHS"
                body="Try to limit your phases to 3-4 and your users to 2-3. Keep the scenario simple and don’t focus on the subgoals. The point of this exercise is to get a glimpse into the user’s perspective. You can’t account for everything and you don’t need to. More often than not, your findings will back up what is found through actual user testing. Think of this exercise as a way to get familiar with some potential users while you’re getting started on the project."
              />
              <RedCard
                header="FOCUSING ON THE NEGATIVES"
                body="Yes, there are going to be “stops” and not every user will complete every goal; or even their main goal. It’s just as important to note what went well and what components provide a good user experience. The client already knows that there product needs to change, so they’d probably like to hear the positives of their current product."
              />
              <RedCard
                header="LIMITED KNOWLEDGE OF JOURNEY"
                body="Highly specialized or technical processes require individuals who are aware of or involved in the processes. Consider the team makeup from the client-side when conducting a journey map workshop and additional communication required to outline and speak to the user journey effectively."
              />

              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4 text-foreground">Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ResourceCard
                    title="Analyses & Deliverables – Journey Map"
                    href="https://www.figma.com/file/VsWaCZSvwCNdqw2V5XFCXN/Analyses-%26-Deliverables?node-id=2%3A12287&t=vGBNxh45NWqy50ua-1"
                  />
                  <ResourceCard
                    title="User Journey Map (Workshop) – FigJam"
                    href="https://www.figma.com/file/vhgSNbj8mudrVuwaNY3Kz9/User-Journey-Map-(Workshop)?node-id=0%3A1&t=dMUHnXOybb9bnPuv-1"
                  />
                  <ResourceCard
                    title="Analyses & Deliverables – Additional"
                    href="https://www.figma.com/file/VsWaCZSvwCNdqw2V5XFCXN/Analyses-%26-Deliverables?node-id=14%3A12422&t=vGBNxh45NWqy50ua-4"
                  />
                  <ResourceCard
                    title="BL App Concepting – Journey Map"
                    href="https://www.figma.com/file/uTwb1azuTKSmcg98rIMxLF/BL-App-Concepting?node-id=272%3A2465&t=U5f74HjjZeaUm1Mo-4"
                  />
                  <ResourceCard
                    title="WWE Journey Map"
                    href="https://www.figma.com/file/vxnfXH0OwY0p3AljNOrGmQ/WWE-Journey-Map?node-id=1321%3A113523&t=WtASsdvWOSHPtcul-4"
                  />
                  <ResourceCard
                    title="NN/g: Journey Mapping 101"
                    href="https://www.nngroup.com/articles/journey-mapping-101/?lm=customer-journey-mapping&pt=article"
                  />
                  <ResourceCard
                    title="Adobe XD: How to Create a Customer Journey Map"
                    href="https://xd.adobe.com/ideas/process/user-research/how-to-create-a-customer-journey-map/"
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