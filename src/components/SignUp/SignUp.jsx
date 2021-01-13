import React, { useState } from "react";
import css from "../SignUp/SignUp.module.css";

function SignUp() {
  const [values, changeValues] = useState({
    email: ``,
    password: ``,
    name: ``,
    phone: ``,
    gender: ``,
    address: ``,
    dateofcreation: ``,
  });

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
        <h1 className={css.Heading}>SignUp</h1>
      </div>

      <div className={css.SignUpContainer}>
        <p className={css.InformationMessage}>Sign up for a new account </p>
        <div className={css.InnerFlexBox}>
          <form>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </div>
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

            <div>
              <label htmlFor="phoneno">Phone Number</label>
              <input
                id="phoneno"
                type="number"
                name="phoneno"
                onChange={handleChange}
                value={values.phoneno}
              />
            </div>

            <div>
              <label htmlFor="gender">Gender</label>
              <input
                id="gender"
                type="text"
                name="gender"
                onChange={handleChange}
                value={values.gender}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                id="address"
                type="text"
                name="address"
                onChange={handleChange}
                value={values.address}
              />
            </div>
            <div>
              <label htmlFor="dateofcreation">Date Of Birth</label>
              <input
                id="dateofcreation"
                type="date"
                name="dateofcreation"
                onChange={handleChange}
                value={values.dateofcreation}
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

export default SignUp;
