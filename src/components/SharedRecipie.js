import React from "react";

function SharedRecipie() {
  return (
    <div className="container mt-5">

      {/* RECIPE TITLE */}
      <h2 className="text-center font-weight-bold text-primary mb-3">
        
      </h2>

      {/* OWNER + VIEWS */}
      <p className="text-center text-muted mb-4">
        By <strong></strong> | 👁 Views: <strong></strong>
      </p>

      <div className="card shadow p-4">

        {/* INGREDIENTS */}
        <h4 className="text-success">🥕 Ingredients</h4>
        <ul>
          
        </ul>

        <hr />

        {/* STEPS */}
        <h4 className="text-info">📝 Steps</h4>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">1</span>
          </div>
          <input className="form-control" value="Clean and cut chicken" readOnly />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">2</span>
          </div>
          <input className="form-control" value="Fry onions and tomatoes" readOnly />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">3</span>
          </div>
          <input className="form-control" value="Add spices and cook chicken" readOnly />
        </div>

        <hr />

        {/* COOKING TIME */}
        <h4 className="text-warning">⏱ Cooking Time</h4>
        <p className="font-weight-bold">45 minutes</p>

        <hr />

        {/* DIFFICULTY */}
        <h4 className="text-danger">🔥 Difficulty Level</h4>

        <div className="form-check">
          <input className="form-check-input" type="radio" checked readOnly />
          <label className="form-check-label text-success">Easy</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" readOnly />
          <label className="form-check-label text-warning">Medium</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" readOnly />
          <label className="form-check-label text-danger">Hard</label>
        </div>

        <hr />

        {/* IMAGES */}
        <h4 className="text-primary">📸 Recipe Images</h4>

        <div className="row text-center">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300"
              className="img-fluid rounded mb-3"
              alt="recipe"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300"
              className="img-fluid rounded mb-3"
              alt="recipe"
            />
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/300"
              className="img-fluid rounded mb-3"
              alt="recipe"
            />
          </div>
        </div>

      </div>

    </div>
  );
}

export default SharedRecipie;