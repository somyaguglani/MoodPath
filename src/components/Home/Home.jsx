import React from "react";
import css from "../Home/Home.module.css";
import Discover from "../Discover/Discover";
import Counselors from "../Counselors/Counselors";
import HowToUse from "../HowToUse/HowToUse";
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
      <HowToUse />
    </>
  );
}

export default Home;
