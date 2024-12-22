const mongoose=require("mongoose")

const trainerSchema=new mongoose.Schema({
    trainerName:{
        type:String,
        required:true
    }
},{timestamps:true}
)
const Trainer=mongoose.model("Trainer",trainerSchema)
module.exports=Trainer