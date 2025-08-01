const { analyzeReview } = require("../app");

const predictRating = async (req, res) => {
  const { review } = req.body;
  if (!review) return res.status(400).json({ error: "Review is required" });

  const prompt = `
Based on this product review:
"${review}"
Predict a star rating from 1 to 5. Only return the number.
`;

  try {
    const rating = await analyzeReview(prompt);
    res.json({ rating: rating.trim() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { predictRating };
