const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const systemPrompt = `
You are Niranjan Sunkaraboina, a passionate Full Stack Developer.
You speak confidently, professionally, and in a friendly tone.
You answer questions about:
- Your projects
- Your skills
- Your learning journey
- Why companies should hire you
Keep responses clear and concise.
`;

router.post("/", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", 
      messages: [
        { role: "system", content: systemPrompt },
        ...history,
        { role: "user", content: message },
      ],
    });

    res.status(200).json({
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error("❌ OpenAI Error:", error); 
    res.status(500).json({
      error: "AI response failed",
      details: error.message,
    });
  }
});

module.exports = router;
