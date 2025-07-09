import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import mentorshipArt from '@/../assets/Card Art/Mentorship.svg';

export default function MentorshipForMenteesPage() {
  const title = "Mentorship for Mentees";
  const section = "Foundation";
  const audioUrl = ""; // No audio file for mentorship yet

  return (
    <main className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-foreground">This is the page for Mentorship for Mentees.</p>
          <AudioPlayerWrapper 
            audioUrl={audioUrl} 
            imageSrc={mentorshipArt} 
            title="Mentorship for Mentees"
            labels={['Teams', 'Growth']}
          />
        </div>
      </div>
    </main>
  );
} 