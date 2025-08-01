import React from "react";
import ReviewForm from "./components/ReviewForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>🧠 MarketMinds</h1>
      <p>AI-powered Product Review Analyzer</p>
      <ReviewForm />
    </div>
  );
}

export default App;
