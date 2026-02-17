const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.method === "GET"){
        res.end("This is get Method")
    }else if(req.method === "POST"){
        async function func(){
            setTimeout(()=>{
                console.log("This is Async")
            },1000)
            res.end("This is async");
        }
        func();
        res.end("This is Post Method")
    }else if(req.method === "PUT"){
        res.end("This is the message from the PUT Method")
    }else if(req.method === "DELETE"){
        res.end("This is the message from the DELETE Method")
    }
})



server.listen(3000,()=>{
    console.log("Server Running Successfully!!")
})