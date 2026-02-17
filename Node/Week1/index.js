// const {add,sub,multiply} = require("./fun")

// add(5,10);
// sub(45,40);

// const os = require("os");
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.arch());

const fs = require("fs");

let data = "Hello from node.js";
fs.writeFile("data.txt",data,(err)=>{
    if(err){
        console.log("error while writing the file");
    }else{
        console.log("File created successfully");
    }
})

fs.appendFile("data.txt","\nFile got updated",(err)=>{
    if(err){
        console.log("Error while appending");
    }else{
        console.log("File appended successfully");
    }
})
