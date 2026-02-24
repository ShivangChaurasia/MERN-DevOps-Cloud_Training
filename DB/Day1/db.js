const mongoose = require('mongoose');
const bcrypt = require('bcrypt');   
const dotenv = require('dotenv');
dotenv.config();

const userSchema = mongoose.Schema({
    name :{ type: String, Required: true},
    age: {type: Number, Required: true},
    city: String,
    country: {type : String,  Required: true, enum : ["India", "USA", "UAE"]},
    password : {type : String, Required : true},
})



// Hashing in bcryptjs
userSchema.pre("insertMany", async function(docs,next){
    for(let doc of docs){
        if(doc.password){
            doc.password = await bcrypt.hash(doc.password,10);
        }
    }
    // next();
    console.log(docs);
});




const userModel = mongoose.model("user",userSchema);



const main = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}Day1`);
        console.log("Connected to DB Successfully");

        const user = userModel.insertMany([
            {
                name: "Dane Philip",
                age: 26,
                city : "Washington DC",
                country : "USA",
                password : "pass@123"
            }
        ])

        console.log("Data Added Successfully!!!");
    }catch(e){
        console.log("Something went wrong!!");
        console.log(e);
    }
}



main();