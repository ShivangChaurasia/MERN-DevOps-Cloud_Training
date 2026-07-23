




const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("This is get Request!");
});

// app.post('/user',(req,res)=>{
    
// });




app.listen(5000,()=>{
    console.log("Server Running at post 5k...successfully!!")
});