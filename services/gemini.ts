
import { GoogleGenAI } from "@google/genai";
import { Message, Role } from "../types";
import { MOCK_PRODUCTS } from "../constants";

// Helper to provide context based on user role
const getContextForRole = (role: Role): string => {
  const productSummary = MOCK_PRODUCTS.map(p => `${p.name}: ${p.unit} is KES ${p.price} at ${p.location}. Stock: ${p.stock}`).join('\n');
  
  switch (role) {
    case 'Customer':
      return `You are SmartMart AI, a helpful digital assistant in WintaMart Supermarket. 
      Your goal is to help customers find products, compare prices, and suggest related items. 
      Be friendly, concise, and helpful. Use KES as currency.
      Available Inventory:
      ${productSummary}`;
    case 'Staff':
      return `You are SmartMart Internal Assistant. You help store staff with tasks, item locations (code-based), and store rules.
      Be professional, efficient, and direct. 
      Help with item codes: Sugar(204), Flour(301), Oil(405).
      Inventory Context:
      ${productSummary}`;
    case 'Manager':
      return `You are SmartMart Strategic Analyst. You help the Store Manager with sales trends, inventory management, and demand prediction.
      Use data-driven insights. 
      Alert on low stock items (less than 15 units).
      Current Inventory Health:
      ${productSummary}`;
    default:
      return "";
  }
};

/**
 * Handles chat interactions using the Gemini API.
 */
export const chatWithAI = async (role: Role, history: Message[], userInput: string): Promise<string> => {
  // Create a new instance right before making an API call to ensure it uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Map existing history to Gemini contents format
    const contents = history.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Add current user input
    contents.push({
      role: 'user',
      parts: [{ text: userInput }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        // Correctly set system instruction in config
        systemInstruction: getContextForRole(role),
        temperature: 0.7,
        topP: 0.95,
        // Recommendation: Avoid maxOutputTokens without thinkingBudget if possible to prevent blocked responses
      }
    });

    // Access the .text property directly as per SDK guidelines
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently busy. Please try again in a moment.";
  }
};
