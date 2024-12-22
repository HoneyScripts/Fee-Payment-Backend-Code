const mongoose=require("mongoose")
const MONGO_URI="mongodb+srv://Honey:honey5566@fee-application.mmkrf.mongodb.net/?retryWrites=true&w=majority&appName=Fee-Application"
const ConnectDB=()=>{
mongoose
.connect(MONGO_URI)
.then(()=>console.log("mongoDB connected")
)
.catch((err)=>console.log(err))}
module.exports=ConnectDB