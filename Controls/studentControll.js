const Student=require("../models/student")
const registerStudent=async (req,res)=>{

    console.log(req.body)

        const {studentName,studentMail,password}=req.body
    if(!studentMail||!studentName||!password){
        return res.status(500).json({message:"all feilds required"})
    }
    try{
    const newStudnet=new Student({studentName,studentMail,password})
    await newStudnet.save()
    return res.status(200).json({message:"studnet cretaed sucessful"})
    
    }catch(err){
        return res.status(401).json({err:err.message})
    }
}
module.exports={registerStudent}