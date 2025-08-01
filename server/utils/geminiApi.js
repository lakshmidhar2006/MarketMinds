const axios = require('axios');
require('dotenv').config();

// ✅ Use Gemini 1.5 Flash model
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent";

async function analyzeReview(promptText) {
  try {
    const response = await axios.post(`${GEMINI_API_URL}?key=${process.env.GEMINI_API_KEY}`, {
      contents: [{ parts: [{ text: promptText }] }],
    });

    const result = response.data.candidates[0].content.parts[0].text;
    return result;
  } catch (err) {
    console.error("Gemini API Error:", err.response?.data || err.message);
    throw new Error("Failed to analyze review with Gemini API");
  }
}

module.exports = { analyzeReview };
