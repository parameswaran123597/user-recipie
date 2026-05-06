import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage("Please enter email and password");
      return;
    }

    axios.post("http://127.0.0.1:8000/userapi/login/", {
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data);

      // Save token in localStorage
      localStorage.setItem("token", res.data.token);

      alert("Login successful");

      // redirect to home/dashboard
      navigate("/list");
    })
    .catch(err => {
      console.log(err);
      setErrorMessage("Invalid email or password");
    });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h3 className="text-center mb-4 font-weight-bold text-success">
          Login
        </h3>

        <form onSubmit={loginUser}>

          {/* Email */}
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group mt-3">
            <label>Password*</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Show Password */}
          <div className="form-check mb-3 mt-2">
            <input
              type="checkbox"
              className="form-check-input"
              id="remember"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="remember">
              Show Password
            </label>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-danger text-center">{errorMessage}</p>
          )}

          {/* Button */}
          <button type="submit" className="btn btn-success btn-block w-100">
            Sign In
          </button>

          <p className="text-center mt-3 mb-0">
            Not Registered Yet?{" "}
            <a href="/register" style={{ textDecoration: "underline" }}>
              Sign Up
            </a>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;