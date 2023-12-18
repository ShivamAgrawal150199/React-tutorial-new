const express=require('express');
const User = require('../models/User');
const router= express.Router();
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');        // bcrypt for passowrd hashing and salt pepper
var jwt = require('jsonwebtoken');            // generating token to be send to client on authorization

// create a user using post /api/auth/createuser. No login required

const JWT_SECRET='iamshivamagrawal$';
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
    const salt=await bcrypt.genSalt(10);
    const secpassword= await bcrypt.hash(req.body.password,salt);

    user= await User.create({
        name:req.body.name,
        email:req.body.email,
        password:secpassword
        });

        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        console.log(authtoken);
        
        // .then(user=>res.json(user))
        // .catch(err=>{console.log(err) 
        // res.json({"error":"please enter a unique value", "message":err.message})});
        //res.json(user);  // now not sending users data instead sending authtoken

        res.json({authtoken});  // as we are using ES6 so need to write  res.json({"authtoken":authtoken})
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