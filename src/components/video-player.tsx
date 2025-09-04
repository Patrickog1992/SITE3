"use client";

import { useEffect } from 'react';

// Declaração global para o player de vídeo, se necessário.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { id: string; style: React.CSSProperties }, HTMLElement>;
    }
  }
}

const VideoPlayer = () => {
  useEffect(() => {
    // Função que será chamada pelo player
    (window as any).showCheckoutButton = () => {
      // Encontra o container do botão pelo ID
      const buttonContainer = document.getElementById('checkout-button-container');
      if (buttonContainer) {
        // Remove a classe 'hidden' para exibir o botão
        buttonContainer.classList.remove('hidden');
      }
    };
    
    // Configuração do player com o tempo e a função de callback
    (window as any).playerConfiguration = {
      timeMarkers: [
          {
              time: 5, // 5 segundos para teste
              callback: 'showCheckoutButton'
          }
      ]
    };

    // URL do script do player
    const scriptUrl = "https://scripts.converteai.net/1a6a90ad-f1f6-4f11-b6be-e02b59de709c/players/68b8d76db11ec324f44889a2/v4/player.js";
    
    // Evita adicionar o script múltiplas vezes
    if (document.querySelector(`script[src="${scriptUrl}"]`)) {
      return;
    }

    // Cria e adiciona o script à página
    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    // Função de limpeza para quando o componente for desmontado
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
