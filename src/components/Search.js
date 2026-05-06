import React from "react";

function Search({ search, setSearch, difficulty, setDifficulty, sort, setSort }) {
  return (
    <div className="row mb-4">

      {/* SEARCH */}
      <div className="col-md-6 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="🔍 Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FILTER */}
      <div className="col-md-3 mb-2">
        <select
          className="form-control"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">All Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* SORT */}
      <div className="col-md-3 mb-2">
        <select
          className="form-control"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="views">Most Viewed</option>
          <option value="latest">Latest</option>
        </select>
      </div>

    </div>
  );
}

export default Search;