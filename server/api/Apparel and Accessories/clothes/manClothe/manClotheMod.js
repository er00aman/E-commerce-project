const mongoose = require('mongoose')
const manClothe = mongoose.Schema({
    categoryId: {type:mongoose.Schema.Types.ObjectId,ref:'category',default:null},
    clotheName: {type:String,default:null},
    clothePrice: {type:Number,default:null},
    description: {type:String,default:null},
    manClotheImage: {type:String,default:'No image'},
    status: {type:Boolean,status:true},
    userType: {type:Number,default:1},
    createdAt: {type:Date,default:Date.now()}
})

module.exports = new mongoose.model('manClothe',manClothe)