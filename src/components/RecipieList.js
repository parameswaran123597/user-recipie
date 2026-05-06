import React, { useEffect, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import Pagination from "./Pagination";
import axios from "axios";

function RecipeList() {

  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
const recipesPerPage = 6;
  const token = localStorage.getItem("token");

  // ✅ Load recipes
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/userapi/listrec/", {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => {
      setRecipes(res.data);
      setFiltered(res.data);
    })
    .catch(() => alert("Error loading recipes"));
  }, []);

  // ✅ Filter logic
 useEffect(() => {

  let data = [...recipes];

  if (search) {
    data = data.filter(r =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (difficulty) {
    data = data.filter(r =>
      r.difficulty_level?.toLowerCase() === difficulty.toLowerCase()
    );
  }

  if (sort === "views") {
    data.sort((a, b) => Number(b.views) - Number(a.views));
  } else if (sort === "latest") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  setFiltered(data);
  setCurrentPage(1);   // ✅ reset page

}, [search, difficulty, sort, recipes]);


  const indexOfLast = currentPage * recipesPerPage;
const indexOfFirst = indexOfLast - recipesPerPage;

const currentRecipes = filtered.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container mt-5">

      <h2 className="text-center text-success mb-4">
        Recipe List
      </h2>

      <Search
        search={search}
        setSearch={setSearch}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        sort={sort}
        setSort={setSort}
      />

      <div className="row">

        {filtered.length === 0 ? (
          <p className="text-center text-muted">No recipes found</p>
        ) : (
          currentRecipes.map((r) => (
            <Card key={r.id} recipe={r} />
          ))
        )}

      </div>

      <Pagination
  total={filtered.length}
  perPage={recipesPerPage}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
/>

    </div>
  );
}

export default RecipeList;