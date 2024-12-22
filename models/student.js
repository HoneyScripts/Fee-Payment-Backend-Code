const mongoose=require("mongoose")
const Courses = require("./courses")
  
const studentSchema = new mongoose.Schema({
    studentName:{
        type:String,
        required:true,
    },
    studentMail:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },  courses: [
        {
          courseName: {
            type: String,
            required: false, 
          },
          fees_paid: {
            type: Boolean,
            default: false, 
          },
        },
      ]},{timestamps:true}

)

const Student=mongoose.model("Student",studentSchema)
module.exports=Student
