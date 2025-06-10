import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
        style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            padding: '1.5rem',
        }}
        >
        <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
            Como deseja enviar sua imagem?
        </h1>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
            <button
            onClick={() => navigate('/webcam')}
            style={{
                backgroundColor: '#2563eb',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
            }}
            onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#1d4ed8';
                }}
            onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb';
            }}
            >
            Tirar Foto (Webcam)
            </button>
            <button
            onClick={() => navigate('/upload')}
            style={{
                backgroundColor: '#16a34a',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
            }}
            onMouseOver={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#15803d';
                }}
            onMouseOut={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#16a34a';
            }}
            >
            Enviar da Galeria
            </button>
        </div>
    </div>

  );
}
