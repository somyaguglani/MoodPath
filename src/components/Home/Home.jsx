import React from "react";
import Discover from "../Discover/Discover";
import css from "../Home/Home.module.css";
import Counselors from "../Counselors/Counselors";
function Home() {
  return (
    <>
      <Discover />
      <div className={css.MissionContainer}>
        <h1>Our Mission</h1>
        <p>
          Making professional counseling accessible
          <br />
          and convenient - so anyone who struggles with life’s challenges can
          get help, anytime, anywhere.
        </p>
      </div>
      <Counselors />
    </>
  );
}

export default Home;
