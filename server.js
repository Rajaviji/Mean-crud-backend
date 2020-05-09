const express = require('express');
const app= express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const user= require('./models/user');
const ruser = require('./routes/ruser');

mongoose.connect("mongodb://localhost:27017/mean",{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true},(err,succ)=>{
    if(err){
        console.log("Db is not Connected");
    }else{
        console.log("Db is connected");
    }
})

app.listen(3000,()=>{
    console.log("Server running at port 3000")
})
app.use(cors());

app.use(bodyParser.json());
 
app.use('/user', ruser);

app.use('/userlist',ruser)


