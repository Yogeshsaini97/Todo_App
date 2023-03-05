const express = require("express");
const {check}=require("express-validator")
const {Todomiddleware}=require("./Todomiddleware")
const TodoModel = require("../models/Todomongooseschema");

const router = express.Router();

const {requireRegister,requireLogin,TodoData} = require("../Authentication/controller/routingFunctions");

router.post("/login", requireLogin);

router.post("/signup",[
    check("firstName").notEmpty().withMessage("firstname is required"),
    check("lastName").notEmpty().withMessage("lastname is required"),
    check("email").notEmpty().withMessage("valid email is required"),
    check("password").isLength({min:6}).withMessage("password must be at least 6 chars long"),
], requireRegister);


router.post("/task",Todomiddleware ,async (req,res)=>
{

  let result = await new TodoModel(req.body);
  let SavedTodoData = await result.save();
  console.log(result)
  res.status(200).json({ message: "TASK created successfully!!",Data:result });
console.log("hi")

});

router.get("/task",Todomiddleware ,async (req,res)=>
{

//   let result = await new TodoModel(req.body);
// //   let SavedTodoData = await result.save();
//   console.log(result)
// //   res.status(200).json({ message: "TASK created successfully!!" });
// console.log("hi")
let data= await TodoModel.find();
   
   if(data.length==0)
   {
   
    res.status(400).json({message:"there are no Task in database"})
    return;
   }
  
   
   res.status(200).json({message:"successfull",Data:data});
   return;

});

router.delete("/task/delete/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      console.log(data)
    
           let newData=await TodoModel.deleteOne(req.params);
      resp.status(200).json({message:"Task Deleted successfully"});
      return;
  
      
  
    
  
    } catch (error) {

      console.log("no data")
      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});

router.put("/task/update/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      console.log(data)
    
      let newData=await TodoModel.updateOne(req.params,{$set:req.body});
      resp.status(200).json({message:"Task updated successfully"});
      return;
  
      
  
    
  
    } catch (error) {

      console.log("no data")
      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});

router.get("/task/:_id", async (req,resp)=>
{
   

    try {

      let data=await TodoModel.findOne(req.params);
      resp.status(200).json({message:"successfull",data:data});
    
          
      
      return;
  
      
  
    
  
    } catch (error) {


      resp.status(404).json({message:"There is no data with this id in the database"});
      return
      
    }
    


 
});



module.exports = router;