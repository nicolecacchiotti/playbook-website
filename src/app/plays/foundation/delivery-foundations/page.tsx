import Breadcrumb from '@/components/Breadcrumb';
import AudioPlayerWrapper from '@/components/AudioPlayerWrapper';
import deliveryFoundationsArt from '@/../assets/Card Art/Delivery Foundations.svg';
import SecondaryTabNav from '@/components/SecondaryTabNav';

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
          <SecondaryTabNav tabs={['Overview', 'Process', 'Support']} />
          <div className="mt-8" id="overview-content">
            <h2 className="text-xl font-semibold mb-2">Why to use this play</h2>
            <p className="text-gray-700 mb-2">
              Non-delivery roles should be familiar with delivery concepts, terminology, and processes (they do NOT need to memorize them). It's important non-delivery leads are aware of key tools like Jira and backlogs, as well as ceremonies like refinement sessions. This knowledge helps manage both customer expectations and personal workloads, ensuring they don't become overcommitted. Feeling comfortable with these aspects will contribute to smoother project coordination and better alignment with delivery teams, especially when a specific delivery lead is not assigned.
            </p>
            <p className="text-gray-700">
              You won't need everything here when managing your project, but use this as a flexible guide to explore the tools and practices that best support your project.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 