import React from "react";
import css from "../Discover/Discover.module.css";
import { Link } from "react-router-dom";

function Discover() {
  return (
    <div className={css.DiscoverContainer}>
      <h1>You deserve to be happy</h1>
      <p>What are you waiting for?</p>
      <Link to="/signup">
        <button className={css.DiscoverButton}>Get Started </button>
      </Link>
    </div>
  );
}

export default Discover;
