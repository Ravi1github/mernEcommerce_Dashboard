import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'
function PrivateComponent() {
    const auth=localStorage.getItem("user");
  return (
                //   auth nhi hai to send on home
     auth? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateComponent
