const express=require('express')
const app=express()
const mongoose=require('mongoose')
const route=require('./route')

app.use(express.json())

mongoose.connect("mongodb+srv://bbiplab165:MICROMAx1@project1.9vdqmth.mongodb.net/crypto", {
    useNewUrlParser: true
})
.then(()=>{console.log("MongooDB connected")})
.catch(errconsole.log(err))

app.use('/',route)


app.listen(3000,function (){ 
    console.log("Server running on Port "+ 3000)   
})