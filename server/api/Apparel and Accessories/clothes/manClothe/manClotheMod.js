const mongoose = require('mongoose')
const manClothe = mongoose.Schema({
    categoryId: {type:mongoose.Schema.Types.ObjectId,ref:'category',default:null},
    clotheName: {type:String,default:null},
    clotheType: {type:String,default:null},
    clothePrice: {type:Number,default:null},
    description: {type:String,default:null},
    manClotheImage: {type:String,default:'No image'},
    status: {type:Boolean,default:true},
    userType: {type:Number,default:1},
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('manClothe',manClothe)