import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    // Aqui você faria o upload pro backend real. Por enquanto é mock.
    const fakeResponse = {
      emotion: "happy",
      probabilities: {
        happy: 0.78,
        sad: 0.05,
        angry: 0.01,
        surprised: 0.1,
        neutral: 0.06,
      },
    };

    navigate("/result", {
      state: {
        emotion: fakeResponse.emotion,
        probabilities: fakeResponse.probabilities,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-2">Detector de Emoções</h1>
      <p className="mb-6 text-gray-600">Envie uma foto e veja qual emoção está mais presente</p>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        disabled={!image}
      >
        Detectar Emoção
      </button>
    </div>
  );
}
