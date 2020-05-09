const express = require('express');
const router = express.Router();
const user =  require('../models/user');

//localhost:3000/user/submituser
router.post('/submituser', (req,res)=>{
    console.log("Before insert")
    console.log({name :req.body.name})
    let newuser = new user();
    newuser.name = req.body.name;
    newuser.email = req.body.email;
    newuser.contact_number = req.body.cntno;
    newuser.age = req.body.age;
    newuser.password = req.body.pwd;
    newuser.save((saveErr,saveRes)=>{
        if(saveErr){
            console.log("Insertion showing error");
        }else{
            console.log("User details successfully inserted");
            console.log(saveRes);
            res.json({"User Details": saveRes})
        }
    });
});

router.get('/getalluser',(req,res)=>{
    user.find({},{},{lean :true},(userErr, userDocs)=>{
        if(userErr){
            console.log('Error retreiving the data');
            res.json({"docs": "null"});
        }else{
            res.send({"docs":userDocs});      
      }
    })
})


router.post('/deleteuser',(req,res)=>{
    console.log({id:req.body._id});
    user.findByIdAndRemove({_id:req.body._id},(delERr,delDocs)=>{
        if(delERr){
            // console.log(delERr)
            console.log("Error in deleting the record");
        }else{
            console.log("Deleted");
            console.log(delDocs)
            res.send({delDocs});
        }
    })
})

router.post('/edituser',(req,res)=>{
    user.findById({_id:req.body.userId},{},{},(Err,updateuser)=>{
        if(Err){
            console.log("Error in updating the details")
        }else{
            updateuser.name = req.body.newName;
            updateuser.email = req.body.newEmail;
            updateuser.contact_number = req.body.newCntno;
            updateuser.age= req.body.newAge;
            updateuser.save((updtErr,updtDocs)=>{
                if(updtErr){
                    res.json({"update": null});
                }else{
                    console.log("update is succ")
                    res.send({"updtDocs":updtDocs});   
                }
            })
        }
    })
})


module.exports= router;