const Comment = require('../models/Comment');
const wrapAsync = require('../utils/wrapAsync');
const data = require('../MOCK_DATA.json');

exports.getComments = wrapAsync(async (req, res, next) => {
  const posts = await Comment.findAll();

  res.status(200).json({
    data: {
      posts,
    },
  });
});

exports.createComment = wrapAsync(async (req, res, next) => {
  const { title, content, imageUrl } = req.body;

  const newPost = await Comment.create(data);
  res.status(200).json({
    status: 'Comment Created',
  });
});
