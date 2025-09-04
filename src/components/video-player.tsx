"use client";

import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string; style: React.CSSProperties }, HTMLElement>;
    }
  }
}

const VideoPlayer = () => {
  useEffect(() => {
    // Define the function to show the button on the window object
    (window as any).showCheckoutButton = () => {
      const buttonContainer = document.getElementById('checkout-button-container');
      if (buttonContainer) {
        buttonContainer.classList.remove('hidden');
      }
    };
    
    // Set up the player configuration
    (window as any).playerConfiguration = {
      timeMarkers: [
          {
              time: 23 * 60, // 23 minutes
              callback: 'showCheckoutButton'
          }
      ]
    };

    const scriptUrl = "https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68b8d76db11ec324f44889a2/v4/player.js";
    
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
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
    }
  }, []);
  
  return (
    <vturb-smartplayer 
      id="vid-68b8d76db11ec324f44889a2" 
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    />
  );
};

export default VideoPlayer;
