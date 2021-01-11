import React from "react";
import css from "../FAQ/FAQ.module.css";
import FrequentlyAskedQuestionsArray from "../../helpers/FrequentlyAskedQuestionsArray.js";

function FAQ() {
  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>Frequently Asked Questions</h1>
      </div>

      <div className={css.InnerFlex}>
        {FrequentlyAskedQuestionsArray.map((item, index) => {
          return (
            <div className={css.QuestionsContainer} key={index}>
              <h2 className={css.Question}>{item.question}</h2>
              <p className={css.Answer}>{item.answer}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FAQ;
