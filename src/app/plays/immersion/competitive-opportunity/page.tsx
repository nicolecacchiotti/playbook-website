import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import competitiveOpportunityArt from '@/../assets/Card Art/CompetitiveOpportunity.svg';

export default function CompetitiveOpportunityPage() {
  const title = "Competitive Opportunity";
  const section = "Immersion";
  const audioUrl = "/audio/Competitive Opportunity.m4a";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Competitive Opportunity.</p>
                    <AudioPlayerWrapper 
              audioUrl={audioUrl} 
              imageSrc={competitiveOpportunityArt} 
              title="Competitive Opportunity"
              labels={['Research', 'Strategy']}
            />
          )
        </div>
      </div>
    </main>
  );
} 