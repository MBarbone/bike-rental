import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ui container">
      <h3>Home</h3>
      <Link to="/rentals">Go to rentals</Link>
    </div>
  );
};

export default Home;
