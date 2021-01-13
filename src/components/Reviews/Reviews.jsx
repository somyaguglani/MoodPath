import React, { useEffect } from "react";
import { connect } from "react-redux";
import getDoctorReviews from "../../actions/getDoctorReviews";
import getReviewsArray from "../../helpers/doctorReviewsArray";
import css from "../Reviews/Reviews.module.css";
const url = "https://moodpath1.herokuapp.com/doctor";

function Reviews(props) {
  //   useEffect(() => {
  //     props.getReviews(url);
  //   }, []);
  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>Reviews</h1>
      </div>
      <div className={css.ReviewsContainer}>
        {/* {console.log(props.reviews)} */}

        {getReviewsArray.map((item, index) => {
          return (
            <div className={css.Outer}>
              <div className={css.InnerFlex} key={index}>
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
  reviews: state.getDoctorReviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (url) => dispatch(getDoctorReviews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
