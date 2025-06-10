import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

interface Props {
  onCapture: (emotion: string) => void;
}

const videoConstraints = {
  width: 640,
  height: 480,
  facingMode: 'user',
};

export default function CameraCapture({ onCapture }: Props) {
  const webcamRef = useRef<Webcam>(null);
  const [loading, setLoading] = useState(false);

  const capture = async () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/detect', { // <-- ALTERE AQUI para o endpoint do backend
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: imageSrc }), // <-- o backend deve aceitar Base64 da imagem
        });
        const data = await response.json();
        onCapture(data.emotion); // <-- o backend deve retornar { emotion: "happy" } por exemplo
      } catch (error) {
        console.error('Erro ao enviar imagem:', error);
        onCapture('Erro na detecção');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        className="rounded shadow-md mb-4"
      />
      <button
        onClick={capture}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Analisando...' : 'Detectar Emoção'}
      </button>
    </div>
  );
}