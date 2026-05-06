import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <div className="navbar-brand">
                <h4>My app</h4>
            </div>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">

                <ul className="navbar-nav ml-auto">

                    {/* HOME */}
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            Home
                        </NavLink>
                    </li>

                    {/* NOT LOGGED IN */}
                    {!token && (
                        <>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Register
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link">
                                    Login
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* LOGGED IN */}
                    {token && (
                        <>
                            {/* PROFILE DROPDOWN */}
                            <li className="nav-item position-relative">

                                <span
                                    className="nav-link"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setOpen(!open)}
                                >
                                    👤
                                </span>

                                {open && (
                                    <div
                                        className="bg-white text-dark shadow"
                                        style={{
                                            position: "absolute",
                                            right: 0,
                                            top: "40px",
                                            width: "180px",
                                            borderRadius: "5px",
                                            zIndex: 1000
                                        }}
                                    >
                                        <div
                                            className="p-2"
                                            onClick={() => navigate("/profedit")}
                                        >
                                            👤 Profile
                                        </div>

                                        

                                        <div
                                            className="p-2 text-danger"
                                            onClick={logout}
                                        >
                                            🚪 Logout
                                        </div>
                                    </div>
                                )}

                            </li>
                        </>
                    )}

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;