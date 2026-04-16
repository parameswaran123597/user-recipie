import React from "react";

function Search() {
  return (
    <div className="row mb-4">

      {/* SEARCH BOX */}
      <div className="col-md-6 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search recipes..."
        />
      </div>

      {/* FILTER DROPDOWN */}
      <div className="col-md-3 mb-2">
        <select className="form-control">
          <option>All Difficulty</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      {/* SORT */}
      <div className="col-md-3 mb-2">
        <select className="form-control">
          <option>Sort By</option>
          <option>Most Viewed</option>
          <option>Latest</option>
        </select>
      </div>

    </div>
  );
}

export default Search;