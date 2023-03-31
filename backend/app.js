const dotenv=require("dotenv").config({path:'./config.env'});  //for making secret
const express =require("express");
const app=express();
const bcrypt=require('bcrypt');
const jwt=require("jsonwebtoken");
const authenticate=require('./middleware/authenticate');
const cors=require('cors')  //for frontend connection;
const port=process.env.PORT||5000;
app.use(cors());
//incoming request as a json
app.use(express.json());
require('./db/connection');
const User=require('./model/userschema');
const Product =require("./model/product");

app.get("/",(req,res)=>{
    res.send("hello ji");
});

//for post
app.post("/register",async(req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    //validation
    if(!name||!email||!phone||!work||!password||!cpassword){
        return res.status(422).send("please fill the field properly");
    }

try{

const userexists = await User.findOne({email:email});
if(userexists){
    res.status(422).send("email already exists");
}
if(password!==cpassword){
   return res.status(422).send("password is not matching");
}


const user= new User({name,email,phone,work,password,cpassword});
//saving
await user.save();
res.status(201).send(req.body);

}
catch(err){
    console.log(err);
}

});
//login
app.post("/signin",async(req,res)=>{
   
    try{
       const {email,password}=req.body;

       if(!email||!password){
        return res.status(422).send("please fill the field properly");
       }

       const userLogin=await User.findOne({email:email});
                    
 
       if(userLogin){
                //enterdPassword   savedpassword   
       isMatch=await bcrypt.compare(password,userLogin.password);

       //token generation   functiondeclaration and definition on model folder
    //    const token=await userLogin.generateAuthToken();
    //    console.log(token);
    
    //    //storing th token on cookies
    //    res.cookie("jwttoken",token,{
    //     expires:new Date(Date.now()+300000),
    //     httpOnly:true
    //         });  

        if(isMatch){

            res.status(201).send(req.body);
           }
           else{
            res.status(404).send(" error hai error");
           }
       }
       else{
res.status(404).send("user  error");
       }
       
    }
    catch(err){
        console.log(err);
    }
});
//for product
app.post("/addproduct",async(req,res)=>{
 const {name ,price,category,userId,company}=req.body


const productAdded=new Product({name,price,category,userId,company});
await productAdded.save();
  res.status(201).send(req.body);
})
//get prodcut added
app.get("/product",async(req,res)=>{
    const productlist=await Product.find({});
    if(productlist){
        res.status(201).send(productlist);
    }
    else{
        res.send("no product found");
    }
})
//delete product
app.delete("/product/:id",async(req,res)=>{
    //getting id
    const id=req.params.id;
    const deleteproduct=await Product.deleteOne({_id:id});
res.send(deleteproduct);
})
//for getting product by id for updation
app.get("/product/:id",async(req,res)=>{
    //getting id
    const id=req.params.id;
    const userexits=await Product.findById({_id:id});
   if(userexits){
    res.send(userexits);
   }
   else{
    res.send("no result found");
   }
})
//for updation
app.put('/product/:id',async(req,res)=>{
    let updateproduct=await Product.updateOne({_id:req.params.id},{$set:req.body});

    res.send(updateproduct);
})
//search
app.get('/search/:key',async(req,res)=>{
    let searchproduct=await Product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {price:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            {category:{$regex:req.params.key}}
        ]
    })

    res.send(searchproduct);
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
});