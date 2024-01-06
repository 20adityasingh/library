const express = require("express")
const router = express.Router()
const User = require("../Model/userModel")
router.post("/register", async  (req,res)=>{
    const {name, email, pass, cpass} = req.body
    if ((!name || !email || !pass || !cpass)) {
      return res.status(422).json({
        message: "No DATA to be added",
      });
    } 
    const data = await User.findOne({email:email})
    if(data){
        return res.status(422).json({
            message: "User Already Exist",
        });
    }
      await User.create({ name, email, pass, cpass });
      res.status(201).json({
        message: "Registration Successful",
      });
})
module.exports=router