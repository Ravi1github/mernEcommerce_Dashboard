//this is used to connect with the mongodb cloud
// const mongoose=require("mongoose");
// const DB=process.env.DATABASE;
// mongoose.set('strictQuery', false);
// mongoose.connect(DB).then(()=>{
//     console.log("connected successfully");
// }).catch((err)=>{
//     console.log(err);
// })

//or

const mongoose=require("mongoose");

mongoose.set('strictQuery', false);                  
mongoose.connect("mongodb://127.0.0.1/mern").then(()=> {
    console.log("connected successfully ")
}).catch((err)=> {
    console.log("error occured")
});
    
