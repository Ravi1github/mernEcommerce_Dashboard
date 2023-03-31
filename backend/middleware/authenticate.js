const User=require('../model/userschema');
const jwt=require('jsonwebtoken');

const authenticate =async(req,res,next)=>{
try{
const token=req.cookies.jwttoken;
//veritying token
const verifyToken=jwt.verify(token,process.env.SECRET_KEY);

const userExists=await User.findOne({_id:verifyToken._id,"tokens.token":token});

if(!userExists){
    throw new Error("User not found");
}
req.token=token;
req.userExists=userExists;
next();

}
catch(err){
    res.send(401).send("unauthorised : no Token");
console.log(err);
}


}

module.exports=authenticate;