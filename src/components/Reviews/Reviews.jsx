import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDoctorReviews } from "../../actions/getDoctorReviews";
// import getReviewsArray from "../../helpers/doctorReviewsArray";
import css from "../Reviews/Reviews.module.css";

function Reviews({ getDoctorReviews, reviews }) {
  //   useEffect(() => {
  //     props.getReviews(url);
  //   }, []);
  useEffect(() => {
    getDoctorReviews();
  }, [getDoctorReviews]);
  useEffect(() => {
    console.log(reviews);
  }, [reviews]);
  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>Reviews</h1>
      </div>
      <div className={css.ReviewsContainer}>
        {reviews.length &&
          reviews.map((item, index) => {
            return (
              <div className={css.Outer} key={`review-${index}`}>
                <div className={css.InnerFlex}>
                  <div className={css.PhotoDiv}>
                    <img
                      style={{ width: `80px`, height: `80px`, border: `none` }}
                      className={css.Image}
                      src={item.image}
                      alt="doctorImage"
                      className={css.DoctorImage}
                    />
                  </div>

                  <h5 style={{ marginTop: `2rem` }} className={css.Name}>
                    {item.name}
                  </h5>
                  <div className={css.Stats}>
                    <h5 className={css.Name}> Rating : {item.rating}</h5>
                    <h5 className={css.Name}>Phone Number : {item.phoneno}</h5>
                    <h5 className={css.Name}>Email : {item.email}</h5>
                  </div>

                  <div className={css.ParaDiv}>
                    <p className={css.Description}>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  reviews: state.getDoctorReviews.reviewList,
});

export default connect(mapStateToProps, { getDoctorReviews })(Reviews);
