import { GoogleGenAI } from "@google/genai";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBrainrotAdvice = async (query: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Erro: API Key não encontrada. O oráculo está dormindo.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Você é o Oráculo do Brainrot no jogo fictício do Roblox 'Roube um Brainrot'. 
      Analise a pergunta do usuário sobre o ranking ou sobre o jogo.
      Responda de forma curta, engraçada e usando gírias de internet/roblox/brainrot (ex: 'skibidi', 'sigma', 'taxa', 'noob', 'farmar').
      
      Contexto do Ranking:
      Top 1: Builderman (18.2B)
      Top 2: KreekCraft (16.5B)
      Top 3: enzosa2023 (10B)
      ...até Top 50.
      
      Pergunta do usuário: "${query}"`,
    });
    
    return response.text || "O oráculo está confuso (skibidi glitch).";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Ocorreu um erro ao consultar o oráculo.";
  }
};
