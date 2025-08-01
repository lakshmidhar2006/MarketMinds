const { analyzeReview } = require("../utils/geminiApi");

const extractTags = async (req, res) => {
  const { review } = req.body;
  if (!review) return res.status(400).json({ error: "Review is required" });

  const prompt = `
Extract the 3-5 most important product features mentioned in this review as a list of tags:
"${review}"

Return just a comma-separated list like: battery, screen, performance
`;

  try {
    const tags = await analyzeReview(prompt);
    res.json({ tags: tags.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { extractTags };
