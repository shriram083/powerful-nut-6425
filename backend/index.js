const express=require("express");
require('dotenv').config()
const conn = require("./config/db");
const app=express();
app.use(express.json());




const userRouter = require("./routes/user.route");
app.use("/user",userRouter);
app.get("/auth/github/req",(req,res)=>{
res.send(`<a href="https://github.com/login/oauth/authorize?client_id=bd78b1b1d29db8f0ab22">Login with github</a>`)
})

app.get("/auth/github/success",(req,res)=>{
    res.send({message:"login successful",code:req.query.code})
    })


app.listen(process.env.PORT, async()=>{
    try{
        // await conn;
        console.log("connected")
    }catch{
        console.log("not connected");
    }
    console.log("server is running");
})