const {fetchCategories} = require('../models/categories.model')
console.log('in controller')

exports.getCategories = (req,res,next)=>{
    console.log('categories')
    fetchCategories().then((categories)=>{
        res.status(200).send({categories})
    }).catch((error)=>{
        next(error)
    })
}