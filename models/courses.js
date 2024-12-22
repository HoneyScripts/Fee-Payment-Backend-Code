const mongoose=require("mongoose")

const courseSchema=new mongoose.Schema({
    courseName:{
        type:String,
        required:true,
    },
    courseFee:{
        type:Number,
        required:true,
    },
    trainer:{
        type:String,
        required:true,
    }},{timestamps:true}
)
const Course=mongoose.model("Course",courseSchema)
module.exports=Course