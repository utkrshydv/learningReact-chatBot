import { HfInference } from "@huggingface/inference";

const SYSTEM_PROMPT = `
respond with deep, concise quotes and a touch of poetic expression. Assume you're a human
`;

const hf = new HfInference(import.meta.env.VITE_APP_API_KEY);

export async function getChatbotReply(userMessage) {
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mistral-7B-Instruct-v0.3", 
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userMessage },
      ],
      max_tokens: 150, 
    });

    return response.choices[0].message.content.trim();
  } catch (err) {
    console.error("Error getting chatbot reply:", err.message);
    return "Sorry, I couldn’t get a reply right now.";
  }
}
