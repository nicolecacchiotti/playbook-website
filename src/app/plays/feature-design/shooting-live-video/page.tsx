'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import shootingLiveVideoArt from '@/../assets/Card Art/Shootinglivevideo.svg';
import PlayAuthors, { shootingLiveVideoAuthors } from '@/components/PlayAuthors';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function ShootingLiveVideoPage() {
  const title = "Shooting Live Video";
  const section = "Feature Design";
  const audioUrl = ""; // No audio file yet
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors authors={shootingLiveVideoAuthors} />
          
          <p className="text-gray-700 leading-relaxed">
            Guidance on capturing compelling live video content and storytelling for diverse audiences.
          </p>
          
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={shootingLiveVideoArt} 
              title="Shooting Live Video"
              labels={['Video', 'Production']}
            />

          <SecondaryTabNav
            tabs={['Overview', 'Planning & Prep', 'How to run the play', 'Support']}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
          />

          {selectedTab === 0 && (
            <div className="mt-8" id="overview-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Overview</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Why</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The shooting live video play aims to ensure that all videos maintain a consistent style, tone, and quality, saving time and resources while adhering to established guidelines. It guarantees high-quality content by outlining technical specifications and creative elements. Additionally, the playbook serves as a valuable resource for training new employees and scaling operations efficiently.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Demonstrations or How-To Content</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Certain content, such as product demonstrations, tutorials, or training videos, may require live footage to effectively showcase real-world examples or step-by-step processes. Live footage allows viewers to see actions, interactions, and details that may be difficult to convey through animation or graphics alone.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>To Carry the Story</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Filming subject matter experts (SMEs) speaking convincingly about the project (insert link to TD Bank video) allows that footage to function as the voiceover (VO) and tell the story. This is often combined with other animated elements to supplement the story or to even fill in gaps in the story. Often the SMEs may not mention a specific point that we want to include. We may add text on screen to cover that point or animate a visual to illustrate that point more fully.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Emotional Impact and Storytelling</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Live footage can evoke genuine emotions and reactions from viewers. Whether it's capturing a heartfelt moment, a dramatic event, or a compelling interview, live footage adds a layer of authenticity and emotional resonance that may be harder to achieve with animation or graphics alone.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="mt-8" id="planning-prep-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Pre-production Planning</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Define your goals and objectives for the video shoot.</li>
                  <li>Identify your target audience and tailor your content accordingly.</li>
                  <li>Develop a script or outline to ensure your video includes key messages, talking points, and any necessary visual elements.</li>
                  <li>Select the appropriate location or venue for the shoot, considering factors such as lighting, acoustics, and accessibility.</li>
                  <li>Assemble your production team, including camera operators, audio technicians, and any additional crew members needed for the shoot.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Technical Setup</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Choose the right equipment for the shoot, including cameras, microphones, lighting, and any other necessary gear. Be sure to have out of focus background shots available for the editing process. Consider using external monitors such as a laptop for better viewing. It also may be useful to use the most efficient software in conjunction in order to check audio quality.</li>
                  <li>Test all equipment to ensure functionality and compatibility.</li>
                  <li>Turn off Auto Focus</li>
                  <li>Turn off Auto Shutter</li>
                  <li>Generally, shutter speed should be 1/fps x 2). If shooting 24 frames per second (24fps), shutter speed should be close to 1/48. If shooting 30 fps, shutter should be close to 1/60.</li>
                  <li>Shutter shutter speed (1/12 fps) will have too much motion blur (dreamy look and feel), and too fast (1/500) will feel too choppy.</li>
                  <li>Shutter speed may affect the lights in the background, such as flickering.</li>
                </ul>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800">Recommended camera setup:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-6">
                    <li>24fps</li>
                    <li>1/48 shutter</li>
                    <li>No auto focus</li>
                    <li>High bitrate</li>
                    <li>ProRes codec (or best one camera offers)</li>
                    <li>1080p or higher image quality</li>
                    <li>Landscape view</li>
                    <li>External or lavalier microphone</li>
                    <li>Large, diffused light source near subject</li>
                    <li>Check white balance (recommended)</li>
                  </ul>
                </div>

                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Some cameras have recording time limitations, so only being able to record 10 minutes or less. Check to see what the recording limitations are for your camera.</li>
                  <li>Be sure there is enough digital storage space for the shoot, especially for 4K quality recording.</li>
                  <li>If no lavalier microphone is available, use an iPhone with a headphone microphone as a backup option. A wired headphone microphone will give you much better audio quality than the microphone built into the camera.</li>
                  <li>Set up any filming locations; arrange lighting, sound equipment, and camera angles as needed.</li>
                  <li>Prior to the shoot, allow for a stand-in to test lighting, framing and audio levels.</li>
                  <li>Make sure to consider angles that are flattering while setting up framing and lighting. For example, having a low angle that looks up at talent is typically not as flattering as having the camera at eye level or slightly above eye level.</li>
                  <li>Test lighting on people with glasses. Be sure to choose angles where you will not find glare on reflective surfaces.</li>
                  <li>Conduct a technical rehearsal to troubleshoot any potential issues and ensure smooth operation during the live shoot.</li>
                  <li>Be sure there is recording in progress with signage and visual indicators.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Video Specifications</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li><strong>Resolution:</strong> Higher resolution provides greater clarity and detail.</li>
                  <li><strong>Full HD (1080p):</strong> 1920 x 1080 pixels
                    <ul className="list-disc list-inside ml-6 mt-2">
                      <li>Ultra HD (4K): 3840 x 2160 pixels</li>
                    </ul>
                  </li>
                  <li><strong>Frame Rate:</strong> fps (frames per second) determines how smoothly motion is captured in the video.</li>
                  <li><strong>24 fps:</strong> for a cinematic look</li>
                  <li><strong>30 fps:</strong> for standard video</li>
                  <li><strong>60 fps:</strong> for smoother motions, often used in sports or action content, or intended for slow motion shots</li>
                  <li><strong>Codec:</strong> a compression that affects both quality and file size.</li>
                  <li><strong>H.264 (AVC)</strong></li>
                  <li><strong>H.265 (HEVC)</strong></li>
                  <li><strong>Bitrate:</strong> determines the amount of data transmitted per second and impacts video quality. Higher bitrates result in better quality but larger file sizes.</li>
                  <li><strong>Color Space:</strong> defines the range and accuracy of colors captured in the video.</li>
                  <li><strong>Rec. 709 for HD video</strong></li>
                </ul>
              </div>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Execution</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li>Start the video shoot on time, greeting the participants and guiding them through the discussion.</li>
                  <li>Follow the prepared questions or topics, allowing for natural conversation and spontaneous interaction between the participants.</li>
                  <li>Unless the brief specifically requires the subject to look directly into the camera as they speak, have the subject look slightly to the right or left of the camera (usually where the interviewer should be seated).</li>
                  <li>Monitor audio levels and visual composition throughout the interview, making adjustments as needed to maintain quality and consistency.</li>
                  <li>Monitor video, such as focus and white balance, making adjustments as needed to maintain quality and consistency.</li>
                  <li>Encourage the participants to engage with each other and express their thoughts and opinions openly and authentically.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Continuity and Coverage</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li>Capture multiple camera angles and shots to ensure coverage of the interview from various perspectives.</li>
                  <li>Monitor the continuity of the interview, ensuring consistency in framing, lighting, and audio levels between different shots and takes.</li>
                  <li>Anticipate and adapt to any unexpected developments or changes during the interview, maintaining flexibility and professionalism throughout the shoot.</li>
                  <li>Be sure to allow time for b-roll shots. Record footage of environment, employees, servers, or any visual content that relates to the subject and what they're speaking about.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Post-production</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                  <li>Conclude the interview on a positive note, thanking the participants for their time and contributions.</li>
                  <li>After the recording session concludes, review the performance to identify strengths, areas for improvement, and lessons learned.</li>
                  <li>Debrief with your production team to discuss what went well and what could be improved for future live shoots, incorporating feedback into your planning and execution process.</li>
                  <li>Be sure to back up the RAW recorded files to the cloud, and send a link to the files to those that need access.</li>
                </ul>
              </div>

              <BlueCard
                header="When You're Done"
                body={
                  <div>
                    <p className="mb-4" style={{fontSize: '14px'}}>
                      Teams should feel confident in answering:
                    </p>
                    <ul className="ml-6 space-y-1" style={{fontSize: '14px'}}>
                      <li>• Do we have high-quality footage that meets our technical specifications?</li>
                      <li>• Are all files properly backed up and accessible to the team?</li>
                      <li>• Have we captured sufficient b-roll and coverage for editing flexibility?</li>
                      <li>• What lessons learned can improve our next live video shoot?</li>
                    </ul>
                  </div>
                }
                icon={
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>
          )}

          {selectedTab === 3 && (
            <div className="mt-8" id="support-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Support</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Common Pitfalls</h3>
                
                <div className="space-y-6">
                  <RedCard
                    header="Poor Audio Quality"
                    body="Failing to use proper microphones or monitor audio levels can result in unusable footage. Always use external microphones and test audio before recording."
                  />
                  
                  <RedCard
                    header="Inadequate Lighting Setup"
                    body="Poor lighting can make subjects look unprofessional or create unflattering shadows. Always test lighting with stand-ins and avoid shooting directly under harsh overhead lights."
                  />
                  
                  <RedCard
                    header="Not Backing Up Files"
                    body="Losing footage due to equipment failure or human error can be catastrophic. Always have a backup plan and immediately transfer files to cloud storage after shooting."
                  />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="TD Bank"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Mastercard BTS"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Adobe Creative Cloud"
                    url="#"
                  />
                  
                  <ResourceCard
                    title="Lighting Diagram"
                    url="#"
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