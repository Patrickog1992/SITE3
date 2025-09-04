"use client";

import { useEffect } from 'react';

// This declaration allows TypeScript to recognize the custom <vturb-smartplayer> element.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string; style: React.CSSProperties }, HTMLElement>;
    }
  }
}

const VideoPlayer = () => {
  useEffect(() => {
    const scriptUrl = "https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68b8d76db11ec324f44889a2/v4/player.js";
    
    // Prevents adding the script multiple times on re-renders.
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    // The script is for a media player and should ideally persist, so no cleanup is necessary.
  }, []);
  
  return (
    // The external script will target this custom element by its ID to inject the video player.
    // The inline style is used to match the user's provided snippet exactly.
    <vturb-smartplayer 
      id="vid-68b8d76db11ec324f44889a2" 
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    />
  );
};

export default VideoPlayer;
