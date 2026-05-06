import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

  var [name, setName] = useState('');
  var [email, setEmail] = useState('');
  var [password, setPassword] = useState('');
  var [passwordConf, setPasswordConf] = useState('');
  var [errorMessage, setErrorMessage] = useState('');

  var navigate = useNavigate();

  function registerUser(e){
    e.preventDefault();  
    
    if(password !== passwordConf){
    setErrorMessage("Passwords do not match");
    return;
  }

    const user = {
      name: name,
      email: email,
      password: password
    };

    axios.post("http://127.0.0.1:8000/userapi/signup/", user)
      .then(res => {
        alert("User registered successfully");
        navigate("/login");
      })
      .catch(err => {
        setErrorMessage("Error registering user");
      });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h3 className="text-center mb-4 text-success">Register</h3>

        {errorMessage && <p className="text-danger">{errorMessage}</p>}

        <form onSubmit={registerUser}>

          {/* Name */}
          <div className="form-group">
            <label>Full Name*</label>
            <input 
              type="text" 
              className="form-control"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email*</label>
            <input 
              type="email" 
              className="form-control"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password*</label>
            <input 
              type="password" 
              className="form-control"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password*</label>
            <input 
              type="password" 
              className="form-control"
              value={passwordConf}
              onChange={(e)=>setPasswordConf(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success btn-block mt-3">
            Sign Up
          </button>
<p className="text-center mt-3 mb-0">
            Already Registered ?{" "}
            <a href="/login" style={{ textDecoration: "underline" }}>
              Sign In
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Register;