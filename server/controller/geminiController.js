const { analyzeReview } = require("../utils/geminiApi");

const analyze = async (req, res) => {
  const { review } = req.body;

  if (!review) {
    return res.status(400).json({ error: "Review text is required." });
  }

  const prompt = `
You're an AI review analyst. Analyze the following product review:
"${review}"

Give me:
1. Sentiment (Positive/Neutral/Negative)
2. Key features mentioned (as bullet points)
3. One improvement suggestion
  `;

  try {
    const analysis = await analyzeReview(prompt);
    res.json({ analysis });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { analyze };

