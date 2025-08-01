const express = require("express");
const { extractTags } = require("../controller/tagsController");

const router = express.Router();
router.post("/", extractTags);

module.exports = router;
