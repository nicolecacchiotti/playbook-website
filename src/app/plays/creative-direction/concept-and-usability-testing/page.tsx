'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import conceptUsabilityTestingArt from '@/../assets/Card Art/DesignUsabilityTesting.svg';
import PlayAuthors from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ConceptUsabilityTestingPage() {
  const title = "Concept & Usability Testing";
  const section = "Creative Direction";
  const audioUrl = "/audio/Concept & Usability Testing.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">Concept and usability testing surface users insights about your designs or experience from a target audience. These insights can guide design decisions, reduce risk, and instill client confidence. There are a variety of testing methods, and the best method depends on the designs and what questions you have about those designs (i.e., your testing goals).</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={conceptUsabilityTestingArt} 
            title="Concept & Usability Testing"
            labels={['Testing', 'Usability']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Concept and usability testing surface user insights about your designs or experience from a target audience. These insights can guide design decisions, reduce risk, and instill client confidence. There are a variety of testing methods, and the best method depends on the designs and what questions you have about those designs (i.e., your testing goals).
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                So how do you choose between concept and usability testing?
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Concept testing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Gathers user feedback about and reactions to key feature and design concepts, evaluating feature value and design direction(s).
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Usability testing</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Evaluates users' ability to accomplish key tasks effectively, efficiently, and with satisfaction, optimizing the user experience, particularly for high-risk features and tasks.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">At the beginning of a project: <span className="font-normal">Usability benchmarking</span></h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When redesigning an experience, evaluate the usability of the existing product at the beginning of the project (i.e., baseline). This testing can be valuable when you are auditing a current experience and want to determine what is working well versus what needs to change. This will also providence evidence for the value of your changes when compared to usability of the redesigned experience.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During creative concepting: <span className="font-normal">Concept testing</span></h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Run concept testing during the creative concept phase of a project or during a strategy project. This type of testing can provide feedback on a direction you want to take an experience, before getting too far down any one path. Users typically respond to multiple design concepts at a lower fidelity, as opposed to high fidelity screens or prototypes.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During feature sprints: <span className="font-normal">Usability testing</span></h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Run usability testing during feature sprints of a design-only or design and development project. With feature sprint usability testing, you can get quick feedback on usability of designs and flows, allowing for verification and iteration before moving those designs into development. Usability testing includes evaluation of users' success, efficiency, and satisfaction completing a task. Usability testing can also help if there are two directions you are deciding between and can provide validation on decisions to the client.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">At the end of a design phase: <span className="font-normal">Usability testing</span></h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Doing a usability test of the full feature set of a product can help determine pain points and areas of confusion before a product launches. This information can inform a final round of tweaks to optimize the user experience or set up for a round of fast follows.
              </p>
              
              <BlueCard
                header="This should be planned into both your design schedule and development schedule to allow for iteration time."
                body=""
              />
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <BlueCard
                header="Before you dive into planning, reach out to the Usability Testing Help Desk! If you have about $1000 in your project budget, you can get research support for testing!"
                body=""
              />
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Reason for Testing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Determine your "why." Why are you doing testing, and what are you trying to learn from your tests?
              </p>
              
              <BlueCard
                header="It's very important to make sure your internal and client teams are aligned on why you are testing before moving forward."
                body=""
              />
              
              <BlueCard
                header="AI Prompt Ideas"
                body="Imagine you are a digital product designer working on usability testing for a company online training for instructors dashboard for an online curriculum company. How would you explain the value of usability testing to your client at the online curriculum company?"
              />
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Subject of Testing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Determine your "what." What interfaces and flows should you test?
              </p>
              
              <BlueCard
                header="Determine your budget early. You'll need to take this into consideration, when determining your what, who and how – there is a wide range of costs depending on the type and range of testing and the platform you use."
                body=""
              />
              
              <BlueCard
                header="It's considered a best practice to minimize variables, to reduce bias. If you are testing with a specific device, the same device and version should be used for all participants for the entire audience."
                body=""
              />
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Test Audience</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Determine your "who." Who is your target audience for the testing and how will you be able to test with them? The number of participants you will need varies based on the type of test you want to run and the questions you want to answer.
              </p>
              
              <BlueCard
                header="If you have a very specific audience, allow time to build up a pool of testers before testing starts. WillowTree uses User Interviews for more custom participant recruitment. You will need to connect with the research team if you'd like to use this service."
                body=""
              />
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Testing format</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Determine whether your test should have a live moderator, or if it can be run unmoderated.
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Moderated:</strong> Think of moderated user testing as an interview or a real time conversation that you're having with a contributor or customer. Moderated testing is best for projects in the early development stages, with specific audiences and lower fidelity designs. Always record moderated testing if possible.</li>
                <li><strong>Unmoderated:</strong> Unmoderated testing is best for validating concepts and testing quickly with a diverse group of contributors. Unmoderated testing is best for when you have very specific questions you want answered about a higher fidelity design or prototype. You will need to decide if you are going to record unmoderated testing.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Types of tests</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Determine the type of testing that will best achieve the needs of your predetermined why/who/what. Some examples are below:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3">
                <li><strong>Comparison / preference tests:</strong> Run an comparison test if you are deciding between multiple versions of an experience. User groups are shown different versions of a particular experience to see which performs better. Try to avoid simply asking which design users prefer. Instead, ask which design users prefer for a specific purpose.</li>
                <li><strong>Prototype / navigation tests:</strong> Use this test to evaluate the extent to which users can complete key tasks effectively, efficiently, and with satisfaction. You need to include follow-up rating scales (e.g., On a scale of 1-5, how difficulty (1) or easy (5) was it to complete the task?) or open-ended questions.</li>
                <li><strong>First click tests:</strong> Run this test to identify what users would interact with first on the screen given a specific prompt.</li>
                <li><strong>5-second tests:</strong> Run this qualitative test to gauge users first impressions of a screen.</li>
                <li><strong>Card sort / tree tests:</strong> Use these tests when you are designing or evaluating the information architecture of an experience. Card sort tests ask users to sort menu items themselves, while tree tests ask users to navigate to specific menu items in a set IA.</li>
                <li><strong>Smoke tests:</strong> Run if you need to test whether or not your target users will actually care about what you're creating for them.</li>
              </ul>
              
              <BlueCard
                header="AI Prompt Ideas"
                body="I'm trying to evaluate the efficiency of a booking flow for a new company app I have high fidelity screens for the booking flow, but they are not connected into a dynamic prototype. What type of usability testing would be best for this?

What are the specific steps to run a card sorting test?"
              />
              
              <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">Test location</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Decide whether your test should be conducted in-person, or if it can be conducted remotely.
              </p>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>In-Person:</strong> Load the test onto an actual device and watch the user use the experience while you are with them. This is very rare at WillowTree.</li>
                <li><strong>Remote:</strong> Using a third party system we can user test from afar, gain some additional metrics and take advantage of natural platform usability. WillowTree recommends Lyssna for the majority of unmoderated concept and usability testing, and Lookback for the majority of moderated concept and usability testing. Connect with a research team member to get access to our WillowTree accounts.</li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">1. Build your Test</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Create your testing prompts to base your prototype and testing plan on, and define your screening questions to find testers within your target audience.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">2. Create your prototypes</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Create a prototype or set screens up for testing (if it isn't a developed prototype). Figma or Invision are both good options here for prototypes that are easy to share and can be accessed without an account.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">3. Script</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Write a testing script based on your prompts and prototype flow.
                </p>
                
                <BlueCard
                  header="AI Prompt Idea"
                  body="'I'm testing the efficiency of a booking flow, can you write a script of potential questions I should ask'"
                />
                
                <h3 className="text-lg font-semibold mb-3 mt-8 text-gray-800">4. Test</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Complete a test run. Always do at least one test run of your test and script with a user (could be a project teammate) before starting your real tests.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">5. Run</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Run your actual tests. This step widely varies based on the type of test you are running. If it's an unmoderated test, this could be as simple as pushing a launch button. If this is a moderated test, your involvement will be much higher.
                </p>
                
                <h3 className="text-lg font-semibold mb-3 text-gray-800">6. Results</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Evaluate your results. Collect your data from your tests (quantitative and qualitative). Typically these results are pulled together into a report to share out your findings.
                </p>
              </div>
              
              <BlueCard
                header="When You're Done"
                body="Teams should feel confident in answering:

• What were the findings of your test?

• Do you have the answers you need to move forward or do you need to run additional tests?

• What are your recommendations coming out of the testing? What actions need to happen now?

Share your findings with client

Pull together a client presentation that answers the following questions:

• The goal of testing

• What testing was run (type of tests, audience)

• The results of your tests

• Recommendations"
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <RedCard
                header="Leading Questions"
                body="Avoid asking leading questions that guide users toward a specific answer. Instead of 'Do you like this design?', ask 'What are your thoughts on this design?'"
              />
              
              <RedCard
                header="Testing Too Late"
                body="Don't wait until the end of the project to test. Early and frequent testing throughout the design process provides more valuable insights and allows for iteration."
              />
              
              <RedCard
                header="Ignoring Context"
                body="Make sure your testing environment and tasks reflect real-world usage as much as possible. Testing in artificial conditions may not reveal actual user behavior."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="DQ Usability Testing"
                  href="#"
                />
                <ResourceCard
                  title="UserTesting.com Guide"
                  href="#"
                />
                <ResourceCard
                  title="Usertesting.com"
                  href="#"
                />
                <ResourceCard
                  title="Useberry"
                  href="#"
                />
                <ResourceCard
                  title="Lookback"
                  href="#"
                />
                <ResourceCard
                  title="Usability Hub"
                  href="#"
                />
                <ResourceCard
                  title="UserZoom"
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