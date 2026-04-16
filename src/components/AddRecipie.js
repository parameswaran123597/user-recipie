import React from "react";


function AddRecipie() {
  return (
    <div className="container mt-5">

      {/* MAIN HEADING */}
      <h2 className="text-center font-weight-bold text-primary mb-5">
         New Recipe
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4">

            <form>

              {/* TITLE */}
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter recipe title"
                />
              </div>

              {/* INGREDIENTS */}
              <div className="form-group">
                <label>Ingredients</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter ingredients"
                ></textarea>
              </div>

              {/* STEPS */}
              <div className="form-group">
                <label>Steps</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter cooking steps"
                ></textarea>
              </div>

              {/* COOKING TIME */}
              <div className="form-group">
                <label>Cooking Time (minutes)</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter time"
                />
              </div>

              {/* DIFFICULTY */}
              <div className="form-group">
                <label>Difficulty Level</label>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="difficulty" />
                  <label className="form-check-label text-success">Easy</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="difficulty" />
                  <label className="form-check-label text-warning">Medium</label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="difficulty" />
                  <label className="form-check-label text-danger">Hard</label>
                </div>
              </div>

              {/* IMAGE UPLOAD */}
              <div className="form-group">
                <label>Upload Image</label>
                <input type="file" className="form-control-file" multiple/>
              </div>

              {/* BUTTON */}
              <button type="submit" className="btn btn-success btn-block">
                ➕ Create Recipe
              </button>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default AddRecipie;