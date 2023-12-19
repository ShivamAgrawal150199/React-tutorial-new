const mongoose=require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

    user:{                                                  // created association between user and note object
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    title: {
        type : String, // String is shorthand for {type: String}
        required : true
    },
    description: {
        type : String, // String is shorthand for {type: String}
        required : true,
    },
    tag: {
        type: String,
        default: "General",
    },
    date: {
        type: Date,
        default: Date.now
    },
    
  });

  module.exports=mongoose.model('notes',NotesSchema);    // notes is table name in mongodb