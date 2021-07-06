import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="container mt-5 position-relative">
                <h1 className="text-center">404: Page not found.</h1>
                <Link
                    className="btn btn-dark btn-sm position-absolute top-100 start-50 mt-5"
                    to="/"
                >
                    Return Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
