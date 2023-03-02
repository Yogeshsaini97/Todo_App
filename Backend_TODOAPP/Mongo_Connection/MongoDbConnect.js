const mongoose = require("mongoose");

const mongoDbUri = "mongodb+srv://yogesh:eKzSwxRF2YLHqZnk@cluster0.2yuxbb3.mongodb.net/TodoApp";

console.log("hiii")

mongoose.set("strictQuery",false);







const Mongodbconnect= async ()=>{
    try {
        let Data=await mongoose.connect(mongoDbUri, { useNewUrlParser: true, useUnifiedTopology: true });
        // console.log(Data)
        console.log("connected to mongodb")
     
     } catch (error) {

        console.log("error connecting to mongodb",error)
     
         
     }
     

}




module.exports=Mongodbconnect;





