import React from "react";

function Card({ showEdit }) {   // ✅ receive prop
  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow-sm h-100 text-center">

        <div className="card-body">

          <h5 className="text-primary font-weight-bold">
            🍲 Chicken Curry
          </h5>

          <p className="text-muted">
            👁 Views: 120
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center">

            {/* ✅ IMPORTANT: condition */}
            {showEdit && (
              <button className="btn btn-warning btn-sm mr-2">
                ✏️ Edit
              </button>
            )}

            <button className="btn btn-outline-primary btn-sm">
               View Details
            </button>

          </div>

        </div>

      </div>

    </div>
    
  );
}

export default Card;