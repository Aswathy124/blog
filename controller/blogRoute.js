const express=require("express")
const blogmodule=require("../models/blogmodels")
const router=express.Router()


router.post("/signup",async(req,res)=>{
let data=req.body
let blog=new blogmodule(data)
let result=await blog.save();

res.json({status:"sucessfully signuped"})
})

module.exports=router