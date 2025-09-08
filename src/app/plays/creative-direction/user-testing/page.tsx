'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import userTestingArt from '@/../assets/Card Art/User Testing.svg';
import PlayAuthors, { userTestingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function UserTestingPage() {
  const title = "User Testing";
  const section = "Creative Direction";
  const audioUrl = "/audio/User Testing.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={userTestingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            User testing helps get specific feedback on your designs or experience from your target audience. There are many types of user testing that can be used to provide various levels of feedback.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={userTestingArt} 
            title="User Testing"
            labels={['Research', 'Testing']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Conduct the user testing play to get specific feedback on your designs or experience from your target audience. There are many types of user testing that can be run to receive various levels of feedback. Depending on your testing goals and stage of the project, user testing can be run against individual screens, interactive prototypes, up to a fully developed experience.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">At the beginning of a project</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When redesigning an experience, run user testing of the existing product at the beginning of the project. This testing can be valuable when you are auditing a current experience and want to determine what is working well versus what needs to change.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During creative concepting</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Run user testing during the creative concept phase of a project or during a strategy project. This user testing can provide feedback on a direction you want to take an experience, before getting too far down any one path.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During feature sprints</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Run user testing during feature sprints of a design-only or design and development project. With feature sprint user testing, you can get quick feedback on acceptance and usability of designs and flows, allowing for verification and iteration before moving those designs into development. User testing can also help if there are two directions you are deciding between and can provide validation on decisions to the client.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">At the end of a design phase</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Doing a usability test of the full feature set of a product can help determine pain points and areas of confusion before a product launches.
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    This should be planned into both your design schedule and development schedule to allow for iteration time.
                  </p>
                </div>
              </BlueCard>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Reason for Testing</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine your "why." Why are you doing testing, and what are you trying to learn from your tests?
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    It's very important to make sure your internal and client teams are aligned on why you are testing before moving forward.
                  </p>
                </div>
              </BlueCard>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>AI Prompt Ideas</strong> What would some desired outcomes be from user testing a redesigned admin portal for an online curriculum company?
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Subject of Testing</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine your "what." What interfaces and flows should you test?
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    Determine your budget early. You'll need to take this into consideration when determining your what, who, and how — there is a wide range of costs, depending on the type and range of testing and the platform you use.
                  </p>
                </div>
              </BlueCard>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    It's considered a best practice to remove client branding, to reduce bias, if you are testing with a wider audience.
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Test Audience</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine your "who." Who is your target audience for this testing and how will you be able to test with them?
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    If you have a very specific audience, allow time to build up a pool of testers before testing starts.
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Testing format</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine whether your test should have a live moderator, or if it can be run unmoderated:
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li><strong>Moderated:</strong> Think of moderated user testing as an interview or a real time conversation that you're having with a contributor or customer. Moderated user testing is best for projects in the early development stages and with specific audiences.</li>
                <li><strong>Unmoderated:</strong> Unmoderated testing is best for validating concepts and designs quickly with a diverse group of contributors. Unmoderated testing is best for when you have very specific questions you want answered.</li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Types of tests</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Determine the type of testing that will best achieve the needs of your predetermined why/what/what. Some examples are below:
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li><strong>A/B tests:</strong> Run an A/B test if you are comparing multiple versions of an experience. User groups are shown different versions of a particular experience to test which performs better.</li>
                <li><strong>Multivariate tests:</strong> Use multivariate testing to determine which combination of variations performs the best out of all of the possible combinations.</li>
                <li><strong>Usability studies:</strong> Use this test to determine how easy it is for users to complete core tasks.</li>
                <li><strong>Smoke-screen tests:</strong> Run if you need to test whether or not your target users will actually care about what we're creating for them.</li>
                <li><strong>5-second tests:</strong> Run this qualitative test to gauge users first impressions.</li>
                <li><strong>Verbal response:</strong> Use if you want to get video clips and sound bites as a response to a question in the users own words.</li>
                <li><strong>Written response:</strong> Use if you want to get a thoughtful response to a question in the users own words.</li>
                <li><strong>Rating scale:</strong> Best to pair with other testing types. Get quick data from your test (ex: "Overall how likely would you be to use this experience?").</li>
                <li><strong>Concierge tests:</strong> This interview-based test is best when you need to validate solutions with potential customers in their native environment.</li>
                <li><strong>Wizard of Oz tests:</strong> Allow the user to interact with a prototype, with a moderator behind the scenes pulling the levers (a la feels more natural, without being fully developed).</li>
                <li><strong>Card sort and tree tests:</strong> Use this testing when you are designing or evaluating the information architecture of an experience.</li>
              </ul>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>AI Prompt Ideas</strong> "I'm trying to test the efficiency of a booking flow, what type of testing would be the best to run?" "How do I run a card sort user test?"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Test location</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Decide whether your test should be conducted in-person, or if it can be conducted remotely.
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li><strong>In-Person:</strong> Load the test onto an actual device and watch the user use the experience while you are with them.</li>
                <li><strong>Remote:</strong> Using a third party system we can run user test from afar, gain some additional metrics and take advantage of certain platform audiences.
                  <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>a. Usertesting.com</li>
                    <li>b. Useberry</li>
                    <li>c. Lookback</li>
                    <li>d. Usability Hub</li>
                    <li>e. UserZoom</li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Build your Test</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Create your testing prompts to base your prototype and testing plan on, and define your screening questions to find testers within your target audience.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Create your prototypes</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Create a prototype or set screens up for testing (if it isn't a developed prototype). Figma or Invision are both good options here for prototypes that are easy to share and can be accessed without an account.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Script</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Write a testing script based on your prompts and prototype flow.
              </p>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>AI Prompt Idea</strong> 'I'm trying to test the efficiency of a booking flow, can you write a script of potential questions I should ask'
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">4. Test</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Complete a test run. Always do at least one test run of your test and script with a user (could be a project teammate) before starting your real tests.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Run</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Run your actual tests. This step widely varies based on the type of test you are running. If it's an unmoderated test, this could be as simple as pushing a launch button. If this is a moderated test, your involvement will be much higher.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Results</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Evaluate your results. Collect your data from your tests (quantitative and qualitative). Typically these results are pulled together into a report to share out your findings.
              </p>
              
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
                      <li>What were the findings of your test?</li>
                      <li>Do you have the answers you need to move forward or do you need to run additional tests?</li>
                      <li>What are your recommendations coming out of the testing? What actions need to happen now?</li>
                    </ul>
                    <p className="mt-4 mb-2 text-blue-card-header font-semibold">Share your findings with client</p>
                    <p className="mb-2">Pull together a client presentation that answers the following questions:</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>The goal of testing</li>
                      <li>What testing was run (type of tests, audience)</li>
                      <li>The results of your tests</li>
                      <li>Recommendations</li>
                    </ul>
                  </div>
                }
              />
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
              
              <RedCard
                header="Quality Questions"
                body="A user test is only as good as the questions being asked. If you are writing your test plan/prompts, be sure that you aren't asking leading or limiting questions."
              />
              
              <RedCard
                header="Make It Natural"
                body="Unnecessary confusion derails your test. If you are showing a prototype or have fake data anywhere in your test, make sure that it is realistic for your user and the test case. You don't want placeholder information to distract and confuse your user. Similarly, try to make sure click areas are accurate and easy to navigate."
              />
              
              <RedCard
                header="Adequate Sample Size"
                body="False results from incorrect audience or environment. Only testing a narrow audience or users in an environment very different from where they will be using the product could lead to false results for an experience."
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