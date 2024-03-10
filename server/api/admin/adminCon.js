const seeder = require('../seeder/seederModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const private = 'aman$110#kumar$110@yadav'

const adminLogin = (req,res)=>{
    let data = req.body
    validation = []

    if(!data.email)
    validation.push('Email')

    if(!data.password)
    validation.push('password')

    if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',')+ ' is/are required'
        })
    }else{
        seeder.findOne({email:data.email}).then(findData=>{
            if(!findData){
                res.json({
                    success:false,
                    status:404,
                    message:'User not found'
                })
            }else{
                bcrypt.compare(data.password,findData.password,(err,data)=>{
                    if(!data){
                        res.json({
                            success:false,
                            status:500,
                            message:'Invalid user'
                        })
                    }else{
                        let tokenData = {
                            email : findData.email,
                            password : findData.password
                        }
                        let token = jwt.sign(tokenData,private)
                        res.json({
                            success:true,
                            status:200,
                            message:'User login successfully',
                            data : findData,
                            token : token
                        })
                    }
                })
            }
        }).catch(err=>{
            res.json({
                success:false,
                status:400,
                message:'Internal server error'+err
            })
        })
    }
}

module.exports = {
    adminLogin
}