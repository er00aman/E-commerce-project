const category = require('./categoryMod')

const add  =(req,res)=>{
    let data = req.body
    validation = []

    if(!data.categoryName)
    validation.push('Category name')

    if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',')+' is/are required'
        })
    }else{
        category.findOne({categoryName:data.categoryName}).then(findObj=>{
            if(!!findObj){
                res.json({
                    success:false,
                    status:500,
                    message:'Category name is already exist'
                })
            }else{
                let catObj = new category()

                catObj.categoryName = data.categoryName
                catObj.save().then(catSave=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Category added',
                        data:catSave
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:400,
                        message:'Internal server error'+err
                    })
                })
            }
        }).catch(err=>{
            res.json({
                success:false,
                status:400,
                message:'Error'+err
            })
        })
    }
}


const getAll =(req,res)=>{
    category.find(req.body).then(findObj1=>{
        res.json({
            success:true,
            status:200,
            message:'Data loaded',
            data:findObj1
        })
    }).catch(err=>{
        res.json({
            success:false,
            status:400,
            message:'Internal server error'+err
        })
    })
}


const getSingle = (req,res)=>{
    let data = req.body
    validation = []

    if(!data._id)
    validation.push('Id')

    if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',')+' is/are required'
        })
    }else{
        category.findOne({_id:data._id}).then(findObj2=>{
            if(!findObj2){
                res.json({
                    success:false,
                    status:404,
                    message:'Not found'
                })
            }else{
                res.json({
                    success:true,
                    status:200,
                    message:'Data loaded',
                    data:findObj2
                })
            }
        }).catch(err=>{
            res.json({
                success:false,
                status:400,
                message:'Internal server error'
            })
        })
    }
}

const update = (req,res)=>{
     let data = req.body
     validation = []

     if(!data._id)
     validation.push('Id')

     if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',') + ' is/are required'
        })
     }else{
        category.findOne({_id:data._id}).then(findObj3=>{
            if(!findObj3){
                res.json({
                    success:false,
                    status:404,
                    message:'Not found'
                })
            }else{
                if(data.categoryName)
                findObj3.categoryName = data.categoryName

                findObj3.save().then(saveObj1=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Category updated successfully',
                        data:findObj3
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:400,
                        message:'Error'+err
                    })
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


const block = (req,res)=>{
    let data = req.body
    validation = []

    if(!data._id)
    validation.push('Id')

    if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',')+ ' is/are required'
        })
    }else{
        category.findOne({_id:data._id}).then(findObj4=>{
            if(!findObj4){
                res.json({
                    success:false,
                    status:404,
                    message:'Not found!'
                })
            }else{
                findObj4.status = data.status
                findObj4.save().then(saveObj2=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Category block successfully',
                        data:saveObj2
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:500,
                        message:'Error'+err
                    })
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
    add,
    getAll,
    getSingle,
    update,
    block
}