import React, { useState } from 'react';
import CameraCapture from './components/CameraCapture';
import ImageUpload from './components/ImageUpload';
import EmotionResult from './components/EmotionResult';

export default function App() {
  const [emotion, setEmotion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Detector de Emoções Faciais</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Usar Webcam</h2>
          <CameraCapture onCapture={setEmotion} />
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Enviar Imagem</h2>
          <ImageUpload onDetect={setEmotion} />
        </div>
      </div>

      {emotion && <EmotionResult emotion={emotion} />}
    </div>
  );
}
