const express = require("express");
const { analyze } = require("../controller/geminiController");

const router = express.Router();
router.post("/", analyze);

module.exports = router;
