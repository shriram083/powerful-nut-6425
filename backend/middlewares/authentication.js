const jwt = require('jsonwebtoken');
require("dotenv").config();
const authentication=async(req,res,next)=>{
const token=req.headers.token;
jwt.verify(token,process.env.SECRET_KEY, function(err, decoded) {
    if(err)
    {
        res.send("please login");
    }
    req.email=decoded.email;
    req.userId=decoded.userId;
    next();
  });
}