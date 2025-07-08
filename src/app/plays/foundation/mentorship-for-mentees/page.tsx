import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import mentorshipArt from '@/../assets/Card Art/Mentorship.svg';

export default function MentorshipForMenteesPage() {
  const title = "Mentorship for Mentees";
  const section = "Foundation";
  const audioUrl = ""; // No audio file for mentorship yet

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for Mentorship for Mentees.</p>
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