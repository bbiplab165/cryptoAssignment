const mongoose=require('mongoose')


const cryptoSchema=new mongoose.Schema({
    symbol :{
        type:String,
        unique:true
    },                                                  // String and Unique
    name:{
        type:String,
        unique:true
    },                                                      // String and Unique
    marketCapUsd:{
        type:String
    },                                                      // String  ( not Number)
    priceUsd:{
        type:String
    }                                                          //String
})


module.exports=mongoose.model("crypto",cryptoSchema)   