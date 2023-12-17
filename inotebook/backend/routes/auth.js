const express=require('express');
const User = require('../models/User');
const router= express.Router();

router.post('/',(req,res)=>{
    // obj={                                // sending json as response (output)
    //     a:'this',               
    //     number:34
    // }
    // res.json(obj);

    console.log(req.body);
    res.send("hello");

    const user=User(req.body);
    user.save();
    

})

module.exports=router;