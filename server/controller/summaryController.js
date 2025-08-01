const { analyzeReview } = require("../utils/geminiApi");

const summarizeReviews = async (req, res) => {
  const { reviews } = req.body;
  if (!reviews || !Array.isArray(reviews)) {
    return res.status(400).json({ error: "Array of reviews is required" });
  }

  const combined = reviews.join("\n\n");

  const prompt = `
Summarize the following product reviews into 3–5 bullet points highlighting:
- Common strengths
- Common weaknesses
- Overall sentiment

Reviews:
${combined}
`;

  try {
    const summary = await analyzeReview(prompt);
    res.json({ summary: summary.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { summarizeReviews };
