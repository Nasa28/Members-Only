const Post = require('../models/Post');
const wrapAsync = require('../utils/wrapAsync');
const data = require('../MOCK_DATA.json');
exports.getPosts = wrapAsync(async (req, res, next) => {
  const posts = await Post.findAll();

  res.status(200).json({
    data: {
      posts,
    },
  });
});

exports.createPost = wrapAsync(async (req, res, next) => {
  const { title, content, imageUrl } = req.body;

  const newPost = await Post.create({
    title,
    content,
    imageUrl,
  });
  res.status(200).json({
    status: 'Post Created',
  });
});
