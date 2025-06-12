import { client } from '@/lib/contentful';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';

// Add dynamic configuration
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Custom renderer options for embedded entries
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      const target = node.data.target;
      
      // Handle playbookCallout
      if (target.sys.contentType.sys.id === 'playbookCallout') {
        return `
          <div class="bg-blue-light/30 border-l-4 border-blue p-4 my-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-blue-dark">${target.fields.title || 'Important Note'}</h3>
                <div class="mt-2 text-sm text-blue-dark/80 prose prose-sm">
                  ${target.fields.content ? documentToHtmlString(target.fields.content as Document) : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      }
      
      // Handle commonPitfalls
      if (target.sys.contentType.sys.id === 'pitfallContainer') {
        return `
          <div class="bg-orange-light/30 border-l-4 border-orange p-4 my-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-orange" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-orange-dark">${target.fields.title || 'Common Pitfall'}</h3>
                <div class="mt-2 text-sm text-orange-dark/80 prose prose-sm">
                  ${target.fields.body ? documentToHtmlString(target.fields.body as Document) : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      }
      
      // Handle additionalResources
      if (target.sys.contentType.sys.id === 'additionalResourceContainer') {
        return `
          <div class="bg-green-light/30 border-l-4 border-green p-4 my-6">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 text-green" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-green-dark">${target.fields.title || 'Additional Resource'}</h3>
                <div class="mt-2 text-sm text-green-dark/80">
                  <span class="font-medium">${target.fields.category || 'Resource'}</span>
                  ${target.fields.link ? `<a href="${target.fields.link}" target="_blank" rel="noopener noreferrer" class="text-green hover:text-green-dark underline ml-2">View Resource →</a>` : ''}
                </div>
              </div>
            </div>
          </div>
        `;
      }
      
      return '';
    },
  },
};

export default async function DeliveryFoundations() {
  // Fetch the entry for delivery foundations
  const entries = await client.getEntries({
    content_type: 'playbookInnerPage',
    'fields.slug': 'delivery-foundations',
    include: 2, // Include linked entries
  });
  const page = entries.items[0];

  if (!page || typeof page.fields !== 'object') return <div>Not found</div>;

  // Enhanced debugging for all fields
  console.log('=== DEBUG: All Fields ===');
  console.log('Available fields:', Object.keys(page.fields));
  console.log('Full page data:', JSON.stringify(page.fields, null, 2));

  // Specific debugging for commonPitfalls field
  console.log('=== DEBUG: Common Pitfalls Field ===');
  console.log('commonPitfalls exists:', !!page.fields.commonPitfalls);
  console.log('commonPitfalls type:', typeof page.fields.commonPitfalls);
  console.log('commonPitfalls value:', JSON.stringify(page.fields.commonPitfalls, null, 2));

  // Specific debugging for additionalResources field
  console.log('=== DEBUG: Additional Resources Field ===');
  console.log('additionalResources exists:', !!page.fields.additionalResources);
  console.log('additionalResources type:', typeof page.fields.additionalResources);
  console.log('additionalResources value:', JSON.stringify(page.fields.additionalResources, null, 2));

  // Specific debugging for body field
  console.log('=== DEBUG: Body Field ===');
  console.log('Body field exists:', 'body' in page.fields);
  console.log('Body field value:', page.fields.body);
  console.log('Body field type:', typeof page.fields.body);
  if (page.fields.body && typeof page.fields.body === 'object' && 'nodeType' in page.fields.body) {
    console.log('Body field structure:', JSON.stringify(page.fields.body, null, 2));
    console.log('Body field nodeType:', (page.fields.body as Document).nodeType);
    console.log('Body field content:', (page.fields.body as Document).content);
  }

  const title = typeof page.fields.title === 'string' ? page.fields.title : '';
  const description = page.fields.description ? documentToHtmlString(page.fields.description as Document) : '';
  
  // Enhanced body content handling with custom renderer
  let body = '';
  try {
    if (page.fields.body) {
      console.log('Attempting to process body content...');
      if (typeof page.fields.body === 'object' && 'nodeType' in page.fields.body) {
        body = documentToHtmlString(page.fields.body as Document, options);
        console.log('Successfully processed body content:', body);
      } else {
        console.log('Body field is not in the expected Rich Text format:', page.fields.body);
      }
    } else {
      console.log('No body field found in Contentful response');
    }
  } catch (error) {
    console.error('Error processing body content:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
  }

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

  // Process commonPitfalls
  let commonPitfalls = '';
  try {
    if (page.fields.commonPitfalls) {
      console.log('Attempting to process commonPitfalls content...');
      if (typeof page.fields.commonPitfalls === 'object' && 'nodeType' in page.fields.commonPitfalls) {
        // Use the same options object that handles embedded entries
        commonPitfalls = documentToHtmlString(page.fields.commonPitfalls as Document, options);
        console.log('Successfully processed commonPitfalls content:', commonPitfalls);
      } else {
        console.log('CommonPitfalls field is not in the expected Rich Text format:', page.fields.commonPitfalls);
      }
    } else {
      console.log('No commonPitfalls field found in Contentful response');
    }
  } catch (error) {
    console.error('Error processing commonPitfalls content:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
  }

  // Process additionalResources
  let additionalResources = '';
  try {
    if (page.fields.additionalResources) {
      console.log('Attempting to process additionalResources content...');
      if (typeof page.fields.additionalResources === 'object' && 'nodeType' in page.fields.additionalResources) {
        // Use the same options object that handles embedded entries
        additionalResources = documentToHtmlString(page.fields.additionalResources as Document, options);
        console.log('Successfully processed additionalResources content:', additionalResources);
      } else {
        console.log('AdditionalResources field is not in the expected Rich Text format:', page.fields.additionalResources);
      }
    } else {
      console.log('No additionalResources field found in Contentful response');
    }
  } catch (error) {
    console.error('Error processing additionalResources content:', error);
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error');
  }

  return (
    <main className="min-h-screen bg-[#FDF9F3] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="p-8 rounded-lg space-y-6">
          <Breadcrumb title="Delivery Foundations" />
          <div>
            <h1 className="text-3xl font-heading font-medium text-ink mb-4">{title}</h1>
            {description ? (
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:text-ink prose-p:text-ink/80 prose-ul:list-disc prose-ul:pl-6 prose-li:text-ink/80"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            ) : (
              <p className="text-gray-500 italic">No description available</p>
            )}
          </div>

          {audioUrl && (
            <div className="mt-8">
              <AudioPlayerWrapper audioUrl={audioUrl} />
            </div>
          )}

          {body && (
            <div className="mt-12 border-t border-kraft pt-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:text-ink prose-p:text-ink/80 prose-ul:list-disc prose-ul:pl-6 prose-li:text-ink/80"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          )}

          {commonPitfalls && (
            <div className="mt-12 border-t border-kraft pt-8">
              <h2 className="text-2xl font-heading font-medium text-ink mb-6">Common Pitfalls</h2>
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:text-ink prose-p:text-ink/80 prose-ul:list-disc prose-ul:pl-6 prose-li:text-ink/80"
                dangerouslySetInnerHTML={{ __html: commonPitfalls }}
              />
            </div>
          )}

          {additionalResources && (
            <div className="mt-12 border-t border-kraft pt-8">
              <h2 className="text-2xl font-heading font-medium text-ink mb-6">Additional Resources</h2>
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-headings:text-ink prose-p:text-ink/80 prose-ul:list-disc prose-ul:pl-6 prose-li:text-ink/80"
                dangerouslySetInnerHTML={{ __html: additionalResources }}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 