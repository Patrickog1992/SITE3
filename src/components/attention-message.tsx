"use client";

import { useState, useEffect } from 'react';

const AttentionMessage = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // This code runs only on the client, after the component has mounted.
    // This avoids hydration mismatch errors between server and client.
    const date = new Date();
    const formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []); // Empty dependency array ensures this runs only once.

  if (!currentDate) {
    // Render nothing on the server and on the initial client render
    return null;
  }

  return (
    <div className="bg-yellow-400 text-black text-center p-2 font-bold animate-pulse">
      ATENÇÃO: Devido ao grande número de acesso o site irá sair do ar hoje: {currentDate}
    </div>
  );
};

export default AttentionMessage;
