const db = require('../db/connection');
console.log('in model')
exports.fetchCategories = () => {
    return db.query('SELECT * FROM categories;').then((res)=>{
        return res.rows
    })
}