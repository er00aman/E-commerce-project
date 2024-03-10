const manClothe =  require('./manClotheMod')

const add = (req,res)=>{
    let data = req.body
    validation = []

    if(!data.categoryId)
    validation.push('Category id')

    if(!data.clotheName)
    validation.push('Clothe name')

    if(!data.clothePrice)
    validation.push('Clothe price')

    if(!data.description)
    validation.push('Clothe description')

    if(validation.length>0){
        res.json({
            success:false,
            status:422,
            message:validation.join(',')+' is/are required'
        })
    }else{
        manClothe.findOne({clotheName:data.clotheName}).then(findObj=>{
            if(!!findObj){
                res.json({
                    success:false,
                    status:500,
                    message:'Clothe already exist'
                })
            }else{
                let clothObj = new manClothe

                clothObj.categoryId = data.categoryId
                clothObj.clotheName = data.clotheName
                clothObj.clothePrice = data.clothePrice
                clothObj.description = data.description

                if(req.file)
                clothObj.manClotheImage ='/manClothe'+ req.file.filename

                clothObj.save().then(saveObj=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Clothe added successfully',
                        data: saveObj
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:500,
                        message:'Server error'+err
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


const getAll = (req,res)=>{
    manClothe.find(req.body).then(findObj1=>{
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
        manClothe.findOne({_id:data._id}).then(findData=>{
            if(!findData){
                res.json({
                    success:false,
                    status:422,
                    message:'Not found!'
                })
            }else{
                res.json({
                    success:true,
                    status:200,
                    message:'Data loaded',
                    data:findData
                })
            }
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
            message:validation.join(',')+' is/are required'
        })
    }else{
        manClothe.findOne({_id:data._id}).then(findData1=>{
            if(!findData1){
                res.json({
                    success:false,
                    status:404,
                    message:'Not found!'
                })
            }else{
                if(data.categoryId)
                findData1.categoryId = data.categoryId

                if(data.clotheName)
                findData1.clotheName = data.clotheName

                if(data.clothePrice)
                findData1.clothePrice = data.clothePrice

                if(data.file)
                findData1.manClotheImage = '/manClothe' + req.body.filename

                if(data.description)
                findData1.description = data.description

                findData1.save().then(saveData=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Clothe updated successfully',
                        data:saveData
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:500,
                        message:'Server error'+err
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

block = (req,res)=>{
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
        manClothe.findOne({_id:data._id}).then(findData2=>{
            if(!findData2){
                res.json({
                    success:false,
                    status:404,
                    message:'Not found!'
                })
            }else{
                findData2.status = data.status
                findData2.save().then(saveObj2=>{
                    res.json({
                        success:true,
                        status:200,
                        message:'Clothe blocked successfully',
                        data:saveObj2
                    })
                }).catch(err=>{
                    res.json({
                        success:false,
                        status:500,
                        message:'Server error'+err
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