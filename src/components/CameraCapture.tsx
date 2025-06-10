// CameraCapture.tsx
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { detectEmotion } from '../services/emotionService';

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
      const emotion = await detectEmotion(imageSrc);
      onCapture(emotion);
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        style={{
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '1rem',
        }}
      />
      <button
        onClick={capture}
        disabled={loading}
        style={{
          backgroundColor: '#2563eb',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          opacity: loading ? 0.5 : 1,
        }}
      >
        {loading ? 'Analisando...' : 'Detectar Emoção'}
      </button>
    </div>
  );
}
