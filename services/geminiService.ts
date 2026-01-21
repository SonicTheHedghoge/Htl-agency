import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  // Construct context from history for a simple stateless completion if needed,
  // or use the contents parameter structure for multi-turn.
  // We will flatten history into a prompt structure for simple generateContent usage
  // to adhere strictly to the requested method of "generateContent" with config.
  
  // Format history for context (simplified for this demo)
  const conversationHistory = history
    .map((msg) => `${msg.role === 'user' ? 'User' : 'Agent'}: ${msg.text}`)
    .join('\n');

  const fullPrompt = `
    ${conversationHistory}
    User: ${message}
    Agent:
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: fullPrompt,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I could not generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};