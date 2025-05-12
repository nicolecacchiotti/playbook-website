import { client } from '@/lib/contentful';

export async function generateStaticParams() {
  // Fetch all entries of your content type
  const entries = await client.getEntries({ content_type: 'playbookInnerPage' });
  // Return an array of params for static generation
  return entries.items.map((item: any) => ({ slug: item.fields.slug }));
}

export default async function PlaybookPage({ params }: { params: { slug: string } }) {
  // Fetch the entry for the current slug
  const entries = await client.getEntries({
    content_type: 'playbookInnerPage',
    'fields.slug': params.slug,
  });
  const page = entries.items[0];

  if (!page || typeof page.fields !== 'object') return <div>Not found</div>;

  const title = typeof page.fields.title === 'string' ? page.fields.title : '';
  const description = typeof page.fields.description === 'string' ? page.fields.description : '';
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
    audioUrl = `https:${page.fields.audioFile.fields.file.url}`;
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{description}</p>
        {audioUrl && (
          <audio controls src={audioUrl} className="w-full mt-4" />
        )}
      </div>
    </main>
  );
} 