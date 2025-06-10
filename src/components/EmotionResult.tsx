import React from 'react';

interface Props {
  emotion: string;
}

export default function EmotionResult({ emotion }: Props) {
  return (
    <div
        style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
        >
        <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Emoção Detectada:</h2>
        <p style={{ fontSize: '1.5rem', color: '#1e40af', marginTop: '0.5rem' }}>
            {emotion}
        </p>
    </div>
  );
}