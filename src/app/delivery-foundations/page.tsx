'use client';

import { client } from '@/lib/contentful';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import Breadcrumb from '@/components/Breadcrumb';

export default async function DeliveryFoundations() {
  // Fetch the entry for delivery foundations
  const entries = await client.getEntries({
    content_type: 'playbookInnerPage',
    'fields.slug': 'delivery-foundations',
  });
  const page = entries.items[0];

  if (!page || typeof page.fields !== 'object') return <div>Not found</div>;

  let audioUrl: string | null = null;
  if (
    page.fields.audioFile &&
    typeof page.fields.audioFile === 'object' &&
    'fields' in page.fields.audioFile &&
    page.fields.audioFile.fields &&
    typeof page.fields.audioFile.fields === 'object' &&
    'file' in page.fields.audioFile.fields &&
    page.fields.audioFile.fields.file &&
    typeof page.fields.audioFile.fields.file === 'object' &&
    'url' in page.fields.audioFile.fields.file &&
    typeof page.fields.audioFile.fields.file.url === 'string'
  ) {
    // Get the complete URL from Contentful
    const fileUrl = page.fields.audioFile.fields.file.url;
    console.log('Raw file URL from Contentful:', fileUrl);
    
    // For Contentful assets, we need to use the full URL with the correct domain and space ID
    audioUrl = fileUrl.startsWith('//') ? `https:${fileUrl}` : fileUrl;
    console.log('Final audio URL:', audioUrl);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6">
          <Breadcrumb 
            items={[
              { label: 'Delivery Foundations' }
            ]} 
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Delivery Foundations</h1>
            <p className="text-gray-600">
              Welcome to the Delivery Foundations section. Here you'll find essential audio guides and resources
              to help you understand the core principles of effective delivery.
            </p>
          </div>

          {audioUrl && (
            <div className="mt-8">
              <AudioPlayerWrapper audioUrl={audioUrl} />
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 