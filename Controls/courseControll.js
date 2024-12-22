const Course=require("../models/courses")

const addCourse=async(req,res)=>{
    const {courseName,courseFee,trainer}=req.body
    if(!courseName||!courseFee||!trainer){
        return res.statu(500).json({mesage:"all fields reuired"})
    }
    try{
        const newCourse=new Course({courseName,courseFee,trainer})
        await newCourse.save()
        return res.status(201).json({message:"course added succesfully"})
    }catch(err){
        return res.status(401).json({mesagge:err.message})
    }
}
module.exports={addCourse}