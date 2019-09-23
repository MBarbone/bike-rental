import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/rentals" className="item">
          Bike Rentals
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
