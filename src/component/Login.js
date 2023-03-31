import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Login() {
  const navigate=useNavigate();
  const [password,setpassword]=useState("");
  const [email,setemail]=useState("");

const emailhandler=(event)=>{
setemail(event.target.value);
}

const passwordhandler=(event)=>{
  setpassword(event.target.value);
  }

  //submit handler
  const submithandler= async(event)=>{
    event.preventDefault();
    if(!email||!password){
      alert("please fill it properly");
      return;
    }

    const res= await fetch('http://localhost:5000/signin',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
  
      body:JSON.stringify({email,password}),

    });

    const data= await res.json();
    if(data){
      console.log(data);
      localStorage.setItem("user",email);
      alert("login successfully");
      navigate('/');
       
     
    }
    else{
      alert("invalid credentials")
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

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login Form</p>
                   
                <form className="mx-1 mx-md-4" method='POST'>

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">Enter Your Email</label>
                      <input type="email" id="form3Example3c"onChange={emailhandler} value={email} className="form-control" />
                    
                     
                    </div>
                  </div>

                 

                  

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">Password</label>
                      <input type="password" id="form3Example4c"onChange={passwordhandler} value={password} className="form-control" />
                      
                    </div>
                  </div>

                  <div className="d-flex ">
                 <button type='submit' onClick={submithandler} className='btn btn-primary'>Login</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

               <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000" width='500px' alt="hhhg" />

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

export default Login