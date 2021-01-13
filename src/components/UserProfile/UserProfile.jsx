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

function UserProfile({ getUserInfo, userInfo }) {
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
          <h2 className={css.Information}>Hi {userInfo.name}</h2>
        </div>

        <div className={css.UserInfoContainer}>
          <h1 className={css.InfoHeading}>User Information</h1>

          <div className={css.NamesContainer}>
            <FiUser className={css.UserIcons} />
            <h2 className={css.Information}>Name : {userInfo.name}</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineMail className={css.UserIcons} />
            <h2 className={css.Information}>
              Verified Email : {userInfo.email}
            </h2>
          </div>

          <div className={css.NamesContainer}>
            <FiPhone className={css.UserIcons} />
            <h2 className={css.Information}>
              Verified Phone : {userInfo.phone}
            </h2>
          </div>
          <div className={css.NamesContainer}>
            <FiUser className={css.UserIcons} />
            <h2 className={css.Information}>Gender : {userInfo.gender}</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineHome className={css.UserIcons} />
            <h2 className={css.Information}>Address : {userInfo.address}</h2>
          </div>
          <div className={css.NamesContainer}>
            <AiOutlineCalendar className={css.UserIcons} />
            <h2 className={css.Information}>
              Date Of Birth: {userInfo.dateofcreation}
            </h2>
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

const mapStateToProps = (state) => ({
  userInfo: state.getDoctorReviews.userInfo,
});
export default connect(mapStateToProps, { getUserInfo })(UserProfile);
