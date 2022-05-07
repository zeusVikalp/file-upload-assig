const mongoose = require('mongoose')
const userModel = require('../Model/user')

 async function getAllUser(req,res,next){
     try {
         console.log(req.body)
         let response = await userModel.find({})
         res.json(response)
        
     } catch (error) {
         res.status(500).json(error)
         
     }
 }
 async function createUser(req,res,next){
    
         console.log("req.body",req.body);
         let userDetail = req.body;
         let response = await userModel.insertMany([userDetail]);
         res.json(response)
         
     
         
         
     
 }
 async function getUserById(req,res,next){
  let userId = req.params.userId;
  let response = await userModel.find({_id:userId})
  res.json(response)
 }
 async function deleteUser(req,res,next){
  let userId = req.params.userId
  let response = await userModel.find({_id:userId})
  res.json(response)
 }
 async function updateUser(req,res,next){
   let userId = req.params.userId;
   let body = req.body
   console.log(body,userId)
   let response = await userModel.updateOne({_id: userId},{$set : body})
   res.json(response)
 }

  function saveImage(req,res,next){
      res.send("Image Saved")
  }

 module.exports = {
     getAllUser,
     createUser,
     getUserById,
     deleteUser,
     updateUser,
     saveImage
 }