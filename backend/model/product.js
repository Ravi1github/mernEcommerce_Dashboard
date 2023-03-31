const mongoose= require('mongoose');
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
   userId :{
        type:String,
      
    },
    company :{
        type:String,
        required:true
    }
});


//collection creation
const Product=mongoose.model("Product",productSchema);
module.exports=Product
