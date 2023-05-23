const db = require('../db/connection');

exports.fetchReview = (id) => {
	return db
		.query('SELECT * FROM reviews WHERE review_id = $1;', [id])
		.then((res) => {
			return res.rows[0];
		});
};

exports.fetchReviews = () => {
	return db.query('SELECT * FROM reviews;').then((res) => {
		return res.rows;
	});
};

exports.fetchCommentCount = (review_id) => {
	return db
		.query('SELECT COUNT(*) FROM comments WHERE review_id = $1', [
			review_id,
		])
		.then((res) => {
			return res.rows;
		});
};

exports.updateVotes = (review_id, inc_votes) => {
	return db
		.query(
			`UPDATE reviews SET votes = votes + $1 WHERE review_id = $2 RETURNING *;`,
			[inc_votes, review_id]
		)
		.then((res) => {
			return res.rows;
		});
};

exports.fetchReviews = (category, sort_by, order) => {
	const categoryQuery = category ? `WHERE reviews.category = $1` : '';
	const sortQuery = sort_by ? `ORDER BY reviews.${sort_by}` : '';
	const orderQuery = order ? `${order}` : 'DESC';
	const queryText = `SELECT * FROM reviews ${categoryQuery} ${sortQuery} ${orderQuery};`;
	const queryValues = [category];
	return db.query(queryText, queryValues).then((res) => {
		return res.rows;
	});
};
