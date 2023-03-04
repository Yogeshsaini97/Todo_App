const mongoose = require("mongoose");


const userschema=new mongoose.Schema({
    firstName:
    {
        type:String,
        required:true,
        trim:true,
        minLength:0,
        maxLength: 20
    },
    lastName:
    {
        type:String,
        required:true,
        trim:true,
        minLength:0,
        maxLength: 20
    },
   
    email:
    {
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        minLength:0,
        maxLength: 20
    },
    password:
    {
        type:String,
        required:true
    }
    
 },{timestamps:true});   





const userRegistrationModel=mongoose.model("Todo_users",userschema);

module.exports=userRegistrationModel;
