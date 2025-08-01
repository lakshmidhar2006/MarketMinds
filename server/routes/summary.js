const express = require("express");
const { summarizeReviews } = require("../controller/summaryController");

const router = express.Router();
router.post("/", summarizeReviews);

module.exports = router;
