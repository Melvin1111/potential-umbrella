const {
	fetchReview,
	fetchReviews,
	fetchCommentCount,
	updateVotes,
} = require('../models/reviews.model');

exports.getReview = (req, res, next) => {
	const { id } = req.params;
	fetchReview(id)
		.then((review) => {
			res.status(200).send({ review });
		})
		.catch((error) => {
			next(error);
		});
};

exports.getReviews = (req, res, next) => {
	fetchReviews()
		.then((reviews) => {
			const reviewsWithCommentCounts = [];
			reviews.forEach((review) => {
				fetchCommentCount(review.review_id).then((comment_count) => {
					reviewsWithCommentCounts.push({ ...review, comment_count });
				});
			});
			res.status(200).send({ reviewsWithCommentCounts });
		})
		.catch((error) => {
			next(error);
		});
};

exports.patchVotes = (req, res, next) => {
	const { inc_votes } = req.body;
	const { review_id } = req.params;
	updateVotes(review_id, inc_votes)
		.then((review) => {
			res.status(200).send({ review });
		})
		.catch((error) => {
			next(error);
		});
};

exports.getReviewsQueries = (req, res, next) => {
	const { category, sort_by, order } = req.query;
	fetchReviews(category, sort_by, order)
		.then((reviews) => {
			const reviewsWithCommentCounts = [];
			reviews.forEach((review) => {
				fetchCommentCount(review.review_id).then((comment_count) => {
					reviewsWithCommentCounts.push({ ...review, comment_count });
				});
			});
			res.status(200).send({ reviewsWithCommentCounts });
		})
		.catch((error) => {
			next(error);
		});
};
