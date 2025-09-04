import VideoPlayer from '@/components/video-player';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-center">
            <div className="absolute left-0">
              <span className="font-headline text-3xl font-extrabold italic">G1</span>
            </div>
            <div className="font-headline text-lg font-bold uppercase tracking-widest">
              SAÚDE
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <VideoPlayer />
      </main>
    </div>
  );
}
