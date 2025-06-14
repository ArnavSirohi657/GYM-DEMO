import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
            <div className="container-fluid">
                {/* Logo or Site Title */}
                <NavLink className="navbar-brand fw-bold text-white fs-4" to="/">
                    MFIT <span className="text-warning">FITNESS</span> CENTER
                </NavLink>

                {/* Toggle for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav align-items-center gap-4">
                        {["/", "/about", "/trainer", "/signup"].map((path, idx) => {
                            const names = ["Home", "About Us", "Our Trainers", "Sign In"];
                            return (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-warning fw-bold" : "text-white"}`
                                    }
                                >
                                    {names[idx]}
                                </NavLink>
                            );
                        })}

                        {/* Contact button */}
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `btn ${isActive ? "btn-light" : "btn-warning"} text-dark fw-semibold px-4`
                            }
                            style={{ borderRadius: "2px" }}
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
