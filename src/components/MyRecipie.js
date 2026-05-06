import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";

function MyRecipie() {
  const [search, setSearch] = useState("");
const [difficulty, setDifficulty] = useState("");
const [sort, setSort] = useState("");
  const [recipies, setRecipies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 4; // change as you want
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/userapi/myrecipies/", {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(res => {
      setRecipies(res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  // ✅ DELETE FUNCTION
  function deleteRecipie(id) {

    if (!window.confirm("Delete this recipie?")) return;

    axios.delete(`http://127.0.0.1:8000/userapi/deleterec/${id}/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    .then(() => {
      alert("Deleted successfully");

      // remove from UI
      setRecipies(recipies.filter(r => r.id !== id));
    })
    .catch(() => {
      alert("Error deleting");
    });
  }
useEffect(() => {
  setCurrentPage(1);
}, [search, difficulty, sort]);

  let filtered = [...recipies];

// 🔍 SEARCH
if (search) {
  filtered = filtered.filter(r =>
    r.title?.toLowerCase().includes(search.toLowerCase())
  );
}

// 🎯 FILTER
if (difficulty) {
  filtered = filtered.filter(r =>
    r.difficulty_level?.toLowerCase() === difficulty.toLowerCase()
  );
}

// 🔃 SORT
if (sort === "views") {
  filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
} else if (sort === "latest") {
  filtered.sort((a, b) =>
    new Date(b.date || 0) - new Date(a.date || 0)
  );
}


// 📌 PAGINATION LOGIC
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(filtered.length / itemsPerPage);

  return (
    <div className="container mt-5">

      <h2 className="text-center font-weight-bold text-success mb-4">
        My Recipies
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

        {currentItems.map((r) => (
          <Card
            key={r.id}
            recipe={r}
            showEdit={true}
            onEdit={() => navigate(`/edit/${r.id}`)}
            onDelete={() => deleteRecipie(r.id)}
          />
        ))}

      </div>

     <Pagination
  total={filtered.length}
  perPage={itemsPerPage}
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
/>

    </div>
  );
}

export default MyRecipie;