const express=require('express');
const User = require('../models/User');
const router= express.Router();
const { query, validationResult, body } = require('express-validator');

// create a user using post /api/auth/createuser. No login required
router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min:3}),
    body('password','Enter a valid password').isLength({min:5})
    ],async (req,res)=>{
    // obj={                                // sending json as response (output)
    //     a:'this',               
    //     number:34
    // }
    // res.json(obj);

    // if there are errors then show bad request with errors
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }
    try{

    
    let user=await User.findOne({email:req.body.email});
    console.log(user);
    if (user){
        return res.status(400).json({"error":"The user already exists with this email id so cannot add"});
    }
    user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
        })
        
        
        // .then(user=>res.json(user))
        // .catch(err=>{console.log(err) 
        // res.json({"error":"please enter a unique value", "message":err.message})});
        res.json(user);
        console.log(req.body);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({"error":"some error occured"});
    }

    // res.send("hello");

    // const user=User(req.body);
    // user.save();
    

})

module.exports=router;