import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import deliveryFoundationsArt from '@/../assets/Card Art/Delivery Foundations.svg';

export default function DeliveryFoundationsPage() {
  const title = "Delivery Foundations";
  const section = "Foundation";
  const audioUrl = "/audio/delivery-foundations-playbook.wav"; // Place the .wav file in public/audio/

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>Delivery responsibilities span four key areas: client, project, product, and team. When a delivery lead is not assigned, Delivery Foundations offers guidance to help others fulfill these roles and ensure smooth project management. This play primarily focuses on delivery for Design and Discovery projects.</p>
          <AudioPlayerWrapper audioUrl={audioUrl} imageSrc={deliveryFoundationsArt} />
        </div>
      </div>
    </main>
  );
} 