const mongoose = require('mongoose')
const category = mongoose.Schema({
    categoryName :{type:String,default:null},
    status: {type:Boolean,default:true},
    userType: {type:Number,default:1}
},{timestamps:true,versionKey:false})

module.exports =  new mongoose.model('category',category)
