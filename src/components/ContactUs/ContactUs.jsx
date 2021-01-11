import React, { useState } from "react";
import css from "../ContactUs/ContactUs.module.css";
import { Link } from "react-router-dom";

function ContactUs() {
  const [values, changeValues] = useState({
    firstname: ``,
    lastname: ``,
    email: ``,
    message: ``,
  });

  const [isSubmitted, changeSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    changeValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeSubmit((isSubmitted) => !isSubmitted);
  };

  return (
    <>
      <div className={css.FlexForImage}>
        <h1 className={css.Heading}>Contact Us</h1>
      </div>

      <div className={css.ContactUsContainer}>
        <p
          style={{
            margin: `0rem 3rem`,
          }}
        >
          Do you have a question, concern, idea, feedback, or problem? Take a
          look at our frequently asked questions for some quick answers. If you
          still need assistance, please fill out the form below and we'd be
          happy to help!
        </p>

        <div className={css.InnerFlexBox}>
          {isSubmitted ? ( 
            <div>
              <p style={{ fontSize: `1.3rem`, color: ` #02203c` }}>
                Thanks! We've received your submission and we'll get back to you
                shortly.
              </p>
              <Link to="/">
                <button className={css.FormButtons}>Continue</button>
              </Link>
            </div>
          ) : (
            <form>
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                  value={values.firstname}
                />
              </div>

              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  id="lastname"
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={values.lastname}
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
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="5"
                  onChange={handleChange}
                  value={values.message}
                ></textarea>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className={css.FormButtons}
              >
                Submit
              </button>
            </form>
          )}
          <div className={css.Address}>
            MoodPath
            <br /> 990 Villa Street, <br /> Mountain View, <br /> CA 94041
            <br />
            contact@moodpath.com
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
