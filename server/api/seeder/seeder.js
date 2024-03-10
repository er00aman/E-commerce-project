const seeder = require('./seederModel')
const bcrypt = require('bcrypt')
salt = 10

seederRegister = ()=>{
    seeder.findOne({email:"seeder@gmail.com"}).then((data)=>{
        if(!data){
            let seederObj = seeder()
            seederObj.email = "seeder@gmail.com"
            seederObj.password = bcrypt.hashSync("seeder@123",salt)
            seederObj.save().then(()=>{
                console.log('seeder registered')
            })
        }else{
            console.log('seeder already exist')
        }
    })
}
module.exports = {
    seederRegister
}
