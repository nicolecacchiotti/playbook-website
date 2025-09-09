'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import midjourneyArt from '@/../assets/Card Art/MidJourney.svg';
import PlayAuthors, { midjourneyAuthors } from '@/components/PlayAuthors';
import midjourneyContentImage from '@/../assets/Content Images/Midjourney.png';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function MidjourneyPage() {
  const title = "Midjourney";
  const section = "Toolbox";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors authors={midjourneyAuthors} />
          
          <p className="text-gray-700 leading-relaxed">
            The MidJourney model has knowledge of creatures, places, objects, and more. It excels at getting small details right and can handle complex prompts with multiple characters or objects.
          </p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={midjourneyArt} 
            title="Midjourney"
            labels={['AI', 'Design']}
          />
          <div className="mt-10">
            <SecondaryTabNav tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']} selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </div>
          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Why</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  This play documents how to use Midjourney throughout the creative process, including immersion, creative direction, and feature design. AI tools like Midjourney provide a launching pad for creative exploration, and may serve as a starting point for asset generation that can be used for presentations or conceptual work.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-8">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Immersion</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Midjourney can provide designers with a virtually unlimited source of visual inspiration allowing designers to explore a wider range of established or conceptual brand ideas.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Rapid Ideation:</strong> Quickly generate variations of an idea through iterations of prompt entry. In a short amount of time designers can expand their exploration process to uncover potential directions that may not have been initially apparent, saving time, and overcoming creative blocks.
                  </p>
                  
                  <BlueCard
                    header="Midjourney Prompt Ideas /imagine:"
                    body="'high-quality UI design, food delivery mobile app, trending on Dribbble, Behance'"
                  />
                </div>

                <div className="mb-8">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Creative Direction</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Aid in the expression of new a new visual language through the representation of core elements such as UI treatments, components, and/or design patterns.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Mood Board Generation:</strong> Creating a mood board traditionally involves searching for and collecting images from various sources manually. Midjourney streamlines this process by rapidly generating a large number of images based on specific criteria or themes. It saves time and effort by automating the image generation process, enabling the quick assembly of mood boards.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    <strong>Concept Generation:</strong> Midjourney can provide a launching pad for conceptual work including visual brand direction. Midjourney streamlines this work by providing inspirational and explorative concepts that spark creativity through prompting that includes technological medium.
                  </p>
                  
                  <BlueCard
                    header="Midjourney Prompt Idea /imagine:"
                    body="(if you need a website) 'a sleek website homepage to sell high-end cars,' (if you need a logo) 'A hamburger 3D logo, very cute shape, miniature small scale painting style, minimalism, lite object style, up view, matte, white background, soft round form, ultra high definition details'"
                  />
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Feature Design</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Iterative exploration of elements such as conceptual imagery, illustrations, and as an alternative to stock photography. Use during the Feature Design phase to serve as inspiration for final assets.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>User Testing:</strong> Midjourney can provide access to quick iterative imagery or illustrative formats to use in testing for validation of creative direction, emotional response, and perceptions throughout the overall user experience.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <div className="mt-8" id="planning-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Access the Discord platform & the MidJourney Bot</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>You can interact with the MidJourney Bot on Discord.</strong><br />
                  Before joining the MidJourney Discord server, you must have a verified Discord login. <a href="https://support.discord.com/hc/en-us/articles/360033931551-Getting-Started" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Learn how to create your account</a>, or <a href="https://support.discord.com/hc/en-us/articles/6181726888215-How-to-Verify-Your-Discord-Account" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Learn how to verify your account</a>.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">On the MidJourney Official Server</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Select any <strong>newbies-#</strong> channel visible in the left sidebar to explore community prompts and start your own.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">Private Message</h4>
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    Select Midjourney Bot to send a direct message for a private* conversation, allowing you to explore and test out features at a slower pace.
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed italic">
                    *Direct messages are open to all tiers however, your images are still considered public, unless set to private mode (only available in pro).
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">Extra: On Other Servers</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    You can <strong>generate images with the MidJourney Bot on any server that has invited the Bot</strong>. Look for instructions on your server on where to use the Bot.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The MidJourney server has channels for working collaboratively, technical and billing support, official announcements, offering feedback, and discussions. The community is supportive, encouraging, and eager to share their knowledge with users just starting out.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Getting Started with Commands</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You can interact with the MidJourney Bot on Discord by <a href="https://docs.midjourney.com/hc/en-us/articles/32894521590669-Discord-Command-List" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"><strong>typing a Command</strong></a>. Commands are used to create images, change default settings, monitor user info, and perform other helpful tasks. Here are few you'll need:
                </p>
                
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                  <li><strong>/settings</strong> - View and adjust the MidJourney Bot's settings</li>
                  <li><strong>/imagine</strong> - Generate an image using a prompt</li>
                  <li><strong>/blend</strong> - Easily blend two (or more) images together.</li>
                </ul>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  MidJourney Commands can be used in any Bot Channel, on private Discord servers where the MidJourney Bot has been permitted to operate, or in a direct message with the MidJourney Bot.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Advanced Commands</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  You can interact with the MidJourney Bot on Discord by <a href="https://docs.midjourney.com/hc/en-us/articles/32894521590669-Discord-Command-List" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline"><strong>typing a Command</strong></a>. Consider using advanced commands to create your desired result more efficiently. Review additional and new commands on the official Midjourney website. Common commands:
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      <strong>--tile</strong> - The "--tile" parameter is used within prompt entry to create an infinite and seamless pattern.
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4">Example: "/imagine Christmas illustration --tile"</p>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      <strong>--s</strong> - The "--s" parameter is used to influence how strongly artistic license is applied. High stylization is used to create images that are very artistic, but less connected to the prompt. Ranges for --s are between 0-1000.
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4">Example: "/imagine Painting of a Starry Night by Van Gogh --s 900"</p>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      <strong>--ar</strong> - The "--ar" parameter is used to control the aspect ratio of the prompt-generated image. Common ratios include: 4:5, 2:3,4:7, 1:1, 5:4, 3:2 and 7:4.
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4">Example: "/imagine Pastry on a plate --ar 1:1"</p>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      <strong>--c</strong> -The "--c" parameter influences how varied the image can appear. The higher the chaos parameter the more chaotic the results. Ranges for --c are between 0-100.
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4">Example: "/imagine Grapefruit Owl Hybrid --c 90"</p>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      <strong>--no</strong> - The "--no" parameter is used to exclude something from your image. Use commas after each item to exclude multiple items.
                    </p>
                    <p className="text-gray-600 text-sm italic">Example: "/imagine Outside view of a house --no cars, fences, animals"</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Prompt Entry</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3 ml-4">
                  <li>Define the prompt to generate an image specific to your needs. To begin your prompt in discord begin with "/imagine".</li>
                  <li>Specify your prompt details including items such as subject, specific details, time of day, weather, image fidelity, angle, weights and exclusions.</li>
                  <li>An example prompt would look something like <em>"/imagine Orange classic Ford GT40 on an empty forest highway, noon, sunny, cinematic angle, 8k, realistic, wet road, --no numbers"</em></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Image Generation</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3 ml-4">
                  <li>Midjourney will provide multiple options, it is recommended that you modify your prompt to refine results.</li>
                  <li>Once your generated asset is completed, select the appropriate image to upscale by selecting an option between U1-U4.</li>
                  <li>Optional: Remix your image by using a generated asset as a starting point. To do this, select V1-V4 to create a variant of the original generated asset.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Expand Toolset</h3>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-3 ml-4">
                  <li>Generative AI can still provide unwanted or unpolished results. To mitigate this consider using additional tools to refine generated images such as Photoshop or Adobe Illustrator to introduce or remove details.</li>
                </ul>
              </div>

              <BlueCard
                header="Common things to consider:"
                body={
                  <div>
                    <p className="mb-4" style={{fontSize: '14px'}}>
                      Prompt entry is important in AI image generation, but delicate, as the wording and specificity of the prompt can impact the output. A well-crafted prompt can produce accurate results, while a poorly worded one can lead to low-quality outputs. Careful consideration of the prompt is necessary to ensure a clear and specific outcome.
                    </p>
                    <p style={{fontSize: '14px'}}>
                      <a href="https://docs.midjourney.com/hc/en-us/articles/33329261836941-Getting-Started-Guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">View Midjourney's Help Guide to Get Started</a>
                    </p>
                  </div>
                }
              />

              <div className="mt-8">
                <img 
                  src={midjourneyContentImage.src || midjourneyContentImage} 
                  alt="Midjourney workflow and interface example"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          )}
          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Common Pitfalls</h3>
                
                <div className="space-y-6">
                  <RedCard
                    header="Consistency"
                    body="In its current state, MidJourney struggles with outputting consistent styles from multiple inputs. If you're looking to create a library of similar assets, tool like Stable Diffusion may provide a better solution."
                  />
                  
                  <RedCard
                    header="Paid account necessary for optimal use"
                    body="Private features are only available in the highest paid tier. In order to get the most out of this tool, a paid account is needed. Request an account with IT."
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="WT + AI Keynote"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Midjourney for Designers (Case Studies & Prompting)"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="MidJourney Command List (Prompt)"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Midjourney Quickstart"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Settings and Presets"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Advanced Guide to Prompt Writing"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="UI Design with Midjourney"
                    href="#"
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