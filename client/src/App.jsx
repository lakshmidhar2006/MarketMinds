import React from "react";
import ReviewForm from "./components/ReviewForm";

function App() {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
      <h1>🧠 MarketMinds</h1>
      <p>AI-powered Product Review Analyzer</p>
      <ReviewForm />
    </div>
  );
}

export default App;
