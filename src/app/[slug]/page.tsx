import { client } from '@/lib/contentful';
import Breadcrumb from '@/components/Breadcrumb';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import { Document, BLOCKS, INLINES } from '@contentful/rich-text-types';

// Add dynamic configuration
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Custom renderer options for embedded entries
const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      const target = node.data.target;
      
      // Debug: Log the content type and fields of each embedded entry
      console.log('DEBUG: Embedded entry type:', target.sys.contentType.sys.id);
      console.log('DEBUG: Embedded entry fields:', target.fields);
      
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
      
      // Handle pitfallContainer
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

export default async function ContentPage({ params }: { params: { slug: string } }) {
  // Add debug logging at the very top
  console.log('\n=== DEBUG: Starting ContentPage Component ===');
  
  // Fetch the entry for the current slug with explicit includes
  const entries = await client.getEntries({
    content_type: 'playbookInnerPage',
    'fields.slug': params.slug,
    include: 2
  });
  
  const page = entries.items[0];
  
  // Add detailed logging for commonPitfalls
  console.log('\n=== DEBUG: Common Pitfalls Field ===');
  console.log('commonPitfalls exists:', !!page?.fields?.commonPitfalls);
  console.log('commonPitfalls type:', typeof page?.fields?.commonPitfalls);
  console.log('commonPitfalls value:', JSON.stringify(page?.fields?.commonPitfalls, null, 2));

  if (!page || typeof page.fields !== 'object') return <div>Not found</div>;

  const title = typeof page.fields.title === 'string' ? page.fields.title : '';
  const description = page.fields.description ? documentToHtmlString(page.fields.description as Document) : '';
  
  // Enhanced body content handling with more detailed logging
  let body = '';
  let commonPitfalls = '';
  
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

    // Process commonPitfalls as pitfallContainer entries
    if (page.fields.commonPitfalls) {
      console.log('\n=== DEBUG: Processing Common Pitfalls ===');
      if (typeof page.fields.commonPitfalls === 'object' && 'nodeType' in page.fields.commonPitfalls) {
        commonPitfalls = documentToHtmlString(page.fields.commonPitfalls as Document, options);
        console.log('Successfully processed commonPitfalls content:', commonPitfalls);
      } else {
        console.log('CommonPitfalls is not in the expected Rich Text format:', page.fields.commonPitfalls);
      }
    } else {
      console.log('No commonPitfalls field found in Contentful response');
    }
  } catch (error) {
    console.error('Error processing content:', error);
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
    const fileUrl = page.fields.audioFile.fields.file.url;
    audioUrl = fileUrl.startsWith('//') ? `https:${fileUrl}` : fileUrl;
  }

  return (
    <main className="min-h-screen bg-paper p-8">
      <div className="max-w-4xl mx-auto p-8 rounded-lg border-2 border-kraft bg-paper shadow-lg">
        <Breadcrumb title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-heading font-medium text-ink">{title}</h1>
          {description ? (
            <div 
              className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-p:text-ink/80"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          ) : (
            <p className="text-ink/60 italic">No description available</p>
          )}
          {audioUrl && (
            <div className="mt-8">
              <AudioPlayerWrapper audioUrl={audioUrl} />
            </div>
          )}
          {/* TEST CONTAINER: If you see this, the page is rendering new code! */}
          <div style={{ background: 'lime', color: 'black', padding: 20, fontSize: 24 }}>
            TEST CONTAINER: If you see this, the page is rendering new code!
          </div>
          {body && (
            <div className="mt-12 border-t border-kraft pt-8">
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-p:text-ink/80"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          )}
          {commonPitfalls && (
            <div className="mt-12 border-t border-kraft pt-8">
              <h2 className="text-2xl font-heading font-medium text-ink mb-6">Common Pitfalls</h2>
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:font-medium prose-p:text-ink/80"
                dangerouslySetInnerHTML={{ __html: commonPitfalls }}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 