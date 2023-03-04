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
//   let SavedTodoData = await result.save();
  console.log(result)
//   res.status(200).json({ message: "TASK created successfully!!" });
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



module.exports = router;