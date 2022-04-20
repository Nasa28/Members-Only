const Post = require('../models/Post');

exports.getPosts = async (req, res, next) => {
  const posts = await Post.findAll();

  res.status(200).json({
    data: {
      posts,
    },
  });
};
