const express=require('express');
const User = require('../models/User');
const router= express.Router();
const { query, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');        // bcrypt for passowrd hashing and salt pepper
var jwt = require('jsonwebtoken');            // generating token to be send to client on authorization
const fetchuser=require('../middleware/fetchuser')

// Route 1 : create a user using post /api/auth/createuser. No login required

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
    let success=false;

    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({success,errors:errors.array()});
    }
    try{
    
    let user=await User.findOne({email:req.body.email});
    console.log(user);
    if (user){
        return res.status(400).json({success,"error":"The user already exists with this email id so cannot add"});
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
        success=true;
        res.json({success,authtoken});  // as we are using ES6 so need to write  res.json({"authtoken":authtoken})
        console.log(req.body);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({success,"error":"some error occured"});
    }

    // res.send("hello");

    // const user=User(req.body);
    // user.save();
    

})


// Route 2 : authenticate using post /api/auth/login. No login required
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists()
    ],async (req,res)=>{
    
    
    // if there are errors then show bad request with errors
    let success=false;
    const errors=validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({"success":success,errors:errors.array()});
    }

    const {email, password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({"success":success,error:"please logn with correct credentials"});
        }
        const passwordmatch=await bcrypt.compare(password,user.password);
        if(!passwordmatch)
        {
            return res.status(400).json({success,error:"please login with correct credentials"});
        }
        const data={
            user:{
                id:user.id
            }
        }
        const authtoken=jwt.sign(data,JWT_SECRET);
        console.log(authtoken);
        success=true;
        res.json({success,authtoken});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({"success":success,"error":"internal server error occured"});
    }

    })

    
// Route 3 : authenticate using post /api/auth/getuser.  login required
router.post('/getuser',fetchuser,async (req,res)=>{
try {
    userid=req.user.id;
    const user=await User.findById(userid).select("-password");                  // findbyid is an asynchronous function
    res.send(user);

} catch (error) {
    console.log(error.message);
        res.status(500).json({"error":"internal server error occured"});
}

})

module.exports=router;