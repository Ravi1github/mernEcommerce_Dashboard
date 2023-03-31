import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
function Navbar() {
   const style={
        "width":"70px",
        "marginLeft":'45px'

    }
  const navigate =useNavigate();
    const auth=localStorage.getItem("user");

    const logouthandler=()=>{

      localStorage.clear('user');
      navigate('/login')
      

    }
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
  <a className="navbar-brand" href="/"><img src="https://www.solutioncone.com/training-and-internship/assets/st/front.png" style={style} alt="" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  
    <ul className="navbar-nav mx-auto" >
   { auth  ?  <>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/product">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/addproduct">Add Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/update">Update Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup" onClick={logouthandler}>Logout</Link>
        </li>
        
        
                </>
                :
<>
      <Link className="nav-link" to="/login">Login</Link>
     
         <li className="nav-item">
        <li className="nav-item">
        <Link className="nav-link" to="/signup">Registration</Link>
      </li>
       </li>  
       </>    }

      
      
    
      
    </ul>
   

</nav>
    
    </>
  )
}

export default Navbar