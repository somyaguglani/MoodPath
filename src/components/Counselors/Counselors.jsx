import React, { useState } from "react";
import css from "../Counselors/Counselors.module.css";
const SMALL_BOUNDRY = 4;
const LARGER_BOUNDRY = 7;

function Counselors() {
  // put your counsellors array here and replace them with the logo images

  const [currentIndex, changeIndex] = useState(7);

  const changeArraySize = () => {
    if (window.innerWidth <= 960) {
      changeIndex((prevIndex) => SMALL_BOUNDRY);
    } else {
      changeIndex((prevIndex) => LARGER_BOUNDRY);
    }
  };

  window.addEventListener(`resize`, changeArraySize);

  return (
    <div className={css.CounselorsContainer}>
      <h1>Professional, licensed, and vetted counselors that you can trust</h1>

      <ul className={css.ListContainer}>
        <li>
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
        </li>
        <li>
          <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="logo" />
        </li>
      </ul>

      <p>
        Tap into the world's largest network of licensed, accredited, and
        experienced counselors who can help you with a range of issues including
        depression, anxiety, relationships, trauma, grief, and more. With our
        counselors, you get the same professionalism and quality you would
        expect from an in-office counselor, but with the ability to communicate
        when and how you want.
      </p>
    </div>
  );
}

export default Counselors;
