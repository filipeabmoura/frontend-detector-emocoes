import { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import EmotionResult from '../components/EmotionResult';
import { Link } from 'react-router-dom';

export default function UploadPage() {
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
            Detectar Emoção via Imagem da Galeria
        </h1>

        <ImageUpload onDetect={setEmotion} />

        {emotion && <EmotionResult emotion={emotion} />}

        <Link
            to="/"
            style={{
            marginTop: '1.5rem',
            color: '#3b82f6',
            textDecoration: 'underline',
            }}
        >
            ← Voltar
        </Link>
    </div>
  );
}
