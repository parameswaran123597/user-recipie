import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ recipe, showEdit, onEdit, onDelete }) {

  const navigate = useNavigate();

  return (
    <div className="col-md-4 mb-4">

      <div className="card shadow-sm h-100 border-0">

        {/* IMAGE */}
        {recipe.images && (
          <img
            src={recipe.images}
            className="card-img-top"
            alt="recipe"
            style={{ height: "200px", objectFit: "cover" }}
          />
        )}

        <div className="card-body text-center">

          {/* TITLE */}
          <h5 className="card-title">{recipe.title}</h5>

          {/* OWNER (optional) */}
          {recipe.owner && (
            <p className="text-muted mb-1">👤 {recipe.owner}</p>
          )}

          {/* VIEWS */}
          <p className="text-muted mb-1">👁️ {recipe.views}</p>

          {/* DATE */}
          <p className="text-muted mb-2">
            📅 {recipe.date
              ? new Date(recipe.date).toLocaleDateString()
              : "No date"}
          </p>

          {/* BUTTONS */}
          <div className="d-flex justify-content-center gap-2 mt-3">

            {/* VIEW */}
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              View
            </button>

            {/* EDIT (only for my recipes) */}
            {showEdit && (
              <button
                className="btn btn-warning btn-sm"
                onClick={onEdit}
              >
                Edit
              </button>
            )}

            {/* DELETE */}
            {showEdit && (
              <button
                className="btn btn-danger btn-sm"
                onClick={onDelete}
              >
                Delete
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Card;