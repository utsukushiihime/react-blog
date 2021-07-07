import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-link active">
                            Home
                        </Link>
                        <Link to="/about" className="nav-link active">
                            About
                        </Link>
                        <Link to="/articles-list" className="nav-link active">
                            Articles
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
