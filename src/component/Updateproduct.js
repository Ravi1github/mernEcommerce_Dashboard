import React, {  useEffect, useState } from 'react'
 import { useParams } from 'react-router-dom';  //used to get id


function Updateproduct() {
const [name,setname]=useState('');
const [price,setprice]=useState('');
const [category,setcategory]=useState('');
const [company,setcompany]=useState('');
//is used to get id we called it from id
 const params=useParams();
 useEffect(()=>{
 
  //call once when page reload
  getproductDetail();
 })

 //function
 const getproductDetail=async()=>{
  //getting prodcut of given id
let res=await fetch(`http://localhost:5000/product/${params.id}`)
res=await res.json();
console.log(res);

//modifica
 }


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
  

   console.log(name+price+category+company);
//for updation
   const res= await fetch(`http://localhost:5000/product/${params.id}`,{
      method:"PUT",
      headers:{
        "Content-Type":"application/json",
      },
  
      body:JSON.stringify({name,price,category,company}),

    });

    const data= await res.json();
    console.log(data);
    if(data.status===404||!data){
      alert("invalid credentials")
    }
    else{
    
      alert(" Item Updated successfully");
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

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">UPDATE ITEMS</p>
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
                            <button type='submit' onClick={submithandler} className='btn btn-success' >UPDATE PRODUCT</button>
                          </div>

                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://previews.123rf.com/images/dirkercken/dirkercken1410/dirkercken141000715/32408524-update-updating-software-now-and-here-to-the-latest-newest-version-or-new-edition.jpg" width='600px' alt="" />

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

export default Updateproduct
