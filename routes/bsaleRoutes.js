const express = require("express");
const router = express.Router();
const { index } = require("../controllers/form");
const catchAsync = require("../utils/catchAsync");

//router.route("/").get(catchAsync(index));
router.get("/", index);
module.exports = router;
