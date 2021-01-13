import React, { useEffect } from "react";
import css from "../UserProfile/UserProfile.module.css";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../actions/getDoctorReviews";
import { connect } from "react-redux";
import image from "../../images/counselor1.jpg";

// import { GiDirectionSigns } from "react-icons/gi";
import {
  AiOutlineMail,
  AiOutlineHome,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FiUser, FiPhone } from "react-icons/fi";

//get user details here

function UserProfile({ getUserInfo }) {
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>User profile</h1>
      </div>

      <div className={css.UserProfileContainer}>
        <div className={css.ProfilePicContainer}>
          <img className={css.UserProfileImage} src={image} alt="logo" />
          <h2 className={css.Information}>Hi Navjyot</h2>
        </div>

        <div className={css.UserInfoContainer}>
          <h1 className={css.InfoHeading}>User Information</h1>

          <div className={css.NamesContainer}>
            <FiUser className={css.UserIcons} />
            <h2 className={css.Information}>Name : Navjyot</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineMail className={css.UserIcons} />
            <h2 className={css.Information}>
              Verified Email : navjot20@gmail.com
            </h2>
          </div>

          <div className={css.NamesContainer}>
            <FiPhone className={css.UserIcons} />
            <h2 className={css.Information}>Verified Phone : 9711078159</h2>
          </div>
          <div className={css.NamesContainer}>
            <FiUser className={css.UserIcons} />
            <h2 className={css.Information}>Gender : Male</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineHome className={css.UserIcons} />
            <h2 className={css.Information}>Address : Delhi</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineCalendar className={css.UserIcons} />
            <h2 className={css.Information}> Date Of Birth: 12/05/1998</h2>
          </div>

          <h2 style={{ marginTop: `2rem` }} className={css.Information}>
            Take a small test that will help us match the right counselor to you
          </h2>
          <Link to="/testquestions">
            <button className={css.FormButtons}>Take Test</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default connect(null, { getUserInfo })(UserProfile);
