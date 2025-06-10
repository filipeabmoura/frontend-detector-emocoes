import { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import EmotionResult from '../components/EmotionResult';
import { Link } from 'react-router-dom';

export default function WebcamPage() {
  const [emotion, setEmotion] = useState<string | null>(null);

  return (
    <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            padding: '1.5rem',
        }}
        >
        <h1
            style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            }}
        >
            Detectar Emoção via Câmera/Webcam
        </h1>
        <CameraCapture onCapture={setEmotion} />
        {emotion && <EmotionResult emotion={emotion} />}
        <Link
            to="/"
            style={{
            marginTop: '1.5rem',
            color: '#3b82f6', // azul semelhante ao Tailwind
            textDecoration: 'underline',
            }}
        >
            ← Voltar
        </Link>
    </div>
  );
}
