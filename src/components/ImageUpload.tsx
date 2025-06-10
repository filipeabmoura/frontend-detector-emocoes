import React, { useState } from 'react';

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
      const base64Image = reader.result;

      setLoading(true);
      try {
        const response = await fetch('http://localhost:5000/detect', { // <-- ALTERE AQUI
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Image }), // deve estar em base64
        });
        const data = await response.json();
        onDetect(data.emotion);
      } catch (error) {
        console.error('Erro ao enviar imagem:', error);
        onDetect('Erro na detecção');
      } finally {
        setLoading(false);
      }
    };

    reader.readAsDataURL(selectedImage); // Converte imagem em base64
  };

  return (
    <div className="mt-6 flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
        disabled={!selectedImage || loading}
      >
        {loading ? 'Analisando...' : 'Enviar Imagem'}
      </button>
    </div>
  );
}
