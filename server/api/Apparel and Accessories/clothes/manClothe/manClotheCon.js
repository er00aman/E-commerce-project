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

module.exports = {
    add
}