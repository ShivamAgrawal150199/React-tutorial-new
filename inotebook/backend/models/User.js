const mongoose=require('mongoose');

const UserSchema = new Schema({
    name: {
        type : String, // String is shorthand for {type: String}
        required : true
    },
    email: {
        type : String, // String is shorthand for {type: String}
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    
  });

  module.exports=mongoose.model('user',UserSchema);