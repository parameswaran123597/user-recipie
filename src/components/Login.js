import React from "react";

function Login() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div className="card shadow p-4" style={{ width: "400px" }}>
        
      
        <h3 className="text-center mb-4 font-weight-bold text-success">
           Login
        </h3>

        <form>

      
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

     
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

         
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label className="form-check-label" htmlFor="remember">
              Show Password
            </label>
          </div>

          
          <button type="submit" className="btn btn-success btn-block">
            Sign In
          </button>

         
          <p className="text-center mt-3 mb-0">
            Not Registered Yet?{" "}
            <a href="" style={{ textDecoration: "underline" }}>
              Sign Up
            </a>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;