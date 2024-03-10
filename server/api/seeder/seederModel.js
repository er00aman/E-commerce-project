const mongoose = require('mongoose')

const seeder = mongoose.Schema({
    email : {type:String,default:null},
    password:{type:String,default:null},
    status: {type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
    userType:{type:Number,default:1}
})
module.exports = new mongoose.model('seeder',seeder)