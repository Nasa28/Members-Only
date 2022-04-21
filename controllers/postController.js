const Post = require('../models/Post');
const data = require('../MOCK_DATA.json');
exports.getPosts = async (req, res, next) => {
  const posts = await Post.findAll();

  res.status(200).json({
    data: {
      posts,
    },
  });
};
exports.newPost = async (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = req.body.imageUrl;

  const newPost = await Post.bulkCreate({
    title,
    content,
    imageUrl,
  });
  res.status(200).json({
    newPost,
  });
};
