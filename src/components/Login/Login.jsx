import React, { useState } from "react";
import css from "../Login/Login.module.css";

function Login() {
  const [values, changeValues] = useState({
    email: ``,
    password: ``,
  });

  //ask how form is cleared, how to add required

  const handleChange = (e) => {
    const { name, value } = e.target;

    changeValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //call here
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
}

export default Login;
