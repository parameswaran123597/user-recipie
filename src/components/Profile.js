import React, { useEffect, useState } from "react";
import image from "../images/defult.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  // ✅ Load profile only
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/userapi/profile/", {
      headers: { Authorization: `Token ${token}` }
    })
    .then(res => {
      setName(res.data.name || "");
      setEmail(res.data.email || "");
    })
    .catch(() => console.log("Error loading profile"));
  }, []);

  // ✅ Load recipes when button clicked
  function loadRecipes() {
    axios.get("http://127.0.0.1:8000/userapi/myrecipies/", {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => {
      setRecipes(res.data);
      setShowRecipes(true);
    })
    .catch(() => alert("Error loading recipes"));
  }

  // ✅ Update profile
  function handleUpdate(e) {
    e.preventDefault();

    axios.put("http://127.0.0.1:8000/userapi/update/", {
      name: name,
      email: email
    }, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(() => {
      alert("Profile updated successfully");
    })
    .catch(() => {
      alert("Error updating profile");
    });
  }

  return (
  <div className="container mt-5">

  <div className="row g-4">

    {/* LEFT SIDE */}
    <div className="col-md-4">
      <div className="card shadow-lg border-0 text-center p-4">

        <img
          src={image}
          className="rounded-circle mx-auto mb-3 border"
          width="120"
          height="120"
          alt="profile"
        />

        <h5 className="fw-bold">{name || "User"}</h5>
        <p className="text-muted small">{email}</p>

        <button
          className="btn btn-warning w-100 mt-3"
          onClick={() => navigate("/pass")}
        >
          🔑 Change Password
        </button>

      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="col-md-8">
      <div className="card shadow-lg border-0 p-4">

        <h4 className="mb-4 text-primary fw-bold">
          ✏️ Edit Profile
        </h4>

        <form onSubmit={handleUpdate}>

          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button className="btn btn-success px-4">
            💾 Save Changes
          </button>

        </form>

        {/* MY RECIPES BUTTON */}
        <hr className="my-4" />

        <button
          className="btn btn-primary w-100"
          onClick={() => navigate("/mylist")}
        >
          🍲 View My Recipes
        </button>

      </div>
    </div>

  </div>

</div>
  );
}

export default Profile;