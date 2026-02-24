const { connection, userModel } = require("mongoose");
const express = require(express);
const app = express();

app.get("/", (req,res)=>{
    res.send("API is Working");
});

app.get("/users",()=>{
    res.send("API is Working");
})

app.listen(7500, async()=>{
    try{
        await connection
        console.log("Connected to DB");
    }catch(e){
        console.log(e);
    }
    console.log("Server is running on 7500");
})