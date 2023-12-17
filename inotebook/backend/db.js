const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook"

// const connecttoMongo =()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log('mongo connected successfully');
//     })
// }

const connecttoMongo =  async () => {
    console.log("here")
    // try {
    //    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    //   console.log("Connected to MongoDB successfully");
    // } catch (error) {
    //   console.error("Error connecting to MongoDB:", error);
    // }

    mongoose.connect(mongoURI).then(()=>console.log("Connected")).catch((e)=>console.log("error "+e.message))
  };

module.exports=connecttoMongo;