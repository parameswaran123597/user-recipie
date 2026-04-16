import React from "react";

function Register(){
    return (
        <div className="container d-flex justify-content-center align-items-center vh-80">
      
      <div className="card shadow p-4" style={{ width: "400px" }}>
        
        {/* Heading */}
        <h3 className="text-center mb-4 font-weight-bold text-success">
           Register
        </h3>

        <form>

          {/* Name */}
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" className="form-control" placeholder="Enter your Name"/>
          </div>
          
          <div className="form-group">
            <label>Email*</label>
            <input type="email" className="form-control" placeholder="Enter your Email"/>           
          </div>

          <div className="form-group">
            <label>Phone No*</label>
            <input type="text" className="form-control" placeholder="Enter your Phone Number"/>           
          </div>

          <div className="form-group">
            <label>Password*</label>
            <input type="password" className="form-control" placeholder="Enter Password"/>           
          </div>

          <div className="form-group">
            <label>Confirm Password*</label>
            <input type="password" className="form-control" placeholder="Confirm Password"/>           
          </div>
        
          <button type="submit" className="btn btn-success btn-block">
             Sign Up
          </button>

          <p className="text-center mt-3 mb-0">
            Already registered?{" "}
          <a href=" " className="font-weight-bold" style={{ textDecoration: "underline" }}>
            Login
          </a>
          </p>

          </form>
          </div>
          </div>
    );
}
export default Register;