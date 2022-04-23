const Comment = require('../models/Comment');
const wrapAsync = require('../utils/wrapAsync');
const data = require('../MOCK_DATA.json');

exports.createComment = wrapAsync(async (req, res, next) => {
  const { post_id, commentBody } = req.body;
  const comment = await Comment.create({
    post_id,
    commentBody,
  });

  res.status(200).json({
    status: 'Comment created',
    comment,
  });
});

exports.getComments = wrapAsync(async (req, res, next) => {
  const post_id = req.params.post_id;
  const comments = await Comment.findAll({ where: { post_id: post_id } });
  res.status(200).json({
    status: 'Success',
    data: {
      count: comments.length,
      comments,
    },
  });
});
