import React from "react";
import image from "../images/defult.jpg";

function Profile() {
  return (
    <div className="container mt-5">

      {/* MAIN HEADING */}
      <h2 className="text-center font-weight-bold text-primary mb-5">
         User Profile
      </h2>

      {/* SUB HEADING */}
      <h4 className="font-weight-bold mb-3">
         Profile Editing
      </h4>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4">

            {/* PROFILE IMAGE CENTERED */}
            <div className="text-center mb-4">
              <img
                src={image}
                className="rounded-circle"
                alt="Profile"
                width="100"
                height="100"
              />
            </div>

            <form>

              {/* NAME */}
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="mb-1">Full Name</label>
                  <span style={{ cursor: "pointer" }}>✏️</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="mb-1">Email</label>
                  <span style={{ cursor: "pointer" }}>✏️</span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>

              {/* PHONE */}
              <div className="form-group">
                <div className="d-flex justify-content-between align-items-center">
                  <label className="mb-1">Phone</label>
                  <span style={{ cursor: "pointer" }}>✏️</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                />
              </div>

              {/* CHANGE PASSWORD */}
              <div className="text-right mb-3">
                <a href="#" className="btn btn-outline-warning btn-sm">
                  🔑 Change Password
                </a>
              </div>

              {/* SAVE BUTTON */}
              <button type="submit" className="btn btn-success btn-block">
                 Save Changes
              </button>

            </form>

          </div>
        </div>
      </div>

      {/* MY RECIPES SECTION */}
      <div className="mt-5">

        <div className="d-flex justify-content-between align-items-center mb-3">
          
          <h4 className="font-weight-bold text-success mb-0">
             My Recipes
          </h4>

          <a href="#" className="btn btn-primary btn-sm">
             View Recipes
          </a>

        </div>


      </div>

    </div>
  );
}

export default Profile;