import React, { useState } from "react";
import axios from "axios";
import "./ReviewForm.css"; // ✅ Import the CSS styles

const BACKEND_URL = "https://marketminds-ck1v.onrender.com/api";

const ReviewForm = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("analyze");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      let response;

      if (type === "summary") {
        const reviewsArray = input.split("\n").filter(line => line.trim() !== "");
        response = await axios.post(`${BACKEND_URL}/summary`, { reviews: reviewsArray });
        setResult(response.data.summary);
      } else {
        const route = type === "analyze" ? "analyze" : type;
        response = await axios.post(`${BACKEND_URL}/${route}`, { review: input });
        const key = Object.keys(response.data)[0]; // 'analysis', 'rating', or 'tags'
        setResult(response.data[key]);
      }
    } catch (err) {
      console.error(err);
      setResult("Error: Could not get a response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-form-container">
      <label>
        <strong>Select Analysis Type:</strong>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="analyze">Sentiment + Suggestion</option>
          <option value="rating">Rating Prediction</option>
          <option value="tags">Tag Extraction</option>
          <option value="summary">Summary (multiple reviews)</option>
        </select>
      </label>

      <textarea
        rows={type === "summary" ? 8 : 5}
        placeholder={
          type === "summary"
            ? "Enter multiple reviews (each in a new line)"
            : "Paste a single product review..."
        }
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      {result && (
        <div className="result-box">
          <strong>Result:</strong>
          <div>{result}</div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
