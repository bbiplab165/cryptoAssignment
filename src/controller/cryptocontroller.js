
const coinModel=require('../model/cryptoModel')
const axios=require("axios")


const storeCoin=async function(req,res){
    try{
        let header=req.headers["authorization"]
        if(!header){return res.status(401).send({status:false,msg:"header must be present"})}

        const options = {
            method: "get",     
            url:"http://api.coincap.io/v2/assets"
        }
        const result=await axios(options)
        const data=result.data.data
        const sortedData=data.sort((a,b)=>a.changePercent24Hr-b.changePercent24Hr)

        await coinModel.deleteMany()
        await coinModel.insertMany(sortedData)

        sortedData.forEach(element => {delete element.explorer})
        return res.status(200).send({status:true,data:sortedData}) 
    }
    catch(error){
        return res.status(500).send({status:false,msg:error.message})   
    }
}

module.exports={storeCoin}