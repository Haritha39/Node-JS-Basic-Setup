const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/readFile', (req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send(data)
        }
    })
});

router.post('/createFile1', (req,res)=>{
    fs.open('file1.txt','w',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send({message:"File Created"});
        }
    })
});

router.post('/createFile2', (req,res)=>{
    fs.writeFile('file2.txt','Hi this is harry',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send({message:"File Writed"});
        }
    })
});

router.post('/createFile3', (req,res)=>{
    fs.appendFile('file3.txt','Hi this is Haritha',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send({message:"File Appended"});
        }
    })
});

router.post('/deleteFile', (req,res)=>{
    fs.unlink('file1.txt',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send({message:"File Deleted"});
        }
    })
});

router.post('/renameFile', (req,res)=>{
    fs.rename('file2.txt','filerenamed.txt',(err,data)=>{
        if(err){
            throw err;
        }else{
            res.send({message:"File Renamed"});
        }
    })
});
module.exports = router;