const mongoose = require('mongoose')
const category = mongoose.Schema({
    categoryName :{type:String,default:null},
    status: {type:Boolean,default:true},
    createdAt: {type:Date,default:Date.now()},
    userType: {type:Number,default:1}
})

module.exports =  new mongoose.model('category',category)
