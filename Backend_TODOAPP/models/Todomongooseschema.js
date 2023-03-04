const mongoose = require("mongoose");


const Todoschema=new mongoose.Schema({

    email:
    {
        type:String,
        required:true
    },
    task:
    {
        type:String,
        required:true
    },
    completed:
    {
        type:Boolean,

    }
    
 },{timestamps:true});   





const TodoModel=mongoose.model("Todo_Data",Todoschema);

module.exports=TodoModel;
