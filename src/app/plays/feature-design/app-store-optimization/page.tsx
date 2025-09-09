'use client';

import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import appStoreOptimizationArt from '@/../assets/Card Art/AppStoreOptimization.svg';
import PlayAuthors, { appStoreOptimizationAuthors } from '@/components/PlayAuthors';
import asoImage1 from '@/../assets/Content Images/App Store Optimization Image 1.png';
import asoImage2 from '@/../assets/Content Images/Frame 761981.png';
import SecondaryTabNav from '@/components/SecondaryTabNav';
import BlueCard from '@/components/BlueCard';
import RedCard from '@/components/RedCard';
import ResourceCard from '@/components/ResourceCard';
import { useState } from 'react';

export default function AppStoreOptimizationPage() {
  const title = "App Store Optimization";
  const section = "Feature Design";
  const audioUrl = "";
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          
          <PlayAuthors authors={appStoreOptimizationAuthors} />
          
          <p className="text-gray-700 leading-relaxed">
            App store optimization (ASO) is the process of improving an app's visibility in the App Store and Google Play Store to increase conversion rates and downloads. ASO aims to increase app discoverability, attract more relevant users, and drive higher conversion rates. App descriptions, preview screenshots, and videos are elements that drive effective ASO.
          </p>
          
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={appStoreOptimizationArt} 
              title="App Store Optimization"
              labels={['Marketing', 'Optimization']}
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
                  App store optimization (ASO) increases app downloads and conversion rates while growing brand recognition and stimulating user feedback. ASO can apply to parts of or all of a store listing, which includes required elements such as app descriptions and screenshots and optional elements such as videos.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">When</h3>
                
                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>1. Prior to the release of a new app</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Create an ASO strategy prior to releasing a new app in the App Store or Google Play Store. This will enable it to compete with existing apps from the beginning. Ideally, ASO work should be included in the project roadmap as early as kickoff to ensure enough time to plan for and create app store assets.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>2. At the end of app redesign or feature work</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Consider updating your app store description and screenshots any time new feature work is completed. That could be at the end of a app redesign or when new features are added. An up-to-date app store listing will help users stay accurately informed on app offerings and drive downloads.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>3. As part of an initiative to boost app downloads or visibility</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Introduce and integrate an ASO strategy for an existing app at any point during a project to increase downloads and drive conversions in preparation for a new release.
                  </p>
                </div>
              </div>
            </div>
          )}

          {selectedTab === 1 && (
            <div className="mt-8" id="planning-prep-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Planning & Prep</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Understand your audience</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Research your audience to better optimize the app store listing depending on user demographics, motivations and intents, and competitors.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Determine client needs and wants</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Communicate with the client to identify content and features that need to be included in the app store listing.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Gather keywords and assess rankings</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Conduct keyword research by researching terms that best describe your app's main features. Also assess your competitors' keywords using tools like AppFigures.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Conduct competitor analysis</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  In addition to keywords, research your competitors across other aspects of an app store listing, like audience and screenshots.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Outline app description</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Create a bulleted list of app features and arrange them from most to least important. Consider the features that make your app unique compared to competitors and align with stakeholders on priority.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Plan visual direction</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Gather effective visual assets, such as branding and style guides, and ensure that visual elements are legally allowed to be and appropriate to share. Also, begin collecting screens that showcase the most important features to highlight.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Consider A/B Testing</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Communicate with your SEO specialist to plan for testing opportunities and options and determine factors that can and should be tested. Begin to familiarize yourself with the "if ____, then ____, because ____" hypothesis formula.
                </p>
              </div>
            </div>
          )}

          {selectedTab === 2 && (
            <div className="mt-8" id="how-to-run-content">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">How to run the play</h2>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Keyword research and implementation</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  App Store keywords are words or phrases that are commonly searched for in the App Store. Keywords are a critical part of ASO because they're how users find your app when they search for something specific.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Collaborate with an SEO strategist, who will typically manage this keyword research, to find the optimal words and phrases based on user search behavior and your competitors' keywords.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                  <li>Prioritize keywords based on intent</li>
                  <li>Use long-tail keywords with qualified intent that is meaningful</li>
                  <li>The Google Play Store doesn't have a keyword field. Instead, keywords need to be integrated into the app's name title or description copy</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Competitive analysis</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  It's important to conduct a competitive analysis on your competitors' store listings. Here are a few things to look for:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2 ml-4">
                  <li>How are your competitors approaching the messaging for their keywords</li>
                  <li>What does your competition look like when searching for your keywords</li>
                  <li>What does their competition like you are doing comparing high-level and Google Play ratings</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">3. App description</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Your app's description should clearly communicate the purpose and key features of your app in compelling copy designed to drive downloads.
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 ml-4">
                  <li>Organize your descriptions into headers and bullet points to make them scannable and easy to read</li>
                  <li>Add clear headlines that communicate your app's core value proposition and include important keywords in your descriptions</li>
                  <li>Add social proof where it is true and where relevant such as the Awards and press mentions</li>
                </ul>
                <div className="mb-6">
                  <img 
                    src={asoImage1.src || asoImage1} 
                    alt="App Store Optimization app description examples"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">4. Screenshots</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A hook, first and second viewing conversion for both iOS and Android. Both platforms allow up to 10 screenshots, but the first five are the most important.
                </p>
                
                <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>General Guidelines</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 ml-4">
                  <li>Use high-resolution images</li>
                  <li>Show the most important features first</li>
                  <li>Use localization in your headline text (recommended)</li>
                  <li>Use right-aligned screenshots of your app interface highlighting important features (recommended)</li>
                  <li>Optimize your first ASO is recommended for our thinking through the reasons</li>
                </ul>

                <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>Platform-Specific Tips</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 ml-4">
                  <li>Portrait, Landscape, or Square Google Play Store: The feature graphic is important to publish your listing in the Play Store and in the same image that can be used as a cover image for your preview video if present. See <a href="https://support.google.com/googleplay/android-developer/answer/9866151?hl=en&ref_topic=3450987&visit_id=638000628556268207-960526536&rd=1#zippy=%2Cfeature-graphic%2Capp-icon%2Cshort-description" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Add preview assets to showcase your app - Play Console Help</a></li>
                  <li>App icons should be 32-bit PNG with alpha layer, dimensions should be at least 512 pixels, maximum file size should not exceed Google Play Store's image size policy guidelines. Your app icon does not replace your app's launcher icon but should be a higher-fidelity, higher-resolution version</li>
                  <li>App icons should look nice and neat on mobile so you don't draw too far outside of the bounds of the circle, and they should be recognizable</li>
                </ul>

                <div className="mb-6">
                  <img 
                    src={asoImage2.src || asoImage2} 
                    alt="App Store Optimization screenshot examples and guidelines"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>

                <h4 className="text-base font-semibold mb-3 text-gray-800" style={{color: '#4a5568'}}>iOS Guidelines</h4>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1 ml-4">
                  <li>Up to 10 screenshots</li>
                  <li>Use the first three images to the fullest extent</li>
                  <li>Text should be translated, detailed, and easy to understand</li>
                  <li>Make sure the layout looks good on the screen</li>
                  <li>Use bright colors that will attract the user's attention and improve the visual experience. See <a href="https://developer.apple.com/app-store/app-previews/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Show More with App Previews</a></li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">5. Video</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  App preview videos are effective for showing capabilities, look and feel, and experience of your app to potential users for better app discovery and decision making. App preview videos should show the core features and functionality of your app and be uploaded to YouTube. They can be up to 30 seconds long and should focus primarily on your app's core functionality, not just promotional content.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">6. App Icon</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Your app icon should provide app users the best feeling. Make sure it's clear, easy to read and that it matches what your app looks like in general. It should look good in the app store and should be recognizable at different sizes.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">7. Testing and monitoring</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Continue A/B testing to further understand what messages, features, and designs your audience resonates with the most. Test one element at a time.
                </p>
              </div>

              <BlueCard
                header="When You're Done"
                body={
                  <div>
                    <p className="mb-4 font-medium" style={{fontSize: '14px'}}>
                      Teams should feel confident in answering:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4 mb-6" style={{fontSize: '14px'}}>
                      <li>How is your app performing in terms of ranking, downloads, and conversion?</li>
                      <li>How is your app performing in the app store compared to before?</li>
                      <li>How does your app perform in the app store compared to your competitors?</li>
                      <li>Does the app store listing accurately describe the product?</li>
                    </ul>
                    
                    <p className="mb-2 font-medium" style={{fontSize: '14px'}}>
                      Share findings
                    </p>
                    <p className="mb-2" style={{fontSize: '14px'}}>
                      Prove the value of your app store listing engagement by providing the client with an ASO report that contains your app's ranking, results, and other relevant metrics. This could be integrated with your team's regular SEO reports, if you have one.
                    </p>
                  </div>
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
                    header="Neglecting keyword research"
                    body="Keywords in the app title, subtitle, and description are a critical factor in app store listing success. Failing to conduct keyword research can cause decreased app store visibility and fewer downloads."
                  />
                  
                  <RedCard
                    header="Ignoring the competition"
                    body="The app store landscape is incredibly competitive, and there are likely many apps that share similar features as yours. Help your app stand out among the crowd by conducting a thorough competitor analysis."
                  />
                  
                  <RedCard
                    header="Lengthy and unorganized app descriptions"
                    body="Only 15% of iOS and 20% of Android users view and read an entire app store listing, so it's crucial to communicate features and offerings in the app description quickly and succinctly. A concise description coupled with scannable headings will make it easier for users to navigate through your app description."
                  />
                  
                  <RedCard
                    header="Ineffective screenshot order"
                    body="The majority of users will not scroll through the entire screenshot gallery, so it's critical to convey the key features or benefits of your app in the first two or three screenshots. Avoid communicating core features of your app on the last few screenshots."
                  />
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">Resources</h3>
                <div className="grid grid-cols-1 gap-4">
                  <ResourceCard
                    title="Thrive Pet Healthcare app descriptions"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Thrive Pet Healthcare app store screenshots"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Dairy Queen app descriptions"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Google Play Store & App Store Screenshot Template"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="ASO Overview & Checklist wiki"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="AB Testing & Conversion Rate Article"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="App Store Guidelines - Creating your product page"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Google Play Store Guidelines"
                    href="#"
                  />
                  
                  <ResourceCard
                    title="Google Play & App Store Screenshot Sizes: 2023 Guide"
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