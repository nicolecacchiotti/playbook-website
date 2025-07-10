import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import productMappingArt from '@/../assets/Card Art/ProductMap.svg';

export default function ProductMappingPage() {
  const title = "Product Mapping";
  const section = "Immersion";
  const audioUrl = "/audio/Product Mapping.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Product Mapping.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={productMappingArt} 
              title="Product Mapping"
              labels={['Product', 'Strategy']}
            />
          )
        </div>
      </div>
    </main>
  );
} 