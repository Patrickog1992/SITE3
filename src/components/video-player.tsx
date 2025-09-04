"use client";

import { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    const scriptUrl = "https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68b8d76db11ec324f44889a2/player.js";
    
    // Check if the script is already on the page.
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
        return;
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

  }, []);
  
  return (
    <div 
      id="vid_68b8d76db11ec324f44889a2" 
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    />
  );
};

export default VideoPlayer;
