import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="container mt-4">
        <Outlet />
      </div>

    </div>
  );
}

export default App;
