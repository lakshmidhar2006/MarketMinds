const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", require("./routes/aanalyze.js"));
app.use("/api/rating", require("./routes/rating.js"));
app.use("/api/tags", require("./routes/tags.js"));
app.use("/api/summary", require("./routes/summary.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
