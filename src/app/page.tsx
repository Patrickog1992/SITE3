"use client";

import AttentionMessage from '@/components/attention-message';
import Testimonials from '@/components/testimonials';
import VideoPlayer from '@/components/video-player';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Define the function to show the button on the window object
    (window as any).showCheckoutButton = () => {
      setShowButton(true);
    };

    // Set up the player configuration
    (window as any).playerConfiguration = {
      timeMarkers: [
        {
          time: 5, // 5 seconds
          callback: 'showCheckoutButton'
        }
      ]
    };

    const scriptUrl = "https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68b8d76db11ec324f44889a2/v4/player.js";
    
    // Check if the script is already added
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      // If it is, maybe just re-set the config if needed or do nothing.
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function to remove the global function when the component unmounts
    return () => {
      delete (window as any).showCheckoutButton;
      delete (window as any).playerConfiguration;
      
      const scriptElement = document.querySelector(`script[src="${scriptUrl}"]`);
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="bg-red-600 text-destructive-foreground shadow-md">
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
      <AttentionMessage />
      <main className="flex-grow container mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <VideoPlayer />
        <div className={`my-8 text-center h-[100px] flex items-center justify-center ${!showButton ? 'invisible' : 'visible'}`}>
            <Link href="https://pay.kirvano.com/5b1bd10e-ce3e-4c9b-a202-3bdfcfd4d4d7" id="checkout-button-container">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg sm:text-2xl py-6 px-8 sm:py-8 sm:px-12 rounded-lg shadow-lg animate-pulse w-full sm:w-auto"
              >
                QUERO O TRATAMENTO COMPLETO
              </Button>
            </Link>
        </div>
        <div className="my-8">
          <Image
            src="https://i.imgur.com/Lg34LJp.png"
            alt="Métodos de pagamento"
            width={640}
            height={95}
            className="mx-auto"
            data-ai-hint="payment methods"
          />
        </div>
        <Testimonials />
      </main>
    </div>
  );
}
