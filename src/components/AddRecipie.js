import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecipie() {

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [images, setImage] = useState(null);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function createRecipie(e) {
    e.preventDefault();

    if (!title || !ingredients || !steps || !cookingTime || !difficulty) {
      alert("All fields are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("ingredients", ingredients);
    formData.append("steps", steps);
    formData.append("cooking_time", cookingTime);
    formData.append("difficulty_level", difficulty);
    if (images) {
      formData.append("images", images);
    }

    axios.post(
      "http://127.0.0.1:8000/userapi/addrecipie/",
      formData,
      {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    )
    .then(() => {
      alert("Recipe created successfully");
      navigate("/list"); // or profile
    })
    .catch(() => {
      alert("Error creating recipe");
    });
  }

  return (
    <div className="container mt-5">

      <h2 className="text-center font-weight-bold text-primary mb-5">
        New Recipe
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow p-4">

            <form onSubmit={createRecipie}>

              {/* TITLE */}
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* INGREDIENTS */}
              <div className="form-group">
                <label>Ingredients</label>
                <textarea
                  className="form-control"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                />
              </div>

              {/* STEPS */}
              <div className="form-group">
                <label>Steps</label>
                <textarea
                  className="form-control"
                  value={steps}
                  onChange={(e) => setSteps(e.target.value)}
                />
              </div>

              {/* COOKING TIME */}
              <div className="form-group">
                <label>Cooking Time</label>
                <input
                  type="number"
                  className="form-control"
                  value={cookingTime}
                  onChange={(e) => setCookingTime(e.target.value)}
                />
              </div>

              {/* DIFFICULTY */}
              <div className="form-group">
                <label>Difficulty Level</label>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="difficulty"
                    value="Easy"
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                  <label className="form-check-label text-success">Easy</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="difficulty"
                    value="Medium"
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                  <label className="form-check-label text-warning">Medium</label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="difficulty"
                    value="Hard"
                    onChange={(e) => setDifficulty(e.target.value)}
                  />
                  <label className="form-check-label text-danger">Hard</label>
                </div>
              </div>

              {/* IMAGE */}
              <div className="form-group">
                <label>Upload Image</label>
                <input
                  type="file"
                  className="form-control-file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <button type="submit" className="btn btn-success btn-block">
                ➕ Create Recipie
              </button>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
}

export default AddRecipie;