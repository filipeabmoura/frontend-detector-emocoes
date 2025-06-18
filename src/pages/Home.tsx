import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setImage(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
  };

  const handleSubmit = async () => {
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
      {/* LOGO */}
      <img src={Logo} alt="Logo do Projeto" className="w-40 mb-4" />

      {/* TÍTULO */}
      <h1 className="text-4xl font-bold mb-2 text-gray-800 text-center">Detector de Emoções</h1>
      <p className="mb-6 text-gray-600 text-center">Envie uma foto e veja qual emoção está mais presente</p>

      {/* INPUT DE IMAGEM OU PREVIEW */}
      {imagePreview ? (
        <div className="mb-4 flex flex-col items-center">
          <img
            src={imagePreview}
            alt="Pré-visualização"
            className="w-72 h-72 object-cover rounded-lg shadow-md border-2 border-gray-300 opacity-0 animate-fade-in"
          />
          <button
            onClick={handleRemoveImage}
            className="mt-3 text-blue-600 hover:underline text-sm"
          >
            Trocar imagem
          </button>
        </div>
      ) : (
        <>
          <label
            htmlFor="imageUpload"
            className="cursor-pointer bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 w-72 text-center text-gray-500 hover:border-blue-500 transition mb-4"
          >
            Clique para escolher uma imagem
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </>
      )}

      {/* BOTÃO */}
      <button
        onClick={handleSubmit}
        disabled={!image}
        className={`w-72 py-2 rounded text-white transition ${
          image
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Detectar Emoção
      </button>

      {/* ANIMAÇÃO */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
