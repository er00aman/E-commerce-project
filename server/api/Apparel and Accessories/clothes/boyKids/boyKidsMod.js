const mongoose = require('mongoose')
const boyKids = mongoose.Schema({
    clotheName: {type:String,default:null},
    clotheType: {type:String,default:null},
    clothePrice: {type:Number,default:null},
    clotheImage: {type:String,default:null},
    description: {type:String,default:null},
    status: {type:Boolean,default:true}
},{timestamps:true,versionKey:false})

module.exports = new mongoose.model('kidsClothe',boyKids)