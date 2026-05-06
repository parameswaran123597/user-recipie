import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Password() {

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  function changePassword(e) {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const token = localStorage.getItem("token");

    axios.put(
      "http://127.0.0.1:8000/userapi/passwordchg/",
      {
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
      },
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    )
    .then(res => {
  alert("Password updated successfully");

  localStorage.removeItem("token");   // 🔥 important
  navigate("/login");                 // redirect to login
})
    .catch(err => {
  console.log(err.response);   // 👈 see real error

  if (err.response && err.response.data.message) {
    setMessage(err.response.data.message);
  } else {
    setMessage("Something went wrong");
  }
});
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card shadow p-4" style={{ width: "400px" }}>

        <h3 className="text-center mb-4 font-weight-bold text-warning">
          Change Password
        </h3>

        <form onSubmit={changePassword}>

          {/* Old Password */}
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter old password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          {/* New Password */}
          <div className="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-danger mt-2">{message}</p>
          )}

          {/* Button */}
          <button type="submit" className="btn btn-warning btn-block w-100 mt-3">
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default Password;