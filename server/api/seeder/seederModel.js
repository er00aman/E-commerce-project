const mongoose = require('mongoose')

const seeder = mongoose.Schema({
    email : {type:String,default:null},
    password:{type:String,default:null},
    status: {type:Boolean,default:true},
    userType:{type:Number,default:1}
},{timestamps:true,versionKey:false})
module.exports = new mongoose.model('seeder',seeder)