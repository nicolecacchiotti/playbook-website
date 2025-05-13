import { client } from '@/lib/contentful';
import Breadcrumb from '@/components/Breadcrumb';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import { Document } from '@contentful/rich-text-types';

export async function generateStaticParams() {
  // Fetch all entries of your content type
  const entries = await client.getEntries({ content_type: 'playbookInnerPage' });
  // Return an array of params for static generation
  return entries.items.map((item: any) => ({ slug: item.fields.slug }));
}

export default async function ContentPage({ params }: { params: { slug: string } }) {
  // Fetch the entry for the current slug
  const entries = await client.getEntries({
    content_type: 'playbookInnerPage',
    'fields.slug': params.slug,
  });
  const page = entries.items[0];

  if (!page || typeof page.fields !== 'object') return <div>Not found</div>;

  const title = typeof page.fields.title === 'string' ? page.fields.title : '';
  const description = page.fields.description ? documentToHtmlString(page.fields.description as Document) : '';
  
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
    // Log the full audio file data
    console.log('Full audio file data:', JSON.stringify(page.fields.audioFile, null, 2));
    
    // Get the complete URL from Contentful
    const fileUrl = page.fields.audioFile.fields.file.url;
    console.log('Raw file URL from Contentful:', fileUrl);
    
    // For Contentful assets, we need to use the full URL with the correct domain and space ID
    audioUrl = fileUrl.startsWith('//') ? `https:${fileUrl}` : fileUrl;
    console.log('Final audio URL:', audioUrl);
    
    // Test if the URL is accessible
    fetch(audioUrl)
      .then(response => {
        console.log('Audio file fetch response:', response.status, response.statusText);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(blob => {
        console.log('Audio file blob:', blob.type, blob.size);
      })
      .catch(error => {
        console.error('Error fetching audio file:', error);
      });
  } else {
    console.log('No audio file found in Contentful data:', JSON.stringify(page.fields, null, 2));
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb 
          items={[
            { label: title }
          ]} 
        />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          {description ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="text-gray-500 italic">No description available</p>
          )}
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