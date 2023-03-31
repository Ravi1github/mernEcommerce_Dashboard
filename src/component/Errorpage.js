import React from 'react'
import { Link } from 'react-router-dom'
function Errorpage() {
  return (
    <div>
      <img src="" alt="" />
      <h1> OOP! Page is not found</h1>
        <div className="mb-5">
            <button className='btn btn-success'><Link to='/'>Back to home pages</Link></button>
        </div>
    </div>
  )
}

export default Errorpage
