const db = require('../db/connection');

exports.postComment = (username, body, review_id) => {
    return db.query('INSERT INTO comments (username, body, review_id) VALUES ($1, $2, $3) RETURNING *;',[username, body, review_id]).then((res)=>{
        return res.rows[0]
    })
}