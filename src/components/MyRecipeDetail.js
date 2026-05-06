import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function RecipeDetail() {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/userapi/singlerecipie/${id}/`)
      .then(res => setRecipe(res.data))
      .catch(() => alert("Error loading recipe"));
  }, [id]);

  if (!recipe) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">

      {/* TITLE */}
      <h2 className="text-center text-primary mb-3">
        🍲 {recipe.title}
      </h2>

      {/* OWNER + VIEWS */}
      <p className="text-center text-muted mb-4">
        👤 {recipe.owner} | 👁 {recipe.views}
      </p>

      <div className="card shadow p-4">

        {/* INGREDIENTS */}
        <h4 className="text-success mb-3">🥕 Ingredients</h4>
        <ul>
          {recipe.ingredients.split(",").map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <hr />

        {/* STEPS */}
        <h4 className="text-info mb-3">📝 Steps</h4>

        {recipe.steps.split(".").map((step, i) => (
          <div className="input-group mb-2" key={i}>
            <div className="input-group-prepend">
              <span className="input-group-text">{i + 1}</span>
            </div>
            <input className="form-control" value={step} readOnly />
          </div>
        ))}

        <hr />

        {/* COOKING TIME */}
        <h4 className="text-warning mb-3">⏱ Cooking Time</h4>
        <p>{recipe.cooking_time} mins</p>

        <hr />

        {/* DIFFICULTY */}
        <h4 className="text-danger mb-3">🔥 Difficulty</h4>
        <p>{recipe.difficulty_level}</p>

        <hr />

        {/* IMAGE */}
        <h4 className="text-primary mb-3">📸 Image</h4>

        {recipe.images && (
          <img
            src={recipe.images}
            className="img-fluid rounded"
            alt="recipe"
          />
        )}

      </div>

    </div>
  );
}

export default RecipeDetail;