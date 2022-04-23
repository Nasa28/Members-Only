const express = require('express');

const router = express.Router();

const { getComments, createComment } = require('../controllers/commentController');

router.route('/').get(getComments).post(createComment);

module.exports = router;
