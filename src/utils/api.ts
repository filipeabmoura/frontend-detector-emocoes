export const enviarImagem = async (imagem: File) => {
  const formData = new FormData();
  formData.append("file", imagem);

  const response = await fetch("http://localhost:8000/analisa", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.erro || "Erro desconhecido.");
  }

  return await response.json();
};
