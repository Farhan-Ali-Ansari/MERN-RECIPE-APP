import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
      <>
      <div className="nav bg-dark p-2">
        <div className="left"><h2>MERN Recipe</h2></div>
        <div className="right">
          <Link to ={"/login"} className="btn btn-primary mx-2">Login</Link>
          <Link to ={"/Register"} className="btn btn-warning mx-2">Register</Link>
          <Link to ={"/AddRecipe"} className="btn btn-info mx-2">Add</Link>
          <Link to ={"/Profile"} className="btn btn-warning mx-2">Profile</Link>
          <Link to ={"/Saved"} className="btn btn-light mx-2">Saved</Link>
          <div className="btn btn-danger mx-2">LogOUT</div>
          
        </div>
      </div>
      </>
    )
  }
  
  export default Navbar