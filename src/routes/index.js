//routes
const express = require('express');
const admin = require('./admin');

const router = express.Router();

router.use('/admin', require('./admin'));

module.exports = router;