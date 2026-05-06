import React from "react";

function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "relative"
      }}
    >

      {/* DARK OVERLAY */}
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.6)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0
        }}
      ></div>

      {/* CONTENT */}
      <div className="container h-100 d-flex justify-content-center align-items-center">
        <div className="text-center text-white" style={{ zIndex: 1 }}>

          <h1 className="display-4 font-weight-bold mb-3">
            🍴 Welcome to Recipe World 🍴
          </h1>

          <p className="lead mb-4">
            Discover, share, and cook amazing recipes from around the world
          </p>

          <div>
            <a href="/login" className="btn btn-success btn-lg mr-3">
              Login
            </a>

            <a href="/register" className="btn btn-outline-light btn-lg">
              Register
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;