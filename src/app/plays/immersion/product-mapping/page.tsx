'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import productMappingArt from '@/../assets/Card Art/ProductMap.svg';
import PlayAuthors, { productMappingAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ProductMappingPage() {
  const title = "Product Mapping";
  const section = "Immersion";
  const audioUrl = "/audio/Product Mapping.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={productMappingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            Product mapping involves creating visual diagrams that represent user journeys and product architecture. These diagrams are living artifacts that help identify pain points, areas for improvement, and opportunities for new features and services.
          </p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={productMappingArt} 
              title="Product Mapping"
              labels={['Product', 'Strategy']}
            />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Product maps are essential tools that help create user-friendly, optimized products that meet user needs and improve overall experience. Product map structure and setup vary based on user, client, and product needs, though they all are crucial for:
              </p>
              
              <ul className="list-disc ml-6 space-y-4 mb-8 text-gray-700">
                <li>
                  <strong>User-centered design</strong>: Ensuring end product is designed with users in mind. Helps identify needs and preferences so designers can create a product that meets those needs.
                </li>
                <li>
                  <strong>Organization and clarity</strong>: Providing clarity and organization for complex systems, leading to improved user experience with easier navigation and clear infrastructure and interactions.
                </li>
                <li>
                  <strong>Optimization and roadmapping</strong>: Identifying pain points, areas for improvements, potential for future features and services for an optimal product. Product maps can also assist in product roadmapping and planning future work streams with clients.
                </li>
                <li>
                  <strong>Collaboration</strong>: Serving as a communication tool between designers, developers, other internal team members, and stakeholders. Product maps ensure everyone is on the same page working towards the same goals. Product maps can also allow other team members (developers, stakeholders) to identify gaps or areas of technical complexity.
                </li>
              </ul>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The optimal time for product mapping depends completely on the scope of work and engagement as well as the product needs. Product maps are generally living artifacts, meaning they are continuously being worked on and updated throughout the project cycle.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Early in product design process</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Product maps are often created early in the design process during discovery and research phases. Designers can gather information about user needs, pain points, and behaviors. If there is an existing product, audits may also occur to identify opportunities and feature needs. When created early in the process, product maps can help:
              </p>
              
              <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
                <li>Designers and PMs to plan out work to be done and identify feature prioritization with stakeholders.</li>
                <li>Engineers to provide insight into complexities and identify potential concerns for work to be done.</li>
                <li>The client to understand features and content.</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">During ideation/concepting phase</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Product maps can also be created during conceptual phases of the project cycle. While the team is brainstorming new features and services, product maps can be key for mapping out potential features and journeys. The maps can then be used to evaluate feasibility and identify potential issues before diving into actual feature work.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Throughout the project cycle</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Product maps are living artifacts, which means they are revisited and updated throughout the product cycle as new insights are gained and the product continues to evolve. Through continuous evaluation and iteration, the product map can ensure user needs, business goals, and internal alignment continue to be met.
              </p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">End of development</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Occasionally, product maps are created for external teams and clients for handoff. If this is the case, during the end of development, product maps may be polished in order for external teams to pick up and work from in future workstreams.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Before creating a product map, there are a lot of factors the design team can consider, depending on what type of mapping needs to be done and the scope of work. Those factors include:
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">User research</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Does the team need to complete any user research to gain insights into needs, behaviors, or pain points? Some activities that might be completed before creating a product map include:
              </p>
              
              <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
                <li>Competitive landscapes</li>
                <li>Design audits (if there is an existing product)</li>
                <li>User personas & journeys</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                All of these activities can help bring context to a successful product map.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "I'm an online curriculum company, how should I structure the user flow for managing cohorts of students enrolled in digital classes through their school, consider enterprising abilities."
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Business & stakeholder goals</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Often before creating a product map, the internal team will need to understand business and stakeholder goals for the product. What problems is the product map trying to solve? Collaborate both internally and with stakeholders to figure out the work that needs to be done to create a successful product map. Those activities might include:
              </p>
              
              <ul className="list-disc ml-6 space-y-2 mb-6 text-gray-700">
                <li>Outcomes workshops</li>
                <li>Stakeholder interviews</li>
                <li>North star workshops</li>
                <li>Ideation workshops</li>
                <li>Prioritization workshops (including RICE, MoSCoW Prioritization, and impact vs. effort matrixes)</li>
              </ul>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                All of these activities can uncover the goals for the product mapping work ahead.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "What are some questions to ask key client stakeholders about a trip planner feature they want to create for their rv campground company that has 150 locations"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Tools & techniques</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The team will need to identify the tools and techniques best for their specific type of product map. These include diagrams, flow charts, and other documentation. Pick the appropriate tools and techniques based on the project needs and team preference to start the play.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">1. Gather & organize</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                First, gather and organize all needed content that belongs in the product map. This can include current and future features, sections, pages (if you are working on a website), and other content if your team is creating information-architecture type maps.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Card sorting activities are a great way to accomplish this step, and you can consider things such as prioritization, feasibility, and functionality. If you are working from an existing product that does not have a map, creating and mapping the product as it exists currently may also be a great first step to identify pain points and areas for opportunity.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "What is the ideal information architecture for a product design learning pathway?"
                  </p>
                </div>
              </BlueCard>
              
              <BlueCard>
                <div>
                  <p className="text-gray-700">
                    Fidelity depends entirely on need. What will the product map be used for? If used internally for feature prioritization and work to be done, consider low-fi outputs like FigJam. Will it be externally shared with stakeholders and others? Consider a more polished output.
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">2. Define</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Next the team will need to define what the goals of the product are, the priority for those goals, and how the product's features and content can reach those goals. This means defining features and the structure of those features.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                How do the features interact? How is the product structured? What are the golden paths?
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Once these questions are answered, the team will need to define the level of detail required to reflect the goals of the team and product.
              </p>
              
              <BlueCard>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">AI Prompt Idea</p>
                  <p className="text-gray-700 italic">
                    "What is the primary user flow for a user planning a cross country rv trip that plans to stay at multiple RV resort campground locations"
                  </p>
                </div>
              </BlueCard>
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">3. Draft</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Draft out the visual diagram of structure, content, features, and anything else that needs to go into the product map in any way that works for the team. Pen and paper? Figjam? Stickies on a Whiteboard? Do what needs to be done as a team to create a draft for discussion and review.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">5. Refine & Iterate</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Once you have a draft, the team will refine and iterate. This may mean moving the map to Figma and making a polished artifact with a legend that can be handed off as an artifact at the end of a project.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Alternatively, this may mean maintaining the map as an internal artifact that the team references and refreshes based on updated knowledge of needs.
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
                    <ul className="list-disc ml-6 space-y-2 mb-6">
                      <li>Is the product (or product plan) meeting the needs of the user? Are those needs met in an optimal way that is easy and clear?</li>
                      <li>Is everything that is, will be, or planned for in the product accounted for?</li>
                      <li>What are the priorities for the product? What will the priorities be in the future? What's involved in those features or content areas?</li>
                      <li>What is the structure of the product we are building?</li>
                      <li>What are the features the team is working on next? What goes into those features?</li>
                    </ul>
                    <p className="mb-3 text-blue-card-header font-semibold">How to use it</p>
                    <ul className="list-disc ml-6 space-y-2">
                      <li><strong>With product architects and product managers:</strong> Product Maps can help with story pointing and planning sprints, as well as prioritizing the work to be done. Product maps can also be very helpful when considering prioritization changes and shifts in scope of work.</li>
                      <li><strong>With content designers:</strong> Product maps can assist in content mapping and information architecture work.</li>
                      <li><strong>With developers:</strong> Product maps can help designers and developers collaborate to identify technical complexity and necessary lift for sprint planning and design reviews.</li>
                      <li><strong>With stakeholders:</strong> Product maps can help reassure stakeholders about product direction and provide clarity around what will be included in their product to ensure alignment.</li>
                      <li><strong>With designers:</strong> Product maps can help a design team assign and delegate work, as well as provide clarity on which designs need to be worked on and when.</li>
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
                header="Never Reviewing or Updating the Product Map"
                body="Product maps should be continually referenced, reviewed, and updated throughout a product lifecycle (as needed)."
              />
              
              <RedCard
                header="Lack of Broader Team Awareness About the Product Map"
                body="Make sure the internal team knows about the product map so it can be referenced, reviewed, and revised as a team to fit the needs of the product work. Product maps aren't just a design tool but a tool that can really help guide the entire team to success."
              />
              
              <h2 className="text-xl font-semibold mb-4 mt-8 text-gray-800">Resources</h2>
              
              <div className="grid grid-cols-1 gap-4">
                <ResourceCard
                  title="Thrive"
                  href="#"
                />
                <ResourceCard
                  title="Home Goods"
                  href="#"
                />
                <ResourceCard
                  title="DQ"
                  href="#"
                />
                <ResourceCard
                  title="Reconstruction"
                  href="#"
                />
                <ResourceCard
                  title="Lucidchart"
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