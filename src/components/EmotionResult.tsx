import React from 'react';

interface Props {
  emotion: string;
}

export default function EmotionResult({ emotion }: Props) {
  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold">Emoção Detectada:</h2>
      <p className="text-2xl text-blue-800 mt-2">{emotion}</p>
    </div>
  );
}