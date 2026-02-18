const express = require("express");

const app = express();

// const firstMw = (req,res,next)=>{
//     console.log("I am first middleware");
//     next();
// }

// Write a middleware called as logger, it should print/console the http verb and the endpoint of the request.
//  GET /
//  GET /about
// const logger = (req,res,next)=>{
//     console.log(`${req.method} ${req.url}`);
//     next();
// }
let time;
let time2;
const Timelogger = (req,res,next)=>{
    time = Date.now()
    // console.log(`${req.method} ${req.url}`);
    next();
    time2 = Date.now();
    const dif = (time2-time);
    // console.log(`${time} ms`)
    // console.log(`${time2} ms`)
    console.log(`Time: ${dif} ms`)
}


// app.use(firstMw);
// app.use(logger);
app.use(Timelogger);

app.get("/",(req,res)=>{
    res.send("API is working");
});


app.get("/about",(req,res)=>{
    res.send("This is about page");
})



























let port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})




































