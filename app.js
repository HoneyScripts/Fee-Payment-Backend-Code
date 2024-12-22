const express = require('express');
const cors = require('cors');
const connectDB=require("./dbConnection")
const {addCourse}=require("./Controls/courseControll")
const {registerStudent}=require("./Controls/studentControll")
const {registerTrainer}=require("./Controls/trainerControll")
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json()); 
app.use(cors());            

connectDB()
//studnet registration
app.post('/add-student',registerStudent)
//trainer registration
app.post("/add-trainer",registerTrainer)
//add course
app.post("/add-course",addCourse)
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
