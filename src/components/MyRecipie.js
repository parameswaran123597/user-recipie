import React from "react";
import Card from "./Card";
import Search from "./Search";
import Pagination from "./Pagination";

function MyRecipie() {
  return (
    <div className="container mt-5">

      {/* HEADING */}
      <h2 className="text-center font-weight-bold text-success mb-4">
         My Recipes
      </h2>

      {/* SEARCH */}
      <Search />

      {/* CARDS */}
      <div className="row">

        <Card showEdit={true}/>
        <Card showEdit={true}/>
        <Card showEdit={true}/>
        <Card showEdit={true}/>
        <Card showEdit={true}/>
        <Card showEdit={true} />

      </div>
      <Pagination />
    </div>
  );
}

export default MyRecipie;