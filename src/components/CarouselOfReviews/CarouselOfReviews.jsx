import React from "react";
import css from "../CarouselOfReviews/CarouselOfReviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselSettings from "../../helpers/CarouselSettings";
import ReviewsArray from "../../helpers/ReviewsArray";
import image1 from "../../images/counselor5.jpg";
import image2 from "../../images/counselor6.jpg";
import image3 from "../../images/counselor7.jpg";
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
                  <p className={css.Quotes}>{item.words}</p>
                </div>

                <div className={css.InnerFlexTwo}>
                  <img className={css.ProfileImage} src={image1} alt="user" />

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
