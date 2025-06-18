import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { emotion, probabilities } = location.state || {};

  if (!emotion || !probabilities) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <p className="text-red-600 text-lg font-semibold mb-4">Nenhum dado recebido.</p>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Voltar para a Home
        </button>
      </div>
    );
  }

  const emotionEmojis: Record<string, string> = {
    happy: "😊",
    sad: "😢",
    angry: "😠",
    fearful: "😨",
    surprised: "😲",
    neutral: "😐",
    disgusted: "🤢",
  };

  const chartData = {
    labels: Object.keys(probabilities),
    datasets: [
      {
        label: "Probabilidade",
        data: Object.values(probabilities),
        backgroundColor: "#3B82F6",
        borderRadius: 6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-2">Você está sentindo:</h1>
      <div className="text-6xl mb-2">{emotionEmojis[emotion.toLowerCase()] || "🙂"}</div>
      <p className="text-2xl font-semibold text-gray-700 mb-8 capitalize">{emotion}</p>

      <div className="w-full max-w-xl mb-8 bg-white p-4 rounded-xl shadow">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => navigate("/")}
      >
        Voltar
      </button>
    </div>
  );
}
