const { fetchComments, deleteComment } = require('../models/comments.model');

exports.getComments = (req, res, next) => {
	const { review_id } = req.params;
	fetchComments(review_id)
		.then((comments) => {
			res.status(200).send({ comments });
		})
		.catch((error) => {
			next(error);
		});
};

exports.deleteComment = (req, res, next) => {
	const comment_id = req.params.comment_id;
	deleteComment(comment_id)
		.then((rowCount) => {
			res.status(204).send({});
		})
		.catch((error) => {
			next(error);
		});
};
