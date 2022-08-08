const express = require('express');
const router = express.Router();
const form = require('../controllers/form');
const catchAsync = require('../utils/catchAsync');



router.route("/")
      .get(catchAsync(form.index))

module.exports=router;