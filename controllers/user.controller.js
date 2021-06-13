const User=require('../models/user.model');
const createUser=(req,res)=>{
    User.create(req.connection,req.body,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"User Created Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}
const getAllUsers=(req,res)=>{
    User.getAll(req.connection,(err,rows)=>{
        if(rows.length>0){
            res.send({success:true,data:rows,message:"User Data Retreived Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}

const getUserById=(req,res)=>{
    User.getOne(req.connection,req.params.id,(err,rows)=>{
        if(rows.length>0){
            res.send({success:true,data:rows,message:"User Data Retreived Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}

const updateUser=(req,res)=>{
    User.updateUser(req.connection,req.params.id,req.body,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"User Data Updated Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}


const deleteUser=(req,res)=>{
    User.deleteUser(req.connection,req.params.id,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"User Deleted Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}
module.exports={
    createUser,getAllUsers,getUserById,updateUser,deleteUser
}