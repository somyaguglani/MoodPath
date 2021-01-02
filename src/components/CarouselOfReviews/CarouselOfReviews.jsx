import React from "react";
import css from "../CarouselOfReviews/CarouselOfReviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSettings from "../../helpers/CarouselSettings";
import ReviewsArray from "../../helpers/ReviewsArray";

function CarouselOfReviews() {
  //import and use the reviews array, settings here later on and download and put comma pics
  return (
    <div className={css.TotalContainer}>
      <h1>Our Success Stories</h1>
      <div className={css.Slider}>
        <Slider {...CarouselSettings}>
          {ReviewsArray.map((item, index) => {
            return (
              <div key={index} className={css.CarouselOfReviewsContainer}>
                <div className={css.InnerFlex}>
                  <img
                    className={css.Comas}
                    src={process.env.PUBLIC_URL + "/logo192.png"}
                    alt="logo"
                  />
                  <p className={css.Quotes}>{item.words}</p>
                  <img
                    className={css.Comas}
                    src={process.env.PUBLIC_URL + "/logo192.png"}
                    alt="logo"
                  />
                </div>

                <div className={css.InnerFlexTwo}>
                  <img
                    className={css.ProfileImage}
                    src={process.env.PUBLIC_URL + "/logo192.png"}
                    alt="logo"
                  />

                  <p className={css.UserInfo}>
                    {item.writtenBy}
                    <br /> {item.place}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselOfReviews;
