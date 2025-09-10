'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import chatgptArt from '@/../assets/Card Art/ChatGPT.svg';
import PlayAuthors, { chatgptAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ChatGPTPage() {
  const title = "ChatGPT";
  const section = "Toolbox";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <PlayAuthors authors={chatgptAuthors} />
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-700 leading-relaxed">
            An artificial intelligence language model developed by OpenAI, capable of generating human-like text in response to prompts. It's trained on a wide range of internet text and can answer questions, write essays, summarize text, and even create poetry or short stories.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={chatgptArt} 
            title="ChatGPT"
            labels={['AI', 'Tools']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Why</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use ChatGPT to generate and evaluate creative ideas, aid in user experience research by simulating potential user interactions, and assist with documentation or presentations. Additionally, it can be used to create conversational AI interfaces, enhancing user engagement and creating more intuitive and interactive products.
              </p>
              
              <h2 className="text-xl font-semibold mb-4 text-gray-800">When</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Immersion</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Rapid Ideation:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Understand the problem space more fully and generate a wide array of potential solutions. ChatGPT can be utilized as a brainstorming partner, capable of suggesting a range of concepts, features, or strategies based on a given prompt. This can help stimulate out-of-the-box thinking and may uncover unique perspectives or approaches to the design problem that weren't initially considered.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">User Journey Simulation:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Leverage ChatGPT to simulate potential user journeys or scenarios within the application. By role-playing as different personas interacting with the digital product, designers can uncover potential challenges, opportunities, and use cases that might not have been initially obvious, leading to more user-centric and efficient design solutions.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-gray-800">Creative Direction</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Mood Board Generation:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A designer can feed ChatGPT a creative brief, and the model will generate descriptive text for various design styles, color palettes, typography, or other aesthetic elements. This text can serve as guidance for creating visual mood boards, helping define the creative direction for the project.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Concept Generation:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  In the stage of determining the creative direction, you can utilize ChatGPT to generate diverse creative concepts based on your project goals. This can include high-level thematic ideas, storytelling aspects, or unique interaction models, thereby providing a range of directions that can inspire the design process.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Design Critique:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ChatGPT can be used as a tool to critically evaluate design options. By presenting the AI with different design approaches, it can generate potential strengths, weaknesses, or considerations for each, aiding in the decision-making process when defining the creative direction.
                </p>
              </div>

              <BlueCard
                header="AI Prompt Idea"
                body="'what are different creative approaches for a mood board for a concert venue management dashboard' 'I'm going to be user testing this dashboard with the venue managers that use the tool to add events and monitor ticket sales, what would be good questions to ask?'"
              />

              <h3 className="text-lg font-semibold mb-3 text-gray-800 mt-8">Feature Design</h3>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">UI Copywriting:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  ChatGPT can help in generating concise, engaging, and user-friendly text for UI elements such as tooltips, button labels, error messages, or onboarding instructions, thereby enhancing the clarity and user-friendliness of your application.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Usability Testing Script:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You can use ChatGPT to create scripts for usability testing scenarios. The AI can generate a range of user behaviors and actions to test specific features, making your usability tests more comprehensive and revealing potential design issues.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Interaction Dialogues:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If your application has conversational interfaces or uses chatbots, ChatGPT can be used to design and test the flow of these conversations, improving the user experience and making the interaction with your product feel more natural and intuitive.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Rapid Prototyping:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Leverage ChatGPT to quickly generate descriptions of potential UI/UX changes, essentially creating a "verbal prototype" that can be discussed and evaluated before committing to more time-consuming visual design and development work.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Accessibility Guidelines:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Assist by providing guidelines and best practices for accessibility in digital design. This includes generating prompts for creating alternative text for images, suggestions for color contrasts, and advice on layout considerations for visually impaired users or those with other disabilities. This can help ensure your application is inclusive and accessible to a wide range of users.
                </p>
              </div>

              <BlueCard
                header="AI Prompt Idea"
                body="'Can you give me a list of copy for a button that allows the user to proceed in an on-boarding flow' 'Can you write me a one line error message that is friendly and slightly funny for when our app crashes'"
              />
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Gain Access to ChatGPT</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Licensing</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Licensing for <strong>GPT Plus is $20/mo</strong>
              </p>

              <BlueCard
                header="🚧 DETAILS FORM EMAIL COMMUNICATION BELOW ABOUT ACQUIRING A LICENSE:"
                body="'Unfortunately, we have still been having trouble with the WillowTree credit card being declined on the OpenAI/ChatGPT site. In the meantime, our Finance team has approved reimbursement if you are able to utilize your personal card instead. They would like you to submit an expense report in Certify for reimbursement on a quarterly basis — unless it's detrimental to your personal finances if you wait that long!'"
              />

              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">When not to use this tool</h2>
              <ul className="list-disc ml-6 space-y-3 text-gray-700 leading-relaxed">
                <li>
                  <strong>ChatGPT</strong> uses supplied prompts to train future models, so it should not be given sensitive information or client data.
                </li>
                <li>
                  Since its knowledge base <strong>cuts off at September 2021</strong>, it should not be relied on for any information after that point. When using it to assist in writing software, keep in mind that it will not know about new libraries, deprecations, etc. after that point.
                </li>
              </ul>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">1. Prompt 101</h2>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                Using ChatGPT effectively involves clear, specific, and context-rich prompting. Here's a how-to guide:
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Be clear and specific:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The more specific your question, the better the AI can generate a relevant response. Instead of asking "What is the weather?" specify the location and time, like "What is the weather in New York City right now?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Provide context:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you're asking a follow-up question or your question relies on prior information, include that context within the prompt. For example, instead of asking "Who won it?" you might ask "Who won the 2022 World Series?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Specify the format if needed:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you require a response in a particular format, mention this in your question. For example, if you're asking for a summary of a topic, you can specify "Can you give me a bullet-point summary of the main causes of World War I?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Directly instruct the model:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you want the model to think step by step or debate pros and cons before settling on an answer, you can instruct it to do so. For example: "Can you list the pros and cons of solar energy, then provide your best recommendation?"
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Iterate and refine:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If the initial response isn't satisfactory, you can ask the question differently, provide more context, or specify the format you need. Remember, the model doesn't remember past requests, so each question should contain all the necessary context.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-2">Use system prompts for more control:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Advanced users can make use of system-level instructions to control the model's behavior. For example, you can tell the model to "Speak like Shakespeare" or "Explain it as if I were a five-year-old."
                </p>
              </div>

              <h2 className="text-2xl font-semibold mb-6 text-gray-800">2. Join the Conversation</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When interacting with ChatGPT, it's important to know that the model doesn't have a memory of previous interactions. It doesn't know who you are or what you've asked before. <strong>However, within a single session or conversation, it can refer to previous exchanges.</strong>
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Here are some tips for building upon previous interactions within a single conversation:
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Maintain context within the session:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Since ChatGPT doesn't remember previous sessions, if you want to refer to something discussed earlier, include it within the current session. For example, if discussing a book in one prompt and asking about the author in the next, include the name of the book or the author to maintain context.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Specify connections to previous responses:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If you want to ask about or discuss something mentioned in a prior response in the current session, directly mention the relevant parts of that response in your new prompt.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Sequentially build the conversation:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  In a multi-turn conversation, remember that ChatGPT processes all the preceding messages each time it generates a response. So, you can ask follow-up questions or explore different facets of a topic sequentially.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Use clear referents:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  When referring back to something mentioned earlier, be as explicit as possible. Instead of saying "it," use the name or a clear description of what you're referring to.
                </p>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-2">Rephrase or repeat for clarity:</h4>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  If the AI seems to have lost the thread of the conversation, rephrase your question or reintroduce the context to bring it back on track.
                </p>
              </div>

              <h3 className="text-lg font-semibold mb-4 text-gray-800 mt-8">🧠 Advanced Strategies for Using ChatGPT:</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Detailed Prompts:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Give the model a clear understanding of what you're asking. If you want a detailed response, ask for it explicitly. For example, "Describe in detail a user interface for a mobile app that helps users track their daily water intake."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Role-Playing:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Instruct the AI to take on a specific persona or role. For example, "Imagine you're a user experience expert reviewing my app's design. Provide a comprehensive critique."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Staged Queries:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Instead of asking everything in one go, break your query into stages. For example, first ask for a general concept, then ask for refinements or more detail based on the AI's responses.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Guided Brainstorming:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Utilize ChatGPT's ability to generate a wide range of ideas quickly. For example, "Generate 10 unique names for a productivity app" or "Describe five different color schemes for a meditation app."
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Feedback Loop:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Use the model's responses to iteratively refine your request. If the AI's first response isn't quite what you wanted, tweak your prompt and try again.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Temperature and Max Tokens:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If you're using the OpenAI API, you can adjust parameters like "temperature" and "max tokens." Higher temperature values (closer to 1) make the output more random, while lower values make it more focused and deterministic. Max tokens can be used to limit the length of the output.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Common Pitfalls</h2>
              
              <div className="space-y-6">
                <RedCard
                  header="OVER-RELIANCE ON GENERATED OUTPUTS"
                  body="Don't be tempted to take ChatGPT's output as the final solution. It's essential to remember that while ChatGPT can generate creative and diverse ideas, it doesn't have true understanding or creativity. Its outputs are based on patterns in the data it was trained on, and it doesn't have the ability to understand user needs, project goals, or design principles as a human designer does. Designers should use the model as a tool for ideation and exploration, rather than a source of definitive answers."
                />

                <RedCard
                  header="LACK OF CONTEXT"
                  body="ChatGPT doesn't have the ability to understand context in the way humans do. It doesn't remember past interactions, it doesn't know anything about the specific user or project unless it's included in the conversation, and it can sometimes generate responses that are plausible-sounding but incorrect or irrelevant. It's crucial to provide clear, specific, and context-rich prompts, and to critically evaluate the responses."
                />

                <RedCard
                  header="EXPECTING PRECISE TECHNICAL OUTPUTS"
                  body="While ChatGPT can generate code-like text and work with data formats like JSON or HTML, its proficiency varies and it should not be relied on for precise, production-level code generation. The generated code or technical outputs need to be reviewed, refined, and tested by human coders."
                />
              </div>

              <h2 className="text-xl font-semibold mb-4 text-gray-800 mt-8">Resources</h2>
              <div className="space-y-4">
                <ResourceCard
                  title="OpenAI ChatGPT Official Documentation"
                  href="#"
                />
                <ResourceCard
                  title="ChatGPT Best Practices Guide"
                  href="#"
                />
                <ResourceCard
                  title="Prompt Engineering Techniques"
                  href="#"
                />
                <ResourceCard
                  title="AI Ethics and Responsible Use"
                  href="#"
                />
                <ResourceCard
                  title="ChatGPT for Designers: Case Studies"
                  href="#"
                />
                <ResourceCard
                  title="OpenAI API Documentation"
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