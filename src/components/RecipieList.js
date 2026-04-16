import React from "react";
import Card from "./Card";
import Search from "./Search";
import Pagination from "./Pagination";

function RecipeList() {
  return (
    <div className="container mt-5">

      {/* MAIN HEADING */}
      <h2 className="text-center font-weight-bold text-success mb-4">
         Recipe List
      </h2>

      {/* SEARCH */}
      <Search />

      {/* CARDS */}
      <div className="row">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      
 <Pagination />
    </div>
    
  );
}

export default RecipeList;