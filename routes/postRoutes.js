const express = require('express');

const router = express.Router();

const { getPosts, newPost } = require('../controllers/postController');

router.route('/').get(getPosts).post(newPost);

module.exports = router;

