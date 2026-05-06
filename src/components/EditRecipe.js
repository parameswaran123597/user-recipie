import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {

  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(true);

  // ✅ LOAD EXISTING RECIPE DATA
  useEffect(() => {

    if (!token) {
      navigate("/login");
      return;
    }

    axios.get(`http://127.0.0.1:8000/userapi/singlerecipie/${id}/`)
      .then(res => {
        const data = res.data;

        setTitle(data.title || "");
        setIngredients(data.ingredients || "");
        setSteps(data.steps || "");
        setCookingTime(data.cooking_time || "");
        setDifficulty(data.difficulty_level || "");

        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        alert("Error loading recipe");
        setLoading(false);
      });

  }, [id, token, navigate]);

  // ✅ UPDATE FUNCTION
  function updateRecipie(e) {
  e.preventDefault();

  const formData = new FormData();

  formData.append("title", title);
  formData.append("ingredients", ingredients);
  formData.append("steps", steps);
  formData.append("cooking_time", cookingTime);
  formData.append("difficulty_level", difficulty);

  // ✅ send image only if user selects new one
  if (image) {
    formData.append("images", image);
  }

  axios.put(
    `http://127.0.0.1:8000/userapi/editrecipie/${id}/`,
    formData,
    {
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "multipart/form-data"
      }
    }
  )
  .then(() => {
    alert("Recipe updated successfully");
    navigate("/mylist");
  })
  .catch(err => {
    console.log(err.response);
    alert("Error updating recipe");
  });
}

  // ✅ DELETE FUNCTION
  function deleteRecipie() {

    if (!window.confirm("Are you sure you want to delete this recipe?")) return;

    axios.delete(
      `http://127.0.0.1:8000/userapi/deleterec/?id=${id}`,
      {
        headers: {
          Authorization: `Token ${token}`
        }
      }
    )
    .then(() => {
      alert("Recipe deleted successfully");
      navigate("/mylist");
    })
    .catch(err => {
      console.log(err);
      alert("Error deleting recipe");
    });
  }

  // ✅ LOADING STATE
  if (loading) {
    return (
      <div className="text-center mt-5">
        <h5>Loading recipe...</h5>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <h3 className="text-center text-primary mb-4">
        ✏️ Edit Recipe
      </h3>

      <div className="card shadow p-4">

        <form onSubmit={updateRecipie}>

          {/* TITLE */}
          <input
            className="form-control mb-3"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* INGREDIENTS */}
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />

          {/* STEPS */}
          <textarea
            className="form-control mb-3"
            rows="3"
            placeholder="Steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />

          {/* COOKING TIME */}
          <input
            type="number"
            className="form-control mb-3"
            placeholder="Cooking Time (minutes)"
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
          />


          {/* DIFFICULTY */}
          <select
            className="form-control mb-3"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <input
  type="file"
  className="form-control mb-3"
  onChange={(e) => setImage(e.target.files[0])}
/>

          {/* UPDATE BUTTON */}
          <button className="btn btn-success w-100 mb-2">
            ✅ Update Recipe
          </button>

        </form>

        {/* DELETE BUTTON */}
        <button
          className="btn btn-danger w-100"
          onClick={deleteRecipie}
        >
          🗑 Delete Recipe
        </button>

      </div>

    </div>
  );
}

export default EditRecipe;