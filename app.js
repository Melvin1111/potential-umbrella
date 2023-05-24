const express = require('express');
const { getCategories } = require('./controllers/categories.controller');
const { getComments, deleteComment } = require('./controllers/comments.controller');
const { postComment } = require('./controllers/reviews-comments.controller');
const { getReview, getReviews, patchVotes, getReviewsQueries, } = require('./controllers/reviews.controller');

//require controllers here

const app = express();

app.get('/api/categories', getCategories);
app.get('/api/comments/:review_id', getComments);
app.post('/api/comments/:review_id', postComment);
app.delete('/api/comments/:comment_id', deleteComment);
app.get('/api/reviews', getReviews);
app.get('/api/reviews/:id', getReview);
app.patch('/api/reviews/:review_id', patchVotes);
app.get('/api/reviews/queries', getReviewsQueries);
app.get('/api/reviews/users', getUsers);

module.exports = app;
