import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../actions/getDoctorReviews";
import css from "../Login/Login.module.css";

const Login = ({ userLogin, isLoggedIn, loginFailed }) => {
  const [values, changeValues] = useState({
    email: ``,
    password: ``,
  });
  const history = useHistory();

  //ask how form is cleared, how to add required

  const handleChange = (e) => {
    const { name, value } = e.target;

    changeValues((values) => {
      return { ...values, [name]: value };
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (localStorage.getItem("token")) history.push("/userprofile");
      else alert("Login Failed");
    }
    if (loginFailed) alert("Wrong Credentials");
  }, [isLoggedIn, loginFailed]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //call here
    await userLogin(values);
  };

  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>Login</h1>
      </div>

      <div className={css.LoginContainer}>
        <p className={css.InformationMessage}>Log in to your account </p>
        <div className={css.InnerFlexBox}>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className={css.FormButtons}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  isLoggedIn: state.getDoctorReviews.isLoggedIn,
  loginFailed: state.getDoctorReviews.loginFailed,
});
export default connect(mapStateToProps, { userLogin })(Login);
