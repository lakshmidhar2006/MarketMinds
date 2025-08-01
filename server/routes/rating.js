const express = require("express");
const { predictRating } = require("../controller/ratingController");

const router = express.Router();
router.post("/", predictRating);

module.exports = router;
