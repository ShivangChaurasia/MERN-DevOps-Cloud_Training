const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json())

// let user = [];

// app.get("/user",(req,res)=>{
//     // res.write("This is res.write, says, Hello Sir!!   .");

//     fs.readFile("detail.json","utf-8",(err,data)=>{
//         if(err){
//             console.log("Error Fetching Data!!");
//         }else{
//             let parsedData = JSON.parse(data);
//             res.send(parsedData);
//             console.log("Data Displayed!!")
//         }
//     })
// })

// app.post("/user/:key",(req,res)=>{
//     try{
//         const {name, age} = req.body;
//         const {item} = req.body;
//         let data = {"itemName" : item};
//         let { key } = req.params;
//         // console.log(name);
//         // console.log(age);

//         fs.readFile("detail.json","utf-8",(err,fileData)=>{
//             if(!err && fileData){
//                 try{
//                     user = JSON.parse(fileData);
//                 }catch{
//                     user = [];
//                 }
//             }

//             user.push({ [key]: data }); 

//             fs.writeFile("detail.json",JSON.stringify(user,null,2),(err)=>{
//                 if(err){
//                     console.log("Something went wrong!");
//                 }else{
//                     console.log("Data Added Successfully!");
//                 }
//             });

//             res.send("Data Stored successfully!!");
//         });

//     }catch(e){
//         console.log(e);
//     }
// })



// // Ways to add data inside detail.json:
// // 1. Retrieve data from it.
// // 2. Convert the data into normal onject.
// // 3. Now you can use push method to add a data inside file by accessing the orders key.
// // 4. Once data is inserted it to json format again.




// app.put("/user/:name", (req, res) => {
//     const { name } = req.params;
//     const { age } = req.body;

//     fs.readFile("detail.json", "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file");
//         }

//         let users = [];
//         try {
//             users = JSON.parse(data);
//         } catch {
//             users = [];
//         }

//         let found = false;

//         users = users.map(u => {
//             if (u.Name === name) {
//                 found = true;
//                 return { ...u, Age: age };
//             }
//             return u;
//         });

//         if (!found) {
//             return res.status(404).send("User not found");
//         }

//         fs.writeFile("detail.json", JSON.stringify(users, null, 2), err => {
//             if (err) {
//                 return res.status(500).send("Error updating user");
//             }
//             res.send("User updated successfully");
//         });
//     });
// });




// app.delete("/user/:name", (req, res) => {
//     const { name } = req.params;

//     fs.readFile("detail.json", "utf-8", (err, data) => {
//         if (err) {
//             return res.status(500).send("Error reading file");
//         }

//         let users = [];
//         try {
//             users = JSON.parse(data);
//         } catch {
//             users = [];
//         }

//         const filteredUsers = users.filter(u => u.Name !== name);

//         if (filteredUsers.length === users.length) {
//             return res.status(404).send("User not found");
//         }

//         fs.writeFile("detail.json", JSON.stringify(filteredUsers, null, 2), err => {
//             if (err) {
//                 return res.status(500).send("Error deleting user");
//             }
//             res.send("User deleted successfully");
//         });
//     });
// });


app.get("/:id", (req,res)=>{
    let id = req.params.id
    let name = req.query.name;
    let age = req.query.age;
    console.log(id);
    (age>=18) ? res.send(`Welcome ${name}!!!! \n Your Age is ${age} & You're Eligible to vote`) : res.send(`Welcome ${name}!!!! \n Your Age is ${age} & You're Not Eligible to vote`)
})







app.listen(3000,()=>{
    console.log("Server is Running!!!!!")
})















