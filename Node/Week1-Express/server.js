const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json())

let user = [];

app.get("/user",(req,res)=>{
    // res.write("This is res.write, says, Hello Sir!!   .");
    
    fs.readFile("detail.txt","utf-8",(err,data)=>{
        if(err){
            console.log("Error Fetching Data!!");
        }else{

            res.json(data);
            console.log("Data Displayed!!")
        }
    })
})

app.post("/user",(req,res)=>{
    try{
        const {name, age} = req.body;
        user.push({name, age});
        console.log(name);
        console.log(age);

        fs.appendFile("detail.txt", JSON.stringify({name, age}), (err,req,res)=>{
            if(err){
                console.log("Something went wrong!")
            }else{
                console.log("Data Added Successfully!")
            }
        })
        res.send("Data Stored successfully!!");
    }catch(e){
        console.log(e);
    }
})



app.listen(3000,()=>{
    console.log("Server is Running!!!!!")
})





