import React from "react";

function RecipeDetail() {
  return (
    <div className="container mt-5">

      {/* RECIPE NAME */}
      <h2 className="text-center font-weight-bold text-primary mb-3">
        🍲 Recipe Name
      </h2>

      {/* OWNER + VIEWS */}
      <p className="text-center text-muted mb-4">
        👤 Owner Name | 👁 Views
      </p>

      <div className="card shadow p-4">

        {/* INGREDIENTS */}
        <h4 className="text-success mb-3">🥕 Ingredients</h4>
        <ul>
          <li>---</li>
          <li>---</li>
          <li>---</li>
        </ul>

        <hr />

        {/* STEPS */}
        <h4 className="text-info mb-3">📝 Steps</h4>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">1</span>
          </div>
          <input className="form-control" readOnly />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">2</span>
          </div>
          <input className="form-control" readOnly />
        </div>

        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text">3</span>
          </div>
          <input className="form-control" readOnly />
        </div>

        <hr />

        {/* COOKING TIME */}
        <h4 className="text-warning mb-3">⏱ Cooking Time</h4>
        <p className="font-weight-bold">---</p>

        <hr />

        {/* DIFFICULTY */}
        <h4 className="text-danger mb-3">🔥 Difficulty Level</h4>

        <div className="form-check">
          <input className="form-check-input" type="radio" disabled />
          <label className="form-check-label text-success">Easy</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" disabled />
          <label className="form-check-label text-warning">Medium</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" disabled />
          <label className="form-check-label text-danger">Hard</label>
        </div>

        <hr />

        {/* IMAGES */}
        <h4 className="text-primary mb-3">📸 Recipe Images</h4>

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

export default RecipeDetail;