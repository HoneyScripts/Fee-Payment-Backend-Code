const Trainer=require("../models/trainer")

const registerTrainer=async (req,res)=>{
    try{
        const {trainerName}=req.body
    if(!trainerName){
        return res.status(500).json({message:"all feilds required"})
    }
    const newTrainer=new Trainer({trainerName})
    await newTrainer.save()
    return res.status(200).json({message:"trainer cretaed sucessful"})
    
    }catch(err){
        return res.status(401).json({err:err.message})
    }
}
module.exports={registerTrainer}