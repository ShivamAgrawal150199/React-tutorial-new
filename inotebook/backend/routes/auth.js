const express=require('express');
const User = require('../models/User');
const router= express.Router();
const { query, validationResult, body } = require('express-validator');


router.post('/',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min:3}),
    body('password','Enter a valid password').isLength({min:5})
    ],(req,res)=>{
    // obj={                                // sending json as response (output)
    //     a:'this',               
    //     number:34
    // }
    // res.json(obj);
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({errors:errors.array()});
    }

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
        }).then(user=>res.json(user)).catch(err=>{console.log(err) 
        res.json({"error":"please enter a unique value", "message":err.message})});
        console.log(req.body);
    // res.send("hello");

    // const user=User(req.body);
    // user.save();
    

})

module.exports=router;