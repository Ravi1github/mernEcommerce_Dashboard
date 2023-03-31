import React, { useState } from 'react'
function Addproduct() {
const [name,setname]=useState('');
const [price,setprice]=useState('');
const [category,setcategory]=useState('');
const [company,setcompany]=useState('');
const namehandler=(event)=>{
  setname(event.target.value);
}
const pricehandler=(event)=>{
  setprice(event.target.value);
}
const categoryhandler=(event)=>{
  setcategory(event.target.value);
}
const companyhandler=(event)=>{
  setcompany(event.target.value);
}

const submithandler=async(event)=>{
   event.preventDefault();

   console.log(name+price+category+company);
   
  const userId=localStorage.getItem("user");  
   const res= await fetch('http://localhost:5000/addproduct',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
  
      body:JSON.stringify({name,price,category,userId,company}),

    });

    const data=  res.json();
    if(data.status===404||!data){
      alert("invalid credentials")
    }
    else{
    
      alert("added  successfully");
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

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">ADD ITEMS</p>
                        {/* method post hai    */}
                        <form className="mx-1 mx-md-4" >

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example1c">Name of Product</label>
                         <input type="text" onChange={namehandler} value={name} className="form-control" />

                            </div>
                          </div>        

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c">Price</label>
                          <input type="text" onChange={pricehandler} value={price}  className="form-control" />

                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3xample1c">Category</label>
                         <input type="text" onChange={categoryhandler} value={category}  className="form-control" />

                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3xample1c">Company</label>
                         <input type="text" onChange={companyhandler} value={company}  className="form-control" />

                            </div>
                          </div>



                          <div className="d-flex ">
                            <button type='submit' onClick={submithandler} className='btn btn-success' >ADD PRODUCT</button>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://thumbs.dreamstime.com/b/fast-shopping-cart-icon-logo-white-background-vector-illustration-sign-symbol-design-isolated-183464326.jpg" width='600px' alt="" />

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

export default Addproduct
