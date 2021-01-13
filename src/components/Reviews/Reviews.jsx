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
    <div className={css.ReviewsContainer}>
      {/* {console.log(props.reviews)} */}

      {getReviewsArray.map((item, index) => {
        return (
          <div className={css.InnerFlex} key={index}>
            <img
              src={item.image}
              alt="doctorImage"
              className={css.DoctorImage}
            />

            <div className={css.InformationBox}>
              <h2>{item.name}</h2>
              <h2> Rating : {item.rating}</h2>

              <div className={css.InformationBoxInner}>
                <h3>{item.phoneno}</h3>
                <h3>{item.email}</h3>
              </div>

              <p>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  reviews: state.getDoctorReviews,
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (url) => dispatch(getDoctorReviews(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
