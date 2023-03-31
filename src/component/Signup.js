import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'


function Signup() {
 const navigate =useNavigate();

 
 
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [work, setwork] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");

    const namehandler = (event) => {
        setname(event.target.value);
    }
    const emailhandler = (event) => {
        setemail(event.target.value);
    }
    const workhandler = (event) => {
        setwork(event.target.value);
    }
    const phonehandler = (event) => {
        setphone(event.target.value);
    }
    const passwordhandler = (event) => {
        setpassword(event.target.value);
    }
    const cpasswordhandler = (event) => {
        setcpassword(event.target.value);
    }
   const submithandler =async(event)=>{
     event.preventDefault();
     console.log(name+email+work+phone+password+cpassword);
     if(!name||!email||!work||!phone||!password||!cpassword)
     {
        window.alert("please fill up all the details");
        return
     }

   //sending on backend
   //and backend server link we write in package json as proxy-> "proxy":"http://localhost:5000",
   //or
      const res=await fetch('http://localhost:5000/register',{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({name,email,phone,work,password,cpassword})
      });

      let userdata= await res.json();
      if(userdata){
            //user is a key value stored in localstorage
        // we are storing email but jada accha rahta if we store userdata by
        // localStorage.setItem("user",JSON.stringify(userdata));     so that we can also access the whole detail of enterd value

   localStorage.setItem("user",email);
  
        alert(" registerd successfully");
        console.log(" registerd successfully ");
          navigate('/');

       
      }
      else{      

   alert("invalid credentials");
   console.log("invalid credentials");
       
      }
     
      

     

     
    

   }

    return (
        <>
            <div className="containersignup">
                <section className="vh-100" >
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" >
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                                                        {/* method post hai    */}
                                                <form className="mx-1 mx-md-4"  method='POST' >

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                            <input type="text" onChange={namehandler} value={name} className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                            <input type="email" onChange={emailhandler} value={email} className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3xample1c">Phone</label>
                                                            <input type="number" onChange={phonehandler} value={phone} className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3xample1c">Your Profession</label>
                                                            <input type="text" onChange={workhandler} value={work} className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                            <input type="password" onChange={passwordhandler} value={password} className="form-control" />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <label className="form-label" htmlFor="form3Example4cd">confirm password</label>
                                                            <input type="password" onChange={cpasswordhandler} value={cpassword}  className="form-control" />

                                                        </div>
                                     </div>



                                                    <div className="d-flex ">
                                                        <button type='submit'className='btn btn-success' onClick={submithandler}>Submit</button>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000" width='600px' alt="" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Signup
