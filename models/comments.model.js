const db = require('../db/connection');

exports.fetchComments = (review_id) => {
	return db
		.query('SELECT * FROM comments WHERE review_id = $1;', [review_id])
		.then((res) => {
			return res.rows;
		});
};

exports.deleteComment = (comment_id) => {
	return db
		.query(`DELETE FROM comments WHERE comment_id = $1;`, [comment_id])
		.then((res) => {
			return res.rowCount;
		});
};
