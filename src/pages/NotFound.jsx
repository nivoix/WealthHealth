import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <h1>Page not found</h1>
      <NavLink className="notFoundLink" to="/">
        <button>Go Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
