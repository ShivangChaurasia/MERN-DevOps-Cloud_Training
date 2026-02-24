const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userSchema = mongoose.Schema({
    name :{ type: String, Required: true},
    age: {type: Number, Required: true},
    city: String,
    country: {type : String,  Required: true}
})



const userModel = mongoose.model("user",userSchema);


const main = async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URL}Day1`);
        console.log("Connected to DB Successfully");
        const user = userModel.insertMany([
            {
                name : "Rishav",
                age : 23,
                city : "Patna",
                country: "India"
            }
        ])
        console.log("Data Added Successfully!!!");
    }catch(e){
        console.log("Something went wrong!!");
        console.log(e);
    }
}

main();