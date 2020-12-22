import React from "react";
import css from "../HowToUse/HowToUse.module.css";
import { ImArrowDown } from "react-icons/im";
function HowToUse() {
  return (
    <div className={css.HowToUseContainer}>
      <h1>Get matched to the best counselor for you</h1>
      <div className={css.InnerFlexbox}>
        <img
          className={css.PuzzleImage}
          src={process.env.PUBLIC_URL + "/logo192.png"}
          alt="logo"
        />

        <p className={css.IntroPara}>
          Answer a few questions to find a therapist that fits your needs and
          preferences. Tap into the largest network of licensed, professional,
          board-certified providers.
        </p>
      </div>

      <ImArrowDown className={css.ArrowIcon} />

      <h1>Therapy when you need it</h1>
      <p>
        Check reviews given to different therapists and choose the one you are
        most comfortable with.{" "}
      </p>
    </div>
  );
}

export default HowToUse;
