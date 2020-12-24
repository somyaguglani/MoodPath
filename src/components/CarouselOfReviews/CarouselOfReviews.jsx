import React from "react";
import css from "../CarouselOfReviews/CarouselOfReviews.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CarouselOfReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  const ReviewsArray = [
    {
      words: `I actually see progress in my mental health which is something i haven't been able to say in 15 years and it's thanks to her`,
      imageUrl: ``,
      writtenBy: `Written by SA.For Virginia Truglio`,
      place: `(LCSW<MSW)`,
    },

    {
      words: `Michelle listens and provides excellent guidance through life's situations. Her expertise was exactly what i needed`,
      imageUrl: ``,
      writtenBy: `Written by SA.For Michelle Wilkinson`,
      place: `(MA,LPC-S)`,
    },
    {
      words: `Susan is amazing in her insights and conversational approach. I am so happy and blessed to have found her and strated healing with her guidance.`,
      imageUrl: ``,
      writtenBy: `Written by SA.For Susan Hargett`,
      place: `(LPC,NYC)`,
    },
  ];

  //import and use the reviews array, settings here later on and download and put comma pics
  return (
    <div className={css.Slider}>
      <Slider {...settings}>
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
  );
}

export default CarouselOfReviews;
