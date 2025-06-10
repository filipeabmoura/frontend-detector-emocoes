// ImageUpload.tsx
import React, { useState } from 'react';
import { detectEmotion } from '../services/emotionService';

interface Props {
  onDetect: (emotion: string) => void;
}

export default function ImageUpload({ onDetect }: Props) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = reader.result as string;
      setLoading(true);
      const emotion = await detectEmotion(base64Image);
      onDetect(emotion);
      setLoading(false);
    };

    reader.readAsDataURL(selectedImage);
  };

  return (
    <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: '1rem' }}
      />
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: '#16a34a',
          color: '#fff',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem',
          border: 'none',
          cursor: 'pointer',
          opacity: (!selectedImage || loading) ? 0.5 : 1,
        }}
        disabled={!selectedImage || loading}
      >
        {loading ? 'Analisando...' : 'Enviar Imagem'}
      </button>
    </div>
  );
}
