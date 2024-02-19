require("dotenv").config();
const axios = require("axios");

const secretKey = process.env.OPENAI_API_KEY;
const prompt = process.env.OPENAI_PROMPT;

const readContract = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `${prompt}: ${message}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error calling ChatGPT Assistants API:", error.message);
    throw error;
  }
};

module.exports = {
  readContract,
};
