const express = require('express')
const app = express()
const port = 8000


//DB require
const db = require('./server/config/db')

//middleware
app.use(express.urlencoded())
app.use(express.json())

// app.use(express.static(__dirname+"/server/public"))

//admin
const admin = require('./server/api/seeder/seeder')
admin.seederRegister()

//routes
const routers = require('./server/api/router/apiRoutes')
app.use('/api',routers)

app.listen(port,(req,res)=>{
    console.log('Server is running at port no 8000')
})