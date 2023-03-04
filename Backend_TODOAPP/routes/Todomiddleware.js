var jwt = require('jsonwebtoken');



exports.Todomiddleware=async (req,res,next)=>
{
    if(req.headers.authorization)
    {
        // const token=req.headers.authorization;
        // const userid=jwt.verify(token,"yogesh");
console.log(req.headers.authorization)
        next();

        return;
    }
    
    return res.status(400).send({message:"please provide auth token in headers"})
   
}