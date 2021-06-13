const Topics=require('../models/topics.model');
const createTopics=(req,res)=>{
    Topics.create(req.connection,req.body,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"Topics Created Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}
const getAllTopics=(req,res)=>{
    Topics.getAll(req.connection,(err,rows)=>{
        if(rows.length>0){
            res.send({success:true,data:rows,message:"Topics Data Retreived Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}

const getTopicsById=(req,res)=>{
    Topics.getOne(req.connection,req.params.id,(err,rows)=>{
        if(rows.length>0){
            res.send({success:true,data:rows,message:"Topics Data Retreived Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}

const updateTopic=(req,res)=>{
    Topics.updateTopics(req.connection,req.params.id,req.body,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"Topics Data Updated Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}


const deleteTopic=(req,res)=>{
    Topics.deleteTopic(req.connection,req.params.id,(err)=>{
        if(!err){
            res.send({success:true,data:null,message:"Topics Deleted Succesfully"})
        }else{
            res.send({success:false,data:null,message:err?err:"Something Went Wrong"});
        }
    });
}
module.exports={
    createTopics,getAllTopics,getTopicsById,updateTopic,deleteTopic
}