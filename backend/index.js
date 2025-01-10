const express = require("express");
const cors = require("cors");
const app = express();
const options = {origin:(origin,callback)=>{
    callback(null,true)
}}
app.use(cors(options));
app.use(express.json());

app.post('/student',(req,res)=>{
    studentData.push(req.body);
    console.log(req.body);
    res.send("done")

})
const data = ['hello',12,{"key":"value"}];

app.get('/',(req,res)=>{
    res.send(data)

})
let  studentData = [
    {
    name:"kathir",
    age:9,
    rollNumber:233011
    },
];
app.post('/student',(req,res)=>{
    res.send(studentData);
})


app.listen(3333,()=>{
    console.log("started hhg")
})