const express=require("express");
const userRouter=express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");
const { application } = require("express");
require("dotenv").config();




userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email});
   await bcrypt.compare(password, user.password, function(err, result) {
        if(err)
        {
            return res.send("wrong credential");
        }
        if(result)
        {
            const token = jwt.sign({ email:email,userId:user._id }, process.env.SECRET_KEY);
            res.send({message:"login successul",token:token});
        }
        else{
            res.send("wrong credential");
        }
    });

})

userRouter.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    await bcrypt.hash(password, 10, function(err, hash) {
        if(err){
          return  res.send("something went wrong")
        }
        const data= new userModel({email:email,password:hash});
         data.save();
        return res.send("signup successful");

    });
})

module.exports=userRouter;