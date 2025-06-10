// src/services/emotionService.ts

export async function detectEmotion(base64Image: string): Promise<string> {
  try {
    const response = await fetch('http://localhost:5000/detect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: base64Image }),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!data.emotion) {
      throw new Error('Resposta inválida do servidor');
    }

    return data.emotion;
  } catch (error) {
    console.error('Erro na detecção de emoção:', error);
    return 'Erro na detecção';
  }
}
