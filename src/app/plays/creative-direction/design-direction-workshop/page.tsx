'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import designDirectionWorkshopArt from '@/../assets/Card Art/DesignDirectionWorkshop.svg';
import PlayAuthors, { designDirectionWorkshopAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function DesignDirectionWorkshopPage() {
  const title = "Design Direction Workshop";
  const section = "Creative Direction";
  const audioUrl = "/audio/Design Direction Workshop.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={designDirectionWorkshopAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            A design direction workshop addresses ambiguity around the high level design direction of a product. Even if there's already a baseline level of understanding around the product design, this will be useful if further contextualization is needed.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={designDirectionWorkshopArt} 
            title="Design Direction Workshop"
            labels={['Workshop', 'Design']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The design direction workshop is conducted in order to create a cohesive vision between the WillowTree design team and client stakeholders. Visual language is incredibly subjective, and this workshop aims to remove subjectivity by aligning on target visuals and establishing a shared expressive visual language with stakeholders.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                This can be done with clients who have both existing and non-existing brands.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">When there is no definitive design direction</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When the client either has limited brand assets or no existing definitive design direction, system, or constraints.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">In the discovery phase</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Early in the discovery phase, when there's generally a higher level of ambiguity across the project disciplines. It can be helpful to have some definition around product goals in advance, but it isn't necessary.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">When their designs lacks clarity</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When the existing design or brand artifacts do not provide enough clarity into how design can best approach this product.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">To support evolution</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Guidelines exist for the brand but the expectation is to evolve the existing design to better fit the product.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Stakeholder alignment</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In situations that can benefit from team and stakeholder alignment on the product's design tenets.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Gather images</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A key component of the workshop is getting the stakeholders to react to a large sampling of images. Their reactions will help contextualize and build the vocabulary of the design direction. Ideally, 80-100 images of varying subject matter, visual styles, design specific elements (user mockups, abstract imagery, and photography allows for a more textured discussion from which we can begin to draw out ideas. If the workshop is to be done IRL, ensure there is prep time allotted for printing, cutting and arranging the photos in the physical space.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "I'm going to run a Design Direction Workshop for a fintech client that is building an expense app, can you give me a list of different inspiration images I should look to source?"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">2. Gather supplies</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                White board markers of various colors, voting dots, sticky notes, regular markers. These will be used by the facilitator to set up and drive the workshop, but will also be used by the participants, so ensure there are plenty of supplies for everyone. Focus or ambient music may be helpful to energize a room — worth considering for the dot voting activity.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">3. Assign and onboard the scribe role</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This could be someone else from the team or another designer who is available. They play a crucial role in capturing and tallying keywords said by participants in the workshop.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">4. If the workshop is being done virtually</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Set up the virtual space in the preferred whiteboarding tool of choice, but ensure the tool has the ability to display a large board of images, augment dot voting, capture notes, affinity mapping sticky notes in real-time, and draw rough charts/visuals. Figjam and Mural are possible tools to consider.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Table-set with participants on the goal of the workshop</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                A brief synopsis of activities, and what next steps or artifacts are enabled by the workshop. The idea is to get the client excited to participate to help ensure the fruitful discussion of ideas during the workshop.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">6. Setting up the space (IRL) or Figjam/Mural (virtual)</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Setting up the space (IRL) or Figjam/Mural (virtual)
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Define the instructions for the workshop. This can include the following:
              </p>
              
              <ol className="list-decimal ml-6 space-y-2 mb-6 text-gray-700">
                <li>Define the goal of the workshop.</li>
                <li>List the deliverables stemming directly from workshop.</li>
                <li>Remind participants of what we've heard so far in regards to design.</li>
                <li>List the activities participants can expect in the workshop.</li>
                <li>Provide guidance on what stakeholders can look out for when reacting to images (things like color, feeling, tone, UI, brand positioning) and what not to react to.</li>
                <li>Optionally spell out any additional rules or instructions (how dot voting works, if participants can vote multiple times on the same image, etc.).</li>
              </ol>
              
              <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
                <li>Lay out the image board of ~80-100 varying images (or tape images to a wall if IRL).</li>
                <li>Draw a scale chart with the values of "what (brand/product) is not" and "what (brand/product) is."</li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">1. Introduction to the workshop</h2>
                <span className="text-sm font-normal text-gray-500">~10 min</span>
              </div>
              
              <ul className="list-disc ml-6 space-y-3 mb-6 text-gray-700">
                <li>Make introductions. Be mindful of any new stakeholders. Aim to make everyone comfortable and feel included.</li>
                <li>Give a walkthrough of the workshop goals, outcomes, deliverables, etc. from 6a - 6g of the Planning and Prep section of the workshop. Ensure you touch on goals, desired outcomes, and what this workshop enables the team to do.</li>
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">2. React to images</h2>
                <span className="text-sm font-normal text-gray-500">~30 min</span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Introduce the image board. Explain the wide sampling of images as a way for the workshop to surface a wide breadth of thoughts and reactions. Instruct the participants to view all of the images through the lens of "Does this speak to the brand/product?"
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-6 text-gray-700">
                <li>
                  Ask the participants to dot-vote on images they feel strongly for or against (if fewer than 2-3 participants, feel free to open voting on images they feel any reaction to).
                  <ol className="list-decimal ml-6 space-y-2 mt-2">
                    <li>For dot-voting, assign a color for positive connotations and a separate color for negative connotations.</li>
                    <li>Optionally, you could allow participants to cast multiple votes (for example: up to 3 votes, per participant, per image) to more granularly express their agreement or disagreement with an image. This is useful in smaller groups with fewer participants.</li>
                    <li>Internally determine logic governing what images get taken into the next round. For example: "images with two or more votes" or "images with any number of votes."</li>
                    <li>If needed, reiterate guidance on what participants should and shouldn't react to as noted in step 6e of Planning and Prep.</li>
                    <li>Again, relate to the prompt of "Does this speak to the brand/ product?"</li>
                  </ol>
                </li>
                <li>Encourage the participants to jot down notes on stickies next to images if they want to capture thoughts in the moment. This will help us smoothly open up talking points when facilitating the discussion in a later step.</li>
                <li>Collect any patterns of images with a disproportionate amount of attention, whether positive or negative. This can be an early indicator of a subject matter that is key to defining what the product is or isn't. Ensure to carry these images through to the discussion phase.</li>
                <li>Sense if there is an opportunity to preemptively begin the affinity mapping step while the participants are wrapping up the last handful of images.</li>
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">3. Affinity map and scale chart</h2>
                <span className="text-sm font-normal text-gray-500">~5 min</span>
              </div>
              
              <ul className="list-disc ml-6 space-y-3 mb-6 text-gray-700">
                <li>See what images have reactions and notes.</li>
                <li>Begin transferring reacted images to the area of the room or document where the scale chart has been set up. Keep in mind the logic set up in step 2a of the How to Run the Play segment.</li>
                <li>From here, map images against the scale chart. Images with the most positive votes will map onto the positive end of the spectrum, while images with positive votes will map to the other end. The images with the most reaction from participants should skew towards the ends of the chart.</li>
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">4. Facilitate discussion</h2>
                <span className="text-sm font-normal text-gray-500">~15 min</span>
              </div>
              
              <ul className="list-disc ml-6 space-y-3 mb-6 text-gray-700">
                <li>The goal is to uncover logic behind the participants' votes, through their own words, so that the design team is able to gather key insight into what the design direction is and is not.</li>
                <li>You as the facilitator will be tasked with posing questions to the participants. These questions aim to uncover the logic behind the participant's reactions.</li>
                <li>The logic and reasoning you surface will inform the key takeaways.</li>
                <li>With images charted, begin unpacking the reactions participants felt toward the images. Ask questions that use "how" and "why."</li>
                <li>As is often the case, the participant may not articulate answers that could serve as impactful.</li>
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">5. Record discussion</h2>
                <span className="text-sm font-normal text-gray-500">N/A</span>
              </div>
              
              <ul className="list-disc ml-6 space-y-3 mb-6 text-gray-700">
                <li>If there is a scribe present during this workshop, their role is to write down keywords mentioned during the discussion to describe what the design direction is or is not.</li>
                <li>Keywords can be descriptive language (e.g., modern, calm, trustworthy) and as sometimes adjectives. However key words can also be looser ideas (e.g., "I want it to feel like Apple," or "The app should influence the user to say yes.") Both are important to record.</li>
                <li>Tally the number of times keywords are used in the discussion. This will help give an early sense of the relevancy of the keyword.</li>
                <li>If there isn't a scribe present, record the workshop in order to complete this work after the fact.</li>
              </ul>
              
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">6. Synthesize keywords into a word cloud deliverable</h2>
                <span className="text-sm font-normal text-gray-500">4hrs</span>
              </div>
              
              <ul className="list-disc ml-6 space-y-3 mb-6 text-gray-700">
                <li>The goal is to categorize keywords surfaced during the workshop into larger themes within a single document that the team and client partners can align on.</li>
                <li>Begin by affinity mapping the keywords.</li>
                <li>Look at the ways in which keywords are similar.</li>
                <li>Identify the themes that could serve as the umbrella for a grouping of keywords.</li>
                <li>Once affinity mapped, reference the keyword tallies created in step 5. The tally data could be used to prioritize of the keywords within each theme.</li>
                <li>Optionally, you could explicitly indicate the tallies associated with each keyword in the word cloud document.</li>
              </ul>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "What are examples of foundational design tenets and principles"
                  </p>
                </div>
              </BlueCard>
              
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
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                      <li>"What are the foundational design tenets unique to this product that we should adhere when designing?"</li>
                      <li>"What are the key design themes we can leverage when talking about the design internally and with the client?"</li>
                    </ul>
                    <p className="mb-3 text-blue-card-header font-semibold">Present your findings to client</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li>It is best to walkthrough the findings of the word cloud with the team and the client. Be sure to cover each theme and how the keywords within each theme help to flesh out the larger idea of the theme. If you've indicated the tally of each keyword, be sure to point that out in the discussion as well.</li>
                      <li>If the client stakeholder is aiming to socialize the findings of this workshop with their own team, it would be helpful to approach the design of the word cloud document in a concise and approachable way.</li>
                      <li>The themes synthesized from this workshop will be relevant throughout the lifespan of the project. Be sure to surface these themes repeatedly in presentations and conversations about the product. These themes will become more essential to the baseline understanding of the product the more they are normalized.</li>
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
                header="General Risks"
                body="Number of participants\n\nOpenness to participation\n\nSingular loud voice\n\nNot having help/scribe"
              />
              
              <RedCard
                header="Avoid Bringing Bias to the Workshop"
                body="Make sure the chosen workshop images are from a diverse of visual directions and aesthetics, so that the client has a variety of different directions to choose from.\n\nAvoid leading the client to a desired outcome. The designer hosting the workshop should always lead the discussion with questions, only helping to supply the client with visual language to help them describe their preference."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Design Direction Workshop"
                  href="#"
                />
                <ResourceCard
                  title="Nasdaq Creative Direction Workshop"
                  href="#"
                />
                <ResourceCard
                  title="Word Cloud"
                  href="#"
                />
                <ResourceCard
                  title="Special Olympics"
                  href="#"
                />
                <ResourceCard
                  title="Sun Outdoors"
                  href="#"
                />
                <ResourceCard
                  title="Key Words Spreadsheet"
                  href="#"
                />
                <ResourceCard
                  title="Nielsen Norman, Dot Voting: A Simple Decision-Making and Prioritizing Technique in UX"
                  href="#"
                />
                <ResourceCard
                  title="7 Handpicked Tips for Awesome Design Workshops"
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