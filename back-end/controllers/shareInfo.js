const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
// const jwt=require('jsonwebtoken');
const Shareholders=require('../model/share');
// const { generateToken } = require('./login');
const  mongoose = require('mongoose');
const sendEmail=require('../utils/email');
const shareTransaction = require('../model/updatedtransaction');
const getShare=asyncHandler(async (req,res)=>{
    const share=await Shareholders.find();
    res.json(share);
})
const getShareById=asyncHandler(async (req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'no shareholder found'})
      }
      const share=await Shareholders.findById({_id:id});
      if(share){
       res.json(share);
      }
})
const createShare=asyncHandler(async(req,res)=>{
    const {firstname,middlename,lastname,country,email,password,city,subcity,wereda,houseNo,phoneNo,shareamount}=req.body;
    if( !firstname || !middlename || !lastname  || !country ||!email ||!password || !city || !subcity || !wereda || !houseNo || !phoneNo || !shareamount){
      res.status(404);
      throw new Error("please fill all filed");
    }
  const shareExists=await Shareholders.findOne({email});
  if(shareExists){
    res.status(404);
    throw new Error("'shareholder already exists'");
  }
  // const salt=await bcrypt.genSalt(10);
  // const hashedPassword=await bcrypt.hash(password,salt);
  let share=new Shareholders({
    firstname:req.body.firstname,
    middlename:req.body.middlename,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password,
    country:req.body.country,
    city:req.body.city,
    subcity:req.body.subcity,
    wereda:req.body.wereda,
    houseNo:req.body.houseNo,
    phoneNo:req.body.phoneNo,
    shareamount:req.body.shareamount,
    image:req.body.image,
  })
  share.save().then(async(response)=>{
    res.json({
      message:"saved"
    })
    await sendEmail(share.email, "you have successfully registerd");
  }).catch(error=>{
    res.json({
      message:"error"
    })
  })
})
const updateShare=asyncHandler(async(req,res)=>{
    const {shareamount}=req.body;
    const {email}=req.params;
    const shareExists=await Shareholders.findOne({email});
    if(!shareExists){
      res.status(404);
      throw new Error("shareholder dosenot exists");
    }
    // const isTransaction=await shareTransaction.findOne({email});
    // if(!isTransaction){
    //   res.status(404);
    //   throw new Error("no transaction ocurred");
    // }
    shareExists.shareamount+=shareamount;
    // console.log(shareExists.shareamount);
    // console.log(shareExists.paidbirr);
  
        if(!shareamount){
          res.status(404);
          throw new Error("please add shareamount ");
        }
      const share=await Shareholders.findOneAndUpdate({email},{shareamount:shareExists.shareamount});
       const oneshare=await Shareholders.findOne({email});
       console.log(oneshare.shareamount)   
            res.json(oneshare);
})
const deleteShare=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'no shareholder found'})
  }
  const shareholder = await Shareholders.findById(id)
  if (!shareholder) {
    res.status(400)
    throw new Error('shareholder not found');
  }
  await shareholder.deleteOne({_id:id})
  res.status(200).json({ id:id })
})
module.exports={
    getShare,
    getShareById,
    createShare,
    updateShare,
    deleteShare
}