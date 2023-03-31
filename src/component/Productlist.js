import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Productlist() {
    const [products ,setproducts]=useState([]);

    useEffect(()=>{
        //to show list
        getproduct();
    },[]);

    const getproduct=async()=>{
        let res=await fetch('http://localhost:5000/product');
    res=await res.json();
    setproducts(res);
    }
    
    //delete
    const deletehandle=async(id)=>{
     let deleteitem= await fetch(`http://localhost:5000/product/${id}`,{
        method:"DELETE"
     });
     deleteitem=await deleteitem.json();
     if(deleteitem){
        //delete hone par ye call 
        getproduct();
        alert("item is delete successfully");
     }

    }
    //searchhandle
    const searchandler=async(event)=>{
    let key=event.target.value;
    
      let searchprodut=await fetch(`http://localhost:5000/search/${key}`);
    let searchproduct= await searchprodut.json();
    if(searchproduct){
      setproducts(searchproduct);
    }
    

    

    



    }
  return (
    <div className='product-list'>
     <h2>Product List</h2>
     <input type="text"placeholder='Search the product' className='search-box' onChange={searchandler} />
     <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Delete-Item</li>
        <li>Update-Item</li>
     </ul>
     {
        products.length>0?  products.map((element,index)=>
            <ul>
            <li>{index+1}</li>
            <li>{element.name}</li>
            <li>{element.price}</li>
            <li>{element.category}</li>
            <li><button className='btn btn-success' onClick={()=>deletehandle(element._id)}>Delete</button></li>
            <li><button className='btn btn-success' ><Link to={`/update/${element._id}`} className='update'>Update</Link></button></li>
         </ul> 
        )
        :
        <h1>No result found</h1>
     }
    </div>
  )
}

export default Productlist
