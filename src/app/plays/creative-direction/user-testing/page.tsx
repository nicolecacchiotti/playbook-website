import Breadcrumb from '@/components/Breadcrumb';

export default function Page() {
  const title = "User Testing";
  const section = "Creative Direction";

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <Breadcrumb section={section} title={title} />
        <div className="mt-6 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p>This is the page for User Testing.</p>
        </div>
      </div>
    </main>
  );
} 