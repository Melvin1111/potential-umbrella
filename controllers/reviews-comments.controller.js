const {postComment} = require('../models/reviews-comments.model')

exports.postComment = (req,res,next)=>{
    const {username, body} = req.body
    const review_id = req.params.review_id
    postComment(username, body, review_id).then((comment)=>{
        res.status(201).send({comment})
    }).catch((error)=>{
        next(error)
    })
}