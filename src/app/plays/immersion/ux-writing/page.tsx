'use client';
import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import uxWritingArt from '@/../assets/Card Art/UX Writing.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import PlayAuthors, { uxWritingAuthors } from '@/components/PlayAuthors';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function UXWritingPage() {
  const title = "UX Writing";
  const section = "Immersion";
  const audioUrl = "/audio/UX Writing.m4a";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={uxWritingAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            UX writing is the practice of creating copy that guides users within a product and helps them interact with it. UX writing includes UI "microcopy" like product instructions, calls to action, menu labels, tooltips, and error messages, as well as copy that occurs outside the product's UI, like verification emails, SMS and push notifications, and customer service comms. UX writing may also encompass landing page copy, which intersects with (marketing) copywriting.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={uxWritingArt} 
            title="UX Writing"
            labels={['Content', 'UX']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why to use this play</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                UX writing is the main way users interact with a product. As a core part of the product design process, the process of drafting and surfacing UX copy is woven throughout the product cycle, from single wireframes to the immersion phase and beyond. UX copy also helps convey a product's brand tone in tandem with other messaging.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When to use this play</h2>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>As a product is being defined</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As a team is wrapping up discovery and defining their vision for a new product or changes to an existing one, they may produce wireframes of a few concepts. UX writing is needed to some degree in these early deliverables. For example, even a simplified sign-in screen might contain a short welcome message and labeled username and password fields.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Throughout design iteration</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The bulk of UX writing will occur during the design phase as the team tackles features from a high level. The UX writer will draft copy for each screen, collaborate with the designer on the best way to organize that information across flows, and ensure consistency in voice, tone, and style. This may include a range of activities, depending on the scope of the project.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>As part of content auditing</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A content audit includes surfacing opportunities to reorganize content and improve language. For example, the auditor may find that messaging on two separate screens should be consolidated onto just one screen, or that a piece of copy is unclear, repetitive, or misaligned with the product's brand voice. The end result of a content audit may be revised writing.
              </p>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Understand the goals of the client and project</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The scope of UX writing needed will vary greatly by project. Some clients will know of specific product areas that need copy, but others, especially if still in product discovery, may not yet be sure of all the features and screens that require support. There's an opportunity to cast a wide net when determining UX writing scope with clients. They may have UI microcopy in mind but may not have considered email comms, notifications, or other supplementary content that falls under the umbrella of UX writing. Clients will hopefully be delighted that the same UX writer is willing and able to take on a variety of copy.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Identify and connect with content collaborators</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Most projects will have one or multiple disciplines that can collaborate on UX writing. Product design will be an obvious collaborator. Marketing copywriters may collaborate on landing page copy and be a great source of feedback on other types of UX writing even if it is not their specialty. Brand strategists will help ensure that UX copy conveys the brand's tone. Developers may have a hand in determining copy needs for validating conditions and back-end approvals relevant to the product. For example, a user applies for a credit card and a third-party rejects their SSN; what message do they see on the UI or as a separate notification?
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Align on process and ownership with product design</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The cadence for writing and applying UX copy will greatly depend on the timeline and approach of the product designers working on the product. For example, the PD may have divided up design work into seven different screens (pages) on Figma and been given clear direction and deadlines for these features, which the UX writer can also adhere to. The UX writer should position themselves as a design collaborator and not a wordsmith. Depending on scope, the UX writer might take the lead on designing or outlining a page or screen in the design tool or just on a doc with words and the order of content, giving the designer a working draft to go off of.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Likewise, the product designer can put on their UX writer hat by filling in their own initial copy rather than using a "lorem ipsum" placeholder. From there, the pair can hold live one-on-one workshops on each screen as a full design and content package. During design reviews with the broader teams, encourage participants to give feedback on the UX copy just as they would on the flow. When presenting in reviews or to stakeholders, the product designer and UX writer should take turns walking through flows.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Determine how to track UX writing progression</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Work with clients and collaborators to determine how to track content progress. Even if you are working in lockstep with the designer, stakeholders may still want to see when UX copy specifically is done for a certain feature.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Conduct competitive research and/or a content audit</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For copy on new products and revising existing copy, it is helpful to do competitive research on other brands in the space to see how they organize content and inject their brand's voice in their copy.
              </p>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to Run Play</h2>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Draft copy & collaborate on design</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With priorities set and initial research complete, it's time to start writing. Using Google docs is helpful for notes, but even in the earliest stages, it's best to draft the copy directly in Figma, either as separate content or directly in the North star wireframe. When drafting UX copy, it is helpful to put yourself in the user's shoes and consider what information they would need at each touchpoint. UX writing should be concise, clear, and only occur where absolutely necessary. One UX writer notes: "Good UX writing is seamless and goes unnoticed. It lets users do what they need to do without thinking too hard".
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Strategically use components to deliver different types of information. For example, a hover tooltip can clarify what a certain field or action means, and an interrupting dialogue (modal) can confirm that a user wants to take a high-impact action. As noted in Planning and Prep, the UX writer may take ownership of wireframing or outlining content for a set of screens. The goal is to give the product designer something to work off of and then work through copy and design as one full package on a call rather than just leaving comments asynchronously.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                For example, there might be a piece of body copy that is optional and so could be delivered in a separate pop-up tooltip, or not at all. Talking to the designer can open up ideas on new directions to take and often lead to broader revisions to the flow, but it is never advised to work on design and copy in separate vacuums.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Gather feedback & revise copy</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The UX writer should expect to revise copy frequently as they collect feedback from internal stakeholders and users. See the Content Testing Play for strategies around user research. Even if a team is aligned on a piece of copy, it may still be edited, or omitted entirely, depending on the direction of the design. For example, maybe the UX writer mocked up a wireframe with a success message, but then the team decides to make that success message a banner on another screen, so now that message needs to be shorter.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When updating screens or components that occur in multiple instances, the product designer should ensure they are using the most up-to-date copy, so that the UX writer doesn't have to backtrack and re-update copy in each individual place. Conversely, the PD should use caution when updating components that occur in multiple instances so they don't accidentally replace copy that shouldn't be replaced.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Review voice and tone with copywriters or brand strategists if available. In general, it's helpful to take this step after you feel the content and design is polished for a given flow so that you are maximizing their time and focused solely on making tweaks for V/T.
              </p>
              
              <h3 className="font-semibold text-foreground mb-2" style={{fontSize: '14px'}}>Finalize content for spec folders</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As designs are being componentized and prepared for development, there may be a need to tweak content. For example, maybe the final layout of a form gives very little width to the two corresponding input fields so any error messages that appear below under that field have to be streamlined.
              </p>
              
              <BlueCard 
                header="When You're Done"
                body=""
              >
                <div style={{fontSize: '14px'}}>
                  <p className="mb-4 text-blue-card-text font-semibold">Teams should feel confident in answering:</p>
                  <ul className="list-disc ml-6 space-y-2 text-blue-card-text">
                    <li>Did we efficiently and clearly communicate how the user should interact with our product from the time they sign up to the time they are finished using it?</li>
                    <li>Did we use UX copy where applicable as an opportunity to accentuate the brand's voice and build trust and loyalty with the user?</li>
                  </ul>
                </div>
                
                <h3 className="font-semibold mb-2 text-blue-card-header mt-6" style={{fontSize: '14px'}}>Share your findings with client</h3>
                <p className="text-blue-card-text" style={{fontSize: '14px'}}>
                  Give the client 'under the hood' visibility on the process of drafting UX copy. For example, you might take one screen, break down the anatomy of the copy (why you've selected certain words, how it represents the brand voice), and how it has evolved based on feedback.
                </p>
              </BlueCard>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <div className="space-y-4 mb-8">
                <RedCard 
                  header="TROUBLE KEEPING UP TO DATE WITH DESIGN CHANGES"
                  body="Product design can change several times and very rapidly based on internal reviews and user testing. The UX writer may find themselves challenged to keep track of what copy revisions are needed. Understanding timelines, review cadences, and establishing norms around inclusivity in the beginning of a project will go a long way to overcoming pivots throughout the cycle. When updating screens or components that occur in multiple instances, the product designer should ensure they are using the most up-to-date copy so that the UX writer doesn't have to backtrack and re-update copy in each individual place. Aligning between the Product Designers and the Content Designers at the beginning of a project is vital to ensure everyone is aligned on when and how to notify each other of when content is ready to be created and when it is done."
                />
                
                <RedCard 
                  header="PRIORITIZING CONCISION OVER CLARITY"
                  body="UX copy should be concise, but never at the expense of clarity. For example, consider a bank's flow for replacing a lost debit card. A screen gives instructions that the old card will be deactivated and a new one will be sent. Instead of the CTA button on that screen saying 'Confirm,' it would be clearer to say 'Replace card' because it helps to reiterate the action the user is about to take."
                />
                
                <RedCard 
                  header="DISREGARDING OPPORTUNITIES FOR BRAND ALIGNMENT"
                  body="Sometimes UX writing is so cut and dry that it's hard to find opportunities to inject the brand's voice. But decisions like using 'please' or using exclamation points in confirmations or choosing sentence case versus title case all impact the brand identity."
                />
                
                <RedCard 
                  header="WRITING BULKS OF TEXT"
                  body="Text that takes up more than three lines of space within a design and looks like a paragraph should be rare in UX writing. To break up body copy, use bullet points and rely on components for other microcopy. Ideally, the design will be so highly intuitive that copy only appears where absolutely necessary."
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResourceCard 
                  title="Thrive landing page and microcopy examples (Figma)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Cigna accessibility writing (Google Sheet)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Content Wire Mapping"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="16 rules for effective UX Writing"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="UX Writing Study Guide (NN/g)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Ways to Improve Your Prototypes (Figma)"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="The UX writer's guide to Figma"
                  href="https://example.com"
                />
                <ResourceCard 
                  title="Mailchimp Content Style Guide"
                  href="https://example.com"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 