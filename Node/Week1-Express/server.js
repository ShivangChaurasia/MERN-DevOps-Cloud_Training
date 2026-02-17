const express = require('express');

const app = express();


app.get("/",(req,res)=>{
    res.write("This is res.write, says, Hello Sir!!   .");
    res.end("\n  This is GET Method")
})

app.post("/",(req,res)=>{
    res.end(" \n This is POST Method")
})



app.listen(3000,()=>{
    console.log("Server is Running!!!!!")
})





