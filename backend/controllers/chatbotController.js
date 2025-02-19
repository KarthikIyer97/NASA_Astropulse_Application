

import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in .env
});

export const chatWithGPT = async (req, res) => {
  console.log("🔍 Received request:", req.method, req.url);
  console.log("🔍 Request headers:", req.headers);
  console.log("🔍 Request body:", req.body); // Debugging

  if (!req.body || typeof req.body !== "object") {
    console.error("❌ Invalid request body:", req.body);
    return res.status(400).json({ message: "Invalid request body" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    console.error("❌ Missing 'prompt' in request body");
    return res.status(400).json({ message: "Prompt is required" });
  }

  try {
    console.log("🔄 Sending request to OpenAI...");

    // ✅ Updated to use `gpt-3.5-turbo` (faster & cheaper) or `gpt-4`
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Change to "gpt-4" if needed
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
      max_tokens: 512,
      temperature: 0,
    });

    console.log("✅ OpenAI Response:", completion);
    res.json({ response: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error("🚨 Error processing chat request:", error.message, error.response?.data);
    res.status(500).json({ message: "Error processing chat request", error: error.message });
  }
};

