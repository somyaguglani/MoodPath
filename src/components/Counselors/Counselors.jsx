import React, { useState } from "react";
import css from "../Counselors/Counselors.module.css";
import image1 from "../../images/counselor1.jpg";
import image2 from "../../images/counselor2.jpg";
import image3 from "../../images/counselor3.jpg";
import image4 from "../../images/counselor4.jpg";
// import images from "../../images/counselor1.jpg";
const SMALL_BOUNDRY = 4;
const LARGER_BOUNDRY = 7;

function Counselors() {
  // put your counsellors array here and replace them with the logo images
  // console.log(images);
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
          <img src={image1} alt="counselor" />
        </li>
        <li>
          <img src={image2} alt="counselor" />
        </li>
        <li>
          <img src={image3} alt="counselor" />
        </li>
        <li>
          <img src={image4} alt="counselor" />
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
