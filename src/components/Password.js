import React from "react";

function Password(){
    return (
          <div className="container d-flex justify-content-center align-items-center vh-100">
      
      <div className="card shadow p-4" style={{ width: "400px" }}>
        
      
        <h3 className="text-center mb-4 font-weight-bold text-warning">
           Change Password
        </h3>

        <form>

          
          <div className="form-group">
            <label>Old Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter old password"
            />
          </div>

         
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
            />
          </div>

         
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
            />
          </div>

        
          <button type="submit" className="btn btn-warning btn-block">
            Update Password
          </button>

        </form>

      </div>

    </div>
    );
}
export default Password